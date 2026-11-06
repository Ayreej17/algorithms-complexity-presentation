import { useState, useRef, useMemo } from 'react';
import { CheckCircle2, Activity, RotateCcw, Sparkles } from 'lucide-react';

export default function Slide5_InteractiveDemo() {
  const [targetSumStr, setTargetSumStr] = useState('25');
  const [numbersStr, setNumbersStr] = useState('8, 12, 3, 7, 2, 10, 5');
  
  const [mode, setMode] = useState('idle'); // idle, running_verify, done_verify, running_search, done_search
  const [userSelection, setUserSelection] = useState<number[]>([]);
  
  const [ops, setOps] = useState(0);
  const [currentTesting, setCurrentTesting] = useState<number[]>([]);
  const [currentSum, setCurrentSum] = useState(0);
  const [resultMsg, setResultMsg] = useState('');

  const intervalRef = useRef<any>(null);

  const targetSum = parseInt(targetSumStr) || 0;
  const numberArray = useMemo(() => {
    return numbersStr.split(',')
      .map(n => parseInt(n.trim()))
      .filter(n => !isNaN(n))
      .slice(0, 10);
  }, [numbersStr]);

  const toggleSelection = (index: number) => {
    if (mode !== 'idle') return;
    setUserSelection(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setMode('idle');
    setOps(0);
    setCurrentTesting([]);
    setCurrentSum(0);
    setResultMsg('');
  };

  const runVerification = () => {
    reset();
    setMode('running_verify');
    
    const selectedNums = userSelection.map(i => numberArray[i]);
    if (selectedNums.length === 0) {
      setResultMsg("No numbers selected! Choose items to form a certificate.");
      setMode('done_verify');
      return;
    }

    let i = 0;
    let runningSum = 0;
    
    intervalRef.current = setInterval(() => {
      if (i < selectedNums.length) {
        runningSum += selectedNums[i];
        setCurrentTesting(selectedNums.slice(0, i + 1));
        setCurrentSum(runningSum);
        setOps(prev => prev + 1);
        i++;
      } else {
        clearInterval(intervalRef.current);
        if (runningSum === targetSum) {
          setResultMsg("✓ VALID CERTIFICATE! Verified in linear O(N) operations.");
        } else {
          setResultMsg(`✕ INVALID CERTIFICATE: Sum is ${runningSum}, expected ${targetSum}.`);
        }
        setMode('done_verify');
      }
    }, 400);
  };

  const runBruteForce = () => {
    reset();
    setMode('running_search');
    
    const maxCombinations = Math.pow(2, numberArray.length);
    let currentCombo = 1;
    
    intervalRef.current = setInterval(() => {
      const subset = [];
      let tempSum = 0;
      
      for (let i = 0; i < numberArray.length; i++) {
        if ((currentCombo & (1 << i)) !== 0) {
          subset.push(numberArray[i]);
          tempSum += numberArray[i];
        }
      }
      
      setCurrentTesting(subset);
      setCurrentSum(tempSum);
      setOps(currentCombo);

      if (tempSum === targetSum) {
        clearInterval(intervalRef.current);
        setResultMsg(`🎉 Match Found after testing ${currentCombo} combinations!`);
        setMode('done_search');
        return;
      }

      currentCombo++;
      if (currentCombo >= maxCombinations) {
        clearInterval(intervalRef.current);
        setResultMsg("No combination matches the target sum.");
        setMode('done_search');
      }
    }, 60);
  };

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Live Interactive Lab
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Verification O(N) vs. Brute-Force Solving O(2ⁿ)
          </h2>
        </div>

        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Demo
        </button>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Left: Certificate Builder */}
        <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">Set Numbers:</label>
              <input
                type="text"
                value={numbersStr}
                onChange={e => setNumbersStr(e.target.value)}
                disabled={mode !== 'idle'}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 font-mono text-xs text-indigo-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">Target Sum:</label>
              <input
                type="text"
                value={targetSumStr}
                onChange={e => setTargetSumStr(e.target.value)}
                disabled={mode !== 'idle'}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 font-mono text-xs text-pink-300 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-white block mb-2">
              Select Numbers to form your "Certificate" (Proposed Answer):
            </label>
            <div className="flex flex-wrap gap-2">
              {numberArray.map((num, idx) => {
                const isSelected = userSelection.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => toggleSelection(idx)}
                    disabled={mode !== 'idle'}
                    className={`px-4 py-2 rounded-xl font-mono text-sm font-bold transition-all border ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={runVerification}
              disabled={mode.startsWith('running')}
              className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-emerald-600/30 disabled:opacity-40"
            >
              <CheckCircle2 className="w-4 h-4" /> VERIFY CERTIFICATE O(N)
            </button>
            <button
              onClick={runBruteForce}
              disabled={mode.startsWith('running')}
              className="py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-rose-600/30 disabled:opacity-40"
            >
              <Activity className="w-4 h-4" /> BLIND SEARCH O(2ⁿ)
            </button>
          </div>
        </div>

        {/* Right: Live Monitor */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white uppercase tracking-wider">Operation Monitor</span>
              <span className="font-mono text-xs bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 text-indigo-300">
                Ops Executed: <strong className="text-white">{ops}</strong>
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Currently Evaluating:</span>
                <span className="text-indigo-300 font-bold">
                  {currentTesting.length > 0 ? `[${currentTesting.join(', ')}]` : 'None'}
                </span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Running Sum:</span>
                <span className={`font-black text-sm ${currentSum === targetSum ? 'text-emerald-400' : 'text-slate-200'}`}>
                  {currentSum} / {targetSum}
                </span>
              </div>
            </div>

            {resultMsg && (
              <div
                className={`p-3 rounded-xl border text-xs font-bold ${
                  resultMsg.includes('VALID') || resultMsg.includes('Match')
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
                }`}
              >
                {resultMsg}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

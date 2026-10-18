import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CheckCircle2, Activity } from 'lucide-react';

export default function Slide4_InteractiveDemo() {
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
      setResultMsg("No numbers selected!");
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
          setResultMsg("Valid Certificate! Match Found.");
        } else {
          setResultMsg("Invalid Certificate. No Match.");
        }
        setMode('done_verify');
      }
    }, 600);
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
        setResultMsg("Match Found via Search!");
        setMode('done_search');
      } else if (currentCombo >= maxCombinations - 1) {
        clearInterval(intervalRef.current);
        setResultMsg("Checked all. No Match Found.");
        setMode('done_search');
      }
      
      currentCombo++;
    }, 50);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto w-full pt-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Interactive Subset Sum Simulation</h2>
        <p className="text-slate-400">Can a subset of these numbers add up exactly to the target?</p>
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl flex flex-col relative overflow-hidden h-full">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 pb-6 border-b border-slate-800">
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Target Sum</label>
              <input 
                type="number" 
                value={targetSumStr} 
                onChange={(e) => setTargetSumStr(e.target.value)}
                disabled={mode !== 'idle'}
                className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-indigo-400 font-bold w-full disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Numbers List (Max 10)</label>
              <input 
                type="text" 
                value={numbersStr} 
                onChange={(e) => setNumbersStr(e.target.value)}
                disabled={mode !== 'idle'}
                className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-300 w-full disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-3">
             <button 
                onClick={runVerification}
                disabled={mode !== 'idle'}
                className="flex items-center justify-center px-4 py-3 bg-emerald-600/20 text-emerald-400 border border-emerald-500/50 rounded-xl hover:bg-emerald-600/30 transition-all font-semibold disabled:opacity-50"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" /> 1. Verify Selected O(N)
              </button>
              <button 
                onClick={runBruteForce}
                disabled={mode !== 'idle'}
                className="flex items-center justify-center px-4 py-3 bg-rose-600/20 text-rose-400 border border-rose-500/50 rounded-xl hover:bg-rose-600/30 transition-all font-semibold disabled:opacity-50"
              >
                <Activity className="w-5 h-5 mr-2" /> 2. Brute Force Search O(2^N)
              </button>
              {mode !== 'idle' && (
                <button onClick={reset} className="text-slate-400 hover:text-white text-sm underline pt-2">Reset</button>
              )}
          </div>
        </div>

        {/* Visualization */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full mb-8">
            <h4 className="text-center text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">
              {mode === 'idle' ? "Select numbers to build a Certificate:" : "Data Set"}
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {numberArray.map((num, idx) => {
                const isSelected = userSelection.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => toggleSelection(idx)}
                    disabled={mode !== 'idle'}
                    className={`px-4 py-2 rounded-lg font-mono text-lg font-bold border transition-all ${
                      isSelected 
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    } ${mode !== 'idle' ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 inline-block mr-1 -mt-1" />}
                    {num}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="w-full bg-slate-950 rounded-xl border border-slate-800 p-6 flex items-center justify-between min-h-[160px]">
            <div className="flex-1">
              <div className="text-sm text-slate-500 mb-1">Testing Subset</div>
              <div className="text-2xl font-mono text-slate-200">
                [{currentTesting.join(', ')}]
              </div>
              <div className="mt-4 text-sm text-slate-500 mb-1">Current Sum</div>
              <div className={`text-3xl font-mono font-bold ${currentSum === targetSum ? 'text-emerald-400' : 'text-slate-100'}`}>
                {currentSum} <span className="text-lg text-slate-500 font-normal">/ {targetSum}</span>
              </div>
            </div>
            
            <div className="w-px h-24 bg-slate-800 mx-6"></div>

            <div className="flex-1 text-center">
              <div className="text-sm text-slate-500 mb-1">Operations (Complexity)</div>
              <div className={`text-5xl font-mono font-bold ${mode.includes('verify') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {ops}
              </div>
            </div>
          </div>

          {(mode.includes('done')) && (
            <div className={`mt-6 px-6 py-3 rounded-xl font-bold text-lg ${
              resultMsg.includes('Match') ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
            }`}>
              {resultMsg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
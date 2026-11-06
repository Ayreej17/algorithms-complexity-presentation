import { useState, useMemo } from 'react';
import { Target, ArrowUpDown, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Slide5_InteractiveSubsetSum() {
  const [inputNums, setInputNums] = useState<string>('3, 8, 12, 15, 20, 25');
  const [targetStr, setTargetStr] = useState<string>('35');
  const [useSorting, setUseSorting] = useState<boolean>(true);

  // Parsing
  const numbers = useMemo(() => {
    const parsed = inputNums
      .split(',')
      .map(s => parseInt(s.trim()))
      .filter(n => !isNaN(n) && n > 0)
      .slice(0, 10);
    return useSorting ? [...parsed].sort((a, b) => a - b) : parsed;
  }, [inputNums, useSorting]);

  const target = parseInt(targetStr) || 0;

  // Run backtracking simulation
  const results = useMemo(() => {
    let callCount = 0;
    let prunedCount = 0;
    const solutions: number[][] = [];
    const totalCombos = Math.pow(2, numbers.length);

    const remSumArray: number[] = new Array(numbers.length).fill(0);
    let running = 0;
    for (let i = numbers.length - 1; i >= 0; i--) {
      running += numbers[i];
      remSumArray[i] = running;
    }

    const backtrack = (idx: number, currSum: number, path: number[]) => {
      callCount++;
      if (currSum === target) {
        solutions.push([...path]);
        return;
      }

      for (let i = idx; i < numbers.length; i++) {
        const nextNum = numbers[i];

        // Bound 1: Over-sum
        if (currSum + nextNum > target) {
          prunedCount++;
          if (useSorting) {
            // Since sorted, all subsequent will also exceed
            prunedCount += (numbers.length - 1 - i);
            break;
          }
          continue;
        }

        // Bound 2: Remaining sum
        const remaining = i + 1 < numbers.length ? remSumArray[i + 1] : 0;
        if (currSum + nextNum + remaining < target) {
          prunedCount++;
          continue;
        }

        // Choose, Explore, Undo
        path.push(nextNum);
        backtrack(i + 1, currSum + nextNum, path);
        path.pop();
      }
    };

    if (numbers.length > 0 && target > 0) {
      backtrack(0, 0, []);
    }

    const efficiency = totalCombos > 0 ? Math.round(((totalCombos - callCount) / totalCombos) * 100) : 0;

    return {
      solutions,
      callCount,
      prunedCount,
      totalCombos,
      efficiency: Math.max(0, efficiency),
    };
  }, [numbers, target, useSorting]);

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Live Interactive Solver
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Subset Sum Bounded Solver
          </h2>
        </div>

        <button
          onClick={() => setUseSorting(!useSorting)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
            useSorting
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
              : 'bg-slate-800 text-slate-400 border-slate-700'
          }`}
        >
          <ArrowUpDown className="w-3.5 h-3.5" />
          {useSorting ? 'Pre-Sorting: ENABLED' : 'Pre-Sorting: DISABLED'}
        </button>
      </div>

      {/* Input Form */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl mb-6 grid sm:grid-cols-12 gap-4 items-end">
        <div className="sm:col-span-8 space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Numbers Set (Max 10):</label>
          <input
            type="text"
            value={inputNums}
            onChange={(e) => setInputNums(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 font-mono text-sm text-indigo-300 focus:outline-none focus:border-indigo-500"
            placeholder="e.g. 3, 8, 12, 15, 20"
          />
        </div>

        <div className="sm:col-span-4 space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Target Sum (W):</label>
          <input
            type="number"
            value={targetStr}
            onChange={(e) => setTargetStr(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 font-mono text-sm text-pink-300 focus:outline-none focus:border-pink-500"
            placeholder="e.g. 35"
          />
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Brute-Force Power Set</span>
          <span className="text-xl font-black font-mono text-rose-400">{results.totalCombos.toLocaleString()}</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">2^{numbers.length} combinations</span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Backtracking Calls</span>
          <span className="text-xl font-black font-mono text-emerald-400">{results.callCount}</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">Nodes visited</span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Pruned Branches</span>
          <span className="text-xl font-black font-mono text-amber-400">{results.prunedCount}</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">Subtrees aborted</span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Search Saved</span>
          <span className="text-xl font-black font-mono text-cyan-400">{results.efficiency}%</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">Compute reduced</span>
        </div>
      </div>

      {/* Solutions Display */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white text-sm">Discovered Subsets Matching Target {target}</h3>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-bold">
            {results.solutions.length} Solution(s)
          </span>
        </div>

        {results.solutions.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm italic">
            No subset sums up to exactly {target}.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {results.solutions.map((sol, i) => (
              <div key={i} className="bg-slate-950 p-3.5 rounded-xl border border-indigo-500/30 flex items-center justify-between">
                <span className="text-xs text-indigo-300 font-mono font-bold">
                  &#123;{sol.join(', ')}&#125;
                </span>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ∑ = {target}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

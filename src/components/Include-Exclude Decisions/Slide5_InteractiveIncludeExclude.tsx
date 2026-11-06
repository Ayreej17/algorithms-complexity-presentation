import { useState } from 'react';
import { CheckSquare, XSquare, RotateCcw, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

interface KnapsackItem {
  name: string;
  weight: number;
  value: number;
}

export default function Slide5_InteractiveIncludeExclude() {
  const items: KnapsackItem[] = [
    { name: 'Laptop', weight: 4, value: 30 },
    { name: 'Camera', weight: 6, value: 45 },
    { name: 'Drone', weight: 8, value: 60 },
    { name: 'Books', weight: 10, value: 40 },
    { name: 'Monitor', weight: 12, value: 75 },
  ];

  const maxCapacity = 20;

  // Decision vector: 1 for include, 0 for exclude, -1 for undecided
  const [decisions, setDecisions] = useState<number[]>([-1, -1, -1, -1, -1]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDecision = (choice: 1 | 0) => {
    if (currentIndex >= items.length) return;
    const newDec = [...decisions];
    newDec[currentIndex] = choice;
    setDecisions(newDec);
    setCurrentIndex(currentIndex + 1);
  };

  const handleReset = () => {
    setDecisions([-1, -1, -1, -1, -1]);
    setCurrentIndex(0);
  };

  // Compute accumulated stats
  let totalWeight = 0;
  let totalValue = 0;
  const chosenItems: KnapsackItem[] = [];

  decisions.forEach((dec, idx) => {
    if (dec === 1) {
      totalWeight += items[idx].weight;
      totalValue += items[idx].value;
      chosenItems.push(items[idx]);
    }
  });

  const isOverweight = totalWeight > maxCapacity;
  const isComplete = currentIndex === items.length;

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Live Interactive Decision Lab
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Binary Include/Exclude Decision Stepper
          </h2>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Decisions
        </button>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Left: Items Carousel / Stepper */}
        <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <span className="font-bold text-white uppercase tracking-wider">Candidate Item Tray</span>
            <span className="font-mono text-indigo-300">
              Stage: {Math.min(currentIndex + 1, items.length)} of {items.length}
            </span>
          </div>

          <div className="space-y-2.5">
            {items.map((item, idx) => {
              const decision = decisions[idx];
              const isCurrent = idx === currentIndex;

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-indigo-950/40 border-indigo-500 shadow-md shadow-indigo-500/20 scale-[1.01]'
                      : decision === 1
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                      : decision === 0
                      ? 'bg-rose-950/20 border-rose-500/40 text-rose-300 opacity-60'
                      : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs flex items-center justify-center font-bold">
                      {idx}
                    </span>
                    <div>
                      <span className="font-bold text-sm text-white block">{item.name}</span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Weight: {item.weight}kg | Value: ${item.value}
                      </span>
                    </div>
                  </div>

                  {/* Decision Tag */}
                  <div>
                    {decision === 1 && (
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/40">
                        1 (INCLUDED)
                      </span>
                    )}
                    {decision === 0 && (
                      <span className="px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 text-xs font-mono font-bold border border-rose-500/40">
                        0 (EXCLUDED)
                      </span>
                    )}
                    {decision === -1 && isCurrent && (
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold animate-pulse">
                        DECIDE NOW
                      </span>
                    )}
                    {decision === -1 && !isCurrent && (
                      <span className="text-xs text-slate-600 font-mono">Pending</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decision Buttons */}
          {!isComplete ? (
            <div className="pt-2 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleDecision(1)}
                className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-xs transition-all shadow-lg shadow-emerald-600/30"
              >
                <CheckSquare className="w-4 h-4" /> [1] INCLUDE ITEM
              </button>
              <button
                onClick={() => handleDecision(0)}
                className="py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-xs transition-all shadow-lg shadow-rose-600/30"
              >
                <XSquare className="w-4 h-4" /> [0] EXCLUDE ITEM
              </button>
            </div>
          ) : (
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center text-xs text-emerald-400 font-bold">
              ✓ All 5 stages evaluated! Review candidate vector.
            </div>
          )}
        </div>

        {/* Right: Live Vector & Knapsack Capacity */}
        <div className="md:col-span-5 space-y-4">
          {/* Bitmask Vector */}
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block mb-2">
              Binary Solution Vector x
            </span>
            <div className="flex items-center gap-2 font-mono text-lg bg-slate-950 p-3 rounded-xl border border-slate-800 justify-center">
              <span>[</span>
              {decisions.map((d, i) => (
                <span
                  key={i}
                  className={`font-black ${
                    d === 1 ? 'text-emerald-400' : d === 0 ? 'text-rose-400' : 'text-slate-600'
                  }`}
                >
                  {d === -1 ? '?' : d}
                  {i < decisions.length - 1 ? ',' : ''}
                </span>
              ))}
              <span>]</span>
            </div>
          </div>

          {/* Capacity & Weight Gauge */}
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">Knapsack Capacity Gauge:</span>
              <span className={`font-mono font-bold ${isOverweight ? 'text-rose-400' : 'text-emerald-400'}`}>
                {totalWeight}kg / {maxCapacity}kg
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800">
              <div
                className={`h-full transition-all duration-300 ${
                  isOverweight ? 'bg-rose-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${Math.min((totalWeight / maxCapacity) * 100, 100)}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-slate-400 pt-1">
              <span>Accumulated Value:</span>
              <span className="font-mono text-cyan-300 font-bold">${totalValue}</span>
            </div>

            {isOverweight && (
              <div className="bg-rose-950/30 border border-rose-500/40 p-2.5 rounded-xl flex items-center gap-2 text-xs text-rose-300">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span><strong>Overweight!</strong> Pruning condition triggers here in Backtracking.</span>
              </div>
            )}

            {!isOverweight && isComplete && (
              <div className="bg-emerald-950/30 border border-emerald-500/40 p-2.5 rounded-xl flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span><strong>Valid Feasible Candidate!</strong> Weight is within the 20kg limit.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

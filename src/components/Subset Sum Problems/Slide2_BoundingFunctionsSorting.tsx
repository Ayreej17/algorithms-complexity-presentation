import { Scissors, ArrowUpDown, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Slide2_BoundingFunctionsSorting() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Bounding Functions & The Power of Sorting
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          How two mathematical bounding conditions and pre-sorting eliminate 95%+ of calculations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Bound 1: Over-sum */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 pb-2 border-b border-slate-800">
            <ShieldAlert className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Bounding Condition 1: Over-Sum Exceeded</h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Since all elements are positive, adding an element can only increase the accumulated sum.
          </p>

          <div className="bg-slate-950 p-3 rounded-xl border border-rose-500/30 text-xs font-mono text-rose-300">
            if (current_sum + w[i] &gt; target):<br />
            &nbsp;&nbsp;return  # PRUNE BRANCH IMMEDIATELY
          </div>

          <p className="text-[11px] text-slate-400">
            If current sum is 20, target is 25, and next number is 30, the branch dies instantly. Never explore children!
          </p>
        </div>

        {/* Bound 2: Remaining Sum Insufficient */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 pb-2 border-b border-slate-800">
            <Scissors className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Bounding Condition 2: Remaining Sum Ceiling</h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Even if we take <strong>all remaining numbers</strong> in the array, is it mathematically possible to reach the target?
          </p>

          <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/30 text-xs font-mono text-amber-300">
            if (current_sum + remaining_sum &lt; target):<br />
            &nbsp;&nbsp;return  # UNREACHABLE: PRUNE ENTIRE SUBTREE
          </div>

          <p className="text-[11px] text-slate-400">
            If current sum is 10, target is 50, but all remaining array items sum to only 15 (10 + 15 = 25 &lt; 50), abort branch now!
          </p>
        </div>
      </div>

      {/* The Crucial Power of Pre-Sorting */}
      <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-indigo-950/40 border border-indigo-500/30 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 flex-shrink-0">
            <ArrowUpDown className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-1">Why Sort the Array First?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              If elements are sorted in ascending order <code className="text-indigo-300 font-mono">[2, 5, 8, 12, 19]</code>, the moment adding <code className="text-indigo-300 font-mono">w[i]</code> exceeds target, we know <em>all subsequent elements</em> will also exceed target! We can break the entire loop instead of checking remaining siblings.
            </p>
          </div>
        </div>

        <div className="bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400 whitespace-nowrap">
          <CheckCircle2 className="w-4 h-4" />
          <span>Sorting Cost: O(N log N) → Pruning Gain: Astronomical</span>
        </div>
      </div>
    </div>
  );
}


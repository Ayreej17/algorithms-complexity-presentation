import { ThumbsUp, ThumbsDown, Target } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <Target className="w-4 h-4 text-indigo-400" /> ALGORITHM TRADEOFFS
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pros & Cons: Backtracking for Subset Sum
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Comparing Backtracking against Dynamic Programming and Meet-in-the-Middle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Pros */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsUp className="w-5 h-5" /> PROS / ADVANTAGES
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Exceptional Space Efficiency:</strong>
              Requires only <code className="text-emerald-300 font-mono">O(N)</code> memory on the recursion stack. Dynamic Programming requires a table of size <code className="text-rose-300 font-mono">O(N · W)</code>, which runs out of memory if <code className="text-rose-300 font-mono">W = 10¹²</code>.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Aggressive Pruning via Sorting:</strong>
              Sorting turns loose exponential checks into rapid early exits. Practical runtime for <code className="text-emerald-300 font-mono">N ≤ 40</code> is often sub-second.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Outputs All Solutions:</strong>
              Can naturally enumerate every distinct valid subset rather than just a binary flag.
            </li>
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsDown className="w-5 h-5" /> CONS / DISADVANTAGES
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Exponential Worst-Case Intractability:</strong>
              Worst-case runtime remains <code className="text-rose-300 font-mono">O(2ⁿ)</code>. Pathological inputs where no branch can be pruned will freeze the computer.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Inferior to DP for Small Targets:</strong>
              When <code className="text-amber-300 font-mono">W</code> is small (e.g. <code className="text-amber-300 font-mono">W ≤ 1,000</code>), pseudo-polynomial Dynamic Programming <code className="text-amber-300 font-mono">O(N · W)</code> is dramatically faster and deterministic.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">No Intermediate Caching:</strong>
              If multiple distinct paths arrive at the exact same remaining target with identical remaining elements, standard backtracking recomputes from scratch.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


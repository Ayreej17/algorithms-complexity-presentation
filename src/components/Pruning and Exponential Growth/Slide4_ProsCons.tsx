import { ThumbsUp, ThumbsDown, Scissors } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <Scissors className="w-4 h-4 text-indigo-400" /> TECHNIQUE EVALUATION
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pros & Cons of Algorithmic Pruning
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The enormous computing gains and engineering pitfalls of pruning exponential search trees.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pros */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsUp className="w-5 h-5" /> PROS / ADVANTAGES
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Transforms Intractable into Solvable:</strong>
              Converts problems that would run for millennia into tasks completed in a few seconds on a consumer laptop.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Preserves Absolute Exactness:</strong>
              Unlike randomized heuristics or genetic algorithms, a properly bounded pruning algorithm is <strong>100% mathematically exact</strong>; no optimal solution is ever missed.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Cascading Efficiency:</strong>
              Pruning early near the root cuts hundreds of millions of downstream states with a single boolean evaluation.
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
              <strong className="text-white block mb-0.5">Worst-Case Asymptotics Remain O(2ⁿ):</strong>
              On adversarial or pathological inputs where constraints never fire until the leaves, runtime completely reverts to brute-force exponential explosion.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Bounding Overhead Trap:</strong>
              If the bounding test itself is computationally heavy (e.g. solving another linear program), computing the bound can take longer than simply visiting the children.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Over-Pruning Correctness Bugs:</strong>
              A flawed inequality in a bounding condition can inadvertently prune the sole true optimal solution, producing subtly incorrect results.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


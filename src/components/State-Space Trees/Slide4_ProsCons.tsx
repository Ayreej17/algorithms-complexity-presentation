import { ThumbsUp, ThumbsDown, Network } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <Network className="w-4 h-4 text-indigo-400" /> MODEL APPRAISAL
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pros & Cons of State-Space Trees
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The theoretical benefits and computational boundaries of tree modeling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Advantages */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsUp className="w-5 h-5" /> ADVANTAGES & PROS
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Rigorous Visualization:</strong>
              Transforms abstract recursive backtracking into an intuitive, observable geometric map of choices.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Formal Complexity Quantization:</strong>
              Allows precise calculation of search space bounds by measuring tree depth <code className="text-emerald-300 font-mono">d</code> and branching factor <code className="text-emerald-300 font-mono">b</code>.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Clear Pruning Metrics:</strong>
              Clearly demarcates live subtrees from dead branches, making bounding function performance quantifiable.
            </li>
          </ul>
        </div>

        {/* Disadvantages */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsDown className="w-5 h-5" /> DISADVANTAGES & CONS
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Exponential Size Hazard:</strong>
              Cannot be explicitly instantiated into physical memory due to <code className="text-rose-300 font-mono">O(bᵈ)</code> combinatorial explosion.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Redundant Subproblems:</strong>
              Standard state-space trees can visit identical partial states repeatedly unless augmented with dynamic programming / memoization tables.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Branch Order Sensitivity:</strong>
              The physical layout and choice ordering determines whether solutions are encountered in milliseconds or centuries.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


import { ThumbsUp, ThumbsDown, Binary } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <Binary className="w-4 h-4 text-indigo-400" /> MODEL TRADE-OFFS
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pros & Cons of Include/Exclude Branching
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Weighing structural simplicity against branching performance.
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
              <strong className="text-white block mb-0.5">Symmetric Binary Symmetry:</strong>
              The decision structure is perfectly uniform. Exactly two choices per node makes proving correctness and termination straightforward.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Direct Hardware Bitwise Mapping:</strong>
              Can be mapped directly onto 64-bit CPU registers using bit-shifting operations, enabling SIMD parallelization.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Clean State Management:</strong>
              No need for a dynamic loop over choices; exactly two recursive calls are written explicitly in code.
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
              <strong className="text-white block mb-0.5">Strict 2ⁿ Tree Explosion:</strong>
              Unlike variable-degree trees that might collapse quickly, binary trees have a deep, uniform structure of depth <code className="text-rose-300 font-mono">N</code>.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Order of Branching Critical:</strong>
              Choosing whether to branch <em>Include-first</em> vs <em>Exclude-first</em> dramatically alters when the first valid solution is discovered.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


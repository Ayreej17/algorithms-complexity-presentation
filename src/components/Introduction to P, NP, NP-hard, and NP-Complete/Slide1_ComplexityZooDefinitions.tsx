import { Compass } from 'lucide-react';

export default function Slide1_ComplexityZooDefinitions() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs mb-2 border border-indigo-500/30">
          <Compass className="w-4 h-4" /> THE COMPLEXITY ZOO
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          P, NP, NP-Hard & NP-Complete
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          The four foundational complexity classes categorizing all computational hardness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Class P */}
        <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-5 hover:border-blue-500/60 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-black text-blue-400 font-mono">Class P</span>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono font-bold">Solvable</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Problems solvable by a deterministic algorithm in <strong>polynomial time O(nᵏ)</strong>. Considered efficiently tractable.
            </p>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-blue-300 font-mono">
            Sorting, BFS/DFS, Dijkstra, Matrix Mult
          </div>
        </div>

        {/* Class NP */}
        <div className="bg-slate-900/90 border border-teal-500/30 rounded-2xl p-5 hover:border-teal-500/60 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-black text-teal-400 font-mono">Class NP</span>
              <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono font-bold">Verifiable</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Decision problems whose YES answers have a certificate checkable in <strong>polynomial time O(nᵏ)</strong>.
            </p>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-teal-300 font-mono">
            Sudoku, Factoring, Graph Coloring
          </div>
        </div>

        {/* Class NP-Complete */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-5 hover:border-rose-500/60 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-black text-rose-400 font-mono">NP-Complete</span>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono font-bold">Hardest in NP</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              The hardest problems in NP (intersection of NP and NP-Hard). If <em>any single</em> NP-Complete problem is solved in P, then P = NP!
            </p>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-rose-300 font-mono">
            3-SAT, Subset Sum, TSP Decision, Clique
          </div>
        </div>

        {/* Class NP-Hard */}
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-5 hover:border-purple-500/60 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-black text-purple-400 font-mono">NP-Hard</span>
              <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono font-bold">At Least as Hard</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Problems at least as hard as the hardest problems in NP. Does <strong>not</strong> need to be verifiable in polynomial time (can be undecidable!).
            </p>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-purple-300 font-mono">
            TSP Optimization, Halting Problem
          </div>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-slate-200">The Golden Theorem:</span>
        <span className="font-mono text-indigo-300">
          NP-Complete = NP ∩ NP-Hard. Solving one solves them all!
        </span>
      </div>
    </div>
  );
}

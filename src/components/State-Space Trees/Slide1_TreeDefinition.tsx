import { Network, GitBranch, Cpu } from 'lucide-react';

export default function Slide1_TreeDefinition() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs mb-2 border border-indigo-500/30">
          <Network className="w-4 h-4" /> ABSTRACT DATA REPRESENTATION
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          State-Space Trees
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          The geometric tree structure modeling all potential decisions in a combinatorial search.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Definition & Structural Anatomy */}
        <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 border-b border-slate-800 pb-2">
            <GitBranch className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">Definition & Tree Anatomy</h2>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-indigo-300">State-Space Tree: </strong>
            A directed rooted tree where every node represents a problem state (partial or full candidate), every branch represents an incremental decision, and leaves represent terminal solution candidates or dead ends.
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">R</span>
              <div>
                <strong className="text-white">Root Node: </strong>
                The initial state before any decisions or selections are made (empty assignment).
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">I</span>
              <div>
                <strong className="text-white">Internal Nodes: </strong>
                Intermediate decision points representing partial solution candidates.
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">L</span>
              <div>
                <strong className="text-white">Leaf Nodes: </strong>
                Terminal endpoints; either valid solutions or dead ends where no valid moves exist.
              </div>
            </div>
          </div>
        </div>

        {/* Virtual vs Physical Tree */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2">
            <Cpu className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">Implicit vs. Explicit Trees</h2>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            A crucial insight in algorithmic design is that state-space trees are <strong>never stored in RAM</strong>. Generating all <span className="text-rose-400 font-mono">2⁴⁰</span> nodes explicitly would crash any supercomputer.
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
              <div>
                <span className="font-bold text-white">Implicit / Virtual Tree:</span>
                <p className="text-slate-400 mt-0.5">The tree exists purely as a conceptual trace of the recursive call stack. Nodes are generated on the fly as function calls and destroyed upon return.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
              <div>
                <span className="font-bold text-white">Depth-First Traversal (DFS):</span>
                <p className="text-slate-400 mt-0.5">Backtracking systematically traverses the implicit state-space tree depth-first, only holding the current branch path in memory.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-slate-200">Fundamental Formula:</span>
        <span className="font-mono text-indigo-300">
          Max Potential Nodes = (bᵈ⁺¹ - 1) / (b - 1) ≈ O(bᵈ) where b = branching factor, d = depth.
        </span>
      </div>
    </div>
  );
}

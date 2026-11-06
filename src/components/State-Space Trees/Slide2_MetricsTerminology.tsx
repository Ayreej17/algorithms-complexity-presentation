import { GitCommit, Activity, Hash, Layers } from 'lucide-react';

export default function Slide2_MetricsTerminology() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          State-Space Tree Metrics & Node Taxonomy
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Formal classifications of nodes and quantitative properties of search trees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {/* Metric 1: Depth (d) */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 text-indigo-400">
            <Layers className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Tree Depth (d)</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Corresponds to the number of decision stages. For an <span className="font-mono text-indigo-300">N</span>-variable problem, tree depth is exactly <span className="font-mono text-indigo-300">N</span>.
          </p>
          <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
            Call Stack Depth = O(d)
          </div>
        </div>

        {/* Metric 2: Branching Factor (b) */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 text-purple-400">
            <Hash className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Branching Factor (b)</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            The average number of children spawned by each node. For binary include/exclude, <span className="font-mono text-purple-300">b = 2</span>. For N-Queens, <span className="font-mono text-purple-300">b = N</span>.
          </p>
          <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
            Leaves Count = O(bᵈ)
          </div>
        </div>

        {/* Metric 3: Traversal Dynamics */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 text-emerald-400">
            <Activity className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">DFS Traversal</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Backtracking searches the tree in Depth-First order (LIFO). It plunges straight down to leaves before backtracking to explore siblings.
          </p>
          <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
            Time: O(bᵈ) | Space: O(d)
          </div>
        </div>
      </div>

      {/* The 3 Fundamental Node Types */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <GitCommit className="w-5 h-5 text-indigo-400" />
          The Three Operational Node Classifications
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-cyan-400 text-sm">E-Node (Expansion)</span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">Active</span>
            </div>
            <p className="text-xs text-slate-300">
              The single active node currently being expanded; its children are being systematically generated right now.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-emerald-400 text-sm">Live Node</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Pending</span>
            </div>
            <p className="text-xs text-slate-300">
              A node that has been generated, passed initial feasibility bounds, but whose children have not yet been fully investigated.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-rose-400 text-sm">Dead Node</span>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono">Terminated</span>
            </div>
            <p className="text-xs text-slate-300">
              A generated node that cannot be expanded further—either because it violates constraints, hits a dead end, or has all children finished.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


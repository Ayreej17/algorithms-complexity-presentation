import { Binary, CheckSquare, XSquare, Package } from 'lucide-react';

export default function Slide1_BinaryChoiceModel() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs mb-2 border border-indigo-500/30">
          <Binary className="w-4 h-4" /> BINARY SELECTION PARADIGM
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Include/Exclude Decisions
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          The fundamental 0/1 binary choice model driving combinatorial subset selection.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Branch 1: INCLUDE */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">INCLUDE (xᵢ = 1)</h2>
              <span className="text-xs text-emerald-400 font-mono">Accept Decision</span>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <p className="leading-relaxed">
              The item <code className="text-emerald-300 font-mono font-bold">w[i]</code> is chosen into the candidate subset. Its weight/value is accumulated into the running state.
            </p>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono space-y-1 text-slate-400">
              <div className="text-emerald-400">current_sum += w[i]</div>
              <div>subset.append(w[i])</div>
              <div className="text-cyan-400">recurse(index + 1)</div>
            </div>

            <p className="text-slate-400">
              Downstream consequence: Moves closer to the target sum, but consumes remaining capacity.
            </p>
          </div>
        </div>

        {/* Branch 2: EXCLUDE */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-rose-500/20 rounded-xl text-rose-400">
              <XSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">EXCLUDE (xᵢ = 0)</h2>
              <span className="text-xs text-rose-400 font-mono">Reject Decision</span>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <p className="leading-relaxed">
              The item <code className="text-rose-300 font-mono font-bold">w[i]</code> is bypassed. The algorithm moves forward without accumulating its weight.
            </p>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono space-y-1 text-slate-400">
              <div className="text-rose-400">current_sum remains unchanged</div>
              <div>subset unchanged</div>
              <div className="text-cyan-400">recurse(index + 1)</div>
            </div>

            <p className="text-slate-400">
              Downstream consequence: Capacity is preserved, but fewer numbers remain to reach the target sum.
            </p>
          </div>
        </div>
      </div>

      {/* Universal Breadth Callout */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <Package className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <span>
            <strong>Universal Formulation:</strong> 0/1 Knapsack, Subset Sum, Partition Problem, and Boolean Satisfiability (SAT True/False) all reduce identically to this exact binary choice formulation.
          </span>
        </div>
      </div>
    </div>
  );
}

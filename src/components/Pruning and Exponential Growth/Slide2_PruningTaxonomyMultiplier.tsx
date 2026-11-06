import { Scissors, ShieldCheck, Award, EyeOff } from 'lucide-react';

export default function Slide2_PruningTaxonomyMultiplier() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pruning Strategies & The Cutoff Multiplier
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The three primary pruning methodologies and the exponential math of cutting branches early.
        </p>
      </div>

      {/* The 3 Pruning Types */}
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 text-rose-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Feasibility Pruning</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Truncates the branch when a partial candidate violates a fundamental constraint (e.g. queens attacking, sum exceeding target).
          </p>
          <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] font-mono text-rose-300">
            sum &gt; target → Abort
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 text-amber-400">
            <Award className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Optimality Pruning</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            (Branch & Bound) Truncates branch when even the most optimistic completion cannot beat the best score found so far.
          </p>
          <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] font-mono text-amber-300">
            partial_cost ≥ best_cost → Abort
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 text-purple-400">
            <EyeOff className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Symmetry Breaking</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Identifies mirror, rotated, or isomorphic configurations and only explores one representative canonical branch.
          </p>
          <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] font-mono text-purple-300">
            board_reflection == True → Skip
          </div>
        </div>
      </div>

      {/* The Cutoff Multiplier */}
      <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-indigo-400">
            <Scissors className="w-5 h-5" />
            <h3 className="text-base font-bold text-white">The Cutoff Multiplier Law</h3>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Operations Saved = 2ⁿ⁻ᵏ
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          In a binary tree of total depth <span className="text-white font-mono">n</span>, when a pruning condition fires at depth <span className="text-white font-mono">k</span>, the number of leaf evaluations instantly eliminated is:
        </p>

        <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
            <span className="text-slate-500 block mb-1">Prune at Depth k = 1</span>
            <span className="text-emerald-400 font-bold text-sm">2ⁿ⁻¹ = 50%</span>
            <span className="text-[10px] text-slate-500 block mt-1">Half of entire universe eliminated!</span>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
            <span className="text-slate-500 block mb-1">Prune at Depth k = 2</span>
            <span className="text-teal-400 font-bold text-sm">2ⁿ⁻² = 25%</span>
            <span className="text-[10px] text-slate-500 block mt-1">One quarter of universe cut</span>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
            <span className="text-slate-500 block mb-1">Depth 2 in n = 30 Tree</span>
            <span className="text-cyan-400 font-bold text-sm">268,435,456</span>
            <span className="text-[10px] text-slate-500 block mt-1">Over 268 Million nodes saved!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

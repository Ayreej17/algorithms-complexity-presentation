import { ThumbsUp, ThumbsDown, GitCompare } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <GitCompare className="w-4 h-4 text-indigo-400" /> COMPARATIVE ANALYSIS
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pros & Cons: Brute-Force vs. Backtracking
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          When to use exhaustive search and when backtracking is indispensable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Brute Force Pros & Cons */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-lg font-bold text-rose-400 border-b border-slate-800 pb-2">
            Brute-Force Search
          </h3>

          <div className="space-y-3">
            <div className="bg-emerald-950/20 border border-emerald-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-2">
                <ThumbsUp className="w-4 h-4" /> PROS / ADVANTAGES
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Conceptual Simplicity:</strong> Trivial to write; requires zero knowledge of problem constraints or heuristics.</li>
                <li><strong className="text-white">Generality:</strong> Works on black-box functions and cryptographic checks where intermediate hints are nonexistent.</li>
                <li><strong className="text-white">Baseline Benchmark:</strong> Serves as the ground truth to test optimized algorithm outputs against.</li>
              </ul>
            </div>

            <div className="bg-rose-950/20 border border-rose-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-2">
                <ThumbsDown className="w-4 h-4" /> CONS / DISADVANTAGES
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Severe Intractability:</strong> Time complexity blows up exponentially (<code className="text-rose-300">O(2ⁿ)</code>, <code className="text-rose-300">O(n!)</code>).</li>
                <li><strong className="text-white">Extremely Wasteful:</strong> Continues computing thousands of permutations after an obvious early conflict has occurred.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backtracking Pros & Cons */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-lg font-bold text-emerald-400 border-b border-slate-800 pb-2">
            Backtracking Search
          </h3>

          <div className="space-y-3">
            <div className="bg-emerald-950/20 border border-emerald-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-2">
                <ThumbsUp className="w-4 h-4" /> PROS / ADVANTAGES
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Substantial Pruning:</strong> Discards over 99.9% of fruitless search branches before visiting their children.</li>
                <li><strong className="text-white">Low Memory Overhead:</strong> Keeps only the active branch on stack (<code className="text-emerald-300">O(n)</code> space).</li>
                <li><strong className="text-white">Early Solution Finding:</strong> Finds the first valid solution orders of magnitude faster than full enumeration.</li>
              </ul>
            </div>

            <div className="bg-rose-950/20 border border-rose-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-2">
                <ThumbsDown className="w-4 h-4" /> CONS / DISADVANTAGES
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Constraint Sensitivity:</strong> If constraints are weak or checkable only at the leaves, speed reduces back to brute force.</li>
                <li><strong className="text-white">Bug Vulnerability:</strong> Complex state restoration in "Undo" phase often introduces subtle mutation side effects.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


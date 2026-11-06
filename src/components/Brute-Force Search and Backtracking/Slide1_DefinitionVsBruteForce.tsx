import { GitFork, Eye, Layers, ShieldCheck, XCircle } from 'lucide-react';

export default function Slide1_DefinitionVsBruteForce() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs mb-2 border border-indigo-500/30">
          <GitFork className="w-4 h-4" /> PARADIGM COMPARISON
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Brute-Force Search vs. Backtracking
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          From blind exhaustive generation to intelligent constraint-guided exploration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Brute Force Card */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-rose-500/20 rounded-xl text-rose-400">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Brute-Force Search</h2>
              <span className="text-xs text-rose-400 font-mono">Generate-and-Test Strategy</span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-rose-300">Definition: </strong>
              A straightforward problem-solving technique that systematically generates <strong>every single conceivable candidate</strong> in the entire solution space, only checking whether each candidate is valid after it is fully formed.
            </div>

            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span><strong>Zero Early Pruning:</strong> Even if the very first decision makes a solution impossible, it still generates all subsequent decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span><strong>Combinatorial Disaster:</strong> Search space scales as O(kⁿ) or O(n!), rendering it useless for n &gt; 12.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Backtracking Card */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Backtracking Search</h2>
              <span className="text-xs text-emerald-400 font-mono">Depth-First Pruned Exploration</span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-emerald-300">Definition: </strong>
              A refined depth-first search that builds candidate solutions <strong>one decision at a time</strong>, testing feasibility constraints at every intermediate step and <strong>abandoning (backtracking)</strong> the branch immediately upon conflict.
            </div>

            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Instant Pruning:</strong> If placing Queen at (0,0) and (1,0) conflicts, it never explores the remaining (n-2) rows!</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Minimal Memory:</strong> Uses only O(depth) memory on the recursive call stack.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden text-xs">
        <table className="w-full text-left">
          <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono text-[11px]">
            <tr>
              <th className="p-3">Attribute</th>
              <th className="p-3 text-rose-400">Brute Force</th>
              <th className="p-3 text-emerald-400">Backtracking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            <tr>
              <td className="p-3 font-semibold text-white">Constraint Checking</td>
              <td className="p-3">Only after full candidate is completely constructed</td>
              <td className="p-3">After every single incremental decision</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-white">Branches Explored</td>
              <td className="p-3">100% of the entire theoretical search tree</td>
              <td className="p-3">Only feasible paths; invalid subtrees pruned</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-white">4-Queens Placements Tested</td>
              <td className="p-3 font-mono text-rose-300">256 configurations (blind)</td>
              <td className="p-3 font-mono text-emerald-300">~16-28 node tests (pruned)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


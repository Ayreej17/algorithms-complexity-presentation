import { ListOrdered, Code2, AlertCircle } from 'lucide-react';

export default function Slide3_ProcedureAndCode() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure & Code: Bounding Functions in Action
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          How to mathematically design and implement low-overhead bounding checks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Procedure */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <ListOrdered className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Bounding Function Design Rules</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">Rule 1: Never Discard Feasible Solutions (Safe Bound)</span>
              <p className="text-slate-400">The bounding function must be mathematically sound. It can only return false if it is 100% impossible for downstream leaves to succeed.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">Rule 2: Minimal Computation Overhead O(1)</span>
              <p className="text-slate-400">The bound is evaluated at every single node in the tree. If evaluating the bound takes <code className="text-rose-300 font-mono">O(2ⁿ)</code>, the pruning cost outweighs any savings!</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">Rule 3: Early Triggering</span>
              <p className="text-slate-400">Design bounds that detect failures close to the root (small depth <span className="font-mono">k</span>) to maximize the Cutoff Multiplier <code className="text-emerald-300 font-mono">2ⁿ⁻ᵏ</code>.</p>
            </div>
          </div>
        </div>

        {/* Right: Code Comparison */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="w-4 h-4" />
              <h3 className="font-bold text-white text-sm">Branch & Bound Pruning Check</h3>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">O(1) Overhead</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">def</span> <span className="text-blue-400">branch_and_bound</span>(node, current_cost, best_known):<br />
            &nbsp;&nbsp;<span className="text-slate-500"># Bounding check: instantly abort if hopeless</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">if</span> current_cost &gt;= best_known[<span className="text-purple-400">0</span>]:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-rose-400 font-bold"># PRUNE: cannot beat current best!</span><br />
            <br />
            &nbsp;&nbsp;<span className="text-slate-500"># Leaf check</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">if</span> is_leaf(node):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;best_known[<span className="text-purple-400">0</span>] = <span className="text-blue-400">min</span>(best_known[<span className="text-purple-400">0</span>], current_cost)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;<span className="text-slate-500"># Explore viable branches</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">for</span> child, edge_cost <span className="text-pink-400">in</span> get_children(node):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;branch_and_bound(child, current_cost + edge_cost, best_known)
          </div>

          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>As `best_known` improves, the bound becomes tighter and prunes even more aggressively!</span>
          </div>
        </div>
      </div>
    </div>
  );
}


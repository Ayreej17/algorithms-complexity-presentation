import { ListChecks, Code2 } from 'lucide-react';

export default function Slide3_ProcedureAndCode() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure & Implementation: Subset Sum
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The step-by-step algorithm and production Python code with dual bounding checks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Procedure */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <ListChecks className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Step-by-Step Procedure</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">1. Sort & Compute Total Sum</span>
              <p className="text-slate-400">Sort array in ascending order. Pre-compute total remaining sum <code className="text-white font-mono">rem_sum = sum(w)</code>.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">2. Target Check Base Case</span>
              <p className="text-slate-400">If <code className="text-white font-mono">curr_sum == target</code>, record solution. (If single solution required, return True).</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">3. Evaluate Bounding Pruning</span>
              <p className="text-slate-400">If <code className="text-white font-mono">curr_sum + w[i] &gt; target</code>, break loop immediately (because array is sorted!). If <code className="text-white font-mono">curr_sum + rem_sum &lt; target</code>, prune subtree.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">4. Recurse (Choose, Explore, Undo)</span>
              <p className="text-slate-400">Include <code className="text-white font-mono">w[i]</code>, recurse to index <code className="text-white font-mono">i + 1</code> with updated remaining sum, then pop element upon return.</p>
            </div>
          </div>
        </div>

        {/* Right: Code */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="w-4 h-4" />
              <h3 className="font-bold text-white text-sm">Optimized Subset Sum in Python</h3>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">Dual-Bounded</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">def</span> <span className="text-blue-400">subset_sum</span>(w, target):<br />
            &nbsp;&nbsp;w.sort() <span className="text-slate-500"># Crucial for early loop break</span><br />
            &nbsp;&nbsp;results = []<br />
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">def</span> <span className="text-blue-400">backtrack</span>(idx, curr_sum, rem_sum, path):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> curr_sum == target:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results.append(path[:])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">for</span> i <span className="text-pink-400">in</span> <span className="text-blue-400">range</span>(idx, <span className="text-blue-400">len</span>(w)):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Bound 1: Over-sum break (sorted array)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> curr_sum + w[i] &gt; target:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">break</span> <span className="text-rose-400 font-bold"># All further items also exceed!</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Bound 2: Insufficient remaining sum</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> curr_sum + rem_sum &lt; target:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-amber-400 font-bold"># Unreachable</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400 font-bold"># CHOOSE, EXPLORE, UNDO</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path.append(w[i])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backtrack(i + <span className="text-purple-400">1</span>, curr_sum + w[i], rem_sum - w[i], path)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path.pop()<br />
            <br />
            &nbsp;&nbsp;backtrack(<span className="text-purple-400">0</span>, <span className="text-purple-400">0</span>, <span className="text-blue-400">sum</span>(w), [])<br />
            &nbsp;&nbsp;<span className="text-pink-400">return</span> results
          </div>
        </div>
      </div>
    </div>
  );
}

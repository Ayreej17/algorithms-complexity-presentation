import { ListOrdered, Code2 } from 'lucide-react';

export default function Slide3_ProcedureAndCode() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure & Code: Include/Exclude Pattern
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The exact algorithmic structure of binary decision tree recursion.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Procedure */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <ListOrdered className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Execution Procedure</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">1. Base Case Check</span>
              <p className="text-slate-400">If <code className="text-white font-mono">index == len(arr)</code>, all <span className="font-mono">N</span> decisions have been made. Check if <code className="text-white font-mono">current_sum == target</code> and return.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-emerald-300 block mb-1">2. Branch 1: INCLUDE</span>
              <p className="text-slate-400">Test if adding <code className="text-white font-mono">arr[index]</code> stays ≤ target. If valid, append element, recurse with <code className="text-white font-mono">index + 1</code>, and pop element on return.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-rose-300 block mb-1">3. Branch 2: EXCLUDE</span>
              <p className="text-slate-400">Bypass <code className="text-white font-mono">arr[index]</code>. Recurse with <code className="text-white font-mono">index + 1</code> without altering current sum or candidate subset.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-purple-300 block mb-1">4. Unwind State</span>
              <p className="text-slate-400">Once both binary branches finish, the call frame terminates, returning execution control to the parent node.</p>
            </div>
          </div>
        </div>

        {/* Right: Code */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="w-4 h-4" />
              <h3 className="font-bold text-white text-sm">Binary Include/Exclude in Python</h3>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">Binary DFS</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">def</span> <span className="text-blue-400">solve_binary</span>(arr, target):<br />
            &nbsp;&nbsp;solutions = []<br />
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">def</span> <span className="text-blue-400">backtrack</span>(i, curr_sum, current_path):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Goal base case</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> curr_sum == target:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solutions.append(current_path[:])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># End of items base case</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> i == <span className="text-blue-400">len</span>(arr):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400 font-bold"># BRANCH 1: INCLUDE arr[i]</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> curr_sum + arr[i] &lt;= target: <span className="text-slate-500"># Pruning bound</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_path.append(arr[i])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backtrack(i + <span className="text-purple-400">1</span>, curr_sum + arr[i], current_path)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_path.pop()<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-rose-400 font-bold"># BRANCH 2: EXCLUDE arr[i]</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;backtrack(i + <span className="text-purple-400">1</span>, curr_sum, current_path)<br />
            <br />
            &nbsp;&nbsp;backtrack(<span className="text-purple-400">0</span>, <span className="text-purple-400">0</span>, [])<br />
            &nbsp;&nbsp;<span className="text-pink-400">return</span> solutions
          </div>
        </div>
      </div>
    </div>
  );
}

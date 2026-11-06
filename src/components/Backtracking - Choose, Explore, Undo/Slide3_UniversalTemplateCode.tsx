import { ArrowRight } from 'lucide-react';

export default function Slide3_UniversalTemplateCode() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Universal Backtracking Template & Code
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The canonical template used to solve 90% of recursive search problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: General Template */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-bold text-indigo-400">Canonical Pseudocode Template</span>
            <span className="text-[11px] text-slate-400">Universal Pattern</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">function</span> <span className="text-blue-400">backtrack</span>(state):<br />
            &nbsp;&nbsp;<span className="text-slate-500">// 1. BASE CASE: Goal Reached?</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">if</span> is_solution(state):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;process_solution(state)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;<span className="text-slate-500">// 2. CANDIDATE LOOP</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">for</span> choice <span className="text-pink-400">in</span> get_valid_choices(state):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// Bounding check</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> isValid(choice, state):<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400 font-bold">// ▶ [CHOOSE] Mutate state</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.apply(choice)<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400 font-bold">// ▶ [EXPLORE] Recurse downstream</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backtrack(state)<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400 font-bold">// ▶ [UNDO] Revert mutation</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.revert(choice)
          </div>
        </div>

        {/* Right: Concrete Permutation Implementation */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-bold text-teal-400">Permutations Problem in Python</span>
            <span className="text-[11px] text-slate-400">Concrete Example</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">def</span> <span className="text-blue-400">permute</span>(nums):<br />
            &nbsp;&nbsp;results = []<br />
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">def</span> <span className="text-blue-400">backtrack</span>(current_path, used):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> <span className="text-blue-400">len</span>(current_path) == <span className="text-blue-400">len</span>(nums):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results.append(current_path[:]) <span className="text-slate-500"># Snapshot</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">for</span> num <span className="text-pink-400">in</span> nums:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> num <span className="text-pink-400">in</span> used: <span className="text-pink-400">continue</span> <span className="text-slate-500"># Prune duplicate</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400 font-bold"># 1. CHOOSE</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_path.append(num)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;used.add(num)<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400 font-bold"># 2. EXPLORE</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backtrack(current_path, used)<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400 font-bold"># 3. UNDO</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_path.pop()<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;used.remove(num)<br />
            <br />
            &nbsp;&nbsp;backtrack([], <span className="text-purple-400">set</span>())<br />
            &nbsp;&nbsp;<span className="text-pink-400">return</span> results
          </div>
        </div>
      </div>

      <div className="mt-4 bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-slate-200">Notice:</span>
        <div className="flex items-center gap-2 text-indigo-300">
          <span>`current_path.append()`</span>
          <ArrowRight className="w-3 h-3" />
          <span>`backtrack()`</span>
          <ArrowRight className="w-3 h-3" />
          <span>`current_path.pop()`</span>
          <span className="text-emerald-400 font-bold">— Exact symmetry guarantees zero side effects!</span>
        </div>
      </div>
    </div>
  );
}

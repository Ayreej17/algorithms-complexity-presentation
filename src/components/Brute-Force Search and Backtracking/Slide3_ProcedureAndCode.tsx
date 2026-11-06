import { ListChecks, Code2, AlertCircle } from 'lucide-react';

export default function Slide3_ProcedureAndCode() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure & Code: N-Queens Confrontation
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Comparing the step-by-step procedure and algorithmic code of Brute Force vs. Backtracking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Procedures */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <ListChecks className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Execution Procedures</h3>
          </div>

          {/* Procedure 1: Brute Force */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-rose-500/20 text-xs space-y-2">
            <span className="font-bold text-rose-400 block uppercase tracking-wide">Brute-Force Procedure</span>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Generate all <span className="text-rose-300 font-mono">Nᴺ</span> queen column assignments unconditionally.</li>
              <li>For each completed board assignment, iterate over all <span className="text-rose-300 font-mono">N(N-1)/2</span> pairs.</li>
              <li>Check if any pair shares row, column, or diagonal.</li>
              <li>If zero conflicts found across entire board, output solution.</li>
            </ol>
          </div>

          {/* Procedure 2: Backtracking */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-500/20 text-xs space-y-2">
            <span className="font-bold text-emerald-400 block uppercase tracking-wide">Backtracking Procedure</span>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Start at row <span className="text-emerald-300 font-mono">r = 0</span>.</li>
              <li>For each column <span className="text-emerald-300 font-mono">c</span> from 0 to N-1:</li>
              <li><strong>Check constraint:</strong> Is cell <span className="text-emerald-300 font-mono">(r, c)</span> safe from previously placed queens?</li>
              <li><strong>If Safe:</strong> Place queen, advance to row <span className="text-emerald-300 font-mono">r + 1</span>.</li>
              <li><strong>If Dead End:</strong> Remove queen from cell (UNDO) and advance to next column.</li>
            </ol>
          </div>
        </div>

        {/* Right: Code Comparison */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="w-4 h-4" />
              <h3 className="font-bold text-white text-sm">Backtracking Implementation</h3>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">O(N!) with massive pruning</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">def</span> <span className="text-blue-400">solve_n_queens</span>(n):<br />
            &nbsp;&nbsp;solutions = []<br />
            &nbsp;&nbsp;cols = <span className="text-purple-400">set</span>(); diag1 = <span className="text-purple-400">set</span>(); diag2 = <span className="text-purple-400">set</span>()<br />
            <br />
            &nbsp;&nbsp;<span className="text-pink-400">def</span> <span className="text-blue-400">backtrack</span>(r, board):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> r == n: <span className="text-slate-500"># Base case: all N rows filled</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solutions.append(board[:])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">for</span> c <span className="text-pink-400">in</span> <span className="text-blue-400">range</span>(n):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Bounding check: prune conflicting placements</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> c <span className="text-pink-400">in</span> cols <span className="text-pink-400">or</span> (r - c) <span className="text-pink-400">in</span> diag1 <span className="text-pink-400">or</span> (r + c) <span className="text-pink-400">in</span> diag2:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">continue</span> <span className="text-rose-400 font-bold"># PRUNE SUBTREE</span><br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 1. CHOOSE</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cols.add(c); diag1.add(r - c); diag2.add(r + c)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;board.append(c)<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 2. EXPLORE</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backtrack(r + <span className="text-purple-400">1</span>, board)<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 3. UNDO (Backtrack state restoration)</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;board.pop()<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cols.remove(c); diag1.remove(r - c); diag2.remove(r + c)<br />
            <br />
            &nbsp;&nbsp;backtrack(<span className="text-purple-400">0</span>, [])<br />
            &nbsp;&nbsp;<span className="text-pink-400">return</span> solutions
          </div>

          <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>The `continue` statement instantly saves evaluating <code className="text-emerald-300">n^(n - r - 1)</code> child states.</span>
          </div>
        </div>
      </div>
    </div>
  );
}


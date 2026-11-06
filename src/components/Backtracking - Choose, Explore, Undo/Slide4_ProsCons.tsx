import { ThumbsUp, ThumbsDown, GitBranch } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <GitBranch className="w-4 h-4 text-indigo-400" /> PARADIGM ASSESSMENT
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pros & Cons of Choose-Explore-Undo
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The engineering trade-offs of in-place mutable recursive search.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pros */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsUp className="w-5 h-5" /> ADVANTAGES & PROS
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Optimal Space Complexity O(d):</strong>
              Only one instance of the mutable state exists at any time. Eliminates memory allocation spikes from copying large arrays across millions of recursive branches.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Universal Code Reusability:</strong>
              Once the 3-phase template is mastered, the same skeleton immediately solves Sudoku, N-Queens, Graph Coloring, Word Boggle, and Subset Sum.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Instant Cancellation:</strong>
              Returning early from recursive calls automatically unwinds mutations cleanly without leaving behind corrupted data structures.
            </li>
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsDown className="w-5 h-5" /> DISADVANTAGES & CONS
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">State Desynchronization Pitfalls:</strong>
              A single forgotten <code className="text-rose-300 font-mono">pop()</code> or missed flag reversal completely corrupts the search tree, causing silent, maddening bugs.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Call Stack Overflow Risk:</strong>
              If the search tree depth exceeds the language's recursion ceiling (e.g., Python's default 1,000 limit), execution crashes with a `RecursionError`.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Multi-threaded Concurrency Barrier:</strong>
              Because the mutable state is shared across calls, parallelizing standard backtracking across multiple CPU threads requires complex state cloning or locks.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


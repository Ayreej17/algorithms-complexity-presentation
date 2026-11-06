import { BookOpen, BrainCircuit, Terminal, ArrowRight, Zap, Database } from 'lucide-react';

export default function Slide1_Overview() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold tracking-wider text-xs uppercase mb-3 border border-indigo-500/30">
          <BookOpen className="w-4 h-4" /> CHAPTER 9 FOUNDATIONS
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
          Backtracking & Computational Complexity
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto mt-3">
          The mathematical and algorithmic discipline of systematically searching solution spaces and quantifying computational efficiency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {/* Card 1: Backtracking */}
        <div className="bg-slate-900/80 border border-indigo-500/30 p-6 rounded-2xl relative overflow-hidden group hover:border-indigo-500/60 transition-all shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Introduction to Backtracking</h2>
              <span className="text-xs text-indigo-400 font-mono">Algorithmic Paradigm</span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span className="font-semibold text-indigo-300">Definition: </span>
              A problem-solving algorithmic technique that builds solutions incrementally by trying different candidate options and <strong className="text-amber-300 font-medium">undoing them (backtracking)</strong> the moment they lead to a dead end.
            </div>

            <p className="text-slate-400 leading-relaxed">
              Instead of blindly checking every possible permutation, backtracking walks decision trees depth-first. As soon as a partial solution violates any rule, the entire subtree is abandoned immediately.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 bg-slate-800 text-xs text-slate-300 rounded-md border border-slate-700">Maze Traversal</span>
              <span className="px-2.5 py-1 bg-slate-800 text-xs text-slate-300 rounded-md border border-slate-700">Sudoku Puzzles</span>
              <span className="px-2.5 py-1 bg-slate-800 text-xs text-slate-300 rounded-md border border-slate-700">N-Queens Problem</span>
            </div>
          </div>
        </div>

        {/* Card 2: Computational Complexity Theory */}
        <div className="bg-slate-900/80 border border-purple-500/30 p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/60 transition-all shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Computational Complexity Theory</h2>
              <span className="text-xs text-purple-400 font-mono">Theoretical Computer Science</span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span className="font-semibold text-purple-300">Definition: </span>
              The formal mathematical analysis of computer programs to quantify their efficiency, correctness, and required computational resources (Time & Space) as input size scales.
            </div>

            <p className="text-slate-400 leading-relaxed">
              It provides a rigorous, hardware-independent framework to categorize whether a computational problem is practically solvable or fundamentally intractable.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-300">Time: Step Count Growth</span>
              </div>
              <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300">Space: Memory Footprint</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-6 bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs md:text-sm text-slate-400">
        <span className="font-medium text-slate-200">Key Chapter Takeaway:</span>
        <div className="flex items-center gap-2 text-indigo-300">
          <span>Backtracking prunes search spaces</span>
          <ArrowRight className="w-4 h-4" />
          <span>Complexity theory quantifies whether pruning achieves tractability</span>
        </div>
      </div>
    </div>
  );
}


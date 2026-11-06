import { RefreshCw, Compass, ArrowRight } from 'lucide-react';

export default function Slide1_TriadParadigm() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs mb-2 border border-indigo-500/30">
          <RefreshCw className="w-4 h-4" /> RECURSIVE PATTERN
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Backtracking: Choose, Explore, Undo
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          The three-step execution cycle powering all recursive search algorithms.
        </p>
      </div>

      {/* The 3 Pillars Cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {/* Step 1: CHOOSE */}
        <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-5 hover:border-blue-500/60 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center font-mono">1</span>
            <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">Stage 1</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">CHOOSE</h2>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Select an available candidate from the choices valid at the current stage. Tentatively apply it to mutate the partial solution state.
          </p>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono text-blue-300">
            path.push(candidate);<br />
            visited.add(candidate);
          </div>
        </div>

        {/* Step 2: EXPLORE */}
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-5 hover:border-purple-500/60 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center font-mono">2</span>
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-semibold">Stage 2</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">EXPLORE</h2>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Make the recursive call to advance to the next decision tier. The algorithm tests all downstream consequences of the current choice.
          </p>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono text-purple-300">
            solve(nextStage, path);<br />
            // investigates subtree
          </div>
        </div>

        {/* Step 3: UNDO */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/60 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center font-mono">3</span>
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">Stage 3</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">UNDO</h2>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Revert the choice completely. Backtrack the mutable data structures to their pristine state so sibling options can be tested cleanly.
          </p>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono text-amber-300">
            path.pop();<br />
            visited.delete(candidate);
          </div>
        </div>
      </div>

      {/* Mental Model & Invariant Preservation */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 flex-shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Theseus in the Labyrinth Mental Model</h3>
            <p className="text-xs text-slate-400">
              Imagine walking a dark labyrinth unraveling a ball of thread. At every intersection, you choose a corridor (Choose) and walk deeper (Explore). When you hit a stone dead end, you rewind the thread step-by-step (Undo) back to the fork.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-xs text-indigo-300 font-mono whitespace-nowrap">
          <span>State(t)</span>
          <ArrowRight className="w-3 h-3 text-slate-600" />
          <span>Mutate</span>
          <ArrowRight className="w-3 h-3 text-slate-600" />
          <span>Recurse</span>
          <ArrowRight className="w-3 h-3 text-slate-600" />
          <span className="text-emerald-400 font-bold">Restore(t)</span>
        </div>
      </div>
    </div>
  );
}

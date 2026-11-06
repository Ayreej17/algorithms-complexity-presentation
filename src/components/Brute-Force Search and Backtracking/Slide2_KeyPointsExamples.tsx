import { Bomb, Grid, MapPin, KeyRound, Sparkles } from 'lucide-react';

export default function Slide2_KeyPointsExamples() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Combinatorial Explosion & Benchmark Examples
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          How combinatorial growth cripples brute force and why classic problems demand backtracking.
        </p>
      </div>

      {/* Top Banner: The Math of Combinatorial Explosion */}
      <div className="bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-indigo-950/40 border border-rose-500/30 p-5 rounded-2xl mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Bomb className="w-6 h-6 text-rose-400" />
          <h3 className="text-base font-bold text-white">The Combinatorial Explosion Law</h3>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          In combinatorial search spaces, every new variable or decision level multiplies the state space by branching factor <span className="font-mono text-amber-300">b</span>. While <span className="font-mono text-cyan-300">b¹⁰</span> is around 1,000, <span className="font-mono text-rose-400">b⁶⁰</span> exceeds the number of atoms in the observable universe. Without early pruning, computational death is mathematically inevitable.
        </p>
      </div>

      {/* Grid of Examples */}
      <div className="grid md:grid-cols-3 gap-5">
        {/* Example 1: N-Queens */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl hover:border-indigo-500/50 transition-all">
          <div className="flex items-center gap-2 mb-3 text-indigo-400">
            <Grid className="w-5 h-5" />
            <h4 className="font-bold text-white text-sm">N-Queens Puzzle</h4>
          </div>
          <p className="text-xs text-slate-400 mb-3 leading-relaxed">
            Place <span className="text-white font-mono">N</span> non-attacking queens on an <span className="text-white font-mono">N×N</span> board such that no two queens share the same row, column, or diagonal.
          </p>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono space-y-1">
            <div className="text-rose-400">Brute Force 8×8: 4.4 × 10⁹ tests</div>
            <div className="text-emerald-400">Backtracking 8×8: 2,057 nodes</div>
            <div className="text-cyan-400">Efficiency Gain: 99.999%</div>
          </div>
        </div>

        {/* Example 2: Sudoku Solver */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl hover:border-purple-500/50 transition-all">
          <div className="flex items-center gap-2 mb-3 text-purple-400">
            <Sparkles className="w-5 h-5" />
            <h4 className="font-bold text-white text-sm">Sudoku Solving</h4>
          </div>
          <p className="text-xs text-slate-400 mb-3 leading-relaxed">
            Fill a 9×9 grid with digits 1–9 with no duplicates in any row, column, or 3×3 subgrid.
          </p>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono space-y-1">
            <div className="text-rose-400">Brute Force: 9⁸¹ ≈ 1.96 × 10⁷⁷</div>
            <div className="text-emerald-400">Backtracking: &lt; 0.05 seconds</div>
            <div className="text-cyan-400">Pruning: Instant digit checks</div>
          </div>
        </div>

        {/* Example 3: TSP / Pathfinding */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl hover:border-amber-500/50 transition-all">
          <div className="flex items-center gap-2 mb-3 text-amber-400">
            <MapPin className="w-5 h-5" />
            <h4 className="font-bold text-white text-sm">Traveling Salesperson (TSP)</h4>
          </div>
          <p className="text-xs text-slate-400 mb-3 leading-relaxed">
            Find the shortest route visiting all <span className="text-white font-mono">N</span> cities and returning to origin.
          </p>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono space-y-1">
            <div className="text-rose-400">Brute Force: (N - 1)! / 2</div>
            <div className="text-emerald-400">Branch & Bound: Bounded DFS</div>
            <div className="text-cyan-400">Cut: If partial &gt; best so far</div>
          </div>
        </div>
      </div>

      {/* Password vs Constraint Note */}
      <div className="mt-5 bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-emerald-400" />
          <span><strong>When is Brute Force necessary?</strong> When verifying a hash or cryptographic key where NO intermediate feedback or partial constraint check exists!</span>
        </div>
      </div>
    </div>
  );
}


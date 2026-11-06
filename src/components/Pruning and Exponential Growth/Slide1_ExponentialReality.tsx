import { TrendingUp, Scissors, Flame, Zap } from 'lucide-react';

export default function Slide1_ExponentialReality() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-semibold text-xs mb-2 border border-rose-500/30">
          <TrendingUp className="w-4 h-4" /> ASYMPTOTIC EXPLOSION
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Pruning and Exponential Growth
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          The brutal reality of combinatorial doubling and the scissor of algorithmic pruning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* The Math of Exponential Growth */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-rose-500/20 rounded-xl text-rose-400">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Exponential Growth (2ⁿ)</h2>
              <span className="text-xs text-rose-400 font-mono">The Intractability Barrier</span>
            </div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-rose-400">Definition: </strong>
            A growth rate where the resource cost doubles with every single incremental unit added to input size <span className="text-white font-mono">n</span>:
            <div className="mt-1 font-mono text-center text-sm text-rose-300">
              T(n + 1) = 2 · T(n)
            </div>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400">n = 10:</span>
              <span className="text-emerald-400">1,024 steps (1 microsecond)</span>
            </div>
            <div className="flex justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400">n = 30:</span>
              <span className="text-amber-400">1,073,741,824 steps (1 second)</span>
            </div>
            <div className="flex justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400">n = 60:</span>
              <span className="text-rose-400">1.15 × 10¹⁸ steps (36.5 years @ 1GHz)</span>
            </div>
            <div className="flex justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400">n = 100:</span>
              <span className="text-rose-500 font-black">&gt; Atoms in observable universe</span>
            </div>
          </div>
        </div>

        {/* The Definition of Pruning */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Algorithmic Pruning</h2>
              <span className="text-xs text-emerald-400 font-mono">Subtree Truncation</span>
            </div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-emerald-400">Definition: </strong>
            The technique of slicing off entire subtrees of the state-space tree the instant an intermediate state is proven unable to produce a valid or optimal solution.
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Pruning does not just avoid testing one candidate; it <strong>annihilates the entire exponential explosion of downstream children</strong> that would have branched from that node.
          </p>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-emerald-300 flex items-center gap-2">
            <Zap className="w-4 h-4 flex-shrink-0" />
            <span>Pruning transforms an impossible trillion-year computation into a practical 10-millisecond execution!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

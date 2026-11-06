import { Clock, HardDrive, Cpu, Scale, Activity } from 'lucide-react';

export default function Slide2_TimeSpaceAsymptotics() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Time, Space & Asymptotic Notations
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Why wall-clock time is deceptive and how asymptotic bounds create a hardware-independent science.
        </p>
      </div>

      {/* Row 1: The Two Main Complexities & Hardware Independence */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3 text-cyan-400">
            <Clock className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Time Complexity</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Measures the total number of elementary operation steps executed as a function of input size <span className="text-cyan-300 font-mono">n</span>. It reflects code execution speed independent of processor clock speeds.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3 text-emerald-400">
            <HardDrive className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Space Complexity</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Measures the peak auxiliary working memory (RAM, recursive call stack frames, scratch buffers) required to execute an algorithm on an input of size <span className="text-emerald-300 font-mono">n</span>.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3 text-amber-400">
            <Cpu className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Hardware Independence</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            A laptop takes 3 seconds, a supercomputer takes 0.001 seconds. Because wall-clock time fluctuates by CPU, cache, OS, and temperature, complexity theory measures <em>asymptotic steps</em>, not seconds.
          </p>
        </div>
      </div>

      {/* Row 2: Asymptotic Notations: Big-O, Big-Omega, Big-Theta */}
      <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">The Three Pillars of Asymptotic Notation</h3>
          </div>
          <span className="text-xs text-indigo-300 font-mono bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Growth Bounds as n → ∞
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Big-O */}
          <div className="bg-slate-950/70 border border-rose-500/30 p-4 rounded-xl hover:border-rose-500/60 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black text-rose-400 font-mono">Big-O (O)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold">Upper Bound</span>
            </div>
            <p className="text-xs text-slate-300 mb-2">
              Represents the <strong>worst-case scenario</strong>. Guarantees the algorithm will never consume more steps than this upper threshold.
            </p>
            <div className="text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-400">
              f(n) ≤ c · g(n) for n ≥ n₀
            </div>
          </div>

          {/* Big-Omega */}
          <div className="bg-slate-950/70 border border-emerald-500/30 p-4 rounded-xl hover:border-emerald-500/60 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black text-emerald-400 font-mono">Big-Ω (Ω)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">Lower Bound</span>
            </div>
            <p className="text-xs text-slate-300 mb-2">
              Represents the <strong>best-case scenario</strong>. Defines the minimum number of steps required; the algorithm cannot run faster than this.
            </p>
            <div className="text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-400">
              f(n) ≥ c · g(n) for n ≥ n₀
            </div>
          </div>

          {/* Big-Theta */}
          <div className="bg-slate-950/70 border border-purple-500/30 p-4 rounded-xl hover:border-purple-500/60 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-black text-purple-400 font-mono">Big-Θ (Θ)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">Tight Bound</span>
            </div>
            <p className="text-xs text-slate-300 mb-2">
              Represents the <strong>exact / tight bound</strong>. Sandwich bound where upper and lower bounds grow at identical rates.
            </p>
            <div className="text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-400">
              c₁·g(n) ≤ f(n) ≤ c₂·g(n)
            </div>
          </div>
        </div>

        {/* Growth hierarchy pill list */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-300">
          <Activity className="w-4 h-4 text-indigo-400" />
          <span>Hierarchy of Rates:</span>
          <span className="text-emerald-400 font-bold">O(1)</span> &lt;
          <span className="text-teal-400 font-bold">O(log n)</span> &lt;
          <span className="text-blue-400 font-bold">O(n)</span> &lt;
          <span className="text-indigo-400 font-bold">O(n log n)</span> &lt;
          <span className="text-amber-400 font-bold">O(n²)</span> &lt;
          <span className="text-rose-400 font-bold">O(2ⁿ)</span> &lt;
          <span className="text-red-500 font-bold">O(n!)</span>
        </div>
      </div>
    </div>
  );
}


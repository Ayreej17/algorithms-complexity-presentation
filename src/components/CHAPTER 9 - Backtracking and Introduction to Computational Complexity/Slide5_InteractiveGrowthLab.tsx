import { useState, useMemo } from 'react';
import { Sliders, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Slide5_InteractiveGrowthLab() {
  const [n, setN] = useState<number>(10);
  const [activeNotation, setActiveNotation] = useState<'O' | 'Omega' | 'Theta'>('O');

  const calculations = useMemo(() => {
    const o1 = 1;
    const oLogN = Math.log2(n);
    const oN = n;
    const oNLogN = n * Math.log2(n);
    const oN2 = Math.pow(n, 2);
    const o2N = n <= 60 ? Math.pow(2, n) : Infinity;

    // factorial safely
    let oNFact = 1;
    if (n <= 20) {
      for (let i = 2; i <= n; i++) oNFact *= i;
    } else {
      oNFact = Infinity;
    }

    const formatTime = (ops: number) => {
      if (!isFinite(ops)) return '> Age of Universe (10¹⁸+ s)';
      const seconds = ops / 1e9; // 1 GHz CPU = 10^9 ops/sec
      if (seconds < 1e-6) return `${(seconds * 1e9).toFixed(1)} ns`;
      if (seconds < 1e-3) return `${(seconds * 1e6).toFixed(1)} µs`;
      if (seconds < 1) return `${(seconds * 1e3).toFixed(1)} ms`;
      if (seconds < 60) return `${seconds.toFixed(2)} sec`;
      if (seconds < 3600) return `${(seconds / 60).toFixed(1)} min`;
      if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} hours`;
      if (seconds < 31536000) return `${(seconds / 86400).toFixed(1)} days`;
      const years = seconds / 31536000;
      if (years > 1e9) return `${years.toExponential(2)} years`;
      return `${years.toLocaleString(undefined, { maximumFractionDigits: 0 })} years`;
    };

    return [
      { name: 'O(1)', desc: 'Constant', ops: o1, time: formatTime(o1), color: 'emerald', tag: 'Instant' },
      { name: 'O(log n)', desc: 'Logarithmic', ops: oLogN, time: formatTime(oLogN), color: 'teal', tag: 'Blazing Fast' },
      { name: 'O(n)', desc: 'Linear', ops: oN, time: formatTime(oN), color: 'cyan', tag: 'Fast' },
      { name: 'O(n log n)', desc: 'Linearithmic', ops: oNLogN, time: formatTime(oNLogN), color: 'blue', tag: 'Optimal Sorting' },
      { name: 'O(n²)', desc: 'Quadratic', ops: oN2, time: formatTime(oN2), color: 'amber', tag: 'Acceptable for small n' },
      { name: 'O(2ⁿ)', desc: 'Exponential', ops: o2N, time: formatTime(o2N), color: 'rose', tag: n > 35 ? 'INTRACTABLE' : 'Comb. Search' },
      { name: 'O(n!)', desc: 'Factorial', ops: oNFact, time: formatTime(oNFact), color: 'red', tag: n > 13 ? 'IMPOSSIBLE' : 'Permutations' },
    ];
  }, [n]);

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Interactive Simulation Lab
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Asymptotic Growth & Execution Time Explorer
          </h2>
        </div>

        {/* Asymptotic Notation Selector */}
        <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1 text-xs">
          <button
            onClick={() => setActiveNotation('O')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeNotation === 'O' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Big-O (Worst-Case)
          </button>
          <button
            onClick={() => setActiveNotation('Theta')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeNotation === 'Theta' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Big-Θ (Tight Bound)
          </button>
          <button
            onClick={() => setActiveNotation('Omega')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeNotation === 'Omega' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Big-Ω (Best-Case)
          </button>
        </div>
      </div>

      {/* Slider Control */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <Sliders className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-white text-sm">Input Size (n):</span>
            <span className="text-2xl font-black font-mono text-indigo-300 bg-indigo-500/20 px-3 py-0.5 rounded-lg border border-indigo-500/30">
              {n}
            </span>
          </div>

          <div className="flex gap-2">
            {[5, 10, 20, 30, 50].map((val) => (
              <button
                key={val}
                onClick={() => setN(val)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                  n === val
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                n={val}
              </button>
            ))}
          </div>
        </div>

        <input
          type="range"
          min="1"
          max="64"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value) || 1)}
          className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
          <span>n = 1 (Trivial)</span>
          <span>n = 15 (Brute Force Breaking Point)</span>
          <span>n = 35 (Supercomputer Limit)</span>
          <span>n = 64 (Heat Death of Universe)</span>
        </div>
      </div>

      {/* Calculations Table / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {calculations.map((c) => {
          const isDanger = c.name === 'O(2ⁿ)' && n > 35 || c.name === 'O(n!)' && n > 13;
          return (
            <div
              key={c.name}
              className={`p-4 rounded-xl border transition-all ${
                isDanger
                  ? 'bg-rose-950/20 border-rose-500/40 text-rose-300'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono font-black text-lg text-white">{c.name}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isDanger ? 'bg-rose-500/30 text-rose-300' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {c.tag}
                </span>
              </div>
              <div className="text-xs text-slate-400 mb-2">{c.desc}</div>

              <div className="space-y-1 pt-2 border-t border-slate-800/80 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[11px]">Operations:</span>
                  <span className="font-bold text-slate-200">
                    {!isFinite(c.ops) ? '∞' : c.ops > 1e12 ? c.ops.toExponential(2) : Math.round(c.ops).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[11px]">Time @ 1GHz:</span>
                  <span className={`font-bold ${isDanger ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {c.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Notation Explainer Banner */}
      <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {activeNotation === 'O' && <AlertTriangle className="w-4 h-4 text-rose-400" />}
          {activeNotation === 'Omega' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
          {activeNotation === 'Theta' && <Sparkles className="w-4 h-4 text-purple-400" />}
          <span className="text-slate-300">
            {activeNotation === 'O' && 'Big-O (Worst-Case): Essential for SLA guarantees, security, and worst-case bounds.'}
            {activeNotation === 'Omega' && 'Big-Ω (Best-Case): Proves fundamental lower boundaries; no algorithm can beat this threshold.'}
            {activeNotation === 'Theta' && 'Big-Θ (Tight Bound): Precise mathematical characterization where upper and lower growth align.'}
          </span>
        </div>
      </div>
    </div>
  );
}

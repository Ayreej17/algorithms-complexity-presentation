import { HelpCircle, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Slide1_Foundations() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs mb-2 border border-indigo-500/30">
          <HelpCircle className="w-4 h-4" /> COMPUTATIONAL COMPLEXITY FOUNDATIONS
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Decision Problems & Polynomial Verification
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          The mathematical boundary between solving problems from scratch and verifying given proofs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Decision Problem Definition */}
        <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">What is a Decision Problem?</h2>
              <span className="text-xs text-indigo-400 font-mono">Formal Formulation</span>
            </div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-indigo-300">Definition: </strong>
            A computational problem whose answer is strictly binary: <strong className="text-emerald-400">YES</strong> (True / 1) or <strong className="text-rose-400">NO</strong> (False / 0).
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            While real-world engineers often seek <em>optimization</em> (e.g. "Find the shortest tour"), theoretical complexity frames everything as decision problems (e.g. "Is there a tour of length ≤ k?") because any optimization problem can be solved by binary-searching across decision thresholds.
          </p>
        </div>

        {/* Verification Definition */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Polynomial-Time Verification</h2>
              <span className="text-xs text-emerald-400 font-mono">Certificate & Witness</span>
            </div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-emerald-300">Definition: </strong>
            An algorithm <span className="font-mono text-cyan-300">V(x, c)</span> runs in polynomial time <span className="font-mono text-emerald-400">O(nᵏ)</span> if, given an instance <span className="font-mono text-white">x</span> and a claimed proof / certificate <span className="font-mono text-white">c</span>, it deterministically validates whether <span className="font-mono text-white">c</span> proves <span className="font-mono text-white">x</span> is a YES instance.
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            This defines the fundamental complexity class <strong>NP (Nondeterministic Polynomial Time)</strong>: problems whose solutions are easy to check, regardless of how difficult they are to discover.
          </p>
        </div>
      </div>

      {/* Class P vs Class NP Contrast */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 grid md:grid-cols-2 gap-4 text-xs">
        <div className="bg-slate-950 p-3.5 rounded-xl border border-blue-500/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-blue-400 text-sm">Class P: Easy to Solve</span>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono">O(nᵏ) Solver</span>
          </div>
          <p className="text-slate-400 mb-2">Can be solved quickly from scratch without any certificate.</p>
          <div className="text-slate-300 font-mono text-[11px] flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Sorting, Shortest Path (Dijkstra), Primality Testing</span>
          </div>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-pink-500/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-pink-400 text-sm">Class NP: Easy to Verify</span>
            <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded font-mono">O(nᵏ) Verifier</span>
          </div>
          <p className="text-slate-400 mb-2">Given a certificate, checking takes polynomial time. Solving may take trillions of years.</p>
          <div className="text-slate-300 font-mono text-[11px] flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
            <span>Sudoku, Subset Sum, Graph 3-Coloring, TSP</span>
          </div>
        </div>
      </div>
    </div>
  );
}

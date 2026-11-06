import { PlusCircle, Target, HelpCircle, Award } from 'lucide-react';

export default function Slide1_DefinitionKarp() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs mb-2 border border-indigo-500/30">
          <Target className="w-4 h-4" /> COMBINATORIAL BENCHMARK
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Subset Sum Problems
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          The classical decision problem at the crossroads of NP-Completeness and cryptography.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Formal Definition */}
        <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 border-b border-slate-800 pb-2">
            <PlusCircle className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">Problem Definition</h2>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            Given a set of positive integers <span className="font-mono text-cyan-300">S = &#123;w₁, w₂, ..., wₙ&#125;</span> and a target integer <span className="font-mono text-pink-400">W</span>, determine whether there exists a subset <span className="font-mono text-emerald-300">S' ⊆ S</span> whose elements sum exactly to <span className="font-mono text-pink-400">W</span>:
            <div className="mt-2 text-center text-sm font-mono text-white bg-slate-900 p-2 rounded-lg border border-slate-800">
              ∑ (wᵢ ∈ S') = W
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            As a <strong>Decision Problem</strong>, the expected output is strictly boolean: <span className="text-emerald-400 font-bold">YES</span> if such a subset exists, or <span className="text-rose-400 font-bold">NO</span> if no combination matches.
          </p>
        </div>

        {/* Karp's 21 NP-Complete Problems */}
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-purple-400 border-b border-slate-800 pb-2">
            <Award className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">Historical & Theoretical Importance</h2>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <p className="leading-relaxed">
              In 1972, Richard Karp proved that Subset Sum is one of the original <strong>21 NP-Complete problems</strong>, reducible from Exact Cover.
            </p>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">Power Set Search Space:</span>
                <span className="font-mono text-rose-400 font-bold">2ⁿ candidate subsets</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">Verification Complexity:</span>
                <span className="font-mono text-emerald-400 font-bold">O(N) (Trivially in NP)</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">Brute-Force Solution:</span>
                <span className="font-mono text-rose-400 font-bold">O(2ⁿ · N) Intractable</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              It serves as the mathematical foundation for early public-key cryptography (the Merkle-Hellman knapsack cryptosystem).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Real-World Parallel: Balancing an accounting ledger, cargo container weight constraints, and portfolio capital budgeting.</span>
        </div>
      </div>
    </div>
  );
}

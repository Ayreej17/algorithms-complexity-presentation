import { ArrowRight, GitFork, Award, Network } from 'lucide-react';

export default function Slide2_ReductionsCookLevin() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Polynomial Reductions & Cook-Levin Theorem
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          How computer scientists prove computational equivalence using polynomial transformations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Polynomial Reduction Concept */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <GitFork className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Polynomial Reduction (A ≤ₚ B)</h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            A problem <span className="font-mono text-cyan-300">A</span> reduces to problem <span className="font-mono text-pink-400">B</span> in polynomial time if there exists a polynomial-time function <span className="font-mono text-white">f</span> such that:
          </p>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center font-mono text-xs text-emerald-400">
            Instance x ∈ A &nbsp;⟺&nbsp; Instance f(x) ∈ B
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>Meaning:</strong> Problem B is at least as hard as Problem A. If you had a black-box solver for B, you could solve A in polynomial time simply by running <span className="font-mono text-white">f(x)</span> and calling the solver.
          </p>
        </div>

        {/* Cook-Levin Theorem */}
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 pb-2 border-b border-slate-800">
            <Award className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">The Cook-Levin Theorem (1971)</h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Stephen Cook and Leonid Levin independently proved that <strong>Boolean Satisfiability (SAT)</strong> is NP-Complete.
          </p>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            Every problem in NP can be translated into a boolean formula! If an input takes polynomial time on a nondeterministic Turing machine, the machine's entire hardware clock cycles and tape transitions can be encoded as a SAT formula.
          </div>

          <p className="text-[11px] text-slate-400">
            This historic breakthrough established the very first NP-Complete anchor problem from which all others were proven.
          </p>
        </div>
      </div>

      {/* Karp's Domino Cascade */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
        <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
          <Network className="w-4 h-4 text-indigo-400" />
          Karp's 21 Reduction Cascade (1972)
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
          <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg border border-rose-500/30 font-bold">SAT</span>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 font-bold">3-SAT</span>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg border border-indigo-500/30 font-bold">Clique</span>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 font-bold">Vertex Cover</span>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-lg border border-teal-500/30 font-bold">Subset Sum</span>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30 font-bold">TSP</span>
        </div>
      </div>
    </div>
  );
}


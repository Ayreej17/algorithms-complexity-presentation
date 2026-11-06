import { ThumbsUp, ThumbsDown, HelpCircle } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <HelpCircle className="w-4 h-4 text-indigo-400" /> FRAMEWORK APPRAISAL
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Pros & Cons of Decision & Verification Framework
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Why computer science uses decision problems and the limitations of verification.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pros */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsUp className="w-5 h-5" /> PROS / ADVANTAGES
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Mathematical Rigor & Clean Classification:</strong>
              Binary YES/NO outputs strip away numerical implementation quirks, enabling clean set definitions like <code className="text-emerald-300 font-mono">P</code> and <code className="text-emerald-300 font-mono">NP</code>.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Enables Polynomial Reductions:</strong>
              Standardized boolean outputs make it possible to prove one problem is at least as hard as another (<code className="text-cyan-300 font-mono">A ≤ₚ B</code>).
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Decouples Discovery from Proof:</strong>
              Formally recognizes that checking an answer is inherently easier than inventing the answer from scratch.
            </li>
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm pb-2 border-b border-slate-800">
            <ThumbsDown className="w-5 h-5" /> CONS / DISADVANTAGES
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5">
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Abstracts Away Optimization Values:</strong>
              Engineers usually want the exact cheapest route, not just a YES/NO confirmation of a threshold; converting back requires repeated iterations.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Asymmetry of Negative Certificates (co-NP):</strong>
              While proving YES requires only one valid certificate, proving NO typically requires demonstrating that <em>no certificate exists</em> across the entire exponential space.
            </li>
            <li className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-white block mb-0.5">Polynomial-Time Practicality Illusion:</strong>
              An algorithm running in <code className="text-amber-300 font-mono">O(n¹⁰⁰)</code> is theoretically in P, but practically far more intractable than an <code className="text-rose-300 font-mono">O(1.0001ⁿ)</code> algorithm for real data.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


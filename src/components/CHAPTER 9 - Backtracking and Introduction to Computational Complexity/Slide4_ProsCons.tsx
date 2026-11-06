import { ThumbsUp, ThumbsDown, Scale } from 'lucide-react';

export default function Slide4_ProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <Scale className="w-4 h-4 text-indigo-400" /> BALANCED CRITIQUE
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Advantages & Disadvantages
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Comparing the trade-offs of Complexity Theory and Backtracking Algorithms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Section 1: Computational Complexity Theory */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-lg font-bold text-indigo-400 border-b border-slate-800 pb-2">
            Computational Complexity Theory
          </h3>

          <div className="space-y-3">
            <div className="bg-emerald-950/20 border border-emerald-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-2">
                <ThumbsUp className="w-4 h-4" /> ADVANTAGES / PROS
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Hardware Independence:</strong> Benchmarks algorithms regardless of whether executed on an embedded chip or a supercomputer.</li>
                <li><strong className="text-white">Predictive Scalability:</strong> Reliably predicts if software will survive data scaling from 1,000 to 10,000,000 records.</li>
                <li><strong className="text-white">Lower Bound Proofs:</strong> Mathematically proves when an algorithm is optimal and cannot be improved further (e.g. comparison sorting is Ω(n log n)).</li>
              </ul>
            </div>

            <div className="bg-rose-950/20 border border-rose-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-2">
                <ThumbsDown className="w-4 h-4" /> DISADVANTAGES / CONS
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Ignores Constant Factors:</strong> An <code className="text-amber-300">O(n)</code> algorithm with constant <code className="text-amber-300">1,000,000n</code> may be far slower in practice than an <code className="text-amber-300">O(n²)</code> algorithm for small datasets.</li>
                <li><strong className="text-white">Worst-Case Bias:</strong> Big-O worst-case might be an exceptionally rare pathological input, underestimating an algorithm that runs in linear time on 99.9% of real-world inputs (like Quicksort or Simplex).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Backtracking Paradigm */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-lg font-bold text-purple-400 border-b border-slate-800 pb-2">
            Backtracking Paradigm
          </h3>

          <div className="space-y-3">
            <div className="bg-emerald-950/20 border border-emerald-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-2">
                <ThumbsUp className="w-4 h-4" /> ADVANTAGES / PROS
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Massive Space Savings:</strong> Requires only <code className="text-cyan-300">O(depth)</code> memory because only current path is maintained on the recursion stack.</li>
                <li><strong className="text-white">Enormous Pruning Power:</strong> Slices off billions of invalid search branches before they are even created.</li>
                <li><strong className="text-white">Guaranteed Exact Solutions:</strong> Guaranteed to locate all feasible solutions or prove that no valid solution exists.</li>
              </ul>
            </div>

            <div className="bg-rose-950/20 border border-rose-500/30 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-2">
                <ThumbsDown className="w-4 h-4" /> DISADVANTAGES / CONS
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Exponential Worst-Case:</strong> If constraints are loose or poorly formulated, runtime degrades to brutal brute force <code className="text-rose-300">O(bⁿ)</code>.</li>
                <li><strong className="text-white">Recursion Depth Limits:</strong> Deep trees can trigger stack overflow exceptions without manual iterative stack conversion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


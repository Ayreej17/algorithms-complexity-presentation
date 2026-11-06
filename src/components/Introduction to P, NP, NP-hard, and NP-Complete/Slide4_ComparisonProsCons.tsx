import { GitCompare } from 'lucide-react';

export default function Slide4_ComparisonProsCons() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs mb-2">
          <GitCompare className="w-4 h-4 text-indigo-400" /> CLASS MATRIX & STRATEGIES
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Complexity Comparison & Coping Strategies
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          How industry engineering deals with NP-Complete problems without waiting for P = NP.
        </p>
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden text-xs mb-6">
        <table className="w-full text-left">
          <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono text-[11px]">
            <tr>
              <th className="p-3">Class</th>
              <th className="p-3">In NP?</th>
              <th className="p-3">Solution Time</th>
              <th className="p-3">Verification Time</th>
              <th className="p-3">Canonical Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300 font-mono text-[11px]">
            <tr>
              <td className="p-3 font-bold text-blue-400">P</td>
              <td className="p-3 text-emerald-400">Yes (P ⊆ NP)</td>
              <td className="p-3 text-emerald-400">O(nᵏ) Polynomial</td>
              <td className="p-3 text-emerald-400">O(nᵏ) Polynomial</td>
              <td className="p-3 font-sans">Merge Sort, Dijkstra</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-teal-400">NP</td>
              <td className="p-3 text-emerald-400">Yes</td>
              <td className="p-3 text-rose-400">Unknown (O(2ⁿ))</td>
              <td className="p-3 text-emerald-400">O(nᵏ) Polynomial</td>
              <td className="p-3 font-sans">Sudoku, Prime Factoring</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-rose-400">NP-Complete</td>
              <td className="p-3 text-emerald-400">Yes (Hardest)</td>
              <td className="p-3 text-rose-400">Unknown (O(2ⁿ))</td>
              <td className="p-3 text-emerald-400">O(nᵏ) Polynomial</td>
              <td className="p-3 font-sans">3-SAT, Subset Sum, TSP Dec.</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-purple-400">NP-Hard</td>
              <td className="p-3 text-amber-400">Not necessarily</td>
              <td className="p-3 text-rose-400">≥ NP-Complete</td>
              <td className="p-3 text-rose-400">Not guaranteed</td>
              <td className="p-3 font-sans">TSP Optim., Halting Problem</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4 Practical Coping Strategies in Industry */}
      <div className="grid md:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
          <strong className="text-indigo-400 block mb-1">1. Backtracking + Pruning</strong>
          <p className="text-slate-400 text-[11px]">Exact solutions for medium N (e.g. N ≤ 50) using clever bounding cuts.</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
          <strong className="text-emerald-400 block mb-1">2. Approximation (PTAS)</strong>
          <p className="text-slate-400 text-[11px]">Guarantees solution within 1+ε factor of optimal in polynomial time.</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
          <strong className="text-cyan-400 block mb-1">3. SAT Solvers (Z3, MiniSat)</strong>
          <p className="text-slate-400 text-[11px]">Industrial solvers handling millions of boolean variables using CDCL heuristics.</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
          <strong className="text-amber-400 block mb-1">4. Heuristics & Metaheuristics</strong>
          <p className="text-slate-400 text-[11px]">Genetic algorithms, Simulated Annealing: fast practical answers with no guarantee.</p>
        </div>
      </div>
    </div>
  );
}

import { ListOrdered, Code2, AlertCircle } from 'lucide-react';

export default function Slide3_ProcedureAndCode() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure: Proving NP-Completeness
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The rigorous 4-step formal mathematical reduction template.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Formal Procedure */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <ListOrdered className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">4-Step Proof Procedure</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">Step 1: Prove Problem is in NP</span>
              <p className="text-slate-400">Describe a polynomial-time verifier algorithm and define the certificate (witness). Prove verifier checks candidate in <code className="text-emerald-300 font-mono">O(nᵏ)</code> time.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">Step 2: Choose Known NP-Complete Problem (X)</span>
              <p className="text-slate-400">Select an existing verified NP-Complete problem (e.g. 3-SAT, Vertex Cover, Hamiltonian Path).</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">Step 3: Construct Reduction Function f(x)</span>
              <p className="text-slate-400">Construct a function that transforms any instance of <span className="font-mono">X</span> into an instance of your target problem <span className="font-mono">Y</span> in polynomial time.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300 block mb-1">Step 4: Prove Bi-Directional Correctness</span>
              <p className="text-slate-400">Show <span className="text-white font-mono">X is YES ⟺ f(X) is YES</span>. Both directions (soundness & completeness) are strictly required.</p>
            </div>
          </div>
        </div>

        {/* Right: Code Signature / Reduction Mapping */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="w-4 h-4" />
              <h3 className="font-bold text-white text-sm">Polynomial Reduction Architecture</h3>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">O(nᵏ) Mapper</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-slate-500"># Conceptual Python Framework for Reduction</span><br />
            <span className="text-pink-400">def</span> <span className="text-blue-400">solve_problem_A</span>(instance_A):<br />
            &nbsp;&nbsp;<span className="text-slate-500"># 1. Transform instance of A into instance of B in O(poly) time</span><br />
            &nbsp;&nbsp;instance_B = polynomial_transform(instance_A)<br />
            <br />
            &nbsp;&nbsp;<span className="text-slate-500"># 2. Call solver for problem B</span><br />
            &nbsp;&nbsp;result_B = solve_problem_B(instance_B)<br />
            <br />
            &nbsp;&nbsp;<span className="text-slate-500"># 3. Direct equivalence</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">return</span> result_B<br />
            <br />
            <span className="text-slate-500"># If solve_problem_B runs in polynomial time,</span><br />
            <span className="text-slate-500"># then solve_problem_A automatically runs in polynomial time!</span>
          </div>

          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Reductions establish relative hardness: Problem B is at least as hard as Problem A.</span>
          </div>
        </div>
      </div>
    </div>
  );
}


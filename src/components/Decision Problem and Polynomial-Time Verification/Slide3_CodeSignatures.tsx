import { CheckCircle2, Cpu, ListOrdered } from 'lucide-react';

export default function Slide3_CodeSignatures() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure & Algorithm Signatures
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Comparing the execution steps of a Polynomial Verifier (Class NP) vs an Exponential Solver.
        </p>
      </div>

      {/* Verification Procedure Callout */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
          <ListOrdered className="w-4 h-4" /> 4-Step Polynomial Verification Procedure
        </div>
        <div className="grid sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">1. Receive Input & Proof:</strong>
            <span className="text-slate-400 text-[11px]">Accept instance I and claimed certificate C.</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">2. Check Proof Size:</strong>
            <span className="text-slate-400 text-[11px]">Verify certificate size is polynomial: |C| ≤ |I|ᵏ.</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">3. Deterministic Validation:</strong>
            <span className="text-slate-400 text-[11px]">Run check algorithm V(I, C) in O(nᵏ) steps.</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">4. Output Boolean:</strong>
            <span className="text-slate-400 text-[11px]">Return True if valid witness, else False.</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Verifier */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col h-full font-mono text-xs">
          <div className="mb-3 flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center text-emerald-400 gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-bold text-white text-sm">Polynomial Verifier (NP)</h3>
            </div>
            <span className="text-[11px] text-emerald-300 font-bold">Time: O(N)</span>
          </div>
          <p className="text-slate-400 text-xs mb-3 font-sans">
            Checking a proposed answer ("certificate") requires only a single pass through the numbers.
          </p>
          <div className="flex-1 bg-slate-950 border border-slate-800 p-4 rounded-xl text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">def</span> <span className="text-blue-400">verify_subset_sum</span>(certificate, target):<br />
            &nbsp;&nbsp;<span className="text-slate-500"># Linear single pass: O(N) operations</span><br />
            &nbsp;&nbsp;total_sum = <span className="text-purple-400">0</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">for</span> num <span className="text-pink-400">in</span> certificate:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;total_sum += num<br />
            &nbsp;&nbsp;<span className="text-pink-400">return</span> total_sum == target <span className="text-emerald-400 font-bold"># Returns True/False in 0.001ms</span>
          </div>
        </div>

        {/* Solver */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col h-full font-mono text-xs">
          <div className="mb-3 flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center text-rose-400 gap-2">
              <Cpu className="w-5 h-5" />
              <h3 className="font-bold text-white text-sm">Exhaustive Solver (Brute Force)</h3>
            </div>
            <span className="text-[11px] text-rose-300 font-bold">Time: O(2ᴺ · N)</span>
          </div>
          <p className="text-slate-400 text-xs mb-3 font-sans">
            Without a certificate, all combinations must be checked one by one.
          </p>
          <div className="flex-1 bg-slate-950 border border-slate-800 p-4 rounded-xl text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">def</span> <span className="text-blue-400">solve_subset_sum</span>(numbers, target):<br />
            &nbsp;&nbsp;<span className="text-slate-500"># Generates all 2^N subsets</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">for</span> r <span className="text-pink-400">in</span> <span className="text-blue-400">range</span>(<span className="text-purple-400">1</span>, <span className="text-blue-400">len</span>(numbers) + <span className="text-purple-400">1</span>):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">for</span> subset <span className="text-pink-400">in</span> itertools.combinations(numbers, r):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> <span className="text-blue-400">sum</span>(subset) == target:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> subset <span className="text-slate-500"># Found certificate!</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-purple-400">None</span>
          </div>
        </div>
      </div>
    </div>
  );
}

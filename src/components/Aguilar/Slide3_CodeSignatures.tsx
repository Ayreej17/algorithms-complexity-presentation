import { CheckCircle2, Cpu } from 'lucide-react';

export default function Slide3_CodeSignatures() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full pt-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Algorithm Signatures</h2>
        <p className="text-xl text-slate-400">Subset Sum Problem: Given numbers, is there a subset that adds to a target?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 flex-1 w-full pb-12">
        {/* Verifier */}
        <div className="flex flex-col h-full">
          <div className="mb-4 flex items-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6 mr-3" />
            <h3 className="text-2xl font-bold">Polynomial Verifier (Class NP)</h3>
          </div>
          <p className="text-slate-400 mb-6">If given a "certificate" (a proposed answer), checking it is incredibly fast. Time: O(N).</p>
          <div className="flex-1 bg-slate-950 border border-slate-800 p-6 rounded-2xl font-mono text-sm overflow-x-auto text-slate-300">
            <span className="text-pink-400">def</span> <span className="text-blue-400">verify_subset</span>(certificate, target):<br/>
            &nbsp;&nbsp;<span className="text-slate-500"># Check if the proposed subset sums to target</span><br/>
            &nbsp;&nbsp;total <span className="text-pink-400">=</span> <span className="text-purple-400">0</span><br/>
            &nbsp;&nbsp;<span className="text-pink-400">for</span> num <span className="text-pink-400">in</span> certificate:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;total <span className="text-pink-400">+=</span> num<br/>
            &nbsp;&nbsp;<span className="text-pink-400">return</span> total <span className="text-pink-400">==</span> target
          </div>
        </div>

        {/* Solver */}
        <div className="flex flex-col h-full">
          <div className="mb-4 flex items-center text-rose-400">
            <Cpu className="w-6 h-6 mr-3" />
            <h3 className="text-2xl font-bold">Exponential Solver (Brute Force)</h3>
          </div>
          <p className="text-slate-400 mb-6">Without a certificate, we must generate all combinations to find it. Time: O(2^N).</p>
          <div className="flex-1 bg-slate-950 border border-slate-800 p-6 rounded-2xl font-mono text-sm overflow-x-auto text-slate-300">
            <span className="text-pink-400">def</span> <span className="text-blue-400">solve_subset</span>(numbers, target):<br/>
            &nbsp;&nbsp;<span className="text-slate-500"># Check EVERY possible combination</span><br/>
            &nbsp;&nbsp;<span className="text-pink-400">for</span> r <span className="text-pink-400">in</span> <span className="text-blue-400">range</span>(<span className="text-purple-400">1</span>, <span className="text-blue-400">len</span>(numbers)<span className="text-pink-400">+</span><span className="text-purple-400">1</span>):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">for</span> subset <span className="text-pink-400">in</span> itertools.combinations(numbers, r):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> <span className="text-blue-400">sum</span>(subset) <span className="text-pink-400">==</span> target:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> subset<br/>
            &nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-purple-400">None</span>
          </div>
        </div>
      </div>
    </div>
  );
}
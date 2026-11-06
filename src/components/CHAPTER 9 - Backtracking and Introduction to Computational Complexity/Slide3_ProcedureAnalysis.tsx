import { CheckCircle2, Code2, ListOrdered, ArrowDown } from 'lucide-react';

export default function Slide3_ProcedureAnalysis() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure: Analyzing Code Complexity
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Step-by-step rigorous methodology to derive Big-O and determine algorithmic class.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Left column: 4-Step Procedure */}
        <div className="md:col-span-5 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <ListOrdered className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">4-Step Derivation Procedure</h3>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3 text-xs">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <span className="font-bold text-white block">Define Input Metric (n)</span>
                <p className="text-slate-400">Identify what defines size: array length <code className="text-indigo-300">len(arr)</code>, matrix dimensions, or bit-length.</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-slate-600">
              <ArrowDown className="w-4 h-4" />
            </div>

            <div className="flex gap-3 text-xs">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <span className="font-bold text-white block">Count Dominant Operations</span>
                <p className="text-slate-400">Focus on the most frequently executed primitive instruction inside the innermost loop or recursive call.</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-slate-600">
              <ArrowDown className="w-4 h-4" />
            </div>

            <div className="flex gap-3 text-xs">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <span className="font-bold text-white block">Drop Non-Dominant Terms</span>
                <p className="text-slate-400">If total count is <code className="text-purple-300">f(n) = 3n² + 40n + 100</code>, as <code className="text-purple-300">n → ∞</code>, <code className="text-purple-300">3n²</code> completely overshadows <code className="text-slate-500">40n + 100</code>.</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-slate-600">
              <ArrowDown className="w-4 h-4" />
            </div>

            <div className="flex gap-3 text-xs">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <span className="font-bold text-white block">Drop Constant Coefficients</span>
                <p className="text-slate-400">Drop multiplicative constant 3. Conclude asymptotic worst-case <span className="font-mono text-emerald-400 font-bold">O(n²)</span>.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Code Signatures Comparison */}
        <div className="md:col-span-7 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400">
                <Code2 className="w-5 h-5" />
                <h3 className="font-bold text-white text-sm">Linear O(n) vs Quadratic O(n²) vs Exponential O(2ⁿ)</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Python Implementations</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {/* Linear */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-teal-400 font-bold">Linear Search — Single Loop</span>
                  <span className="text-emerald-400">O(n) Time | O(1) Space</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-pink-400">def</span> <span className="text-blue-400">find_element</span>(arr, target):<br />
                  &nbsp;&nbsp;<span className="text-pink-400">for</span> item <span className="text-pink-400">in</span> arr: <span className="text-slate-500"># Runs n times</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> item == target: <span className="text-pink-400">return</span> <span className="text-purple-400">True</span><br />
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-purple-400">False</span>
                </div>
              </div>

              {/* Quadratic */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-amber-400 font-bold">Nested Search — Pair Validation</span>
                  <span className="text-amber-400">O(n²) Time | O(1) Space</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-pink-400">def</span> <span className="text-blue-400">has_duplicate_pairs</span>(arr):<br />
                  &nbsp;&nbsp;<span className="text-pink-400">for</span> i <span className="text-pink-400">in</span> <span className="text-blue-400">range</span>(<span className="text-blue-400">len</span>(arr)): <span className="text-slate-500"># n iterations</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">for</span> j <span className="text-pink-400">in</span> <span className="text-blue-400">range</span>(i + <span className="text-purple-400">1</span>, <span className="text-blue-400">len</span>(arr)): <span className="text-slate-500"># n/2 iterations</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> arr[i] == arr[j]: <span className="text-pink-400">return</span> <span className="text-purple-400">True</span><br />
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-purple-400">False</span>
                </div>
              </div>

              {/* Exponential Backtracking */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-rose-400 font-bold">Recursive Branching — All Subsets</span>
                  <span className="text-rose-400">O(2ⁿ) Time | O(n) Space</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-pink-400">def</span> <span className="text-blue-400">generate_subsets</span>(arr, index=<span className="text-purple-400">0</span>):<br />
                  &nbsp;&nbsp;<span className="text-pink-400">if</span> index == <span className="text-blue-400">len</span>(arr): <span className="text-pink-400">return</span> [<span className="text-purple-400">[]</span>] <span className="text-slate-500"># Base case</span><br />
                  &nbsp;&nbsp;rest = generate_subsets(arr, index + <span className="text-purple-400">1</span>) <span className="text-slate-500"># 2 recursive branches</span><br />
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> rest + [subset + [arr[index]] <span className="text-pink-400">for</span> subset <span className="text-pink-400">in</span> rest]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between bg-indigo-950/30 border border-indigo-500/20 px-4 py-2.5 rounded-xl text-xs text-indigo-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Core Principle: Focus on growth behavior as n scales towards infinity, not localized tiny-n discrepancies.</span>
        </div>
      </div>
    </div>
  );
}


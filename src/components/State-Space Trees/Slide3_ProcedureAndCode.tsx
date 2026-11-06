import { ListOrdered, Code2, AlertCircle } from 'lucide-react';

export default function Slide3_ProcedureAndCode() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Procedure: Constructing State-Space Trees
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The procedural algorithm for dynamically generating and evaluating state-space trees.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: 4-Step Procedure */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <ListOrdered className="w-5 h-5" />
            <h3 className="font-bold text-white text-base">Generation Procedure</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-white block mb-1">Step 1: Initialize Root (Depth 0)</span>
              <p className="text-slate-400">Push root node (empty assignment) onto the active stack. Root becomes the initial E-node.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-white block mb-1">Step 2: Generate Next Child Branch</span>
              <p className="text-slate-400">Apply decision rule to spawn left-most eligible child node. Child represents an extended partial state.</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-white block mb-1">Step 3: Bounding & Feasibility Filter</span>
              <p className="text-slate-400">Evaluate bounding function <code className="text-indigo-300 font-mono">B(node)</code>. If false, mark node as <strong>DEAD</strong> and kill the branch immediately (zero expansion).</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-white block mb-1">Step 4: Recurse or Backtrack</span>
              <p className="text-slate-400">If child is valid and depth &lt; N, child becomes new E-node (DFS). If leaf reached, verify solution, then backtrack to parent.</p>
            </div>
          </div>
        </div>

        {/* Right: Code Example */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="w-4 h-4" />
              <h3 className="font-bold text-white text-sm">State-Space Tree Traversal</h3>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">DFS Generator</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
            <span className="text-pink-400">class</span> <span className="text-yellow-400">TreeNode</span>:<br />
            &nbsp;&nbsp;<span className="text-pink-400">def</span> <span className="text-blue-400">__init__</span>(self, depth, state):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.depth = depth<br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.state = state<br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.is_dead = <span className="text-purple-400">False</span><br />
            <br />
            <span className="text-pink-400">def</span> <span className="text-blue-400">explore_tree</span>(node, max_depth, bounds_fn):<br />
            &nbsp;&nbsp;<span className="text-slate-500"># Bounding check: instantly prune</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">if</span> <span className="text-pink-400">not</span> bounds_fn(node.state):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;node.is_dead = <span className="text-purple-400">True</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-rose-400 font-bold"># Backtrack: branch terminated!</span><br />
            <br />
            &nbsp;&nbsp;<span className="text-slate-500"># Terminal leaf condition</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">if</span> node.depth == max_depth:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;yield node.state<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span><br />
            <br />
            &nbsp;&nbsp;<span className="text-slate-500"># Spawn children (E-node expands)</span><br />
            &nbsp;&nbsp;<span className="text-pink-400">for</span> choice <span className="text-pink-400">in</span> get_branches(node.state):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;child = TreeNode(node.depth + <span className="text-purple-400">1</span>, node.state + [choice])<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">yield from</span> explore_tree(child, max_depth, bounds_fn)
          </div>

          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Notice how the call stack mirrors the active path from root to current node.</span>
          </div>
        </div>
      </div>
    </div>
  );
}


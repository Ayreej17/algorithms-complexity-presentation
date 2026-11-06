import { GitBranch, Cpu, ArrowRight } from 'lucide-react';

export default function Slide2_TreeGeometryBitmasks() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Binary Tree Geometry & Hardware Bitmasks
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          How the 2ⁿ state space maps directly to computer processor bitwise arithmetic.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Binary Tree Geometry */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 pb-2 border-b border-slate-800">
            <GitBranch className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">Perfect Binary Tree Geometry</h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Because every item presents exactly two mutually exclusive choices (Include or Exclude), the unpruned state-space tree forms a <strong>strictly balanced full binary tree</strong>.
          </p>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-500">Branching Factor:</span>
              <span className="text-cyan-400 font-bold">b = 2</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-500">Tree Depth:</span>
              <span className="text-cyan-400 font-bold">d = N (number of items)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-500">Total Leaf Nodes:</span>
              <span className="text-rose-400 font-bold">2ᴺ distinct subsets</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-500">Total Tree Nodes:</span>
              <span className="text-purple-400 font-bold">2ᴺ⁺¹ - 1 nodes</span>
            </div>
          </div>
        </div>

        {/* Bitmask Correspondence */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-teal-400 pb-2 border-b border-slate-800">
            <Cpu className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">1-to-1 Bitmask Representation</h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Every subset corresponds to an integer bitmask from <code className="text-teal-300 font-mono">0</code> to <code className="text-teal-300 font-mono">2ᴺ - 1</code>, where bit <code className="text-teal-300 font-mono">i</code> indicates whether item <code className="text-teal-300 font-mono">i</code> is included:
          </p>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span>Mask: <span className="text-emerald-400 font-bold">0b000 (0)</span></span>
              <ArrowRight className="w-3 h-3 text-slate-600" />
              <span className="text-slate-400">Empty set &#123;&#125;</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Mask: <span className="text-emerald-400 font-bold">0b101 (5)</span></span>
              <ArrowRight className="w-3 h-3 text-slate-600" />
              <span className="text-cyan-400">Items &#123;w₀, w₂&#125;</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Mask: <span className="text-emerald-400 font-bold">0b111 (7)</span></span>
              <ArrowRight className="w-3 h-3 text-slate-600" />
              <span className="text-purple-400">All Items &#123;w₀, w₁, w₂&#125;</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400">
            Allows ultra-fast bitwise verification using CPU bitwise operators: <code className="text-indigo-300 font-mono">(mask & (1 &lt;&lt; i)) !== 0</code>.
          </p>
        </div>
      </div>
    </div>
  );
}

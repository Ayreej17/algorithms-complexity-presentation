import { Layers, ArrowDownUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Slide2_StackMechanics() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Call Stack Mechanics & State Unwinding
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          How the program call stack orchestrates backtracking behind the scenes.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-center">
        {/* Left: Call Stack Diagram */}
        <div className="md:col-span-5 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-indigo-400">
              <Layers className="w-5 h-5" />
              <h3 className="font-bold text-white text-sm">Hardware Call Stack Frames</h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">O(depth) Memory</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {/* Stack Frame 3 */}
            <div className="bg-amber-950/30 border border-amber-500/40 p-3 rounded-xl">
              <div className="flex justify-between text-amber-300 font-bold mb-1">
                <span>Frame 3: backtrack(depth=3)</span>
                <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded">Active / Dead End</span>
              </div>
              <p className="text-[11px] text-slate-400">Hits conflict. Returns. Frame popped!</p>
            </div>

            {/* Stack Frame 2 */}
            <div className="bg-indigo-950/30 border border-indigo-500/40 p-3 rounded-xl">
              <div className="flex justify-between text-indigo-300 font-bold mb-1">
                <span>Frame 2: backtrack(depth=2)</span>
                <span className="text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded">Paused</span>
              </div>
              <p className="text-[11px] text-slate-400">Execution resumes right at the "Undo" statement.</p>
            </div>

            {/* Stack Frame 1 */}
            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
              <div className="flex justify-between text-slate-300 font-bold mb-1">
                <span>Frame 1: backtrack(depth=1)</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">Waiting</span>
              </div>
              <p className="text-[11px] text-slate-400">Holds state of first choice.</p>
            </div>

            {/* Root Frame */}
            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
              <div className="flex justify-between text-slate-400 font-bold mb-1">
                <span>Frame 0: main()</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-500">Root</span>
              </div>
              <p className="text-[11px] text-slate-500">Initial problem input.</p>
            </div>
          </div>
        </div>

        {/* Right: Key Concepts & Base Cases */}
        <div className="md:col-span-7 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ArrowDownUp className="w-5 h-5 text-indigo-400" />
              Why Single-Instance Mutable State Works
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If an algorithm cloned arrays at every branch, memory would explode to <span className="text-rose-400 font-mono">O(2ⁿ · n)</span>. By strictly obeying <strong>Choose → Explore → Undo</strong>, an algorithm can share a <em>single global mutable list</em> in memory. The list grows as we go deeper, and shrinks as we backtrack!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                <CheckCircle2 className="w-4 h-4" /> SUCCESS BASE CASE
              </div>
              <p className="text-xs text-slate-300">
                When <code className="text-emerald-300 font-mono">depth == target</code>, a full valid candidate is achieved. Copy state to results and return.
              </p>
            </div>

            <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-1">
                <AlertTriangle className="w-4 h-4" /> FAILURE DEAD END
              </div>
              <p className="text-xs text-slate-300">
                When constraints are violated or no choices remain, simply <code className="text-rose-300 font-mono">return</code>. Recursion unwinds back to caller.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


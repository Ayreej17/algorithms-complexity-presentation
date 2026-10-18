import { ShieldAlert, BrainCircuit, Activity } from 'lucide-react';

export default function Slide5_HierarchyImpact() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full pt-12 items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-6">If P = NP...</h2>
        <p className="text-2xl text-slate-400 max-w-3xl">
          If finding a solution becomes as fast as verifying one, the world changes fundamentally.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center w-full">
        {/* Visual Euler Diagram */}
        <div className="flex-1 flex justify-center items-center relative h-80">
          <div className="absolute w-80 h-80 rounded-full border-4 border-dashed border-slate-600 flex items-start pt-6 justify-center text-slate-500 font-bold">
            NP-Hard
          </div>
          <div className="absolute w-64 h-64 rounded-full border-4 border-pink-500/50 bg-pink-500/5 flex items-start pt-6 justify-center text-pink-400 font-bold shadow-[0_0_30px_rgba(236,72,153,0.1)]">
            NP (Verifiable)
          </div>
          <div className="absolute w-32 h-32 mt-24 mr-16 rounded-full border-4 border-indigo-500 bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            P (Solvable)
          </div>
          <div className="absolute bg-slate-800 px-4 py-2 rounded-lg text-rose-300 font-bold text-sm border border-rose-500/30 mt-8 ml-32 z-10 shadow-xl">
            NP-Complete
          </div>
        </div>

        {/* Consequences List */}
        <div className="flex-1 space-y-6">
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex items-start">
            <ShieldAlert className="w-8 h-8 text-rose-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-slate-200 mb-1">Cryptography Collapses</h4>
              <p className="text-slate-400 text-sm">Modern security relies on the fact that factoring large primes is NP. If P=NP, all passwords and banks are instantly crackable.</p>
            </div>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex items-start">
            <BrainCircuit className="w-8 h-8 text-emerald-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-slate-200 mb-1">Cures for Diseases</h4>
              <p className="text-slate-400 text-sm">Protein folding (currently an NP problem) becomes solvable. We could instantly calculate cures for cancer and other genetic diseases.</p>
            </div>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex items-start">
            <Activity className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-slate-200 mb-1">Perfect Logistics</h4>
              <p className="text-slate-400 text-sm">The Traveling Salesperson is solved. Global shipping, AI routing, and resource management become mathematically perfect.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ShieldAlert, BrainCircuit, Activity, Globe } from 'lucide-react';

export default function Slide6_HierarchyImpact() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-semibold text-xs mb-2 border border-rose-500/30">
          <Globe className="w-4 h-4" /> EXISTENTIAL IMPLICATIONS
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">If P = NP...</h2>
        <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto">
          If discovering a solution ever becomes as fast as verifying one, the foundation of computer science and society transforms overnight.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {/* Consequence 1 */}
        <div className="bg-slate-900/90 border border-rose-500/30 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-3 text-rose-400 pb-2 border-b border-slate-800">
            <ShieldAlert className="w-6 h-6 flex-shrink-0" />
            <h4 className="font-bold text-white text-base">Global Cryptography Collapses</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            All modern digital security (RSA, ECC, Bitcoin, HTTPS, banking encryption) relies on factoring large primes and discrete logs being easy to verify but hard to solve. If P = NP, all secret keys and passwords are instantly crackable in seconds.
          </p>
        </div>

        {/* Consequence 2 */}
        <div className="bg-slate-900/90 border border-emerald-500/30 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-3 text-emerald-400 pb-2 border-b border-slate-800">
            <BrainCircuit className="w-6 h-6 flex-shrink-0" />
            <h4 className="font-bold text-white text-base">Revolution in Medicine</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Protein folding, drug molecule design, and genome analysis are NP problems. If P = NP, computers could calculate optimal enzyme synthesis and custom genetic cures for cancer and rare diseases in minutes.
          </p>
        </div>

        {/* Consequence 3 */}
        <div className="bg-slate-900/90 border border-blue-500/30 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-3 text-blue-400 pb-2 border-b border-slate-800">
            <Activity className="w-6 h-6 flex-shrink-0" />
            <h4 className="font-bold text-white text-base">Mathematically Perfect Logistics</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            The Traveling Salesperson and airline scheduling become solvable in polynomial time. Global supply chains, flight routes, and power grid distributions run at mathematically optimal efficiency with zero wasted energy.
          </p>
        </div>
      </div>
    </div>
  );
}


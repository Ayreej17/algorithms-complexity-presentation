import { Map, Activity, AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Slide2_RealWorld() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          The Exponential Explosion & Real-World Asymmetry
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Why solving from scratch fails on NP problems like the Traveling Salesperson (TSP), yet verification remains effortless.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center justify-center mb-8">
        {/* 10 Cities */}
        <div className="flex-1 bg-slate-900/90 border-t-4 border-t-indigo-500 border border-slate-800 p-6 rounded-2xl w-full text-center relative overflow-hidden">
          <Map className="w-10 h-10 text-indigo-400 mx-auto mb-3 opacity-60" />
          <h3 className="text-lg font-bold text-slate-200 mb-1">10 Cities</h3>
          <div className="text-3xl font-mono font-black text-indigo-300 mb-3">3.6 Million</div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Possible routes: <code className="text-indigo-300 font-mono">10! / 2</code>. Easily solved by a standard laptop in a fraction of a millisecond.
          </p>
        </div>

        <ChevronRight className="w-8 h-8 text-slate-700 hidden md:block" />

        {/* 20 Cities */}
        <div className="flex-1 bg-slate-900/90 border-t-4 border-t-purple-500 border border-slate-800 p-6 rounded-2xl w-full text-center">
          <Activity className="w-10 h-10 text-purple-400 mx-auto mb-3 opacity-60" />
          <h3 className="text-lg font-bold text-slate-200 mb-1">20 Cities</h3>
          <div className="text-3xl font-mono font-black text-purple-300 mb-3">1.2 × 10¹⁷</div>
          <p className="text-slate-400 text-xs leading-relaxed">
            121 Quadrillion routes. Requires weeks of compute time on a modern enterprise supercomputer cluster.
          </p>
        </div>

        <ChevronRight className="w-8 h-8 text-slate-700 hidden md:block" />

        {/* 60 Cities */}
        <div className="flex-1 bg-slate-900/90 border-t-4 border-t-rose-500 border border-slate-800 p-6 rounded-2xl w-full text-center">
          <AlertTriangle className="w-10 h-10 text-rose-400 mx-auto mb-3 opacity-60" />
          <h3 className="text-lg font-bold text-slate-200 mb-1">60 Cities</h3>
          <div className="text-3xl font-mono font-black text-rose-300 mb-3">&gt; Atoms in Universe</div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Mathematically impossible. No computer physically capable of existing in our cosmos could ever brute-force this.
          </p>
        </div>
      </div>

      {/* The Verification Contrast */}
      <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span>
            <strong>Yet Verification is Instant:</strong> If someone gives you a sequence of 60 cities and claims "this route is &lt; 5,000 miles", you can sum the 60 distances in <strong>0.00001 seconds (O(N) time)</strong> on an iPhone!
          </span>
        </div>
      </div>
    </div>
  );
}

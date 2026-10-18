import { Map, Activity, AlertTriangle, ChevronRight } from 'lucide-react';

export default function Slide2_RealWorld() {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full pt-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">The Exponential Explosion</h2>
        <p className="text-xl text-slate-400">Why brute force fails in NP problems like the Traveling Salesperson (TSP).</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center flex-1 w-full">
        {/* 10 Cities */}
        <div className="flex-1 bg-slate-800/50 border-t-4 border-t-indigo-500 border border-slate-700 p-8 rounded-2xl w-full text-center relative overflow-hidden">
          <Map className="w-12 h-12 text-indigo-400 mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold text-slate-300 mb-2">10 Cities</h3>
          <div className="text-4xl font-mono font-bold text-indigo-300 mb-4">3.6 Million</div>
          <p className="text-slate-400 text-sm">Possible routes. Easily solved by a standard laptop in a fraction of a second.</p>
        </div>

        <ChevronRight className="w-12 h-12 text-slate-600 hidden md:block" />

        {/* 20 Cities */}
        <div className="flex-1 bg-slate-800/50 border-t-4 border-t-purple-500 border border-slate-700 p-8 rounded-2xl w-full text-center">
          <Activity className="w-12 h-12 text-purple-400 mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold text-slate-300 mb-2">20 Cities</h3>
          <div className="text-4xl font-mono font-bold text-purple-300 mb-4">1.2 × 10¹⁷</div>
          <p className="text-slate-400 text-sm">121 Quadrillion routes. Takes weeks for a modern supercomputer.</p>
        </div>

        <ChevronRight className="w-12 h-12 text-slate-600 hidden md:block" />

        {/* 60 Cities */}
        <div className="flex-1 bg-slate-800/50 border-t-4 border-t-pink-500 border border-slate-700 p-8 rounded-2xl w-full text-center">
          <AlertTriangle className="w-12 h-12 text-pink-400 mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold text-slate-300 mb-2">60 Cities</h3>
          <div className="text-4xl font-mono font-bold text-pink-300 mb-4">&gt; Atoms in Universe</div>
          <p className="text-slate-400 text-sm">Impossible. No computer capable of existing could ever brute-force this.</p>
        </div>
      </div>
    </div>
  );
}
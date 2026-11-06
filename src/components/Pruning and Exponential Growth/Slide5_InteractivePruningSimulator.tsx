import { useState, useMemo } from 'react';
import { Scissors, Sliders, Sparkles } from 'lucide-react';

export default function Slide5_InteractivePruningSimulator() {
  const [depthN, setDepthN] = useState<number>(10);
  const [pruneDepthK, setPruneDepthK] = useState<number>(3);
  const [pruningEnabled, setPruningEnabled] = useState<boolean>(true);

  const stats = useMemo(() => {
    const totalLeaves = Math.pow(2, depthN);
    const effectivePruneK = Math.min(pruneDepthK, depthN);

    let leavesExplored = totalLeaves;
    let leavesSaved = 0;

    if (pruningEnabled) {
      // If we prune 1 branch at depth K, that sub-branch has 2^(N - K) leaves
      // Suppose half of branches at depth K are pruned:
      const branchesAtK = Math.pow(2, effectivePruneK);
      const prunedBranches = Math.floor(branchesAtK * 0.6); // 60% branches pruned
      leavesSaved = prunedBranches * Math.pow(2, depthN - effectivePruneK);
      leavesExplored = Math.max(1, totalLeaves - leavesSaved);
    }

    const savedPercent = Math.min(100, Math.round((leavesSaved / totalLeaves) * 100));

    // Approximate time assuming 1 MHz node evaluations
    const formatTime = (nodes: number) => {
      const sec = nodes / 1e6;
      if (sec < 0.001) return '< 1 millisecond';
      if (sec < 1) return `${(sec * 1000).toFixed(0)} ms`;
      if (sec < 60) return `${sec.toFixed(1)} seconds`;
      if (sec < 3600) return `${(sec / 60).toFixed(1)} minutes`;
      if (sec < 86400) return `${(sec / 3600).toFixed(1)} hours`;
      const days = sec / 86400;
      if (days < 365) return `${days.toFixed(1)} days`;
      return `${(days / 365).toFixed(1)} years`;
    };

    return {
      totalLeaves,
      leavesExplored,
      leavesSaved,
      savedPercent,
      rawTime: formatTime(totalLeaves),
      prunedTime: formatTime(leavesExplored),
    };
  }, [depthN, pruneDepthK, pruningEnabled]);

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Live Interactive Simulation Lab
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Pruning & Exponential Cutoff Simulator
          </h2>
        </div>

        <button
          onClick={() => setPruningEnabled(!pruningEnabled)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
            pruningEnabled
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
              : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
          }`}
        >
          <Scissors className="w-3.5 h-3.5" />
          {pruningEnabled ? 'Pruning: ACTIVE' : 'Pruning: OFF (Raw Brute Force)'}
        </button>
      </div>

      {/* Sliders Control Panel */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl mb-6 grid sm:grid-cols-2 gap-6">
        {/* Slider 1: Tree Depth N */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-400" /> Total Tree Depth (N):
            </span>
            <span className="font-mono text-indigo-300 font-bold bg-indigo-500/20 px-2.5 py-0.5 rounded border border-indigo-500/30">
              N = {depthN} (2^{depthN} leaves)
            </span>
          </div>
          <input
            type="range"
            min="4"
            max="18"
            value={depthN}
            onChange={(e) => setDepthN(parseInt(e.target.value) || 4)}
            className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>N = 4 (16 leaves)</span>
            <span>N = 10 (1,024 leaves)</span>
            <span>N = 18 (262,144 leaves)</span>
          </div>
        </div>

        {/* Slider 2: Pruning Depth K */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-white flex items-center gap-2">
              <Scissors className="w-4 h-4 text-rose-400" /> Pruning Trigger Depth (k):
            </span>
            <span className="font-mono text-rose-300 font-bold bg-rose-500/20 px-2.5 py-0.5 rounded border border-rose-500/30">
              Depth k = {Math.min(pruneDepthK, depthN)}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max={Math.max(1, depthN - 1)}
            value={Math.min(pruneDepthK, depthN - 1)}
            onChange={(e) => setPruneDepthK(parseInt(e.target.value) || 1)}
            disabled={!pruningEnabled}
            className="w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer disabled:opacity-30"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>k = 1 (Immediate Root Pruning)</span>
            <span>k = {Math.max(1, depthN - 1)} (Deep / Late Pruning)</span>
          </div>
        </div>
      </div>

      {/* Visual Bar Comparison */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl mb-6 space-y-4">
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="text-white">Search Space Explosion & Pruning Truncation</span>
          <span className="text-emerald-400 font-mono font-bold">
            {stats.savedPercent}% of Total Tree Eliminated
          </span>
        </div>

        <div className="w-full h-8 bg-slate-950 rounded-xl overflow-hidden flex border border-slate-800 font-mono text-[11px] font-bold">
          <div
            className="bg-indigo-600 flex items-center justify-center text-white transition-all duration-500 px-2 overflow-hidden whitespace-nowrap"
            style={{ width: `${Math.max(5, 100 - stats.savedPercent)}%` }}
          >
            Explored: {stats.leavesExplored.toLocaleString()}
          </div>
          {stats.savedPercent > 0 && (
            <div
              className="bg-rose-600/80 flex items-center justify-center text-rose-100 transition-all duration-500 px-2 overflow-hidden whitespace-nowrap"
              style={{ width: `${stats.savedPercent}%` }}
            >
              ✂ Pruned: {stats.leavesSaved.toLocaleString()}
            </div>
          )}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Unpruned Search Space</span>
          <span className="text-xl font-black font-mono text-rose-400">
            {stats.totalLeaves.toLocaleString()}
          </span>
          <span className="text-[10px] text-slate-500 block mt-0.5">2^{depthN} leaves</span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Leaves Visited</span>
          <span className="text-xl font-black font-mono text-emerald-400">
            {stats.leavesExplored.toLocaleString()}
          </span>
          <span className="text-[10px] text-slate-500 block mt-0.5">Active search paths</span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Unpruned Runtime</span>
          <span className="text-base font-bold font-mono text-rose-300">
            {stats.rawTime}
          </span>
          <span className="text-[10px] text-slate-500 block mt-0.5">Brute-force baseline</span>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <span className="text-[11px] text-slate-400 block mb-1">Pruned Runtime</span>
          <span className="text-base font-bold font-mono text-emerald-400">
            {stats.prunedTime}
          </span>
          <span className="text-[10px] text-slate-500 block mt-0.5">With bounding function</span>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface TreeNodeData {
  id: string;
  depth: number;
  label: string;
  sum: number;
  status: 'unvisited' | 'active' | 'visited' | 'pruned' | 'solution';
  x: number;
  y: number;
  parent?: string;
}

export default function Slide5_InteractiveTreeExplorer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const timerRef = useRef<any>(null);

  // Binary tree for items: [3, 5, 2], Target Sum = 8
  // Depth 0: Root (sum = 0)
  // Depth 1: Include 3 (sum=3), Exclude 3 (sum=0)
  // Depth 2: Include 5 (sum=8! or 5), Exclude 5 (sum=3 or 0)
  // Depth 3: Include 2, Exclude 2 ...
  const baseNodes: TreeNodeData[] = [
    // Depth 0
    { id: '0', depth: 0, label: 'Root ()', sum: 0, status: 'unvisited', x: 250, y: 35 },

    // Depth 1
    { id: '1-inc', depth: 1, label: '+3', sum: 3, status: 'unvisited', x: 130, y: 105, parent: '0' },
    { id: '1-exc', depth: 1, label: '-3', sum: 0, status: 'unvisited', x: 370, y: 105, parent: '0' },

    // Depth 2
    { id: '2-inc-inc', depth: 2, label: '+5', sum: 8, status: 'unvisited', x: 70, y: 180, parent: '1-inc' },
    { id: '2-inc-exc', depth: 2, label: '-5', sum: 3, status: 'unvisited', x: 190, y: 180, parent: '1-inc' },
    { id: '2-exc-inc', depth: 2, label: '+5', sum: 5, status: 'unvisited', x: 310, y: 180, parent: '1-exc' },
    { id: '2-exc-exc', depth: 2, label: '-5', sum: 0, status: 'unvisited', x: 430, y: 180, parent: '1-exc' },

    // Depth 3
    { id: '3-sol1', depth: 3, label: 'Sol (8)', sum: 8, status: 'unvisited', x: 40, y: 255, parent: '2-inc-inc' },
    { id: '3-dead1', depth: 3, label: 'Dead (10)', sum: 10, status: 'unvisited', x: 100, y: 255, parent: '2-inc-inc' },
    { id: '3-inc3', depth: 3, label: '+2 (5)', sum: 5, status: 'unvisited', x: 160, y: 255, parent: '2-inc-exc' },
    { id: '3-dead2', depth: 3, label: '-2 (3)', sum: 3, status: 'unvisited', x: 220, y: 255, parent: '2-inc-exc' },
    { id: '3-inc4', depth: 3, label: '+2 (7)', sum: 7, status: 'unvisited', x: 280, y: 255, parent: '2-exc-inc' },
    { id: '3-sol2', depth: 3, label: '-2 (5)', sum: 5, status: 'unvisited', x: 340, y: 255, parent: '2-exc-inc' },
    { id: '3-dead3', depth: 3, label: '+2 (2)', sum: 2, status: 'unvisited', x: 400, y: 255, parent: '2-exc-exc' },
    { id: '3-dead4', depth: 3, label: '-2 (0)', sum: 0, status: 'unvisited', x: 460, y: 255, parent: '2-exc-exc' },
  ];

  // Steps sequence of DFS
  const traceSequence = [
    { activeId: '0', message: 'E-Node: Expand Root (Sum = 0)' },
    { activeId: '1-inc', message: 'CHOOSE: Include item 3. Sum = 3. Generating left branch.' },
    { activeId: '2-inc-inc', message: 'CHOOSE: Include item 5. Sum = 8. Target 8 reached!' },
    { activeId: '3-sol1', message: 'SOLUTION FOUND! Subset [3, 5] sums exactly to target 8.' },
    { activeId: '3-dead1', message: 'PRUNED: Adding item 2 makes sum 10 > 8 (Over-sum bound violated!).' },
    { activeId: '2-inc-exc', message: 'BACKTRACK & CHOOSE: Exclude item 5. Sum = 3.' },
    { activeId: '3-inc3', message: 'EXPLORE: Include 2. Sum = 5 ≠ 8 (Leaf complete, not target).' },
    { activeId: '3-dead2', message: 'EXPLORE: Exclude 2. Sum = 3 ≠ 8 (Leaf complete, dead end).' },
    { activeId: '1-exc', message: 'BACKTRACK to Root: Exclude item 3. Sum = 0. Generating right subtree.' },
    { activeId: '2-exc-inc', message: 'CHOOSE: Include item 5. Sum = 5.' },
    { activeId: '3-inc4', message: 'EXPLORE: Include 2. Sum = 7 ≠ 8 (Dead end).' },
    { activeId: '3-sol2', message: 'EXPLORE: Exclude 2. Sum = 5 ≠ 8 (Dead end).' },
    { activeId: '2-exc-exc', message: 'CHOOSE: Exclude item 5. Sum = 0.' },
    { activeId: '3-dead3', message: 'PRUNED: Remaining elements cannot reach 8. Search complete!' },
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < traceSequence.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 900);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, traceSequence.length]);

  const activeInfo = traceSequence[currentStep];

  // Calculate node statuses up to currentStep
  const getNodeStatus = (nodeId: string) => {
    const stepIdx = traceSequence.findIndex((s) => s.activeId === nodeId);
    if (stepIdx === -1 || stepIdx > currentStep) return 'unvisited';
    if (stepIdx === currentStep) return 'active';
    if (nodeId.includes('sol')) return 'solution';
    if (nodeId.includes('dead')) return 'pruned';
    return 'visited';
  };

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Live Interactive Visualizer
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            State-Space Tree DFS Traversal
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center gap-1.5 text-xs transition-all shadow-md shadow-indigo-600/30"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? 'Pause' : 'Auto Play'}
          </button>
          <button
            onClick={() => currentStep < traceSequence.length - 1 && setCurrentStep(currentStep + 1)}
            disabled={isPlaying || currentStep >= traceSequence.length - 1}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold flex items-center gap-1 text-xs transition-all disabled:opacity-40"
          >
            Step <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => { setIsPlaying(false); setCurrentStep(0); }}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive SVG Tree */}
        <div className="md:col-span-8 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex flex-col items-center">
          <svg viewBox="0 0 500 290" className="w-full h-auto max-h-[340px]">
            {/* Draw Connecting Edges */}
            {baseNodes.map((node) => {
              if (!node.parent) return null;
              const parentNode = baseNodes.find((p) => p.id === node.parent);
              if (!parentNode) return null;
              const isParentVisited = getNodeStatus(parentNode.id) !== 'unvisited';
              const isNodeVisited = getNodeStatus(node.id) !== 'unvisited';

              return (
                <line
                  key={`edge-${node.id}`}
                  x1={parentNode.x}
                  y1={parentNode.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={isParentVisited && isNodeVisited ? '#6366f1' : '#334155'}
                  strokeWidth={isParentVisited && isNodeVisited ? 2 : 1}
                  strokeDasharray={isNodeVisited ? 'none' : '3,3'}
                />
              );
            })}

            {/* Draw Nodes */}
            {baseNodes.map((node) => {
              const status = getNodeStatus(node.id);
              const isActive = status === 'active';
              const isSolution = status === 'solution';
              const isPruned = status === 'pruned';
              const isVisited = status === 'visited';

              return (
                <g key={node.id} className="cursor-pointer">
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 17 : 14}
                    fill={
                      isActive
                        ? '#6366f1'
                        : isSolution
                        ? '#059669'
                        : isPruned
                        ? '#be123c'
                        : isVisited
                        ? '#1e293b'
                        : '#0f172a'
                    }
                    stroke={
                      isActive
                        ? '#a5b4fc'
                        : isSolution
                        ? '#34d399'
                        : isPruned
                        ? '#f43f5e'
                        : isVisited
                        ? '#64748b'
                        : '#334155'
                    }
                    strokeWidth={isActive ? 3 : 1.5}
                    className={`transition-all duration-300 ${isActive ? 'filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : ''}`}
                  />
                  <text
                    x={node.x}
                    y={node.y + 3.5}
                    textAnchor="middle"
                    fill={status === 'unvisited' ? '#64748b' : '#ffffff'}
                    fontSize={node.depth === 3 ? '8px' : '9px'}
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {node.depth === 3 && isSolution ? '★' : node.depth === 3 && isPruned ? '✕' : node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-indigo-500" /> Active E-Node
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-600" /> Valid Solution (★)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-600" /> Pruned Dead End (✕)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" /> Unvisited
            </div>
          </div>
        </div>

        {/* Right: Traversal Information */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400">Step {currentStep + 1} of {traceSequence.length}</span>
              <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
                DFS Stack
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium min-h-[44px]">
              {activeInfo.message}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
              <span className="text-[11px] text-slate-400 block mb-1">Target Problem</span>
              <span className="text-sm font-bold text-white font-mono">Subset Sum = 8</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">S = &#123;3, 5, 2&#125;</span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
              <span className="text-[11px] text-slate-400 block mb-1">Theoretical Nodes</span>
              <span className="text-sm font-bold text-indigo-300 font-mono">2⁴ - 1 = 15</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Binary Tree</span>
            </div>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-500/30 p-3.5 rounded-xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">Early Pruning Active</span>
              <span className="text-slate-400 text-[11px]">When sum + next &gt; 8, the entire downstream branch is cancelled!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, Layers, Sparkles, Flag, Footprints } from 'lucide-react';

interface MazeStep {
  x: number;
  y: number;
  action: 'CHOOSE' | 'EXPLORE' | 'UNDO' | 'GOAL';
  message: string;
  stack: string[];
  gridState: ('empty' | 'wall' | 'path' | 'visited_dead')[][];
}

export default function Slide5_InteractiveStackMaze() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const timerRef = useRef<any>(null);

  // 5x5 Maze Layout
  // 0: empty, 1: wall
  const mazeLayout = [
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
  ];

  const start = { x: 0, y: 0 };
  const goal = { x: 4, y: 4 };

  // Pre-generate steps
  const [steps, setSteps] = useState<MazeStep[]>([]);

  useEffect(() => {
    const generated: MazeStep[] = [];
    const rows = 5;
    const cols = 5;
    const currentGrid: ('empty' | 'wall' | 'path' | 'visited_dead')[][] = mazeLayout.map(row =>
      row.map(cell => (cell === 1 ? 'wall' : 'empty'))
    );
    const stack: string[] = [];

    const dirs = [
      { dx: 0, dy: 1, name: 'Right' },
      { dx: 1, dy: 0, name: 'Down' },
      { dx: 0, dy: -1, name: 'Left' },
      { dx: -1, dy: 0, name: 'Up' },
    ];

    const copyGrid = () => currentGrid.map(r => [...r]);

    const solve = (r: number, c: number): boolean => {
      // 1. CHOOSE
      currentGrid[r][c] = 'path';
      stack.push(`step(${r}, ${c})`);
      generated.push({
        x: r,
        y: c,
        action: 'CHOOSE',
        message: `CHOOSE: Stepped onto cell (${r}, ${c}). Pushed to Call Stack.`,
        stack: [...stack],
        gridState: copyGrid(),
      });

      // Goal check
      if (r === goal.x && c === goal.y) {
        generated.push({
          x: r,
          y: c,
          action: 'GOAL',
          message: `🎉 GOAL REACHED! Solution path found with call stack depth ${stack.length}.`,
          stack: [...stack],
          gridState: copyGrid(),
        });
        return true;
      }

      // 2. EXPLORE neighbors
      for (const d of dirs) {
        const nr = r + d.dx;
        const nc = c + d.dy;

        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          currentGrid[nr][nc] === 'empty'
        ) {
          generated.push({
            x: r,
            y: c,
            action: 'EXPLORE',
            message: `EXPLORE: Branching ${d.name} into candidate cell (${nr}, ${nc}).`,
            stack: [...stack],
            gridState: copyGrid(),
          });

          if (solve(nr, nc)) return true;
        }
      }

      // 3. UNDO
      currentGrid[r][c] = 'visited_dead';
      const popped = stack.pop();
      generated.push({
        x: r,
        y: c,
        action: 'UNDO',
        message: `UNDO: Dead end hit at (${r}, ${c}). Popped ${popped} from Call Stack.`,
        stack: [...stack],
        gridState: copyGrid(),
      });

      return false;
    };

    solve(start.x, start.y);
    setSteps(generated);
  }, []);

  // Timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStepIndex(prev => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 700);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, steps.length]);

  const current = steps[stepIndex] || {
    x: 0,
    y: 0,
    action: 'CHOOSE',
    message: 'Press Play to begin traversal.',
    stack: [],
    gridState: mazeLayout.map(row => row.map(cell => (cell === 1 ? 'wall' : 'empty'))),
  };

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Interactive Simulation Lab
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Choose, Explore, Undo: Maze & Call Stack
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
            onClick={() => stepIndex < steps.length - 1 && setStepIndex(stepIndex + 1)}
            disabled={isPlaying || stepIndex >= steps.length - 1}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold flex items-center gap-1 text-xs transition-all disabled:opacity-40"
          >
            Step <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => { setIsPlaying(false); setStepIndex(0); }}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Left: Maze Grid */}
        <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col items-center">
          <div className="grid grid-cols-5 gap-2 p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl">
            {current.gridState.map((row, r) =>
              row.map((cell, c) => {
                const isCurrent = current.x === r && current.y === c;
                const isStart = r === start.x && c === start.y;
                const isGoal = r === goal.x && c === goal.y;

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-bold text-xs relative transition-all ${
                      cell === 'wall'
                        ? 'bg-slate-800 border border-slate-700 shadow-inner'
                        : isCurrent
                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/50 scale-105 z-10'
                        : cell === 'path'
                        ? 'bg-indigo-900/60 border border-indigo-500/50 text-indigo-300'
                        : cell === 'visited_dead'
                        ? 'bg-amber-950/30 border border-amber-600/30 text-amber-500/70'
                        : 'bg-slate-900/60 border border-slate-800/80 text-slate-500'
                    }`}
                  >
                    {isCurrent && <Footprints className="w-6 h-6 animate-pulse" />}
                    {!isCurrent && isStart && <span className="text-emerald-400 font-mono text-xs">START</span>}
                    {!isCurrent && isGoal && <Flag className="w-5 h-5 text-pink-400" />}
                    {!isCurrent && cell === 'visited_dead' && <span className="text-[10px]">✕</span>}
                    <span className="absolute bottom-0.5 right-1 text-[8px] text-slate-600 font-mono">
                      {r},{c}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-indigo-500" /> Current Step
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-indigo-900/60 border border-indigo-500/50" /> Active Path
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-950/30 border border-amber-600/30" /> Dead End (Backtracked)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-800" /> Wall
            </div>
          </div>
        </div>

        {/* Right: Live Call Stack Visualizer */}
        <div className="md:col-span-5 space-y-4">
          {/* Action indicator card */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400">Step {stepIndex + 1} of {steps.length}</span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  current.action === 'CHOOSE'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : current.action === 'EXPLORE'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : current.action === 'UNDO'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {current.action}
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium min-h-[36px]">
              {current.message}
            </p>
          </div>

          {/* Visual Call Stack container */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-indigo-400">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Live Call Stack</span>
              </div>
              <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                Depth: {current.stack.length}
              </span>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto flex flex-col-reverse font-mono text-xs">
              {current.stack.length === 0 ? (
                <div className="text-center text-slate-500 py-4 text-xs italic">
                  Call stack empty.
                </div>
              ) : (
                current.stack.map((frame, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg border flex items-center justify-between transition-all ${
                      idx === current.stack.length - 1
                        ? 'bg-indigo-600/30 border-indigo-400 text-indigo-200 shadow-md shadow-indigo-600/20'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span>{frame}</span>
                    <span className="text-[10px] text-slate-500">
                      {idx === current.stack.length - 1 ? 'TOP (Active)' : `Frame ${idx}`}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


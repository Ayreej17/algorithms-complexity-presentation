import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, Crown, Sparkles, CheckCircle2 } from 'lucide-react';

interface HistoryStep {
  row: number;
  col: number;
  action: 'place' | 'conflict' | 'backtrack' | 'solution';
  board: number[]; // col position for each row
  message: string;
  isConflictWith?: [number, number];
}

export default function Slide5_InteractiveNQueens() {
  const [boardSize, setBoardSize] = useState<4 | 5>(4);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [steps, setSteps] = useState<HistoryStep[]>([]);
  const timerRef = useRef<any>(null);

  // Generate trace of backtracking steps for boardSize
  const generateSteps = useCallback((n: number) => {
    const trace: HistoryStep[] = [];
    const board: number[] = new Array(n).fill(-1);

    const isSafe = (r: number, c: number): boolean => {
      for (let prevR = 0; prevR < r; prevR++) {
        const prevC = board[prevR];
        if (prevC === c || Math.abs(prevC - c) === Math.abs(prevR - r)) {
          return false;
        }
      }
      return true;
    };

    const backtrack = (r: number) => {
      if (r === n) {
        trace.push({
          row: r,
          col: -1,
          action: 'solution',
          board: [...board],
          message: `🎉 Solution Found! Valid placement for all ${n} Queens.`,
        });
        return;
      }

      for (let c = 0; c < n; c++) {
        board[r] = c;
        if (isSafe(r, c)) {
          trace.push({
            row: r,
            col: c,
            action: 'place',
            board: [...board],
            message: `Placed Queen at Row ${r}, Col ${c} (Safe). Advancing to Row ${r + 1}.`,
          });
          backtrack(r + 1);
        } else {
          trace.push({
            row: r,
            col: c,
            action: 'conflict',
            board: [...board],
            message: `Conflict at Row ${r}, Col ${c}! Attacked by existing queen.`,
          });
        }
        board[r] = -1;
        trace.push({
          row: r,
          col: c,
          action: 'backtrack',
          board: [...board],
          message: `Backtracking: Removed Queen from Row ${r}, Col ${c}. Trying next option.`,
        });
      }
    };

    backtrack(0);
    return trace;
  }, []);

  // Initialize steps when board size changes
  useEffect(() => {
    const s = generateSteps(boardSize);
    setSteps(s);
    setStepIndex(0);
    setIsPlaying(false);
  }, [boardSize, generateSteps]);

  // Auto-play timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStepIndex((prev) => {
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

  const currentStep = steps[stepIndex] || {
    row: 0,
    col: -1,
    action: 'place',
    board: new Array(boardSize).fill(-1),
    message: 'Press Play or Step to start Backtracking visualization.',
  };

  const handleReset = () => {
    setIsPlaying(false);
    setStepIndex(0);
  };

  const handleNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((prev) => prev + 1);
    }
  };

  const totalBruteForce = Math.pow(boardSize, boardSize);
  const stepsExplored = stepIndex + 1;
  const prunedPercent = Math.max(0, Math.round(((totalBruteForce - stepsExplored) / totalBruteForce) * 100));

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Live Interactive Visualizer
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            N-Queens: Backtracking in Real-Time
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
          <span className="text-slate-400 px-2 font-mono">Size:</span>
          <button
            onClick={() => setBoardSize(4)}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              boardSize === 4 ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            4×4
          </button>
          <button
            onClick={() => setBoardSize(5)}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              boardSize === 5 ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            5×5
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-center">
        {/* Left: The Chessboard */}
        <div className="md:col-span-6 flex flex-col items-center justify-center bg-slate-900/90 border border-slate-800 p-6 rounded-2xl">
          <div
            className="grid gap-1.5 p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl"
            style={{
              gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: boardSize }).map((_, r) =>
              Array.from({ length: boardSize }).map((_, c) => {
                const isQueenHere = currentStep.board[r] === c;
                const isConflict =
                  currentStep.action === 'conflict' && currentStep.row === r && currentStep.col === c;
                const isDark = (r + c) % 2 === 1;

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center font-bold text-lg transition-all relative ${
                      isConflict
                        ? 'bg-rose-500/40 border-2 border-rose-500 animate-pulse text-rose-300'
                        : isQueenHere
                        ? 'bg-indigo-600/30 border-2 border-indigo-400 text-indigo-300 shadow-lg shadow-indigo-500/30'
                        : isDark
                        ? 'bg-slate-800/80 border border-slate-700/50'
                        : 'bg-slate-800/40 border border-slate-700/30'
                    }`}
                  >
                    {isQueenHere && (
                      <Crown
                        className={`w-8 h-8 transition-transform transform scale-110 ${
                          isConflict ? 'text-rose-400' : 'text-amber-400'
                        }`}
                      />
                    )}
                    <span className="absolute bottom-1 right-1 text-[9px] text-slate-500 font-mono">
                      {r},{c}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          {/* Player controls */}
          <div className="flex items-center gap-3 mt-5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center gap-2 text-xs transition-all shadow-md shadow-indigo-600/30"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Auto Play'}
            </button>
            <button
              onClick={handleNextStep}
              disabled={isPlaying || stepIndex >= steps.length - 1}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold flex items-center gap-1.5 text-xs transition-all disabled:opacity-40"
            >
              Step <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Step Status & Metrics */}
        <div className="md:col-span-6 space-y-4">
          {/* Current Action Banner */}
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400">Step {stepIndex + 1} of {steps.length}</span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  currentStep.action === 'solution'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : currentStep.action === 'conflict'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : currentStep.action === 'backtrack'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                }`}
              >
                {currentStep.action}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-200 min-h-[48px] flex items-center">
              {currentStep.message}
            </p>
          </div>

          {/* Efficiency Comparison Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
              <div className="text-xs text-rose-400 mb-1 font-semibold">Brute-Force Checks</div>
              <div className="text-2xl font-black font-mono text-white">{totalBruteForce.toLocaleString()}</div>
              <p className="text-[11px] text-slate-500 mt-1">Nᴺ blindly generated full boards</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
              <div className="text-xs text-emerald-400 mb-1 font-semibold">Backtracking Steps</div>
              <div className="text-2xl font-black font-mono text-white">{steps.length}</div>
              <p className="text-[11px] text-slate-500 mt-1">Total tree states explored</p>
            </div>
          </div>

          {/* Pruned Search Space Callout */}
          <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Search Space Pruned</span>
                <span className="text-[11px] text-slate-400">
                  Avoided exploring useless permutations
                </span>
              </div>
            </div>
            <span className="text-xl font-black font-mono text-emerald-400">
              ~{prunedPercent}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


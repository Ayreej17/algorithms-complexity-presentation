import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Slide5_InteractiveComplexityEuler() {
  const [universe, setUniverse] = useState<'P_NEQ_NP' | 'P_EQ_NP'>('P_NEQ_NP');
  const [selectedClass, setSelectedClass] = useState<'P' | 'NP' | 'NPC' | 'NPH'>('NPC');

  const classDetails = {
    P: {
      name: 'Class P (Polynomial Time)',
      desc: 'Problems solvable from scratch in polynomial time O(nᵏ) on a deterministic machine.',
      verification: 'O(nᵏ) Polynomial',
      solution: 'O(nᵏ) Polynomial',
      inNP: 'Yes (P ⊆ NP)',
      problems: ['Merge Sort / Quicksort', 'Dijkstra Shortest Path', 'Linear Programming', 'Primality Testing (AKS)'],
      color: 'blue',
    },
    NP: {
      name: 'Class NP (Nondeterministic Polynomial Time)',
      desc: 'Decision problems where a given YES certificate can be verified in polynomial time.',
      verification: 'O(nᵏ) Polynomial',
      solution: 'Unknown (Exponential brute-force without P=NP)',
      inNP: 'Yes (By definition)',
      problems: ['Sudoku 9×9 to N×N', 'Integer Prime Factoring', 'Graph Isomorphism', 'All NP-Complete Problems'],
      color: 'teal',
    },
    NPC: {
      name: 'Class NP-Complete (NP ∩ NP-Hard)',
      desc: 'The hardest problems in NP. Every problem in NP reduces to them in polynomial time.',
      verification: 'O(nᵏ) Polynomial',
      solution: 'Unknown. If any is in P, then ALL of NP is in P!',
      inNP: 'Yes (Strictly in NP)',
      problems: ['Boolean Satisfiability (3-SAT)', 'Subset Sum', 'Traveling Salesperson Decision', 'Vertex Cover', 'Knapsack Decision'],
      color: 'rose',
    },
    NPH: {
      name: 'Class NP-Hard',
      desc: 'Problems at least as hard as NP-Complete. Can be undecidable (not even in NP).',
      verification: 'Not guaranteed polynomial',
      solution: '≥ NP-Complete hardness',
      inNP: 'Not necessarily in NP',
      problems: ['TSP Optimization (Exact Minimum Tour)', 'Halting Problem (Undecidable)', 'Optimal Go / Chess Strategy'],
      color: 'purple',
    },
  };

  const active = classDetails[selectedClass];

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full justify-center overflow-y-auto py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Live Interactive Venn Simulator
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Complexity Hierarchy & The P vs. NP Universe
          </h2>
        </div>

        {/* Universe Switcher */}
        <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1 text-xs">
          <button
            onClick={() => setUniverse('P_NEQ_NP')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              universe === 'P_NEQ_NP'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Consensus: P ≠ NP
          </button>
          <button
            onClick={() => setUniverse('P_EQ_NP')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              universe === 'P_EQ_NP'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Alternate Reality: P = NP!
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive SVG Euler Diagram */}
        <div className="md:col-span-6 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex flex-col items-center justify-center min-h-[340px]">
          {universe === 'P_NEQ_NP' ? (
            <svg viewBox="0 0 400 320" className="w-full max-w-[360px] h-auto">
              {/* NP-Hard outer boundary */}
              <ellipse
                cx="200"
                cy="170"
                rx="180"
                ry="130"
                fill="#581c87"
                fillOpacity={selectedClass === 'NPH' ? '0.35' : '0.15'}
                stroke="#a855f7"
                strokeWidth={selectedClass === 'NPH' ? 3 : 1.5}
                strokeDasharray="6,4"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedClass('NPH')}
              />
              <text x="200" y="65" textAnchor="middle" fill="#c084fc" fontSize="13" fontWeight="bold">
                NP-Hard (At Least as Hard as NP)
              </text>

              {/* NP Oval */}
              <ellipse
                cx="160"
                cy="190"
                rx="125"
                ry="95"
                fill="#0f766e"
                fillOpacity={selectedClass === 'NP' ? '0.4' : '0.2'}
                stroke="#14b8a6"
                strokeWidth={selectedClass === 'NP' ? 3 : 1.5}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedClass('NP')}
              />
              <text x="135" y="125" textAnchor="middle" fill="#5eead4" fontSize="13" fontWeight="bold">
                NP (Verifiable)
              </text>

              {/* P Circle inside NP */}
              <circle
                cx="120"
                cy="210"
                r="45"
                fill="#1e40af"
                fillOpacity={selectedClass === 'P' ? '0.6' : '0.3'}
                stroke="#3b82f6"
                strokeWidth={selectedClass === 'P' ? 3 : 1.5}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedClass('P')}
              />
              <text x="120" y="215" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="bold">
                P
              </text>

              {/* NP-Complete (Intersection of NP & NP-Hard) */}
              <circle
                cx="235"
                cy="190"
                r="38"
                fill="#be123c"
                fillOpacity={selectedClass === 'NPC' ? '0.6' : '0.35'}
                stroke="#f43f5e"
                strokeWidth={selectedClass === 'NPC' ? 3 : 1.5}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedClass('NPC')}
              />
              <text x="235" y="195" textAnchor="middle" fill="#fda4af" fontSize="11" fontWeight="black">
                NP-Complete
              </text>
            </svg>
          ) : (
            /* Collapse Diagram when P = NP */
            <div className="flex flex-col items-center justify-center p-6 text-center animate-fade-in">
              <div className="w-56 h-56 rounded-full border-4 border-emerald-400 bg-emerald-500/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                <span className="text-3xl font-black text-white font-mono">P = NP</span>
                <span className="text-xs text-emerald-300 font-bold mt-1">= NP-Complete</span>
              </div>
              <p className="text-xs text-amber-300 font-semibold mt-4 max-w-xs">
                ⚠️ The boundary vanishes! Every verifiable problem becomes immediately solvable in polynomial time.
              </p>
            </div>
          )}

          <div className="flex gap-2 mt-2">
            {(['P', 'NP', 'NPC', 'NPH'] as const).map(cls => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedClass === cls
                    ? 'bg-slate-700 text-white border border-slate-500'
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Selected Class Information */}
        <div className="md:col-span-6 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white">{active.name}</h3>
              <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                {active.inNP}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {active.desc}
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Verification Time:</span>
                <span className="text-emerald-400 font-bold">{active.verification}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Solution Time:</span>
                <span className="text-rose-400 font-bold">{active.solution}</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Canonical Problems:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {active.problems.map((p, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-slate-950 text-slate-300 rounded-md border border-slate-800 text-[11px] font-mono"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Zap, CheckCircle2 } from 'lucide-react';

export default function Slide1_Foundations() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
      <div className="space-y-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold tracking-wider text-sm mb-4">
          DECISION PROBLEMS
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Algorithms & Complexity
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mt-6">
          Understanding Polynomial Time Verification and the P vs. NP paradigm.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mt-12">
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl text-left hover:bg-slate-800 transition-colors">
          <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Zap className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-100 mb-3">Class P: Easy to Solve</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Problems that can be solved from scratch quickly (in Polynomial Time). As data grows, computers can still handle it efficiently.
          </p>
          <div className="flex items-center text-sm text-blue-300 bg-blue-500/10 px-3 py-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 mr-2" /> Example: Alphabetizing a list
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl text-left hover:bg-slate-800 transition-colors">
          <div className="bg-pink-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <CheckCircle2 className="text-pink-400 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-100 mb-3">Class NP: Easy to Verify</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Problems where checking a proposed answer is fast, but finding the answer from scratch might take trillions of years.
          </p>
          <div className="flex items-center text-sm text-pink-300 bg-pink-500/10 px-3 py-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 mr-2" /> Example: Checking a Sudoku
          </div>
        </div>
      </div>
    </div>
  );
}
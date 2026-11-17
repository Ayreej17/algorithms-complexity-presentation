import { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  BookOpen, 
  Sparkles,
  ArrowUp,
  ListFilter
} from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  topic: string;
  options: string[];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Chapter 9: Backtracking Basics',
    question: 'What is the primary defining characteristic of the Backtracking algorithmic technique?',
    options: [
      'It solves subproblems by storing their solutions in a memoization lookup table.',
      'It builds candidate solutions incrementally and abandons (undoes) a candidate as soon as it determines it cannot lead to a valid solution.',
      'It divides the input array into two halves, recursively sorts both halves, and merges them.',
      'It blindly generates every possible permutation in the universe before evaluating any constraints.'
    ],
    correctAnswer: 1,
    explanation: 'Backtracking explores solution spaces depth-first, making tentative choices and undoing them (backtracking) immediately when a constraint violation or dead end is reached.'
  },
  {
    id: 2,
    topic: 'Computational Complexity',
    question: 'Why do computer scientists use Asymptotic Analysis instead of Wall-Clock runtime (seconds) to measure algorithm efficiency?',
    options: [
      'Wall-clock time varies wildly across different hardware, CPU speeds, background tasks, and compiler optimizations, whereas asymptotic analysis is strictly hardware-independent.',
      'Asymptotic notation allows computers to run code without using memory.',
      'Wall-clock time can only measure programs written in Python, not C or C++.',
      'Theoretical computer science prohibits the use of physical clocks.'
    ],
    correctAnswer: 0,
    explanation: 'Asymptotic notation counts mathematical operation steps as a function of input size n, providing a robust, universal metric independent of whether code runs on a phone or supercomputer.'
  },
  {
    id: 3,
    topic: 'Asymptotic Notation',
    question: 'What does Big-O notation (O) mathematically characterize?',
    options: [
      'The exact lower bound (best-case scenario) of an algorithm.',
      'The tight sandwich bound where upper and lower growth rates coincide.',
      'The asymptotic upper bound, representing the worst-case scenario for execution steps.',
      'The exact memory in megabytes consumed by the hardware.'
    ],
    correctAnswer: 2,
    explanation: 'Big-O notation provides an asymptotic upper bound (f(n) ≤ c · g(n)), guaranteeing that the algorithm will never consume more steps than this threshold in the worst case.'
  },
  {
    id: 4,
    topic: 'Asymptotic Notation',
    question: 'Which of the following correctly orders growth rates from slowest growing (most efficient) to fastest growing (least efficient)?',
    options: [
      'O(1) < O(n) < O(log n) < O(2ⁿ) < O(n²)',
      'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)',
      'O(n!) < O(2ⁿ) < O(n²) < O(n) < O(1)',
      'O(log n) < O(1) < O(n log n) < O(n²) < O(2ⁿ)'
    ],
    correctAnswer: 1,
    explanation: 'The standard hierarchy of asymptotic growth is Constant O(1) < Logarithmic O(log n) < Linear O(n) < Linearithmic O(n log n) < Quadratic O(n²) < Exponential O(2ⁿ) < Factorial O(n!).'
  },
  {
    id: 5,
    topic: 'Brute-Force vs. Backtracking',
    question: 'How does Backtracking fundamentally differ from Brute-Force search in combinatorial problems like N-Queens?',
    options: [
      'Brute-Force uses recursion while Backtracking only uses while-loops.',
      'Brute-Force checks constraints incrementally at each placement, while Backtracking only checks at the very end.',
      'Brute-Force generates complete candidate boards blindly before testing validity; Backtracking checks safety at each row and abandons invalid subtrees early.',
      'Backtracking guarantees polynomial-time O(n) execution for any puzzle.'
    ],
    correctAnswer: 2,
    explanation: 'Backtracking evaluates constraints incrementally. The moment a queen placement causes a conflict, the entire downstream subtree is pruned without testing the remaining rows.'
  },
  {
    id: 6,
    topic: 'Choose, Explore, Undo',
    question: 'In the classic "Choose, Explore, Undo" paradigm, what is the critical purpose of the "UNDO" step?',
    options: [
      'To terminate the program and return to the operating system.',
      'To restore the mutable state data structures to their prior condition so sibling candidates can be tested without corrupted state.',
      'To allocate a new array in heap memory for the next recursive frame.',
      'To invert boolean logic flags from True to False permanently.'
    ],
    correctAnswer: 1,
    explanation: 'The UNDO step (e.g. path.pop(), unsetting visited flags) restores the shared mutable state to its exact pre-decision status, preventing mutations from contaminating other branches.'
  },
  {
    id: 7,
    topic: 'State-Space Trees',
    question: 'In a State-Space Tree representing an N-variable combinatorial search, what does the depth of the tree represent?',
    options: [
      'The number of decisions/stages made so far.',
      'The total number of CPU clock cycles consumed.',
      'The number of solutions found in total.',
      'The branching factor b at the root node.'
    ],
    correctAnswer: 0,
    explanation: 'The depth of any node in a state-space tree corresponds to the number of decision stages completed from the root (stage 0) down to the current level.'
  },
  {
    id: 8,
    topic: 'State-Space Trees',
    question: 'What is an "E-Node" (Expansion Node) in state-space tree terminology?',
    options: [
      'A leaf node that contains a certified valid solution.',
      'The active node currently being expanded, whose children are currently being generated.',
      'A node that has been killed because it violated constraints.',
      'An empty tree node holding null pointers.'
    ],
    correctAnswer: 1,
    explanation: 'An E-node (Expansion node) is the specific node currently under active exploration whose immediate child branches are being generated by the search algorithm.'
  },
  {
    id: 9,
    topic: 'Subset Sum Problems',
    question: 'In the Subset Sum problem with positive weights, which condition provides a valid "Over-Sum" pruning bound?',
    options: [
      'If current_sum + w[i] < target, prune immediately.',
      'If current_sum + w[i] > target, prune immediately because adding positive weights can never reduce the sum.',
      'If current_sum == 0, abort the algorithm.',
      'If target is an even number, reject the entire set.'
    ],
    correctAnswer: 1,
    explanation: 'Because all weights are positive, accumulated sum is strictly non-decreasing. If current_sum + w[i] exceeds the target, no additional positive numbers can ever bring the sum back down to target.'
  },
  {
    id: 10,
    topic: 'Subset Sum Problems',
    question: 'Why does pre-sorting the array in ascending order dramatically improve pruning efficiency in Backtracking for Subset Sum?',
    options: [
      'It converts an NP-Complete problem into a linear O(n) problem.',
      'Once an element w[i] causes an over-sum, all subsequent elements w[j] (where j > i) will also exceed the target, allowing an instant loop break.',
      'Sorting eliminates all duplicate numbers automatically.',
      'Sorting prevents the program from using the call stack.'
    ],
    correctAnswer: 1,
    explanation: 'In an ascending sorted array, w[i] ≤ w[i+1]. Thus, if current_sum + w[i] > target, every subsequent number in the array is guaranteed to exceed target as well, allowing an immediate break of the loop.'
  },
  {
    id: 11,
    topic: 'Include/Exclude Decisions',
    question: 'In the binary Include/Exclude decision model for an n-element set, what does the branching factor b equal at every internal node?',
    options: [
      'b = n',
      'b = n!',
      'b = 2 (Include = 1, Exclude = 0)',
      'b = target sum W'
    ],
    correctAnswer: 2,
    explanation: 'The Include/Exclude model is a strictly binary decision tree where branching factor b = 2 at every stage: either include element i (xᵢ = 1) or exclude element i (xᵢ = 0).'
  },
  {
    id: 12,
    topic: 'Include/Exclude Decisions',
    question: 'How many total leaf nodes exist in an unpruned binary Include/Exclude decision tree for a set of n items?',
    options: [
      'n²',
      '2ⁿ',
      'n!',
      '2n'
    ],
    correctAnswer: 1,
    explanation: 'A full binary tree of depth n has exactly 2ⁿ leaves, corresponding to the 2ⁿ possible subsets in the power set of an n-element set.'
  },
  {
    id: 13,
    topic: 'Pruning and Exponential Growth',
    question: 'According to the Cutoff Multiplier principle, if a branch in a binary decision tree of total depth n is pruned at depth k, how many leaf evaluations are eliminated?',
    options: [
      'Exactly 1 leaf',
      '2ⁿ⁻ᵏ leaves',
      'k² leaves',
      '(n - k) leaves'
    ],
    correctAnswer: 1,
    explanation: 'A sub-branch originating at depth k has a remaining height of (n - k). Truncating that node eliminates the entire subtree of 2ⁿ⁻ᵏ leaves from being visited.'
  },
  {
    id: 14,
    topic: 'Pruning and Exponential Growth',
    question: 'What is "Optimality Pruning" (commonly used in Branch & Bound)?',
    options: [
      'Pruning a branch when its partial cost already equals or exceeds the best complete solution found so far.',
      'Deleting the largest integer from the input array.',
      'Terminating the program when CPU temperature exceeds safe limits.',
      'Pruning solutions that contain prime numbers.'
    ],
    correctAnswer: 0,
    explanation: 'Optimality pruning discards partial candidates whose lower-bound cost already cannot improve upon the best known feasible solution discovered so far.'
  },
  {
    id: 15,
    topic: 'Decision Problems',
    question: 'What is the strict definition of a "Decision Problem" in theoretical computer science?',
    options: [
      'A problem requiring the calculation of an optimal floating-point number.',
      'A computational problem whose answer is strictly binary: YES (True) or NO (False).',
      'A problem that cannot be solved by any Turing machine.',
      'A problem that requires a human user to make interactive choices.'
    ],
    correctAnswer: 1,
    explanation: 'A Decision Problem is a formal language recognition problem whose output is strictly binary: YES or NO.'
  },
  {
    id: 16,
    topic: 'Polynomial Verification',
    question: 'What does it mean for a decision problem to have "Polynomial-Time Verification"?',
    options: [
      'The problem can be solved from scratch in polynomial time without hints.',
      'Given a claimed proof (certificate/witness), a deterministic algorithm can verify whether the certificate proves a YES instance in O(nᵏ) time.',
      'The problem requires an exponential number of verification steps.',
      'The problem only accepts polynomial algebraic expressions as inputs.'
    ],
    correctAnswer: 1,
    explanation: 'Polynomial-time verification means that checking a proposed answer (certificate) takes polynomial time O(nᵏ), which forms the core definition of complexity class NP.'
  },
  {
    id: 17,
    topic: 'Complexity Classes',
    question: 'Which statement accurately describes the Complexity Class P?',
    options: [
      'Problems that require non-deterministic exponential search.',
      'Problems that can be SOLVED from scratch by a deterministic Turing machine in polynomial time O(nᵏ).',
      'Problems that cannot be solved by any computer.',
      'Problems whose verification takes factorial time O(n!).'
    ],
    correctAnswer: 1,
    explanation: 'Class P consists of all decision problems solvable by a deterministic algorithm in polynomial time O(nᵏ) as a function of input size n.'
  },
  {
    id: 18,
    topic: 'Complexity Classes',
    question: 'What characterizes a problem as "NP-Complete"?',
    options: [
      'It is in NP, and every problem in NP can be reduced to it in polynomial time (it belongs to NP ∩ NP-Hard).',
      'It can be solved in O(1) constant time.',
      'It is impossible to verify even when given a valid certificate.',
      'It has no connection to other problems in NP.'
    ],
    correctAnswer: 0,
    explanation: 'NP-Complete problems are the hardest problems in NP. They are in NP, and every other problem in NP reduces to them in polynomial time. If any NP-Complete problem is in P, then P = NP.'
  },
  {
    id: 19,
    topic: 'Reductions & Cook-Levin',
    question: 'What foundational problem was proven to be NP-Complete by the Cook-Levin Theorem in 1971?',
    options: [
      'Binary Search',
      'Boolean Satisfiability (SAT)',
      'Merge Sort',
      'Dijkstra\'s Shortest Path'
    ],
    correctAnswer: 1,
    explanation: 'The Cook-Levin Theorem (1971) proved that Boolean Satisfiability (SAT) was the first NP-Complete problem by showing any nondeterministic polynomial computation can be encoded into a boolean formula.'
  },
  {
    id: 20,
    topic: 'P vs. NP Implications',
    question: 'What would be a direct consequence to digital security if a mathematician proved that P = NP?',
    options: [
      'All passwords and computer networks would become completely invulnerable to hackers.',
      'Public-key cryptography (RSA, ECC) would collapse because finding private keys from public keys would become solvable in polynomial time.',
      'Computers would stop functioning due to infinite memory consumption.',
      'Sorting algorithms would suddenly require exponential time.'
    ],
    correctAnswer: 1,
    explanation: 'Modern public-key cryptography relies on the asymmetric hardness of problems like prime factorization and discrete logarithms. If P = NP, the search for private keys becomes polynomial-time solvable, breaking global encryption.'
  }
];

export default function QuizView() {
  // Current slide: 0 to 19 for Questions 1 to 20; 20 is the Answer Key slide!
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [keyFilter, setKeyFilter] = useState<'all' | 'incorrect' | 'correct'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalQuestions = quizQuestions.length; // 20
  const isAnswerKeySlide = currentSlide === totalQuestions; // Slide 20 (21st slide)

  // Scroll to top whenever current slide changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    const mainEl = scrollContainerRef.current?.closest('main');
    if (mainEl) {
      mainEl.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [currentSlide]);

  const handleSelectOption = (qId: number, optionIdx: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionIdx,
    }));
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentSlide(0);
    setKeyFilter('all');
  };

  const scrollToQuestionInKey = (qId: number) => {
    const el = document.getElementById(`answer-key-q-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const mainEl = scrollContainerRef.current?.closest('main');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Score calculation
  const score = quizQuestions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const answeredCount = Object.keys(selectedAnswers).length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreBadge = (pct: number) => {
    if (pct >= 90) return { label: 'Mastery / Distinction', color: 'emerald' };
    if (pct >= 75) return { label: 'Proficient / Advanced', color: 'teal' };
    if (pct >= 60) return { label: 'Competent / Passing', color: 'indigo' };
    return { label: 'Review Recommended', color: 'rose' };
  };

  const badge = getScoreBadge(percentage);

  // Filtered list for the Answer Key view
  const displayedQuestionsInKey = quizQuestions.filter(q => {
    const chosen = selectedAnswers[q.id];
    const isCorrect = chosen === q.correctAnswer;
    if (keyFilter === 'correct') return isCorrect;
    if (keyFilter === 'incorrect') return !isCorrect;
    return true;
  });

  return (
    <div 
      ref={scrollContainerRef}
      className="flex flex-col w-full max-w-6xl mx-auto px-2 py-2"
    >
      {/* Quiz Header Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800 flex-shrink-0">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-0.5">
            <Sparkles className="w-4 h-4" /> Interactive Comprehensive Assessment
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white">
            Algorithms & Complexity 20-Item Quiz
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            Progress: <strong className="text-indigo-300">{answeredCount}</strong> / {totalQuestions} Answered
          </span>

          <button
            onClick={() => setCurrentSlide(isAnswerKeySlide ? 0 : totalQuestions)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              isAnswerKeySlide
                ? 'bg-slate-800 hover:bg-slate-700 text-indigo-300 border-indigo-500/40 shadow-sm'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
            }`}
          >
            {isAnswerKeySlide ? '← Back to Questions' : 'Go to Answer Key →'}
          </button>
        </div>
      </div>

      {/* Free-Slide Question Navigator Grid */}
      <div className="py-2.5 overflow-x-auto no-scrollbar flex-shrink-0">
        <div className="flex items-center gap-1.5 min-w-max">
          {quizQuestions.map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] !== undefined;
            const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
            const isCurrent = currentSlide === idx;

            return (
              <button
                key={q.id}
                onClick={() => {
                  if (isAnswerKeySlide) {
                    scrollToQuestionInKey(q.id);
                  } else {
                    setCurrentSlide(idx);
                  }
                }}
                className={`relative w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all border flex items-center justify-center ${
                  isCurrent && !isAnswerKeySlide
                    ? 'bg-indigo-600 text-white border-indigo-400 scale-110 shadow-md shadow-indigo-600/30'
                    : isAnswerKeySlide
                    ? isCorrect
                      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40 hover:bg-emerald-900/50'
                      : isAnswered
                      ? 'bg-rose-950/40 text-rose-300 border-rose-500/40 hover:bg-rose-900/50'
                      : 'bg-slate-900 text-amber-400 border-slate-800 hover:border-slate-700'
                    : isAnswered
                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-900 text-slate-500 border-slate-800 hover:border-slate-700 hover:text-slate-300'
                }`}
                title={
                  isAnswerKeySlide
                    ? `Jump to Question ${idx + 1} in Answer Key (${isCorrect ? 'Correct' : isAnswered ? 'Incorrect' : 'Unanswered'})`
                    : `Go to Question ${idx + 1}`
                }
              >
                {idx + 1}
              </button>
            );
          })}

          {/* Answer Key Button in Grid */}
          <button
            onClick={() => setCurrentSlide(totalQuestions)}
            className={`px-3 h-7 rounded-lg text-xs font-mono font-bold transition-all border flex items-center gap-1.5 ${
              isAnswerKeySlide
                ? 'bg-purple-600 text-white border-purple-400 scale-105 shadow-md shadow-purple-600/30'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            <Award className="w-3.5 h-3.5" /> Answer Key
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 py-2">
        {!isAnswerKeySlide ? (
          /* Question Slide */
          (() => {
            const currentQ = quizQuestions[currentSlide];
            const chosen = selectedAnswers[currentQ.id];

            return (
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 my-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 font-bold uppercase tracking-wider">
                    Question {currentSlide + 1} of {totalQuestions} • {currentQ.topic}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Free Slided • No Timer
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">
                  {currentQ.question}
                </h3>

                {/* Multiple Choice Options A, B, C, D */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, optIdx) => {
                    const letters = ['A', 'B', 'C', 'D'];
                    const isSelected = chosen === optIdx;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(currentQ.id, optIdx)}
                        className={`w-full p-4 rounded-xl text-left transition-all border flex items-start gap-3.5 group ${
                          isSelected
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/20'
                            : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-950 hover:border-slate-700'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 transition-all ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'
                          }`}
                        >
                          {letters[optIdx]}
                        </span>
                        <span className="text-xs md:text-sm leading-relaxed pt-0.5">
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation controls */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                    disabled={currentSlide === 0}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold flex items-center gap-1.5 text-xs transition-all disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous Question
                  </button>

                  <div className="text-xs text-slate-500 font-mono hidden sm:block">
                    {chosen !== undefined ? '✓ Answer Selected' : '⚪ Not yet answered'}
                  </div>

                  <button
                    onClick={() => setCurrentSlide(prev => Math.min(totalQuestions, prev + 1))}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center gap-1.5 text-xs transition-all shadow-md shadow-indigo-600/30"
                  >
                    {currentSlide === totalQuestions - 1 ? 'Go to Answer Key' : 'Next Question'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()
        ) : (
          /* SLIDE 21: The Full Answer Key Slide! */
          <div className="space-y-6 pt-2 pb-12">
            {/* Score Summary Banner */}
            <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs uppercase mb-2">
                    <Award className="w-4 h-4" /> Official Answer Key & Diagnostic Report
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    Quiz Score: <span className="text-indigo-400 font-mono">{score}</span> / {totalQuestions}
                  </h3>
                  <div className="flex items-center gap-2 pt-1 justify-center md:justify-start">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                      {badge.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Accuracy Rate: <strong className="text-white font-mono">{percentage}%</strong> • {answeredCount} answered, {totalQuestions - answeredCount} skipped.
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-center bg-slate-950 p-3 sm:p-4 rounded-xl border border-slate-800 min-w-[70px]">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">{score}</span>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold mt-0.5">Correct</span>
                  </div>
                  <div className="text-center bg-slate-950 p-3 sm:p-4 rounded-xl border border-slate-800 min-w-[70px]">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-rose-400">{totalQuestions - score}</span>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold mt-0.5">Missed</span>
                  </div>
                  <button
                    onClick={handleRetake}
                    className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all border border-slate-700"
                    title="Retake Quiz"
                  >
                    <RotateCcw className="w-4 h-4" /> Retake
                  </button>
                </div>
              </div>
            </div>

            {/* Answer Key Filter & Jump Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>All 20 Questions Breakdown</span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 flex items-center gap-1 mr-1 hidden sm:inline-flex">
                  <ListFilter className="w-3.5 h-3.5" /> Filter:
                </span>
                <button
                  onClick={() => setKeyFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
                    keyFilter === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  All ({totalQuestions})
                </button>
                <button
                  onClick={() => setKeyFilter('correct')}
                  className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
                    keyFilter === 'correct'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Correct ({score})
                </button>
                <button
                  onClick={() => setKeyFilter('incorrect')}
                  className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
                    keyFilter === 'incorrect'
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Missed ({totalQuestions - score})
                </button>
              </div>
            </div>

            {/* Question Cards 1 through 20 */}
            <div className="space-y-4">
              {displayedQuestionsInKey.map((q) => {
                const letters = ['A', 'B', 'C', 'D'];
                const chosen = selectedAnswers[q.id];
                const isCorrect = chosen === q.correctAnswer;
                const isUnanswered = chosen === undefined;

                return (
                  <div
                    key={q.id}
                    id={`answer-key-q-${q.id}`}
                    className={`bg-slate-900/80 border rounded-2xl p-5 md:p-6 transition-all scroll-mt-4 ${
                      isCorrect
                        ? 'border-emerald-500/30'
                        : isUnanswered
                        ? 'border-amber-500/30'
                        : 'border-rose-500/30'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-300 font-mono font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                          {q.id}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {q.topic}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {isCorrect && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold flex items-center gap-1 border border-emerald-500/30 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5" /> CORRECT
                          </span>
                        )}
                        {!isCorrect && !isUnanswered && (
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold flex items-center gap-1 border border-rose-500/30 font-mono">
                            <XCircle className="w-3.5 h-3.5" /> INCORRECT
                          </span>
                        )}
                        {isUnanswered && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold flex items-center gap-1 border border-amber-500/30 font-mono">
                            <AlertCircle className="w-3.5 h-3.5" /> UNANSWERED
                          </span>
                        )}

                        <button
                          onClick={() => setCurrentSlide(q.id - 1)}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white text-[10px] font-mono border border-slate-700"
                          title="Open this question in slide view"
                        >
                          View Slide ↗
                        </button>
                      </div>
                    </div>

                    <h4 className="text-sm md:text-base font-bold text-white mb-3 leading-relaxed">
                      {q.question}
                    </h4>

                    {/* Choices summary */}
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5 mb-3">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-slate-500 flex-shrink-0">Your Selection:</span>
                        <span className={`text-right ${isCorrect ? 'text-emerald-400 font-bold' : isUnanswered ? 'text-amber-400' : 'text-rose-400 font-bold'}`}>
                          {chosen !== undefined ? `${letters[chosen]}: ${q.options[chosen]}` : '(None chosen)'}
                        </span>
                      </div>
                      <div className="flex justify-between items-start gap-2 pt-1 border-t border-slate-900">
                        <span className="text-slate-500 flex-shrink-0">Correct Answer:</span>
                        <span className="text-emerald-400 font-bold text-right">
                          {letters[q.correctAnswer]}: {q.options[q.correctAnswer]}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Explanation */}
                    <div className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
                      <strong className="text-indigo-300">Explanation: </strong>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Back to Top Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-700 shadow-lg"
              >
                <ArrowUp className="w-4 h-4" /> Scroll to Top of Answer Key
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

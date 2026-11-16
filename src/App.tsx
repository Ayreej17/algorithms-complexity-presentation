import { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  BookOpen, 
  Cpu, 
  RotateCcw, 
  Target, 
  Binary, 
  Scissors, 
  HelpCircle, 
  Compass, 
  Award,
  Maximize2,
  Minimize2,
  Menu,
  X
} from 'lucide-react';

// Folder 1: Chapter 9
import F1_Slide1 from './components/CHAPTER 9 - Backtracking and Introduction to Computational Complexity/Slide1_Overview';
import F1_Slide2 from './components/CHAPTER 9 - Backtracking and Introduction to Computational Complexity/Slide2_TimeSpaceAsymptotics';
import F1_Slide3 from './components/CHAPTER 9 - Backtracking and Introduction to Computational Complexity/Slide3_ProcedureAnalysis';
import F1_Slide4 from './components/CHAPTER 9 - Backtracking and Introduction to Computational Complexity/Slide4_InteractiveGrowthLab';

// Folder 2: Brute-Force vs Backtracking
import F2_Slide1 from './components/Brute-Force Search and Backtracking/Slide1_DefinitionVsBruteForce';
import F2_Slide2 from './components/Brute-Force Search and Backtracking/Slide2_KeyPointsExamples';
import F2_Slide3 from './components/Brute-Force Search and Backtracking/Slide3_ProcedureAndCode';
import F2_Slide4 from './components/Brute-Force Search and Backtracking/Slide4_ProsCons';
import F2_Slide5 from './components/Brute-Force Search and Backtracking/Slide5_InteractiveNQueens';

// Folder 3: Choose, Explore, Undo
import F3_Slide1 from './components/Backtracking - Choose, Explore, Undo/Slide1_TriadParadigm';
import F3_Slide2 from './components/Backtracking - Choose, Explore, Undo/Slide2_StackMechanics';
import F3_Slide3 from './components/Backtracking - Choose, Explore, Undo/Slide3_UniversalTemplateCode';
import F3_Slide4 from './components/Backtracking - Choose, Explore, Undo/Slide4_ProsCons';
import F3_Slide5 from './components/Backtracking - Choose, Explore, Undo/Slide5_InteractiveStackMaze';

// Folder 4: State-Space Trees
import F4_Slide1 from './components/State-Space Trees/Slide1_TreeDefinition';
import F4_Slide2 from './components/State-Space Trees/Slide2_MetricsTerminology';
import F4_Slide3 from './components/State-Space Trees/Slide3_ProcedureAndCode';
import F4_Slide4 from './components/State-Space Trees/Slide4_ProsCons';
import F4_Slide5 from './components/State-Space Trees/Slide5_InteractiveTreeExplorer';

// Folder 5: Subset Sum Problems
import F5_Slide1 from './components/Subset Sum Problems/Slide1_DefinitionKarp';
import F5_Slide2 from './components/Subset Sum Problems/Slide2_BoundingFunctionsSorting';
import F5_Slide3 from './components/Subset Sum Problems/Slide3_ProcedureAndCode';
import F5_Slide4 from './components/Subset Sum Problems/Slide4_ProsCons';
import F5_Slide5 from './components/Subset Sum Problems/Slide5_InteractiveSubsetSum';

// Folder 6: Include-Exclude Decisions
import F6_Slide1 from './components/Include-Exclude Decisions/Slide1_BinaryChoiceModel';
import F6_Slide2 from './components/Include-Exclude Decisions/Slide2_TreeGeometryBitmasks';
import F6_Slide3 from './components/Include-Exclude Decisions/Slide3_ProcedureAndCode';
import F6_Slide4 from './components/Include-Exclude Decisions/Slide4_ProsCons';
import F6_Slide5 from './components/Include-Exclude Decisions/Slide5_InteractiveIncludeExclude';

// Folder 7: Pruning and Exponential Growth
import F7_Slide1 from './components/Pruning and Exponential Growth/Slide1_ExponentialReality';
import F7_Slide2 from './components/Pruning and Exponential Growth/Slide2_PruningTaxonomyMultiplier';
import F7_Slide3 from './components/Pruning and Exponential Growth/Slide3_ProcedureAndCode';
import F7_Slide4 from './components/Pruning and Exponential Growth/Slide4_ProsCons';
import F7_Slide5 from './components/Pruning and Exponential Growth/Slide5_InteractivePruningSimulator';

// Folder 8: Decision Problem and Polynomial-Time Verification
import F8_Slide1 from './components/Decision Problem and Polynomial-Time Verification/Slide1_Foundations';
import F8_Slide2 from './components/Decision Problem and Polynomial-Time Verification/Slide2_RealWorld';
import F8_Slide3 from './components/Decision Problem and Polynomial-Time Verification/Slide3_CodeSignatures';
import F8_Slide4 from './components/Decision Problem and Polynomial-Time Verification/Slide4_ProsCons';
import F8_Slide5 from './components/Decision Problem and Polynomial-Time Verification/Slide5_InteractiveDemo';
import F8_Slide6 from './components/Decision Problem and Polynomial-Time Verification/Slide6_HierarchyImpact';

// Folder 9: Introduction to P, NP, NP-hard, and NP-Complete
import F9_Slide1 from './components/Introduction to P, NP, NP-hard, and NP-Complete/Slide1_ComplexityZooDefinitions';
import F9_Slide2 from './components/Introduction to P, NP, NP-hard, and NP-Complete/Slide2_ReductionsCookLevin';
import F9_Slide3 from './components/Introduction to P, NP, NP-hard, and NP-Complete/Slide3_ProcedureAndCode';
import F9_Slide4 from './components/Introduction to P, NP, NP-hard, and NP-Complete/Slide4_ComparisonProsCons';
import F9_Slide5 from './components/Introduction to P, NP, NP-hard, and NP-Complete/Slide5_InteractiveComplexityEuler';

// Folder 10: Interactive Quiz
import QuizView from './components/Interactive Quiz/QuizView';

interface FolderConfig {
  id: number;
  name: string;
  shortName: string;
  icon: any;
  slides: React.ComponentType[];
}

export default function App() {
  const folders: FolderConfig[] = [
    {
      id: 1,
      name: 'CHAPTER 9 - Backtracking and Introduction to Computational Complexity',
      shortName: 'Chapter 9: Intro',
      icon: BookOpen,
      slides: [F1_Slide1, F1_Slide2, F1_Slide3, F1_Slide4],
    },
    {
      id: 2,
      name: 'Brute-Force Search and Backtracking',
      shortName: 'Brute-Force vs Backtrack',
      icon: Cpu,
      slides: [F2_Slide1, F2_Slide2, F2_Slide3, F2_Slide4, F2_Slide5],
    },
    {
      id: 3,
      name: 'Backtracking: Choose, Explore, Undo',
      shortName: 'Choose, Explore, Undo',
      icon: RotateCcw,
      slides: [F3_Slide1, F3_Slide2, F3_Slide3, F3_Slide4, F3_Slide5],
    },
    {
      id: 4,
      name: 'State-Space Trees',
      shortName: 'State-Space Trees',
      icon: Layers,
      slides: [F4_Slide1, F4_Slide2, F4_Slide3, F4_Slide4, F4_Slide5],
    },
    {
      id: 5,
      name: 'Subset Sum Problems',
      shortName: 'Subset Sum',
      icon: Target,
      slides: [F5_Slide1, F5_Slide2, F5_Slide3, F5_Slide4, F5_Slide5],
    },
    {
      id: 6,
      name: 'Include/Exclude Decisions',
      shortName: 'Include/Exclude',
      icon: Binary,
      slides: [F6_Slide1, F6_Slide2, F6_Slide3, F6_Slide4, F6_Slide5],
    },
    {
      id: 7,
      name: 'Pruning and Exponential Growth',
      shortName: 'Pruning & Growth',
      icon: Scissors,
      slides: [F7_Slide1, F7_Slide2, F7_Slide3, F7_Slide4, F7_Slide5],
    },
    {
      id: 8,
      name: 'Decision Problem and Polynomial-Time Verification',
      shortName: 'Decision & Verification',
      icon: HelpCircle,
      slides: [F8_Slide1, F8_Slide2, F8_Slide3, F8_Slide4, F8_Slide5, F8_Slide6],
    },
    {
      id: 9,
      name: 'Introduction to P, NP, NP-hard, and NP-Complete',
      shortName: 'P, NP, NP-Complete',
      icon: Compass,
      slides: [F9_Slide1, F9_Slide2, F9_Slide3, F9_Slide4, F9_Slide5],
    },
    {
      id: 10,
      name: 'Interactive Quiz',
      shortName: 'Interactive Quiz',
      icon: Award,
      slides: [QuizView],
    },
  ];

  const [currentFolderIndex, setCurrentFolderIndex] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mainScrollRef = useRef<HTMLElement>(null);

  const currentFolder = folders[currentFolderIndex];
  const totalSlidesInFolder = currentFolder.slides.length;

  // Reset scroll to top on slide/folder change
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
    }
  }, [currentFolderIndex, currentSlideIndex]);

  // Handle switching folder
  const handleSelectFolder = (folderIdx: number) => {
    setCurrentFolderIndex(folderIdx);
    setCurrentSlideIndex(0);
    setMobileMenuOpen(false);
  };

  // Slide navigation
  const nextSlide = () => {
    if (currentSlideIndex < totalSlidesInFolder - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else if (currentFolderIndex < folders.length - 1) {
      setCurrentFolderIndex(prev => prev + 1);
      setCurrentSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    } else if (currentFolderIndex > 0) {
      setCurrentFolderIndex(prev => prev - 1);
      setCurrentSlideIndex(folders[currentFolderIndex - 1].slides.length - 1);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentFolderIndex, currentSlideIndex]);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const CurrentSlideComponent = currentFolder.slides[currentSlideIndex];

  return (
    <div className="h-dvh w-full bg-slate-950 text-slate-100 overflow-hidden flex flex-col font-sans">
      {/* TOP HEADER: Named after each folder */}
      <header className="h-14 md:h-16 bg-slate-900/95 backdrop-blur border-b border-slate-800 flex items-center justify-between px-4 md:px-6 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/30 text-sm">
            AG
          </div>
          <div className="hidden lg:block">
            <h1 className="text-sm font-bold text-white leading-tight">Algorithms & Complexity</h1>
            <p className="text-[10px] text-slate-400 font-mono">Master Web Presentation</p>
          </div>
        </div>

        {/* Desktop Folder Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 overflow-x-auto max-w-4xl py-1 px-2 no-scrollbar">
          {folders.map((folder, idx) => {
            const Icon = folder.icon;
            const isActive = currentFolderIndex === idx;

            return (
              <button
                key={folder.id}
                onClick={() => handleSelectFolder(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800/80 hover:bg-slate-800 hover:text-white'
                }`}
                title={folder.name}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{folder.shortName}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu & Fullscreen Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all text-xs"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white md:hidden"
            title="Open Topics Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 bg-slate-950/95 backdrop-blur z-50 p-4 sm:p-6 overflow-y-auto md:hidden">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Select Topic / Folder:
          </div>
          <div className="space-y-2 pb-10">
            {folders.map((folder, idx) => {
              const Icon = folder.icon;
              const isActive = currentFolderIndex === idx;

              return (
                <button
                  key={folder.id}
                  onClick={() => handleSelectFolder(idx)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="leading-snug">{folder.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MAIN PRESENTATION CANVAS: Scrollable on mobile, centered on desktop */}
      <main
        ref={mainScrollRef}
        className="flex-1 relative overflow-y-auto overflow-x-hidden px-4 sm:px-6 md:px-10 py-6 flex flex-col justify-start md:justify-center"
      >
        <div className="w-full my-auto">
          <CurrentSlideComponent />
        </div>
      </main>

      {/* FOOTER CONTROLS */}
      <footer className="h-14 md:h-16 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between px-4 md:px-8 z-40 shrink-0">
        {/* Left: Active Folder Title */}
        <div className="text-xs text-slate-400 font-mono truncate max-w-xs md:max-w-md hidden sm:block">
          <strong className="text-indigo-400">{currentFolder.id}.</strong> {currentFolder.name}
        </div>

        {/* Center: Slide Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {totalSlidesInFolder > 1 &&
            currentFolder.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlideIndex === i
                    ? 'w-5 sm:w-6 bg-indigo-500 shadow-sm shadow-indigo-500/50'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Slide ${i + 1}`}
              />
            ))}
          {totalSlidesInFolder > 1 && (
            <span className="text-[11px] font-mono text-slate-400 ml-1 sm:ml-2">
              {currentSlideIndex + 1} / {totalSlidesInFolder}
            </span>
          )}
        </div>

        {/* Right: Prev & Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentFolderIndex === 0 && currentSlideIndex === 0}
            className="p-2 px-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all disabled:opacity-30 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <button
            onClick={nextSlide}
            disabled={
              currentFolderIndex === folders.length - 1 &&
              currentSlideIndex === totalSlidesInFolder - 1
            }
            className="p-2 px-3.5 sm:px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all disabled:opacity-30 flex items-center gap-1 text-xs font-semibold shadow-md shadow-indigo-600/30"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}

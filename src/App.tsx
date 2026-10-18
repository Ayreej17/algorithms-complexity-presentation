import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide5_1 from "./components/Aguilar/Slide1_Foundations";
import Slide5_2 from "./components/Aguilar/Slide2_RealWorld";
import Slide5_3 from "./components/Aguilar/Slide3_CodeSignatures";
import Slide5_4 from "./components/Aguilar/Slide4_InteractiveDemo";
import Slide5_5 from "./components/Aguilar/Slide5_HierarchyImpact";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide5_1 />;
      case 1: return <Slide5_2 />;
      case 2: return <Slide5_3 />;
      case 3: return <Slide5_4 />;
      case 4: return <Slide5_5 />;
      default: return <Slide5_1 />;
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden flex flex-col font-sans">
      <main className="flex-1 relative overflow-hidden px-8 md:px-16 py-8">
        {renderSlide()}
      </main>

      <footer className="h-20 bg-slate-900 border-t border-slate-800 flex items-center justify-between px-8 z-50">
        <div className="text-slate-500 font-semibold tracking-wide text-sm hidden md:block">
          ALGORITHMS & COMPLEXITY
        </div>

        <div className="flex gap-3">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-indigo-500 scale-125" : "bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all disabled:opacity-30 flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" /> Prev
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-all disabled:opacity-30 flex items-center gap-2 font-semibold"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
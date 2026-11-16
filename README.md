# 🧠 Algorithms & Computational Complexity — Interactive Web Presentation

An interactive, mobile-responsive classroom presentation deck built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed to visualize Chapter 9 concepts—from backtracking mechanics and state-space trees to polynomial-time verification and the P vs. NP problem.

🔗 **Live Presentation:** [ch9-backtracking-computational-complexity.vercel.app](https://ch9-backtracking-computational-complexity.vercel.app/)

---

## ✨ Key Features

- **10 Modular Topic Sections:** Structured cleanly by chapter topic and presenter section for effortless team collaboration.
- **Live Algorithm Simulators:** Interactive step-by-step labs including N-Queens, Stack Maze Backtracking, State-Space Tree Explorer, Subset Sum Verifier ($O(N)$ vs. $O(2^N)$), Pruning Simulators, and Complexity Class Euler Diagrams.
- **Interactive Quiz Mode:** Built-in classroom quiz view to test conceptual mastery after the lecture.
- **Responsive & Mobile-Ready:** Built with dynamic viewport scaling (`h-dvh`), touch-friendly drawer navigation, keyboard arrow shortcuts (`←` / `→`), and fullscreen presentation mode.

---

## 📚 Presentation Modules

| # | Module / Folder | Focus Area |
| :--- | :--- | :--- |
| **01** | **Chapter 9: Intro** | Overview, Time/Space Asymptotics ($O, \Omega, \Theta$), and Growth Lab |
| **02** | **Brute-Force vs. Backtracking** | Exhaustive search vs. constraint-based pruning & N-Queens |
| **03** | **Choose, Explore, Undo** | Recursive triad paradigm, call stack mechanics, and maze traversal |
| **04** | **State-Space Trees** | Tree definitions, depth/branching metrics, and live tree explorer |
| **05** | **Subset Sum Problems** | Karp's formulation, bounding functions, and interactive solver |
| **06** | **Include / Exclude Decisions** | Binary choice modeling, tree geometry, and bitmasks |
| **07** | **Pruning & Exponential Growth** | Handling combinatorial explosion and pruning efficiency |
| **08** | **Decision & Verification** | Polynomial-time certificates, code signatures, and Subset Sum verifier |
| **09** | **P, NP, NP-Hard & NP-Complete** | Complexity classes, Cook-Levin reductions, and Euler hierarchy |
| **10** | **Interactive Quiz** | End-of-chapter review and knowledge check |

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-deployed from `main`)

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ayreej17/algorithms-complexity-presentation.git](https://github.com/Ayreej17/algorithms-complexity-presentation.git)
   cd algorithms-complexity-presentation
   on the same terminal, run this:
   npm install
   npm run dev
   then follow the link or just type in your browser: localhost:5173

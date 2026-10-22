// 

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./pages/Home";
import { AllWork } from "./pages/AllWork";
import { ContactPage } from "./pages/ContactPage";
import { ProjectPage } from "./pages/ProjectPage";
import { CustomCursor } from "./components/CustomCursor";
import GradualBlur from "./components/GradualBlur";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
      <CustomCursor />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<AllWork />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
            <GradualBlur
              target="page"
              position="bottom"
              height="8rem"
              strength={2}
              divCount={5}
              curve="bezier"
              exponential={true}
              opacity={1}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

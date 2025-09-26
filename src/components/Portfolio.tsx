import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certification from "./Certification";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

// Preloader Component
const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  const letters = ["L", "O", "A", "D", "I", "N", "G"];
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero"
        >
          <div className="flex space-x-2">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [20, 0, 20]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                className="text-4xl font-poppins font-bold text-white tracking-wider"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <div className={`min-h-screen custom-scrollbar ${isDark ? 'dark' : ''}`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certification />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
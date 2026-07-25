'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide scrollbar during loading
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2800); // 2.8 seconds loading screen
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white pointer-events-auto"
        >
          <div className="flex flex-col items-center overflow-hidden">
             {/* Logo Reveal */}
             <motion.div 
               initial={{ y: "100%", opacity: 0 }}
               animate={{ y: "0%", opacity: 1 }}
               exit={{ y: "-50%", opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             >
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-6 text-center select-none">
                  Motion<span className="text-white/20">OO2</span>
                </h1>
             </motion.div>
             
             {/* Loading Bar */}
             <motion.div 
               initial={{ scaleX: 0, opacity: 1 }}
               animate={{ scaleX: 1 }}
               exit={{ opacity: 0, transition: { duration: 0.5 } }}
               transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
               className="h-[2px] bg-white origin-left w-full max-w-[300px]"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

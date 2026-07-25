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
    }, 2500);
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
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white pointer-events-auto"
        >
          <div className="flex flex-col items-center overflow-hidden">
             <motion.div 
               initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-6 text-center select-none">
                  Motion<span className="text-white/20">OO2</span>
                </h1>
             </motion.div>
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
               className="h-[2px] bg-white origin-left w-full max-w-[300px]"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

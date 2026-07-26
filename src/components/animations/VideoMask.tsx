'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VideoMask() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 20]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ['2rem', '0rem']);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] bg-transparent relative z-10 mt-[20vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        
        <motion.div
          style={{ scale, borderRadius, opacity }}
          className="w-[50vw] md:w-[35vw] h-[30vh] md:h-[40vh] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative origin-center pointer-events-auto"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          
          <motion.h2 
            style={{ opacity: textOpacity }}
            className="text-white font-black text-5xl md:text-7xl tracking-widest uppercase mix-blend-overlay"
          >
            Discover
          </motion.h2>
        </motion.div>

      </div>
    </div>
  );
}

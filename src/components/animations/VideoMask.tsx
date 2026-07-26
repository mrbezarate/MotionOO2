'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VideoMask() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: Scale up to fill screen (0 → 0.5)
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  // Phase 1→2: Border radius shrinks (0.3 → 0.6)
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.6], ['3rem', '3rem', '0rem']);
  // Phase 2: Content appears (0.4 → 0.7)
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  // Phase 2→3: Title scales up (0.4 → 0.7)
  const titleScale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1]);
  // Phase 3: Whole section fades out (0.85 → 1)
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  // Label fades out as the element grows
  const labelOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="h-[400vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ 
            scale, 
            borderRadius, 
            opacity: sectionOpacity,
          }}
          className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                     flex items-center justify-center relative overflow-hidden origin-center"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] 
                         opacity-20 mix-blend-overlay pointer-events-none" />
          
          {/* Initial "Discover" label — fades out as element grows */}
          <motion.span 
            style={{ opacity: labelOpacity }}
            className="text-white font-bold text-xl md:text-2xl tracking-widest uppercase 
                       absolute z-20 mix-blend-overlay"
          >
            Discover
          </motion.span>

          {/* Content that appears after fullscreen fill */}
          <motion.div
            style={{ opacity: contentOpacity, scale: titleScale }}
            className="flex flex-col items-center justify-center text-center z-10 px-8"
          >
            <h2 className="text-5xl md:text-[7vw] font-black uppercase tracking-tighter 
                          text-white drop-shadow-2xl leading-none">
              Beyond<br />Boundaries
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Where creativity meets cutting-edge technology to redefine digital experiences.
            </p>
          </motion.div>

          {/* Floating ambient shapes */}
          <motion.div 
            animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div 
            animate={{ y: [20, -20, 20], x: [15, -15, 15] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-black/20 blur-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const Column = ({ y, className }: { y: any; className?: string }) => (
    <motion.div style={{ y }} className={`flex flex-col gap-6 w-full ${className}`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-full h-80 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div ref={containerRef} className="h-[250vh] bg-neutral-950 relative overflow-hidden pt-40 px-8">
      <div className="max-w-7xl mx-auto h-full flex gap-8">
        <Column y={y1} />
        <Column y={y2} className="mt-40" />
        <Column y={y3} className="mt-20" />
      </div>
    </div>
  );
}

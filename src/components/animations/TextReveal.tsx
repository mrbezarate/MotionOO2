"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const blur = useTransform(progress, range, [10, 0]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative inline-block mr-2 mt-2 md:mr-3 md:mt-3">
      <span className="absolute inset-0 opacity-10">{children}</span>
      <motion.span 
        style={{ opacity, y, filter: useTransform(blur, (v) => `blur(${v}px)`) }} 
        className="relative z-10 text-white inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = "" }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 40%"],
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="relative w-full py-32 flex items-center justify-center px-4 z-10 pointer-events-auto">
      <div className={`flex flex-wrap max-w-5xl text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${className}`}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
};

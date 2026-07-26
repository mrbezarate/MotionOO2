"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-[1.5vw] mt-[1.5vw]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = "" }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="relative h-[200vh]">
      <div className={`sticky top-0 h-screen flex items-center justify-center px-4`}>
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
    </div>
  );
};

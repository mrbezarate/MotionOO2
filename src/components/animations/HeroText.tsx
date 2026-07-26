'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroTextProps {
  text: string;
}

export default function HeroText({ text }: HeroTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center overflow-hidden text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className="pb-2 text-5xl font-extrabold tracking-tighter text-transparent md:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-r from-white to-gray-500"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

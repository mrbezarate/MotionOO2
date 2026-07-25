'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SlidingPanels() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-50%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["50%", "-20%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);

  return (
    <div ref={container} className="relative flex flex-col gap-10 py-32 overflow-hidden bg-black w-full z-10 pointer-events-auto">
      <motion.div style={{ x: x1 }} className="flex gap-10 whitespace-nowrap min-w-max">
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px white" }}>Unexpected</h1>
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-white">Layouts</h1>
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-neutral-800">Everywhere</h1>
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex gap-10 whitespace-nowrap min-w-max">
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-white">Moving Left</h1>
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px white" }}>& Right</h1>
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-neutral-800">Constantly</h1>
      </motion.div>
      <motion.div style={{ x: x3 }} className="flex gap-10 whitespace-nowrap min-w-max">
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-neutral-800">Dynamic</h1>
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-white">Shifting</h1>
        <h1 className="text-[12vw] font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px white" }}>Perspectives</h1>
      </motion.div>
    </div>
  );
}

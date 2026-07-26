'use client';
import { motion } from 'framer-motion';

export default function InfiniteCarousel() {
  const items = [
    "Digital Reality", "Motion Systems", "Creative Dev", "Next.js Mastery", "WebGL Magic", "Seamless Flow"
  ];

  return (
    <div className="w-full py-16 md:py-20 bg-black overflow-hidden flex flex-col gap-10 z-10 pointer-events-auto">
      <div className="w-full text-center mb-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Endless Loop</h2>
      </div>
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex gap-10 min-w-max px-5"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0 h-64 w-[25rem] md:w-[40rem] rounded-[2rem] bg-neutral-900/50 backdrop-blur-md border border-neutral-800 flex items-center justify-center p-10 hover:bg-neutral-800/80 transition-colors cursor-none">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white/50 hover:text-white transition-colors">{item}</h3>
          </div>
        ))}
      </motion.div>
      <motion.div 
        animate={{ x: ["-50%", "0%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="flex gap-10 min-w-max px-5"
      >
        {[...items, ...items].reverse().map((item, i) => (
          <div key={i} className="shrink-0 h-64 w-[25rem] md:w-[40rem] rounded-[2rem] bg-neutral-900/50 backdrop-blur-md border border-neutral-800 flex items-center justify-center p-10 hover:bg-neutral-800/80 transition-colors cursor-none">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-transparent transition-colors" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>{item}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

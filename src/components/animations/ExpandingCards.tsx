'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const panels = [
  { id: 1, title: 'Explore', color: 'from-purple-900/50 to-indigo-900/50' },
  { id: 2, title: 'Create', color: 'from-indigo-900/50 to-blue-900/50' },
  { id: 3, title: 'Inspire', color: 'from-blue-900/50 to-cyan-900/50' },
  { id: 4, title: 'Build', color: 'from-cyan-900/50 to-teal-900/50' },
];

export default function ExpandingCards() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20 px-4 md:px-20 z-10 pointer-events-auto">
      <div className="w-full text-center mb-20">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Expand Your Mind</h2>
      </div>
      <div className="w-full max-w-[120rem] h-[60vh] md:h-[70vh] flex gap-4 md:gap-8">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.id}
            onMouseEnter={() => setActive(index)}
            animate={{ flex: active === index ? 5 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`relative h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-none bg-gradient-to-br ${panel.color} border border-white/10 flex items-end p-6 md:p-10`}
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <motion.h2 
              animate={{ 
                opacity: active === index ? 1 : 0, 
                x: active === index ? 0 : -20
              }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white whitespace-nowrap drop-shadow-2xl z-10"
            >
              {panel.title}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

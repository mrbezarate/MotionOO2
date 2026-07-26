'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '99.9%', label: 'Uptime', suffix: '' },
  { value: '60', label: 'FPS Target', suffix: 'fps' },
  { value: '<100', label: 'Load Time', suffix: 'ms' },
  { value: '∞', label: 'Possibilities', suffix: '' },
];

export default function FloatingStats() {
  return (
    <div className="w-full py-20 bg-black relative overflow-hidden pointer-events-auto z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col items-center text-center p-8 rounded-3xl 
                       bg-white/[0.03] border border-white/10 backdrop-blur-sm
                       hover:bg-white/[0.06] transition-colors duration-500 group"
          >
            <span className="text-5xl md:text-7xl font-black text-white tracking-tight 
                           group-hover:text-transparent group-hover:bg-clip-text 
                           group-hover:bg-gradient-to-r group-hover:from-purple-400 
                           group-hover:to-cyan-400 transition-all duration-500">
              {stat.value}
            </span>
            <span className="mt-2 text-sm md:text-base text-neutral-500 uppercase tracking-widest font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

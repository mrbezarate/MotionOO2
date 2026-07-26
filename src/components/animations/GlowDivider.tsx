'use client';
import { motion } from 'framer-motion';

export default function GlowDivider() {
  return (
    <div className="w-full flex items-center justify-center py-10 bg-black z-10 relative overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent origin-center blur-sm"
      />
    </div>
  );
}

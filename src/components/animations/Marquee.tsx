'use client';
import { motion } from "framer-motion";

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap bg-white text-black py-10 md:py-20 flex items-center z-10 pointer-events-auto -rotate-2 scale-110 shadow-2xl">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        <span className="text-[12vw] font-black uppercase tracking-tighter px-10">{text}</span>
        <span className="text-[12vw] font-black uppercase tracking-tighter px-10 text-transparent" style={{ WebkitTextStroke: "2px black" }}>{text}</span>
        <span className="text-[12vw] font-black uppercase tracking-tighter px-10">{text}</span>
        <span className="text-[12vw] font-black uppercase tracking-tighter px-10 text-transparent" style={{ WebkitTextStroke: "2px black" }}>{text}</span>
        <span className="text-[12vw] font-black uppercase tracking-tighter px-10">{text}</span>
        <span className="text-[12vw] font-black uppercase tracking-tighter px-10 text-transparent" style={{ WebkitTextStroke: "2px black" }}>{text}</span>
      </motion.div>
    </div>
  );
}

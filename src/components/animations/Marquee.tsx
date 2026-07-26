'use client';
import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  theme?: 'light' | 'dark';
  direction?: 'left' | 'right';
  rotate?: string;
  className?: string;
}

export default function Marquee({ text, theme = 'light', direction = 'left', rotate = '-rotate-2', className = '' }: MarqueeProps) {
  const isLight = theme === 'light';
  
  const bgClass = isLight ? 'bg-white' : 'bg-black';
  const textClass = isLight ? 'text-black' : 'text-white';
  const strokeColor = isLight ? 'black' : 'white';
  const borderClass = isLight ? 'border-black' : 'border-neutral-800';

  // Собираем пару (сплошной текст + текст с обводкой)
  const block = (
    <>
      <span className={`text-[10vw] font-black uppercase tracking-tighter px-6 ${textClass}`}>{text}</span>
      <span className="text-[10vw] font-black uppercase tracking-tighter px-6 text-transparent" style={{ WebkitTextStroke: `2px ${strokeColor}` }}>{text}</span>
    </>
  );

  return (
    <div className={`relative w-full overflow-hidden whitespace-nowrap py-6 md:py-10 flex items-center z-10 pointer-events-auto scale-110 shadow-2xl border-y ${borderClass} ${bgClass} ${rotate} ${className}`}>
      <motion.div
        className="flex w-max"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
      >
        {/* Первая половина ленты (4 пары) */}
        <div className="flex">
          {block}{block}{block}{block}
        </div>
        {/* Вторая половина ленты — абсолютно идентична первой, чтобы сдвиг на -50% был незаметным */}
        <div className="flex">
          {block}{block}{block}{block}
        </div>
      </motion.div>
    </div>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';

const MagneticLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative px-4 py-2 cursor-pointer group"
    >
      <Link href={href} className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
        {children}
      </Link>
      <motion.div className="absolute inset-0 z-[-1] rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious() || 0;
      if (latest > 100 && latest > previous) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 mx-auto mt-4 max-w-7xl backdrop-blur-md bg-black/20 border border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500">
          <span className="text-xl font-bold text-white">M</span>
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">Motion</span>
      </div>

      <div className="items-center hidden space-x-1 md:flex">
        <MagneticLink href="#work">Work</MagneticLink>
        <MagneticLink href="#about">About</MagneticLink>
        <MagneticLink href="#services">Services</MagneticLink>
        <MagneticLink href="#contact">Contact</MagneticLink>
      </div>

      <button className="px-5 py-2 text-sm font-medium text-black transition-colors bg-white rounded-full hover:bg-gray-200">
        Let's Talk
      </button>
    </motion.nav>
  );
}

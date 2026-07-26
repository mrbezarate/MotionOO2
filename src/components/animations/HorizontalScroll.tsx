'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScroll() {
  const items = [
    { id: 1, title: "Innovate", subtitle: "Pushing the boundaries of what is possible on the web." },
    { id: 2, title: "Design", subtitle: "Crafting beautiful, user-centric interfaces." },
    { id: 3, title: "Develop", subtitle: "Writing robust, scalable, and highly performant code." },
    { id: 4, title: "Motion", subtitle: "Breathing life into pixels with fluid animations." },
  ];

  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] z-10 pointer-events-auto">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-black">
        <motion.div style={{ x }} className="flex gap-10 px-4 md:px-20 w-[400vw]">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative h-[60vh] w-[85vw] md:w-[65vw] shrink-0 overflow-hidden bg-neutral-900/30 rounded-3xl border border-neutral-800 backdrop-blur-xl flex flex-col justify-end p-8 md:p-16 hover:bg-neutral-800/40 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 z-0"></div>
              <motion.div style={{ x: textParallax }} className="relative z-10">
                <h1 className="text-6xl md:text-[8vw] font-black text-white/30 group-hover:text-white transition-colors duration-700 uppercase tracking-tighter leading-none drop-shadow-2xl">
                  {item.title}
                </h1>
                <p className="text-xl md:text-3xl text-neutral-400 mt-6 max-w-xl drop-shadow-md">{item.subtitle}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

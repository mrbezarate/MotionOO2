'use client';
import { motion } from 'framer-motion';

const features = [
  { title: "Dynamic Flow", desc: "Elements weave through the screen like a river, appearing from the void.", align: "left" },
  { title: "Bold Typography", desc: "Massive fonts that dictate the visual hierarchy and demand attention.", align: "right" },
  { title: "Seamless Transitions", desc: "No stuttering, just pure fluid motion powered by Framer Motion.", align: "left" },
];

export default function ZigZag() {
  return (
    <div className="w-full flex flex-col gap-40 py-20 px-6 md:px-20 bg-black z-10 pointer-events-auto">
      {features.map((f, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: f.align === 'left' ? -150 : 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like easeOut
          viewport={{ once: true, margin: "-20%" }}
          className={`w-full flex flex-col ${f.align === 'left' ? 'items-start' : 'items-end text-right'}`}
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-[6vw] font-black uppercase leading-none">{f.title}</h2>
            <p className="mt-8 text-2xl md:text-3xl text-neutral-400 font-light">{f.desc}</p>
          </div>
          <div className={`mt-12 w-full md:w-3/4 h-[40vh] md:h-[60vh] rounded-[3rem] overflow-hidden relative group bg-neutral-900 border border-neutral-800 flex justify-center items-center`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black to-blue-900/20 transition-transform duration-1000 group-hover:scale-110"></div>
             <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="relative z-10 text-white/10 font-black text-[20vw] leading-none select-none pointer-events-none"
             >
               0{i+1}
             </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

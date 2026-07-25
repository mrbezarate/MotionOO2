'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cards = [
  { 
    id: "01", 
    title: "Innovate", 
    desc: "Pushing the boundaries of interactive web design to create memorable experiences.", 
    gradient: "from-rose-950 to-neutral-950",
    imageGrad: "from-rose-500 to-orange-500"
  },
  { 
    id: "02", 
    title: "Create", 
    desc: "Pixel-perfect precision in every single frame. We obsess over the micro-details.", 
    gradient: "from-blue-950 to-neutral-950",
    imageGrad: "from-blue-500 to-cyan-500"
  },
  { 
    id: "03", 
    title: "Deliver", 
    desc: "Unmatched performance and aesthetics in harmony. Fast, fluid, and beautiful.", 
    gradient: "from-emerald-950 to-neutral-950",
    imageGrad: "from-emerald-500 to-teal-500"
  },
  { 
    id: "04", 
    title: "Shape", 
    desc: "Setting totally new standards for digital experiences across all platforms.", 
    gradient: "from-purple-950 to-neutral-950",
    imageGrad: "from-purple-500 to-pink-500"
  }
];

export default function StickySection() {
  return (
    <div className="w-full relative z-10 pointer-events-auto py-20 pb-40">
      {cards.map((card, i) => (
        <div 
          key={card.id} 
          className="h-screen w-full flex items-center justify-center sticky top-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.95, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, margin: "-10%" }}
            style={{ top: `${i * 20}px` }}
            className={`w-[95vw] md:w-[80vw] h-[85vh] rounded-[3rem] bg-gradient-to-br ${card.gradient} border border-white/10 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-[0_-10px_50px_rgba(0,0,0,0.5)] relative p-10 md:p-20`}
          >
             {/* Noise Texture Overlay */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>
             
             {/* Huge background Number */}
             <h2 className="text-[35vw] md:text-[20vw] font-black tracking-tighter text-white/5 absolute -right-10 -bottom-20 select-none z-0 leading-none">
               {card.id}
             </h2>

             {/* Content Left */}
             <div className="z-10 flex flex-col items-start w-full md:w-1/2 relative h-full justify-center">
               <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm uppercase tracking-widest mb-10">
                 Phase {card.id}
               </span>
               <h3 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white drop-shadow-2xl">
                 {card.title}
               </h3>
               <p className="mt-8 text-xl md:text-3xl text-neutral-300 font-light max-w-xl leading-relaxed">
                 {card.desc}
               </p>
               <button className="mt-12 flex items-center gap-4 text-white text-xl font-medium group hover:opacity-80 transition-opacity cursor-none">
                 Discover more 
                 <span className="p-4 rounded-full bg-white text-black group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                   <ArrowUpRight size={24} />
                 </span>
               </button>
             </div>

             {/* Visual Right (Abstract Glass Visual) */}
             <div className="hidden md:flex w-full md:w-1/2 h-full items-center justify-end z-10 pl-20">
               <div className="w-full h-full max-h-[600px] rounded-[2rem] bg-neutral-900/50 border border-white/10 overflow-hidden relative group shadow-2xl">
                  {/* Colorful animated gradient background inside the mockup */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.imageGrad} opacity-60 mix-blend-overlay group-hover:scale-125 group-hover:rotate-12 transition-transform duration-1000`}></div>
                  
                  {/* Floating abstract elements inside Mockup */}
                  <motion.div 
                    animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 45, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-white/20 blur-3xl mix-blend-overlay"
                  />
                  <motion.div 
                    animate={{ y: [20, -20, 20], x: [10, -10, 10], rotate: [0, -45, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-3xl bg-black/40 blur-2xl mix-blend-overlay"
                  />
                  
                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
               </div>
             </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

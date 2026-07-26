'use client';

import Background3D from "@/components/canvas/Background3D";
import HeroText from "@/components/animations/HeroText";
import HorizontalScroll from "@/components/animations/HorizontalScroll";
import Marquee from "@/components/animations/Marquee";
import { TextReveal } from "@/components/animations/TextReveal";
import ParallaxGallery from "@/components/animations/ParallaxGallery";
import VideoMask from "@/components/animations/VideoMask";
import SlidingPanels from "@/components/animations/SlidingPanels";
import ZigZag from "@/components/animations/ZigZag";
import ExpandingCards from "@/components/animations/ExpandingCards";
import StickySection from "@/components/animations/StickySection";
import InfiniteCarousel from "@/components/animations/InfiniteCarousel";
import FloatingStats from "@/components/animations/FloatingStats";
import GlowDivider from "@/components/animations/GlowDivider";
import { motion } from "framer-motion";

export default function Home() {
  const revealText = "Every pixel is carefully crafted to deliver a highly engaging and extremely premium experience. We use the latest in WebGL and Framer Motion to build an unforgettable digital journey. Scroll down to see the magic unfold.";

  return (
    <main className="relative w-full overflow-x-hidden bg-transparent text-white">
      {/* 3D Background - Zoom Out Reveal */}
      <motion.div 
        initial={{ scale: 1.5, filter: "blur(30px)", opacity: 0 }}
        animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 4, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        className="fixed inset-0 -z-10 w-full h-screen pointer-events-none"
      >
        <Background3D />
      </motion.div>
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center pt-20 px-4 md:px-10 z-10 pointer-events-none">
        <div className="max-w-7xl w-full text-center pointer-events-auto flex flex-col items-center">
          <HeroText text="The Future of Web Experiences" />
          
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 0.8, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 4 }}
            className="mt-12 text-neutral-400 text-xl md:text-3xl font-light tracking-wide max-w-4xl mx-auto"
          >
            Immersive 3D environments combined with buttery smooth animations. A new dimension of interaction.
          </motion.p>

          <motion.a 
            href="https://t.me/UndaOn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 4.3, type: "spring", bounce: 0.4 }}
            className="mt-12 px-10 py-5 bg-white text-black text-xl font-bold rounded-full hover:scale-110 transition-transform duration-300 uppercase tracking-widest cursor-none inline-block shadow-[0_0_40px_rgba(255,255,255,0.3)] relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </motion.a>
        </div>
      </section>

      {/* 2. Text Reveal Section — Sticky centered */}
      <section className="relative z-10 pointer-events-auto bg-gradient-to-b from-transparent via-black/50 to-black">
        <TextReveal text={revealText} className="text-center md:text-left" />
      </section>
      
      {/* 3. Sliding Panels (Unexpected Left/Right) */}
      <SlidingPanels />

      <GlowDivider />

      {/* 4. Video Mask Scale Section */}
      <section className="relative z-10">
        <VideoMask />
      </section>
      
      {/* 5. ZigZag Feature Section */}
      <section className="relative z-10 pointer-events-auto">
        <ZigZag />
      </section>

      <GlowDivider />
      <FloatingStats />

      {/* 6. Giant Marquee Section */}
      <section className="relative w-full py-10 z-10 pointer-events-auto bg-black overflow-hidden flex flex-col justify-center">
        <Marquee text="Premium Design • WebGL Magic • " />
        <div className="mt-8">
          <Marquee text="Next.js Performance • Smooth Scroll • " />
        </div>
      </section>

      <GlowDivider />

      {/* 7. Parallax Gallery Section */}
      <section className="relative z-10 pointer-events-auto">
        <ParallaxGallery />
      </section>

      {/* 8. Horizontal Scroll Section */}
      <HorizontalScroll />

      {/* 9. Sticky Scroll Reveal (NEW) */}
      <StickySection />

      {/* 10. Expanding Cards (NEW) */}
      <ExpandingCards />

      {/* 11. Infinite Loop Carousel (NEW) */}
      <InfiniteCarousel />

      {/* 12. Contact / CTA Section */}
      <section className="relative w-full flex flex-col items-center justify-center py-20 px-4 z-10 pointer-events-auto bg-black">
        <div className="max-w-5xl w-full text-center space-y-16">
          <h2 className="text-6xl md:text-[8vw] font-black tracking-tighter text-white uppercase leading-none">
            Ready to build?
          </h2>
          <p className="text-2xl md:text-4xl text-neutral-400 font-light">
            Let's create something extraordinary together.
          </p>
          <a 
            href="https://t.me/UndaOn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 px-12 py-6 bg-white text-black text-2xl font-bold rounded-full hover:scale-110 transition-transform duration-300 uppercase tracking-widest cursor-none inline-block shadow-[0_0_60px_rgba(255,255,255,0.2)] relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </a>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="relative w-full pt-20 pb-10 flex flex-col items-center justify-center z-10 pointer-events-auto bg-black border-t border-neutral-900">
        <h1 className="text-[15vw] font-black tracking-tighter text-neutral-900 uppercase pointer-events-none select-none leading-[0.8]">
          Motion
        </h1>
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mt-10 px-10 text-neutral-500 font-medium tracking-widest uppercase text-sm">
          <p>© 2026 Antigravity. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with Next.js & Three.js</p>
        </div>
      </footer>
    </main>
  );
}

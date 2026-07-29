'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const panels = [
  {
    id: 1,
    title: 'Explore',
    video: '/videos/Explore.mp4',
    color: 'from-purple-900/70 to-indigo-900/50',
    copy: 'Discover new forms, textures, and visual rhythm.',
  },
  {
    id: 2,
    title: 'Create',
    video: '/videos/Create.mp4',
    color: 'from-indigo-900/70 to-blue-900/50',
    copy: 'Turn motion into a deliberate and focused experience.',
  },
  {
    id: 3,
    title: 'Inspire',
    video: '/videos/Inspire.mp4',
    color: 'from-blue-900/70 to-cyan-900/50',
    copy: 'Let the visuals breathe and guide attention naturally.',
  },
  {
    id: 4,
    title: 'Build',
    video: '/videos/Build.mp4',
    color: 'from-cyan-900/70 to-teal-900/50',
    copy: 'Layer depth, energy, and structure into one scene.',
  },
];

export default function ExpandingCards() {
  const [active, setActive] = useState<number>(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active) {
        const playPromise = video.play();

        if (playPromise) {
          playPromise.catch(() => {
            // Autoplay can be blocked on some devices. The poster frame still renders.
          });
        }
      } else {
        video.pause();
      }
    });
  }, [active]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20 px-4 md:px-20 z-10 pointer-events-auto">
      <div className="w-full max-w-7xl text-center mb-8 md:mb-12">
        <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.4em] text-white/45">
          Interactive Story Panels
        </p>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
          Expand Your Mind
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-sm md:text-lg text-white/55">
          Hover a panel to expand it and let the video take over the space.
        </p>
      </div>

      <div className="w-full max-w-[120rem] h-[110vh] md:h-[72vh] flex flex-col md:flex-row gap-4 md:gap-8">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.id}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            tabIndex={0}
            animate={{ flex: active === index ? 5 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative w-full h-full min-h-[16rem] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-none bg-gradient-to-br ${panel.color} border border-white/10 flex items-end p-6 md:p-10`}
          >
            <video
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              className="absolute inset-0 h-full w-full object-cover pointer-events-none scale-100 transition-transform duration-700 group-hover:scale-[1.04]"
              src={panel.video}
              muted
              loop
              playsInline
              preload={active === index ? 'auto' : 'metadata'}
              autoPlay={active === index}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            <motion.div
              animate={{
                opacity: active === index ? 1 : 0.72,
                y: active === index ? 0 : 12,
              }}
              transition={{ duration: 0.45 }}
              className="relative z-10 flex flex-col gap-3 max-w-[18rem] md:max-w-[24rem] pr-8"
            >
              <motion.h2
                animate={{
                  opacity: active === index ? 1 : 0.95,
                  x: active === index ? 0 : -16,
                }}
                transition={{ duration: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white whitespace-nowrap drop-shadow-2xl"
              >
                {panel.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: active === index ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-sm md:text-base text-white/75 leading-relaxed"
              >
                {panel.copy}
              </motion.p>
            </motion.div>

            <motion.div
              animate={{ opacity: active === index ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-6 right-6 z-10 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-md"
            >
              Live
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

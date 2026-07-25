'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // We use 'lerp' instead of 'duration' for that heavy, physics-based inertia 
    // common in Awwwards-winning motion sites. 
    // A lower lerp value (e.g. 0.05) creates a very long, smooth tail to the scroll.
    const lenis = new Lenis({
      lerp: 0.05, 
      wheelMultiplier: 0.7, // Slows down the distance covered per scroll tick (feels heavier)
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

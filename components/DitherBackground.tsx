'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Dither = dynamic(() => import('./Dither'), {
  ssr: false,
  loading: () => null,
});

export function DitherBackground() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkMobile, { passive: true });

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-45"
      aria-hidden="true"
    >
      <Dither
        waveSpeed={reducedMotion ? 0 : 0.02}
        waveFrequency={2.2}
        waveAmplitude={0.18}
        waveColor={[0.82, 0.84, 0.88]}
        colorNum={isMobile ? 3 : 4}
        pixelSize={isMobile ? 3 : 2}
        disableAnimation={reducedMotion}
        enableMouseInteraction={!isMobile}
        mouseRadius={1.2}
      />
    </div>
  );
}

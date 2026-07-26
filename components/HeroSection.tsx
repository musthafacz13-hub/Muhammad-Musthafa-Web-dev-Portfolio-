'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center py-16 px-6 sm:px-12 overflow-hidden select-none">
      {/* Main Title & Hero Content */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Profile Image / Avatar Section
            Developer Note: Once you place your profile image at `/public/images/profile.jpg`,
            it will automatically replace the clean minimalist placeholder below.
            Supports JPG/PNG format, recommended size 800x800 px with a square aspect ratio.
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative group"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-black/[0.08] bg-[#f5f5f7] relative flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {!imageError ? (
              <Image
                src="/images/profile.jpg"
                alt="Muhammed Musthafa Profile"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                priority
                className="object-cover transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Premium Minimalist Initials Placeholder when profile.jpg is not present */
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#f5f5f7] to-[#e8e8ed] text-[#1d1d1f] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0071e3]/5 to-transparent rounded-full" />
                <span className="text-2xl sm:text-3xl font-semibold tracking-tight font-sans z-10 opacity-90">
                  MM
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1d1d1f] leading-[1.08] sm:leading-[1.05]"
        >
          Muhammed Musthafa
        </motion.h1>

        {/* Roles Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#86868b] flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span className="text-[#1d1d1f]">UI/UX Designer</span>
          <span className="text-amber-500/80 font-serif italic text-lg sm:text-3xl md:text-4xl">&amp;</span>
          <span className="text-[#1d1d1f]">Web Developer</span>
        </motion.div>

        {/* Minimal Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[#86868b] font-normal leading-relaxed tracking-normal"
        >
          Designing and building clean, responsive web applications and user interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#1d1d1f] text-white text-sm font-medium hover:bg-[#2d2d2f] active:scale-95 transition-all duration-200 shadow-md flex items-center gap-2 group"
          >
            <span>Get in Touch</span>
            <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a
            href="#about"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] border border-black/5 text-[#1d1d1f] text-sm font-medium hover:bg-[#e8e8ed] active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <span>About Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

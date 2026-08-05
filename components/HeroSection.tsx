'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center py-16 px-6 sm:px-12 overflow-hidden">
      {/* Main Title & Hero Content */}
      <div className="max-w-4xl text-center relative z-10 flex flex-col items-center">
        {/* Premium Developer Studio Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative group"
        >
          <div className="relative w-36 h-44 sm:w-44 sm:h-52 md:w-48 md:h-60 rounded-2xl overflow-hidden border border-black/10 bg-[#f5f5f7] shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <Image
              src="/src/assets/images/developer_portrait_1785931968869.jpg"
              alt="Professional portrait of Musthafa, Senior Web Developer & Cybersecurity Engineer"
              fill
              priority
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
              className={`object-cover transition-all duration-700 ${
                imageLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
              }`}
              onLoad={() => setImageLoaded(true)}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight font-sans text-[#1d1d1f]"
        >
          Musthafa
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-[#515154] font-medium tracking-tight max-w-2xl"
        >
          Web Developer, Freelancer &amp; Cybersecurity Learner
        </motion.p>

        {/* Short Mission / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[#86868b] max-w-xl font-normal leading-relaxed"
        >
          Crafting high-performance web applications, secure digital systems, and minimalist user experiences with modern engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[#0071e3] text-white font-medium text-sm sm:text-base hover:bg-[#0077ed] transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] border border-black/5 font-medium text-sm sm:text-base hover:bg-[#e8e8ed] transition-all duration-200 active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-[#86868b] tracking-wider uppercase font-medium">
          Scroll to discover
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-[#86868b]/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-[#86868b] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

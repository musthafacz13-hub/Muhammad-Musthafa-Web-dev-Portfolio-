'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Sparkles, Compass, Target, Clock, ShieldCheck, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Eyebrow */}
      <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          01 — Personal Story
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
          About Muhammed Musthafa
        </h2>
      </div>

      {/* Magazine Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Location & Key Snapshot Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Kozhikode Location Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center font-semibold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Origin</span>
                <h3 className="text-lg font-bold text-[#1d1d1f]">Kozhikode, Kerala</h3>
              </div>
            </div>

            <p className="text-sm text-[#86868b] leading-relaxed mb-6">
              Based in the coastal city of Kozhikode, India. Bringing cultural richness, calm perspective, and global design sensibilities to modern digital experiences.
            </p>

            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-between text-xs font-mono text-[#1d1d1f]/80">
              <span>LOCATION COORDS</span>
              <span className="font-semibold text-[#0071e3]">11.2588° N, 75.7804° E</span>
            </div>
          </motion.div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-3xl"
            >
              <Clock className="w-6 h-6 text-[#1d1d1f] mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">1.5 Years</div>
              <p className="text-xs text-[#86868b] mt-1 font-medium">Independent Product &amp; Web Building</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-3xl bg-gradient-to-br from-white to-[#f5f5f7]"
            >
              <Target className="w-6 h-6 text-[#0071e3] mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-[#0071e3] tracking-tight">2027</div>
              <p className="text-xs text-[#86868b] mt-1 font-medium">Goal: Professional Web Developer</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Narrative Editorial */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 sm:p-10 rounded-3xl space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f] leading-snug">
              Designing and building thoughtful digital products from Kozhikode to the world.
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-[#86868b] leading-relaxed font-normal">
              <p>
                My name is <strong className="text-[#1d1d1f] font-semibold">Muhammed Musthafa</strong>. I design and build modern websites, mobile applications, and full-stack digital products.
              </p>
              <p>
                I enjoy AI-assisted development. Although I don’t consider myself a traditional programmer yet, I continuously learn programming fundamentals every single day with the clear goal of becoming a professional Web Developer by <strong className="text-[#1d1d1f] font-semibold">2027</strong>.
              </p>
            </div>

            {/* Core Philosophy Banner */}
            <div className="pt-6 border-t border-black/5">
              <div className="p-6 rounded-2xl bg-[#0071e3]/[0.03] border border-[#0071e3]/10 relative overflow-hidden">
                <p className="text-sm sm:text-base font-medium text-[#1d1d1f] italic leading-relaxed">
                  “I believe thoughtful design, continuous learning, and attention to detail create great digital products.”
                </p>
                <span className="block mt-3 text-xs font-semibold tracking-wide text-[#0071e3] uppercase">
                  — Muhammed Musthafa
                </span>
              </div>
            </div>
          </motion.div>

          {/* Honest Experience Disclaimer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-3xl bg-[#f5f5f7] border border-black/5 flex items-start gap-4"
          >
            <ShieldCheck className="w-5 h-5 text-[#86868b] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1d1d1f]">Authentic &amp; Honest Journey</h4>
              <p className="text-xs text-[#86868b] leading-relaxed mt-1">
                I have been building for ~1.5 years independently. I do not claim fake corporate company experience or invented client lists. Every piece of work here represents genuine learning and pure passion for craft.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

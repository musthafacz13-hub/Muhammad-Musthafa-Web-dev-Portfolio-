'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Sliders, Cpu, Compass } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    icon: Layers,
    title: 'Thoughtful Simplicity',
    description:
      'Simplicity is not the absence of clutter, but the presence of purpose. Every pixel, line of code, and margin exists for a reason.',
    tag: 'Design Core',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Continuous Evolution',
    description:
      'A commitment to lifelong mastery. Learning programming fundamentals daily with a firm vision to become a Pro Web Developer by 2027.',
    tag: 'Mindset',
  },
  {
    number: '03',
    icon: Sliders,
    title: 'Obsessive Detail',
    description:
      'Craftsmanship lives in the details: perfect typographic tracking, natural spring physics, balanced negative space, and smooth blur interactions.',
    tag: 'Execution',
  },
  {
    number: '04',
    icon: Cpu,
    title: 'AI-Human Synergy',
    description:
      'Embracing AI-assisted workflows to accelerate prototyping, explore creative paradigms, and build full-stack digital products efficiently.',
    tag: 'Future Stack',
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          02 — Core Beliefs
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
          Design Philosophy
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] mt-2 font-normal">
          The principles guiding every interface I design and every line of code I write.
        </p>
      </div>

      {/* 4 Pillars Magazine Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 sm:p-10 rounded-3xl relative group hover:shadow-2xl hover:border-black/10 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d1d1f] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-[#86868b]">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#86868b]">
                <span className="font-mono text-xs font-semibold text-[#0071e3]">PILLAR {pillar.number}</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#1d1d1f] font-medium">Apple Principle →</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

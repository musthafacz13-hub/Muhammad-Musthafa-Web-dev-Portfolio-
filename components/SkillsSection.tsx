'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Palette } from 'lucide-react';

const SERVICES = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Wireframing, visual hierarchy, mobile and web application layouts, design tokens, and interactive prototypes in Figma.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building clean, responsive front-end websites using HTML5, CSS3, JavaScript, TypeScript, React, Next.js, and Tailwind CSS.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Interface Design',
    description: 'Designing intuitive iOS and Android application interfaces adhering to Apple Human Interface and Material Design standards.',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      {/* Services Header */}
      <div className="flex flex-col items-start gap-1.5 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          What I Do
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Services &amp; Capabilities
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-black/5 hover:border-black/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technologies Section Header */}
      <div id="tech" className="flex flex-col items-start gap-1.5 mb-6 pt-6 border-t border-black/5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Tools
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
          Technologies
        </h3>
      </div>

      {/* Coming Soon Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 rounded-3xl border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
            Coming Soon
          </span>
          <p className="text-sm text-[#86868b] mt-1">
            Technology stack details and interactive skill showcase are currently being updated.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

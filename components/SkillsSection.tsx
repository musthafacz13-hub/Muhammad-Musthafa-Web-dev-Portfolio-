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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
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
              className="glass-card p-6 sm:p-8 rounded-3xl border border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#515154] dark:text-[#d1d1d6] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technologies Section Header */}
      <div id="tech" className="flex flex-col items-start gap-1.5 mb-8 pt-8 border-t border-black/5 dark:border-white/10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Tech Stack
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
          Tools &amp; Technologies
        </h3>
      </div>

      {/* Tech Stack Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'React & Next.js 15', category: 'Frontend Frameworks', desc: 'App Router, SSR, Server Components, Code Splitting' },
          { name: 'TypeScript', category: 'Language', desc: 'Strict Typing, Interfaces, Generics, Type Safety' },
          { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first layout, custom design tokens, responsive design' },
          { name: 'Figma', category: 'Design & Prototyping', desc: 'Design systems, auto layout, component libraries, wireframes' },
          { name: 'Framer Motion', category: 'Motion Design', desc: 'Spring physics, layout transitions, micro-interactions' },
          { name: 'Vercel & Git', category: 'Deployment & CI/CD', desc: 'Version control, preview deployments, performance monitoring' },
        ].map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card p-5 rounded-2xl border border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-2.5 py-0.5 rounded-full">
                  {tech.category}
                </span>
              </div>
              <h4 className="text-base font-bold text-[#1d1d1f] dark:text-white tracking-tight group-hover:text-[#0071e3] transition-colors">
                {tech.name}
              </h4>
              <p className="text-xs text-[#515154] dark:text-[#d1d1d6] leading-relaxed mt-1.5">
                {tech.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Code, Cpu, Smartphone, Sparkles, Layers } from 'lucide-react';

const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'design', label: 'UI/UX & Prototyping' },
  { id: 'dev', label: 'Web & Frontend' },
  { id: 'ai', label: 'AI & Tools' },
];

const SKILL_SLOTS = [
  {
    category: 'design',
    title: 'UI/UX & Visual Systems',
    subtitle: 'Figma, Layout Grids, Typography, Design Systems',
    icon: Layout,
    slotNumber: '01',
  },
  {
    category: 'dev',
    title: 'Frontend Fundamentals',
    subtitle: 'HTML5, CSS3, Modern JS/TS, React Basics',
    icon: Code,
    slotNumber: '02',
  },
  {
    category: 'ai',
    title: 'AI-Assisted Workflows',
    subtitle: 'Prompt Crafting, Rapid Prototyping, Code Generation',
    icon: Cpu,
    slotNumber: '03',
  },
  {
    category: 'design',
    title: 'Mobile Application Interfaces',
    subtitle: 'iOS Human Interface Principles, Android Material Design',
    icon: Smartphone,
    slotNumber: '04',
  },
  {
    category: 'dev',
    title: 'Component Architecture',
    subtitle: 'Tailwind CSS, Next.js App Router, Framer Motion',
    icon: Layers,
    slotNumber: '05',
  },
  {
    category: 'ai',
    title: 'Future Tech Stack 2027',
    subtitle: 'Full-Stack Integration, Database Architecture, APIs',
    icon: Sparkles,
    slotNumber: '06',
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSlots =
    activeTab === 'all'
      ? SKILL_SLOTS
      : SKILL_SLOTS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
            03 — Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mt-1">
            Skills Showcase
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] mt-2 font-normal max-w-xl">
            A refined UI matrix highlighting active learning domains and skills currently being expanded.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#f5f5f7] border border-black/5 rounded-2xl">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-white text-[#1d1d1f] shadow-xs border border-black/5'
                  : 'text-[#86868b] hover:text-[#1d1d1f]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSlots.map((slot, idx) => {
          const Icon = slot.icon;
          return (
            <motion.div
              key={slot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-8 rounded-3xl border border-black/5 hover:border-black/15 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-[#86868b]">
                    Slot {slot.slotNumber}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                  {slot.title}
                </h3>
                <p className="text-xs text-[#86868b] leading-relaxed mb-6">
                  {slot.subtitle}
                </p>
              </div>

              {/* Apple Glass Placeholder Badge */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] text-[11px] font-medium text-[#1d1d1f]/80 border border-black/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-ping" />
                  Skills Coming Soon
                </span>
                <span className="text-xs text-[#86868b] font-mono">2026/2027</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

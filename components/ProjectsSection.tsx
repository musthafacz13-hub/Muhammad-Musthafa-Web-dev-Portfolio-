'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Search,
  X,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: string;
  categoryTag: string;
  role: string;
  liveUrl: string;
  urlDisplay: string;
  status: string;
  summary: string;
  purpose: string;
  keyFeatures: string[];
  techStack: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'passforge',
    name: 'PassForge',
    category: 'Security & Utility Web App',
    categoryTag: 'Security & Utility',
    role: 'Product Designer & Frontend Developer',
    liveUrl: 'https://passfourge.vercel.app/',
    urlDisplay: 'passfourge.vercel.app',
    status: 'LIVE',
    summary:
      'PassForge is a modern, privacy-first password generator designed to help users create strong, unique, and secure passwords instantly.',
    purpose:
      'Eliminates the risks of weak or reused passwords by providing 100% client-side local password generation with real-time strength scoring and estimated crack time calculations.',
    keyFeatures: [
      'Client-side local password generation (100% private)',
      'Real-time strength evaluation & estimated crack time',
      'Customizable length & character sets (symbols, numbers, cases)',
      'One-click copy with instant micro-interaction feedback',
      'Apple, Linear, and Notion inspired minimal interface',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
  },
  {
    id: 'typeflow',
    name: 'TypeFlow',
    category: 'Educational Web App',
    categoryTag: 'Education',
    role: 'Frontend Developer & UI Designer',
    liveUrl: 'https://keyboard-learner-by-musthafa.vercel.app/',
    urlDisplay: 'keyboard-learner-by-musthafa.vercel.app',
    status: 'LIVE',
    summary:
      'TypeFlow is an interactive typing practice web application created for beginners, school students, and first-time computer users.',
    purpose:
      'Provides a clean, distraction-free environment to learn keyboard layouts, build muscle memory, and improve typing speed and accuracy through guided practice sessions.',
    keyFeatures: [
      'Interactive typing practice lessons & guided modules',
      'Real-time WPM speed & accuracy tracking',
      'Physical keyboard key visual feedback',
      'Clean, distraction-free learning environment',
      'Accessible, mobile and desktop responsive layout',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'nexus',
    name: 'Nexus Workspace',
    category: 'Productivity Web App',
    categoryTag: 'Productivity & SaaS',
    role: 'Product Designer & Full-Stack Developer',
    liveUrl: 'https://nexus-ai-ruby-eight.vercel.app/',
    urlDisplay: 'nexus-ai-ruby-eight.vercel.app',
    status: 'LIVE',
    summary:
      'Nexus is a modern productivity workspace built to deliver fast, intelligent, and natural interactions through a clean Apple-inspired user experience.',
    purpose:
      'Combines a monochrome design system with real-time response streaming to help users streamline writing, coding, research, and daily task organization.',
    keyFeatures: [
      'Real-time response streaming interface',
      'Secure authentication flow with Supabase Auth',
      'Markdown and syntax-highlighted code block rendering',
      'Conversation history management & session search',
      'Dark and Light theme toggle',
    ],
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Supabase',
      'Vercel',
    ],
  },
  {
    id: 'habitos',
    name: 'HabitOS',
    category: 'Productivity & SaaS',
    categoryTag: 'Productivity & SaaS',
    role: 'Product Designer & Frontend Developer',
    liveUrl: 'https://habit-tracker-khaki-five-20.vercel.app/',
    urlDisplay: 'habit-tracker-khaki-five-20.vercel.app',
    status: 'LIVE',
    summary:
      'HabitOS is a premium personal habit tracking web application designed to help users build consistent daily routines.',
    purpose:
      'Provides a personalized onboarding flow, daily streak tracking, calendar visualizers, and habit analytics inspired by modern SaaS products like Linear and Notion.',
    keyFeatures: [
      'Custom habit creation & personalized profile onboarding',
      'Daily habit completion streaks & progress analytics',
      'Calendar visualization dashboard & milestone achievements',
      'Local Storage data persistence with zero account setup needed',
      'Light and Dark mode interface',
    ],
    techStack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
      'Vercel',
    ],
  },
  {
    id: 'kozhikoden-ruchi',
    name: 'Kozhikoden Ruchi',
    category: 'Food Discovery Web App',
    categoryTag: 'Food & Culture',
    role: 'UI/UX Designer & Frontend Developer',
    liveUrl: 'https://kozhikoden-ruchi.vercel.app/',
    urlDisplay: 'kozhikoden-ruchi.vercel.app',
    status: 'LIVE',
    summary:
      'A modern food discovery platform created to help food lovers and travelers explore the rich culinary culture of Kozhikode.',
    purpose:
      'Simplifies destination discovery by showcasing popular restaurants, cafés, street food spots, and authentic Malabar cuisine through a mobile-first, intuitive UI.',
    keyFeatures: [
      'Categorized food & restaurant discovery grid',
      'Mobile-first responsive interface designed for travelers on the go',
      'Clean navigation & location details',
      'Fast image & content loading performance',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio',
    category: 'Portfolio Website',
    categoryTag: 'Portfolio',
    role: 'UI/UX Designer & Frontend Developer',
    liveUrl: 'https://muhammad-musthafa-web-dev-portfolio.vercel.app/',
    urlDisplay: 'muhammad-musthafa-web-dev-portfolio.vercel.app',
    status: 'LIVE',
    summary:
      'An Apple-inspired digital portfolio showcasing selected design and development projects with precision, performance, and accessibility.',
    purpose:
      'Presents personal work, design approach, and frontend capabilities through a clean visual hierarchy, subtle Framer Motion transitions, and a responsive glass design system.',
    keyFeatures: [
      'Apple-inspired minimalist layout & glassmorphic design system',
      'Smooth Framer Motion scroll animations and active tab indicators',
      'Fully responsive, WCAG AA accessible layout',
      'Direct Google Forms contact integration',
    ],
    techStack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
  },
];

const CATEGORIES = ['All', 'Security & Utility', 'Education', 'Productivity & SaaS', 'Food & Culture', 'Portfolio'];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.categoryTag === selectedCategory;
    const matchesQuery =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10 space-y-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Featured Projects
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
          Selected Work
        </h2>
        <p className="text-base text-[#515154] dark:text-[#d1d1d6] max-w-xl font-normal">
          Real web applications and design systems built with focus on user experience, performance, and modern engineering.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] shadow-md'
                  : 'bg-black/5 dark:bg-white/10 text-[#86868b] dark:text-[#a1a1a6] hover:bg-black/10 dark:hover:bg-white/15 hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Search Box */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tech or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            suppressHydrationWarning
            className="w-full pl-9 pr-8 py-2 rounded-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 text-xs text-[#1d1d1f] dark:text-white placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.length === 0 ? (
          <div className="glass-card p-12 rounded-3xl text-center text-[#86868b]">
            <p className="text-base font-medium">No projects match your filter or query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#0071e3] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              {/* Top Bar: Badges, Title, Role & Primary CTA */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-black/5 dark:border-white/10">
                <div className="space-y-3 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      LIVE
                    </span>
                    <span className="text-xs font-medium text-[#1d1d1f]/70 dark:text-white/80 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] dark:text-white group-hover:text-[#0071e3] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#515154] dark:text-[#d1d1d6] tracking-wide uppercase">
                    Role: <span className="text-[#1d1d1f] dark:text-white">{project.role}</span>
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="shrink-0 flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1d1d1f] dark:text-white text-xs font-semibold active:scale-[0.98] transition-all duration-200"
                  >
                    <span>Inspect Details</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] text-xs font-semibold hover:bg-[#2d2d2f] dark:hover:bg-[#e8e8ed] active:scale-[0.98] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
                  >
                    <span>View Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Content Body */}
              <div className="py-6 space-y-6">
                {/* Summary & Purpose */}
                <div className="space-y-2">
                  <p className="text-base text-[#1d1d1f] dark:text-white/90 font-medium leading-relaxed">
                    {project.summary}
                  </p>
                  <p className="text-sm text-[#515154] dark:text-[#d1d1d6] leading-relaxed">
                    {project.purpose}
                  </p>
                </div>

                {/* Key Features Bullet Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]/70 dark:text-white/70 mb-3">
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1d1d1f]/90 dark:text-white/90">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Footer: Tech Stack Chips & URL Link */}
              <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-[#86868b] dark:text-[#a1a1a6] mr-2">Tech:</span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/5 dark:border-white/10 text-[11px] font-medium text-[#1d1d1f] dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  <span>{project.urlDisplay}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Interactive Project Inspection Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 dark:border-white/15 overflow-hidden z-10 max-h-[90vh] overflow-y-auto space-y-6"
            >
              <div className="flex items-start justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      LIVE
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
                      {activeProjectModal.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] dark:text-white mt-1">
                    {activeProjectModal.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#86868b] mt-1">
                    Role: {activeProjectModal.role}
                  </p>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2 rounded-full text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1">
                    Overview &amp; Purpose
                  </h4>
                  <p className="text-sm text-[#1d1d1f] dark:text-white leading-relaxed">
                    {activeProjectModal.summary}
                  </p>
                  <p className="text-xs text-[#515154] dark:text-[#d1d1d6] mt-2 leading-relaxed">
                    {activeProjectModal.purpose}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                    Key Features &amp; Architecture
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#1d1d1f] dark:text-white">
                    {activeProjectModal.keyFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProjectModal.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-[#1d1d1f] dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-4">
                <a
                  href={activeProjectModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0071e3] hover:underline flex items-center gap-1"
                >
                  <span>{activeProjectModal.urlDisplay}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={activeProjectModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#0071e3] text-white text-xs font-semibold hover:bg-[#0077ed] active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


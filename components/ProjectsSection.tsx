'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, Utensils, Globe, Layers, Smartphone, Sparkles, Layout, Flame, Calendar, Sliders, CheckSquare, BookOpen, Keyboard, ShieldCheck, KeyRound } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  liveUrl: string;
  urlDisplay: string;
  status: string;
  summary: string;
  description: string[];
  highlights: { icon: React.ElementType; label: string }[];
  keyFeatures?: string[];
  responsibilities: string[];
  responsibilitiesTitle?: string;
  techStack: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'passforge',
    name: 'PassForge',
    category: 'Password Generator Web Application',
    role: 'Product Designer & Frontend Developer',
    liveUrl: 'https://passfourge.vercel.app/',
    urlDisplay: 'passfourge.vercel.app',
    status: 'Live',
    summary: 'PassForge is a modern password generator designed to help users create strong, unique, and secure passwords instantly with a clean, privacy-focused experience.',
    description: [
      'PassForge is a modern password generator designed to help users create strong, unique, and secure passwords instantly. It provides a fast, intuitive, and privacy-focused experience with a clean, minimal interface inspired by OpenAI, Apple, Linear, and Notion. Passwords are generated locally in the browser, ensuring user data remains private and is never stored or transmitted.',
      'Many people continue to use weak, predictable, or reused passwords, increasing the risk of unauthorized account access. Existing password generators often feel outdated, cluttered, or overly technical. PassForge solves this by offering a simple, elegant, and accessible tool that enables users to generate highly secure passwords within seconds while maintaining a premium user experience.'
    ],
    highlights: [
      { icon: ShieldCheck, label: 'Privacy-First Local Generation' },
      { icon: KeyRound, label: 'Strength & Crack Time Calculation' },
      { icon: Sliders, label: 'Customizable Length & Character Sets' },
    ],
    keyFeatures: [
      'Generate strong random passwords instantly',
      'Adjustable password length',
      'Include or exclude uppercase letters',
      'Include or exclude lowercase letters',
      'Include or exclude numbers',
      'Include or exclude special characters',
      'Password strength indicator',
      'Estimated crack time calculation',
      'One-click copy to clipboard',
      'Show/Hide password',
      'Fully responsive design',
      'Light and Dark mode support',
      'Smooth micro-interactions and animations',
      'Privacy-first local password generation',
    ],
    responsibilitiesTitle: 'Problem Solved',
    responsibilities: [
      'Eliminate risks associated with weak, predictable, or reused passwords',
      'Ensure 100% privacy with local client-side password generation (no network transmission)',
      'Provide instant password strength scoring & estimated crack time calculation',
      'Deliver an intuitive, accessible, and responsive interface inspired by Apple, Linear & Notion',
      'Enable one-click clipboard copying and flexible character set customisation'
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
      'Vercel'
    ],
  },
  {
    id: 'typeflow',
    name: 'TypeFlow',
    category: 'Educational Web Application',
    role: 'Frontend Developer & UI Designer',
    liveUrl: 'https://keyboard-learner-by-musthafa.vercel.app/',
    urlDisplay: 'keyboard-learner-by-musthafa.vercel.app',
    status: 'Live',
    summary: 'TypeFlow is a modern typing practice web application designed for first-time computer users, school students, and beginners.',
    description: [
      'TypeFlow is a modern typing practice web application designed for first-time computer users, school students, and beginners. It provides a clean, distraction-free environment where users can learn keyboard fundamentals, improve typing accuracy, and gradually increase typing speed through interactive practice sessions with real-time performance feedback.',
      'The goal is to make keyboard learning simple, enjoyable, and accessible for everyone before they move into coding, office work, or everyday computer use. It helps users develop muscle memory and keyboard familiarity with ease.'
    ],
    highlights: [
      { icon: Keyboard, label: 'Educational Technology' },
      { icon: BookOpen, label: 'Interactive Typing Lessons' },
      { icon: Sparkles, label: 'Typing Practice & UX' },
    ],
    keyFeatures: [
      'Beginner-friendly interface',
      'Interactive typing lessons',
      'Real-time WPM tracking',
      'Accuracy monitoring',
      'Physical keyboard support',
      'Responsive design',
      'Clean distraction-free UI',
      'Instant performance feedback',
      'Progressive learning experience',
      'Fast loading performance',
      'Educational Technology',
      'Frontend Development',
      'Performance Optimization',
      'Accessibility',
    ],
    responsibilitiesTitle: 'Problem Solved',
    responsibilities: [
      'Learn keyboard layouts',
      'Build muscle memory',
      'Improve typing speed',
      'Increase typing accuracy',
      'Develop confidence using physical keyboards'
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel'
    ],
  },
  {
    id: 'nexus-ai',
    name: 'Nexus AI',
    category: 'AI Assistant • Productivity • Web Application',
    role: 'Product Designer & Full-Stack Developer',
    liveUrl: 'https://nexus-ai-ruby-eight.vercel.app/',
    urlDisplay: 'nexus-ai-ruby-eight.vercel.app',
    status: 'Completed',
    summary: 'Nexus AI is a modern AI-powered assistant built to deliver fast, intelligent, and natural conversations through a clean Apple-inspired user experience.',
    description: [
      "Nexus AI is a modern AI-powered assistant built to deliver fast, intelligent, and natural conversations through a clean Apple-inspired user experience. The project combines a premium minimalist interface with the power of Google's Gemini API to provide real-time AI assistance for productivity, learning, writing, coding, and everyday tasks.",
      'The application is designed with a strong focus on performance, simplicity, and scalability. Every interface follows a monochrome design system, smooth animations, responsive layouts, and production-ready frontend architecture to create a seamless experience across desktop, tablet, and mobile devices.',
    ],
    highlights: [
      { icon: Sparkles, label: 'Gemini-Powered Smart Interactions' },
      { icon: Globe, label: 'Real-time Streaming Responses' },
      { icon: Layout, label: 'Monochrome Design System' },
    ],
    keyFeatures: [
      'AI-powered conversations using the Google Gemini API',
      'Secure server-side API integration (API keys never exposed to the client)',
      'Real-time streaming AI responses',
      'Conversation history management',
      'Edit and regenerate previous prompts',
      'Markdown and syntax-highlighted code rendering',
      'Apple-inspired responsive UI/UX',
      'Dark and Light mode',
      'Secure authentication with Supabase Auth',
      'Responsive layouts optimized for all screen sizes',
      'Modern TypeScript architecture with reusable components',
      'Production-ready deployment on Vercel',
    ],
    responsibilities: [
      'Designed and developed the complete UI/UX system',
      'Built frontend architecture and integrated Google Gemini API',
      'Optimized responsive layout designs for mobile, tablet, and desktop',
      'Implemented secure authentication flow using Supabase Auth',
    ],
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Supabase Authentication',
      'Supabase Database',
      'Google Gemini API',
      'Vercel',
    ],
  },
  {
    id: 'habitos',
    name: 'HabitOS – Personal Habit Tracking Web Application',
    category: 'Web Application • Productivity • SaaS',
    role: 'Product Design & Frontend Development',
    liveUrl: 'https://habit-tracker-khaki-five-20.vercel.app/',
    urlDisplay: 'habit-tracker-khaki-five-20.vercel.app',
    status: 'Completed',
    summary: 'HabitOS is a premium personal habit tracking web application designed to help users build consistent daily routines through a clean, modern, and distraction-free interface.',
    description: [
      'HabitOS is a premium personal habit tracking web application designed to help users build consistent daily routines through a clean, modern, and distraction-free interface.',
      'The application provides a personalized onboarding experience where users create their own profile and build a custom habit system instead of relying on predefined data. It includes habit creation, streak tracking, progress analytics, calendar visualization, achievements, responsive layouts, dark and light themes, and comprehensive personalization settings.',
      'HabitOS is designed with a premium SaaS experience inspired by modern products like Linear, Notion, and Apple, focusing on simplicity, performance, and an intuitive user experience.',
    ],
    highlights: [
      { icon: Flame, label: 'Habit Streaks & Progress Analytics' },
      { icon: Calendar, label: 'Calendar Visualization & Stats' },
      { icon: Sliders, label: 'Dark & Light Mode' },
    ],
    keyFeatures: [
      'Personalized onboarding',
      'User profile management',
      'Custom habit creation',
      'Daily habit tracking',
      'Habit streaks',
      'Calendar view',
      'Statistics dashboard',
      'Achievement system',
      'Responsive design',
      'Dark & Light mode',
      'Local Storage data persistence',
      'Premium UI/UX',
      'Smooth animations',
      'Accessibility support',
      'Mobile-friendly interface',
    ],
    responsibilities: [
      'Product Design',
      'UI/UX Design',
      'Frontend Development',
      'Component Architecture',
      'Responsive Design',
      'Performance Optimization',
    ],
    techStack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
      'Local Storage API',
    ],
  },
  {
    id: 'kozhikoden-ruchi',
    name: 'Kozhikoden Ruchi',
    category: 'Food Discovery Web Application',
    role: 'UI/UX Designer & Frontend Developer',
    liveUrl: 'https://kozhikoden-ruchi.vercel.app/',
    urlDisplay: 'kozhikoden-ruchi.vercel.app',
    status: 'Completed',
    summary: 'A modern food discovery web application created to help food lovers and travelers explore the rich culinary culture of Kozhikode.',
    description: [
      'Kozhikoden Ruchi is a modern food discovery web application created to help food lovers and travelers explore the rich culinary culture of Kozhikode. The platform allows users to discover popular restaurants, cafés, street food, and authentic Malabar cuisine through a clean, intuitive, and mobile-first user experience.',
      'The project focuses on simplicity, accessibility, and elegant design while making it easy for users to find the best local food destinations. Every screen was designed with usability, visual clarity, and responsive performance in mind to provide a seamless experience across all devices.',
    ],
    highlights: [
      { icon: Utensils, label: 'Popular Restaurants & Street Food' },
      { icon: Smartphone, label: 'Mobile-First UX' },
      { icon: Layers, label: 'Authentic Malabar Cuisine' },
    ],
    responsibilities: [
      'Designed the complete UI/UX',
      'Planned the user flow and information architecture',
      'Built a responsive frontend',
      'Optimized the interface for mobile and desktop',
      'Focused on clean navigation and user-friendly interactions',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio',
    category: 'Portfolio Website',
    role: 'UI/UX Designer & Frontend Developer',
    liveUrl: 'https://muhammad-musthafa-web-dev-portfolio.vercel.app/',
    urlDisplay: 'muhammad-musthafa-web-dev-portfolio.vercel.app',
    status: 'Completed',
    summary: 'A modern personal portfolio website designed and developed to present my work, projects, and design approach through a clean, minimal, and user-focused experience.',
    description: [
      "A modern personal portfolio website designed and developed to present my work, projects, and design approach through a clean, minimal, and user-focused experience. Inspired by Apple's design philosophy, the portfolio emphasizes clarity, elegant typography, smooth interactions, and responsive layouts to create a professional digital presence.",
      'The website showcases my real projects, including UI/UX case studies and web applications, while reflecting my passion for creating intuitive, accessible, and visually refined digital experiences. Every section is designed with careful attention to usability, visual hierarchy, performance, and responsiveness across desktop, tablet, and mobile devices.',
    ],
    highlights: [
      { icon: Layout, label: 'Apple-Inspired Visual System' },
      { icon: Sparkles, label: 'Smooth Motion & Animations' },
      { icon: Globe, label: 'Fully Responsive Layout' },
    ],
    responsibilities: [
      'Designed the complete UI/UX',
      'Created the visual design system',
      'Planned the information architecture',
      'Developed the responsive frontend',
      'Built reusable UI components',
      'Implemented smooth animations and interactions',
      'Optimized performance and accessibility',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-12 max-w-5xl mx-auto relative z-10 space-y-12">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Featured Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Selected Work
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-card rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Project Visual Banner Header */}
            <div className="bg-gradient-to-br from-[#1d1d1f] via-[#2d2d2f] to-[#1d1d1f] p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0071e3]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                    <span className="text-xs font-medium text-white/70 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {project.name}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#1d1d1f] text-sm font-semibold hover:bg-[#f5f5f7] active:scale-95 transition-all shadow-md group"
                  >
                    <span>View Live Website</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Quick Highlights Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-white/70">
                {project.highlights.map((hl) => {
                  const Icon = hl.icon;
                  return (
                    <span key={hl.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                      <Icon className="w-3.5 h-3.5 text-[#0071e3]" />
                      {hl.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Editorial Content Body */}
            <div className="p-8 sm:p-10 space-y-8 bg-white">
              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 border-b border-black/5">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                    Role
                  </span>
                  <p className="text-sm font-semibold text-[#1d1d1f]">
                    {project.role}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                    Live URL
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#0071e3] hover:underline truncate block"
                  >
                    {project.urlDisplay}
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] block mb-1">
                    Category
                  </span>
                  <p className="text-sm font-semibold text-[#1d1d1f]">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Detailed Narrative Description */}
              <div className="space-y-4 text-sm sm:text-base text-[#1d1d1f]/80 leading-relaxed">
                {project.description.map((paragraph, i) => (
                  <p key={i} className={i === 1 ? 'text-[#86868b]' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Features (if present) */}
              {project.keyFeatures && (
                <div className="pt-6 border-t border-black/5 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.keyFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f5f5f7] border border-black/5 text-xs font-medium text-[#1d1d1f]/90"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities List */}
              <div className="pt-6 border-t border-black/5 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                  {project.responsibilitiesTitle || 'Key Responsibilities'}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#1d1d1f]/80">
                  {project.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#86868b] mr-2">Tech Stack:</span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/5 text-xs font-medium text-[#1d1d1f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  <span>Visit {project.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


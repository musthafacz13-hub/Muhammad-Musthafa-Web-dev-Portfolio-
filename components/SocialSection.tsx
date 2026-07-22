'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Twitter, ExternalLink } from 'lucide-react';

const SOCIALS = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com',
    handle: '@musthafa',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com',
    handle: '@musthafa.design',
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com',
    handle: '@musthafa_ui',
  },
];

export function SocialSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="social" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
          Connect
        </span>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
          Social Links
        </h2>

        {/* Minimalist Glass Pill containing Icons Only */}
        <div className="glass-pill px-8 py-4 rounded-full flex items-center gap-8 sm:gap-12 shadow-xl border border-black/10">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            const isHovered = hovered === social.name;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(social.name)}
                onMouseLeave={() => setHovered(null)}
                className="relative group p-3 rounded-full hover:bg-black/5 text-[#1d1d1f] hover:text-[#0071e3] transition-all duration-300"
                aria-label={social.name}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />

                {/* Subtle Tooltip Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1d1d1f] text-white text-[10px] font-semibold tracking-wider uppercase pointer-events-none whitespace-nowrap shadow-md"
                  >
                    {social.name}
                  </motion.div>
                )}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

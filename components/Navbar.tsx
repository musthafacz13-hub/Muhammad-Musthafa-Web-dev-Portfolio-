'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setMounted(true));
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple intersection observer detection for active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 px-4 sm:px-8 flex justify-center items-center pointer-events-none`}
      >
        <nav
          className={`pointer-events-auto glass-pill px-3 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center justify-between gap-4 sm:gap-8 max-w-4xl w-full transition-all duration-300 ${
            scrolled ? 'shadow-xl shadow-black/5 scale-[0.98]' : ''
          }`}
          aria-label="Global Navigation"
        >
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 group text-[#1d1d1f] font-semibold text-sm tracking-tight pl-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
            aria-label="Muhammed Musthafa - Home"
          >
            <span className="w-7 h-7 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform duration-300">
              MM
            </span>
            <span className="hidden xs:inline-block font-medium text-xs sm:text-sm text-[#1d1d1f]/90 tracking-tight">
              Muhammed Musthafa
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#000000]/[0.03] p-1 rounded-full border border-black/[0.04]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] ${
                    isActive
                      ? 'text-[#1d1d1f]'
                      : 'text-[#86868b] hover:text-[#1d1d1f]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && mounted && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 pr-1">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full bg-[#1d1d1f] text-white hover:bg-[#2d2d2f] active:scale-95 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#1d1d1f] hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            role="navigation"
            aria-label="Mobile Navigation Drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-card p-6 rounded-3xl shadow-2xl border border-black/10 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-[#1d1d1f] hover:bg-black/5 flex items-center justify-between transition-colors"
                >
                  {item.label}
                  <span className="text-[#86868b] text-xs">→</span>
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-black/5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-[#1d1d1f] text-white text-xs font-medium text-center block shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

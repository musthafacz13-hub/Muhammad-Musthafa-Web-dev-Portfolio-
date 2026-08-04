import React from 'react';
import { WatercolorMesh } from '@/components/WatercolorMesh';
import { DitherBackground } from '@/components/DitherBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import dynamic from 'next/dynamic';

// Below-the-fold components split dynamically to reduce initial JavaScript payload
const AboutSection = dynamic(() => import('@/components/AboutSection').then((mod) => mod.AboutSection));
const SkillsSection = dynamic(() => import('@/components/SkillsSection').then((mod) => mod.SkillsSection));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection').then((mod) => mod.ProjectsSection));
const ContactSection = dynamic(() => import('@/components/ContactSection').then((mod) => mod.ContactSection));
const SocialSection = dynamic(() => import('@/components/SocialSection').then((mod) => mod.SocialSection));
const FooterSection = dynamic(() => import('@/components/FooterSection').then((mod) => mod.FooterSection));

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[#0071e3] focus:text-white focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white text-xs font-medium tracking-wide transition-all"
      >
        Skip to main content
      </a>
      <main
        id="main-content"
        className="relative min-h-screen bg-white text-[#1d1d1f] overflow-hidden selection:bg-[#0071e3]/10 selection:text-[#0071e3]"
      >
        {/* Animated WWDC Watercolor Background Mesh */}
        <WatercolorMesh />

        {/* React Bits Interactive Dither Canvas Background */}
        <DitherBackground />

      {/* Floating Glass Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services & Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Social Section */}
      <SocialSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
    </>
  );
}

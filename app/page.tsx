'use client';

import { useState, useEffect } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS } from './data/portfolio';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme with <html> element and localStorage
  useEffect(() => {
    // On mount, check localStorage for saved preference (default: dark)
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="selection:bg-indigo-500/30 selection:text-white">
      <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-300 font-sans overflow-x-hidden transition-colors duration-500">

        {/* Animated Background */}
        <InteractiveBackground isDarkMode={isDarkMode} />

        {/* Floating Glow Orbs */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-indigo-600/5 dark:bg-indigo-600/15 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-cyan-600/5 dark:bg-cyan-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] right-[20%] w-[25%] h-[25%] bg-purple-600/[0.02] dark:bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        {/* Navigation */}
        <Navigation
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
          navLinks={[...NAV_LINKS]}
        />

        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <Chatbot isDarkMode={isDarkMode} />
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}
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
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS } from './data/portfolio';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <div className={`${isDarkMode ? 'dark' : ''} selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-white`}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-300 font-sans overflow-x-hidden transition-colors duration-500">
        <style>{`html { scroll-behavior: smooth; }`}</style>

        {/* --- Animated Background --- */}
        <InteractiveBackground isDarkMode={isDarkMode} />

        {/* --- Floating Glow Points --- */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 dark:bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* --- Navigation --- */}
        <Navigation
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
          navLinks={[...NAV_LINKS]}
        />

        <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

          <Chatbot isDarkMode={isDarkMode} />

          <HeroSection scrollToSection={scrollToSection} />

          <AboutSection />

          <SkillsSection />

          <ProjectsSection />

          <ExperienceSection />

          <ContactSection />

        </main>

        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}
'use client';

import { Sun, Moon, Menu, X, Download } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
  navLinks: string[];
}

const Navigation = ({
  isDarkMode,
  setIsDarkMode,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  navLinks,
}: NavigationProps) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-strong py-4 shadow-lg shadow-black/5 dark:shadow-black/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter cursor-pointer flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
            S
          </div>
          <span>
            Srishan<span className="text-indigo-400">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}

          <div className="flex items-center gap-3 border-l border-slate-200 dark:border-white/10 pl-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2 rounded-full bg-indigo-50 dark:bg-white/5 hover:bg-indigo-100 dark:hover:bg-white/10 border border-indigo-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-white/20 text-indigo-700 dark:text-white text-sm transition-all hover:scale-105 duration-300 flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-slate-700 dark:text-slate-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-strong py-4 px-6 flex flex-col gap-4 shadow-2xl animate-slide-down">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="text-left py-2 text-lg text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b border-slate-100 dark:border-white/5"
            >
              {link}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 py-3 text-lg font-medium text-indigo-600 dark:text-indigo-400"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

'use client';

import FadeIn from './FadeIn';
import { ChevronRight, Download, ArrowDown, Code2, Brain, Database, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen grid lg:grid-cols-2 gap-12 items-center pt-24 pb-12">
      {/* Left: Text content */}
      <div className="flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-sm mb-6 border border-indigo-500/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4">
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              {PERSONAL_INFO.name}.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-400 tracking-tight mb-6">
            {PERSONAL_INFO.subtitle}
          </h2>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-10">
            {PERSONAL_INFO.bio}
          </p>
        </FadeIn>

        <FadeIn delay={500} className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all flex items-center gap-2 group shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
          >
            View My Work
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={PERSONAL_INFO.resumeUrl}
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2 border border-white/10 hover:border-white/20"
          >
            Download CV
            <Download size={18} />
          </a>
        </FadeIn>

        <FadeIn delay={600} className="flex items-center gap-4 mt-8">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 hover:border-white/15 transition-all hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 hover:border-white/15 transition-all hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <div className="h-px bg-white/10 flex-grow max-w-[100px] ml-2" />
          <span className="text-xs text-slate-500 font-mono tracking-wider">CONNECT</span>
        </FadeIn>
      </div>

      {/* Right: Code card */}
      <FadeIn delay={300} direction="left" className="order-1 lg:order-2 relative">
        <div className="relative w-full max-w-md mx-auto aspect-square group">
          {/* Glow behind */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />

          {/* Code card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto glass-strong rounded-2xl shadow-2xl p-6 z-10 transform transition-all duration-700 hover:scale-105 hover:rotate-1">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/90" />
                <div className="w-3 h-3 rounded-full bg-amber-400/90" />
                <div className="w-3 h-3 rounded-full bg-green-400/90" />
              </div>
              <div className="text-xs font-mono text-slate-500">developer.ts</div>
            </div>

            <div className="space-y-2 font-mono text-sm md:text-base text-slate-300">
              <p>
                <span className="text-pink-400">const</span>{' '}
                <span className="text-blue-400">engineer</span> = {'{'}
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-400">&apos;Srishan Mandawala&apos;</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-emerald-400">&apos;Software Engineer&apos;</span>,
              </p>
              <p className="pl-4">focus: [</p>
              <p className="pl-8 text-amber-300">&apos;Full-Stack&apos;, &apos;GenAI&apos;, &apos;RAG&apos;</p>
              <p className="pl-4">],</p>
              <p className="pl-4">skills: [</p>
              <p className="pl-8 text-amber-300">&apos;React&apos;, &apos;Next.js&apos;,</p>
              <p className="pl-8 text-amber-300">&apos;FastAPI&apos;, &apos;LangChain&apos;</p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                isAvailable: <span className="text-purple-400">true</span>
              </p>
              <p>
                {'}'}
                <span className="text-slate-500">;</span>
                <span className="inline-block w-2 h-5 bg-indigo-400 ml-1 animate-typing-cursor" />
              </p>
            </div>
          </div>

          {/* Floating icons */}
          <div
            className="absolute -top-4 -right-4 p-4 glass rounded-2xl shadow-xl animate-bounce z-20"
            style={{ animationDuration: '3s' }}
          >
            <Code2 className="text-indigo-400" size={24} />
          </div>
          <div
            className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl shadow-xl animate-bounce z-20"
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          >
            <Brain className="text-purple-400" size={24} />
          </div>
          <div
            className="absolute top-1/2 -right-10 p-3 glass rounded-xl shadow-xl animate-bounce z-20 hidden lg:block"
            style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
          >
            <Database className="text-cyan-400" size={20} />
          </div>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce text-slate-500 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
};

export default HeroSection;

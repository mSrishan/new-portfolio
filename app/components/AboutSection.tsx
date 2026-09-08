'use client';

import FadeIn from './FadeIn';
import UserPlaceholder from './UserPlaceholder';
import { MapPin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative z-20 overflow-hidden">
      {/* Section label */}
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 dark:text-indigo-400">
            01 — About
          </span>
        </div>
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tight">
            About<br />
            <span className="gradient-text">Me.</span>
          </h2>
          <div className="hidden md:block h-px bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent flex-grow mb-4" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
        {/* Text content */}
        <div className="md:col-span-3 space-y-8">
          <FadeIn delay={150} direction="right">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Hello! I&apos;m{' '}
              <span className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</span>{' '}
              — a passionate Software Engineer based in{' '}
              <span className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</span>.
              My journey in software development started with a curiosity about how things work on the internet, and it has since evolved into a deep passion for building intelligent, AI-powered applications.
            </p>
          </FadeIn>

          <FadeIn delay={250} direction="right">
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Today, I specialize in full-stack development and Generative AI, building modern applications using technologies like{' '}
              <span className="text-slate-900 dark:text-slate-200 font-medium">React, Next.js, FastAPI, and LangChain</span>.
              I&apos;m passionate about Retrieval-Augmented Generation (RAG), NLP, and creating solutions that bridge the gap between cutting-edge AI and practical user experiences.
            </p>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={350} direction="right">
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: '1+', label: 'Years exp.' },
                { value: '3+', label: 'AI Projects' },
                { value: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl glass hover:border-indigo-400/30 transition-colors duration-300 group card-hover"
                >
                  <div className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Location + CTA */}
          <FadeIn delay={450} direction="right">
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-600 dark:text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <MapPin size={14} className="text-indigo-600 dark:text-indigo-400" />
                {PERSONAL_INFO.location}
              </div>

              <a
                href="#contact"
                className="group flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
              >
                Get in touch
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn delay={200} direction="left" className="md:col-span-2">
          <div className="relative group mx-auto max-w-sm md:max-w-none">
            {/* Decorative glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Main card */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl shadow-black/40 group-hover:border-indigo-400/30 transition-colors duration-500 aspect-[4/5]">
              <UserPlaceholder />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 z-20 px-4 mr-4 py-3 rounded-2xl glass shadow-xl">
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">Status</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to work
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-80 rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-indigo-500/30" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
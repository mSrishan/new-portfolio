'use client';

import FadeIn from './FadeIn';
import { experiences } from '../data/portfolio';
import { Briefcase, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32">
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400">
            04 — Experience
          </span>
        </div>
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
            Where I&apos;ve<br />
            <span className="gradient-text">Worked.</span>
          </h2>
          <div className="hidden md:block h-px bg-gradient-to-r from-white/10 to-transparent flex-grow mb-4" />
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto space-y-12 relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent" />

        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 150}>
            <div className="relative flex gap-8 group">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:scale-110 transition-all duration-300">
                  <Briefcase size={18} className="text-white" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-grow glass p-6 rounded-2xl hover:border-indigo-500/20 transition-all duration-300 card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit border border-indigo-500/20">
                    {exp.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 mb-5">
                  <MapPin size={14} className="text-cyan-400" />
                  <span className="text-base">{exp.company} &middot; {exp.location}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <ChevronRight size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

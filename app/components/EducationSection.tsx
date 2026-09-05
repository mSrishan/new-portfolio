'use client';

import FadeIn from './FadeIn';
import { education } from '../data/portfolio';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-32">
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400">
            05 — Education
          </span>
        </div>
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
            Academic<br />
            <span className="gradient-text">Journey.</span>
          </h2>
          <div className="hidden md:block h-px bg-gradient-to-r from-white/10 to-transparent flex-grow mb-4" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <FadeIn key={index} delay={index * 150}>
            <div className="group relative glass p-8 rounded-2xl hover:border-indigo-500/20 transition-all duration-300 card-hover h-full">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={28} className="text-indigo-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                {edu.degree}
              </h3>

              <p className="text-slate-400 text-base mb-4">
                {edu.institution}
              </p>

              <div className="flex items-center gap-2 text-sm font-mono text-slate-500 mb-3">
                <Calendar size={14} className="text-indigo-400" />
                {edu.duration}
              </div>

              {edu.details && (
                <div className="flex items-center gap-2 mt-4 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 w-fit">
                  <Award size={16} className="text-emerald-400" />
                  <span className="text-sm text-emerald-300 font-medium">{edu.details}</span>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

'use client';

import FadeIn from './FadeIn';
import { PERSONAL_INFO } from '../data/portfolio';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400">
            06 — Contact
          </span>
        </div>
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
            Get In<br />
            <span className="gradient-text">Touch.</span>
          </h2>
          <div className="hidden md:block h-px bg-gradient-to-r from-white/10 to-transparent flex-grow mb-4" />
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto text-center">
        <FadeIn delay={100}>
          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open!
          </p>
        </FadeIn>

        {/* Contact cards */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group glass p-6 rounded-2xl hover:border-indigo-500/20 transition-all duration-300 card-hover flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={22} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm text-slate-300 group-hover:text-indigo-400 transition-colors">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="group glass p-6 rounded-2xl hover:border-cyan-500/20 transition-all duration-300 card-hover flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone size={22} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
            </a>

            <div className="group glass p-6 rounded-2xl hover:border-emerald-500/20 transition-all duration-300 card-hover flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin size={22} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={300}>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-lg transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 mb-10"
          >
            <Send size={20} />
            Say Hello
          </a>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={400}>
          <div className="flex items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:border-white/20 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:border-white/20 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl glass hover:border-white/20 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;

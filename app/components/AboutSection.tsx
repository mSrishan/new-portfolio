'use client';

import FadeIn from './FadeIn';
import UserPlaceholder from './UserPlaceholder';
import { MapPin, ArrowRight } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-32 relative z-20 overflow-hidden">
            {/* Ambient background glow */}
            <div className="" />
            <div className="" />

            {/* Section label */}
            <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500 dark:text-indigo-400">
                        01 — About
                    </span>
                </div>
                <div className="flex items-end gap-6 mb-16">
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tight"
                        style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
                    >
                        About<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
                            Me.
                        </span>
                    </h2>
                    <div className="hidden md:block h-px bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10 dark:to-transparent flex-grow mb-4" />
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
                {/* Text content — spans 3 cols */}
                <div className="md:col-span-3 space-y-8">
                    <FadeIn delay={150} direction="right">
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            Hello! I&apos;m{' '}
                            <span className="font-semibold text-slate-900 dark:text-white">Srishan Mandawala</span>{' '}
                            — I enjoy creating things that live on the internet. My interest in software engineering
                            started back in{' '}
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                                2018
                            </span>{' '}
                            when I decided to try editing custom Tumblr themes — turns out hacking together HTML &amp; CSS
                            taught me a lot about architecture!
                        </p>
                    </FadeIn>

                    <FadeIn delay={250} direction="right">
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                            Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency,
                            a start-up, a huge corporation, and a student-led design studio. My main focus these days
                            is building{' '}
                            <span className="text-slate-700 dark:text-slate-200 font-medium">
                                accessible, inclusive products
                            </span>{' '}
                            and digital experiences for a variety of clients.
                        </p>
                    </FadeIn>

                    {/* Stats row */}
                    <FadeIn delay={350} direction="right">
                        <div className="grid grid-cols-3 gap-4 pt-2">
                            {[
                                { value: '6+', label: 'Years exp.' },
                                { value: '30+', label: 'Projects' },
                                { value: '4', label: 'Workplaces' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-4 rounded-2xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 hover:border-indigo-400/40 dark:hover:border-indigo-400/30 transition-colors duration-300 group"
                                >
                                    <div
                                        className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Location + CTA */}
                    <FadeIn delay={450} direction="right">
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <MapPin size={14} className="text-indigo-500 dark:text-indigo-400" />
                                Colombo, Sri Lanka
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

                {/* Image — spans 2 cols */}
                <FadeIn delay={200} direction="left" className="md:col-span-2">
                    <div className="relative group mx-auto max-w-sm md:max-w-none">
                        {/* Decorative glow */}
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Main card */}
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl shadow-slate-900/10 dark:shadow-black/40 group-hover:border-indigo-400/40 transition-colors duration-500 aspect-[4/5]">
                            <UserPlaceholder />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -right-4 z-20 px-4 mr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-900/10 dark:shadow-black/30">
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">Status</div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Open to work
                            </div>
                        </div>

                        {/* Corner accent square */}
                        <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-80 rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-indigo-500/30" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default AboutSection;
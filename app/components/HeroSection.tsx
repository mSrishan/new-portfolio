import FadeIn from './FadeIn';
import { ChevronRight, Download, Layout, Database, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
    return (
        <section id="home" className="min-h-screen grid lg:grid-cols-2 gap-12 items-center pt-24 pb-12">
            {/* Left: Text content */}
            <div className="flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
                <FadeIn delay={100}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-6 border border-indigo-200 dark:border-indigo-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Available for new opportunities
                    </div>
                </FadeIn>

                <FadeIn delay={200}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                        Hi, I&apos;m <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
                            Srishan Mandawala.
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={300}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 dark:text-slate-400 tracking-tight mb-6">
                        I craft digital experiences.
                    </h2>
                </FadeIn>

                <FadeIn delay={400}>
                    <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                        A Full-Stack Software Engineer specialized in building exceptional, responsive, and
                        robust applications. Turning complex problems into elegant, modern solutions.
                    </p>
                </FadeIn>

                <FadeIn delay={500} className="flex flex-wrap items-center gap-4">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white font-medium transition-all flex items-center gap-2 group shadow-lg shadow-slate-900/20 dark:shadow-indigo-500/25"
                    >
                        View My Work
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium transition-all flex items-center gap-2 border border-slate-200 dark:border-white/10">
                        Download CV
                        <Download size={18} />
                    </button>
                </FadeIn>
            </div>

            {/* Right: Code card */}
            <FadeIn delay={300} direction="left" className="order-1 lg:order-2 relative perspective-1000">
                <div className="relative w-full max-w-md mx-auto aspect-square group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full blur-[80px] opacity-30 dark:opacity-40 animate-pulse group-hover:opacity-50 transition-opacity duration-700"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto bg-white/80 dark:bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-2xl shadow-2xl p-6 z-10 transform transition-transform duration-700 hover:scale-105 hover:rotate-1">
                        <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-white/10 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/90 shadow-inner"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400/90 shadow-inner"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/90 shadow-inner"></div>
                            </div>
                            <div className="text-xs font-mono text-slate-400 dark:text-slate-500">developer.ts</div>
                        </div>

                        <div className="space-y-2 font-mono text-sm md:text-base text-slate-600 dark:text-slate-300">
                            <p>
                                <span className="text-pink-500 dark:text-pink-400">const</span>{' '}
                                <span className="text-blue-500 dark:text-blue-400">engineer</span> = {'{'}
                            </p>
                            <p className="pl-4">
                                name: <span className="text-emerald-500 dark:text-emerald-400">&apos;Srishan Mandawala&apos;</span>,
                            </p>
                            <p className="pl-4">
                                role: <span className="text-emerald-500 dark:text-emerald-400">&apos;Software Engineer&apos;</span>,
                            </p>
                            <p className="pl-4">skills: [</p>
                            <p className="pl-8 text-amber-500 dark:text-amber-300">&apos;React&apos;, &apos;Next.js&apos;,</p>
                            <p className="pl-8 text-amber-500 dark:text-amber-300">&apos;TypeScript&apos;, &apos;Node&apos;</p>
                            <p className="pl-4">],</p>
                            <p className="pl-4">
                                isAvailable:{' '}
                                <span className="text-purple-500 dark:text-purple-400">true</span>
                            </p>
                            <p>{'}'};
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute -top-6 -right-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-bounce"
                        style={{ animationDuration: '3s' }}
                    >
                        <Layout className="text-indigo-500" size={24} />
                    </div>
                    <div
                        className="absolute -bottom-8 -left-8 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-bounce"
                        style={{ animationDuration: '4s', animationDelay: '1s' }}
                    >
                        <Database className="text-cyan-500" size={24} />
                    </div>
                </div>
            </FadeIn>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce text-slate-400 dark:text-slate-500 cursor-pointer"
                onClick={() => scrollToSection('about')}
            >
                <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
                <ArrowDown size={16} />
            </div>
        </section>
    );
};

export default HeroSection;

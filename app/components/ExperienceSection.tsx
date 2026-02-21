import FadeIn from './FadeIn';
import { experiences } from '../data/portfolio';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Where I&apos;ve Worked
                    </h2>
                    <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow max-w-xs"></div>
                </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-white/10 before:to-transparent">
                {experiences.map((exp, index) => (
                    <FadeIn
                        key={index}
                        delay={index * 150}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Timeline dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#030712] bg-indigo-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(99,102,241,0.1)] dark:shadow-[0_0_0_4px_rgba(99,102,241,0.2)] z-10 transition-transform duration-300 group-hover:scale-125"></div>

                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-xl dark:shadow-none hover:border-indigo-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                <h3 className="font-bold text-xl text-slate-900 dark:text-white">{exp.role}</h3>
                                <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
                                    {exp.duration}
                                </span>
                            </div>
                            <h4 className="text-lg text-slate-700 dark:text-slate-300 mb-4">{exp.company}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;

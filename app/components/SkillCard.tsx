import FadeIn from './FadeIn';

interface SkillCardProps {
    title: string;
    icon: React.ReactNode;
    skills: string[];
    delay?: number;
}

const SkillCard = ({ title, icon, skills, delay }: SkillCardProps) => (
    <FadeIn delay={delay}>
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-white/10 transition-all h-full group hover:-translate-y-2 duration-300 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 dark:border-transparent">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm border border-slate-200 dark:border-white/5"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </FadeIn>
);

export default SkillCard;

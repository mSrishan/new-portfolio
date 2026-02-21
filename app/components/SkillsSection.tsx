import FadeIn from './FadeIn';
import SkillCard from './SkillCard';
import { Layout, Code2, Database } from 'lucide-react';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Technical Arsenal
                    </h2>
                    <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow max-w-xs"></div>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
                <SkillCard
                    title="Frontend Development"
                    icon={<Layout className="text-indigo-500 dark:text-indigo-400" size={24} />}
                    skills={['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux']}
                    delay={100}
                />
                <SkillCard
                    title="Backend & APIs"
                    icon={<Code2 className="text-cyan-500 dark:text-cyan-400" size={24} />}
                    skills={['Node.js', 'Express', 'Python', 'GraphQL', 'REST APIs', 'WebSockets']}
                    delay={200}
                />
                <SkillCard
                    title="Database & DevOps"
                    icon={<Database className="text-emerald-500 dark:text-emerald-400" size={24} />}
                    skills={['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'CI/CD Pipelines']}
                    delay={300}
                />
            </div>
        </section>
    );
};

export default SkillsSection;

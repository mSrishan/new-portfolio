import { Github, ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const isEven = index % 2 === 0;

    return (
        <FadeIn
            className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center group`}
        >
            {/* Project Image / Gradient */}
            <div className="w-full md:w-3/5 relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-2xl">
                <div className="absolute inset-0 bg-slate-900 mix-blend-multiply opacity-10 dark:opacity-50 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <div
                    className={`w-full h-full bg-gradient-to-br ${project.gradient} transform group-hover:scale-105 transition-transform duration-700 flex items-center justify-center`}
                >
                    <span className="text-white/40 dark:text-white/20 font-bold text-4xl uppercase tracking-widest">
                        {project.title.substring(0, 2)}
                    </span>
                </div>
            </div>

            {/* Project Info */}
            <div
                className={`w-full md:w-2/5 flex flex-col ${isEven ? 'md:items-end text-left md:text-right' : 'md:items-start text-left'
                    }`}
            >
                <p className="text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-2">
                    Featured Project
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                    {project.title}
                </h3>

                <div className="bg-white dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-slate-200 dark:border-white/5 relative z-20 mb-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    <p>{project.description}</p>
                </div>

                <ul
                    className={`flex flex-wrap gap-3 font-mono text-xs text-slate-500 dark:text-slate-400 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                >
                    {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <div
                    className={`flex items-center gap-4 text-slate-600 dark:text-slate-300 ${isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                >
                    <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </FadeIn>
    );
};

export default ProjectCard;

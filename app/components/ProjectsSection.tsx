import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow max-w-xs"></div>
                </div>
            </FadeIn>

            <div className="space-y-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;

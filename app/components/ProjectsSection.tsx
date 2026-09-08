'use client';

import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 dark:text-indigo-400">
            03 — Projects
          </span>
        </div>
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tight">
            Featured<br />
            <span className="gradient-text">Projects.</span>
          </h2>
          <div className="hidden md:block h-px bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent flex-grow mb-4" />
        </div>
      </FadeIn>

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

'use client';

import { Github, ExternalLink, Calendar } from 'lucide-react';
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
      className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center group`}
    >
      {/* Project gradient card */}
      <div className="w-full md:w-3/5 relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-2xl">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10" />
        <div
          className={`w-full h-full bg-gradient-to-br ${project.gradient} transform group-hover:scale-105 transition-transform duration-700 flex items-center justify-center`}
        >
          <span className="text-white/20 font-black text-6xl md:text-8xl uppercase tracking-widest select-none">
            {project.title.substring(0, 2)}
          </span>
        </div>
      </div>

      {/* Project info */}
      <div
        className={`w-full md:w-2/5 flex flex-col ${isEven ? 'md:items-end text-left md:text-right' : 'md:items-start text-left'}`}
      >
        <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider uppercase">
          Featured Project
        </p>
        <h3 className="text-2xl font-bold text-white mb-3 hover:text-indigo-400 transition-colors cursor-pointer">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 font-mono">
          <Calendar size={14} className="text-indigo-400" />
          {project.duration}
        </div>

        <div className="glass-strong p-6 rounded-xl shadow-xl mb-6 text-slate-300 text-sm leading-relaxed">
          <p>{project.description}</p>
        </div>

        <ul
          className={`flex flex-wrap gap-3 font-mono text-xs text-slate-400 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}
        >
          {project.tech.map((tech) => (
            <li key={tech} className="px-2 py-1 rounded-md bg-white/5 border border-white/5">
              {tech}
            </li>
          ))}
        </ul>

        <div
          className={`flex items-center gap-4 text-slate-300 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default ProjectCard;

'use client';

import FadeIn from './FadeIn';
import SkillCard from './SkillCard';
import { skillCategories } from '../data/portfolio';
import { Layout, Server, Brain, Database, Wrench, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout size={24} />,
  server: <Server size={24} />,
  brain: <Brain size={24} />,
  database: <Database size={24} />,
  wrench: <Wrench size={24} />,
  users: <Users size={24} />,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 dark:text-indigo-400">
            02 — Skills
          </span>
        </div>
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tight">
            Technical<br />
            <span className="gradient-text">Arsenal.</span>
          </h2>
          <div className="hidden md:block h-px bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent flex-grow mb-4" />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            title={category.title}
            icon={iconMap[category.icon]}
            skills={category.skills}
            color={category.color}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

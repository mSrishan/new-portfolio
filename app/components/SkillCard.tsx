'use client';

import FadeIn from './FadeIn';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: number;
  color: string;
}

const colorStyles: Record<string, { iconBg: string; iconText: string; border: string; pillBg: string; pillText: string; pillBorder: string; glow: string }> = {
  indigo: {
    iconBg: 'bg-indigo-100 dark:bg-indigo-500/10',
    iconText: 'text-indigo-400',
    border: 'hover:border-indigo-500/30',
    pillBg: 'bg-indigo-50 dark:bg-indigo-500/5',
    pillText: 'text-indigo-700 dark:text-indigo-300',
    pillBorder: 'border-indigo-200/60 dark:border-indigo-500/10',
    glow: 'group-hover:shadow-indigo-500/5',
  },
  cyan: {
    iconBg: 'bg-cyan-100 dark:bg-cyan-500/10',
    iconText: 'text-cyan-400',
    border: 'hover:border-cyan-500/30',
    pillBg: 'bg-cyan-50 dark:bg-cyan-500/5',
    pillText: 'text-cyan-700 dark:text-cyan-300',
    pillBorder: 'border-cyan-200/60 dark:border-cyan-500/10',
    glow: 'group-hover:shadow-cyan-500/5',
  },
  purple: {
    iconBg: 'bg-purple-100 dark:bg-purple-500/10',
    iconText: 'text-purple-400',
    border: 'hover:border-purple-500/30',
    pillBg: 'bg-purple-50 dark:bg-purple-500/5',
    pillText: 'text-purple-700 dark:text-purple-300',
    pillBorder: 'border-purple-200/60 dark:border-purple-500/10',
    glow: 'group-hover:shadow-purple-500/5',
  },
  emerald: {
    iconBg: 'bg-emerald-100 dark:bg-emerald-500/10',
    iconText: 'text-emerald-400',
    border: 'hover:border-emerald-500/30',
    pillBg: 'bg-emerald-50 dark:bg-emerald-500/5',
    pillText: 'text-emerald-700 dark:text-emerald-300',
    pillBorder: 'border-emerald-200/60 dark:border-emerald-500/10',
    glow: 'group-hover:shadow-emerald-500/5',
  },
  amber: {
    iconBg: 'bg-amber-100 dark:bg-amber-500/10',
    iconText: 'text-amber-400',
    border: 'hover:border-amber-500/30',
    pillBg: 'bg-amber-50 dark:bg-amber-500/5',
    pillText: 'text-amber-700 dark:text-amber-300',
    pillBorder: 'border-amber-200/60 dark:border-amber-500/10',
    glow: 'group-hover:shadow-amber-500/5',
  },
  rose: {
    iconBg: 'bg-rose-100 dark:bg-rose-500/10',
    iconText: 'text-rose-400',
    border: 'hover:border-rose-500/30',
    pillBg: 'bg-rose-50 dark:bg-rose-500/5',
    pillText: 'text-rose-700 dark:text-rose-300',
    pillBorder: 'border-rose-200/60 dark:border-rose-500/10',
    glow: 'group-hover:shadow-rose-500/5',
  },
};

const SkillCard = ({ title, icon, skills, delay, color }: SkillCardProps) => {
  const styles = colorStyles[color] || colorStyles.indigo;

  return (
    <FadeIn delay={delay}>
      <div className={`group relative p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] shadow-sm dark:shadow-none ${styles.border} transition-all duration-500 h-full hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-transparent ${styles.glow}`}>
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${styles.iconText}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1.5 rounded-lg ${styles.pillBg} ${styles.pillText} text-sm border ${styles.pillBorder} hover:scale-105 transition-transform duration-200 cursor-default`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default SkillCard;

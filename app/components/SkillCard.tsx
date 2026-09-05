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
    iconBg: 'bg-indigo-500/10',
    iconText: 'text-indigo-400',
    border: 'hover:border-indigo-500/30',
    pillBg: 'bg-indigo-500/5',
    pillText: 'text-indigo-300',
    pillBorder: 'border-indigo-500/10',
    glow: 'group-hover:shadow-indigo-500/5',
  },
  cyan: {
    iconBg: 'bg-cyan-500/10',
    iconText: 'text-cyan-400',
    border: 'hover:border-cyan-500/30',
    pillBg: 'bg-cyan-500/5',
    pillText: 'text-cyan-300',
    pillBorder: 'border-cyan-500/10',
    glow: 'group-hover:shadow-cyan-500/5',
  },
  purple: {
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-400',
    border: 'hover:border-purple-500/30',
    pillBg: 'bg-purple-500/5',
    pillText: 'text-purple-300',
    pillBorder: 'border-purple-500/10',
    glow: 'group-hover:shadow-purple-500/5',
  },
  emerald: {
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    border: 'hover:border-emerald-500/30',
    pillBg: 'bg-emerald-500/5',
    pillText: 'text-emerald-300',
    pillBorder: 'border-emerald-500/10',
    glow: 'group-hover:shadow-emerald-500/5',
  },
  amber: {
    iconBg: 'bg-amber-500/10',
    iconText: 'text-amber-400',
    border: 'hover:border-amber-500/30',
    pillBg: 'bg-amber-500/5',
    pillText: 'text-amber-300',
    pillBorder: 'border-amber-500/10',
    glow: 'group-hover:shadow-amber-500/5',
  },
  rose: {
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-400',
    border: 'hover:border-rose-500/30',
    pillBg: 'bg-rose-500/5',
    pillText: 'text-rose-300',
    pillBorder: 'border-rose-500/10',
    glow: 'group-hover:shadow-rose-500/5',
  },
};

const SkillCard = ({ title, icon, skills, delay, color }: SkillCardProps) => {
  const styles = colorStyles[color] || colorStyles.indigo;

  return (
    <FadeIn delay={delay}>
      <div className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] ${styles.border} transition-all duration-500 h-full hover:-translate-y-2 shadow-xl shadow-transparent ${styles.glow}`}>
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${styles.iconText}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
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

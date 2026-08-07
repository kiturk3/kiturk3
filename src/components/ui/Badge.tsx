import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'slate' | 'green' | 'amber' | 'purple';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className,
  icon,
}) => {
  const variants = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 light:bg-blue-50 light:text-blue-700 light:border-blue-200",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400 light:bg-cyan-50 light:text-cyan-700 light:border-cyan-200",
    slate: "bg-slate-800 text-slate-300 border-slate-700 dark:bg-slate-800 dark:text-slate-300 light:bg-slate-100 light:text-slate-700 light:border-slate-300",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 light:bg-emerald-50 light:text-emerald-700 light:border-emerald-200",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400 light:bg-amber-50 light:text-amber-700 light:border-amber-200",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400 light:bg-purple-50 light:text-purple-700 light:border-purple-200",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-3 py-1 text-xs font-medium gap-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border transition-all duration-150",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

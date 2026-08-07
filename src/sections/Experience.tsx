import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(experienceData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper
      id="experience"
      badge="Career Growth"
      title="Professional Experience Timeline"
      subtitle="12+ years of engineering leadership delivering mission-critical POS kiosks, logistics platforms, and mobile apps."
    >
      <div className="relative max-w-4xl mx-auto space-y-8">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

        {experienceData.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row gap-6 items-start ${
                isEven ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Indicator Node */}
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 shadow-md shadow-blue-500/20">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Content Card */}
              <div className="w-full sm:w-[calc(50%-2rem)]">
                <Card className="p-6 space-y-4 border border-slate-800 hover:border-blue-500/40 transition-all">
                  {/* Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-blue-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <Badge variant={item.featured ? 'cyan' : 'slate'} size="sm">
                        {item.type}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-2">
                      <span>{item.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-normal">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Key Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/15 space-y-1.5">
                      <div className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5" />
                        Impact Highlights
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-blue-400 font-bold">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expandable Responsibilities */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300"
                    >
                      <div className="font-semibold text-slate-200">Responsibilities:</div>
                      <ul className="space-y-1.5">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.slice(0, isExpanded ? undefined : 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isExpanded && item.technologies.length > 6 && (
                      <span className="text-[11px] text-slate-500 font-mono self-center">
                        +{item.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Expand Toggle Trigger */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-center justify-center gap-1 pt-2 text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Details' : 'Expand Responsibilities'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

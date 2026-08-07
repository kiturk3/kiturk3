import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { skillCategoriesData } from '../data/skills';
import { Search, Sparkles, Code2, Cpu, Wrench, Bot, Layers, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...skillCategoriesData.map((c) => c.category)];

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code2 className="w-4 h-4 text-blue-400" />,
    'Android Core': <Cpu className="w-4 h-4 text-cyan-400" />,
    'Architecture & Storage': <Layers className="w-4 h-4 text-purple-400" />,
    'Hardware & Peripherals': <Terminal className="w-4 h-4 text-amber-400" />,
    'AI & Cross-Platform': <Bot className="w-4 h-4 text-emerald-400" />,
    'Tools & DevOps': <Wrench className="w-4 h-4 text-rose-400" />,
  };

  const filteredCategories = skillCategoriesData
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => {
      const categoryMatch = activeCategory === 'All' || cat.category === activeCategory;
      return categoryMatch && cat.skills.length > 0;
    });

  return (
    <SectionWrapper
      id="skills"
      badge="Technical Expertise"
      title="Skills & Technology Stack"
      subtitle="A comprehensive overview of languages, frameworks, hardware protocols, and AI tooling I utilize in production."
    >
      {/* Search & Filter Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-800/40 p-1.5 rounded-2xl border border-slate-700/50 w-full sm:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white font-semibold shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g., Compose, RAG)..."
            className="w-full pl-9 pr-4 py-2 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="h-full space-y-4 p-6">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                  {categoryIcons[cat.category] || <Sparkles className="w-4 h-4 text-blue-400" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {cat.category}
                  </h3>
                  <p className="text-[11px] text-slate-400">{cat.description}</p>
                </div>
              </div>

              {/* Skills Badge List */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => {
                  let badgeVariant: 'blue' | 'cyan' | 'purple' | 'green' | 'amber' | 'slate' = 'slate';
                  if (skill.level === 'Expert') badgeVariant = 'blue';
                  else if (skill.level === 'Advanced') badgeVariant = 'cyan';

                  return (
                    <Badge
                      key={skill.name}
                      variant={badgeVariant}
                      size="md"
                      icon={skill.featured ? <Sparkles className="w-3 h-3 text-cyan-400" /> : undefined}
                    >
                      {skill.name}
                      <span className="opacity-60 text-[10px] ml-1">({skill.level})</span>
                    </Badge>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import { ProjectModal } from '../components/ProjectModal';
import { Github, ExternalLink, ArrowRight, Cpu, Bot, Smartphone, Layers, Terminal, Sparkles } from 'lucide-react';

interface FeaturedProjectsProps {
  selectedProjectId?: string | null;
  onClearSelectedProject?: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  selectedProjectId,
  onClearSelectedProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  // If passed from Command Palette
  React.useEffect(() => {
    if (selectedProjectId) {
      const proj = projectsData.find((p) => p.id === selectedProjectId);
      if (proj) setModalProject(proj);
    }
  }, [selectedProjectId]);

  const categories = ['All', 'Android Native', 'AI & RAG', 'Hardware & POS', 'Cross-Platform'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Hardware & POS': return <Terminal className="w-8 h-8 text-amber-400" />;
      case 'AI & RAG': return <Bot className="w-8 h-8 text-purple-400" />;
      case 'Android Native': return <Smartphone className="w-8 h-8 text-cyan-400" />;
      default: return <Layers className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <SectionWrapper
      id="projects"
      badge="Engineering Portfolio"
      title="Featured Production Projects"
      subtitle="Detailed case studies of self-service ordering kiosks, AI agent systems, native mobile platforms, and hardware peripherals."
    >
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between p-6 space-y-6 group border border-slate-800 hover:border-blue-500/50">
              {/* Top Preview Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.category)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={project.category === 'AI & RAG' ? 'purple' : project.category === 'Hardware & POS' ? 'amber' : 'blue'}>
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Stats Badges */}
                {project.stats && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-center">
                        <div className="text-xs font-bold text-slate-200">{stat.value}</div>
                        <div className="text-[10px] text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Tech & CTAs */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-300 rounded border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-slate-800/50 text-slate-500 rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setModalProject(project)}
                    icon={<Sparkles className="w-3.5 h-3.5 text-blue-400" />}
                  >
                    Case Study
                  </Button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
                        title="Live Site / Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={modalProject}
        isOpen={!!modalProject}
        onClose={() => {
          setModalProject(null);
          if (onClearSelectedProject) onClearSelectedProject();
        }}
      />
    </SectionWrapper>
  );
};

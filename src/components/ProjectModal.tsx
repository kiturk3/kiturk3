import React from 'react';
import { Modal } from './ui/Modal';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ProjectItem } from '../types';
import { Github, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Layers, BarChart3 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="3xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="blue">{project.category}</Badge>
            {project.caseStudy.metrics && (
              <Badge variant="cyan" icon={<BarChart3 className="w-3 h-3" />}>
                Impact Verified
              </Badge>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-cyan-400">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="slate" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Case Study Overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            Project Overview
          </h4>
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
            {project.caseStudy.overview}
          </p>
        </div>

        {/* Architecture Breakdown */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            Architecture & Design Patterns
          </h4>
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
            {project.caseStudy.architecture}
          </p>
        </div>

        {/* Challenges & Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Challenges */}
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Technical Challenges
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
              {project.caseStudy.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Engineering Solutions
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
              {project.caseStudy.solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Key Deliverables & Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.caseStudy.keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" icon={<Github className="w-4 h-4" />}>
                View Source Code
              </Button>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                Live Demo / App Site
              </Button>
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

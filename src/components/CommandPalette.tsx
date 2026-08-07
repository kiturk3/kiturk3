import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Moon, Sun, Mail, Github, Linkedin, Smartphone, ArrowRight, ExternalLink, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import toast from 'react-hot-toast';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Projects' | 'Socials';
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    // Navigation
    { id: 'nav-home', title: 'Go to Home', category: 'Navigation', icon: <Smartphone className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'home'; onClose(); } },
    { id: 'nav-about', title: 'Go to About Me', category: 'Navigation', icon: <ArrowRight className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'about'; onClose(); } },
    { id: 'nav-skills', title: 'Go to Skills & Tech Stack', category: 'Navigation', icon: <ArrowRight className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'skills'; onClose(); } },
    { id: 'nav-experience', title: 'Go to Experience Timeline', category: 'Navigation', icon: <ArrowRight className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'experience'; onClose(); } },
    { id: 'nav-projects', title: 'Go to Featured Projects', category: 'Navigation', icon: <ArrowRight className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'projects'; onClose(); } },
    { id: 'nav-github', title: 'Go to GitHub Stats', category: 'Navigation', icon: <Github className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'github'; onClose(); } },
    { id: 'nav-blog', title: 'Go to Tech Articles', category: 'Navigation', icon: <FileText className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'blog'; onClose(); } },
    { id: 'nav-contact', title: 'Go to Contact Form', category: 'Navigation', icon: <Mail className="w-4 h-4 text-blue-400" />, action: () => { window.location.hash = 'contact'; onClose(); } },

    // Actions
    { id: 'act-resume', title: 'Download Resume (PDF)', category: 'Actions', icon: <FileText className="w-4 h-4 text-emerald-400" />, action: () => { window.open('./assets/Krutik_Khokhara_Resume.pdf', '_blank'); onClose(); } },
    { id: 'act-theme', title: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode', category: 'Actions', icon: isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />, action: () => { toggleTheme(); onClose(); } },
    { id: 'act-copy-email', title: 'Copy Email Address (kbkhokhara@gmail.com)', category: 'Actions', icon: <Mail className="w-4 h-4 text-cyan-400" />, action: () => { navigator.clipboard.writeText(profileData.email); toast.success('Email copied to clipboard!'); onClose(); } },

    // Social Links
    { id: 'soc-github', title: 'Visit GitHub Profile', category: 'Socials', icon: <Github className="w-4 h-4 text-slate-300" />, action: () => { window.open(profileData.github, '_blank'); onClose(); } },
    { id: 'soc-linkedin', title: 'Visit LinkedIn Profile', category: 'Socials', icon: <Linkedin className="w-4 h-4 text-blue-400" />, action: () => { window.open(profileData.linkedin, '_blank'); onClose(); } },

    // Projects
    ...projectsData.map(project => ({
      id: `proj-${project.id}`,
      title: `View Project: ${project.title}`,
      category: 'Projects' as const,
      icon: <ExternalLink className="w-4 h-4 text-purple-400" />,
      keywords: `${project.title} ${project.technologies.join(' ')} ${project.category}`,
      action: () => {
        if (onSelectProject) onSelectProject(project.id);
        onClose();
      }
    }))
  ];

  const filteredItems = items.filter(item => {
    const searchString = `${item.title} ${item.category} ${item.keywords || ''}`.toLowerCase();
    return searchString.includes(query.toLowerCase());
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
              <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search sections, skills, projects..."
                className="w-full py-4 bg-transparent text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 rounded text-slate-500 hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List Results */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500">
                  No matching commands or projects found.
                </div>
              ) : (
                filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-blue-600/90 text-white font-medium'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      index === selectedIndex
                        ? 'bg-blue-700 text-blue-100'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.category}
                    </span>
                  </button>
                ))
              )}
            </div>

            {/* Command Palette Footer */}
            <div className="px-4 py-2 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <span><kbd className="font-mono bg-slate-800 px-1 py-0.5 rounded">↑↓</kbd> Navigate</span>
                <span><kbd className="font-mono bg-slate-800 px-1 py-0.5 rounded">↵</kbd> Select</span>
              </div>
              <span><kbd className="font-mono bg-slate-800 px-1 py-0.5 rounded">ESC</kbd> Close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 pt-16 pb-12 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800 dark:border-slate-800 light:border-slate-300">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-slate-950 font-extrabold text-xl shadow-md">
                K
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {profileData.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium">
                  {profileData.title}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Architecting mission-critical native Android applications, low-level hardware interop (POS/Printers/Scanners), and Agentic AI/RAG architectures.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {profileData.availability}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-800">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Story</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills & Stack</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Career Timeline</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#github" className="hover:text-blue-400 transition-colors">GitHub Activity</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-800">
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Github className="w-4 h-4 text-blue-400" />
                <span>GitHub Profile</span>
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Network</span>
              </a>
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{profileData.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Krutik Khokhara. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>GitHub Pages Deployed</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

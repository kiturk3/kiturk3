import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Smartphone, FileText } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'experience', 'projects', 'github', 'achievements', 'blog', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 text-base tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                Krutik Khokhara
              </span>
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
                Senior Android & AI Lead
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-100/80 p-1.5 rounded-2xl border border-slate-700/40 dark:border-slate-700/40 light:border-slate-300/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white dark:text-white light:text-slate-900 bg-blue-600/90 dark:bg-blue-600/90 light:bg-blue-100 font-semibold shadow-sm'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-slate-100 hover:bg-slate-700/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2">
            {/* Command Palette Shortcut Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-400 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 text-xs font-medium hover:border-blue-500/50 hover:text-slate-200 transition-colors"
              title="Open Command Palette"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-slate-900 dark:bg-slate-900 light:bg-white rounded border border-slate-700 dark:border-slate-700 light:border-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* Resume Quick Button */}
            <a
              href="./assets/Krutik_Khokhara_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-4 pt-3 pb-6"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex items-center justify-between gap-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Palette (⌘K)</span>
                </button>
                <a
                  href="./assets/Krutik_Khokhara_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

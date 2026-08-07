import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Smartphone, Sparkles, ChevronRight, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { profileData } from '../data/profile';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % profileData.rotatingSkills.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3B82F6', '#22D3EE', '#A97BFF'],
    });
    window.open(profileData.resumeUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden radial-glow mesh-grid">
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profileData.availability}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">{profileData.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                {profileData.title}
              </p>
            </div>

            {/* Rotating Skills Badge Stream */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Specialized in</span>
              <span className="font-mono font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20 transition-all duration-300">
                {profileData.rotatingSkills[skillIndex]}
              </span>
            </div>

            {/* Tagline Bio */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profileData.tagline} 12+ years of engineering leadership building POS terminal hardware drivers, offline-first architectures, and production Android apps for US clients.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleDownloadResume}
                icon={<Download className="w-5 h-5" />}
              >
                Download Resume PDF
              </Button>

              <a href="#projects">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ChevronRight className="w-5 h-5" />}
                >
                  View Featured Projects
                </Button>
              </a>
            </div>

            {/* Social Links & Email Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-all hover:scale-105"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-800 text-xs font-mono text-slate-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>12+ Yrs EXP</span>
                <span className="text-slate-600">•</span>
                <span>500+ US Venues</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Animated Glowing Border Card Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>

              <div className="relative glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-700/50">
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    KrutikKhokhara.kt
                  </span>
                </div>

                {/* Code Snippet Visual */}
                <div className="font-mono text-xs space-y-2 text-slate-300 leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                  <div><span className="text-purple-400">class</span> <span className="text-cyan-300 font-bold">SeniorAndroidEngineer</span> : <span className="text-blue-400">AIArchitect</span> &#123;</div>
                  <div className="pl-4"><span className="text-purple-400">val</span> experience = <span className="text-amber-300">12.years</span></div>
                  <div className="pl-4"><span className="text-purple-400">val</span> coreStack = listOf(<span className="text-emerald-300">"Kotlin"</span>, <span className="text-emerald-300">"Jetpack Compose"</span>, <span className="text-emerald-300">"RAG"</span>)</div>
                  <div className="pl-4"><span className="text-purple-400">val</span> hardwareInterop = listOf(<span className="text-emerald-300">"Epson ESC/POS"</span>, <span className="text-emerald-300">"USB/Serial"</span>, <span className="text-emerald-300">"BLE"</span>)</div>
                  <div className="pl-4 pt-1"><span className="text-purple-400">fun</span> <span className="text-cyan-300">shipProductionApp</span>(): <span className="text-blue-400">Result&lt;App&gt;</span> =</div>
                  <div className="pl-8 text-slate-400">// 99.95% crash-free uptime across 500+ US kiosk venues</div>
                  <div className="pl-8"><span className="text-blue-400">Result</span>.success(App.KIOSK_V3)</div>
                  <div>&#125;</div>
                </div>

                {/* Key Metrics Pills */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-extrabold text-blue-400">500+</div>
                    <div className="text-[11px] text-slate-400">US Kiosk Locations</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-extrabold text-cyan-400">99.95%</div>
                    <div className="text-[11px] text-slate-400">Crash-Free Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

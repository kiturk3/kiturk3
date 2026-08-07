import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { profileData } from '../data/profile';
import { Layers, Printer, Bot, Users, ShieldCheck, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Native Android & Compose",
      description: "Deep expertise in Kotlin, Jetpack Compose, Navigation 3, Coroutines, Flow, Room DB, Hilt, and WorkManager for high-performance mobile apps.",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/5",
    },
    {
      title: "Hardware & POS Interop",
      description: "Low-level byte-stream drivers for Epson receipt printers, barcode/QR scanners, USB/Serial devices, Bluetooth, XMPP, and OpenGL ES.",
      icon: <Printer className="w-6 h-6 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      title: "Agentic AI & RAG",
      description: "Pioneering AI-Augmented engineering with modular RAG architectures, Agentic AI document processing pipelines, and custom prompt workflows.",
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/5",
    },
    {
      title: "Cross-Platform & Desktop",
      description: "Bridging native desktop & mobile capabilities using Svelte, Tauri, TypeScript, Python, and offline-first SQLite databases.",
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-600/5",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      badge="About My Engineering Story"
      title="12+ Years of Senior Engineering Leadership"
      subtitle="Combining deep native Android mastery with low-level hardware interop and modern AI architecture."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Narrative Paragraphs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base"
        >
          {profileData.bio.map((paragraph, index) => (
            <p key={index} className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/80">
              {paragraph}
            </p>
          ))}

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-500/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Clean Architecture & SOLID</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/20">
              <Users className="w-4 h-4" />
              <span>Team Mentorship Lead</span>
            </div>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {pillars.map((pillar, index) => (
            <Card key={index} className="space-y-3 p-5">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

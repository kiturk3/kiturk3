import React, { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { GitHubStats } from './sections/GitHubStats';
import { Achievements } from './sections/Achievements';
import { BlogSection } from './sections/BlogSection';
import { Testimonials } from './sections/Testimonials';
import { ContactSection } from './sections/ContactSection';
import { CommandPalette } from './components/CommandPalette';
import { useCommandPalette } from './hooks/useCommandPalette';
import { profileData } from './data/profile';

export function App() {
  const { isOpen: isCommandPaletteOpen, open: openCommandPalette, close: closeCommandPalette } = useCommandPalette();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Structured JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profileData.name,
    "jobTitle": profileData.title,
    "url": "https://kiturk3.github.io/",
    "sameAs": [
      profileData.github,
      profileData.linkedin
    ],
    "knowsAbout": [
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "Agentic AI",
      "RAG Architecture",
      "Hardware Interop",
      "Epson Receipt Printers"
    ],
    "description": profileData.tagline
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 selection:bg-blue-500 selection:text-white transition-colors duration-300">
        {/* Helmet SEO Head */}
        <Helmet>
          <title>{profileData.name} | Senior Android & AI-Augmented Engineer</title>
          <meta name="description" content={profileData.tagline} />
          <script type="application/ld+json">
            {JSON.stringify(jsonLdSchema)}
          </script>
        </Helmet>

        {/* Toaster Feedback */}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

        {/* Navigation Bar */}
        <Navbar onOpenCommandPalette={openCommandPalette} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <FeaturedProjects
            selectedProjectId={selectedProjectId}
            onClearSelectedProject={() => setSelectedProjectId(null)}
          />
          <GitHubStats />
          <Achievements />
          <BlogSection />
          <Testimonials />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Command Palette Modal */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={closeCommandPalette}
          onSelectProject={(projectId) => setSelectedProjectId(projectId)}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;

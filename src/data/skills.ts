import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Languages",
    description: "Primary programming languages used across production systems",
    skills: [
      { name: "Kotlin", level: "Expert", featured: true },
      { name: "Java", level: "Expert", featured: true },
      { name: "TypeScript", level: "Advanced", featured: true },
      { name: "Python", level: "Advanced", featured: true },
      { name: "C / C++", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Advanced" },
      { name: "SQL", level: "Expert", featured: true }
    ]
  },
  {
    category: "Android Core",
    description: "Native Android development and Jetpack ecosystem",
    skills: [
      { name: "Jetpack Compose", level: "Expert", featured: true },
      { name: "XML Layouts", level: "Expert" },
      { name: "Navigation 3", level: "Advanced", featured: true },
      { name: "Coroutines & Flow", level: "Expert", featured: true },
      { name: "WorkManager", level: "Expert" },
      { name: "CameraX & ML Kit", level: "Advanced", featured: true },
      { name: "Paging 3", level: "Expert" },
      { name: "Android SDK", level: "Expert" }
    ]
  },
  {
    category: "Architecture & Storage",
    description: "Design patterns, state management, and persistence",
    skills: [
      { name: "Clean Architecture", level: "Expert", featured: true },
      { name: "MVVM / MVI", level: "Expert", featured: true },
      { name: "SOLID Principles", level: "Expert" },
      { name: "Room DB", level: "Expert", featured: true },
      { name: "Hilt / Dagger2", level: "Expert", featured: true },
      { name: "Retrofit & OkHttp", level: "Expert" },
      { name: "Offline-First Sync", level: "Expert", featured: true }
    ]
  },
  {
    category: "Hardware & Peripherals",
    description: "Low-level device interop, POS hardware & sensors",
    skills: [
      { name: "Epson Receipt Printers", level: "Expert", featured: true },
      { name: "Barcode & QR Scanners", level: "Expert", featured: true },
      { name: "USB & Serial / RS232", level: "Expert" },
      { name: "Bluetooth & BLE", level: "Advanced", featured: true },
      { name: "MapBox Vector Maps", level: "Advanced" },
      { name: "XMPP Protocol", level: "Advanced" },
      { name: "OpenGL ES 2D", level: "Proficient" }
    ]
  },
  {
    category: "AI & Cross-Platform",
    description: "Agentic AI, RAG pipelines, and desktop/web bridges",
    skills: [
      { name: "Agentic AI", level: "Advanced", featured: true },
      { name: "RAG Architecture", level: "Advanced", featured: true },
      { name: "Prompt Engineering", level: "Expert", featured: true },
      { name: "Svelte & SvelteKit", level: "Advanced" },
      { name: "Tauri Desktop", level: "Advanced", featured: true },
      { name: "OpenAI & Gemini APIs", level: "Advanced" }
    ]
  },
  {
    category: "Tools & DevOps",
    description: "Development environment, build tools, and CI/CD pipelines",
    skills: [
      { name: "Android Studio", level: "Expert" },
      { name: "Git & GitHub Actions", level: "Expert", featured: true },
      { name: "Gradle Build Scripts", level: "Expert" },
      { name: "Firebase Suite", level: "Advanced" },
      { name: "Jira & Agile", level: "Expert" },
      { name: "Figma", level: "Proficient" }
    ]
  }
];

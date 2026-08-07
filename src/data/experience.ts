import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "US Hospitality & Tech Clients",
    role: "Senior Android & Lead POS Systems Engineer",
    period: "2020 - Present",
    location: "Remote / Ahmedabad",
    type: "Contract / Full-time Lead",
    summary: "Architected and scaled next-generation self-service ordering kiosks (KIOSK V3) and high-volume Point of Sale (POS V2) systems running live across hundreds of US restaurant locations.",
    responsibilities: [
      "Engineered cross-platform Kiosk V3 frontend using Jetpack Compose, Svelte, and Tauri for low-spec Android hardware.",
      "Developed native Kotlin drivers for Epson receipt printers, barcode scanners, cash drawers, and USB/Serial peripherals.",
      "Built real-time kitchen sync and offline transaction persistence with Room DB and state-machine socket pipelines.",
      "Mentored junior engineers and instituted CI/CD automated release pipelines using GitHub Actions and Gradle."
    ],
    achievements: [
      "Scaled POS & Kiosk app deployment to 500+ US dining venues with 99.95% uptime.",
      "Reduced receipt print transaction latency by 65% using asynchronous USB/Serial stream buffers.",
      "Integrated Agentic RAG assistant to auto-diagnose hardware disconnects in kiosk fleets."
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Java", "Svelte", "Tauri", "Epson ESC/POS", "USB/Serial", "Room DB", "Hilt", "Coroutines", "GitHub Actions"],
    featured: true
  },
  {
    id: "exp-2",
    company: "Logistics & Mobility Enterprise Solutions",
    role: "Senior Mobile Engineer",
    period: "2017 - 2020",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary: "Spearheaded mobile development for international logistics, courier parcel tracking (DispatchMe in Portugal), and public transit route tracking (RMTS Smart City).",
    responsibilities: [
      "Created DispatchMe parcel management application leveraging CameraX, custom QR scanning algorithms, and REST APIs.",
      "Built real-time GPS telemetry and MapBox vector map rendering for Rajkot Municipal Transport System (RMTS).",
      "Implemented offline-first SQLite cache with automatic background sync using WorkManager."
    ],
    achievements: [
      "Processed over 100,000 daily parcel scans across Portuguese courier routes.",
      "Optimized battery usage during continuous background GPS tracking by 40%.",
      "Delivered RMTS next-bus arrival tracking serving over 50,000 daily active transit riders."
    ],
    technologies: ["Kotlin", "Android SDK", "CameraX", "MapBox API", "WorkManager", "Retrofit", "SQLite", "Firebase Cloud Messaging"],
    featured: true
  },
  {
    id: "exp-3",
    company: "HealthTech & Interactive Apps",
    role: "Android Solutions Architect",
    period: "2014 - 2017",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary: "Designed and developed veterinary healthcare application (PetsApp) and real-time graphics chat app (BeamItUp).",
    responsibilities: [
      "Architected PetsApp veterinary appointment, medical history, and vaccine schedule tracking platform with offline dual-mode sync.",
      "Engineered BeamItUp XMPP messaging engine and custom 2D OpenGL ES particle graphics engine for animated chat stickers.",
      "Implemented secure AES-256 local database encryption for health compliance."
    ],
    achievements: [
      "Achieved zero data loss during offline rural farm clinic appointments.",
      "Maintained smooth 60fps particle animation rendering on entry-level Android devices using custom OpenGL shaders."
    ],
    technologies: ["Java", "Android SDK", "OpenGL ES 2D", "XMPP Protocol", "Room DB", "AES Encryption", "Retrofit"],
    featured: false
  },
  {
    id: "exp-4",
    company: "EdTech & Mobile Innovations",
    role: "Mobile Application Developer",
    period: "2012 - 2014",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary: "Developed AfsarBitiya competitive exam preparation app and foundational Android SDK utilities.",
    responsibilities: [
      "Constructed offline question bank caching system enabling students in rural areas to study without active internet.",
      "Integrated Firebase Cloud Messaging for instant mock test notifications and daily quiz alerts."
    ],
    achievements: [
      "Grew active student user base to 25,000+ registered exam candidates.",
      "Reduced initial app payload size by 35% using ProGuard and image asset compression."
    ],
    technologies: ["Java", "Android SDK", "Firebase DB", "SQLite", "XML Views", "JSON Parsing"],
    featured: false
  }
];

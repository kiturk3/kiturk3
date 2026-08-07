import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-grubbrr",
    company: "Grubbrr Systems Ind. PVT LTD.",
    role: "Senior Software Engineer",
    period: "June 2017 – Present",
    location: "US Onsite Client Experience / Ahmedabad, India",
    type: "Full-time Lead",
    summary: "Architected and shipped enterprise KIOSK V3 self-service ordering systems and POS V2 Android POS platforms live across multiple US restaurant & hospitality locations on low-spec hardware.",
    responsibilities: [
      "Architected and shipped KIOSK V3 — a self-service food & beverage ordering system built natively for Android and extended cross-platform with Svelte/Tauri.",
      "Maintained and extended POS V2 — a native Android Point-of-Sale system handling order processing, payment flows, and real-time kitchen display sync.",
      "Led architecture decisions adopting MVVM pattern and Jetpack Compose for new UI modules, reducing view-layer complexity and improving testability.",
      "Built hardware integrations for Epson receipt printers, USB/serial peripheral devices, and barcode scanners within native Android and Tauri environments.",
      "Conducted code reviews enforcing SOLID principles and Kotlin best practices; introduced CI/CD pipelines using Git hooks and automated build workflows.",
      "Led sprint planning and estimation cycles, coordinating cross-functional delivery across engineering, QA, and US-based client stakeholders.",
      "Integrated AI-assisted development workflows (Claude, Cursor, Codex) into daily engineering cycles to accelerate feature iteration.",
      "Collaborated onsite with US-based clients on requirements, delivery timelines, and post-launch support across the full product lifecycle."
    ],
    achievements: [
      "Scaled KIOSK V3 & POS V2 to live production across multiple US dining locations running reliably on low-spec kiosk hardware.",
      "Engineered native hardware drivers for Epson receipt printers, USB/serial devices, and barcode scanners.",
      "Adopted Jetpack Compose & MVVM architecture across core products to reduce view-layer complexity."
    ],
    technologies: ["Kotlin", "Java", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Hilt", "Svelte", "Tauri", "Epson ESC/POS", "USB/Serial", "Barcode Scanners", "Claude", "Cursor", "Codex"],
    featured: true
  },
  {
    id: "exp-trisoft",
    company: "TriSoftDevelopers",
    role: "Founder & Software Engineer",
    period: "Jan 2016 – June 2017",
    location: "Ahmedabad, India",
    type: "Boutique Consultancy",
    summary: "Founded a boutique Android consultancy; independently architected and delivered 10+ production apps for clients across India, Portugal, and the UAE.",
    responsibilities: [
      "Founded boutique Android engineering firm and managed full client lifecycle from initial requirements through post-launch delivery.",
      "Built RMTS — a real-time GPS bus tracking app for Rajkot Municipal Transport with live next-bus monitoring.",
      "Developed AfsarBitiya (competitive exam prep for GPSC, NEET, IIT) and EasyTax (income tax calculator)."
    ],
    achievements: [
      "Delivered 10+ production-grade Android applications for international clients across India, Portugal, and UAE.",
      "Shipped RMTS live GPS transit tracker serving daily public bus commuters in Rajkot."
    ],
    technologies: ["Android SDK", "Java", "Kotlin", "GPS Telemetry", "Firebase DB", "SQLite", "XML Views", "REST APIs"],
    featured: true
  },
  {
    id: "exp-eheuristic",
    company: "eHeuristic Solutions",
    role: "Software Engineer",
    period: "May 2014 – Jan 2016",
    location: "Ahmedabad, India",
    type: "Full-time",
    summary: "Developed native Android mobile solutions across logistics, healthcare, messaging, custom launcher extensions, and interactive gaming.",
    responsibilities: [
      "Shipped DispatchMe — a courier management app with QR code scanning deployed for a Portuguese logistics company.",
      "Developed PetsApp — a vet appointment and vaccine tracker with online (Retrofit) and offline (Room/SQLite) dual-mode architecture.",
      "Built EdgeAlert (Samsung Edge custom notification system), BeamItUp (XMPP location-based chat with OpenGL UI animations), Cric'O (2D cricket card game), and MedicalPearls (pharma reference app)."
    ],
    achievements: [
      "Successfully deployed DispatchMe courier scanner app for Portuguese logistics operations.",
      "Built dual-mode online/offline sync architecture for PetsApp veterinary record management."
    ],
    technologies: ["Java", "Android SDK", "CameraX / QR Scanning", "XMPP Protocol", "OpenGL ES 2D", "SQLite", "Retrofit"],
    featured: false
  }
];

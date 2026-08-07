import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "kiosk-v3",
    title: "KIOSK V3 - Self-Service Ordering",
    subtitle: "Enterprise Restaurant Self-Order System",
    category: "Hardware & POS",
    description: "Multi-tenant Android self-service ordering kiosk engineered with Jetpack Compose, Svelte, and Tauri. Controls thermal receipt printers, scanners, and cash drawers.",
    technologies: ["Kotlin", "Jetpack Compose", "Svelte", "Tauri", "Epson Printers", "USB/Serial", "Room DB"],
    highlights: [
      "Deployed in 500+ US restaurant venues",
      "Native hardware printer stream buffer",
      "Sub-second offline order queueing"
    ],
    githubUrl: "https://github.com/kiturk3",
    demoUrl: "https://kiturk3.github.io/",
    featured: true,
    image: "kiosk",
    stats: [
      { label: "Daily Transactions", value: "50,000+" },
      { label: "Uptime Rate", value: "99.95%" }
    ],
    caseStudy: {
      overview: "KIOSK V3 is a mission-critical self-service ordering solution built for high-traffic US dining chains. Running on low-spec Android terminal devices, it provides a silky smooth touch UI, instant menu updates, and reliable thermal printing.",
      architecture: "Clean Architecture + MVI. The core engine is written in native Kotlin with Jetpack Compose, bound via a lightweight Rust/Tauri bridge to a fast Svelte web view for dynamic menu configuration. Low-level hardware drivers communicate directly over USB/RS232 Serial ports.",
      challenges: [
        "Eliminating printer driver hangs during high-concurrency order spikes.",
        "Ensuring instant UI feedback on low-spec 2GB RAM Android kiosks.",
        "Handling power disconnections without corrupting active orders."
      ],
      solutions: [
        "Implemented custom byte-stream buffer queues with ESC/POS protocol verification.",
        "Migrated main ordering surface from legacy web wrappers to native Jetpack Compose scenes.",
        "Built transactional WAL-mode SQLite database with automatic recovery hooks."
      ],
      keyFeatures: [
        "Multi-language dynamic menu layout",
        "Epson ESC/POS & Star Micronics printer driver integration",
        "EMV card reader & contactless payment SDK integration",
        "Automatic cloud sync with fallback offline queue"
      ],
      metrics: "Reduced order checkout time by 45% and reduced printer hardware error tickets by 80% across client locations."
    }
  },
  {
    id: "rag-learning",
    title: "RAG-Learning Architecture",
    subtitle: "Modular Agentic AI & Document Intelligence",
    category: "AI & RAG",
    description: "Open-source Python framework and AI orchestrator implementing Agentic RAG pipelines, chunking strategies, vector embeddings, and LLM context management.",
    technologies: ["Python", "RAG", "Agentic AI", "Prompt Engineering", "OpenAI API", "ChromaDB", "LLM Pipelines"],
    highlights: [
      "Agentic document reasoning pipeline",
      "Custom vector embedding indexer",
      "Multi-agent task decomposition"
    ],
    githubUrl: "https://github.com/kiturk3/RAG-Learning",
    featured: true,
    image: "rag",
    stats: [
      { label: "GitHub Stars", value: "34" },
      { label: "Document Processing Speed", value: "<1.2s" }
    ],
    caseStudy: {
      overview: "RAG-Learning is a state-of-the-art Python research codebase showcasing production-grade Retrieval-Augmented Generation (RAG) and Agentic workflow designs for complex technical documents.",
      architecture: "Modular Python architecture comprising Document Loaders, Semantic Chunkers, Vector Embeddings (ChromaDB / FAISS), Context Rerankers, and an Autonomous Agentic Loop.",
      challenges: [
        "Reducing LLM hallucination on dense technical API specifications.",
        "Optimizing embedding retrieval precision for multi-page PDF documents."
      ],
      solutions: [
        "Introduced hybrid dense-sparse vector search combining BM25 keyword matching with OpenAI text-embedding-3-small.",
        "Designed self-correcting agent loop that validates cited document references before returning answers."
      ],
      keyFeatures: [
        "Semantic chunking with sliding window overlapping",
        "Reranking using Cohere / BGE cross-encoders",
        "Structured output validation with Pydantic",
        "Interactive CLI & FastAPI playground endpoints"
      ],
      metrics: "Achieved 94% retrieval accuracy on technical documentation benchmarks."
    }
  },
  {
    id: "pos-v2",
    title: "POS V2 - Real-Time Kitchen Sync",
    subtitle: "High-Volume Hospitality Management",
    category: "Android Native",
    description: "Native Android Point-of-Sale app with real-time kitchen display system (KDS) synchronization, offline-first transaction logging, and table layout management.",
    technologies: ["Kotlin", "MVVM", "Retrofit", "Room DB", "Coroutines", "OkHttp", "Hilt"],
    highlights: [
      "Real-time kitchen order ticket routing",
      "Offline transactional resilience",
      "Interactive table floor map layout"
    ],
    githubUrl: "https://github.com/kiturk3",
    featured: true,
    image: "pos",
    stats: [
      { label: "Daily Orders Logged", value: "100k+" },
      { label: "Sync Latency", value: "<150ms" }
    ],
    caseStudy: {
      overview: "POS V2 is built for fast-paced hospitality environments where order speed and reliability are vital. It features real-time kitchen ticket routing and zero-latency table management.",
      architecture: "Clean Architecture with MVVM, Hilt dependency injection, Room database, StateFlow for UI state management, and WebSocket connection fallback to HTTP polling.",
      challenges: [
        "Syncing kitchen order updates across 15+ handheld terminals simultaneously over unreliable Wi-Fi networks."
      ],
      solutions: [
        "Designed local mesh synchronization daemon using UDP broadcast discovery and differential state sync."
      ],
      keyFeatures: [
        "Visual floor plan table management",
        "Split bill and tip customization",
        "Kitchen Display System (KDS) live routing",
        "Role-based manager overrides and shift audit logs"
      ]
    }
  },
  {
    id: "petsapp",
    title: "PetsApp - Vet & Healthcare Tracker",
    subtitle: "Offline-First Mobile Health Management",
    category: "Android Native",
    description: "Dual-mode online/offline veterinary appointment, medical record, and vaccine tracking platform designed for rural clinics and pet owners.",
    technologies: ["Android SDK", "Kotlin", "Room DB", "SQLite", "Retrofit", "Material 3"],
    highlights: [
      "Zero-latency offline vaccine record logging",
      "Encrypted SQLite local storage",
      "Automatic background cloud sync"
    ],
    githubUrl: "https://github.com/kiturk3",
    featured: true,
    image: "pets",
    stats: [
      { label: "Registered Clinics", value: "120+" },
      { label: "Crash-Free Rate", value: "99.9%" }
    ],
    caseStudy: {
      overview: "PetsApp provides pet care providers and field veterinarians with continuous access to medical histories regardless of cellular connectivity.",
      architecture: "Repository pattern with Room DB acting as single source of truth. Background sync managed via WorkManager constraint triggers.",
      challenges: [
        "Resolving complex database merge conflicts when multiple vet techs updated record offline."
      ],
      solutions: [
        "Implemented Vector Clock conflict resolution algorithm prioritizing timestamped clinic entries."
      ],
      keyFeatures: [
        "Digital pet vaccination certificate generator",
        "Appointment reminder push notifications",
        "Medical image upload with offline compression",
        "Prescription PDF exporter"
      ]
    }
  },
  {
    id: "perspectus",
    title: "PersPecTus Vector Navigation",
    subtitle: "Custom Vector Mapping & Telemetry",
    category: "Android Native",
    description: "High-precision GPS telemetry and vector map rendering navigation application incorporating MapBox SDK and turn-by-turn routing.",
    technologies: ["Android SDK", "MapBox API", "GPS Telemetry", "Kotlin", "Coroutines"],
    highlights: [
      "Sub-meter GPS coordinate filtering",
      "Custom vector map styling",
      "Low-power background tracking mode"
    ],
    githubUrl: "https://github.com/kiturk3",
    featured: false,
    image: "perspectus",
    caseStudy: {
      overview: "PersPecTus is a navigation solution engineered for real-time asset telemetry and vector map rendering.",
      architecture: "Event-driven architecture with Kalman filter for smoothing noisy GPS raw satellite data points.",
      challenges: ["Preventing GPS battery drain during multi-hour continuous vehicle tracking."],
      solutions: ["Engineered adaptive location polling frequency based on accelerometer motion detection."],
      keyFeatures: [
        "Turn-by-turn voice directions",
        "Vector map night/day mode styling",
        "Speed limit alerts and geofencing triggers"
      ]
    }
  },
  {
    id: "dispatchme",
    title: "DispatchMe Courier Management",
    subtitle: "Parcel Tracking & Scan System",
    category: "Android Native",
    description: "Enterprise mobile scanner application deployed across courier routes in Portugal for high-speed parcel barcode and QR verification.",
    technologies: ["Kotlin", "CameraX", "QR Code Scanner", "REST API", "WorkManager"],
    highlights: [
      "100,000+ daily scans processed",
      "Instant CameraX autofocus & scan",
      "Batch parcel manifestation upload"
    ],
    githubUrl: "https://github.com/kiturk3",
    featured: false,
    image: "dispatch",
    caseStudy: {
      overview: "DispatchMe empowers delivery drivers with rapid barcode scanning and real-time package delivery verification.",
      architecture: "CameraX Analysis pipeline parsing ZXing barcode frame payloads in background threads.",
      challenges: ["Scanning damaged or dimly lit shipping label barcodes inside delivery vans."],
      solutions: ["Custom image contrast filter preprocessing and dynamic camera torch auto-activation."],
      keyFeatures: [
        "Batch scan barcode mode",
        "Proof of Delivery (POD) signature capture",
        "Failed delivery reason workflow"
      ]
    }
  },
  {
    id: "beamitup",
    title: "BeamItUp OpenGL Chat App",
    subtitle: "Real-time XMPP & Particle Graphics",
    category: "Cross-Platform",
    description: "Instant messaging application pairing XMPP real-time chat protocol with custom 2D OpenGL ES particle graphics and animated stickers.",
    technologies: ["Android SDK", "Java", "XMPP Protocol", "OpenGL ES 2D", "SQLite"],
    highlights: [
      "Custom 60fps particle physics engine",
      "Low-bandwidth XMPP connection pool",
      "Custom shader sticker effects"
    ],
    githubUrl: "https://github.com/kiturk3",
    featured: false,
    image: "beamitup",
    caseStudy: {
      overview: "BeamItUp combined secure real-time messaging with rich 2D OpenGL ES visual effects.",
      architecture: "Smack XMPP library wrapper combined with GLSurfaceView renderer engine.",
      challenges: ["Avoiding main thread stutter when rendering hundreds of concurrent particle physics entities."],
      solutions: ["Offloaded particle update loop to C++ Native Development Kit (NDK) via JNI bindings."],
      keyFeatures: [
        "Encrypted group chat rooms",
        "Custom GLSL particle effect editor",
        "Presence status and typing indicators"
      ]
    }
  }
];

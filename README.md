# Krutik Khokhara - Senior Android & AI Engineer Portfolio 🚀

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Portfolio-22c55e?style=for-the-badge&logo=github)](https://kiturk3.github.io/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

A modern, high-performance personal portfolio website for **Krutik Khokhara** (Senior Android Engineer & AI-Augmented Developer with 12+ years of experience).

Inspired by design principles from **Vercel, Linear, Stripe, and Apple**, featuring dark/light mode switching, glassmorphic UI, Framer Motion entrance animations, Command Palette (`⌘K` / `Ctrl+K`), interactive project case studies, live GitHub statistics, technical articles, and automated GitHub Pages deployment via GitHub Actions.

---

## 🌟 Key Features

1. **Vercel/Linear Inspired Aesthetics**: Modern dark mode by default, subtle mesh gradient grids, ambient radial glows, and glassmorphism.
2. **Data-Centric Architecture (`src/data/`)**: Zero UI code editing required to update experience, projects, skills, or personal bio.
3. **Interactive Command Palette (`⌘K` / `Ctrl+K`)**: Keyboard-first navigation to search skills, jump between sections, filter projects, or copy contact information.
4. **Detailed Project Case Studies**: Filterable project gallery with dedicated modal drawers breaking down Architecture, Technical Challenges, Solutions, and Key Deliverables.
5. **Live GitHub Integration**: Dynamically fetches GitHub profile stats, language breakdowns, and recent repositories with offline fallback.
6. **Animated Numerical Achievements**: Intersection observer counter numbers tracking 12+ years EXP, 500+ US kiosk venues, and 99.95% crash-free rate.
7. **Technical Articles & Insights**: Reader modal for articles on Jetpack Compose, Agentic RAG architecture, and USB/Serial hardware interop.
8. **SEO & Accessibility**: Complete JSON-LD schema (`Person`), OpenGraph tags, sitemap.xml, robots.txt, and keyboard focus states.
9. **One-Click Resume Download**: Instant PDF asset download (`assets/Krutik_Khokhara_Resume.pdf`) with celebratory confetti.

---

## 🛠 Tech Stack

- **Core**: React 19, Vite 6, TypeScript 5.7
- **Styling**: Tailwind CSS v4, Vanilla CSS Design Tokens
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React Icons
- **Forms & SEO**: React Hook Form, React Hot Toast, React Helmet Async
- **Hosting & CI/CD**: GitHub Pages, GitHub Actions (`.github/workflows/deploy.yml`)

---

## 📂 Project Architecture

```
kiturk3/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD deployment
├── public/
│   ├── assets/
│   │   └── Krutik_Khokhara_Resume.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ui/                     # Button, Badge, Card, Modal, Tabs
│   │   ├── layout/                 # Navbar, Footer, SectionWrapper
│   │   ├── CommandPalette.tsx      # ⌘K Command Modal
│   │   ├── ProjectModal.tsx        # Case Study Popup Modal
│   │   ├── BlogModal.tsx           # Article Reader Modal
│   │   └── ThemeToggle.tsx         # Dark/Light Mode Switch
│   ├── sections/
│   │   ├── Hero.tsx                # Hero section with animated typing & code card
│   │   ├── About.tsx               # 12+ years narrative & 4 core pillars
│   │   ├── Skills.tsx              # Categorized skill badges with live search
│   │   ├── Experience.tsx          # Interactive career timeline
│   │   ├── FeaturedProjects.tsx    # Filterable project grid & case studies
│   │   ├── GitHubStats.tsx         # Live GitHub activity & language chart
│   │   ├── Achievements.tsx        # Animated numerical counter section
│   │   ├── BlogSection.tsx         # Technical articles
│   │   ├── Testimonials.tsx        # Client & VP endorsements
│   │   └── ContactSection.tsx      # Contact form & quick direct info
│   ├── data/                       # Editable Content Data Files
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── achievements.ts
│   │   ├── blog.ts
│   │   ├── testimonials.ts
│   │   └── socials.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useCommandPalette.ts
│   │   └── useScrollSpy.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   └── github.ts
│   ├── styles/
│   │   └── index.css               # Design tokens & glassmorphism utilities
│   ├── types/
│   │   └── index.ts                # TypeScript data interfaces
│   ├── App.tsx                     # Main layout & section composition
│   └── main.tsx                    # React mount entry
├── index.html                      # Root HTML with meta tags
├── vite.config.ts                  # Vite build configuration
└── package.json
```

---

## ⚡ Local Development

To run the project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/kiturk3/kiturk3.github.io.git
cd kiturk3.github.io

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠 Building & Deployment

### Manual Build Verification

To verify TypeScript type safety and compile production assets:

```bash
npm run build
```

This compiles all files into the `dist/` folder.

### Automated GitHub Pages Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).

Every push to the `main` branch automatically:
1. Installs Node.js dependencies
2. Runs TypeScript typechecking and Vite production build (`npm run build`)
3. Deploys the built `dist/` directory to **GitHub Pages**.

---

## ✏️ Maintenance & Customization Guide

All portfolio content is decoupled from UI components. To update content:

- **Personal Info / Bio / Tagline**: Edit [src/data/profile.ts](file:///c:/Users/Krutik/kiturk3/kiturk3/src/data/profile.ts)
- **Technical Skills & Categories**: Edit [src/data/skills.ts](file:///c:/Users/Krutik/kiturk3/kiturk3/src/data/skills.ts)
- **Work History & Achievements**: Edit [src/data/experience.ts](file:///c:/Users/Krutik/kiturk3/kiturk3/src/data/experience.ts)
- **Projects & Case Studies**: Edit [src/data/projects.ts](file:///c:/Users/Krutik/kiturk3/kiturk3/src/data/projects.ts)
- **Articles & Insights**: Edit [src/data/blog.ts](file:///c:/Users/Krutik/kiturk3/kiturk3/src/data/blog.ts)
- **Testimonials**: Edit [src/data/testimonials.ts](file:///c:/Users/Krutik/kiturk3/kiturk3/src/data/testimonials.ts)

---

## 📬 Contact & Connect

- **Email**: [kbkhokhara@gmail.com](mailto:kbkhokhara@gmail.com)
- **LinkedIn**: [linkedin.com/in/krutik-khokhara](https://www.linkedin.com/in/krutik-khokhara/)
- **GitHub**: [github.com/kiturk3](https://github.com/kiturk3)

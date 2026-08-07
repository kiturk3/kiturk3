export interface Profile {
  name: string;
  title: string;
  tagline: string;
  yearsOfExperience: number;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  availability: string;
  bio: string[];
  rotatingSkills: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  featured?: boolean;
}

export interface ProjectCaseStudy {
  overview: string;
  architecture: string;
  challenges: string[];
  solutions: string[];
  keyFeatures: string[];
  metrics?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Android Native' | 'AI & RAG' | 'Hardware & POS' | 'Cross-Platform';
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudy: ProjectCaseStudy;
  featured: boolean;
  image: string; // SVG or URL image representation
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Android' | 'Compose' | 'AI' | 'Architecture' | 'Hardware';
  slug: string;
  content: string; // Markdown formatted text
  author: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  content: string;
  avatar?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

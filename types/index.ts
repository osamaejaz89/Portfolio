import type { LucideIcon } from "lucide-react";

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  typingRoles: string[];
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  resumeUrl: string;
  /** Profile photo under /public */
  avatarUrl: string;
  summary: string;
  stats: { label: string; value: string }[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  projects?: string[];
  stack: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  platforms: string[];
  highlight: string;
  category: string;
  /** Visual accent used by the card (`rn` = blue, `accent` = green) */
  accent: "rn" | "accent";
  url?: string;
  /** Optional cover screenshot under /public */
  image?: string;
  /** Client / product owner shown on the card */
  client?: string;
  /** App Store / Play Store / site links */
  links?: ProjectLink[];
}

export interface Skill {
  name: string;
  level: number; // 0 – 100
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

import type { LucideIcon } from "lucide-react";

export interface PersonalInfo {
  greeting: string;
  name: string;
  role: string;
  specialty: string;
  tagline: string;
  description: string;
  status: string;
  portraitImage: string;
}
export interface Stats {
  projects: number;
  experience: number;
  satisfaction: number;
}
export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}
export interface TechIcon {
  symbol: string;
  name: string;
  color: string;
  animationDuration: string;
  animationDirection?: "normal" | "reverse";
}
export interface AnimationConfig {
  particleCount: number;
  mouseSensitivity: number;
  entranceDelay: number;
  hoverScale: number;
  rotationSensitivity: number;
  enableParticles: boolean;
  enableMouseParallax: boolean;
  enableAutoAnimations: boolean;
}

import type {
  AnimationConfig,
  PersonalInfo,
  Stats,
  TechIcon,
} from "@/types/Hero";
import { Facebook, Github, Linkedin } from "lucide-react";

export const personalInfo: PersonalInfo = {
  greeting: "Hello, I'm",
  name: "Nima Tamang",
  role: "React Developer",
  specialty: "Developer",
  tagline: "Building digital experiences that matter",
  description:
    "I create stunning web applications with modern technologies. Passionate about clean code, beautiful design, and exceptional user experiences.",
  status: "Available for work",
  portraitImage:
    "https://i.postimg.cc/tJ6DjCTV/Whats-App-Image-2025-08-04-at-2-17-03-pm.jpghttps://i.postimg.cc/tJ6DjCTV/Whats-App-Image-2025-08-04-at-2-17-03-pm.jpg",
};
export const stats: Stats = {
  projects: 4,
  experience: 1,
  satisfaction: 100,
};
export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/neematamang02",
    label: "GitHub",
    color: "hover:text-gray-300",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/neema-tamang-444319258/",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/neema.tamang.7311",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
];
export const techStack: TechIcon[] = [
  {
    symbol: "JS",
    name: "JavaScript",
    color: "from-blue-500 to-cyan-500",
    animationDuration: "20s",
    animationDirection: "normal",
  },
  {
    symbol: "⚛️",
    name: "React",
    color: "from-green-500 to-emerald-500",
    animationDuration: "25s",
    animationDirection: "reverse",
  },
  {
    symbol: "TS",
    name: "TypeScript",
    color: "from-purple-500 to-pink-500",
    animationDuration: "30s",
    animationDirection: "normal",
  },
  {
    symbol: "🔥",
    name: "Node.js",
    color: "from-orange-500 to-red-500",
    animationDuration: "22s",
    animationDirection: "reverse",
  },
];

// Animation Configuration Data
export const animationConfig: AnimationConfig = {
  particleCount: 20,
  mouseSensitivity: 20,
  entranceDelay: 300,
  hoverScale: 1.05,
  rotationSensitivity: 5,
  enableParticles: true,
  enableMouseParallax: true,
  enableAutoAnimations: true,
};

// Button Configuration Data
export const buttonConfig = {
  primaryButton: {
    text: "View Projects",
    targetSection: "projects",
  },
  secondaryButton: {
    text: "Download CV",
    downloadUrl: "/path-to-your-cv.pdf",
  },
};

// Scroll Configuration Data
export const scrollConfig = {
  nextSection: "about",
  scrollText: "Scroll Down",
};

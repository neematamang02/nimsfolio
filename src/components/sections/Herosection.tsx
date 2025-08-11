import type React from "react";
import { useState, useEffect } from "react";
import { ChevronDown, Download, Sparkles, Code2, Zap } from "lucide-react";
import {
  buttonConfig,
  personalInfo,
  scrollConfig,
  socialLinks,
  stats,
} from "@/data/Hero-data";

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${
              mousePosition.y * -15
            }px)`,
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Greeting */}
            <div className="flex items-center space-x-2 text-purple-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-lg font-medium">Hello, I'm</span>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                {personalInfo.name}
              </span>
            </h1>

            {/* Animated Role */}
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                <span className="text-white">Frontend</span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {personalInfo.role}
                </span>
              </h2>
              <div className="flex items-center space-x-2 text-gray-400">
                <Code2 className="w-5 h-5" />
                <span>{personalInfo.tagline}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              {personalInfo.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4+</div>
                <div className="text-sm text-gray-400">{stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">1+</div>
                <div className="text-sm text-gray-400">{stats.experience}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">
                  {stats.satisfaction}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 cursor-pointer"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>{buttonConfig.primaryButton.text}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
              <a href="/Nima_Tamang_Frontend_Developer_CV.pdf" download>
                <button className="group px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                  <Download className="w-5 h-5" />
                  <span>{buttonConfig.secondaryButton.text}</span>
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group p-3 rounded-full bg-gray-800/50 hover:bg-purple-500/20 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Portrait */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* 3D Container */}
              <div
                className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto"
                style={{
                  transform: `perspective(1000px) rotateY(${
                    mousePosition.x * 5
                  }deg) rotateX(${mousePosition.y * -5}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl animate-pulse" />

                {/* Portrait Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25">
                  {/* Portrait Image */}
                  <img
                    src={personalInfo.portraitImage}
                    alt="Whats-App-Image-2025-08-04-at-2-17-03-pm"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                  <Code2 className="w-6 h-6 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-5 h-5 text-white" />
                </div>

                {/* Tech Stack Orbiting Elements */}
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    JS
                  </div>
                </div>

                <div
                  className="absolute inset-0 animate-spin"
                  style={{
                    animationDuration: "25s",
                    animationDirection: "reverse",
                  }}
                >
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    ⚛️
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => handleScroll("about")}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <span className="text-sm">{scrollConfig.scrollText}</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import type React from "react";
import { Heart, Code2, ArrowUp } from "lucide-react";
import { socialLinks } from "@/data/Footer-data";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-gray-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nima Tamang
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 hover:bg-purple-500/20 border border-gray-700/50 hover:border-purple-500/50 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright & Built With */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nima. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center space-x-1">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-red-400 animate-pulse" />
              <span>using</span>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
              >
                React
              </a>
              <span>&</span>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
              >
                Tailwind CSS
              </a>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

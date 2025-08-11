import type React from "react";
import { Code2 } from "lucide-react";
import { shortinfo, skills } from "@/data/About-data";

const AboutSection: React.FC = () => {
  return (
    <section className="py-30 h-screen bg-gray-950" id="about">
      <div className="container mx-auto px-4 relative z-10">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-purple-500/30 mx-auto shadow-2xl shadow-purple-500/20">
                <img
                  src="https://i.ibb.co/67F63Lqj/2842680.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content & Skills */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* About Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Hi, I'm a{" "}
                  <span className="text-purple-400">Front-end Developer</span>
                </h3>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {shortinfo.description}
                </p>

                <p className="text-gray-300 leading-relaxed">
                  {shortinfo.description2}
                </p>

                <p className="text-gray-300 leading-relaxed">
                  {shortinfo.description3}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Code2 className="w-5 h-5 text-purple-400 mr-3" />
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

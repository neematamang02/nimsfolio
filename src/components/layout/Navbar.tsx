// import type React from "react";
// import { useState } from "react";
// import { Code2, Menu, Sparkles, X } from "lucide-react";

// const Navbar: React.FC = () => {
//   const [ismenuOpen, setIsMenuOpen] = useState(false);
//   const handleScroll = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     sectionId: string
//   ) => {
//     e.preventDefault();
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMenuOpen(false);
//   };
//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];
//   return (
//     <nav className="bg-gray-900/95 backdrop-blur-md border border-purple-500/30 text-white py-4 fixed top-4 left-4 right-4 z-50 shadow-lg shadow-purple-500/20 rounded-3xl m-auto xl:w-4xl lg:w-3xl">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo/Brand */}
//         <div className="flex items-center space-x-2 group">
//           <div className="relative">
//             <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//               <Code2 className="w-5 h-5 text-white" />
//             </div>
//             <div className="absolute -top-1 -right-1 w-3 h-3">
//               <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
//             </div>
//           </div>
//           <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Nimsfolio
//           </h1>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex space-x-6">
//           {navItems.map((item) => (
//             <li key={item.name} className="relative group">
//               <a
//                 href={item.href}
//                 onClick={(e) => handleScroll(e, item.name.toLowerCase())}
//                 className="relative px-4 py-2 text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium tracking-wide"
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
//                 <span className="absolute inset-0 rounded-lg bg-purple-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button - Desktop */}
//         <div className="hidden md:block">
//           <button className="relative px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium text-white overflow-hidden group transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 cursor-pointer">
//             <span className="relative z-10">Get In Touch</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!ismenuOpen)}
//           className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
//         >
//           <div className="relative w-6 h-6">
//             <Menu
//               className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
//                 ismenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
//               }`}
//             />
//             <X
//               className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
//                 ismenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           ismenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 py-6 bg-gray-800/50 backdrop-blur-sm border-t border-purple-500/20">
//           <ul className="space-y-4">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.href}
//                   onClick={(e) => handleScroll(e, item.name.toLowerCase())}
//                   className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-700/50 rounded-lg transition-all duration-200 font-medium"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6 pt-4 border-t border-gray-700">
//             <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/25 cursor-pointer">
//               Get In Touch
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
import type React from "react";
import { useState, useEffect } from "react";
import { Code2, Menu, Sparkles, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 rounded-3xl m-auto xl:w-4xl lg:w-3xl transition-all duration-300 border ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md border-purple-500/30 shadow-lg shadow-purple-500/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3">
              <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nimsfolio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.name.toLowerCase())}
                className="relative px-4 py-2 text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium tracking-wide"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 rounded-lg bg-purple-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <button className="relative px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium text-white overflow-hidden group transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 cursor-pointer">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!ismenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                ismenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                ismenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          ismenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 bg-gray-800/50 backdrop-blur-sm border-t border-purple-500/20">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollClick(e, item.name.toLowerCase())}
                  className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-700/50 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/25 cursor-pointer">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

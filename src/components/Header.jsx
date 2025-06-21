import { motion, useScroll, useTransform } from "framer-motion"; // Assuming you need these for header animations
import { useContext } from "react";
import { ThemeContext } from '../App.jsx'; // Import ThemeContext from App.jsx

// You need to import the SVG icons if they are used directly in Header.jsx
// It's generally better to pass them as props or define them in a common file
// For now, I'm defining them here to make Header.jsx self-contained for these icons.
// A better long-term solution would be a separate 'icons.js' file.
const SunIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <path d="m12 1 0 2"/>
    <path d="m12 21 0 2"/>
    <path d="m4.2 4.2 1.4 1.4"/>
    <path d="m18.4 18.4 1.4 1.4"/>
    <path d="m1 12 2 0"/>
    <path d="m21 12 2 0"/>
    <path d="m4.2 19.8 1.4-1.4"/>
    <path d="m18.4 5.6 1.4-1.4"/>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'About', id: 'about' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <motion.div
      className={`fixed top-4 left-4 right-4 md:left-20 md:right-20 z-50 flex justify-between items-center px-6 py-3 rounded-2xl backdrop-blur-md border ${
        isDark
          ? 'bg-black/20 border-white/20 text-white'
          : 'bg-white/20 border-black/20 text-black'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex space-x-8">
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="text-sm md:text-base font-medium hover:opacity-70 transition-opacity cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {item.name}
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={toggleTheme}
        className={`p-2 rounded-xl transition-colors ${
          isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDark ?
          <SunIcon className="w-5 h-5" /> :
          <MoonIcon className="w-5 h-5" />
        }
      </motion.button>
    </motion.div>
  );
}
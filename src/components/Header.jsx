import { motion } from "framer-motion"; 
import { useContext } from "react";
import { ThemeContext } from '../App.jsx'; 

export default function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Designs', id:'designs'},
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
      className={`fixed top-4 left-4 right-4 md:left-32 md:right-32 z-50 flex justify-between items-center px-6 py-3 rounded-full backdrop-blur-md border ${
        isDark
          ? 'bg-black/20 border-white/20 text-white'
          : 'bg-white/20 border-black/20 text-black'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="text-md font-boska md:text-2xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">Bola.me</p>
      <div className="flex space-x-2 md:space-x-8">
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="text-xs md:text-base font-medium hover:opacity-70 transition-opacity cursor-pointer hover:underline"
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
        className={`p-2 rounded-3xl transition-colors ${
          isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDark ?
          <img src="/sun.png" className="w-5 h-5" /> :
          <img src="/moon.png" className="w-5 h-5" />
        }
      </motion.button>
    </motion.div>
  );
}
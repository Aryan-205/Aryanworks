import { motion } from "motion/react"; // Add motion import
import { useContext } from "react";
import { ThemeContext } from '../App.jsx'; // Import ThemeContext from App.jsx


export default function Projects({ img, name, description, githubUrl, liveUrl,views }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-6 space-y-4 group ${
        isDark
          ? 'bg-white/5 border border-white/10 hover:bg-white/10'
          : 'bg-black/5 border border-black/10 hover:bg-black/10'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDark ? 'from-black/50 to-transparent' : 'from-white/50 to-transparent'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>

      <div className="space-y-2">
        <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          {name}
        </h3>
        <p className={`text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center pt-2">
        <motion.span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            isDark
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-green-500/20 text-green-600 border border-green-500/30'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {views}k+ Views
        </motion.span>

        <div className="flex space-x-2">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-3xl transition-colors ${
              isDark
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-black/10 text-black'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={isDark ? '/linkDark.png' : '/linkLight.png'} loading="lazy" className="w-4 h-4" alt="" />
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-3xl transition-colors ${
              isDark
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-black/10 text-black'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={isDark ? '/githubDark.png' : '/githubLight.png'} loading="lazy" className="w-4 h-4" alt="" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
import { motion } from "motion/react"; // Add motion import
import { useContext } from "react";
import { ThemeContext } from '../App.jsx'; // Import ThemeContext from App.jsx

// You need to import the SVG icons if they are used directly in Projects.jsx
// It's generally better to pass them as props or define them in a common file
const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m9 9 5-5v12.59"/>
    <path d="M11 4h10v10"/>
    <path d="M10.5 13.5 4 20l-1-1 6.5-6.5"/>
  </svg>
);


export default function Projects({ img, name, description, githubUrl, liveUrl }) {
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
          3k+ Views
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
            <img src={isDark ? '/linkDark.png' : '/linkLight.png'} className="w-4 h-4" alt="" />
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
            <img src={isDark ? '/githubDark.png' : '/githubLight.png'} className="w-4 h-4" alt="" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
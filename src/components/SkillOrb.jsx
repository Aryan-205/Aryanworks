import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from '../App.jsx'; // Assuming App.jsx is one level up

// Icon Definitions (moved here as they are tightly coupled with SkillOrb)
export const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

export const DatabaseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="m21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

export const ServerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
    <line x1="6" x2="6.01" y1="6" y2="6"/>
    <line x1="6" x2="6.01" y1="18" y2="18"/>
  </svg>
);

export const DesignIcon = ({className}) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="m12 19 7-7 3 3-7 7-3-3z"/>
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="m2 2 7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
);

// Map skill icon names from string to actual React components
const skillIconsMap = {
  CodeIcon: CodeIcon,
  DatabaseIcon: DatabaseIcon,
  ServerIcon: ServerIcon,
  DesignIcon: DesignIcon,
};


export default function SkillOrb({ icon, label, skills, delay = 0 }) { // 'icon' is now a string
  const { isDark } = useContext(ThemeContext);

  const IconComponent = skillIconsMap[icon]; // Get the actual component from the map

  if (!IconComponent) {
    console.warn(`Icon component for "${icon}" not found. Ensure it's correctly mapped.`);
    return null; // Or render a placeholder
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-32 w-full max-w-4xl mx-auto">
      <motion.div
        className={`relative flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full border-2 flex items-center justify-center group cursor-pointer
          ${isDark
            ? 'border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10'
            : 'border-black/20 hover:border-black/40 bg-black/5 hover:bg-black/10'
          }`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.1, rotateY: 180 }}
        viewport={{ once: true }}
      >
        <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${isDark ? 'text-white' : 'text-black'} group-hover:text-blue-500 transition-colors`} />
        <span
          className={`absolute -bottom-8 text-sm md:text-base font-medium ${isDark ? 'text-white' : 'text-black'}`}
        >
          {label}
        </span>
      </motion.div>

      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4 flex-grow mt-8 md:mt-0">
        {skills.map((item, idx) => ( // Added idx for sequential delay
          <motion.button
            key={item.id} // Using unique ID as key
            className={`
              text-xs md:text-sm lg:text-base font-medium border-2 rounded-3xl
              flex items-center justify-center py-2 px-4 md:py-2 md:px-5 
              ${isDark ? 'text-white border-white/30 ' : 'text-black border-black/30'}
            `}
            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
            transition={{ duration: 0.4, delay: delay + 0.3 + (idx * 0.05) }} // Added delay based on orb's delay + a slight offset + individual item delay
            viewport={{ once: true }}
          >
            {item.name}
              <img
                src={item.img}
                alt={item.name}
                className="w-4 h-4 md:w-5 md:h-5 ml-2 object-contain" // Adjusted sizes and added object-contain
              />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
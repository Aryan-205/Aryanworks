import { motion } from "motion/react";
import { useState, createContext, useContext } from "react";
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'

// Theme Context - EXPORTED HERE
export const ThemeContext = createContext();

// Custom SVG Components (keep these in App.jsx or move to a separate icons file if preferred)
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

const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

const DatabaseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="m21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
    <line x1="6" x2="6.01" y1="6" y2="6"/>
    <line x1="6" x2="6.01" y1="18" y2="18"/>
  </svg>
);

const BrainIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>
);

// Skill Component - Moved for better organization
// While still technically in App.jsx, if SkillOrb also were in its own file, it'd need ThemeContext.
function SkillOrb({ icon: Icon, label, delay = 0 }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      className={`relative w-20 h-20 md:w-32 md:h-32 rounded-full border-2 flex items-center justify-center group cursor-pointer ${
        isDark
          ? 'border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10'
          : 'border-black/20 hover:border-black/40 bg-black/5 hover:bg-black/10'
      }`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.1, rotateY: 180 }}
      viewport={{ once: true }}
    >
      <Icon className={`w-8 h-8 md:w-12 md:h-12 ${isDark ? 'text-white' : 'text-black'} group-hover:text-blue-500 transition-colors`} />
      <motion.span
        className={`absolute -bottom-8 text-xs md:text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

// Main App Component
export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const skills = [
    { icon: CodeIcon, label: 'Frontend' },
    { icon: ServerIcon, label: 'Backend' },
    { icon: DatabaseIcon, label: 'Database' },
    { icon: BrainIcon, label: 'AI/ML' }
  ];

  const projectsData = [ 
    {
      img: '/Rento.png',
      name: 'Rento',
      description: 'A modern rental platform with advanced search and booking capabilities',
      githubUrl: 'https://github.com/Aryan-205',
      liveUrl: 'https://x.com/BolaJi_69'
    },
    {
      img: '/Rento.png',
      name: 'Portfolio',
      description: 'Interactive portfolio showcasing modern web development skills',
      githubUrl: 'https://github.com/Aryan-205',
      liveUrl: 'https://x.com/BolaJi_69'
    },
    {
      img: '/Rento.png',
      name: 'Task Manager',
      description: 'Full-stack task management app with real-time collaboration',
      githubUrl: 'https://github.com/Aryan-205',
      liveUrl: 'https://x.com/BolaJi_69'
    }
  ];

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        <AnimatedBackground isDark={isDark} />
        <Header SunIcon={SunIcon} MoonIcon={MoonIcon} /> 

        {/* Hero Section */}
        <motion.section
          id="home" // Added ID for navigation
          className="relative flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 md:px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center lg:text-left lg:flex-1 space-y-6 z-10 ml-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.p
                className={`text-lg md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I am
              </motion.p>
              <motion.h1
                className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Aryan Bola
              </motion.h1>
              <motion.p
                className={`text-xl md:text-3xl font-light ${isDark ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Full Stack Developer
              </motion.p>
              <motion.p
                className={`text-xl md:text-3xl font-light ${isDark ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay:0.8 }}
              >
                Designer
              </motion.p>
              <motion.p
                className={`text-xl md:text-3xl font-light ${isDark ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay:0.8 }}
              >
                Cracked Dev
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                  isDark
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className={`px-6 py-3 rounded-full border-2 font-medium transition-all cursor-pointer ${
                  isDark
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* My image */}
          <motion.div
            className="lg:flex-1 flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div // This will be our main flipping container
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full" // Ensure dimensions are here
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d' // ADD THIS LINE
              }}
              animate={{ rotateY: [0, 180, 180, 360] }} // Flip to back, hold, then flip to front
              transition={{
                duration: 20, // Total duration for one full cycle (front -> back -> front)
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut", // Use easeInOut for a smoother flip
                times: [0, 0.25, 0.75, 1], // Define keyframes for the animation
              }}
            >
              {/* Front Image */}
              <motion.img
                src="/zoro.jpeg"
                alt="Aryan Bola Front"
                className={`w-full h-full rounded-full object-cover border-4 absolute inset-0 backface-hidden ${ // Use a Tailwind class for backface-hidden
                  isDark ? 'border-white/20' : 'border-black/20'
                }`}
                // This image rotates with its parent, but backface-hidden ensures it disappears when facing away
              />

              {/* Back Image */}
              <motion.img
                src="/me.jpeg"
                alt="Aryan Bola Back"
                className={`w-full h-full rounded-full object-cover border-4 absolute inset-0 backface-hidden ${ // Use a Tailwind class for backface-hidden
                  isDark ? 'border-white/20' : 'border-black/20'
                }`}
                style={{ transform: 'rotateY(180deg)' }} // Initially rotated to show its front when parent is at 180deg
                // This image rotates with its parent, but its initial rotation combined with backface-hidden ensures it appears when the parent is at 180deg
              />

              {/* Dashed Border - it should be inside this flipping div if you want it to flip with the images */}
              <motion.div
                className={`absolute inset-0 rounded-full border-4 border-dashed ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}
                animate={{ rotate: 360 }} // This will rotate the dashed border itself within the flipping context
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-20 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-3xl md:text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skill Stack
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {skills.map((skill, index) => (
              <SkillOrb
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                delay={index * 0.2}
              />
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-20 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-3xl md:text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectsData.map((project, index) => (
              <Projects
                key={index}
                img={project.img}
                name={project.name}
                description={project.description}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                // Pass icons if Projects component needs them
                GitHubIcon={GitHubIcon}
                ExternalLinkIcon={ExternalLinkIcon}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className={`px-8 py-3 rounded-full border-2 font-medium transition-all ${
                isDark
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-20 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-3xl md:text-5xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={`text-lg md:text-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Hello! I'm{' '}
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-bold">
                Aryan Bola
              </span>
              , a passionate 20-year-old developer and 2nd-year DU student. I'm driven by curiosity and the desire to learn from every interaction, no matter how small.
            </p>
            <p className={`text-base md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I believe in building meaningful digital experiences that make a difference. Every project is an opportunity to push boundaries and create something extraordinary.
            </p>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className={`py-8 px-4 text-center border-t ${
            isDark ? 'border-white/10 text-gray-400' : 'border-black/10 text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© 2025 Aryan Bola. Crafted with ❤️ and React.</p>
        </motion.footer>
      </div>
    </ThemeContext.Provider>
  );
}
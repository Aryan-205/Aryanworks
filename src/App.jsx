import { motion } from "motion/react";
import { useState, createContext, useContext } from "react";
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'

// Theme Context - EXPORTED HERE
export const ThemeContext = createContext();

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

const DesignIcon = ({className}) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
    <path d="m12 19 7-7 3 3-7 7-3-3z"/>
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="m2 2 7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
)

function SkillOrb({ icon: Icon, label,skills, delay = 0 }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
    <div className="flex gap-8 md:gap-32">
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
        <span
          className={`absolute -bottom-8 text-xs md:text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}
        >
          {label}
        </span>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {skills.map((item)=>(
          <button className={`text-sm md:text-lg font-medium border-2 rounded-3xl flex justify-center items-center p-2 md:py-3 md:px-6 hover:text-blue-500 ${isDark ? 'text-white' : 'text-black'}`}>{item.name}<img src={`${item.img}`} className="w-4 h-4 md:h-8 md:w-8 ml-2"/></button>
        ))

        }
      </div>
    </div>
    </>
  );
}

// Main App Component
export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const skills = [
    { 
      icon: CodeIcon, 
      label: 'Frontend',
      skill: [
        { name: 'React', img: '/me.jpeg' },
        { name: 'Vue', img: '/zoro.jpeg' },
        { name: 'HTML', img: '/zoro.jpeg' },
        { name: 'CSS', img: '/zoro.jpeg' },
        { name: 'Tailwind', img: '/zoro.jpeg' },
        { name: 'Motion', img: '/zoro.jpeg' },
      ]
    },
    { 
      icon: ServerIcon, 
      label: 'Backend',
      skill: [
        { name: 'Node.js', img: '/me.jpeg' },
        { name: 'Express', img: '/zoro.jpeg' },
        { name: 'Zod', img: '/zoro.jpeg' },
        { name: 'C++', img: '/zoro.jpeg' },
      ]
    },
    { 
      icon: DatabaseIcon, 
      label: 'Database',
      skill: [
        { name: 'MongoDB', img: '/me.jpeg' }
      ]
    },
    { 
      icon: DesignIcon, 
      label: 'Designing',
      skill: [
        { name: 'Figma', img: '/zoro.jpeg' },
        { name: 'Canva', img: '/zoro.jpeg' },
      ]
    }
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
        <Header/> 

        {/* Hero Section */}
        <motion.section
          id="home"
          className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 md:px-20 py-10 md:gap-[30rem] gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* INTRO TEXT */}
          <motion.div
            className="text-center lg:text-left space-y-6 z-10 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.p
                className={`text-lg sm:text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I am
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-boska py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Aryan Bola
              </motion.h1>
              <motion.p
                className={`text-lg sm:text-xl md:text-3xl font-light ${isDark ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Full Stack Developer
              </motion.p>
              <motion.p
                className={`text-lg sm:text-xl md:text-3xl font-light ${isDark ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
              >
                Designer
              </motion.p>
              <motion.p
                className={`text-lg sm:text-xl md:text-3xl font-light ${isDark ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Cracked Dev
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4"
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
            </div>
          </motion.div>

  {/* IMAGE */}
  <motion.div
    className="flex justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <motion.div
      className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      animate={{ rotateY: [0, 180, 180, 360] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.25, 0.75, 1]
      }}
    >
      {/* Front */}
      <motion.img
        src="/zoro.jpeg"
        alt="Aryan Bola Front"
        className={`w-full h-full rounded-full object-cover border-4 absolute inset-0 backface-hidden ${
          isDark ? 'border-white/20' : 'border-black/20'
        }`}
      />
      {/* Back */}
      <motion.img
        src="/me.jpeg"
        alt="Aryan Bola Back"
        className={`w-full h-full rounded-full object-cover border-4 absolute inset-0 backface-hidden ${
          isDark ? 'border-white/20' : 'border-black/20'
        }`}
        style={{ transform: 'rotateY(180deg)' }}
      />
      {/* Dashed border */}
      <motion.div
        className={`absolute inset-0 rounded-full border-4 border-dashed ${
          isDark ? 'border-white/10' : 'border-black/10'
        }`}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  </motion.div>
</motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-20 px-4 md:px-16"
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

          <div className="flex flex-col gap-12 md:gap-16">
            {skills.map((skill, index) => (
              <SkillOrb
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                delay={index * 0.2}
                skills={skill.skill}
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
            Projects
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

        {/* Design Section */}
        <motion.section
          id="designs"
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
            Designs
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
              View All Designs
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
          <p>© 2025 Aryan Bola</p>
        </motion.footer>
      </div>
    </ThemeContext.Provider>
  );
}
import { motion } from "motion/react"; // Add motion import

export default function AnimatedBackground({ isDark }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}

      {/* Particle System */}
      {[...Array(200)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            isDark ? 'bg-white/30' : 'bg-black/50'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [20, 100],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark
            ? [
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 30%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)'
              ]
            : [
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 30%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)'
              ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
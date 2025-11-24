import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  // Generate subtle floating orbs
  const orbs = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: 6 + i * 3,
    initialX: 3 + i * 6.5,
    initialY: 8 + (i % 5) * 18,
    duration: 2.5 + i * 0.25,
    delay: i * 0.1,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated dot matrix pattern - similar to Experience */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{ 
          backgroundImage: `radial-gradient(circle, rgba(107, 114, 128, 0.6) 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Dynamic floating orbs - technical style */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full shadow-md"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.initialX}%`,
            top: `${orb.initialY}%`,
            background: 'radial-gradient(circle, rgba(107, 114, 128, 0.5) 0%, rgba(156, 163, 175, 0.25) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, orb.id % 2 === 0 ? 30 : -30, 0],
            y: [0, orb.id % 3 === 0 ? -25 : 25, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Large rotating technical mesh */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[130px]"
        style={{ 
          background: 'conic-gradient(from 0deg, rgba(75, 85, 99, 0.12) 0%, rgba(107, 114, 128, 0.15) 50%, rgba(156, 163, 175, 0.10) 100%)'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Moving accent orb - top right */}
      <motion.div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(156, 163, 175, 0.15) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Moving accent orb - bottom left */}
      <motion.div
        className="absolute bottom-20 left-20 w-[450px] h-[450px] rounded-full blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(107, 114, 128, 0.14) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated grid lines - horizontal and vertical */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none">
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${i * 16.6}%`}
            x2="100%"
            y2={`${i * 16.6}%`}
            stroke="rgba(107, 114, 128, 0.5)"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${i * 16.6}%`}
            y1="0%"
            x2={`${i * 16.6}%`}
            y2="100%"
            stroke="rgba(156, 163, 175, 0.4)"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Organic Noise Texture - Adds premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}


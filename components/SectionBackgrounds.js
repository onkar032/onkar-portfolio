import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function AboutBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.3, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grey mesh gradients - VERY minimal */}
      <motion.div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{ 
          y: y1, 
          rotate, 
          scale,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]),
          background: 'radial-gradient(circle, rgba(82, 82, 91, 0.06) 0%, rgba(107, 114, 128, 0.04) 50%, transparent 70%)'
        }}
        animate={{
          x: [0, 30, 0],
          rotate: [0, 90, 180]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 -left-40 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{ 
          y: y2, 
          rotate: useTransform(scrollYProgress, [0, 1], [0, -90]),
          background: 'radial-gradient(circle, rgba(75, 85, 99, 0.05) 0%, rgba(107, 114, 128, 0.03) 50%, transparent 70%)'
        }}
        animate={{
          x: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Minimal floating elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-gray-400/10 backdrop-blur-sm"
          style={{
            width: 50 + i * 30,
            height: 50 + i * 30,
            left: `${15 + i * 25}%`,
            top: `${25 + (i % 2) * 35}%`,
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 15}%`]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? 180 : -180]),
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
        />
      ))}
      
      {/* Very subtle wave - barely visible */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" preserveAspectRatio="none">
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
          fill="url(#aboutGradient)"
          style={{ y: y1 }}
          animate={{
            d: [
              "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z",
              "M0,85 Q250,115 500,85 T1000,85 L1000,0 L0,0 Z",
              "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(82, 82, 91, 0.08)" />
            <stop offset="50%" stopColor="rgba(107, 114, 128, 0.04)" />
            <stop offset="100%" stopColor="rgba(82, 82, 91, 0.08)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function ExperienceBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated dot matrix - grey tones */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{ 
          backgroundImage: `radial-gradient(circle, rgba(82, 82, 91, 0.4) 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          y: useTransform(scrollYProgress, [0, 1], ['0%', '15%']),
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

      {/* MORE dynamic floating orbs with movement */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 4) * 25}%`,
            background: 'radial-gradient(circle, rgba(82, 82, 91, 0.4) 0%, rgba(107, 114, 128, 0.2) 70%, transparent 100%)',
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 25}%`]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.8, 1]),
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, i % 2 === 0 ? 30 : -30, 0],
          }}
          transition={{
            duration: 2.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}

      {/* Large rotating grey mesh */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[140px]"
        style={{ 
          y,
          rotate,
          background: 'conic-gradient(from 0deg, rgba(75, 85, 99, 0.12) 0%, rgba(82, 82, 91, 0.15) 50%, rgba(107, 114, 128, 0.1) 100%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Moving accent orb */}
      <motion.div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-[110px]"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '-40%']),
          opacity,
          background: 'radial-gradient(circle, rgba(107, 114, 128, 0.15) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export function SkillsBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tech-inspired hexagons */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16"
          style={{
            left: `${15 + i * 10}%`,
            top: `${15 + (i % 3) * 30}%`,
            y: i % 2 === 0 ? y1 : y2,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="none"
              stroke="rgba(0, 113, 227, 0.2)"
              strokeWidth="2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/15 to-pink-400/15 blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/15 to-cyan-400/15 blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export function ProjectsBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 0.9])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Concentric circles - more elegant */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-apple-blue/12 backdrop-blur-sm"
          style={{
            width: 80 + i * 50,
            height: 80 + i * 50,
            left: `${12 + i * 10}%`,
            top: `${10 + (i % 3) * 30}%`,
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 12}%`]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? 90 : -90]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]),
          }}
          animate={{
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Vibrant gradient mesh - multi-color */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{ 
          y,
          rotate,
          scale,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.12) 35%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)'
        }}
      />

      {/* Complementary orb */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['0%', '-40%']),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Accent gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[110px]"
        style={{ 
          rotate,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)'
        }}
      />
    </div>
  )
}


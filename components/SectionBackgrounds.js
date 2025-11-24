import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function AboutBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.5, 0.8])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle large circles with grey borders */}
      {[...Array(4)].map((_, i) => {
        return (
        <motion.div
          key={`big-circle-${i}`}
          className="absolute rounded-full border-2 border-gray-300/15"
          style={{
            width: 120 + i * 50,
            height: 120 + i * 50,
            left: `${10 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 18}%`]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? 240 : -240]),
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.18, 0.08],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
        )
      })}
      
      {/* Solid colored circles - subtle greys */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`solid-circle-${i}`}
          className="absolute rounded-full shadow-sm"
          style={{
            width: 20 + i * 8,
            height: 20 + i * 8,
            left: `${5 + i * 10}%`,
            top: `${12 + (i % 4) * 25}%`,
            background: 'radial-gradient(circle, rgba(107, 114, 128, 0.18) 0%, rgba(156, 163, 175, 0.08) 100%)',
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 20}%`]),
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      {/* Geometric shapes - subtle greys */}
      {[...Array(6)].map((_, i) => {
        const isSquare = i % 2 === 0
        return (
          <motion.div
            key={`shape-${i}`}
            className={`absolute border-2 shadow-sm ${isSquare ? 'rounded-lg' : ''}`}
            style={{
              width: 40 + i * 10,
              height: 40 + i * 10,
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 28}%`,
              borderColor: 'rgba(156, 163, 175, 0.20)',
              background: isSquare 
                ? 'linear-gradient(135deg, rgba(107, 114, 128, 0.12) 0%, rgba(156, 163, 175, 0.06) 100%)'
                : 'linear-gradient(135deg, rgba(75, 85, 99, 0.12) 0%, rgba(107, 114, 128, 0.06) 100%)',
              rotate: isSquare ? 45 : 0,
              y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 15}%`]),
            }}
            animate={{
              rotate: isSquare ? [45, 105, 45] : [0, 120, 0],
              scale: [1, 1.12, 1],
              opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
              duration: 8 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        )
      })}
      
      {/* Subtle grey gradient blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[100px]"
        style={{ 
          y: y1, 
          rotate, 
          scale,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.35, 0.25]),
          background: 'radial-gradient(circle, rgba(107, 114, 128, 0.10) 0%, rgba(156, 163, 175, 0.06) 50%, transparent 70%)'
        }}
        animate={{
          x: [0, 35, 0],
          rotate: [0, 120, 240]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 -left-40 w-[750px] h-[750px] rounded-full blur-[110px]"
        style={{ 
          y: y2, 
          rotate: useTransform(scrollYProgress, [0, 1], [0, -120]),
          background: 'radial-gradient(circle, rgba(156, 163, 175, 0.11) 0%, rgba(209, 213, 219, 0.06) 50%, transparent 70%)'
        }}
        animate={{
          x: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-[550px] h-[550px] rounded-full blur-[120px]"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
          background: 'radial-gradient(circle, rgba(75, 85, 99, 0.10) 0%, rgba(107, 114, 128, 0.06) 50%, transparent 70%)'
        }}
        animate={{
          x: [0, 25, 0],
          scale: [1, 1.25, 1],
          rotate: [0, 60, 0]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated particles - subtle greys */}
      {[...Array(12)].map((_, i) => {
        return (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-gray-400/25 rounded-full shadow-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.3, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 9 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        />
        )
      })}
      
      {/* Enhanced animated wave */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
          fill="url(#aboutGradient)"
          style={{ y: y1 }}
          animate={{
            d: [
              "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z",
              "M0,80 Q250,120 500,80 T1000,80 L1000,0 L0,0 Z",
              "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(107, 114, 128, 0.15)" />
            <stop offset="33%" stopColor="rgba(156, 163, 175, 0.12)" />
            <stop offset="66%" stopColor="rgba(75, 85, 99, 0.12)" />
            <stop offset="100%" stopColor="rgba(107, 114, 128, 0.15)" />
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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced animated dot matrix - more visible */}
      <motion.div
        className="absolute inset-0 opacity-[0.10]"
        style={{ 
          backgroundImage: `radial-gradient(circle, rgba(82, 82, 91, 0.6) 2.5px, transparent 2.5px)`,
          backgroundSize: '35px 35px',
          y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
        }}
        animate={{
          backgroundPosition: ['0px 0px', '35px 35px'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* MORE dynamic floating orbs - bigger and more visible */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full shadow-lg"
          style={{
            width: 6 + i * 3,
            height: 6 + i * 3,
            left: `${3 + i * 5}%`,
            top: `${8 + (i % 5) * 20}%`,
            background: 'radial-gradient(circle, rgba(82, 82, 91, 0.6) 0%, rgba(107, 114, 128, 0.3) 70%, transparent 100%)',
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 30}%`]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1]),
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
            x: [0, i % 2 === 0 ? 40 : -40, 0],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}

      {/* Large rotating mesh - more colorful */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full blur-[130px]"
        style={{ 
          y,
          rotate,
          background: 'conic-gradient(from 0deg, rgba(75, 85, 99, 0.18) 0%, rgba(82, 82, 91, 0.22) 50%, rgba(107, 114, 128, 0.15) 100%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Multiple moving accent orbs */}
      <motion.div
        className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '-50%']),
          opacity,
          background: 'radial-gradient(circle, rgba(107, 114, 128, 0.22) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-[550px] h-[550px] rounded-full blur-[100px]"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '40%']),
          background: 'radial-gradient(circle, rgba(156, 163, 175, 0.20) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, -50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1="0%"
            y1={`${i * 12.5}%`}
            x2="100%"
            y2={`${i * 12.5}%`}
            stroke="rgba(82, 82, 91, 0.5)"
            strokeWidth="1"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
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


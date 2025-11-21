import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxScroll() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Create smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  // Different parallax speeds for depth
  const y1 = useTransform(smoothProgress, [0, 1], ['0%', '100%'])
  const y2 = useTransform(smoothProgress, [0, 1], ['0%', '50%'])
  const y3 = useTransform(smoothProgress, [0, 1], ['0%', '30%'])
  const y4 = useTransform(smoothProgress, [0, 1], ['0%', '-20%'])
  
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(smoothProgress, [0, 1], [0, -180])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.8])
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.6, 0.2])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Layer 1 - Slowest moving large shapes */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"
          style={{ rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-400/10 to-blue-400/10 blur-3xl"
          style={{ rotate: rotate2 }}
        />
      </motion.div>

      {/* Layer 2 - Medium speed geometric shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-apple-blue/20 rounded-lg"
          style={{ rotate: rotate1, scale }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-40 h-40 border border-blue-400/20"
          style={{ rotate: rotate2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full border-2 border-purple-400/20"
          style={{ scale }}
        />
      </motion.div>

      {/* Layer 3 - Faster moving small elements */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-apple-blue/30 rounded-full"
            style={{
              left: `${(i * 7 + 10) % 90}%`,
              top: `${(i * 11 + 5) % 90}%`,
              scale: useTransform(scrollYProgress, [0, 1], [1, 0.5])
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Layer 4 - Reverse parallax (moves opposite direction) */}
      <motion.div
        style={{ y: y4 }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-2xl"
          style={{ rotate: rotate2 }}
        />
      </motion.div>

      {/* Floating lines that move with scroll */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <motion.line
          x1="10%"
          y1="20%"
          x2="90%"
          y2="30%"
          stroke="url(#gradient1)"
          strokeWidth="2"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.line
          x1="20%"
          y1="60%"
          x2="80%"
          y2="70%"
          stroke="url(#gradient1)"
          strokeWidth="2"
          style={{ pathLength: scrollYProgress }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0" />
            <stop offset="50%" stopColor="#0071e3" stopOpacity="1" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}


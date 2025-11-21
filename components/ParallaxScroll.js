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
      {/* Layer 1 - Ultra slow, large organic shapes */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-20 left-10 w-[550px] h-[550px] rounded-full blur-[140px]"
          style={{ 
            rotate: rotate1,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[650px] h-[650px] rounded-full blur-[150px]"
          style={{ 
            rotate: rotate2,
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 70%)'
          }}
        />
      </motion.div>

      {/* Layer 2 - Medium speed elegant shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-40 border border-apple-blue/12 rounded-2xl backdrop-blur-sm"
          style={{ rotate: rotate1, scale }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-purple-400/10 rounded-full"
          style={{ rotate: rotate2, scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]) }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 rounded-lg border border-cyan-400/12 backdrop-blur-sm"
          style={{ scale, rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }}
        />
      </motion.div>

      {/* Layer 3 - Faster, refined particles */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              left: `${(i * 9 + 12) % 88}%`,
              top: `${(i * 13 + 8) % 88}%`,
              background: 'radial-gradient(circle, rgba(0, 113, 227, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
              scale: useTransform(scrollYProgress, [0, 1], [1, 0.6])
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15
            }}
          />
        ))}
      </motion.div>

      {/* Layer 4 - Reverse parallax with premium glow */}
      <motion.div
        style={{ y: y4 }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-1/3 left-1/2 w-80 h-80 rounded-full blur-[100px]"
          style={{ 
            rotate: rotate2,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)'
          }}
        />
      </motion.div>

      {/* Refined animated lines with smooth reveal */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }} preserveAspectRatio="none">
        <motion.path
          d="M0,150 Q400,100 800,150 T1600,150"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          fill="none"
          style={{ 
            pathLength: scrollYProgress,
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
          }}
        />
        <motion.path
          d="M0,400 Q500,350 1000,400 T2000,400"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          fill="none"
          style={{ 
            pathLength: useTransform(scrollYProgress, [0, 1], [0, 1]),
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
          }}
        />
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0" />
            <stop offset="50%" stopColor="#0071e3" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}


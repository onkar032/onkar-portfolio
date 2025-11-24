import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export function AboutBackground() {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  // Wait for client hydration
  if (!isClient) {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ 
            background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, transparent 70%)'
          }}
        />
      </div>
    )
  }

  // Mobile: Minimal static background
  if (isMobile) {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static gradient - no animations */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ 
            background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full opacity-[0.04]"
          style={{ 
            background: 'radial-gradient(circle, rgba(156, 163, 175, 1) 0%, transparent 70%)'
          }}
        />
      </div>
    )
  }

  // Desktop: Reduced animations
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient blob with scroll */}
      <motion.div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{ 
          y: y1,
          opacity: 0.06,
          background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, rgba(156, 163, 175, 0.5) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <motion.div
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{ 
          y: y2,
          opacity: 0.06,
          background: 'radial-gradient(circle, rgba(156, 163, 175, 1) 0%, rgba(209, 213, 219, 0.5) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      
      {/* Minimal circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-gray-300/10"
          style={{
            width: 100 + i * 60,
            height: 100 + i * 60,
            left: `${15 + i * 20}%`,
            top: `${20 + i * 25}%`,
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 12}%`]),
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}

export function ExperienceBackground() {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  // Wait for client hydration
  if (!isClient) {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{ 
            backgroundImage: `radial-gradient(circle, rgba(107, 114, 128, 0.5) 2px, transparent 2px)`,
            backgroundSize: '35px 35px',
          }}
        />
      </div>
    )
  }

  // Mobile: Static dot pattern only
  if (isMobile) {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{ 
            backgroundImage: `radial-gradient(circle, rgba(107, 114, 128, 0.5) 2px, transparent 2px)`,
            backgroundSize: '35px 35px',
          }}
        />
      </div>
    )
  }

  // Desktop: Minimal animations
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated dot matrix */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{ 
          backgroundImage: `radial-gradient(circle, rgba(107, 114, 128, 0.5) 2px, transparent 2px)`,
          backgroundSize: '35px 35px',
          willChange: 'background-position',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '35px 35px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Single gradient blob with scroll */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px]"
        style={{ 
          y,
          opacity: 0.05,
          background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, transparent 70%)',
          willChange: 'transform',
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
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // Wait for client hydration
  if (!isClient) {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ 
            background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, transparent 70%)'
          }}
        />
      </div>
    )
  }

  // Mobile: Minimal static background
  if (isMobile) {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static gradient */}
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ 
            background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, transparent 70%)'
          }}
        />
      </div>
    )
  }

  // Desktop: Reduced animations
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Single gradient blob with scroll */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{ 
          y,
          opacity: 0.05,
          background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      
      {/* Minimal circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-gray-300/8"
          style={{
            width: 100 + i * 70,
            height: 100 + i * 70,
            left: `${15 + i * 15}%`,
            top: `${15 + i * 20}%`,
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${(i + 1) * 10}%`]),
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}


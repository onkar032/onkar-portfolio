import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function SectionTransition({ children, id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export function MorphingBackground() {
  const { scrollYProgress } = useScroll()

  const morphPath = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z',
      'M0,50 Q250,150 500,50 T1000,50 L1000,0 L0,0 Z',
      'M0,100 Q250,0 500,100 T1000,100 L1000,0 L0,0 Z',
      'M0,75 Q250,125 500,75 T1000,75 L1000,0 L0,0 Z',
      'M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z',
    ]
  )

  return (
    <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-0 overflow-hidden">
      <svg
        viewBox="0 0 1000 100"
        className="absolute bottom-0 w-full h-64"
        preserveAspectRatio="none"
      >
        <motion.path
          d={morphPath}
          fill="url(#morphGradient)"
          opacity={0.1}
        />
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}


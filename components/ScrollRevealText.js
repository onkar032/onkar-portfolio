import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollRevealText({ children, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SpotlightEffect() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[2]"
      style={{ opacity }}
    >
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px]"
        style={{ y }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-white/5 via-white/2 to-transparent blur-3xl" />
      </motion.div>
    </motion.div>
  )
}


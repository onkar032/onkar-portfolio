import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollVelocity() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  // Transform velocity to rotation and scale
  const rotate = useTransform(smoothVelocity, [-1000, 0, 1000], [-180, 0, 180])
  const scale = useTransform(smoothVelocity, [-1000, 0, 1000], [1.5, 1, 1.5])
  const opacity = useTransform(smoothVelocity, [-1000, 0, 1000], [0.8, 0.3, 0.8])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Velocity-based rotation effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{ rotate, scale, opacity }}
      >
        <div className="w-full h-full rounded-full border border-apple-blue/20 animate-pulse" />
      </motion.div>

      {/* Speed lines that appear when scrolling fast */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-apple-blue/40 to-transparent"
          style={{
            left: 0,
            right: 0,
            top: `${10 + i * 12}%`,
            scaleX: useTransform(smoothVelocity, [0, 1000], [0, 1]),
            opacity: useTransform(smoothVelocity, [0, 500, 1000], [0, 0.5, 1])
          }}
        />
      ))}
    </div>
  )
}


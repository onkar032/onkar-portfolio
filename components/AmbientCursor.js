import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AmbientCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over interactive elements
      const target = e.target
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          width: 500,
          height: 500,
        }}
        animate={{
          opacity: isHovering ? 0.15 : 0.08,
          scale: isHovering ? 1.2 : 1,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-apple-blue via-blue-500 to-transparent blur-3xl" />
      </motion.div>

      {/* Small spotlight */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block mix-blend-screen"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
        }}
        animate={{
          opacity: isHovering ? 0.2 : 0.1,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-white via-blue-100 to-transparent blur-2xl" />
      </motion.div>
    </>
  )
}


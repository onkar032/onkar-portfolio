import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering interactive elements
      const target = e.target
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Subtle cursor ring - only shows on hover */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          width: 32,
          height: 32,
        }}
        animate={{
          scale: isHovering ? 1.5 : 0,
          opacity: isHovering ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="w-full h-full border border-apple-blue rounded-full" />
      </motion.div>

      {/* Small trailing dot - subtle shadow effect */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          width: 4,
          height: 4,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full bg-apple-blue rounded-full opacity-40" />
      </motion.div>
    </>
  )
}


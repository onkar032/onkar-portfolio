import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function BackgroundEffects() {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Don't render anything until mounted to avoid hydration errors
  if (!isMounted) {
    return null
  }

  // Mobile: Minimal static background
  if (isMobile) {
    const mobileOrbs = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      size: 8 + i * 4,
      initialX: 10 + i * 25,
      initialY: 15 + (i % 3) * 30,
    }))
    
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Static dot pattern - no animation on mobile */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{ 
            backgroundImage: `radial-gradient(circle, rgba(107, 114, 128, 0.4) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Minimal orbs - very subtle */}
        {mobileOrbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.initialX}%`,
              top: `${orb.initialY}%`,
              background: 'radial-gradient(circle, rgba(107, 114, 128, 0.15) 0%, transparent 100%)',
              opacity: 0.3,
            }}
          />
        ))}

        {/* Single static gradient - no blur on mobile */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ 
            background: 'radial-gradient(circle, rgba(107, 114, 128, 1) 0%, transparent 70%)'
          }}
        />
      </div>
    )
  }

  // Desktop: Full animations
  const desktopOrbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 8 + i * 4,
    initialX: 10 + i * 25,
    initialY: 15 + (i % 3) * 30,
    duration: 4 + i * 0.5,
    delay: i * 0.2,
  }))
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated dot matrix pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{ 
          backgroundImage: `radial-gradient(circle, rgba(107, 114, 128, 0.5) 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          willChange: 'background-position',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating orbs - reduced count */}
      {desktopOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.initialX}%`,
            top: `${orb.initialY}%`,
            background: 'radial-gradient(circle, rgba(107, 114, 128, 0.4) 0%, rgba(156, 163, 175, 0.2) 70%, transparent 100%)',
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25],
            x: [0, orb.id % 2 === 0 ? 20 : -20, 0],
            y: [0, orb.id % 3 === 0 ? -15 : 15, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Single gradient orb - reduced blur */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[80px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(107, 114, 128, 0.08) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}


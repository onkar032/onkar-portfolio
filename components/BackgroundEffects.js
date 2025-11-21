import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Smooth mouse tracking with reduced sensitivity
      setMousePosition({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate fewer, more elegant floating particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 8,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Premium Mesh Gradient Background - More organic movement */}
      <div className="absolute inset-0">
        {/* Main gradient orb - Interactive with mouse */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 113, 227, 0.5) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)',
            left: `${mousePosition.x * 100 - 500}px`,
            top: `${mousePosition.y * 100 - 500}px`,
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary gradient - flowing movement */}
        <motion.div
          className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.25, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Tertiary gradient - creates depth */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-[900px] h-[900px] rounded-full opacity-12 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Accent gradient - adds sophistication */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-[90px]"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Sophisticated Floating Elements - Mixed shapes */}
      {particles.map((particle) => {
        const isCircle = particle.shape === 'circle'
        const isSquare = particle.shape === 'square'
        
        return (
          <motion.div
            key={particle.id}
            className={`absolute backdrop-blur-sm border border-apple-blue/8 ${
              isCircle ? 'rounded-full' : isSquare ? 'rounded-2xl' : 'rounded-lg'
            }`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              background: isCircle 
                ? 'radial-gradient(circle, rgba(0, 113, 227, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)'
                : 'linear-gradient(135deg, rgba(0, 113, 227, 0.06) 0%, rgba(99, 102, 241, 0.03) 100%)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
              rotate: [0, particle.id % 2 === 0 ? 360 : -360],
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        )
      })}

      {/* Premium Dotted Pattern - More subtle */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 113, 227, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Organic Noise Texture - Adds premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Ambient Light Lines - Apple-style */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 113, 227, 0)" />
            <stop offset="50%" stopColor="rgba(0, 113, 227, 0.4)" />
            <stop offset="100%" stopColor="rgba(0, 113, 227, 0)" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="25%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          animate={{
            y1: ["20%", "25%", "20%"],
            y2: ["25%", "30%", "25%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="75%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          animate={{
            y1: ["70%", "75%", "70%"],
            y2: ["75%", "80%", "75%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </svg>
    </div>
  )
}


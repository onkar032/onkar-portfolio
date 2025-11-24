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

  // Generate subtle floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 30,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 40 + 35,
    delay: Math.random() * 10,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Grey Mesh Gradient Background */}
      <div className="absolute inset-0">
        {/* Main gradient orb - Grey - Interactive with mouse */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-5 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(107, 114, 128, 0.05) 0%, rgba(156, 163, 175, 0.03) 40%, transparent 70%)',
            left: `${mousePosition.x * 50 - 500}px`,
            top: `${mousePosition.y * 50 - 500}px`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary gradient - Light Grey - flowing movement */}
        <motion.div
          className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full opacity-4 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(156, 163, 175, 0.05) 0%, rgba(209, 213, 219, 0.03) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Tertiary gradient - Medium Grey - creates depth */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-[900px] h-[900px] rounded-full opacity-4 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(75, 85, 99, 0.05) 0%, rgba(107, 114, 128, 0.03) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "easeInOut"
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
            className={`absolute backdrop-blur-sm border ${
              'border-gray-400/12'
            } ${
              isCircle ? 'rounded-full' : isSquare ? 'rounded-2xl' : 'rounded-lg'
            }`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              background: isCircle 
                ? 'radial-gradient(circle, rgba(107, 114, 128, 0.06) 0%, rgba(156, 163, 175, 0.03) 50%, transparent 100%)'
                : 'linear-gradient(135deg, rgba(75, 85, 99, 0.05) 0%, rgba(107, 114, 128, 0.03) 100%)',
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, particle.id % 2 === 0 ? 15 : -15, 0],
              rotate: [0, particle.id % 2 === 0 ? 120 : -120],
              opacity: [0.06, 0.15, 0.06],
              scale: [1, 1.08, 1],
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

      {/* Subtle Architect Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
        }}
      />
      
      {/* Subtle accent dots at grid intersections */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(107, 114, 128, 0.4) 2px, transparent 2px)`,
          backgroundSize: '45px 45px',
        }}
      />

      {/* Organic Noise Texture - Adds premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle Ambient Light Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(156, 163, 175, 0)" />
            <stop offset="50%" stopColor="rgba(156, 163, 175, 0.3)" />
            <stop offset="100%" stopColor="rgba(156, 163, 175, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(107, 114, 128, 0)" />
            <stop offset="50%" stopColor="rgba(107, 114, 128, 0.3)" />
            <stop offset="100%" stopColor="rgba(107, 114, 128, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(75, 85, 99, 0)" />
            <stop offset="50%" stopColor="rgba(75, 85, 99, 0.3)" />
            <stop offset="100%" stopColor="rgba(75, 85, 99, 0)" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="25%"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          animate={{
            y1: ["20%", "23%", "20%"],
            y2: ["25%", "28%", "25%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="75%"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          animate={{
            y1: ["70%", "73%", "70%"],
            y2: ["75%", "78%", "75%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        <motion.line
          x1="0%"
          y1="45%"
          x2="100%"
          y2="50%"
          stroke="url(#lineGradient3)"
          strokeWidth="1.5"
          animate={{
            y1: ["45%", "48%", "45%"],
            y2: ["50%", "53%", "50%"],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </svg>
    </div>
  )
}


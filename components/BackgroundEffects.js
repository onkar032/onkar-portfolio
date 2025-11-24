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
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 30 + 25,
    delay: Math.random() * 8,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Multi-Color Mesh Gradient Background */}
      <div className="absolute inset-0">
        {/* Main gradient orb - Pink/Purple - Interactive with mouse */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-8 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.08) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)',
            left: `${mousePosition.x * 80 - 500}px`,
            top: `${mousePosition.y * 80 - 500}px`,
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary gradient - Cyan/Teal - flowing movement */}
        <motion.div
          className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full opacity-7 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Tertiary gradient - Indigo/Purple - creates depth */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-[900px] h-[900px] rounded-full opacity-6 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 40,
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
            className={`absolute backdrop-blur-sm border-2 ${
              particle.id % 4 === 0 ? 'border-pink-400/20' :
              particle.id % 4 === 1 ? 'border-purple-400/20' :
              particle.id % 4 === 2 ? 'border-cyan-400/20' : 'border-indigo-400/20'
            } ${
              isCircle ? 'rounded-full' : isSquare ? 'rounded-2xl' : 'rounded-lg'
            }`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            background: isCircle 
              ? (particle.id % 4 === 0 ? 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0.06) 50%, transparent 100%)' :
                 particle.id % 4 === 1 ? 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 50%, transparent 100%)' :
                 particle.id % 4 === 2 ? 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 100%)' :
                 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 100%)')
              : (particle.id % 4 === 0 ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.10) 0%, rgba(168, 85, 247, 0.05) 100%)' :
                 particle.id % 4 === 1 ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.10) 0%, rgba(99, 102, 241, 0.05) 100%)' :
                 particle.id % 4 === 2 ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.10) 0%, rgba(6, 182, 212, 0.05) 100%)' :
                 'linear-gradient(135deg, rgba(99, 102, 241, 0.10) 0%, rgba(168, 85, 247, 0.05) 100%)'),
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
              rotate: [0, particle.id % 2 === 0 ? 180 : -180],
              opacity: [0.1, 0.25, 0.1],
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

      {/* Subtle Architect Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.3) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '45px 45px',
        }}
      />
      
      {/* Subtle accent dots at grid intersections */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(236, 72, 153, 0.5) 2.5px, transparent 2.5px)`,
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
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0)" />
            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.4)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
            <stop offset="50%" stopColor="rgba(14, 165, 233, 0.4)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="25%"
          stroke="url(#lineGradient1)"
          strokeWidth="3"
          animate={{
            y1: ["20%", "25%", "20%"],
            y2: ["25%", "30%", "25%"],
          }}
          transition={{
            duration: 12,
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
          strokeWidth="3"
          animate={{
            y1: ["70%", "75%", "70%"],
            y2: ["75%", "80%", "75%"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.line
          x1="0%"
          y1="45%"
          x2="100%"
          y2="50%"
          stroke="url(#lineGradient3)"
          strokeWidth="2.5"
          animate={{
            y1: ["45%", "50%", "45%"],
            y2: ["50%", "55%", "50%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </svg>
    </div>
  )
}


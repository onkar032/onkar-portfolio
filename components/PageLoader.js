import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress with smooth acceleration
    const duration = 1800
    const steps = 50
    const stepDuration = duration / steps
    
    let currentStep = 0
    const interval = setInterval(() => {
      currentStep += 1
      // Smooth acceleration curve
      const easedProgress = Math.min(100, (currentStep / steps) * 100 * 1.1)
      setProgress(Math.floor(easedProgress))
      
      if (currentStep >= steps) {
        clearInterval(interval)
        setProgress(100)
        setTimeout(() => setLoading(false), 400)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="text-center relative">
            {/* Animated AI Brain Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                duration: 0.8
              }}
              className="mb-8 relative"
            >
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(0, 113, 227, 0)',
                    '0 0 0 20px rgba(0, 113, 227, 0.1)',
                    '0 0 0 40px rgba(0, 113, 227, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* Main Icon Container */}
              <motion.div
                className="w-24 h-24 mx-auto bg-gradient-to-br from-apple-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* AI Brain Icon */}
                <svg 
                  className="w-12 h-12 text-white relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Loading Text with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-semibold text-apple-text mb-2">
                Loading
              </h2>
              <p className="text-sm text-apple-subtext">
                Preparing your experience
              </p>
            </motion.div>

            {/* Premium Progress Bar with Percentage */}
            <div className="w-80 max-w-md mx-auto">
              {/* Percentage Counter */}
              <motion.div
                className="text-right mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span 
                  className="text-3xl font-bold bg-gradient-to-r from-apple-blue to-blue-600 bg-clip-text text-transparent"
                  key={progress}
                  initial={{ scale: 1.2, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.span>
              </motion.div>

              {/* Progress Bar Track */}
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                {/* Animated Background Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Progress Fill */}
                <motion.div
                  className="absolute inset-0 h-full bg-gradient-to-r from-apple-blue via-blue-500 to-blue-600 rounded-full shadow-lg"
                  initial={{ width: '0%', opacity: 0 }}
                  animate={{ 
                    width: `${progress}%`,
                    opacity: 1,
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(0, 113, 227, 0.5)'
                  }}
                />
                
                {/* Glow effect at progress head */}
                <motion.div
                  className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > 5 ? 1 : 0 }}
                  style={{
                    left: `${Math.max(0, progress - 10)}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Premium Background Effects */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-apple-blue/10 to-purple-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}


import { motion } from 'framer-motion'

export default function GradientText({ children, className = '', animate = true }) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 ${className}`}
      animate={animate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      } : {}}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </motion.span>
  )
}


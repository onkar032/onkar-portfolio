import { motion } from 'framer-motion'

export default function GradientText({ children, className = '', animate = true }) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-apple-blue via-blue-500 to-purple-600 ${className}`}
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


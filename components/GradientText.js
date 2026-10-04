import { motion } from 'framer-motion'

export default function GradientText({ children, className = '', animate = true }) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-indigo ${className}`}
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


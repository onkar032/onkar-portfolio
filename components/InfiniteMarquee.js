import { motion } from 'framer-motion'

export default function InfiniteMarquee({ items, direction = 'left', speed = 50 }) {
  const duplicatedItems = [...items, ...items, ...items]
  
  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-transparent via-apple-lightgray/50 to-transparent">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={index}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm"
            whileHover={{
              scale: 1.1,
              backgroundColor: '#0071e3',
              color: '#ffffff',
              borderColor: '#0071e3',
              boxShadow: '0 10px 30px rgba(0, 113, 227, 0.3)',
            }}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-medium text-sm">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}


import { motion, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString() + suffix
        }
      },
    })

    return () => controls.stop()
  }, [isInView, value, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function StatsCounter() {
  const stats = [
    { value: 10, suffix: '+', label: 'Years Delivering AI, Data & Cloud Solutions' },
    { value: 40, suffix: '+', label: 'Enterprise AI & Data Transformation Programs Delivered' },
    { value: 15, suffix: '+', label: 'AI, ML & LLM Workflows Shipped Into Production' },
    { value: 500, suffix: 'K+', label: 'Users Impacted Through AI-Driven Workflows' },
    { value: 1, suffix: 'B+', label: 'Records Processed Across Data Platforms & Real-Time Pipelines' },
  ]

  return (
    <motion.div
      className="py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-4xl md:text-5xl font-semibold text-apple-black mb-2 tracking-tight tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-apple-subtext font-medium leading-snug max-w-[16ch] mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { useTilt } from '../hooks/useTilt'

function SkillCard({ category, skills, index }) {
  const { ref, style } = useTilt()
  
  return (
    <motion.div
      ref={ref}
      style={style}
      className="bg-white rounded-2xl p-6 border border-gray-200 overflow-hidden relative group"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 40px rgba(0, 113, 227, 0.15)",
        borderColor: "#0071e3",
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-apple-text mb-4 flex items-center gap-3">
          <motion.span 
            className="w-10 h-10 bg-apple-blue rounded-xl flex items-center justify-center text-white text-base font-bold shadow-lg"
            whileHover={{ 
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.5 }
            }}
          >
            {category[0]}
          </motion.span>
          {category}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-3 py-1.5 bg-apple-lightgray border border-gray-200 rounded-full text-xs text-apple-text font-medium cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "#0071e3",
                color: "#ffffff",
                borderColor: "#0071e3",
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills({ data }) {
  return (
    <section id="skills" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-apple-text mb-3 text-center tracking-tight">Skills & Technologies</h2>
          <div className="w-12 h-0.5 bg-apple-blue mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(data).map(([category, skills], index) => (
              <SkillCard 
                key={category}
                category={category}
                skills={skills}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



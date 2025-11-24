import { motion } from 'framer-motion'
import GradientText from './GradientText'

const education = [
  {
    degree: 'M.Tech – Bioinformatics',
    institution: 'Motilal Nehru National Institute of Technology (NIT Allahabad)',
    duration: '2014 – 2016'
  },
  {
    degree: 'B.Tech – Bioinformatics',
    institution: 'SHIATS, Allahabad',
    duration: '2009 – 2013'
  }
]

export default function Education() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight">
          <GradientText>Education</GradientText>
        </h2>
        <div className="w-12 h-0.5 bg-apple-blue mb-12"></div>
      </motion.div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-apple-blue via-blue-400 to-apple-blue/30" />
        
        {/* Timeline Items */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 group"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-apple-blue shadow-lg transform -translate-x-[5px]"
                whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(0, 113, 227, 0.6)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              
              {/* Hover Glow Effect */}
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-apple-blue opacity-0 group-hover:opacity-50 blur-md transform -translate-x-[5px] transition-opacity duration-300" />
              
              {/* Content */}
              <div className="space-y-1">
                <h4 className="font-bold text-lg text-gray-900 group-hover:text-apple-blue transition-colors duration-200">
                  {edu.degree}
                </h4>
                <p className="text-gray-700 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {edu.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


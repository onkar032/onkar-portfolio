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
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {/* Timeline Items */}
        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-apple-blue rounded-full -translate-x-[5px] border-4 border-white shadow-sm"></div>
              
              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-apple-text mb-1 leading-tight">{edu.degree}</h3>
                <p className="text-sm text-apple-blue font-medium mb-1">{edu.institution}</p>
                <span className="text-xs text-apple-subtext">
                  {edu.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


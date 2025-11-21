import { motion } from 'framer-motion'
import { useTilt } from '../hooks/useTilt'
import GradientText from './GradientText'
import { ProjectsBackground } from './SectionBackgrounds'

function ProjectCard({ project, index }) {
  const { ref, style } = useTilt()
  
  // Beautiful gradient combinations for each project
  const gradients = [
    "from-indigo-500 via-purple-500 to-pink-500", // Purple-Pink
    "from-cyan-500 via-blue-500 to-indigo-600", // Cyan-Blue
    "from-emerald-500 via-teal-500 to-cyan-600", // Green-Teal
    "from-orange-500 via-red-500 to-pink-600", // Orange-Red
    "from-violet-500 via-purple-600 to-indigo-700", // Deep Purple
    "from-amber-500 via-orange-500 to-red-600", // Warm Sunset
  ]
  
  const gradient = gradients[index % gradients.length]
  
  return (
    <motion.div
      ref={ref}
      style={style}
      className="bg-white rounded-3xl overflow-hidden group relative border border-gray-100"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Project Header */}
      <motion.div 
        className={`h-48 bg-gradient-to-br ${gradient} p-8 flex items-center justify-center relative overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="text-center relative z-10">
          <motion.div 
            className="text-6xl mb-2"
            whileHover={{ 
              scale: 1.2, 
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            🚀
          </motion.div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        </div>
      </motion.div>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-apple-subtext mb-4 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-apple-lightgray border border-gray-200 rounded-full text-xs font-medium text-apple-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "#0071e3",
                color: "#ffffff",
                borderColor: "#0071e3",
                transition: { duration: 0.2 }
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight, i) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-2 text-sm text-apple-subtext"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.05 }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <motion.svg 
                className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                whileHover={{ 
                  scale: 1.3,
                  rotate: 360,
                  transition: { duration: 0.4 }
                }}
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </motion.svg>
              {highlight}
            </motion.li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-apple-text text-white py-2.5 px-4 rounded-xl text-center font-medium text-sm"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "#0071e3",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              View Code
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-apple-blue text-white py-2.5 px-4 rounded-xl text-center font-medium text-sm"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "#0051a8",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-20 px-4 bg-apple-lightgray/50 backdrop-blur-sm relative overflow-hidden">
      <ProjectsBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-center tracking-tight">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <div className="w-12 h-0.5 bg-apple-blue mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



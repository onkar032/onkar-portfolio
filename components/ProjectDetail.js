import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectDetail({ project, index }) {
  const [activeTab, setActiveTab] = useState('overview')
  
  const gradients = [
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-cyan-500 via-blue-500 to-indigo-600",
    "from-emerald-500 via-teal-500 to-cyan-600",
  ]
  
  const gradient = gradients[index % gradients.length]
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'business', label: 'Business Context', icon: '🎯' },
    { id: 'solution', label: 'Solution', icon: '⚡' },
    { id: 'technical', label: 'Technical Architecture', icon: '🏗️' },
    { id: 'impact', label: 'Impact & Outcomes', icon: '📈' },
  ]
  
  return (
    <motion.div
      className="mb-16 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Hero Header with Gradient */}
      <motion.div 
        className={`relative h-64 bg-gradient-to-br ${gradient} overflow-hidden`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          <motion.div 
            className="text-7xl mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {project.title}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl">
            {project.description}
          </p>
        </div>
      </motion.div>
      
      {/* Tabs Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 overflow-x-auto">
        <div className="flex min-w-max px-6">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-semibold transition-all relative whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-apple-blue'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
              
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-apple-blue"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-sm font-medium text-blue-900"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: '#0071e3', color: '#ffffff' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Key Highlights */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.03, borderColor: '#0071e3' }}
                    >
                      <svg className="w-6 h-6 text-apple-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: '#0071e3' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-apple-blue text-white rounded-xl font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: '#0051a8' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          )}
          
          {activeTab === 'business' && project.businessContext && (
            <div className="prose prose-blue max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Context & Objectives</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {project.businessContext.split('\n\n').map((para, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {para}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'solution' && project.solutionOverview && (
            <div className="prose prose-blue max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution Overview</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {project.solutionOverview.split('\n\n').map((para, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {para}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'technical' && project.technicalArchitecture && (
            <div className="prose prose-blue max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Architecture & Implementation</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {project.technicalArchitecture.split('\n\n').map((para, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {para}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'impact' && project.impact && (
            <div className="prose prose-blue max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact & Outcomes</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {project.impact.split('\n\n').map((para, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {para}
                      </motion.p>
                    ))}
                  </div>
                </div>
                
                {project.whyItMatters && (
                  <motion.div
                    className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Why This Project Matters</h4>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      {project.whyItMatters.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}


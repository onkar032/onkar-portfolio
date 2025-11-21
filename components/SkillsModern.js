import { motion } from 'framer-motion'
import { useState } from 'react'
import GradientText from './GradientText'
import { SkillsBackground } from './SectionBackgrounds'

export default function SkillsModern({ data }) {
  const [activeCategory, setActiveCategory] = useState(Object.keys(data)[0])

  const categories = Object.keys(data)
  
  // Define special styling for featured categories
  const featuredCategories = {
    "GenAI & LLMs": { 
      icon: "🤖", 
      gradient: "from-blue-500 to-purple-600",
      size: "large"
    },
    "AI/ML": { 
      icon: "🧠", 
      gradient: "from-purple-500 to-pink-600",
      size: "large"
    },
    "Data Engineering": { 
      icon: "🔄", 
      gradient: "from-cyan-500 to-blue-600",
      size: "medium"
    },
    "Cloud & Architecture": { 
      icon: "☁️", 
      gradient: "from-indigo-500 to-blue-600",
      size: "medium"
    },
    "Enterprise Architecture": { 
      icon: "🏗️", 
      gradient: "from-blue-600 to-indigo-700",
      size: "medium"
    },
    "Salesforce Platform": { 
      icon: "⚡", 
      gradient: "from-blue-400 to-cyan-500",
      size: "small"
    },
    "Dashboards & BI": { 
      icon: "📊", 
      gradient: "from-green-500 to-emerald-600",
      size: "small"
    },
    "Security & Governance": { 
      icon: "🔒", 
      gradient: "from-red-500 to-pink-600",
      size: "small"
    },
    "Leadership & Strategy": { 
      icon: "🎯", 
      gradient: "from-orange-500 to-red-600",
      size: "medium"
    }
  }

  return (
    <section id="skills" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      <SkillsBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-center tracking-tight">
            <GradientText>Skills & Expertise</GradientText>
          </h2>
          <div className="w-12 h-0.5 bg-apple-blue mx-auto mb-4"></div>
          <p className="text-center text-apple-subtext mb-16 max-w-2xl mx-auto">
            Comprehensive technical and leadership capabilities spanning AI, data, cloud, and enterprise architecture
          </p>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-fr">
            {categories.map((category, index) => {
              const config = featuredCategories[category]
              const skills = data[category]
              
              // Define grid spans based on size
              const gridSpan = config.size === 'large' 
                ? 'md:col-span-3 lg:col-span-4' 
                : config.size === 'medium'
                ? 'md:col-span-3 lg:col-span-4'
                : 'md:col-span-2 lg:col-span-4'

              return (
                <motion.div
                  key={category}
                  className={`${gridSpan} group`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                >
                  <motion.div
                    className="h-full bg-white rounded-3xl p-6 border border-gray-200 cursor-pointer overflow-hidden relative"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0, 113, 227, 0.15)",
                      borderColor: "#0071e3",
                    }}
                    onClick={() => setActiveCategory(category)}
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon & Title */}
                      <div className="mb-4">
                        <motion.div 
                          className="text-5xl mb-3"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {config.icon}
                        </motion.div>
                        <h3 className="text-base font-semibold text-apple-text group-hover:text-apple-blue transition-colors leading-tight">
                          {category}
                        </h3>
                      </div>

                      {/* Skills Count Badge */}
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 group-hover:bg-apple-blue/10 rounded-full transition-colors">
                          <span className="text-xs font-medium text-apple-subtext group-hover:text-apple-blue">
                            {skills.length} skills
                          </span>
                          <motion.svg 
                            className="w-3 h-3 text-apple-subtext group-hover:text-apple-blue"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ x: 3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </div>
                      </div>

                      {/* Hover Overlay with Skills */}
                      <motion.div
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-3xl">{config.icon}</span>
                            <h4 className="text-sm font-semibold text-apple-blue">
                              {category}
                            </h4>
                          </div>
                          <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="flex flex-wrap gap-2">
                              {skills.map((skill, i) => (
                                <motion.span
                                  key={i}
                                  className="px-2 py-1 bg-gradient-to-r from-apple-blue/10 to-purple-500/10 text-apple-text rounded-full text-xs font-medium border border-apple-blue/20"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.03 }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Selected Category Detail Panel */}
          <motion.div
            className="mt-12 p-8 bg-gradient-to-br from-apple-lightgray/50 to-white rounded-3xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeCategory}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{featuredCategories[activeCategory].icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-apple-text mb-1">{activeCategory}</h3>
                <p className="text-apple-subtext text-sm">{data[activeCategory].length} specialized skills</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {data[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-apple-blue hover:bg-apple-blue hover:text-white transition-all cursor-default shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0071e3;
          border-radius: 2px;
        }
      `}</style>
    </section>
  )
}


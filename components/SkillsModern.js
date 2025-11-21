import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import GradientText from './GradientText'
import { SkillsBackground } from './SectionBackgrounds'

export default function SkillsModern({ data }) {
  const categories = Object.keys(data)
  const [openCategories, setOpenCategories] = useState({
    [categories[0]]: true, // First category open by default
    [categories[1]]: true, // Second category open by default
  })

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }
  
  // Define special styling for featured categories
  const featuredCategories = {
    "GenAI & LLMs": { 
      icon: "🤖", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "AI/ML": { 
      icon: "🧠", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "Data Engineering": { 
      icon: "🔄", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "Cloud & Architecture": { 
      icon: "☁️", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "Enterprise Architecture": { 
      icon: "🏗️", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "Salesforce Platform": { 
      icon: "⚡", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "Dashboards & BI": { 
      icon: "📊", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "Security & Governance": { 
      icon: "🔒", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
    },
    "Leadership & Strategy": { 
      icon: "🎯", 
      gradient: "from-apple-blue/20 to-apple-blue/10"
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

          {/* Collapsible Accordion Design */}
          <div className="space-y-4">
            {categories.map((category, catIndex) => {
              const config = featuredCategories[category]
              const skills = data[category]
              const isOpen = openCategories[category]

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.05 }}
                  className="group"
                >
                  <motion.div
                    className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-apple-blue shadow-lg' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    whileHover={{ y: isOpen ? 0 : -2 }}
                  >
                    {/* Category Header - Clickable */}
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full flex items-center gap-4 p-6 cursor-pointer group/header transition-colors hover:bg-gray-50"
                    >
                      {/* Icon Box */}
                      <motion.div 
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${config.gradient} border flex items-center justify-center flex-shrink-0 transition-all ${
                          isOpen ? 'border-apple-blue' : 'border-gray-200'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-2xl">{config.icon}</span>
                      </motion.div>

                      {/* Title & Count */}
                      <div className="flex-1 text-left">
                        <h3 className={`text-xl font-semibold transition-colors ${
                          isOpen ? 'text-apple-blue' : 'text-apple-text group-hover/header:text-apple-blue'
                        }`}>
                          {category}
                        </h3>
                        <p className="text-sm text-apple-subtext mt-0.5">
                          {skills.length} specialized {skills.length === 1 ? 'skill' : 'skills'}
                        </p>
                      </div>

                      {/* Chevron Icon */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        <svg 
                          className={`w-6 h-6 transition-colors ${
                            isOpen ? 'text-apple-blue' : 'text-gray-400 group-hover/header:text-apple-blue'
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>

                    {/* Skills Grid - Collapsible */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="flex flex-wrap gap-2.5">
                              {skills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill}
                                  className="px-4 py-2 bg-gradient-to-r from-apple-lightgray to-gray-50 rounded-lg border border-gray-200 hover:border-apple-blue hover:shadow-md transition-all duration-200 group/skill cursor-default"
                                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{ 
                                    delay: skillIndex * 0.02,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                  whileHover={{ 
                                    y: -3,
                                    scale: 1.05,
                                    backgroundColor: "#0071e3",
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  <span className="text-sm font-medium text-apple-text group-hover/skill:text-white transition-colors">
                                    {skill}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
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


import { motion } from 'framer-motion'
import GradientText from './GradientText'
import { SkillsBackground } from './SectionBackgrounds'

export default function SkillsModern({ data }) {
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

          {/* Clean Grid Layout - All Visible, No Clicks */}
          <div className="space-y-12">
            {categories.map((category, catIndex) => {
              const config = featuredCategories[category]
              const skills = data[category]

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-3xl">{config.icon}</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-apple-text mb-1">
                        {category}
                      </h3>
                      <p className="text-sm text-apple-subtext">
                        {skills.length} specialized {skills.length === 1 ? 'skill' : 'skills'}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className={`px-4 py-2.5 bg-white rounded-xl border border-gray-200 hover:border-apple-blue hover:shadow-lg transition-all duration-300 group/skill`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: catIndex * 0.1 + skillIndex * 0.03,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          y: -4,
                          scale: 1.05,
                          backgroundColor: "#0071e3",
                          color: "#ffffff",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="text-sm font-medium text-apple-text group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  {catIndex < categories.length - 1 && (
                    <motion.div
                      className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: catIndex * 0.1 + 0.3 }}
                    />
                  )}
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


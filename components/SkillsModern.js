import { motion } from 'framer-motion'
import GradientText from './GradientText'
import { SkillsBackground } from './SectionBackgrounds'

export default function SkillsModern({ data }) {
  const categories = Object.keys(data)
  
  // Define styling for categories
  const categoryConfig = {
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

          {/* Beautiful Grid Layout - Cards Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, catIndex) => {
              const config = categoryConfig[category]
              const skills = data[category]

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.08, type: "spring", stiffness: 100 }}
                  className="group"
                >
                  <motion.div
                    className="h-full bg-white rounded-2xl p-6 border border-gray-200 hover:border-apple-blue transition-all duration-300 flex flex-col"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0, 113, 227, 0.12)",
                    }}
                  >
                    {/* Header with Icon */}
                    <div className="mb-5">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} border border-gray-200 flex items-center justify-center mb-4 group-hover:border-apple-blue transition-colors`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-2xl">{config.icon}</span>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-apple-text group-hover:text-apple-blue transition-colors mb-1">
                        {category}
                      </h3>
                      <p className="text-xs text-apple-subtext">
                        {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
                      </p>
                    </div>

                    {/* Skills as clean list */}
                    <div className="flex-1 space-y-2">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="flex items-center gap-2 group/skill"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.08 + skillIndex * 0.02 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-apple-blue/40 group-hover/skill:bg-apple-blue transition-colors flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-sm text-apple-text group-hover/skill:text-apple-blue transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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


import { motion } from 'framer-motion'
import GradientText from './GradientText'
import { AboutBackground } from './SectionBackgrounds'

export default function About({ data }) {
  return (
    <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
      <AboutBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-center tracking-tight">
            <GradientText>About Me</GradientText>
          </h2>
          <div className="w-12 h-0.5 bg-apple-blue mx-auto mb-16"></div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-apple-text leading-relaxed font-normal">
                {data.summary}
              </p>
              
              <p className="text-base md:text-lg text-apple-subtext leading-relaxed">
                {data.summary2}
              </p>
              
              <p className="text-base md:text-lg text-apple-subtext leading-relaxed">
                {data.summary3}
              </p>
            </motion.div>
          </div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {data.expertise.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-apple-blue transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 113, 227, 0.15)",
                }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-base font-semibold text-apple-text mb-1 group-hover:text-apple-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-apple-subtext">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 group hover:bg-white hover:border-apple-blue transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    x: 5,
                    boxShadow: "0 10px 30px rgba(0, 113, 227, 0.1)",
                  }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-apple-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: "#0071e3",
                    }}
                  >
                    <motion.svg 
                      className="w-4 h-4 text-apple-blue group-hover:text-white" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.div>
                  <span className="text-sm text-apple-text group-hover:text-apple-blue transition-colors duration-200 leading-snug">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



import { motion } from 'framer-motion'
import GradientText from './GradientText'
import { AboutBackground } from './SectionBackgrounds'

export default function About({ data }) {
  return (
    <section id="about" className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-center tracking-tight">
            <GradientText>About Me</GradientText>
          </h2>
          <div className="w-12 h-0.5 bg-apple-blue mx-auto mb-4"></div>
          
          {/* Subtitle */}
          <motion.p
            className="text-center text-xl text-apple-subtext mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Enterprise AI Architect • GenAI Leader • Solutions Innovator
          </motion.p>

          {/* Main Content - Card Style */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-apple-text leading-relaxed font-normal first-letter:text-5xl first-letter:font-bold first-letter:text-apple-blue first-letter:mr-3 first-letter:float-left">
                  {data.summary}
                </p>
                
                <p className="text-base md:text-lg text-apple-subtext leading-relaxed">
                  {data.summary2}
                </p>
                
                <p className="text-base md:text-lg text-apple-subtext leading-relaxed">
                  {data.summary3}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Expertise Cards - Larger, More Prominent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {data.expertise.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-apple-blue transition-all duration-300 group shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 113, 227, 0.2)",
                  scale: 1.02
                }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-apple-text mb-2 group-hover:text-apple-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-apple-subtext leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Highlights - More Prominent */}
          <div className="max-w-5xl mx-auto">
            <motion.h3
              className="text-2xl font-semibold text-apple-text mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Key Achievements
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-5">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-gray-100 group hover:border-apple-blue transition-all duration-300 shadow-md"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.7 + index * 0.08,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    x: 5,
                    y: -3,
                    boxShadow: "0 15px 40px rgba(0, 113, 227, 0.15)",
                  }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-apple-blue flex items-center justify-center flex-shrink-0 mt-0.5"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <span className="text-base text-apple-text group-hover:text-apple-blue transition-colors duration-200 leading-relaxed font-medium">
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



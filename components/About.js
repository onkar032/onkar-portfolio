import { motion } from 'framer-motion'
import GradientText from './GradientText'
import { AboutBackground } from './SectionBackgrounds'

export default function About({ data }) {
  return (
    <section id="about" className="py-24 px-4 bg-apple-lightgray/50 backdrop-blur-sm relative overflow-hidden">
      <AboutBackground />
      <div className="max-w-6xl mx-auto relative z-10">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-lg text-apple-subtext leading-relaxed mb-8">
                {data.summary}
              </p>
              
              <div className="space-y-3">
                {data.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-apple-blue flex-shrink-0 mt-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </motion.svg>
                    <span className="text-apple-text text-base group-hover:text-apple-blue transition-colors duration-200">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.5 }
              }}
            >
              <motion.div 
                className="aspect-square rounded-3xl bg-gradient-to-br from-apple-blue to-blue-600 p-1"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div 
                      className="text-7xl mb-4"
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🤖
                    </motion.div>
                    <p className="text-apple-text text-lg font-normal">
                      Passionate about building the future
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



import { motion } from 'framer-motion'
import WhatIDo from './WhatIDo'
import GradientText from './GradientText'

export default function ExperienceAndServices({ experienceData }) {
  return (
    <section id="experience" className="py-24 px-4 bg-white/50 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Experience Section - Left Side (35% on desktop) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight">
                <GradientText>Experience</GradientText>
              </h2>
              <div className="w-12 h-0.5 bg-apple-blue mb-12"></div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-10">
                  {experienceData.map((job, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 w-3 h-3 bg-apple-blue rounded-full -translate-x-[5px] border-4 border-white shadow-sm"></div>

                      <div>
                        <h3 className="text-base font-semibold text-apple-text mb-1 leading-tight">{job.position}</h3>
                        <p className="text-sm text-apple-blue font-medium mb-1">{job.company}</p>
                        <span className="text-xs text-apple-subtext">
                          {job.duration}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* What I Do Section - Right Side (65% on desktop) */}
          <div className="lg:col-span-8">
            <WhatIDo />
          </div>
        </div>
      </div>
    </section>
  )
}


import { motion } from 'framer-motion'

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-apple-text mb-3 text-center tracking-tight">Experience</h2>
          <div className="w-12 h-0.5 bg-apple-blue mx-auto mb-16"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-12">
              {data.map((job, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 bg-apple-blue rounded-full -translate-x-[5px] border-4 border-white shadow-sm"></div>

                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-apple-text mb-1">{job.position}</h3>
                      <p className="text-base text-apple-blue font-medium">{job.company}</p>
                    </div>
                    <span className="text-sm text-apple-subtext mt-1 md:mt-0 md:ml-4 whitespace-nowrap">
                      {job.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



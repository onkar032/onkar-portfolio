import { motion } from 'framer-motion'

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-20 px-4 bg-apple-lightgray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-apple-gray mb-4 text-center">Experience</h2>
          <div className="w-20 h-1 bg-apple-blue mx-auto mb-12"></div>

          <div className="space-y-8">
            {data.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-apple-gray">{job.position}</h3>
                    <p className="text-xl text-apple-blue font-semibold">{job.company}</p>
                    <p className="text-gray-500">{job.location}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-2 bg-apple-blue/10 text-apple-blue rounded-full text-sm font-semibold">
                    {job.duration}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-apple-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



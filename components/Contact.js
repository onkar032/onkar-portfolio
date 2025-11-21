import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can integrate with your email service here
    console.log('Form submitted:', formData)
    alert('Thank you! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-apple-gray mb-4 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-apple-blue mx-auto mb-6"></div>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Have a project in mind? Let's work together!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-apple-gray mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <ContactItem
                    icon={<EmailIcon />}
                    label="Email"
                    value={data.email}
                    href={`mailto:${data.email}`}
                  />
                  <ContactItem
                    icon={<PhoneIcon />}
                    label="Phone"
                    value={data.phone}
                    href={`tel:${data.phone}`}
                  />
                  <ContactItem
                    icon={<LocationIcon />}
                    label="Location"
                    value={data.location}
                  />
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold text-gray-700 mb-3">Connect with me</h4>
                <div className="flex gap-4">
                  <SocialButton href={data.github} label="GitHub" />
                  <SocialButton href={data.linkedin} label="LinkedIn" />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/20 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/20 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-apple-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-10 h-10 bg-apple-blue/10 rounded-lg flex items-center justify-center text-apple-blue flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{value}</p>
      </div>
    </div>
  )

  return href ? <a href={href}>{content}</a> : content
}

function SocialButton({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-apple-gray text-white rounded-lg hover:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.a>
  )
}

// Icons
function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}



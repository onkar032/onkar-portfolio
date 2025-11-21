import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PremiumFooter({ data }) {
  const [easterEggFound, setEasterEggFound] = useState(false)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: data.github, icon: '→' },
    { name: 'LinkedIn', url: data.linkedin, icon: '→' },
    { name: 'Email', url: `mailto:${data.email}`, icon: '✉' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-apple-gray via-gray-900 to-black text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-apple-blue rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              {data.name}
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Enterprise AI/LLM Solutions Architect building the future of intelligent systems.
            </p>
            <motion.p 
              className="text-gray-500 text-xs cursor-pointer"
              onClick={() => setEasterEggFound(!easterEggFound)}
              whileHover={{ color: '#0071e3', scale: 1.05 }}
            >
              {easterEggFound ? '🎉 You found the easter egg! Built with 💙 and countless ☕' : '© Click me...'}
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {['About', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => {
                const isPageLink = item === 'Blog' || item === 'Projects'
                const href = isPageLink ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`
                
                return (
                  <motion.li key={item}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-apple-blue transition-colors text-sm flex items-center gap-2 group"
                    >
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                    {item}
                  </a>
                </motion.li>
              )
            })}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <motion.li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-apple-blue transition-colors text-sm flex items-center gap-2 group"
                  >
                    <motion.span
                      className="text-apple-blue opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 3 }}
                    >
                      {link.icon}
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {currentYear} {data.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.span 
              className="text-xs"
              whileHover={{ scale: 1.05, color: '#0071e3' }}
            >
              Built with Next.js, Tailwind & Framer Motion
            </motion.span>
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-red-500"
            >
              ♥
            </motion.span>
          </div>
        </div>

        {/* Easter Egg Animation */}
        {easterEggFound && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], rotate: 360 }}
            transition={{ duration: 2 }}
          >
            🎉
          </motion.div>
        )}
      </div>
    </footer>
  )
}


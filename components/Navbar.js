import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-semibold text-apple-text"
            whileHover={{ scale: 1.02 }}
          >
            OD
          </motion.a>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isBlog = item === 'Blog'
              const href = isBlog ? '/blog' : `/#${item.toLowerCase()}`
              const isActive = isBlog && router.pathname.startsWith('/blog')
              
              return isBlog ? (
                <Link key={item} href={href}>
                  <motion.a
                    className={`text-sm hover:text-apple-blue transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-apple-blue font-medium' : 'text-apple-text'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                </Link>
              ) : (
                <motion.a
                  key={item}
                  href={href}
                  className="text-apple-text text-sm hover:text-apple-blue transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="bg-apple-blue text-white px-5 py-2 rounded-full text-sm hover:bg-apple-darkblue transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}



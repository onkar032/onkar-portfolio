import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navItems = ['About', 'Experience', 'Projects', 'Blog', 'Contact']
  const pageLinks = ['Projects', 'Blog'] // Items that go to separate pages

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
          {/* Logo/Brand */}
          <Link href="/">
            <motion.a
              className="flex items-center gap-2.5 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Minimal Icon */}
              <motion.div 
                className="w-9 h-9 bg-apple-blue rounded-lg flex items-center justify-center"
                whileHover={{ backgroundColor: "#0051a8" }}
                transition={{ duration: 0.2 }}
              >
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  />
                </svg>
              </motion.div>
              
              {/* Name/Brand */}
              <span className="text-lg font-semibold text-apple-text hidden sm:block">
                Onkar Dubey
              </span>
            </motion.a>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isPageLink = pageLinks.includes(item)
              const href = isPageLink ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`
              const isActive = isPageLink && router.pathname.startsWith(`/${item.toLowerCase()}`)
              
              return isPageLink ? (
                <Link key={item} href={href}>
                  <motion.a
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-apple-blue bg-apple-blue/10' 
                        : 'text-apple-text hover:text-apple-blue hover:bg-gray-50'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                </Link>
              ) : (
                <motion.a
                  key={item}
                  href={href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-apple-text hover:text-apple-blue hover:bg-gray-50 transition-all duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            })}
          </div>

          {/* CTA Button - Desktop */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-apple-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-apple-darkblue transition-all duration-200 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get in Touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-apple-text rounded-full"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-apple-text rounded-full"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-apple-text rounded-full"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl"
      >
        <motion.div
          className="flex flex-col items-center justify-center h-full space-y-8 px-8"
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              transition: { staggerChildren: 0.07, delayChildren: 0.2 }
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 }
            }
          }}
        >
          {navItems.map((item, index) => {
            const isPageLink = pageLinks.includes(item)
            const href = isPageLink ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`
            const isActive = isPageLink && router.pathname.startsWith(`/${item.toLowerCase()}`)

            return (
              <motion.div
                key={item}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { stiffness: 1000, velocity: -100 }
                    }
                  },
                  closed: {
                    y: 50,
                    opacity: 0,
                    transition: {
                      y: { stiffness: 1000 }
                    }
                  }
                }}
              >
                {isPageLink ? (
                  <Link href={href}>
                    <motion.a
                      className={`text-3xl font-semibold cursor-pointer ${
                        isActive ? 'text-apple-blue' : 'text-apple-text'
                      }`}
                      whileHover={{ scale: 1.05, color: '#0071e3' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  </Link>
                ) : (
                  <motion.a
                    href={href}
                    className="text-3xl font-semibold text-apple-text"
                    whileHover={{ scale: 1.05, color: '#0071e3' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                )}
              </motion.div>
            )
          })}

          {/* Mobile CTA Button */}
          <motion.div
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  y: { stiffness: 1000, velocity: -100 }
                }
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 }
                }
              }
            }}
          >
            <motion.a
              href="#contact"
              className="bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}



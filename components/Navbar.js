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
              const isPageLink = pageLinks.includes(item)
              const href = isPageLink ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`
              const isActive = isPageLink && router.pathname.startsWith(`/${item.toLowerCase()}`)
              
              return isPageLink ? (
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

          {/* CTA Button - Desktop */}
          <motion.a
            href="#contact"
            className="hidden md:block bg-apple-blue text-white px-5 py-2 rounded-full text-sm hover:bg-apple-darkblue transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
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



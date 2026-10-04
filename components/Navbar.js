import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navItems = ['About', 'Experience', 'Projects', 'Blog', 'Contact']
  const pageLinks = ['Projects', 'Blog']

  const hrefFor = (item) => (pageLinks.includes(item) ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`)
  const isActive = (item) => pageLinks.includes(item) && router.pathname.startsWith(`/${item.toLowerCase()}`)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" passHref legacyBehavior>
            <motion.a className="flex items-center gap-2.5 cursor-pointer group" whileTap={{ scale: 0.98 }}>
              <motion.div
                className="w-8 h-8 bg-brand-indigo rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="w-2.5 h-2.5 bg-white rotate-45 rounded-[2px]" />
              </motion.div>
              <span className="font-display text-lg font-bold tracking-tight text-brand-ink">Onkar</span>
            </motion.a>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              pageLinks.includes(item) ? (
                <Link key={item} href={hrefFor(item)} passHref legacyBehavior>
                  <a
                    className={`mono-label text-[11px] px-3.5 py-2 rounded-md transition-colors duration-200 ${
                      isActive(item) ? 'text-brand-indigo' : 'text-brand-subtext hover:text-brand-ink'
                    }`}
                  >
                    {item}
                  </a>
                </Link>
              ) : (
                <a
                  key={item}
                  href={hrefFor(item)}
                  className="mono-label text-[11px] px-3.5 py-2 rounded-md text-brand-subtext hover:text-brand-ink transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <motion.a
            href="/#contact"
            className="hidden md:inline-flex mono-label text-[11px] bg-brand-ink text-white px-5 py-2.5 rounded-lg hover:bg-brand-indigo transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Talk
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.span className="w-6 h-0.5 bg-brand-ink rounded-full" animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }} transition={{ duration: 0.3 }} />
            <motion.span className="w-6 h-0.5 bg-brand-ink rounded-full" animate={{ opacity: mobileMenuOpen ? 0 : 1 }} transition={{ duration: 0.2 }} />
            <motion.span className="w-6 h-0.5 bg-brand-ink rounded-full" animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }} transition={{ duration: 0.3 }} />
          </motion.button>
        </div>
      </div>

      {/* Mobile overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl"
      >
        <motion.div
          className="flex flex-col items-center justify-center h-full space-y-7 px-8"
          initial="closed"
          animate={mobileMenuOpen ? 'open' : 'closed'}
          variants={{
            open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
            closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
          }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item}
              variants={{
                open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
                closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
              }}
            >
              {pageLinks.includes(item) ? (
                <Link href={hrefFor(item)} passHref legacyBehavior>
                  <a
                    className={`font-display text-3xl font-bold cursor-pointer ${isActive(item) ? 'text-brand-indigo' : 'text-brand-ink'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </Link>
              ) : (
                <a
                  href={hrefFor(item)}
                  className="font-display text-3xl font-bold text-brand-ink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={{
              open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
              closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
            }}
          >
            <a
              href="/#contact"
              className="mono-label text-sm bg-brand-ink text-white px-8 py-4 rounded-lg inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}

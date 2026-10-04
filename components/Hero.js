import { motion } from 'framer-motion'
import GradientText from './GradientText'
import HeroTerminal from './HeroTerminal'

const EASE = [0.25, 0.1, 0.25, 1]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const TAGS = ['GenAI & LLMs', 'RAG Architectures', 'Multi-Agent Systems', 'Enterprise AI', 'Data Platforms']

export default function Hero({ data }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Engineered grid backdrop */}
      <div className="absolute inset-0 grid-bg mask-radial opacity-70" aria-hidden />
      <div
        className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-bl from-brand-indigo/10 via-transparent to-transparent blur-2xl"
        aria-hidden
      />

      <motion.div
        className="relative z-10 max-w-content mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-10 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div variants={item} className="flex items-center gap-3 justify-center lg:justify-start mb-6">
            <span className="h-px w-8 bg-brand-indigo" />
            <span className="eyebrow">{data.name} · AI / LLM Architect</span>
          </motion.div>

          <motion.h1 variants={item} className="text-display-2xl text-brand-ink mb-6 text-balance">
            Enterprise AI,
            <br />
            <GradientText>architected to ship.</GradientText>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lead text-brand-subtext mb-9 max-w-xl mx-auto lg:mx-0 text-pretty"
          >
            {data.tagline} I design and scale production LLM, RAG and multi-agent
            platforms for global enterprises — from strategy to resilient delivery.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-9">
            <HeroButton href="/projects" variant="primary">
              View Projects →
            </HeroButton>
            <HeroButton href="#contact" variant="secondary">
              Get in Touch
            </HeroButton>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-9">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="mono-label text-[10px] text-brand-subtext px-3 py-1.5 rounded-md border border-brand-border bg-brand-surface/60 transition-colors duration-300 hover:border-brand-indigo/50 hover:text-brand-indigo cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex gap-6 justify-center lg:justify-start">
            {[
              { href: data.github, icon: 'github', label: 'GitHub' },
              { href: data.linkedin, icon: 'linkedin', label: 'LinkedIn' },
              { href: `mailto:${data.email}`, icon: 'email', label: 'Email' },
            ].map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
          </motion.div>
        </div>

        {/* Right: animated terminal */}
        <motion.div variants={item} className="w-full">
          <HeroTerminal />
        </motion.div>
      </motion.div>
    </section>
  )
}

function HeroButton({ href, variant, children }) {
  const base =
    'mono-label text-xs px-7 py-4 rounded-lg transition-all duration-300 ease-apple inline-flex items-center justify-center'
  const styles =
    variant === 'primary'
      ? 'bg-brand-ink text-white hover:bg-brand-indigo'
      : 'bg-transparent text-brand-ink border border-brand-border hover:border-brand-indigo hover:text-brand-indigo'
  return (
    <motion.a href={href} className={`${base} ${styles}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.a>
  )
}

function SocialLink({ href, icon, label }) {
  const isMail = icon === 'email'
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  }

  return (
    <motion.a
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      className="text-brand-subtext hover:text-brand-indigo transition-colors duration-300 ease-apple"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.92 }}
      aria-label={label}
    >
      {icons[icon]}
    </motion.a>
  )
}

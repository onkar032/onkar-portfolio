import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Head from 'next/head'
import { resumeData } from '../data/resume'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import PremiumFooter from '../components/PremiumFooter'
import BackgroundEffects from '../components/BackgroundEffects'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import AmbientCursor from '../components/AmbientCursor'

export default function ProjectsPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Projects - {resumeData.personal.name}</title>
        <meta name="description" content="Featured AI and enterprise projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white relative">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Ambient Cursor Glow */}
        <AmbientCursor />
        
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        {/* Background Effects */}
        <BackgroundEffects />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          
          <main className="pt-20">
            {/* Page Header */}
            <motion.section
              className="py-16 px-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-apple-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Featured Projects
              </motion.h1>
              <motion.p
                className="text-xl text-apple-subtext max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Enterprise AI solutions and architectures that power intelligent systems at scale
              </motion.p>
            </motion.section>

            {/* Projects Section */}
            <Projects data={resumeData.projects} />
          </main>
        </div>

        <PremiumFooter data={resumeData.personal} />
      </div>
    </>
  )
}


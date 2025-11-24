import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Head from 'next/head'
import { resumeData } from '../data/resume'
import Navbar from '../components/Navbar'
import ProjectDetail from '../components/ProjectDetail'
import PremiumFooter from '../components/PremiumFooter'
import BackgroundEffects from '../components/BackgroundEffects'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import AmbientCursor from '../components/AmbientCursor'
import ContactWidget from '../components/ContactWidget'
import GradientText from '../components/GradientText'

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
        
        {/* Contact Widget */}
        <ContactWidget />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          
          <main className="pt-20">
            {/* Page Hero Header */}
            <motion.section
              className="py-20 px-4 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-apple-blue rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🚀
                </motion.div>
                
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <GradientText>Featured Projects</GradientText>
                </motion.h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-apple-subtext max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Enterprise AI solutions and architectures that power intelligent systems at scale
                </motion.p>
                
                <motion.div
                  className="mt-8 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                    <span className="text-sm font-semibold text-apple-blue">
                      {resumeData.projects.length} Projects
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                    <span className="text-sm font-semibold text-green-700">
                      Production-Ready
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-purple-50 border border-purple-200 rounded-full">
                    <span className="text-sm font-semibold text-purple-700">
                      Enterprise-Scale
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Projects Detail Section */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
              {resumeData.projects.map((project, index) => (
                <ProjectDetail key={index} project={project} index={index} />
              ))}
            </section>
          </main>
        </div>

        <PremiumFooter data={resumeData.personal} />
      </div>
    </>
  )
}


import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { resumeData } from '../data/resume'
import ContactWidget from '../components/ContactWidget'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ExperienceAndServices from '../components/ExperienceAndServices'
import Contact from '../components/Contact'
import BackgroundEffects from '../components/BackgroundEffects'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import StatsCounter from '../components/StatsCounter'
import ParallaxScroll from '../components/ParallaxScroll'
import ScrollVelocity from '../components/ScrollVelocity'
import { MorphingBackground } from '../components/SectionTransitions'
import { SpotlightEffect } from '../components/ScrollRevealText'
import AmbientCursor from '../components/AmbientCursor'
import InfiniteMarquee from '../components/InfiniteMarquee'
import PremiumFooter from '../components/PremiumFooter'

export default function Home() {

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>{resumeData.personal.name} - Portfolio</title>
        <meta name="description" content={resumeData.personal.tagline} />
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
        
        {/* Parallax Scroll Effects */}
        <ParallaxScroll />
        
        {/* Scroll Velocity Effects */}
        <ScrollVelocity />
        
        {/* Morphing Wave Background */}
        <MorphingBackground />
        
        {/* Spotlight Effect */}
        <SpotlightEffect />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <Hero data={resumeData.personal} />
            
            {/* Stats & Tech Stack Section - Grey Background */}
            <section className="bg-gray-50 py-8">
              <StatsCounter />
              
              {/* Infinite Marquee - Tech Stack */}
              <InfiniteMarquee 
                items={[
                  { name: 'LLMs & GenAI', icon: '🤖' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'RAG Systems', icon: '📚' },
                  { name: 'AWS', icon: '☁️' },
                  { name: 'Vector DBs', icon: '🎯' },
                  { name: 'LangChain', icon: '🔗' },
                  { name: 'TensorFlow', icon: '🧠' },
                  { name: 'Docker', icon: '🐳' },
                  { name: 'Kubernetes', icon: '⚓' },
                  { name: 'Salesforce', icon: '☁️' },
                ]}
                speed={40}
              />
            </section>
            
            <About data={resumeData.about} />
            <ExperienceAndServices experienceData={resumeData.experience} />
            <Contact data={resumeData.personal} />
          </main>
        </div>

        <PremiumFooter data={resumeData.personal} />

      {/* Contact Widget - Hybrid AI Chat + WhatsApp */}
      <ContactWidget />
      </div>
    </>
  )
}



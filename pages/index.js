import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { resumeData } from '../data/resume'
import ChatWidget from '../components/ChatWidget'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ExperienceAndServices from '../components/ExperienceAndServices'
import SkillsModern from '../components/SkillsModern'
import Projects from '../components/Projects'
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

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

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
            
            <About data={resumeData.about} />
            <ExperienceAndServices experienceData={resumeData.experience} />
            <SkillsModern data={resumeData.skills} />
            <Projects data={resumeData.projects} />
            <Contact data={resumeData.personal} />
          </main>
        </div>

        <footer className="bg-apple-gray text-white py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </footer>

        {/* Chat Widget */}
        <ChatWidget isOpen={chatOpen} setIsOpen={setChatOpen} />
      </div>
    </>
  )
}



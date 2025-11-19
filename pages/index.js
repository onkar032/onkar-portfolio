import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { resumeData } from '../data/resume'
import ChatWidget from '../components/ChatWidget'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

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

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        
        <main>
          <Hero data={resumeData.personal} />
          <About data={resumeData.about} />
          <Experience data={resumeData.experience} />
          <Skills data={resumeData.skills} />
          <Projects data={resumeData.projects} />
          <Contact data={resumeData.personal} />
        </main>

        <footer className="bg-apple-gray text-white py-12">
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


import { motion } from 'framer-motion'
import Head from 'next/head'
import { blogPosts, getFeaturedPosts } from '../data/blog'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import BackgroundEffects from '../components/BackgroundEffects'
import ScrollProgress from '../components/ScrollProgress'
import GradientText from '../components/GradientText'
import Link from 'next/link'

export default function Blog() {
  const featuredPosts = getFeaturedPosts()
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Head>
        <title>AI Insights & Articles - Onkar Dubey</title>
        <meta name="description" content="Latest insights on AI, LLM, RAG systems, and enterprise architecture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white relative">
        <ScrollProgress />
        <BackgroundEffects />
        
        <div className="relative z-10">
          <Navbar />

          <main className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="px-4 mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                  className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <GradientText>AI Insights & Articles</GradientText>
                </motion.h1>
                <motion.p
                  className="text-xl text-apple-subtext leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Deep dives into enterprise AI architecture, LLM systems, and production ML engineering
                </motion.p>
              </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="px-4 mb-16">
                <div className="max-w-7xl mx-auto">
                  <motion.h2
                    className="text-3xl font-semibold mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <GradientText>Featured Articles</GradientText>
                  </motion.h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredPosts.map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* All Posts */}
            <section className="px-4">
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-3xl font-semibold mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <GradientText>All Articles</GradientText>
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Coming Soon */}
            <motion.section 
              className="px-4 mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-apple-blue/5 to-purple-500/5 rounded-3xl border border-gray-200">
                <div className="text-6xl mb-4">✍️</div>
                <h3 className="text-2xl font-semibold text-apple-text mb-3">
                  More Articles Coming Soon
                </h3>
                <p className="text-apple-subtext mb-6">
                  Subscribe to get notified when new AI insights and technical articles are published
                </p>
                <Link href="#contact">
                  <motion.button
                    className="bg-apple-blue text-white px-8 py-3 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Notified
                  </motion.button>
                </Link>
              </div>
            </motion.section>
          </main>

          <footer className="bg-apple-gray text-white py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Onkar Dubey. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}


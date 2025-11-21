import { motion } from 'framer-motion'
import Head from 'next/head'
import { getBlogPost, blogPosts } from '../../data/blog'
import Navbar from '../../components/Navbar'
import BackgroundEffects from '../../components/BackgroundEffects'
import ScrollProgress from '../../components/ScrollProgress'
import GradientText from '../../components/GradientText'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BlogPost({ post }) {
  const router = useRouter()

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog">
            <a className="text-apple-blue hover:underline">← Back to Blog</a>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} - Onkar Dubey</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white relative">
        <ScrollProgress />
        <BackgroundEffects />
        
        <div className="relative z-10">
          <Navbar />

          <main className="pt-24 pb-20">
            {/* Back Button */}
            <div className="px-4 mb-8">
              <div className="max-w-4xl mx-auto">
                <Link href="/blog">
                  <motion.a
                    className="inline-flex items-center gap-2 text-apple-blue hover:text-apple-darkblue transition-colors cursor-pointer"
                    whileHover={{ x: -5 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Articles
                  </motion.a>
                </Link>
              </div>
            </div>

            {/* Article Header */}
            <article className="px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  {/* Category & Featured Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-apple-blue/10 text-apple-blue text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-4 py-1.5 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-bold text-apple-text mb-6 leading-tight">
                    <GradientText>{post.title}</GradientText>
                  </h1>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 text-apple-subtext mb-6">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-apple-subtext text-sm rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Icon */}
                  <div className="w-full h-64 bg-gradient-to-br from-apple-blue to-blue-600 rounded-2xl flex items-center justify-center mb-12">
                    <div className="text-9xl">{post.image}</div>
                  </div>
                </motion.div>

                {/* Article Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="prose prose-lg max-w-none mb-12"
                >
                  <div className="text-apple-text leading-relaxed space-y-6">
                    {/* Content placeholder - will be replaced with actual article content */}
                    <div className="bg-blue-50 border-l-4 border-apple-blue p-6 rounded-r-xl mb-8">
                      <p className="text-apple-text font-medium mb-2">📝 Article Content</p>
                      <p className="text-apple-subtext text-sm">
                        This is a placeholder. Add your article content to the blog.js data file.
                      </p>
                    </div>
                    
                    <div 
                      className="article-content"
                      dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
                    />
                  </div>
                </motion.div>

                {/* Share Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-gray-200 pt-8"
                >
                  <p className="text-apple-subtext text-center mb-6">Found this helpful? Share with your network!</p>
                  <div className="flex justify-center gap-4">
                    <button className="px-6 py-2 bg-blue-50 text-apple-blue rounded-full hover:bg-apple-blue hover:text-white transition-all">
                      Share on LinkedIn
                    </button>
                    <button className="px-6 py-2 bg-gray-100 text-apple-text rounded-full hover:bg-apple-blue hover:text-white transition-all">
                      Share on Twitter
                    </button>
                  </div>
                </motion.div>
              </div>
            </article>
          </main>

          <footer className="bg-apple-gray text-white py-12">
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

export async function getStaticPaths() {
  const paths = blogPosts.map(post => ({
    params: { id: post.id }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = getBlogPost(params.id)
  return { props: { post: post || null } }
}


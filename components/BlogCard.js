import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring" }}
    >
      <Link href={`/blog/${post.id}`}>
        <motion.div
          className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-apple-blue transition-all duration-300 h-full cursor-pointer group"
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 113, 227, 0.15)",
          }}
        >
          {/* Icon Header */}
          <div className="bg-gradient-to-br from-apple-blue to-blue-600 p-8 flex items-center justify-center h-48">
            <motion.div 
              className="text-8xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {post.image}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-apple-blue/10 text-apple-blue text-xs font-medium rounded-full">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-apple-text mb-2 group-hover:text-apple-blue transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-apple-subtext text-sm mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-apple-subtext">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs text-apple-subtext bg-gray-100 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  )
}


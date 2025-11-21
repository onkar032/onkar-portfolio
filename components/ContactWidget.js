import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

// Email configuration
const EMAIL_ADDRESS = 'Onkar032@gmail.com'
const EMAIL_SUBJECT = 'Portfolio Inquiry - Let\'s Connect'
const EMAIL_BODY = 'Hi Onkar,\n\nI came across your portfolio and would like to discuss potential opportunities.\n\nBest regards,'

// Change this to your deployed RAG API URL
const API_URL = process.env.NEXT_PUBLIC_RAG_API_URL || 'http://localhost:8000'

export default function ContactWidget() {
  const [showMenu, setShowMenu] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I can answer questions about my projects and experience. Ask me anything!' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleEmailClick = () => {
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`
    window.open(mailtoUrl, '_self')
    setShowMenu(false)
  }

  const handleChatClick = () => {
    setShowChat(true)
    setShowMenu(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      // Call your RAG API
      const response = await axios.post(`${API_URL}/query`, {
        question: userMessage,
        top_k: 5,
        temperature: 0.7,
        use_reranking: true,
        return_context: false
      }, {
        timeout: 60000 // 60 seconds timeout
      })

      const answer = response.data.answer || 'Sorry, I could not find an answer.'
      setMessages(prev => [...prev, { role: 'assistant', content: answer }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again or contact me directly via WhatsApp or email.' 
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Main Floating Button */}
      <motion.button
        onClick={() => {
          if (showChat) {
            setShowChat(false)
          } else {
            setShowMenu(!showMenu)
          }
        }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-apple-blue to-blue-600 text-white rounded-full p-4 shadow-2xl hover:shadow-apple-blue/50 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-apple-blue"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <AnimatePresence mode="wait">
          {showChat || showMenu ? (
            <motion.svg
              key="close"
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="contact"
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Contact Options Menu */}
      <AnimatePresence>
        {showMenu && !showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-apple-blue to-blue-600 text-white px-5 py-3">
              <h3 className="font-semibold text-sm">Let's Connect</h3>
              <p className="text-xs text-white/80">Choose your preferred option</p>
            </div>

            {/* Options */}
            <div className="p-2">
              {/* AI Chat Option */}
              <motion.button
                onClick={handleChatClick}
                className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-apple-text text-sm">Quick AI Chat</h4>
                  <p className="text-xs text-apple-subtext">Ask about my work & projects</p>
                </div>
                <svg className="w-5 h-5 text-apple-blue ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-2" />

              {/* Email Option */}
              <motion.button
                onClick={handleEmailClick}
                className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-apple-text text-sm">Email Me</h4>
                  <p className="text-xs text-apple-subtext">Send a detailed message</p>
                </div>
                <svg className="w-5 h-5 text-blue-600 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-apple-blue to-blue-600 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold">AI Assistant</h3>
                <p className="text-xs text-white/80">Powered by RAG • Ask me anything</p>
              </div>
              <motion.button
                onClick={() => setShowChat(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-apple-blue to-blue-600 text-white'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 focus:border-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/20 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                />
                <motion.button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-gradient-to-r from-apple-blue to-blue-600 text-white rounded-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


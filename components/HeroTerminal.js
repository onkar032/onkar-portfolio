import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const SCRIPT = [
  { type: 'cmd', text: '$ onkar deploy rag-platform --env prod' },
  { type: 'out', text: '→ ingesting documents ............ ok' },
  { type: 'out', text: '→ embeddings + vector index ...... ok' },
  { type: 'out', text: '→ hybrid retrieval + rerank ...... ok' },
  { type: 'out', text: '→ guardrails + eval (RAGAS) ...... ok' },
  { type: 'ok', text: '✓ pipeline live · p95 420ms · 99.9% uptime' },
]

export default function HeroTerminal() {
  const reduce = useReducedMotion()
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (reduce) {
      setLineIdx(SCRIPT.length)
      return
    }

    const current = SCRIPT[lineIdx]

    if (!current) {
      // Finished — hold, then loop.
      timer.current = setTimeout(() => {
        setLineIdx(0)
        setCharIdx(0)
      }, 3200)
      return () => clearTimeout(timer.current)
    }

    const isCmd = current.type === 'cmd'

    if (isCmd && charIdx < current.text.length) {
      timer.current = setTimeout(() => setCharIdx((c) => c + 1), 34)
    } else {
      timer.current = setTimeout(
        () => {
          setLineIdx((i) => i + 1)
          setCharIdx(0)
        },
        isCmd ? 450 : 260
      )
    }

    return () => clearTimeout(timer.current)
  }, [lineIdx, charIdx, reduce])

  const colorFor = (type) =>
    type === 'ok' ? 'text-emerald-400' : type === 'cmd' ? 'text-zinc-100' : 'text-zinc-400'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-brand-indigo/20 blur-3xl rounded-full opacity-60" aria-hidden />

      <div className="relative rounded-2xl bg-[#0b0b14] border border-white/10 shadow-glow overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-zinc-500 truncate">
            onkar@architect: ~/rag-platform
          </span>
          <span className="ml-auto mono-label text-[10px] text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            live
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-[13px] leading-relaxed min-h-[220px]">
          {SCRIPT.map((line, i) => {
            if (i > lineIdx) return null
            const isCurrentCmd = i === lineIdx && line.type === 'cmd'
            const text = isCurrentCmd ? line.text.slice(0, charIdx) : line.text
            const showCursor =
              (isCurrentCmd && charIdx <= line.text.length) ||
              (lineIdx >= SCRIPT.length && i === SCRIPT.length - 1)
            return (
              <div key={i} className={`${colorFor(line.type)} whitespace-pre-wrap break-words`}>
                {text}
                {showCursor && (
                  <span className="inline-block w-[7px] h-[15px] -mb-[2px] ml-0.5 bg-brand-violet animate-blink" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

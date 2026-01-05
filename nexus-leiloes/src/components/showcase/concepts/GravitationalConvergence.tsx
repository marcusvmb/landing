'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

const tools = [
  { id: 1, emoji: '📊', label: 'Planilhas', initialX: -280, initialY: -180, rotation: -12 },
  { id: 2, emoji: '📝', label: 'Anotações', initialX: 260, initialY: -140, rotation: 8 },
  { id: 3, emoji: '📅', label: 'Agenda', initialX: -320, initialY: 120, rotation: -8 },
  { id: 4, emoji: '🌐', label: 'Sites', initialX: 300, initialY: 160, rotation: 15 },
  { id: 5, emoji: '🧮', label: 'Calculadora', initialX: -80, initialY: 240, rotation: -5 },
  { id: 6, emoji: '📧', label: 'E-mails', initialX: 120, initialY: -260, rotation: 10 },
]

function ToolCard({
  tool,
  progress,
}: {
  tool: (typeof tools)[0]
  progress: MotionValue<number>
}) {
  const x = useTransform(progress, [0, 0.5, 1], [tool.initialX, tool.initialX * 0.3, 0])
  const y = useTransform(progress, [0, 0.5, 1], [tool.initialY, tool.initialY * 0.3, 0])
  const rotate = useTransform(progress, [0, 0.5, 1], [tool.rotation, tool.rotation * 0.3, 0])
  const scale = useTransform(progress, [0, 0.5, 0.8, 1], [1, 0.9, 0.6, 0])
  const opacity = useTransform(progress, [0, 0.5, 0.9, 1], [1, 1, 0.5, 0])

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="absolute left-1/2 top-1/2 -ml-12 -mt-12"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#5C5CFF]/20 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Card */}
        <div className="relative w-24 h-24 bg-white/60 backdrop-blur-xl rounded-2xl border border-[#2B3259]/10 shadow-[0_20px_60px_-15px_rgba(92,92,255,0.25)] flex flex-col items-center justify-center gap-2 group hover:bg-white hover:border-[#5C5CFF]/30 transition-all duration-300">
          <span className="text-3xl">{tool.emoji}</span>
          <span className="text-xs font-medium text-[#2B3259]/60">{tool.label}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function GravitationalConvergence() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Transform scroll progress to animation progress
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  // Hub animations
  const hubScale = useTransform(progress, [0, 0.5, 1], [0.5, 0.8, 1])
  const hubOpacity = useTransform(progress, [0, 0.3, 1], [0.3, 0.6, 1])
  const glowScale = useTransform(progress, [0.5, 1], [1, 1.5])
  const glowOpacity = useTransform(progress, [0.5, 1], [0, 0.6])

  // Labels
  const fragmentedOpacity = useTransform(progress, [0, 0.3], [1, 0])
  const unifiedOpacity = useTransform(progress, [0.7, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            style={{ scale: glowScale, opacity: glowOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5C5CFF]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Labels */}
        <motion.div
          style={{ opacity: fragmentedOpacity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center"
        >
          <span className="inline-block px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-[#2B3259]/10">
            <span className="text-lg font-bold text-[#2B3259]/40 line-through decoration-2">5 ferramentas dispersas</span>
          </span>
        </motion.div>

        <motion.div
          style={{ opacity: unifiedOpacity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center"
        >
          <span className="inline-block px-6 py-3 bg-[#5C5CFF] rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.5)]">
            <span className="text-lg font-bold text-white">1 Hub Unificado</span>
          </span>
        </motion.div>

        {/* Tool cards */}
        <div className="relative w-full max-w-4xl aspect-square">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} progress={progress} />
          ))}

          {/* Central Hub */}
          <motion.div
            style={{ scale: hubScale, opacity: hubOpacity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 -m-8 bg-[#5C5CFF]/20 rounded-full blur-xl"
            />

            {/* Hub container */}
            <div className="relative w-32 h-32 bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(92,92,255,0.4)] border border-[#5C5CFF]/20 flex items-center justify-center">
              {/* Pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 border-2 border-[#5C5CFF] rounded-3xl"
              />

              {/* Logo */}
              <div className="relative w-16 h-16">
                <Image
                  src="/icon-nexus.png"
                  alt="Nexus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Label */}
            <motion.div
              style={{ opacity: unifiedOpacity }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="text-sm font-semibold text-[#5C5CFF]">NEXUS HUB</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Instruction */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <motion.p
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-[#2B3259]/50"
          >
            Continue rolando para ver a convergência
          </motion.p>
        </div>
      </div>
    </div>
  )
}

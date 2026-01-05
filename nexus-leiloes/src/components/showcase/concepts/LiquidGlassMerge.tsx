'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion'
import Image from 'next/image'

const liquidCards = [
  { id: 1, emoji: '📊', label: 'Planilhas', initialX: -220, initialY: -150, initialRotate: -15 },
  { id: 2, emoji: '📝', label: 'Anotações', initialX: 200, initialY: -120, initialRotate: 12 },
  { id: 3, emoji: '📅', label: 'Agenda', initialX: -180, initialY: 130, initialRotate: -8 },
  { id: 4, emoji: '🌐', label: 'Sites', initialX: 220, initialY: 140, initialRotate: 18 },
  { id: 5, emoji: '🧮', label: 'Calculadora', initialX: 0, initialY: -200, initialRotate: 5 },
]

// Organic border-radius values for liquid effect
const organicShapes = [
  '40% 60% 70% 30% / 40% 50% 60% 50%',
  '60% 40% 30% 70% / 50% 60% 40% 50%',
  '50% 50% 50% 50% / 60% 40% 60% 40%',
  '30% 70% 60% 40% / 40% 60% 50% 50%',
  '70% 30% 40% 60% / 50% 40% 60% 50%',
]

function LiquidCard({
  card,
  progress,
  index,
}: {
  card: (typeof liquidCards)[0]
  progress: MotionValue<number>
  index: number
}) {
  const x = useTransform(progress, [0, 0.5, 1], [card.initialX, card.initialX * 0.2, 0])
  const y = useTransform(progress, [0, 0.5, 1], [card.initialY, card.initialY * 0.2, 0])
  const rotate = useTransform(progress, [0, 0.5, 1], [card.initialRotate, card.initialRotate * 0.3, 0])
  const scale = useTransform(progress, [0, 0.4, 0.7, 1], [1, 1.1, 0.8, 0])
  const opacity = useTransform(progress, [0, 0.6, 0.9, 1], [1, 1, 0.6, 0])

  // Morphing border radius
  const borderRadius = useTransform(
    progress,
    [0, 0.3, 0.6, 1],
    [
      organicShapes[index % organicShapes.length],
      '50% 50% 50% 50%',
      '45% 55% 55% 45% / 55% 45% 55% 45%',
      '50%',
    ]
  )

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="absolute left-1/2 top-1/2 -ml-14 -mt-14"
    >
      <motion.div
        style={{ borderRadius }}
        className="relative w-28 h-28 bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_25px_70px_-20px_rgba(92,92,255,0.35),inset_0_0_20px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center gap-2"
      >
        {/* Inner glow */}
        <div className="absolute inset-2 bg-gradient-to-br from-white/60 to-transparent rounded-[inherit]" />

        {/* Content */}
        <span className="relative text-3xl">{card.emoji}</span>
        <span className="relative text-xs font-medium text-[#2B3259]/70">{card.label}</span>

        {/* Shimmer effect */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
        />
      </motion.div>
    </motion.div>
  )
}

export default function LiquidGlassMerge() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  // Hub animations
  const hubScale = useTransform(progress, [0, 0.5, 1], [0.3, 0.7, 1])
  const hubOpacity = useTransform(progress, [0, 0.5, 1], [0.2, 0.6, 1])

  // Merged state visibility
  const mergedOpacity = useTransform(progress, [0.8, 1], [0, 1])
  const labelOpacity = useTransform(progress, [0.7, 0.9], [0, 1])

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={isInView ? {
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5C5CFF]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={isInView ? {
              x: [0, -30, 0],
              y: [0, -50, 0],
              scale: [1.2, 1, 1.2],
            } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#5C5CFF]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Labels */}
        <motion.div
          style={{ opacity: useTransform(progress, [0, 0.3], [1, 0]) }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2"
        >
          <span className="inline-block px-6 py-3 bg-white/40 backdrop-blur-xl rounded-full border border-white/50">
            <span className="text-lg font-bold text-[#2B3259]/60">Ferramentas Fragmentadas</span>
          </span>
        </motion.div>

        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2"
        >
          <span className="inline-block px-6 py-3 bg-[#5C5CFF] rounded-full shadow-[0_20px_50px_-15px_rgba(92,92,255,0.6)]">
            <span className="text-lg font-bold text-white">Fusão Completa</span>
          </span>
        </motion.div>

        {/* Liquid Cards */}
        <div className="relative w-full max-w-4xl aspect-square">
          {liquidCards.map((card, index) => (
            <LiquidCard key={card.id} card={card} progress={progress} index={index} />
          ))}

          {/* Central Hub - appears as cards merge */}
          <motion.div
            style={{ scale: hubScale, opacity: hubOpacity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Liquid outer ring */}
            <motion.div
              animate={isInView ? {
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 -m-8 bg-gradient-to-br from-[#5C5CFF]/20 to-[#5C5CFF]/5 backdrop-blur-xl"
            />

            {/* Main hub */}
            <motion.div
              animate={isInView ? {
                borderRadius: [
                  '40% 60% 60% 40% / 60% 40% 60% 40%',
                  '60% 40% 40% 60% / 40% 60% 40% 60%',
                  '40% 60% 60% 40% / 60% 40% 60% 40%',
                ],
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-36 h-36 bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_30px_80px_-20px_rgba(92,92,255,0.5),inset_0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center"
            >
              {/* Inner glow */}
              <div className="absolute inset-3 bg-gradient-to-br from-white/80 to-transparent rounded-[inherit]" />

              {/* Logo */}
              <div className="relative w-16 h-16">
                <Image
                  src="/icon-nexus.png"
                  alt="Nexus"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Shimmer */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 rounded-[inherit]"
              />
            </motion.div>

            {/* Label */}
            <motion.div
              style={{ opacity: mergedOpacity }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
            >
              <span className="text-sm font-bold text-[#5C5CFF]">NEXUS</span>
              <br />
              <span className="text-xs text-[#2B3259]/50">Tudo em Um</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Instruction */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-sm text-[#2B3259]/50">
            Role para ver a fusão líquida
          </p>
        </motion.div>
      </div>
    </div>
  )
}

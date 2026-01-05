'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

const orbitingTools = [
  { id: 1, emoji: '📊', label: 'Planilhas', orbit: 1, delay: 0 },
  { id: 2, emoji: '📝', label: 'Anotações', orbit: 1, delay: 2 },
  { id: 3, emoji: '📅', label: 'Agenda', orbit: 2, delay: 0 },
  { id: 4, emoji: '🌐', label: 'Sites', orbit: 2, delay: 3 },
  { id: 5, emoji: '🧮', label: 'Calculadora', orbit: 2, delay: 6 },
  { id: 6, emoji: '📧', label: 'E-mails', orbit: 3, delay: 0 },
]

const orbitConfigs = {
  1: { radius: 120, duration: 15, direction: 1 },
  2: { radius: 200, duration: 25, direction: -1 },
  3: { radius: 280, duration: 35, direction: 1 },
}

function OrbitRing({ radius, opacity }: { radius: number; opacity: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#5C5CFF]/20"
      style={{ width: radius * 2, height: radius * 2 }}
    />
  )
}

function OrbitingTool({
  tool,
  isActive,
}: {
  tool: (typeof orbitingTools)[0]
  isActive: boolean
}) {
  const config = orbitConfigs[tool.orbit as keyof typeof orbitConfigs]

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: config.radius * 2,
        height: config.radius * 2,
        marginLeft: -config.radius,
        marginTop: -config.radius,
      }}
      animate={isActive ? { rotate: 360 * config.direction } : { rotate: 0 }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: 'linear',
        delay: tool.delay,
      }}
    >
      {/* Tool positioned at orbit edge */}
      <motion.div
        className="absolute"
        style={{
          left: '50%',
          top: 0,
          marginLeft: -30,
          marginTop: -30,
        }}
        animate={isActive ? { rotate: -360 * config.direction } : { rotate: 0 }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          ease: 'linear',
          delay: tool.delay,
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 + tool.id * 0.1, duration: 0.5 }}
          className="w-[60px] h-[60px] bg-white/80 backdrop-blur-xl rounded-xl border border-[#2B3259]/10 shadow-[0_10px_30px_-10px_rgba(92,92,255,0.3)] flex flex-col items-center justify-center gap-1 hover:bg-white hover:scale-110 hover:shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)] transition-all duration-300 cursor-pointer"
        >
          <span className="text-xl">{tool.emoji}</span>
          <span className="text-[8px] font-medium text-[#2B3259]/60">{tool.label}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function OrbitalEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const hubScale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1])
  const hubOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])

  return (
    <div ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={isInView ? {
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5C5CFF]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2"
        >
          <span className="inline-block px-6 py-3 bg-[#5C5CFF]/10 backdrop-blur-xl rounded-full border border-[#5C5CFF]/20">
            <span className="text-lg font-bold text-[#5C5CFF]">Ecossistema em Harmonia</span>
          </span>
        </motion.div>

        {/* Orbital System */}
        <div className="relative w-[700px] h-[700px]">
          {/* Orbit rings */}
          <OrbitRing radius={120} opacity={0.3} />
          <OrbitRing radius={200} opacity={0.2} />
          <OrbitRing radius={280} opacity={0.15} />

          {/* Orbiting tools */}
          {orbitingTools.map((tool) => (
            <OrbitingTool key={tool.id} tool={tool} isActive={isInView} />
          ))}

          {/* Central Hub */}
          <motion.div
            style={{ scale: hubScale, opacity: hubOpacity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Outer glow */}
            <motion.div
              animate={isInView ? {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 -m-6 bg-[#5C5CFF]/30 rounded-full blur-2xl"
            />

            {/* Hub */}
            <div className="relative w-28 h-28 bg-white rounded-full shadow-[0_25px_70px_-15px_rgba(92,92,255,0.5)] border-4 border-[#5C5CFF]/20 flex items-center justify-center">
              {/* Rotating ring */}
              <motion.div
                animate={isInView ? { rotate: 360 } : {}}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -m-2 border-2 border-dashed border-[#5C5CFF]/30 rounded-full"
              />

              {/* Logo */}
              <div className="relative w-14 h-14">
                <Image
                  src="/icon-nexus.png"
                  alt="Nexus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Label */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <span className="text-sm font-bold text-[#5C5CFF]">NEXUS</span>
              <br />
              <span className="text-xs text-[#2B3259]/50">Centro do Ecossistema</span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-12"
        >
          {[
            { value: '6', label: 'Ferramentas' },
            { value: '1', label: 'Hub Central' },
            { value: '∞', label: 'Harmonia' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-[#5C5CFF]">{stat.value}</div>
              <div className="text-xs text-[#2B3259]/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

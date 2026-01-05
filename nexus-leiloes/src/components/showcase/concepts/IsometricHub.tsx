'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion'
import Image from 'next/image'

const tools = [
  { id: 1, emoji: '📊', label: 'Planilhas', color: '#FF6B6B' },
  { id: 2, emoji: '📝', label: 'Anotações', color: '#4ECDC4' },
  { id: 3, emoji: '📅', label: 'Agenda', color: '#FFE66D' },
  { id: 4, emoji: '🌐', label: 'Sites', color: '#95E1D3' },
  { id: 5, emoji: '🧮', label: 'Calculadora', color: '#DDA0DD' },
  { id: 6, emoji: '📧', label: 'E-mails', color: '#F38181' },
]

// Dispersed positions for cubes
const dispersedPositions = [
  { x: -180, y: -100, z: 50 },
  { x: 150, y: -80, z: 30 },
  { x: -120, y: 80, z: 40 },
  { x: 180, y: 100, z: 20 },
  { x: -50, y: -150, z: 60 },
  { x: 80, y: 150, z: 10 },
]

// Stacked positions for unified state
const stackedPositions = [
  { x: -40, y: -40, z: 0 },
  { x: 40, y: -40, z: 0 },
  { x: -40, y: 40, z: 0 },
  { x: 40, y: 40, z: 0 },
  { x: 0, y: 0, z: 50 },
  { x: 0, y: 0, z: 100 },
]

function IsometricCube({
  tool,
  index,
  progress,
}: {
  tool: (typeof tools)[0]
  index: number
  progress: MotionValue<number>
}) {
  const dispersed = dispersedPositions[index]
  const stacked = stackedPositions[index]

  const x = useTransform(progress, [0, 0.5, 1], [dispersed.x, dispersed.x * 0.3, stacked.x])
  const y = useTransform(progress, [0, 0.5, 1], [dispersed.y, dispersed.y * 0.3, stacked.y])
  const z = useTransform(progress, [0, 0.5, 1], [dispersed.z, dispersed.z * 0.5, stacked.z])
  const rotate = useTransform(progress, [0, 0.5, 1], [15, 5, 0])
  const opacity = useTransform(progress, [0, 0.2], [0, 1])

  return (
    <motion.div
      style={{
        x,
        y,
        rotateX: 60,
        rotateZ: -45,
        opacity,
      }}
      className="absolute left-1/2 top-1/2"
    >
      <motion.div
        style={{ translateZ: z, rotateZ: rotate }}
        className="relative w-20 h-20 transform-gpu preserve-3d"
      >
        {/* Top face */}
        <div
          className="absolute w-20 h-20 flex items-center justify-center"
          style={{
            transform: 'rotateX(90deg) translateZ(40px)',
            background: `linear-gradient(135deg, ${tool.color}dd, ${tool.color}99)`,
          }}
        >
          <span className="text-2xl transform rotate-45">{tool.emoji}</span>
        </div>

        {/* Front face */}
        <div
          className="absolute w-20 h-20 flex items-center justify-center"
          style={{
            transform: 'translateZ(40px)',
            background: `linear-gradient(180deg, ${tool.color}cc, ${tool.color}88)`,
          }}
        >
          <span className="text-xs font-medium text-white/80">{tool.label}</span>
        </div>

        {/* Right face */}
        <div
          className="absolute w-20 h-20"
          style={{
            transform: 'rotateY(90deg) translateZ(40px)',
            background: `linear-gradient(180deg, ${tool.color}aa, ${tool.color}66)`,
          }}
        />

        {/* Left face */}
        <div
          className="absolute w-20 h-20"
          style={{
            transform: 'rotateY(-90deg) translateZ(40px)',
            background: `linear-gradient(180deg, ${tool.color}99, ${tool.color}55)`,
          }}
        />

        {/* Back face */}
        <div
          className="absolute w-20 h-20"
          style={{
            transform: 'translateZ(-40px)',
            background: `${tool.color}44`,
          }}
        />

        {/* Bottom face */}
        <div
          className="absolute w-20 h-20"
          style={{
            transform: 'rotateX(-90deg) translateZ(40px)',
            background: `${tool.color}33`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function IsometricHub() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  // Labels
  const dispersedOpacity = useTransform(progress, [0, 0.3], [1, 0])
  const unifiedOpacity = useTransform(progress, [0.7, 1], [0, 1])

  // Hub
  const hubScale = useTransform(progress, [0.5, 1], [0.5, 1])
  const hubOpacity = useTransform(progress, [0.5, 0.8], [0, 1])

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(92, 92, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(92, 92, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'center top',
            }}
          />
        </div>

        {/* Labels */}
        <motion.div
          style={{ opacity: dispersedOpacity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10"
        >
          <span className="inline-block px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-[#2B3259]/10">
            <span className="text-lg font-bold text-[#2B3259]/60">Cubos Dispersos</span>
          </span>
        </motion.div>

        <motion.div
          style={{ opacity: unifiedOpacity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10"
        >
          <span className="inline-block px-6 py-3 bg-[#5C5CFF] rounded-full shadow-[0_15px_40px_-10px_rgba(92,92,255,0.5)]">
            <span className="text-lg font-bold text-white">Estrutura Unificada</span>
          </span>
        </motion.div>

        {/* Isometric Container */}
        <div
          className="relative w-[600px] h-[600px]"
          style={{
            perspective: '1000px',
            perspectiveOrigin: 'center center',
          }}
        >
          {/* Cubes */}
          {tools.map((tool, index) => (
            <IsometricCube
              key={tool.id}
              tool={tool}
              index={index}
              progress={progress}
            />
          ))}

          {/* Central Platform / Hub */}
          <motion.div
            style={{
              scale: hubScale,
              opacity: hubOpacity,
              rotateX: 60,
              rotateZ: -45,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu preserve-3d"
          >
            {/* Platform base */}
            <div
              className="absolute w-48 h-48 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: 'rotateX(90deg) translateZ(-20px)',
                background: 'linear-gradient(135deg, #5C5CFF22, #5C5CFF44)',
                boxShadow: '0 0 60px 20px rgba(92, 92, 255, 0.2)',
              }}
            />

            {/* Nexus cube */}
            <motion.div
              animate={isInView ? {
                rotateZ: [0, 360],
              } : {}}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="relative w-24 h-24 transform-gpu preserve-3d"
              style={{ translateZ: 60 }}
            >
              {/* Top face with logo */}
              <div
                className="absolute w-24 h-24 bg-gradient-to-br from-[#5C5CFF] to-[#4040CC] flex items-center justify-center"
                style={{ transform: 'rotateX(90deg) translateZ(48px)' }}
              >
                <div className="relative w-12 h-12 transform rotate-45">
                  <Image
                    src="/icon-nexus.png"
                    alt="Nexus"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Front face */}
              <div
                className="absolute w-24 h-24 bg-gradient-to-b from-[#5C5CFF] to-[#4848DD]"
                style={{ transform: 'translateZ(48px)' }}
              />

              {/* Right face */}
              <div
                className="absolute w-24 h-24 bg-gradient-to-b from-[#4848DD] to-[#3838CC]"
                style={{ transform: 'rotateY(90deg) translateZ(48px)' }}
              />

              {/* Left face */}
              <div
                className="absolute w-24 h-24 bg-gradient-to-b from-[#6868FF] to-[#5858EE]"
                style={{ transform: 'rotateY(-90deg) translateZ(48px)' }}
              />

              {/* Back face */}
              <div
                className="absolute w-24 h-24 bg-[#3838CC]"
                style={{ transform: 'translateZ(-48px)' }}
              />

              {/* Bottom face */}
              <div
                className="absolute w-24 h-24 bg-[#2828BB]"
                style={{ transform: 'rotateX(-90deg) translateZ(48px)' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full"
              >
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: tool.color }}
                />
                <span className="text-xs text-[#2B3259]/70">{tool.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

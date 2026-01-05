'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

const nodes = [
  { id: 1, emoji: '📊', label: 'Planilhas', x: 15, y: 20 },
  { id: 2, emoji: '📝', label: 'Anotações', x: 85, y: 15 },
  { id: 3, emoji: '📅', label: 'Agenda', x: 10, y: 75 },
  { id: 4, emoji: '🌐', label: 'Sites', x: 90, y: 80 },
  { id: 5, emoji: '🧮', label: 'Calculadora', x: 25, y: 50 },
  { id: 6, emoji: '📧', label: 'E-mails', x: 75, y: 45 },
]

// Center hub position
const hubX = 50
const hubY = 50

function generatePath(startX: number, startY: number): string {
  // Create curved bezier path from node to center
  const midX = (startX + hubX) / 2
  const midY = startY < hubY ? startY + 15 : startY - 15

  return `M ${startX} ${startY} Q ${midX} ${midY} ${hubX} ${hubY}`
}

function ConnectionLine({
  node,
  isActive,
  index,
}: {
  node: (typeof nodes)[0]
  isActive: boolean
  index: number
}) {
  const path = generatePath(node.x, node.y)

  return (
    <g>
      {/* Base line (static) */}
      <path
        d={path}
        fill="none"
        stroke="rgba(92, 92, 255, 0.15)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Animated line */}
      <motion.path
        d={path}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isActive ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 1.5, delay: index * 0.2, ease: 'easeInOut' },
          opacity: { duration: 0.3, delay: index * 0.2 },
        }}
      />

      {/* Animated pulse traveling along path */}
      {isActive && (
        <motion.circle
          r="4"
          fill="#5C5CFF"
          filter="url(#glow)"
        >
          <animateMotion
            dur={`${2 + index * 0.3}s`}
            repeatCount="indefinite"
            path={path}
          />
        </motion.circle>
      )}
    </g>
  )
}

function NetworkNode({
  node,
  isActive,
  index,
}: {
  node: (typeof nodes)[0]
  isActive: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, type: 'spring' }}
      className="absolute"
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <motion.div
        animate={isActive ? {
          boxShadow: [
            '0 0 0 0 rgba(92, 92, 255, 0.4)',
            '0 0 0 15px rgba(92, 92, 255, 0)',
          ],
        } : {}}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-xl border border-[#5C5CFF]/20 shadow-[0_10px_30px_-10px_rgba(92,92,255,0.3)] flex flex-col items-center justify-center gap-1"
      >
        <span className="text-xl">{node.emoji}</span>
        <span className="text-[8px] font-medium text-[#2B3259]/60">{node.label}</span>
      </motion.div>
    </motion.div>
  )
}

export default function NeuralNetworkFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const hubScale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1])

  return (
    <div ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#5C5CFF]/10 to-transparent rounded-full" />
        </div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2"
        >
          <span className="inline-block px-6 py-3 bg-[#5C5CFF]/10 backdrop-blur-xl rounded-full border border-[#5C5CFF]/20">
            <span className="text-lg font-bold text-[#5C5CFF]">Dados Fluindo para o Hub</span>
          </span>
        </motion.div>

        {/* Network Container */}
        <div className="relative w-[700px] h-[500px]">
          {/* SVG Connections */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5C5CFF" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#5C5CFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#5C5CFF" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {nodes.map((node, index) => (
              <ConnectionLine
                key={node.id}
                node={node}
                isActive={isInView}
                index={index}
              />
            ))}
          </svg>

          {/* Network Nodes */}
          {nodes.map((node, index) => (
            <NetworkNode
              key={node.id}
              node={node}
              isActive={isInView}
              index={index}
            />
          ))}

          {/* Central Hub */}
          <motion.div
            style={{ scale: hubScale }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Pulse rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={isInView ? {
                  scale: [1, 2, 2],
                  opacity: [0.5, 0, 0],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 -m-4 border-2 border-[#5C5CFF] rounded-full"
              />
            ))}

            {/* Hub */}
            <div className="relative w-24 h-24 bg-white rounded-2xl shadow-[0_25px_70px_-15px_rgba(92,92,255,0.5)] border-2 border-[#5C5CFF]/30 flex items-center justify-center">
              <div className="relative w-12 h-12">
                <Image
                  src="/icon-nexus.png"
                  alt="Nexus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Data counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
            >
              <motion.span
                animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs font-mono text-[#5C5CFF]"
              >
                Recebendo dados...
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-md text-center"
        >
          <p className="text-sm text-[#2B3259]/60">
            Visualize como todas as fontes de dados convergem para um único ponto de processamento
          </p>
        </motion.div>
      </div>
    </div>
  )
}

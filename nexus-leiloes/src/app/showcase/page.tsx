'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GravitationalConvergence from '@/components/showcase/concepts/GravitationalConvergence'
import OrbitalEcosystem from '@/components/showcase/concepts/OrbitalEcosystem'
import NeuralNetworkFlow from '@/components/showcase/concepts/NeuralNetworkFlow'
import LiquidGlassMerge from '@/components/showcase/concepts/LiquidGlassMerge'
import IsometricHub from '@/components/showcase/concepts/IsometricHub'

const concepts = [
  {
    id: 'gravitational',
    number: '01',
    title: 'Gravitational Convergence',
    subtitle: 'Atracão Magnética',
    description: 'Ferramentas dispersas são atraídas magneticamente para o hub central com física de spring realista.',
    component: GravitationalConvergence,
  },
  {
    id: 'orbital',
    number: '02',
    title: 'Orbital Ecosystem',
    subtitle: 'Sistema Solar',
    description: 'Ícones orbitam o logo Nexus em círculos concêntricos, como planetas ao redor do sol.',
    component: OrbitalEcosystem,
  },
  {
    id: 'neural',
    number: '03',
    title: 'Neural Network Flow',
    subtitle: 'Rede Neural',
    description: 'Nós conectados por linhas curvas com pulsos de dados fluindo para o hub central.',
    component: NeuralNetworkFlow,
  },
  {
    id: 'liquid',
    number: '04',
    title: 'Liquid Glass Merge',
    subtitle: 'Fusão Líquida',
    description: 'Cards glassmorphism que se deformam organicamente e se fundem no centro.',
    component: LiquidGlassMerge,
  },
  {
    id: 'isometric',
    number: '05',
    title: 'Isometric Hub 3D',
    subtitle: 'Perspectiva 3D',
    description: 'Visualização pseudo-3D com cubos que se empilham formando uma estrutura unificada.',
    component: IsometricHub,
  },
]

export default function ShowcasePage() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = concepts.map((c) => document.getElementById(c.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-[#EFF0F0] min-h-screen">
      {/* Header */}
      <header className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5C5CFF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5C5CFF]/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 text-center max-w-4xl"
        >
          <span className="inline-block px-4 py-2 bg-[#5C5CFF]/10 text-[#5C5CFF] text-sm font-semibold rounded-full mb-6">
            SHOWCASE DE CONCEITOS
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2B3259] tracking-[-0.04em] leading-[0.9] mb-6">
            5 Ideias
            <br />
            <span className="text-[#5C5CFF]">Premium</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#2B3259]/60 max-w-2xl mx-auto mb-12">
            Visualizações para a seção &quot;O problema não é você. É usar 5 ferramentas para fazer o trabalho de 1.&quot;
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-sm text-[#2B3259]/40 uppercase tracking-widest">Role para explorar</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-[#2B3259]/20 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 bg-[#5C5CFF] rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* Concept Sections */}
      {concepts.map((concept, index) => {
        const Component = concept.component
        return (
          <section
            key={concept.id}
            id={concept.id}
            className="min-h-screen relative flex flex-col"
          >
            {/* Section Header */}
            <div className="sticky top-0 z-20 bg-[#EFF0F0]/80 backdrop-blur-xl border-b border-[#2B3259]/5">
              <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-[#5C5CFF]/20">{concept.number}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-[#2B3259]">{concept.title}</h2>
                    <p className="text-sm text-[#2B3259]/50">{concept.subtitle}</p>
                  </div>
                </div>
                <p className="hidden md:block text-sm text-[#2B3259]/60 max-w-md text-right">
                  {concept.description}
                </p>
              </div>
            </div>

            {/* Concept Component */}
            <div className="flex-1 relative">
              <Component />
            </div>
          </section>
        )
      })}

      {/* Fixed Navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {concepts.map((concept, index) => (
          <button
            key={concept.id}
            onClick={() => scrollToSection(concept.id)}
            className="group relative flex items-center justify-end"
          >
            {/* Label */}
            <AnimatePresence>
              {activeSection === index && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-8 whitespace-nowrap text-xs font-medium text-[#2B3259] bg-white px-3 py-1.5 rounded-full shadow-lg"
                >
                  {concept.title}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-[#5C5CFF] scale-125'
                  : 'bg-[#2B3259]/20 hover:bg-[#2B3259]/40'
              }`}
              whileHover={{ scale: 1.3 }}
            />
          </button>
        ))}
      </nav>

      {/* Footer */}
      <footer className="py-20 text-center bg-[#2B3259]">
        <p className="text-white/60 text-sm">
          Escolha seu conceito favorito e avise o time para implementar
        </p>
      </footer>
    </main>
  )
}

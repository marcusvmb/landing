'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AuroraGlowMockupProps {
  children: ReactNode;
}

/**
 * AuroraGlowMockup - Efeito premium estilo Stripe/Vercel
 *
 * Features:
 * - Aurora gradient animado atrás do mockup
 * - Entrada com fade + scale suave (spring physics)
 * - Respeita prefers-reduced-motion
 * - GPU-accelerated (apenas transform e opacity)
 *
 * @see https://stripe.com (gradient inspiration)
 * @see https://vercel.com (glow effect)
 */
export function AuroraGlowMockup({ children }: AuroraGlowMockupProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Aurora Gradient Layers - Behind mockup */}
      {!prefersReducedMotion && (
        <>
          {/* Primary aurora blob */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[600px] rounded-full -z-10"
            style={{
              background:
                'radial-gradient(ellipse, rgba(92,92,255,0.35) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Secondary aurora blob - offset */}
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.5, 0.3],
              x: ['-10%', '10%', '-10%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] md:w-[700px] md:h-[500px] rounded-full -z-10"
            style={{
              background:
                'radial-gradient(ellipse, rgba(92,92,255,0.25) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </>
      )}

      {/* Static glow fallback for reduced motion */}
      {prefersReducedMotion && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full -z-10"
          style={{
            background:
              'radial-gradient(ellipse, rgba(92,92,255,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      )}

      {/* Mockup with animated entrance */}
      <motion.div
        initial={
          prefersReducedMotion
            ? {}
            : { opacity: 0, y: 40, scale: 0.96 }
        }
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1], // cubic-bezier suave
        }}
        className="relative z-10"
      >
        {/* Browser frame - estilo premium dark */}
        <div
          className="rounded-[20px] md:rounded-[32px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
            padding: '8px',
          }}
        >
          {/* Barra de título (estilo browser/app) */}
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-t-[14px] md:rounded-t-[26px]"
            style={{
              background: 'linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%)',
            }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>

            {/* URL bar */}
            <div className="flex-1 mx-4">
              <div
                className="h-6 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.3)' }}
              >
                <span className="text-xs text-gray-400 font-mono">
                  nexusleiloes.com.br
                </span>
              </div>
            </div>

            {/* Spacer para simetria */}
            <div className="w-[52px]" />
          </div>

          {/* Conteúdo - Screenshot */}
          <div className="rounded-b-[14px] md:rounded-b-[26px] overflow-hidden">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AuroraGlowMockup;

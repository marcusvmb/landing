'use client';

import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface SpringFloatingMockupProps {
  children: ReactNode;
}

/**
 * SpringFloatingMockup - Efeito premium estilo Apple
 *
 * Features:
 * - Mockup "flutua" suavemente com física de spring
 * - Sombra dinâmica que acompanha o movimento
 * - Glow sutil atrás do frame
 * - Entrada elegante com spring physics
 * - Respeita prefers-reduced-motion
 *
 * @see https://apple.com (floating product shots)
 * @see https://linear.app (spring animations)
 */
export function SpringFloatingMockup({ children }: SpringFloatingMockupProps) {
  const prefersReducedMotion = useReducedMotion();

  // Motion values para floating animation
  const y = useMotionValue(0);
  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 20,
    mass: 1
  });

  // Sombra que acompanha o floating
  const shadowY = useSpring(y, {
    stiffness: 30,
    damping: 25
  });

  // Floating animation loop
  useEffect(() => {
    if (prefersReducedMotion) return;

    let direction = 1;
    const interval = setInterval(() => {
      y.set(direction * 12); // 12px de amplitude
      direction *= -1;
    }, 2500); // Ciclo de 2.5s

    return () => clearInterval(interval);
  }, [y, prefersReducedMotion]);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Ambient glow - sutil, atrás de tudo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-[50%] -z-10"
        style={{
          background:
            'radial-gradient(ellipse, rgba(92,92,255,0.15) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating mockup container */}
      <motion.div
        initial={
          prefersReducedMotion
            ? {}
            : { opacity: 0, y: 60, scale: 0.94 }
        }
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{
          duration: 1,
          delay: 0.2,
          type: 'spring',
          stiffness: 80,
          damping: 20,
        }}
        className="relative z-10"
      >
        {/* Mockup com floating */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : smoothY }}
          className="relative will-change-transform"
        >
          {/* Browser frame - premium glass effect */}
          <div
            className="rounded-[20px] md:rounded-[32px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
              padding: '8px',
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.08),
                0 25px 50px -12px rgba(0,0,0,0.4),
                0 12px 24px -8px rgba(0,0,0,0.3)
              `,
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

          {/* Dynamic shadow - moves with floating */}
          <motion.div
            style={{
              y: prefersReducedMotion ? 0 : shadowY,
              scaleX: 0.9,
              scaleY: 0.15,
            }}
            className="absolute -bottom-8 left-[5%] right-[5%] h-[80px] rounded-[50%] -z-10"
            aria-hidden="true"
          >
            <div
              className="w-full h-full rounded-[50%]"
              style={{
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SpringFloatingMockup;

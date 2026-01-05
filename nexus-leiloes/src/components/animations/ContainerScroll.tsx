'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ContainerScrollProps {
  titleComponent?: ReactNode;
  children: ReactNode;
}

/**
 * ContainerScroll - Animação premium de card 3D no scroll
 *
 * Inspirado em: Aceternity UI Container Scroll Animation
 *
 * Efeito: Card rotaciona de 20deg para 0deg conforme scroll,
 * criando um efeito de "flutuação" elegante.
 *
 * @see https://ui.aceternity.com/components/container-scroll-animation
 */
export function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 40%'],
  });

  // Card: rotação 3D elegante
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.92, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.6], [80, 0]);

  // Título: fade e movimento
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], [30, 0]);

  return (
    <div
      ref={containerRef}
      className="py-10 md:py-20 flex flex-col items-center justify-center relative"
    >
      {/* Container de perspectiva */}
      <div
        className="w-full max-w-6xl mx-auto px-4"
        style={{
          perspective: '1200px',
          perspectiveOrigin: 'center',
        }}
      >
        {/* Título opcional acima do card */}
        {titleComponent && (
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-center mb-8 md:mb-12"
          >
            {titleComponent}
          </motion.div>
        )}

        {/* Card 3D com screenshot */}
        <motion.div
          style={{
            rotateX,
            scale,
            y: translateY,
          }}
          className="relative mx-auto"
        >
          {/* Frame do card - estilo premium dark */}
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
    </div>
  );
}

export default ContainerScroll;

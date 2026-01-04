'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MockupRevealProps {
  src: string;
  alt?: string;
}

/**
 * MockupReveal - Animação de reveal 3D para mockups
 *
 * Aplica efeito de perspectiva 3D que simula a abertura de um laptop
 * conforme o usuário faz scroll na página.
 *
 * Funciona com qualquer imagem de mockup (não precisa de assets separados)
 */
export default function MockupReveal({ src, alt = 'Product mockup' }: MockupRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 20%"]
  });

  // Rotação 3D: de inclinado (fechado) para reto (aberto)
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);

  // Escala: começa menor e cresce
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  // Opacidade: fade in
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  // Movimento Y: sobe um pouco
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  // Sombra dinâmica (mais forte quando "fechado")
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.25]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformOrigin: 'center bottom',
        }}
        className="relative"
      >
        {/* Imagem do mockup */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-xl"
        />

        {/* Sombra dinâmica embaixo */}
        <motion.div
          className="absolute -bottom-8 left-[10%] right-[10%] h-[40px] rounded-[50%]"
          style={{
            background: `radial-gradient(ellipse, rgba(92,92,255,${shadowOpacity}) 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </motion.div>
    </div>
  );
}

'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

/**
 * FadeInWhenVisible - Componente de reveal suave no scroll
 *
 * Aplica animação de fade + translate quando o elemento entra na viewport.
 * Respeita prefers-reduced-motion para acessibilidade.
 *
 * @example
 * <FadeInWhenVisible direction="up" delay={0.2}>
 *   <Card>Conteúdo</Card>
 * </FadeInWhenVisible>
 */
export function FadeInWhenVisible({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  className,
}: FadeInWhenVisibleProps) {
  const prefersReducedMotion = useReducedMotion();

  const offset = directionOffset[direction];

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          x: offset.x,
          y: offset.y,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.4, 0, 0.2, 1], // smooth easing
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;

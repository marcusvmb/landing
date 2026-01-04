'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface StaggerItemProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 20 },
  down: { x: 0, y: -20 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
};

/**
 * StaggerItem - Item filho para uso dentro de StaggerContainer
 *
 * Herda as variants do parent e anima individualmente.
 * Deve ser usado como filho direto de StaggerContainer.
 *
 * @example
 * <StaggerContainer>
 *   <StaggerItem direction="up">Card 1</StaggerItem>
 *   <StaggerItem direction="up">Card 2</StaggerItem>
 * </StaggerContainer>
 */
export function StaggerItem({
  children,
  direction = 'up',
  className,
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const offset = directionOffset[direction];

  const itemVariants: Variants = prefersReducedMotion
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
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export default StaggerItem;

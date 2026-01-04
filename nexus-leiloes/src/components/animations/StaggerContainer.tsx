'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

/**
 * StaggerContainer - Container que orquestra animações em sequência
 *
 * Use junto com StaggerItem para criar efeitos de reveal em série.
 * Os filhos aparecem um após o outro com delay configurável.
 *
 * @example
 * <StaggerContainer staggerDelay={0.1}>
 *   <StaggerItem>Item 1</StaggerItem>
 *   <StaggerItem>Item 2</StaggerItem>
 *   <StaggerItem>Item 3</StaggerItem>
 * </StaggerContainer>
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.2,
  once = true,
  amount = 0.2,
  className,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = prefersReducedMotion
    ? {
        hidden: {},
        visible: {},
      }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default StaggerContainer;

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Componente para animações sutis ao rolar a página
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Anima apenas uma vez
    threshold: 0.1, // Inicia quando 10% do elemento está visível
  });

  // Configurações de animação baseadas na direção
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  const transition = {
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const, // Easing suave
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};


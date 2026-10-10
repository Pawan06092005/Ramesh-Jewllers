import React from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'article' | 'figure';
};

/**
 * Fades and lifts its children into view once, as they enter the viewport.
 * Reduced-motion users get the content immediately (see MotionConfig in App).
 */
export default function Reveal({ children, className = '', delay = 0, y = 32, as = 'div' }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

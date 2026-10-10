import React from 'react';
import { motion } from 'framer-motion';

type TestimonialCardProps = {
  name: string;
  text: string;
};

export default function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <blockquote className="font-serif text-[1.75rem] leading-[1.3] text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-[1.25]">
        <span className="text-gold-deep">&ldquo;</span>
        {text}
        <span className="text-gold-deep">&rdquo;</span>
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-4">
        <span className="h-px w-10 bg-gold" aria-hidden="true" />
        <span className="eyebrow text-charcoal">{name}</span>
      </figcaption>
    </motion.figure>
  );
}

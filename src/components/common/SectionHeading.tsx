import React from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  title: React.ReactNode;
  subtitle?: string;
  index?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
};

/**
 * Editorial section heading: a numbered eyebrow with a hairline rule, then a large serif title.
 */
export default function SectionHeading({
  title,
  subtitle,
  index,
  centered = false,
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <div className={`mb-6 flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
          {index && <span className={`font-serif text-lg italic ${dark ? 'text-gold' : 'text-gold-deep'}`}>{index}</span>}
          <span className={`h-px w-10 ${dark ? 'bg-gold/60' : 'bg-gold'}`} aria-hidden="true" />
          <span className={`eyebrow ${dark ? 'text-gold' : 'text-gold-deep'}`}>{subtitle}</span>
        </div>
      )}
      <h2
        className={`text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4rem] ${dark ? 'text-ivory' : 'text-charcoal'}`}
      >
        {title}
      </h2>
    </Reveal>
  );
}

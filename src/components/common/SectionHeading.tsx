import React from 'react';

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  dark = false 
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-brand-accent font-sans tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif ${dark ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      <div className={`w-16 h-1 mt-6 bg-brand-accent ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

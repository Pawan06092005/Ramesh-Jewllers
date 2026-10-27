import React from 'react';

// Same look as the home Hero: photo background under a burgundy overlay
const DEFAULT_IMAGE =
  'https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?s=1024x1024&w=is&k=20&c=rLY5nWR7mGlRyQEeiX6z8VLq3d1vfDWCRHHgUcmYXkk=';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

export default function PageHeader({ title, subtitle, description, image = DEFAULT_IMAGE }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-20 md:py-28 text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-primary/80 z-10" />
        <img src={image} alt="" aria-hidden="true" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 px-4 max-w-3xl mx-auto animate-fade-in-up">
        {subtitle && (
          <span className="block text-brand-accent font-sans tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
            {subtitle}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 text-shadow-gold">{title}</h1>
        <div className="w-16 h-1 bg-brand-accent mx-auto" />
        {description && (
          <p className="text-brand-light/90 font-light max-w-xl mx-auto mt-6 text-base md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}

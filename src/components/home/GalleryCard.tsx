import React from 'react';
import { ZoomIn } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function GalleryCard({ image, index, onClick }) {
  const revealRef = useScrollReveal({ threshold: 0.1 });
  const isLarge = image.size === 'large';

  return (
    <div 
      ref={revealRef}
      className={`reveal relative group cursor-pointer overflow-hidden rounded-sm bg-brand-primary ${
        isLarge ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' : 'h-[300px]'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => onClick(image.url)}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-brand-accent/50 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <ZoomIn className="text-brand-accent w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

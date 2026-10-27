import React from 'react';
import { ZoomIn } from 'lucide-react';

// Bento layout repeats every 5 images: first of each group spans two columns, the rest fill single cells
const tileClasses = [
  'col-span-2',
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1'
];
const PATTERN_SIZE = tileClasses.length;

interface BentoGalleryProps {
  images: string[];
  altPrefix: string;
  onImageClick: (url: string) => void;
  fallbackImage?: string;
}

export default function BentoGallery({ images, altPrefix, onImageClick, fallbackImage }: BentoGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] sm:auto-rows-[260px] md:auto-rows-[320px] gap-3 md:gap-4">
      {images.map((url, index) => (
        <div
          key={url + index}
          className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-brand-primary shadow-sm animate-fade-in-up opacity-0 ${tileClasses[index % PATTERN_SIZE]}`}
          style={{ animationDelay: `${Math.min(index, 9) * 120}ms` }}
          onClick={() => onImageClick(url)}
        >
          <img
            src={url}
            alt={`${altPrefix} ${index + 1}`}
            loading="lazy"
            onError={(e) => {
              if (fallbackImage && e.currentTarget.src !== fallbackImage) e.currentTarget.src = fallbackImage;
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="text-brand-accent w-8 h-8" />
          </div>
        </div>
      ))}
    </div>
  );
}

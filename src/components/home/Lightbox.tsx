import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { withWidth } from '../../utils/image';
import type { GalleryImage } from '../../data/gallery';

type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Lightbox({ images, index, onNavigate, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];
  const total = images.length;
  const prev = () => onNavigate((index - 1 + total) % total);
  const next = () => onNavigate((index + 1) % total);

  // Keyboard controls, scroll lock and focus restoration
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${image.alt} — image ${index + 1} of ${total}`}
      className="surface-dark fixed inset-0 z-[100] flex flex-col bg-charcoal/[0.97] text-ivory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="font-serif text-lg italic text-gold">
          {String(index + 1).padStart(2, '0')} <span className="text-ivory/40">/ {String(total).padStart(2, '0')}</span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ivory transition-colors hover:text-gold"
        >
          <X size={24} strokeWidth={1} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 sm:px-20">
        <AnimatePresence mode="wait">
          <motion.img
            key={image.id}
            src={withWidth(image.url, 2000)}
            alt={image.alt}
            className="max-h-full max-w-full object-contain"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            onClick={(e) => e.stopPropagation()}
          />
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-6 px-5 py-6 sm:px-8" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
        >
          <ArrowLeft size={18} strokeWidth={1.25} />
        </button>
        <p className="eyebrow truncate text-center text-ivory/70">{image.alt}</p>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
        >
          <ArrowRight size={18} strokeWidth={1.25} />
        </button>
      </div>
    </motion.div>
  );
}

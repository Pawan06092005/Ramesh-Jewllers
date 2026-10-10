import React from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import Img from '../common/Img';
import type { GalleryImage } from '../../data/gallery';

type GalleryCardProps = {
  image: GalleryImage;
  /** Signed distance from the centre of the carousel (0 = centre card) */
  offset: number;
  onClick: () => void;
};

// Position, size and dimming for each step away from the centre
const steps = [
  { x: 0, scale: 1, dim: 0 },
  { x: 78, scale: 0.82, dim: 0.35 },
  { x: 140, scale: 0.66, dim: 0.55 },
];

export default function GalleryCard({ image, offset, onClick }: GalleryCardProps) {
  const distance = Math.abs(offset);
  const visible = distance <= 2;
  const step = steps[Math.min(distance, 2)];
  const sign = Math.sign(offset);
  const isCentre = offset === 0;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      tabIndex={isCentre ? 0 : -1}
      aria-hidden={!visible}
      aria-label={isCentre ? `Open ${image.alt} in full screen` : `Show ${image.alt}`}
      className={`group absolute inset-0 overflow-hidden rounded-xl bg-beige ${
        isCentre ? 'shadow-[0_40px_70px_-30px_rgba(25,24,23,0.55)]' : ''
      } ${visible ? '' : 'pointer-events-none'}`}
      style={{ zIndex: 30 - distance * 10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        x: `${sign * (visible ? step.x : 190)}%`,
        scale: visible ? step.scale : 0.55,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <Img
        src={image.url}
        alt={image.alt}
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 66vw"
        className="pointer-events-none h-full w-full select-none object-cover"
        draggable={false}
      />
      {/* Side cards recede into shadow */}
      <motion.span
        className="absolute inset-0 bg-charcoal"
        animate={{ opacity: step.dim }}
        transition={{ duration: 0.75 }}
        aria-hidden="true"
      />
      {isCentre && (
        <span
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-charcoal opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <Expand size={16} strokeWidth={1.5} />
        </span>
      )}
    </motion.button>
  );
}

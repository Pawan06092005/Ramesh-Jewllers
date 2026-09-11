import React from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-sm p-4 animate-fade-in-up">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-brand-light hover:text-brand-accent transition-colors focus:outline-none"
      >
        <X size={32} />
      </button>
      <img 
        src={image} 
        alt="Gallery Enlarge" 
        className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl border border-brand-accent/20"
      />
    </div>
  );
}

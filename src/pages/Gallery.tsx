import React from 'react';
import GallerySection from '../components/home/Gallery';

export default function Gallery() {
  return (
    <div className="pt-20">
      <div className="bg-brand-primary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Gallery</h1>
        <div className="w-16 h-1 bg-brand-accent mx-auto" />
      </div>
      <GallerySection />
    </div>
  );
}

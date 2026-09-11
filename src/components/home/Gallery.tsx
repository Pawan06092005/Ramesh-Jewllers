import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import GalleryCard from './GalleryCard';
import Lightbox from './Lightbox';
import { galleryData } from '../../data/gallery';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-brand-light">
      <Container>
        <div ref={revealRef} className="reveal">
          <SectionHeading 
            title="Curated Gallery"
            subtitle="Moments of Brilliance"
            centered={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {galleryData.map((item, index) => (
            <GalleryCard 
              key={item.id} 
              image={item} 
              index={index} 
              onClick={setSelectedImage} 
            />
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </section>
  );
}

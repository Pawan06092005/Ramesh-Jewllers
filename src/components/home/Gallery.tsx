import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import BentoGallery from '../common/BentoGallery';
import Lightbox from './Lightbox';
import { galleryCategories } from '../../data/gallery';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeId, setActiveId] = useState(galleryCategories[0].id);
  const revealRef = useScrollReveal();
  const active = galleryCategories.find((c) => c.id === activeId) ?? galleryCategories[0];

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

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12" role="tablist">
          {galleryCategories.map((category) => {
            const isActive = category.id === active.id;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(category.id)}
                className={`px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-primary text-brand-accent border-brand-primary shadow-md'
                    : 'bg-transparent text-brand-primary border-brand-accent/50 hover:border-brand-primary hover:bg-brand-primary/5'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* key forces a re-mount so tiles re-animate when switching tabs */}
        <BentoGallery
          key={active.id}
          images={active.images}
          altPrefix={active.title}
          fallbackImage={active.images[0]}
          onImageClick={setSelectedImage}
        />
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

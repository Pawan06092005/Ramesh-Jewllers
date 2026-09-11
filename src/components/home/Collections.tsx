import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import CollectionCard from './CollectionCard';
import { collectionsData } from '../../data/collections';

export default function Collections() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-brand-light">
      <Container>
        <div ref={revealRef} className="reveal">
          <SectionHeading 
            title="Our Signature Collections"
            subtitle="Discover The Extraordinary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsData.map((collection, index) => {
            const cardReveal = useScrollReveal({ 
              threshold: 0.1, 
              persist: false 
            });
            
            return (
              <div 
                key={collection.id} 
                ref={cardReveal}
                className="reveal" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CollectionCard {...collection} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

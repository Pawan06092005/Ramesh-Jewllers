import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import Button from '../common/Button';

export default function FeaturedCollection() {
  const textReveal = useScrollReveal();
  const imageRevealLeft = useScrollReveal();
  const imageRevealRight = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Images Layout (Magazine Editorial Style) */}
          <div className="lg:w-1/2 flex gap-4 h-[600px]">
            <div ref={imageRevealLeft} className="reveal w-2/3 h-full pt-12">
              <img
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop"
                alt="Featured Masterpiece"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
            <div ref={imageRevealRight} className="reveal w-1/3 flex flex-col gap-4 h-full pb-12">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop"
                alt="Detail View 1"
                className="w-full h-1/2 object-cover rounded-sm shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
                alt="Detail View 2"
                className="w-full h-1/2 object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div ref={textReveal} className="reveal lg:w-1/2">
            <span className="block text-brand-accent font-sans tracking-[0.2em] uppercase mb-4 text-sm">
              The Royal Heritage
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              A Masterpiece of <br />
              <span className="text-brand-accent italic font-light">Elegance</span>
            </h2>
            <div className="w-16 h-1 bg-brand-accent mb-8" />
            
            <p className="text-brand-light/90 leading-relaxed mb-8 font-light text-lg">
              Inspired by the grandeur of ancient royalty, this exclusive collection brings together the finest diamonds and purest gold. Every curve and cut is meticulously crafted by our master artisans to create a legacy you can wear.
            </p>
            
            <Button to="/collections/royal-heritage" variant="gold">
              Discover The Collection
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

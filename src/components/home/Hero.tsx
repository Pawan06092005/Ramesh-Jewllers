import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../common/Button';
import logo from '../../assets/ramesh.png';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-primary">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-primary/80 z-10" />
        <img
          src="https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?s=1024x1024&w=is&k=20&c=rLY5nWR7mGlRyQEeiX6z8VLq3d1vfDWCRHHgUcmYXkk="
          alt="Luxury Gold Jewellery"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div ref={revealRef} className="reveal relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* <img
          src={logo}
          alt="Ramesh Jewellers Logo"
          className="h-24 md:h-32 w-auto object-contain mb-8 animate-fade-in-up"
        /> */}

        <span className="block text-brand-accent font-sans tracking-[0.2em] uppercase mb-4 text-sm md:text-base animate-fade-in-up animation-delay-200">
          Welcome to Ramesh Jewellers
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight text-shadow-gold animate-fade-in-up animation-delay-400">
          Timeless Jewellery,<br />
          <span className="italic text-brand-accent font-light">Crafted for Every</span><br />
          Special Moment
        </h1>

        <p className="text-brand-light mb-10 text-lg md:text-xl font-light max-w-2xl mx-auto animate-fade-in-up animation-delay-600 opacity-90">
          Timeless Jewellery. Trusted Craftsmanship. Beautiful Moments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Button to="/collections" variant="gold">
            Explore Collection
          </Button>
          <Button to="/contact" variant="outline" className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-primary">
            Visit Our Store
          </Button>
        </div>
      </div>
    </section>
  );
}

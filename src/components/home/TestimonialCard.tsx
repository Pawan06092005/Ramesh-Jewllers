import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function TestimonialCard({ name, text, rating, index }) {
  const revealRef = useScrollReveal({ threshold: 0.1 });

  return (
    <div 
      ref={revealRef}
      className="reveal bg-brand-light p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 relative border border-brand-accent/20"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Quote className="absolute top-6 right-6 text-brand-primary/10 w-16 h-16 transform -scale-x-100" />
      <div className="flex mb-6 relative z-10">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
        ))}
      </div>
      <p className="text-brand-muted italic leading-relaxed mb-6 font-light relative z-10">
        "{text}"
      </p>
      <h4 className="font-serif text-brand-primary text-lg font-bold relative z-10">— {name}</h4>
    </div>
  );
}

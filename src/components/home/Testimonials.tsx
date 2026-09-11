import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../../data/testimonials';

export default function Testimonials() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 bg-brand-primary">
      <Container>
        <div ref={revealRef} className="reveal">
          <SectionHeading 
            title="What Our Clients Say"
            subtitle="Testimonials"
            centered={true}
            dark={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

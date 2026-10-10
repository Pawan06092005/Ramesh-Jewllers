import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../../data/testimonials';

export default function Testimonials({ index = '06' }: { index?: string }) {
  const [active, setActive] = useState(0);
  const total = testimonialsData.length;
  const current = testimonialsData[active];

  if (total === 0) return null;

  const go = (step: number) => setActive((i) => (i + step + total) % total);

  return (
    <section className="bg-ivory pb-28 sm:pb-36 lg:pb-44" aria-roledescription="carousel" aria-label="Client testimonials">
      <Container>
        <div className="grid grid-cols-12 gap-y-14 border-t border-charcoal/10 pt-20 sm:pt-28 lg:gap-x-8 lg:pt-32">
          <div className="col-span-12 lg:col-span-4">
            <SectionHeading
              index={index}
              subtitle="Testimonials"
              title={
                <>
                  Kind <span className="italic text-gold-deep">words</span>
                </>
              }
            />
            <Reveal delay={0.1} className="mt-12 flex items-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
              >
                <ArrowLeft size={18} strokeWidth={1.25} />
              </button>
              <p className="font-serif text-lg italic text-gold-deep" aria-live="polite">
                {String(active + 1).padStart(2, '0')}{' '}
                <span className="text-stone">/ {String(total).padStart(2, '0')}</span>
              </p>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
              >
                <ArrowRight size={18} strokeWidth={1.25} />
              </button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="col-span-12 min-h-[22rem] sm:min-h-[20rem] lg:col-span-7 lg:col-start-6">
            <AnimatePresence mode="wait">
              <TestimonialCard key={current.id} name={current.name} text={current.text} />
            </AnimatePresence>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

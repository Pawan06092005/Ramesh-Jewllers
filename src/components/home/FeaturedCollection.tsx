import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import Img from '../common/Img';

export default function FeaturedCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section ref={sectionRef} className="surface-dark overflow-hidden bg-charcoal text-ivory">
      <div className="grid lg:min-h-screen lg:grid-cols-2">
        {/* Full-bleed photograph */}
        <div className="relative h-[75vh] overflow-hidden bg-charcoal-soft lg:h-auto">
          <motion.div className="absolute -inset-y-[10%] inset-x-0" style={{ y: imageY }}>
            <Img
              src="https://images.unsplash.com/photo-1599459183200-59c7687a0275?q=80&w=1600&auto=format&fit=crop"
              alt="Layered gold chains worn with a gold silk dress"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent lg:hidden" aria-hidden="true" />
        </div>

        {/* Story */}
        <div className="relative flex items-center px-5 py-24 sm:px-8 sm:py-28 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <Reveal className="mb-14 hidden w-56 lg:-ml-48 lg:block xl:-ml-56 xl:w-64">
              <div className="aspect-[4/5] overflow-hidden border-[10px] border-charcoal bg-charcoal-soft">
                <Img
                  src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=800&auto=format&fit=crop"
                  alt="Gold rings set with coloured gemstones"
                  sizes="256px"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-4 text-gold">
                <span className="font-serif text-lg normal-case italic tracking-normal">03</span>
                <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
                The Royal Heritage
              </p>
              <h2 className="text-[2.75rem] leading-[1.02] sm:text-6xl xl:text-7xl">
                A masterpiece of
                <br />
                <span className="italic text-gold">elegance</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-10 text-base leading-relaxed text-ivory/70 sm:text-lg">
                Inspired by the grandeur of ancient royalty, this exclusive collection brings together the finest
                diamonds and purest gold. Every curve and cut is meticulously crafted by our master artisans to create
                a legacy you can wear.
              </p>
              <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-10">
                <Button to="/collections" variant="gold" arrow>
                  Discover the Collection
                </Button>
                <Button to="/contact?enquiry=The%20Royal%20Heritage%20collection" variant="text-light">
                  Enquire
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

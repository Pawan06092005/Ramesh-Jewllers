import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';
import Img from '../common/Img';
import { business } from '../../data/business';

const ease = [0.22, 1, 0.36, 1] as const;

const heroImage =
  'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop';

const headline = [
  { text: 'Timeless jewellery,', accent: false },
  { text: 'crafted for every', accent: false },
  { text: 'special moment.', accent: true },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '12%']);

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="surface-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal text-ivory lg:block"
    >
      {/* Photograph — sits above the text on mobile, a framed full-height panel on desktop */}
      <motion.div
        className="relative h-[58svh] min-h-[340px] overflow-hidden bg-charcoal-soft lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46%]"
        initial={{ clipPath: 'inset(0 0 0 100%)' }}
        animate={{ clipPath: 'inset(0 0 0 0%)' }}
        transition={{ duration: 1.6, ease }}
      >
        <motion.div className="absolute -top-[6%] bottom-0 inset-x-0" style={{ y: imageY }}>
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.8, ease }}
          >
            <Img
              src={heroImage}
              alt="Handcrafted gold necklace and matching earrings set with red stones"
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-full w-full object-cover object-[30%_center] contrast-[1.04]"
            />
          </motion.div>
        </motion.div>

        {/* Soft vignette keeps the gold glowing and the navbar legible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(25,24,23,0.55)_100%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-charcoal/85 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal to-transparent lg:hidden" aria-hidden="true" />

        {/* Fine gold frame and caption (desktop) */}
        <motion.div
          className="pointer-events-none absolute bottom-8 left-8 right-8 top-44 hidden border border-gold/45 lg:block xl:bottom-10 xl:left-10 xl:right-10 xl:top-48"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 1, ease }}
          aria-hidden="true"
        />
        <motion.p
          className="eyebrow absolute bottom-14 left-14 hidden items-center gap-3 text-ivory/80 lg:flex xl:bottom-16 xl:left-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease }}
        >
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          Gold Jewellery
        </motion.p>
      </motion.div>

      <Container className="relative z-10 -mt-20 flex flex-1 flex-col justify-end pb-14 lg:mt-0 lg:min-h-[100svh] lg:justify-center lg:pb-16 lg:pt-48 xl:pt-56">
        <div className="max-w-[40rem] lg:w-[52%] lg:max-w-none lg:pr-10">
          <motion.p
            className="eyebrow mb-8 flex items-center gap-4 text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
          >
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Welcome to {business.name}
          </motion.p>

          <h1 className="text-[2.85rem] leading-[0.98] sm:text-7xl lg:text-[3.25rem] xl:text-[4.75rem] 2xl:text-[5.5rem]">
            {headline.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${line.accent ? 'italic text-gold' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.3, delay: 0.45 + i * 0.13, ease }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.05, ease }}
          >
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/75 sm:text-lg">
              {business.tagline}
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 lg:gap-x-8 xl:gap-x-10">
              <Button to="/collections" variant="gold" arrow>
                Explore Collections
              </Button>
              <Button to="/contact" variant="text-light">
                Visit Our Store
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue, tucked beside the photograph */}
      <div
        className="pointer-events-none absolute bottom-10 right-[calc(46%+2.5rem)] hidden flex-col items-center gap-4 lg:flex"
        aria-hidden="true"
      >
        <span className="eyebrow text-ivory/50 [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-16 w-px overflow-hidden bg-ivory/15">
          <span className="absolute inset-0 animate-scroll-line bg-gold motion-reduce:animate-none" />
        </span>
      </div>
    </section>
  );
}

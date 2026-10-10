import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import Img from './Img';

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
  imageAlt?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Editorial header for inner pages: oversized serif title with an optional
 * cropped image strip and a short introduction set off to the side.
 */
export default function PageHeader({ eyebrow, title, intro, image, imageAlt = '' }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-ivory pt-32 sm:pt-40 lg:pt-56">
      <Container>
        <div className="grid grid-cols-12 items-end gap-y-10 border-b border-charcoal/10 pb-12 lg:pb-16">
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              className="eyebrow mb-6 flex items-center gap-4 text-gold-deep"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease }}
            >
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {eyebrow}
            </motion.p>
            <h1 className="overflow-hidden pb-2 text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[7.5rem]">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease }}
              >
                {title}
              </motion.span>
            </h1>
          </div>
          {intro && (
            <motion.div
              className="col-span-12 max-w-md text-base leading-relaxed text-stone lg:col-span-4 lg:justify-self-end lg:pb-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
            >
              {intro}
            </motion.div>
          )}
        </div>
      </Container>

      {image && (
        <Container className="pt-10 lg:pt-14">
          <motion.div
            className="relative aspect-[16/9] overflow-hidden bg-beige sm:aspect-[21/8]"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1.4, delay: 0.3, ease }}
          >
            <Img src={image} alt={imageAlt} priority sizes="(min-width: 1360px) 1280px, 100vw" className="h-full w-full object-cover" />
          </motion.div>
        </Container>
      )}
    </header>
  );
}

import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import GalleryCard from './GalleryCard';
import Lightbox from './Lightbox';
import { galleryCategories, galleryData } from '../../data/gallery';

type CategoryId = (typeof galleryCategories)[number]['id'];

type GalleryProps = {
  showHeading?: boolean;
  index?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Gallery({ showHeading = true, index: sectionIndex = '05' }: GalleryProps) {
  const [category, setCategory] = useState<CategoryId>('all');
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dragged = useRef(false);

  const images = useMemo(
    () => (category === 'all' ? galleryData : galleryData.filter((img) => img.category === category)),
    [category]
  );
  const total = images.length;
  const current = images[active];
  const categoryLabel = (id: string) => galleryCategories.find((c) => c.id === id)?.label ?? '';

  const go = (step: number) => setActive((i) => (i + step + total) % total);

  const selectCategory = (id: CategoryId) => {
    setCategory(id);
    setActive(0);
  };

  // Signed distance from the centre card, wrapped so the carousel loops
  const offsetOf = (i: number) => {
    let o = i - active;
    if (o > total / 2) o -= total;
    if (o < -total / 2) o += total;
    return o;
  };

  const handleCardClick = (i: number) => {
    if (dragged.current) return;
    if (i === active) setLightboxOpen(true);
    else setActive(i);
  };

  return (
    <section
      className={`overflow-hidden bg-ivory ${showHeading ? 'pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-40' : 'pb-24 pt-14 sm:pb-32 lg:pb-36'}`}
    >
      <Container>
        {showHeading && (
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <SectionHeading
              centered
              index={sectionIndex}
              subtitle="Gallery"
              title={
                <>
                  Moments of <span className="italic text-gold-deep">brilliance</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-stone">
                Explore our jewellery by collection — select a category, then browse with the arrows.
              </p>
            </Reveal>
          </div>
        )}

        {/* Category filters */}
        <Reveal delay={0.1}>
          <div
            role="group"
            aria-label="Filter gallery by collection"
            className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
          >
            {galleryCategories.map((c) => {
              const selected = c.id === category;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => selectCategory(c.id)}
                  aria-pressed={selected}
                  className={`min-h-[44px] shrink-0 rounded-full border px-5 text-sm font-medium tracking-wide transition-all duration-300 ease-luxe ${
                    selected
                      ? 'border-charcoal bg-charcoal text-ivory'
                      : 'border-charcoal/20 text-charcoal hover:border-charcoal'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
            {showHeading && (
              <Link
                to="/gallery"
                className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border border-charcoal px-5 text-sm font-medium tracking-wide text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory"
              >
                View More
                <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </Reveal>

        {/* Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Jewellery gallery"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') go(-1);
            if (e.key === 'ArrowRight') go(1);
          }}
          className="mt-12 rounded-xl lg:mt-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
            >
              <motion.div
                className="relative mx-auto aspect-[4/5] w-[66vw] max-w-[300px] cursor-grab active:cursor-grabbing sm:w-[340px] sm:max-w-none lg:w-[380px]"
                drag="x"
                dragSnapToOrigin
                dragElastic={0.18}
                onDragStart={() => {
                  dragged.current = true;
                }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                  // Let the click that ends a drag pass without opening the viewer
                  setTimeout(() => (dragged.current = false), 50);
                }}
              >
                {images.map((img, i) => (
                  <GalleryCard
                    key={img.id}
                    image={img}
                    offset={offsetOf(i)}
                    onClick={() => handleCardClick(i)}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Caption + controls */}
          {current && (
            <div className="mt-10 flex flex-col items-center text-center sm:mt-12">
              <p className="eyebrow text-gold-deep">{categoryLabel(current.category)}</p>
              <p className="mt-2 font-serif text-2xl text-charcoal sm:text-3xl" aria-live="polite">
                {current.alt}
              </p>
              <div className="mt-7 flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                >
                  <ArrowLeft size={18} strokeWidth={1.5} />
                </button>
                <p className="min-w-[4.5rem] font-serif text-lg italic text-gold-deep">
                  {String(active + 1).padStart(2, '0')} <span className="text-stone">/ {String(total).padStart(2, '0')}</span>
                </p>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                >
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>

      <AnimatePresence>
        {lightboxOpen && current && (
          <Lightbox images={images} index={active} onNavigate={setActive} onClose={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}

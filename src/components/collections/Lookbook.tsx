import React from 'react';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import Img from '../common/Img';
import Button from '../common/Button';
import { collectionsData } from '../../data/collections';

/** Collections page: a jump index followed by one editorial "chapter" per collection. */
export default function Lookbook() {
  return (
    <>
      <nav aria-label="Collections index" className="bg-ivory">
        <Container>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-b border-charcoal/10 py-8 lg:justify-between">
            {collectionsData.map((c, i) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="group inline-flex min-h-[44px] items-baseline gap-2 text-charcoal">
                  <span className="font-serif text-sm italic text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                  <span className="link-underline eyebrow">{c.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="bg-ivory pb-16 pt-20 sm:pt-28 lg:pt-36">
        {collectionsData.map((c, i) => {
          const flipped = i % 2 === 1;
          const number = String(i + 1).padStart(2, '0');
          return (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-24 pb-28 lg:scroll-mt-32 sm:pb-36 lg:pb-44">
              <Container>
                <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-8">
                  {/* Imagery */}
                  <div className={`relative col-span-12 pb-14 sm:col-span-10 lg:col-span-6 lg:pb-0 ${flipped ? 'sm:col-start-3 lg:col-start-7' : ''}`}>
                    <Reveal className={`relative aspect-[4/5] w-[82%] overflow-hidden bg-beige ${flipped ? 'ml-auto' : ''}`}>
                      <Img src={c.image} alt={c.title} sizes="(min-width: 1024px) 42vw, 82vw" className="h-full w-full object-cover" />
                    </Reveal>
                    <Reveal
                      delay={0.2}
                      className={`absolute bottom-0 w-[42%] lg:-bottom-12 ${flipped ? 'left-0' : 'right-0'}`}
                    >
                      <div className="aspect-[3/4] overflow-hidden border-[8px] border-ivory bg-beige sm:border-[10px]">
                        <Img src={c.hoverImage} alt="" sizes="(min-width: 1024px) 22vw, 42vw" className="h-full w-full object-cover" />
                      </div>
                    </Reveal>
                  </div>

                  {/* Text */}
                  <Reveal
                    delay={0.1}
                    className={`col-span-12 lg:col-span-4 ${flipped ? 'lg:col-start-2 lg:row-start-1' : 'lg:col-start-8'}`}
                  >
                    <span className="block font-serif text-6xl italic leading-none text-gold sm:text-7xl" aria-hidden="true">
                      {number}
                    </span>
                    <h2 id={`${c.id}-title`} className="mt-6 text-[2.5rem] leading-[1.05] text-charcoal sm:text-5xl">
                      {c.title}
                    </h2>
                    <div className="mt-6 h-px w-12 bg-gold" aria-hidden="true" />
                    <p className="mt-6 max-w-sm text-base leading-relaxed text-stone sm:text-lg">{c.description}</p>
                    <Button
                      to={`/contact?enquiry=${encodeURIComponent(c.title)}`}
                      variant="outline"
                      arrow
                      className="mt-10"
                    >
                      Enquire
                    </Button>
                  </Reveal>
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </>
  );
}

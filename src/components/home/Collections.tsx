import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Button from '../common/Button';
import CollectionCard from './CollectionCard';
import { collectionsData } from '../../data/collections';

// Editorial zig-zag: one large lead image, then alternating offset cards
const layout = [
  { wrap: 'lg:col-span-7', aspect: 'aspect-[4/5]', sizes: '(min-width: 1024px) 55vw, (min-width: 640px) 50vw, 100vw' },
  { wrap: 'sm:mt-24 lg:col-span-4 lg:col-start-9 lg:mt-56', aspect: 'aspect-[3/4]' },
  { wrap: 'lg:col-span-5 lg:col-start-2', aspect: 'aspect-[3/4]' },
  { wrap: 'sm:mt-24 lg:col-span-5 lg:col-start-8 lg:mt-40', aspect: 'aspect-[4/5]' },
];

export default function Collections() {
  const featured = collectionsData.slice(0, layout.length);

  return (
    <section className="bg-ivory pb-28 sm:pb-36 lg:pb-44">
      <Container>
        <div className="grid grid-cols-12 items-end gap-y-8 border-t border-charcoal/10 pt-20 sm:pt-28 lg:pt-32">
          <SectionHeading
            className="col-span-12 lg:col-span-7"
            index="02"
            subtitle="Discover the Extraordinary"
            title={
              <>
                Our signature <span className="italic text-gold-deep">collections</span>
              </>
            }
          />
          <Reveal delay={0.15} className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p className="text-base leading-relaxed text-stone">
              From radiant 22k gold to brilliant-cut diamonds and bespoke, handcrafted designs — explore the
              collections that define Ramesh Jewellers.
            </p>
            <Button to="/collections" variant="text" className="mt-6">
              View all collections
            </Button>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-16 sm:gap-x-8 lg:mt-28 lg:gap-y-24">
          {featured.map((collection, index) => (
            <Reveal
              key={collection.id}
              delay={(index % 2) * 0.12}
              className={`col-span-12 sm:col-span-6 ${layout[index].wrap}`}
            >
              <CollectionCard
                {...collection}
                index={index}
                aspect={layout[index].aspect}
                sizes={layout[index].sizes}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

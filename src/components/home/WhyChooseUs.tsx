import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Img from '../common/Img';

const features = [
  {
    title: 'Premium Quality',
    description: '100% certified diamonds and hallmarked gold ensuring the highest standards of purity.'
  },
  {
    title: 'Elegant Designs',
    description: 'Exclusive, handcrafted patterns that perfectly blend traditional aesthetics with modern elegance.'
  },
  {
    title: 'Trusted Craftsmanship',
    description: 'Over five decades of excellence, preserving the heritage of fine jewellery making.'
  },
  {
    title: 'Personalized Service',
    description: 'A bespoke shopping experience tailored to understand and fulfill your unique desires.'
  }
];

/** Craftsmanship & promise section — anchored as #craftsmanship for the main navigation. */
export default function WhyChooseUs({ index = '04' }: { index?: string }) {
  return (
    <section id="craftsmanship" className="scroll-mt-20 bg-beige lg:scroll-mt-28 py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index={index}
                subtitle="The Ramesh Jewellers Promise"
                title={
                  <>
                    The quiet art of
                    <br />
                    <span className="italic text-gold-deep">fine jewellery</span>
                  </>
                }
              />
              <Reveal delay={0.15} as="figure" className="mt-12 w-[78%] sm:w-[60%] lg:w-[78%]">
                <div className="aspect-[4/5] overflow-hidden bg-ivory">
                  <Img
                    src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop"
                    alt="Close-up of twisted gold hoop earrings"
                    sizes="(min-width: 1024px) 30vw, 60vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="eyebrow mt-4 flex items-center gap-3 text-stone">
                  <span className="h-px w-6 bg-gold-deep" aria-hidden="true" />
                  Detail — Gold
                </figcaption>
              </Reveal>
            </div>
          </div>

          <ol className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-28">
            {features.map((feature, i) => (
              <Reveal
                as="li"
                key={feature.title}
                delay={i * 0.06}
                className="grid grid-cols-[4.5rem_1fr] gap-x-4 border-t border-charcoal/15 py-10 last:border-b sm:grid-cols-[6rem_1fr] sm:py-12"
              >
                <span className="font-serif text-4xl italic leading-none text-gold-deep sm:text-5xl" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-[1.75rem] leading-tight text-charcoal sm:text-[2rem]">{feature.title}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-stone">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

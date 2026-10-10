import React from 'react';
import { Award, Gem, Users } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Img from '../common/Img';
import Button from '../common/Button';

const features = [
  {
    icon: Award,
    title: 'Trusted Craftsmanship',
    description: 'Generations of expertise in creating flawless, enduring designs.'
  },
  {
    icon: Gem,
    title: 'Premium Quality',
    description: 'Only the finest gold and certified diamonds make our collection.'
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Your joy is our ultimate reward. We ensure a personalized experience.'
  }
];

export default function About({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="overflow-hidden bg-ivory pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-40">
      <Container>
        <div className="grid grid-cols-12 gap-y-20 lg:gap-x-8">
          {/* Image collage */}
          <div className="relative col-span-12 pb-16 sm:col-span-10 lg:col-span-5 lg:self-start lg:pb-0">
            <Reveal className="relative aspect-[4/5] w-[85%] overflow-hidden bg-beige">
              <Img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop"
                alt="Layered fine necklaces worn close to the collarbone"
                sizes="(min-width: 1024px) 36vw, 85vw"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.25} className="absolute bottom-0 right-0 w-[48%] lg:-bottom-16 lg:-right-10">
              <div className="aspect-square overflow-hidden border-[10px] border-ivory bg-beige">
                <Img
                  src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=800&auto=format&fit=crop"
                  alt="Stacked gold rings set with diamonds"
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <span
              className="eyebrow absolute -left-9 top-0 hidden rotate-180 text-stone [writing-mode:vertical-rl] xl:block"
              aria-hidden="true"
            >
              Ramesh Jewellers — Mumbai
            </span>
          </div>

          {/* Story */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-10">
            <SectionHeading
              index="01"
              subtitle="Our Story"
              title={
                <>
                  Crafted with trust,
                  <br />
                  <span className="italic text-gold-deep">worn with pride.</span>
                </>
              }
            />

            <Reveal delay={0.1}>
              <p className="mt-10 font-serif text-2xl leading-snug text-charcoal sm:text-[1.75rem]">
                For generations, Ramesh Jewellers has been a symbol of purity, trust, and exquisite craftsmanship.
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-stone">
                We believe that jewellery is more than just an ornament; it's a legacy passed down through time.
              </p>
            </Reveal>

            <ul className="mt-14 border-t border-charcoal/10">
              {features.map((feature, index) => (
                <Reveal as="li" key={feature.title} delay={0.1 + index * 0.08} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-charcoal/10 py-7 sm:grid-cols-[3rem_14rem_1fr]">
                  <feature.icon size={20} strokeWidth={1} className="mt-1 text-gold-deep" aria-hidden="true" />
                  <h3 className="font-serif text-2xl leading-tight text-charcoal">{feature.title}</h3>
                  <p className="col-start-2 mt-2 text-sm leading-relaxed text-stone sm:col-start-3 sm:mt-1">
                    {feature.description}
                  </p>
                </Reveal>
              ))}
            </ul>

            {showLink && (
              <Reveal className="mt-10">
                <Button to="/about" variant="text">Discover our story</Button>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

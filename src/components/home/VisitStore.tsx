import React from 'react';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import Button from '../common/Button';
import Img from '../common/Img';
import { business, mapUrl } from '../../data/business';

/** Closing call-to-action shown above the footer, built from the store's real details. */
export default function VisitStore() {
  return (
    <section className="surface-dark relative isolate overflow-hidden bg-charcoal text-ivory">
      <div className="absolute inset-0 -z-10">
        <Img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop"
          alt=""
          sizes="100vw"
          className="h-full w-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-charcoal" aria-hidden="true" />
      </div>

      <Container className="py-28 sm:py-36 lg:py-44">
        <div className="grid grid-cols-12 items-end gap-y-14 lg:gap-x-8">
          <Reveal className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold">
              <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
              Visit Our Store
            </p>
            <h2 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">
              Discover the collection
              <br />
              <span className="italic text-gold">in person.</span>
            </h2>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-10">
              <Button href={mapUrl} target="_blank" rel="noopener noreferrer" variant="gold" arrow>
                Get Directions
              </Button>
              <Button href={business.phoneHref} variant="text-light">
                Call {business.phone}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
            <div>
              <p className="eyebrow mb-3 text-gold">Address</p>
              <address className="text-base not-italic leading-relaxed text-ivory/80">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </div>
            <div>
              <p className="eyebrow mb-3 text-gold">Hours</p>
              <dl className="text-base leading-relaxed text-ivory/80">
                {business.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 border-b border-ivory/10 py-2 last:border-0">
                    <dt>{h.days}</dt>
                    <dd className="text-ivory/60">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

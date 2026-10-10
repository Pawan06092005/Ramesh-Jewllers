import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import instaIcon from '../../assets/insta-svg (1).svg';
import symbol from '../../assets/ramesh-symbol.webp';
import Container from '../common/Container';
import Logo from '../common/Logo';
import { business, mapUrl, navLinks } from '../../data/business';

export default function Footer() {
  return (
    <footer className="surface-dark bg-charcoal text-ivory">
      <Container>
        {/* Directory */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 pb-16 pt-20 md:grid-cols-12 lg:pt-24">
          <div className="col-span-2 md:col-span-12 lg:col-span-4">
            <Link to="/" aria-label="Ramesh Jewellers — Home" className="group inline-flex items-center gap-4 sm:gap-5">
              <img
                src={symbol}
                alt=""
                width={440}
                height={335}
                className="h-20 w-auto shrink-0 transition-transform duration-700 ease-luxe group-hover:scale-105 sm:h-24"
              />
              <span className="h-14 w-px bg-gold/30" aria-hidden="true" />
              <Logo surface="dark" className="h-12 sm:h-14" />
            </Link>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-ivory/60">
              Crafting timeless elegance and preserving the heritage of fine jewellery for generations.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <p className="eyebrow mb-5 text-gold">Explore</p>
            <ul className="space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="link-underline inline-block py-1.5 text-ivory/75 transition-colors hover:text-ivory">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <p className="eyebrow mb-5 text-gold">Visit</p>
            <address className="text-sm not-italic leading-relaxed text-ivory/75">
              {business.addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4 inline-block py-1 text-xs uppercase tracking-[0.2em] text-gold"
            >
              Get directions
            </a>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <p className="eyebrow mb-5 text-gold">Contact</p>
            <ul className="space-y-1 text-sm text-ivory/75">
              <li>
                <a href={business.phoneHref} className="link-underline inline-block py-1.5 hover:text-ivory">{business.phone}</a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="link-underline inline-block break-all py-1.5 hover:text-ivory">
                  {business.email}
                </a>
              </li>
            </ul>
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-3 py-1 text-sm text-ivory/75 transition-colors hover:text-ivory"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition-colors group-hover:border-gold">
                <img src={instaIcon} alt="" className="h-4 w-4" />
              </span>
              {business.instagram.handle}
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-ivory/10 py-8 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="group inline-flex min-h-[44px] items-center gap-3 uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-gold"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.25} className="transition-transform duration-500 ease-luxe group-hover:-translate-y-1" />
          </button>
        </div>
      </Container>
    </footer>
  );
}

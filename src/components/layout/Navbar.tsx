import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import Container from '../common/Container';
import Logo from '../common/Logo';
import symbol from '../../assets/ramesh-symbol.webp';
import { business, navLinks } from '../../data/business';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    const [path, hash] = href.split('#');
    if (hash) return location.pathname === path && location.hash === `#${hash}`;
    const onHashLink = location.hash && navLinks.some((l) => l.href === path + location.hash);
    return location.pathname === path && !onHashLink;
  };

  // Transparent with light text only while sitting over the dark home hero
  const overHero = location.pathname === '/' && !scrolled;
  // Full-size header at the top of any page, compact once the visitor scrolls
  const compact = scrolled;

  const linkClass = (href: string) =>
    `link-underline py-1.5 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 xl:text-sm ${
      isActive(href)
        ? overHero ? 'text-gold' : 'text-gold-deep'
        : overHero ? 'text-ivory hover:text-gold' : 'text-charcoal hover:text-gold-deep'
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-luxe ${
          overHero
            ? 'surface-dark bg-gradient-to-b from-charcoal/85 via-charcoal/50 to-transparent'
            : 'border-b border-charcoal/10 bg-ivory/95 shadow-[0_10px_30px_-20px_rgba(25,24,23,0.35)] backdrop-blur-md'
        }`}
      >
        <Container>
          {/* Top row: symbol · wordmark · call */}
          <div
            className={`grid grid-cols-[1fr_auto_1fr] items-center transition-[padding] duration-500 ease-luxe ${
              compact ? 'py-2' : 'py-3 lg:py-4'
            }`}
          >
            <Link to="/" aria-label="Ramesh Jewellers — Home" className="group justify-self-start">
              <img
                src={symbol}
                alt=""
                width={440}
                height={335}
                className={`w-auto transition-[height,transform,filter] duration-500 ease-luxe group-hover:scale-105 ${
                  compact ? 'h-10 lg:h-12' : 'h-11 sm:h-12 lg:h-14 xl:h-16'
                } ${overHero ? '' : 'brightness-[0.8] contrast-[1.15] saturate-[1.2]'}`}
              />
            </Link>

            <Link to="/" className="justify-self-center px-3" aria-label="Ramesh Jewellers — Home">
              <Logo
                surface={overHero ? 'dark' : 'light'}
                className={compact ? 'h-10 sm:h-11 lg:h-12' : 'h-12 sm:h-14 lg:h-16 xl:h-20'}
              />
            </Link>

            <div className="flex items-center justify-self-end">
              {/* Desktop call link */}
              <a
                href={business.phoneHref}
                className={`group hidden items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.12em] transition-colors lg:flex ${
                  overHero ? 'text-ivory hover:text-gold' : 'text-charcoal hover:text-gold-deep'
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                    overHero
                      ? 'border-ivory/30 text-gold group-hover:border-gold'
                      : 'border-charcoal/20 text-gold-deep group-hover:border-gold-deep'
                  }`}
                >
                  <Phone size={16} strokeWidth={1.5} />
                </span>
                <span className="hidden xl:inline">{business.phone}</span>
                <span className="xl:hidden">Call</span>
              </a>

              {/* Mobile: call + menu */}
              <a
                href={business.phoneHref}
                aria-label={`Call ${business.name}`}
                className={`flex h-11 w-11 items-center justify-center lg:hidden ${overHero ? 'text-gold' : 'text-gold-deep'}`}
              >
                <Phone size={20} strokeWidth={1.5} />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
                className={`-mr-2 flex h-11 w-11 flex-col items-end justify-center gap-[7px] pr-2 lg:hidden ${overHero ? 'text-ivory' : 'text-charcoal'}`}
              >
                <span className="h-[1.5px] w-7 bg-current" />
                <span className="h-[1.5px] w-5 bg-current" />
              </button>
            </div>
          </div>

          {/* Second row: main links (desktop) */}
          <nav aria-label="Main" className={`hidden border-t lg:block ${overHero ? 'border-ivory/15' : 'border-charcoal/10'}`}>
            <ul
              className={`flex items-center justify-center gap-8 transition-[padding] duration-500 ease-luxe xl:gap-12 ${
                compact ? 'py-2' : 'py-3'
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={linkClass(link.href)} aria-current={isActive(link.href) ? 'page' : undefined}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="surface-dark fixed inset-0 z-[60] flex flex-col bg-charcoal text-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Container className="flex items-center justify-between py-4">
              <span className="flex items-center gap-3">
                <img src={symbol} alt="" width={440} height={335} className="h-11 w-auto" />
                <Logo surface="dark" className="h-11 sm:h-12" />
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="-mr-2 flex h-11 w-11 items-center justify-center text-ivory"
              >
                <X size={26} strokeWidth={1.25} />
              </button>
            </Container>

            <Container className="flex flex-1 flex-col justify-center">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      className={`flex items-baseline gap-4 py-2 font-serif text-[2.5rem] font-medium leading-tight transition-colors ${
                        isActive(link.href) ? 'text-gold' : 'text-ivory hover:text-gold'
                      }`}
                    >
                      <span className="font-sans text-xs font-semibold text-gold/80">0{i + 1}</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </Container>

            <Container className="border-t border-ivory/10 py-8 text-sm text-ivory/75">
              <a href={business.phoneHref} className="block py-1 hover:text-gold">{business.phone}</a>
              <a href={`mailto:${business.email}`} className="block py-1 hover:text-gold">{business.email}</a>
              <a href={business.instagram.url} target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-gold">
                Instagram {business.instagram.handle}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

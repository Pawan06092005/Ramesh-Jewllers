import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../../assets/ramesh.png';
import navBg from '../../assets/nav_bg.jpeg';
import Container from '../common/Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-cover bg-center ${
        scrolled 
          ? 'shadow-lg border-b border-brand-accent/20 py-2' 
          : 'py-4'
      }`}
      style={{ backgroundImage: `url(${navBg})` }}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="Ramesh Jewellers Logo" 
              className={`transition-all duration-300 object-contain ${scrolled ? 'h-12' : 'h-16'}`} 
            />
            {/* Keeping the text optional or hidden on smaller screens since the image logo handles it mostly. The user said to use the logo and don't make it small. Let's keep just the image as the brand if it has the text, but the image is just the logo. Let's add the text next to it for SEO/fallback. */}
            <div className="flex flex-col items-start hidden lg:flex">
                {/* <span className="font-serif text-2xl font-bold text-white tracking-widest leading-none group-hover:text-brand-accent transition-colors">
                  RAMESH
                </span>
                <span className="font-serif text-sm tracking-[0.3em] text-brand-accent leading-none mt-1">
                  JEWELLERS
                </span> */}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                  location.pathname === link.href 
                    ? 'text-brand-accent' 
                    : 'text-brand-light hover:text-brand-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-accent hover:text-white focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full border-b border-brand-accent/20 transition-all duration-300 ease-in-out bg-cover bg-center ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        style={{ backgroundImage: `url(${navBg})` }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-center text-brand-light hover:text-brand-accent hover:bg-brand-secondary uppercase tracking-widest text-sm rounded-sm transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

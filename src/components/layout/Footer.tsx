import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../../assets/ramesh.png';
import instaIcon from '../../assets/insta-svg (1).svg';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="bg-brand-primary pt-20 pb-10 border-t-4 border-brand-accent">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-6 group">
              <img src={logo} alt="Ramesh Jewellers Logo" className="h-16 w-auto object-contain" />
              <div className="flex flex-col items-start">
                {/* <span className="font-serif text-2xl font-bold text-white tracking-widest leading-none group-hover:text-brand-accent transition-colors">
                  RAMESH
                </span>
                <span className="font-serif text-xs tracking-[0.3em] text-brand-accent leading-none mt-1">
                  JEWELLERS
                </span> */}
              </div>
            </Link>
            <p className="text-brand-light font-light leading-relaxed mb-6 text-sm opacity-90">
              Crafting timeless elegance and preserving the heritage of fine jewellery for generations. 
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rameshjewellers2004?stkn=MThpbmxmdDBlZWxqZg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 font-bold text-xs">
                <img src={instaIcon} alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-brand-light">
                <MapPin className="text-brand-accent shrink-0 mt-1" size={18} />
                <span className="text-sm font-light leading-relaxed">
                  Shop No.6, Siddiq Manzil, Nr.Ramesh Hotel, <br />
                  Kurar Village, Malad East, <br />
                  Mumbai-400097
                </span>
              </li>
              <li className="flex items-center space-x-3 text-brand-light">
                <Phone className="text-brand-accent shrink-0" size={18} />
                <span className="text-sm font-light">+91 9619603331</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-light">
                <Mail className="text-brand-accent shrink-0" size={18} />
                <span className="text-sm font-light">rameshjewellersks@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6 tracking-wide">Newsletter</h4>
            <p className="text-brand-light font-light text-sm mb-4 opacity-90">
              Subscribe to receive updates on our latest collections and exclusive offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-brand-secondary border border-brand-accent/30 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-accent rounded-sm transition-colors"
              />
              <button 
                type="submit"
                className="bg-brand-accent text-brand-dark font-medium px-4 py-3 uppercase tracking-widest text-sm hover:bg-brand-accentDark hover:text-white transition-all duration-300 rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-light font-light text-sm opacity-80">
            &copy; {new Date().getFullYear()} Ramesh Jewellers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-brand-light font-light text-sm opacity-80 hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-light font-light text-sm opacity-80 hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

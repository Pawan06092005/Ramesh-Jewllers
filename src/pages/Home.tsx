import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Collections from '../components/home/Collections';
import FeaturedCollection from '../components/home/FeaturedCollection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <div className="pt-20"> {/* Offset for sticky navbar */}
      <Hero />
      <About />
      <Collections />
      <FeaturedCollection />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
    </div>
  );
}

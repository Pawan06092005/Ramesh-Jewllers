import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Collections from '../components/home/Collections';
import FeaturedCollection from '../components/home/FeaturedCollection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import VisitStore from '../components/home/VisitStore';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <FeaturedCollection />
      <WhyChooseUs index="04" />
      <Gallery index="05" />
      <Testimonials index="06" />
      <VisitStore />
    </>
  );
}

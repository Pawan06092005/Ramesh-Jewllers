import React from 'react';
import CollectionsSection from '../components/home/Collections';
import FeaturedCollection from '../components/home/FeaturedCollection';

export default function Collections() {
  return (
    <div className="pt-20">
      <div className="bg-brand-primary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Collections</h1>
        <div className="w-16 h-1 bg-brand-accent mx-auto" />
      </div>
      <CollectionsSection />
      <FeaturedCollection />
    </div>
  );
}

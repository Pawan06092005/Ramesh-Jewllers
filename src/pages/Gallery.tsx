import React from 'react';
import PageHeader from '../components/common/PageHeader';
import GallerySection from '../components/home/Gallery';

export default function Gallery() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Gallery"
        subtitle="Our Finest Creations"
        image="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1600&auto=format&fit=crop"
      />
      <GallerySection />
    </div>
  );
}

import React from 'react';
import PageHeader from '../components/common/PageHeader';
import CollectionsSection from '../components/home/Collections';
import FeaturedCollection from '../components/home/FeaturedCollection';

export default function Collections() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Collections"
        subtitle="Timeless Craftsmanship"
        image="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1600&auto=format&fit=crop"
      />
      <CollectionsSection />
      <FeaturedCollection />
    </div>
  );
}

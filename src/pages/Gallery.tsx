import React from 'react';
import GallerySection from '../components/home/Gallery';
import VisitStore from '../components/home/VisitStore';
import PageHeader from '../components/common/PageHeader';

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Moments of Brilliance"
        title={
          <>
            Our <span className="italic text-gold-deep">gallery</span>
          </>
        }
        intro={
          <p>
            A closer look at the gold, diamonds and details that define our jewellery. Choose a collection, browse with
            the arrows, and select the centre image to view it in full.
          </p>
        }
      />
      <GallerySection showHeading={false} />
      <VisitStore />
    </>
  );
}

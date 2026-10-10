import React from 'react';
import Lookbook from '../components/collections/Lookbook';
import FeaturedCollection from '../components/home/FeaturedCollection';
import VisitStore from '../components/home/VisitStore';
import PageHeader from '../components/common/PageHeader';

export default function Collections() {
  return (
    <>
      <PageHeader
        eyebrow="Discover the Extraordinary"
        title={
          <>
            Our <span className="italic text-gold-deep">collections</span>
          </>
        }
        intro={
          <p>
            From pure 22k gold and brilliant-cut diamonds to complete bridal sets and bespoke, handcrafted designs —
            each collection is made to be treasured.
          </p>
        }
      />
      <Lookbook />
      <FeaturedCollection />
      <VisitStore />
    </>
  );
}

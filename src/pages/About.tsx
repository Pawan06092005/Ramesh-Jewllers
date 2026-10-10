import React from 'react';
import AboutSection from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import VisitStore from '../components/home/VisitStore';
import PageHeader from '../components/common/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage & Legacy"
        title={
          <>
            Our <span className="italic text-gold-deep">story</span>
          </>
        }
        intro={
          <p>
            Ramesh Jewellers has been a trusted name in fine jewellery for over five decades. We pride ourselves on our
            exquisite craftsmanship, ethical sourcing, and deep-rooted commitment to our customers.
          </p>
        }
        image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Gold bangle set with sparkling stones"
      />
      <AboutSection showLink={false} />
      <WhyChooseUs index="02" />
      <VisitStore />
    </>
  );
}

import React from 'react';
import AboutSection from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';

export default function About() {
  return (
    <div className="pt-32 pb-16 bg-brand-light">
      <Container>
        <SectionHeading 
          title="Our Story" 
          subtitle="Heritage & Legacy" 
          centered={true}
        />
        <div className="prose prose-lg mx-auto text-brand-muted text-center font-light mb-16">
          <p>
            Ramesh Jewellers has been a trusted name in fine jewellery for over five decades. 
            We pride ourselves on our exquisite craftsmanship, ethical sourcing, and deep-rooted 
            commitment to our customers.
          </p>
        </div>
      </Container>
      <AboutSection />
      <WhyChooseUs />
    </div>
  );
}

import React from 'react';
import AboutSection from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Container from '../components/common/Container';
import PageHeader from '../components/common/PageHeader';

export default function About() {
  return (
    <div className="pt-20 bg-brand-light">
      <PageHeader
        title="Our Story"
        subtitle="Heritage & Legacy"
        image="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1600&auto=format&fit=crop"
      />
      <Container className="pt-16">
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

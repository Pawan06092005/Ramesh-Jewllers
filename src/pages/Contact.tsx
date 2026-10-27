import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactSection from '../components/contact/Contact';

export default function Contact() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Contact Us"
        subtitle="Visit Our Store"
        image="https://images.unsplash.com/photo-1605337220261-0bc42b083315?q=80&w=1600&auto=format&fit=crop"
      />
      <ContactSection />
    </div>
  );
}

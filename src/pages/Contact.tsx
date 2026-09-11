import React from 'react';
import ContactSection from '../components/contact/Contact';

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="bg-brand-primary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
        <div className="w-16 h-1 bg-brand-accent mx-auto" />
      </div>
      <ContactSection />
    </div>
  );
}

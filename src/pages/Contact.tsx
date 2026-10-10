import React from 'react';
import ContactSection from '../components/contact/Contact';
import PageHeader from '../components/common/PageHeader';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Visit Our Store"
        title={
          <>
            Contact <span className="italic text-gold-deep">us</span>
          </>
        }
        intro={<p>Visit us in Kurar Village, Malad East, call the store, or send us a message below.</p>}
      />
      <ContactSection />
    </>
  );
}

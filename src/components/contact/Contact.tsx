import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function Contact() {
  const leftReveal = useScrollReveal();
  const rightReveal = useScrollReveal();

  const contactInfo = [
    {
      icon: <MapPin className="text-brand-accent w-6 h-6" />,
      title: 'Our Store',
      details: ['123 Jewellery Lane,', 'Diamond District,', 'New Delhi - 110001']
    },
    {
      icon: <Phone className="text-brand-accent w-6 h-6" />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 11 2345 6789']
    },
    {
      icon: <Mail className="text-brand-accent w-6 h-6" />,
      title: 'Email',
      details: ['info@rameshjewellers.com', 'support@rameshjewellers.com']
    },
    {
      icon: <Clock className="text-brand-accent w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Saturday:', '11:00 AM - 8:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <Container>
        <div ref={useScrollReveal()} className="reveal">
          <SectionHeading 
            title="Get In Touch"
            subtitle="Visit Our Store"
            centered={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Information */}
          <div ref={leftReveal} className="reveal">
            <h3 className="text-3xl font-serif text-brand-dark mb-8">We'd love to hear from you</h3>
            <p className="text-brand-muted font-light leading-relaxed mb-10">
              Whether you're looking for the perfect engagement ring or a custom-designed masterpiece, our expert jewellers are here to assist you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <h4 className="font-serif text-xl text-brand-dark">{info.title}</h4>
                  </div>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-brand-muted font-light">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div ref={rightReveal} className="reveal bg-white p-8 rounded-sm shadow-sm border border-brand-accent/20">
            <h3 className="text-2xl font-serif text-brand-dark mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brand-dark text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-light border border-brand-accent/30 px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm" />
                </div>
                <div>
                  <label className="block text-brand-dark text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-light border border-brand-accent/30 px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm" />
                </div>
              </div>
              <div>
                <label className="block text-brand-dark text-sm font-medium mb-2">Email Address</label>
                <input type="email" className="w-full bg-brand-light border border-brand-accent/30 px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm" />
              </div>
              <div>
                <label className="block text-brand-dark text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-light border border-brand-accent/30 px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm resize-none"></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

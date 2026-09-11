import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ShieldCheck, Diamond, Clock, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const revealRef = useScrollReveal();

  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Premium Quality',
      description: '100% certified diamonds and hallmarked gold ensuring the highest standards of purity.'
    },
    {
      icon: <Diamond size={32} />,
      title: 'Elegant Designs',
      description: 'Exclusive, handcrafted patterns that perfectly blend traditional aesthetics with modern elegance.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Trusted Craftsmanship',
      description: 'Over five decades of excellence, preserving the heritage of fine jewellery making.'
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Personalized Service',
      description: 'A bespoke shopping experience tailored to understand and fulfill your unique desires.'
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <Container>
        <div ref={revealRef} className="reveal">
          <SectionHeading 
            title="Why Choose Us"
            subtitle="The Ramesh Jewellers Promise"
            centered={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const featureReveal = useScrollReveal({ threshold: 0.1 });
            return (
              <div 
                key={index} 
                ref={featureReveal}
                className="reveal bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-brand-accent/10 hover:border-brand-accent/40 group text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-brand-primary/5 rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-brand-dark mb-4">{feature.title}</h3>
                <p className="text-brand-muted font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

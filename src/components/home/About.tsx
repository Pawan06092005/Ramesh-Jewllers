import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Award, Gem, Users } from 'lucide-react';

export default function About() {
  const revealRef = useScrollReveal();
  const imageReveal = useScrollReveal({ threshold: 0.2 });

  const features = [
    {
      icon: <Award className="w-6 h-6 text-brand-accent" />,
      title: "Trusted Craftsmanship",
      description: "Generations of expertise in creating flawless, enduring designs."
    },
    {
      icon: <Gem className="w-6 h-6 text-brand-accent" />,
      title: "Premium Quality",
      description: "Only the finest gold and certified diamonds make our collection."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-accent" />,
      title: "Customer Satisfaction",
      description: "Your joy is our ultimate reward. We ensure a personalized experience."
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div ref={imageReveal} className="reveal lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-primary translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
              alt="Jewellery Craftsmanship"
              className="relative z-10 w-full h-auto object-cover rounded-sm shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Text Content */}
          <div ref={revealRef} className="reveal lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">
              Crafted With Trust, <br/>
              <span className="text-brand-primary italic">Worn With Pride.</span>
            </h2>
            <div className="w-16 h-1 bg-brand-accent mb-8" />
            
            <p className="text-brand-muted leading-relaxed mb-8 font-light text-lg">
              For generations, Ramesh Jewellers has been a symbol of purity, trust, and exquisite craftsmanship. We believe that jewellery is more than just an ornament; it's a legacy passed down through time.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-sm hover:bg-white transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-brand-dark mb-2">{feature.title}</h3>
                    <p className="text-brand-muted text-sm font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

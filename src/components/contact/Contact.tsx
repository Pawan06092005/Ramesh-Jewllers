import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import Button from '../common/Button';
import { business, mapEmbedUrl, mapUrl } from '../../data/business';
import { collectionsData } from '../../data/collections';

const GENERAL = 'General enquiry';
const topics = [GENERAL, ...collectionsData.map((c) => c.title), 'The Royal Heritage collection'];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const enquiry = searchParams.get('enquiry');
  const initialTopic = enquiry && topics.includes(enquiry) ? enquiry : GENERAL;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: initialTopic,
    message: initialTopic === GENERAL ? '' : `I'd like to know more about your ${initialTopic}.`,
  });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  // There is no form backend, so the message is composed in the visitor's email app.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.topic} — ${form.firstName} ${form.lastName}`.trim());
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.firstName} ${form.lastName}\n${form.email}`
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const details = [
    {
      icon: MapPin,
      title: 'Our Store',
      content: (
        <>
          <address className="not-italic">
            {business.addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-3 inline-block text-xs uppercase tracking-[0.2em] text-gold-deep">
            Get directions
          </a>
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Phone',
      content: <a href={business.phoneHref} className="link-underline hover:text-charcoal">{business.phone}</a>,
    },
    {
      icon: Mail,
      title: 'Email',
      content: <a href={`mailto:${business.email}`} className="link-underline break-all hover:text-charcoal">{business.email}</a>,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: business.hours.map((h) => (
        <span key={h.days} className="block">
          {h.days}: {h.time}
        </span>
      )),
    },
  ];

  return (
    <>
      <section className="bg-ivory py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid grid-cols-12 gap-y-16 lg:gap-x-8">
            {/* Details */}
            <Reveal className="col-span-12 lg:col-span-5">
              <h2 className="text-[2.5rem] leading-[1.05] sm:text-5xl">
                We'd love to <span className="italic text-gold-deep">hear from you</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
                Whether you're looking for the perfect engagement ring or a custom-designed masterpiece, our expert
                jewellers are here to assist you.
              </p>

              <dl className="mt-12 border-t border-charcoal/10">
                {details.map((d) => (
                  <div key={d.title} className="grid grid-cols-[2rem_1fr] gap-x-4 border-b border-charcoal/10 py-6 sm:grid-cols-[2rem_9rem_1fr]">
                    <d.icon size={18} strokeWidth={1.25} className="mt-0.5 text-gold-deep" aria-hidden="true" />
                    <dt className="eyebrow mt-1 text-charcoal">{d.title}</dt>
                    <dd className="col-start-2 mt-2 text-base leading-relaxed text-stone sm:col-start-3 sm:mt-0">{d.content}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.15} className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="bg-white px-6 py-10 sm:px-12 sm:py-14">
                <p className="eyebrow mb-3 text-gold-deep">Send a Message</p>
                <h3 className="font-serif text-3xl leading-tight sm:text-4xl">How may we help?</h3>

                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="eyebrow block text-stone">First Name</label>
                      <input id="firstName" type="text" autoComplete="given-name" required value={form.firstName} onChange={update('firstName')} className="field" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="eyebrow block text-stone">Last Name</label>
                      <input id="lastName" type="text" autoComplete="family-name" value={form.lastName} onChange={update('lastName')} className="field" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow block text-stone">Email Address</label>
                    <input id="email" type="email" autoComplete="email" required value={form.email} onChange={update('email')} className="field" />
                  </div>
                  <div>
                    <label htmlFor="topic" className="eyebrow block text-stone">Enquiry About</label>
                    <div className="relative">
                      <select id="topic" value={form.topic} onChange={update('topic')} className="field cursor-pointer appearance-none pr-8">
                        {topics.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} strokeWidth={1.25} className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-stone" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="eyebrow block text-stone">Message</label>
                    <textarea id="message" rows={4} required value={form.message} onChange={update('message')} className="field resize-none" />
                  </div>
                  <Button type="submit" arrow className="w-full">
                    Send Message
                  </Button>
                  <p role="status" className="min-h-[1.25rem] text-sm text-stone">
                    {sent && 'Thank you — your email app should now open with your message ready to send.'}
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-label="Map" className="bg-ivory pb-24 sm:pb-32">
        <Container>
          <div className="relative aspect-[4/3] overflow-hidden bg-beige sm:aspect-[21/9]">
            <iframe
              title={`Map showing ${business.name}, Malad East, Mumbai`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.85] sepia-[0.15]"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

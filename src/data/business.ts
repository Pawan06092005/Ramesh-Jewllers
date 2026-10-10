// Single source of truth for store details, used by the navbar, footer and contact page.
export const business = {
  name: 'Ramesh Jewellers',
  tagline: 'Timeless Jewellery. Trusted Craftsmanship. Beautiful Moments.',
  addressLines: ['Shop No.6, Siddiq Manzil, Nr. Ramesh Hotel', 'Kurar Village, Malad East', 'Mumbai – 400097'],
  phone: '+91 9619603331',
  phoneHref: 'tel:+919619603331',
  email: 'rameshjewellersks@gmail.com',
  instagram: {
    handle: '@rameshjewellers2004',
    url: 'https://www.instagram.com/rameshjewellers2004?stkn=MThpbmxmdDBlZWxqZg==',
  },
  hours: [
    { days: 'Monday – Saturday', time: '11:00 AM – 8:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
};

const mapQuery = encodeURIComponent(
  'Ramesh Jewellers, Siddiq Manzil, Kurar Village, Malad East, Mumbai 400097'
);
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`;

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'Craftsmanship', href: '/about#craftsmanship' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

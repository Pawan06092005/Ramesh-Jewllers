const img = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

// Each collection's `gallery` is shown on /collections/:slug in a bento pattern that repeats every 5 images.
// Add as many images as you like; the pattern continues automatically.
// Replace these with your own product photos (e.g. '/images/gold/1.jpg' from the public folder).
export const collectionsData = [
  {
    id: 'gold-jewellery',
    slug: 'gold',
    title: 'Gold Jewellery',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop',
    description: 'Pure, radiant 22k gold masterpieces reflecting timeless tradition.',
    link: '/collections/gold',
    gallery: [
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1605337220261-0bc42b083315'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1601121141461-9d6647bca1ed'),
      img('photo-1605337220261-0bc42b083315'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1601121141461-9d6647bca1ed'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1599643478518-a784e5dc4c8f')
    ]
  },
  {
    id: 'diamond-jewellery',
    slug: 'diamond',
    title: 'Diamond Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
    description: 'Brilliant cut diamonds set in elegant, modern designs.',
    link: '/collections/diamond',
    gallery: [
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1603561591411-07134e71a2a9')
    ]
  },
  {
    id: 'bridal-jewellery',
    slug: 'bridal',
    title: 'Bridal Jewellery',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop',
    description: 'Complete, breathtaking sets curated for your special day.',
    link: '/collections/bridal',
    gallery: [
      img('photo-1601121141461-9d6647bca1ed'),
      img('photo-1596944924616-7b38e7cfac36'),
      img('photo-1605337220261-0bc42b083315'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1605337220261-0bc42b083315'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1601121141461-9d6647bca1ed'),
      img('photo-1596944924616-7b38e7cfac36')
    ]
  },
  {
    id: 'traditional-jewellery',
    slug: 'traditional',
    title: 'Traditional Jewellery',
    image: 'https://images.unsplash.com/photo-1605337220261-0bc42b083315?q=80&w=800&auto=format&fit=crop',
    description: 'Heritage designs inspired by our rich cultural legacy.',
    link: '/collections/traditional',
    gallery: [
      img('photo-1605337220261-0bc42b083315'),
      img('photo-1601121141461-9d6647bca1ed'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1596944924616-7b38e7cfac36'),
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1596944924616-7b38e7cfac36'),
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1605337220261-0bc42b083315'),
      img('photo-1601121141461-9d6647bca1ed')
    ]
  },
  {
    id: 'daily-wear',
    slug: 'daily',
    title: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
    description: 'Lightweight, sophisticated elegance for everyday grace.',
    link: '/collections/daily',
    gallery: [
      img('photo-1596944924616-7b38e7cfac36'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1596944924616-7b38e7cfac36'),
      img('photo-1535632066927-ab7c9ab60908')
    ]
  },
  {
    id: 'custom-jewellery',
    slug: 'custom',
    title: 'Custom Jewellery',
    image: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=800&auto=format&fit=crop',
    description: 'Bespoke, handcrafted designs turned into stunning reality.',
    link: '/collections/custom',
    gallery: [
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1515562141207-7a88fb7ce338')
    ]
  }
];

const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

export type Collection = {
  id: string;
  title: string;
  image: string;
  hoverImage: string;
  description: string;
  link: string;
};

export const collectionsData: Collection[] = [
  {
    id: 'gold-jewellery',
    title: 'Gold Jewellery',
    image: photo('1633810542706-90e5ff7557be'),
    hoverImage: photo('1611652022419-a9419f74343d'),
    description: 'Pure, radiant 22k gold masterpieces reflecting timeless tradition.',
    link: '/collections#gold-jewellery'
  },
  {
    id: 'diamond-jewellery',
    title: 'Diamond Jewellery',
    image: photo('1573408301185-9146fe634ad0'),
    hoverImage: photo('1588444650733-d0767b753fc8'),
    description: 'Brilliant cut diamonds set in elegant, modern designs.',
    link: '/collections#diamond-jewellery'
  },
  {
    id: 'bridal-jewellery',
    title: 'Bridal Jewellery',
    image: photo('1611591437281-460bfbe1220a'),
    hoverImage: photo('1515562141207-7a88fb7ce338'),
    description: 'Complete, breathtaking sets curated for your special day.',
    link: '/collections#bridal-jewellery'
  },
  {
    id: 'traditional-jewellery',
    title: 'Traditional Jewellery',
    image: photo('1626784215021-2e39ccf971cd'),
    hoverImage: photo('1601121141461-9d6647bca1ed'),
    description: 'Heritage designs inspired by our rich cultural legacy.',
    link: '/collections#traditional-jewellery'
  },
  {
    id: 'daily-wear',
    title: 'Daily Wear',
    image: photo('1596944924616-7b38e7cfac36'),
    hoverImage: photo('1617038220319-276d3cfab638'),
    description: 'Lightweight, sophisticated elegance for everyday grace.',
    link: '/collections#daily-wear'
  },
  {
    id: 'custom-jewellery',
    title: 'Custom Jewellery',
    image: photo('1603561591411-07134e71a2a9'),
    hoverImage: photo('1589674781759-c21c37956a44'),
    description: 'Bespoke, handcrafted designs turned into stunning reality.',
    link: '/collections#custom-jewellery'
  }
];

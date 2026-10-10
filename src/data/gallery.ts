const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
  { id: 'diamond', label: 'Diamond' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'daily', label: 'Daily Wear' },
  { id: 'custom', label: 'Custom' },
] as const;

export type GalleryCategory = Exclude<(typeof galleryCategories)[number]['id'], 'all'>;

export type GalleryImage = {
  id: number;
  url: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryData: GalleryImage[] = [
  // Bridal
  { id: 1, url: photo('1620656798579-1984d9e87df7'), alt: 'Gold Necklace and Rings', category: 'bridal' },
  { id: 2, url: photo('1515562141207-7a88fb7ce338'), alt: 'Pearl Necklace', category: 'bridal' },
  { id: 3, url: photo('1611085583191-a3b181a88401'), alt: 'Pearl Pendant', category: 'bridal' },
  // Gold
  { id: 4, url: photo('1633810542706-90e5ff7557be'), alt: 'Gold Link Chain and Bracelet', category: 'gold' },
  { id: 5, url: photo('1599459183200-59c7687a0275'), alt: 'Layered Gold Chains', category: 'gold' },
  { id: 6, url: photo('1617038260897-41a1f14a8ca0'), alt: 'Twisted Gold Hoops', category: 'gold' },
  { id: 7, url: photo('1617038220319-276d3cfab638'), alt: 'Gold Earrings', category: 'gold' },
  // Silver
  { id: 8, url: photo('1589674781759-c21c37956a44'), alt: 'Silver Pavé Ring', category: 'silver' },
  { id: 9, url: photo('1588444837495-c6cfeb53f32d'), alt: 'Silver Heart Pendant', category: 'silver' },
  { id: 10, url: photo('1611652022419-a9419f74343d'), alt: 'Layered Silver Necklaces', category: 'silver' },
  { id: 11, url: photo('1606760227091-3dd870d97f1d'), alt: 'Silver Jewellery Edit', category: 'silver' },
  // Diamond
  { id: 12, url: photo('1573408301185-9146fe634ad0'), alt: 'Diamond Bracelet', category: 'diamond' },
  { id: 13, url: photo('1543294001-f7cd5d7fb516'), alt: 'Gold and Diamond Rings', category: 'diamond' },
  { id: 14, url: photo('1588444650733-d0767b753fc8'), alt: 'Diamond Halo Studs', category: 'diamond' },
  { id: 15, url: photo('1598560917505-59a3ad559071'), alt: 'Diamond Halo Pendant', category: 'diamond' },
  // Traditional
  { id: 16, url: photo('1601121141461-9d6647bca1ed'), alt: 'Gold Temple Necklace', category: 'traditional' },
  { id: 17, url: photo('1626784215021-2e39ccf971cd'), alt: 'Traditional Gold Studs', category: 'traditional' },
  { id: 18, url: photo('1611591437281-460bfbe1220a'), alt: 'Traditional Bangle', category: 'traditional' },
  // Daily Wear
  { id: 19, url: photo('1596944924616-7b38e7cfac36'), alt: 'Gold Rings and Bracelet', category: 'daily' },
  { id: 20, url: photo('1600721391776-b5cd0e0048f9'), alt: 'Gold Hoop Earring', category: 'daily' },
  { id: 21, url: photo('1601821765780-754fa98637c1'), alt: 'Layered Pendant Necklaces', category: 'daily' },
  { id: 22, url: photo('1610694955371-d4a3e0ce4b52'), alt: 'Delicate Pendant Necklace', category: 'daily' },
  // Custom
  { id: 23, url: photo('1603561591411-07134e71a2a9'), alt: 'Pink Sapphire Ring', category: 'custom' },
  { id: 24, url: photo('1602751584552-8ba73aad10e1'), alt: 'Gemstone Flower Ring', category: 'custom' },
  { id: 25, url: photo('1608042314453-ae338d80c427'), alt: 'Gemstone Cocktail Rings', category: 'custom' },
];

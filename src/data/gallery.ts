const img = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

// Gallery categories shown as tabs in the Gallery section.
// Images use the same bento pattern as collections (repeats every 5) — add as many as you like.
// Replace these placeholders with your own photos (e.g. '/images/gallery/silver/1.jpg' from the public folder).
export const galleryCategories = [
  {
    id: 'gold',
    title: 'Gold Jewellery',
    images: [
      'https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?s=1024x1024&w=is&k=20&c=rLY5nWR7mGlRyQEeiX6z8VLq3d1vfDWCRHHgUcmYXkk=',
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1601121141461-9d6647bca1ed'),
      img('photo-1605337220261-0bc42b083315'),
      img('photo-1596944924616-7b38e7cfac36'),
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1601121141461-9d6647bca1ed'),
      img('photo-1605337220261-0bc42b083315')
    ]
  },
  {
    id: 'silver',
    title: 'Silver Jewellery',
    images: [
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1611591437281-460bfbe1220a')
    ]
  },
  {
    id: 'silver-art-craft',
    title: 'Silver Art & Craft',
    images: [
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1515562141207-7a88fb7ce338')
    ]
  },
  {
    id: 'stones-gems',
    title: 'Stones & Gems',
    images: [
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1603561591411-07134e71a2a9'),
      img('photo-1515562141207-7a88fb7ce338'),
      img('photo-1589674781759-c21c37956a44'),
      img('photo-1535632066927-ab7c9ab60908'),
      img('photo-1611591437281-460bfbe1220a')
    ]
  }
];

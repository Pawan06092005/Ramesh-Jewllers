import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/common/Container';
import PageHeader from '../components/common/PageHeader';
import BentoGallery from '../components/common/BentoGallery';
import Lightbox from '../components/home/Lightbox';
import { collectionsData } from '../data/collections';

export default function CollectionDetail() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const collection = collectionsData.find((c) => c.slug === slug);

  if (!collection) return <Navigate to="/collections" replace />;

  return (
    <div className="pt-20">
      <PageHeader
        title={collection.title}
        subtitle="Signature Collection"
        description={collection.description}
        image={collection.image}
      />

      <section className="py-16 md:py-24 bg-brand-light">
        <Container>
          <Link
            to="/collections"
            className="inline-flex items-center text-brand-primary hover:text-brand-accentDark text-sm font-medium tracking-widest uppercase mb-10 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            All Collections
          </Link>

          <BentoGallery
            images={collection.gallery}
            altPrefix={collection.title}
            fallbackImage={collection.image}
            onImageClick={setSelectedImage}
          />
        </Container>
      </section>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

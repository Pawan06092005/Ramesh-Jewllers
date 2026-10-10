import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Img from '../common/Img';
import type { Collection } from '../../data/collections';

type CollectionCardProps = Collection & {
  index: number;
  aspect?: string;
  sizes?: string;
};

export default function CollectionCard({
  title,
  image,
  hoverImage,
  description,
  link,
  index,
  aspect = 'aspect-[3/4]',
  sizes = '(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw',
}: CollectionCardProps) {
  return (
    <Link to={link} className="group block">
      <div className={`relative overflow-hidden bg-beige ${aspect}`}>
        <div className="absolute inset-0 transition-transform duration-1600 ease-luxe group-hover:scale-[1.06]">
          <Img src={image} alt={title} sizes={sizes} className="h-full w-full object-cover" />
        </div>
        {/* Secondary image cross-fades in on hover */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-luxe group-hover:opacity-100" aria-hidden="true">
          <Img src={hoverImage} alt="" sizes={sizes} className="h-full w-full object-cover" />
        </div>
        <span className="absolute left-4 top-4 bg-ivory/90 px-2.5 py-0.5 font-serif text-base italic text-charcoal backdrop-blur-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-[1.75rem] leading-tight text-charcoal sm:text-3xl">
            <span className="link-underline">{title}</span>
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone">{description}</p>
        </div>
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-500 ease-luxe group-hover:border-gold group-hover:bg-gold">
          <ArrowUpRight size={16} strokeWidth={1.25} aria-hidden="true" className="transition-transform duration-500 ease-luxe group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}

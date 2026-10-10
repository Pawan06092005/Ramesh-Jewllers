import React, { useState } from 'react';
import { withWidth } from '../../utils/image';

const WIDTHS = [480, 800, 1200, 1600, 2000];

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Responsive image with srcset, lazy loading and a soft fade-in once decoded.
 * The parent should provide the box (aspect ratio / size) and a background tone.
 */
export default function Img({ src, alt, sizes = '100vw', priority = false, className = '', ...props }: ImgProps) {
  const [loaded, setLoaded] = useState(false);
  const isResponsive = /[?&]w=\d+/.test(src);

  return (
    <img
      src={src}
      srcSet={isResponsive ? WIDTHS.map((w) => `${withWidth(src, w)} ${w}w`).join(', ') : undefined}
      sizes={isResponsive ? sizes : undefined}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-1000 ease-luxe ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...props}
    />
  );
}

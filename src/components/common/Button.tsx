import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'gold' | 'outline' | 'outline-light' | 'text' | 'text-light';

const baseStyles =
  'group inline-flex items-center justify-center gap-3 whitespace-nowrap text-[0.75rem] font-normal uppercase tracking-[0.22em] transition-all duration-500 ease-luxe disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'min-h-[52px] px-9 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
  gold: 'min-h-[52px] px-9 bg-gold text-charcoal hover:bg-ivory',
  outline: 'min-h-[52px] px-9 border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory',
  'outline-light': 'min-h-[52px] px-9 border border-ivory/35 text-ivory hover:border-gold hover:text-gold',
  text: 'min-h-[44px] text-charcoal hover:text-gold-deep',
  'text-light': 'min-h-[44px] text-ivory hover:text-gold',
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  className?: string;
  arrow?: boolean;
  [key: string]: any;
};

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  arrow = false,
  ...props
}: ButtonProps) {
  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;
  const isText = variant === 'text' || variant === 'text-light';

  const content = (
    <>
      <span className={isText ? 'link-underline' : ''}>{children}</span>
      {(arrow || isText) && (
        <ArrowRight
          size={15}
          strokeWidth={1.25}
          aria-hidden="true"
          className="transition-transform duration-500 ease-luxe group-hover:translate-x-1.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}

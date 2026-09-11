import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  className = '', 
  ...props 
}: { children: React.ReactNode, variant?: string, to?: string, href?: string, className?: string, [key: string]: any }) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 font-medium";
  
  const variants = {
    primary: "bg-brand-primary text-brand-light hover:bg-brand-secondary border border-transparent",
    outline: "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark",
    gold: "bg-brand-accent text-brand-dark hover:bg-brand-accentDark hover:text-white border border-transparent",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}

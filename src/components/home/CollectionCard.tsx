import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CollectionCard({ title, image, description, link }) {
  return (
    <Link to={link} className="group block relative overflow-hidden bg-white shadow-sm rounded-sm">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-brand-dark/90 to-transparent z-20 transition-all duration-300">
        <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
        <p className="text-brand-light/90 font-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {description}
        </p>
        <div className="flex items-center text-brand-accent text-sm font-medium tracking-widest uppercase">
          <span className="mr-2">View Collection</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}

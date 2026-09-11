import { useEffect, useRef } from 'react';

export function useScrollReveal(options: { threshold?: number, rootMargin?: string, persist?: boolean } = {}) {
  const ref = useRef<any>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.classList.add('active'); // Just show it immediately
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Stop observing once revealed
          if (!options.persist) {
            observer.unobserve(entry.target);
          }
        } else if (options.persist) {
          entry.target.classList.remove('active');
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.persist]);

  return ref;
}

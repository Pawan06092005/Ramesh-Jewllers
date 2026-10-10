import React, { useId } from 'react';
import logoSvg from '../../assets/ramesh-logo.svg?raw';

type LogoProps = {
  className?: string;
  /** "dark" = placed on a dark surface (bright gold, ivory wording); "light" = on ivory (deeper gold, charcoal wording) */
  surface?: 'dark' | 'light';
};

// Brighter champagne gradient for dark backgrounds, richer antique gold for light ones
const tones = {
  dark: {
    '--rj-g1': '#F3DFA8', '--rj-g2': '#D9B872', '--rj-g3': '#B8914A', '--rj-g4': '#E6C98A', '--rj-g5': '#A47B38',
  },
  light: {
    '--rj-g1': '#CDA862', '--rj-g2': '#A98340', '--rj-g3': '#7C5D2A', '--rj-g4': '#B8924E', '--rj-g5': '#6B4F24',
  },
};

/**
 * Vector Ramesh Jewellers wordmark, inlined so its gradient and wording colour
 * can follow the surface it sits on. Size it with a height class, e.g. "h-16".
 */
export default function Logo({ className = '', surface = 'dark' }: LogoProps) {
  // Each instance needs its own gradient id, or every logo would share the first one's colours
  const gradientId = `rj-gold-${useId().replace(/:/g, '')}`;
  const markup = logoSvg.replace(/rj-gold/g, gradientId);

  return (
    <span
      role="img"
      aria-label="Ramesh Jewellers"
      className={`block aspect-[725/211] transition-[height] duration-500 ease-luxe [&>svg]:h-full [&>svg]:w-full ${
        surface === 'dark' ? 'text-ivory' : 'text-charcoal/75'
      } ${className}`}
      style={tones[surface] as React.CSSProperties}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

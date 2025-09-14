import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'narrow' | 'wide' | 'full';
  background?: 'white' | 'gray' | 'transparent';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  variant = 'default',
  background = 'transparent',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'w-full';
  
  const variants = {
    default: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    full: 'px-4 sm:px-6 lg:px-8'
  };
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent'
  };

  return (
    <section
      className={cn(
        baseClasses,
        variants[variant],
        backgrounds[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

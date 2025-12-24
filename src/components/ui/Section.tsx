import React from 'react';
import { cn } from '@/src/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'accent' | 'gradient';
  container?: boolean;
}

export function Section({
  children,
  variant = 'default',
  className,
  container = true,
  ...props
}: SectionProps) {
  const variants = {
    default: 'bg-white',
    dark: 'bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 text-white',
    accent: 'bg-gradient-to-br from-accent-50 via-white to-accent-100',
    gradient: 'bg-gradient-to-tr from-primary-900 via-primary-800 to-neutral-900 text-white',
  };

  const content = container ? (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {children}
    </div>
  ) : (
    children
  );

  return (
    <section
      className={cn(
        'relative transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}


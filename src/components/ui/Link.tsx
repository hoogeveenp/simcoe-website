import NextLink from 'next/link';
import React from 'react';
import { cn } from '@/src/lib/utils';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'default' | 'button';
}

export function Link({
  href,
  children,
  external = false,
  variant = 'default',
  className,
  ...props
}: LinkProps) {
  const baseStyles =
    'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg';

  const variants = {
    default: 'text-primary-700 hover:text-accent-700 underline decoration-2 underline-offset-4 hover:decoration-accent-600 font-medium',
    button:
      'inline-flex items-center justify-center bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 px-6 py-3 text-base font-semibold text-white shadow-md hover:shadow-xl hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 focus:ring-primary-500 no-underline transform hover:scale-105 active:scale-95 w-full sm:w-auto min-h-[48px]',
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}


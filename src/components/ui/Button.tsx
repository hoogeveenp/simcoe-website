import React from 'react';
import { cn } from '@/src/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 w-full sm:w-auto';
  
  const variants = {
    primary:
      'bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 focus:ring-primary-500',
    secondary:
      'bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-800 text-white hover:from-neutral-500 hover:via-neutral-600 hover:to-neutral-700 focus:ring-neutral-500',
    accent:
      'bg-gradient-to-br from-accent-600 via-accent-700 to-accent-800 text-white hover:from-accent-500 hover:via-accent-600 hover:to-accent-700 focus:ring-accent-500',
    outline:
      'border-2 border-primary-700 text-white bg-gradient-to-br from-transparent to-primary-50/10 hover:bg-gradient-to-br hover:from-primary-700 hover:to-primary-800 hover:text-white focus:ring-primary-600',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm min-h-[44px] sm:px-5 sm:py-2.5',
    medium: 'px-6 py-3 text-base min-h-[48px] sm:px-8 sm:py-3.5',
    large: 'px-8 py-4 text-lg min-h-[52px] sm:px-10 sm:py-4.5',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

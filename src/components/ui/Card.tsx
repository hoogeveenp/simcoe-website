import React from 'react';
import { cn } from '@/src/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
}

export function Card({ 
  children, 
  header, 
  footer, 
  variant = 'default',
  className, 
  ...props 
}: CardProps) {
  const variants = {
    default: 'bg-gradient-to-br from-white via-neutral-50 to-neutral-100 border border-neutral-200 shadow-lg hover:shadow-2xl',
    elevated: 'bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 text-white shadow-2xl hover:shadow-accent-500/20',
    bordered: 'bg-gradient-to-br from-grey-100 to-accent-50/30 border-2 border-accent-600 shadow-md hover:shadow-xl hover:border-accent-700',
    dark: 'bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 text-white',
    accent: 'bg-gradient-to-br from-accent-50 via-white to-accent-100',
    gradient: 'bg-gradient-to-tr from-primary-900 via-primary-800 to-neutral-900 text-white',
  };

  const headerVariants = {
    default: 'border-b border-neutral-200 bg-gradient-to-r from-neutral-50 to-neutral-100',
    elevated: 'border-b border-primary-700/50 bg-gradient-to-r from-primary-800 to-primary-900',
    bordered: 'border-b-2 border-accent-600 bg-gradient-to-r from-accent-50 to-white',
  };

  const footerVariants = {
    default: 'border-t border-neutral-200 bg-gradient-to-r from-neutral-100 to-neutral-50',
    elevated: 'border-t border-primary-700/50 bg-gradient-to-r from-primary-900 to-primary-800',
    bordered: 'border-t-2 border-accent-600 bg-gradient-to-r from-white to-accent-50',
  };

  return (
    <div
      className={cn(
        'rounded-xl transition-all duration-300 transform hover:scale-[1.02]',
        variants[variant],
        className
      )}
      {...props}
    >
      {header && (
        <div className={cn('px-4 py-4 sm:px-6 sm:py-5', headerVariants[variant])}>
          {header}
        </div>
      )}
      <div className={cn(
        'px-4 py-4 sm:px-6 sm:py-5',
        header && footer ? '' : header ? 'pb-5 sm:pb-6' : footer ? 'pt-5 sm:pt-6' : 'py-5 sm:py-6'
      )}>
        {children}
      </div>
      {footer && (
        <div className={cn('px-4 py-4 sm:px-6 sm:py-5', footerVariants[variant])}>
          {footer}
        </div>
      )}
    </div>
  );
}


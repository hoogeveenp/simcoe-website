'use client';

import { CLINIC_NAME, CLINIC_TAGLINE, CLINIC_PHONE } from '@/src/lib/constants';
import { Button } from '@/src/components/ui/Button';

export function Hero() {
  const phoneNumber = CLINIC_PHONE.replace(/[^0-9+]/g, '');
  
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
        {CLINIC_NAME}
      </h1>
      <p className="mt-6 text-lg text-neutral-100 sm:text-xl max-w-2xl mx-auto drop-shadow-md">
        {CLINIC_TAGLINE}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          variant="accent"
          size="large"
          onClick={() => window.location.href = `tel:${phoneNumber}`}
        >
          Call Us
        </Button>
        <Button
          variant="outline"
          size="large"
          onClick={() => window.location.href = '/contact'}
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
}


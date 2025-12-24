import { CLINIC_ADDRESS, CLINIC_HOURS } from '@/src/lib/constants';
import { Link } from '@/src/components/ui/Link';

export function LocationHours() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;
  
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Visit Us
      </h2>
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Location
          </h3>
          <address className="not-italic text-lg text-neutral-700">
            <p>{CLINIC_ADDRESS}</p>
            <p className="mt-2">
              <Link
                href={mapUrl}
                external
                className="text-primary-800 hover:text-accent-700 font-semibold"
              >
                Get Directions →
              </Link>
            </p>
          </address>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Hours
          </h3>
          <div className="text-lg text-neutral-700 space-y-1">
            <p>{CLINIC_HOURS.days}</p>
            <p>{CLINIC_HOURS.weekdays}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


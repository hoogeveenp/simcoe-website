import { services } from '@/src/lib/content';
import { Card } from '@/src/components/ui/Card';

export function Services() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Our Services
      </h2>
      <p className="mt-4 text-lg text-neutral-700">
        We provide comprehensive pain intervention services to help improve your quality of life.
      </p>
      {services.length > 0 && services[0] !== '[Service 1]' ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} variant="bordered" className="text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {service}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <p className="text-neutral-600">
            [Services list to be provided]
          </p>
        </div>
      )}
    </div>
  );
}


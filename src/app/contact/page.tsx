import { Section } from '@/src/components/ui/Section';
import { Card } from '@/src/components/ui/Card';
import { Link } from '@/src/components/ui/Link';
import type { Metadata } from 'next';
import {
  CLINIC_NAME,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_EMAIL,
  CLINIC_FAX,
  CLINIC_HOURS,
  CLINIC_SPECIALTY,
  CLINIC_LOCATION,
} from '@/src/lib/constants';

export const metadata: Metadata = {
  title: `Contact Us - ${CLINIC_NAME}`,
  description: `Contact ${CLINIC_NAME} in ${CLINIC_LOCATION}. Located at ${CLINIC_ADDRESS}. Call us at ${CLINIC_PHONE} or email ${CLINIC_EMAIL}.`,
  openGraph: {
    title: `Contact Us - ${CLINIC_NAME}`,
    description: `Contact ${CLINIC_NAME} in ${CLINIC_LOCATION}. Located at ${CLINIC_ADDRESS}.`,
    type: 'website',
  },
};

function ContactInfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex items-start">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
          <div className="space-y-2">{children}</div>
        </div>
      </div>
    </Card>
  );
}

function ContactIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-100 text-primary-600">
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
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-100 text-primary-600">
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
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-100 text-primary-600">
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
}

export default function ContactPage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;
  const phoneNumber = CLINIC_PHONE.replace(/[^0-9+]/g, '');
  const hasFax = CLINIC_FAX && CLINIC_FAX !== '[Fax Number]';

  // LocalBusiness structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: CLINIC_NAME,
    description: `${CLINIC_NAME} specializes in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '370 Bayview Dr',
      addressLocality: 'Barrie',
      addressRegion: 'ON',
      postalCode: 'L4N 7L3',
      addressCountry: 'CA',
    },
    telephone: CLINIC_PHONE !== '[Phone Number]' ? CLINIC_PHONE : undefined,
    email: CLINIC_EMAIL !== '[Email Address]' ? CLINIC_EMAIL : undefined,
    faxNumber: hasFax ? CLINIC_FAX : undefined,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '16:00',
    },
    medicalSpecialty: CLINIC_SPECIALTY,
    areaServed: {
      '@type': 'City',
      name: CLINIC_LOCATION,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex min-h-screen flex-col">
        {/* Header Section */}
        <Section variant="dark" className="py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re here to help. Get in touch with us today.
            </p>
          </div>
        </Section>

        {/* Contact Information Cards */}
        <Section className="py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Phone */}
            <ContactInfoCard title="Phone" icon={<ContactIcon />}>
              <p className="text-base text-gray-700">
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-medium text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
                  {CLINIC_PHONE}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                Call us during business hours
              </p>
            </ContactInfoCard>

            {/* Email */}
            <ContactInfoCard title="Email" icon={<ContactIcon />}>
              <p className="text-base text-gray-700">
                <a
                  href={`mailto:${CLINIC_EMAIL}`}
                  className="font-medium text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded break-all"
                >
                  {CLINIC_EMAIL}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                Send us an email anytime
              </p>
            </ContactInfoCard>

            {/* Location */}
            <ContactInfoCard title="Location" icon={<LocationIcon />}>
              <address className="not-italic text-base text-gray-700">
                <p>{CLINIC_ADDRESS}</p>
                <p className="mt-2">
                  <Link
                    href={mapUrl}
                    external
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Get Directions →
                  </Link>
                </p>
              </address>
            </ContactInfoCard>

            {/* Hours */}
            <ContactInfoCard title="Hours" icon={<ClockIcon />}>
              <div className="text-base text-gray-700 space-y-1">
                <p className="font-medium">{CLINIC_HOURS.days}</p>
                <p>{CLINIC_HOURS.weekdays}</p>
              </div>
            </ContactInfoCard>

            {/* Fax (if available) */}
            {hasFax && (
              <ContactInfoCard title="Fax" icon={<ContactIcon />}>
                <p className="text-base text-gray-700">{CLINIC_FAX}</p>
                <p className="text-sm text-gray-500">
                  For document transmission
                </p>
              </ContactInfoCard>
            )}
          </div>
        </Section>

        {/* Emergency Disclaimer */}
        <Section variant="gradient" className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2 border-red-200 bg-red-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-red-900">
                    Medical Emergency
                  </h3>
                  <p className="mt-2 text-base text-red-800">
                    If this is a medical emergency, call 911 or go to the
                    nearest emergency department.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </div>
    </>
  );
}


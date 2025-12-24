import { Section } from '@/src/components/ui/Section';
import { Hero } from '@/src/components/content/Hero';
import { Mission } from '@/src/components/content/Mission';
import { Services } from '@/src/components/content/Services';
import { LocationHours } from '@/src/components/content/LocationHours';
import type { Metadata } from 'next';
import {
  CLINIC_NAME,
  CLINIC_SPECIALTY,
  CLINIC_LOCATION,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_EMAIL,
  CLINIC_HOURS,
} from '@/src/lib/constants';

export const metadata: Metadata = {
  title: `${CLINIC_NAME} - ${CLINIC_SPECIALTY} in ${CLINIC_LOCATION}`,
  description: `${CLINIC_NAME} specializes in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}. Contact us to schedule an appointment.`,
  openGraph: {
    title: `${CLINIC_NAME} - ${CLINIC_SPECIALTY} in ${CLINIC_LOCATION}`,
    description: `${CLINIC_NAME} specializes in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}. Contact us to schedule an appointment.`,
    type: 'website',
  },
};

export default function Home() {
  // LocalBusiness/MedicalOrganization structured data
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
      {/* Hero Section */}
      <Section variant="gradient" className="py-16 sm:py-24">
        <Hero />
      </Section>

      {/* Mission Statement Section */}
      <Section variant="dark" className="py-16 sm:py-20">
        <Mission />
      </Section>

      {/* Services Section */}
      <Section variant="gradient" className="py-16 sm:py-20">
        <Services />
      </Section>

      {/* Location & Hours Snapshot */}
      <Section variant="dark" className="py-16 sm:py-20">
        <LocationHours />
      </Section>
      </div>
    </>
  );
}

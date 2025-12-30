import { Section } from "@/src/components/ui/Section";
import { Hero } from "@/src/components/content/Hero";
import type { Metadata } from "next";
import { VisitUs } from "@/src/components/content/VisitUs";
import {
  CLINIC_NAME,
  CLINIC_SPECIALTY,
  CLINIC_LOCATION,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_HOURS,
} from "@/src/lib/constants";

export const metadata: Metadata = {
  title: `${CLINIC_NAME} - ${CLINIC_SPECIALTY} in ${CLINIC_LOCATION}`,
  description: `${CLINIC_NAME} specializes in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}. Contact us to schedule an appointment.`,
  openGraph: {
    title: `${CLINIC_NAME} - ${CLINIC_SPECIALTY} in ${CLINIC_LOCATION}`,
    description: `${CLINIC_NAME} specializes in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}. Contact us to schedule an appointment.`,
    type: "website",
  },
};

export default function Home() {
  // LocalBusiness/MedicalOrganization structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    description: `${CLINIC_NAME} specializes in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "370 Bayview Dr",
      addressLocality: "Barrie",
      addressRegion: "ON",
      postalCode: "L4N 7L3",
      addressCountry: "CA",
    },
    telephone: CLINIC_PHONE,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
    medicalSpecialty: CLINIC_SPECIALTY,
    areaServed: {
      "@type": "City",
      name: CLINIC_LOCATION,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <Section variant="gradient" className="py-6">
          <Hero />
        </Section>
        <Section>
          <VisitUs />
        </Section>
      </div>
    </>
  );
}

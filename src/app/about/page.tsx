import { Section } from '@/src/components/ui/Section';
import { Card } from '@/src/components/ui/Card';
import Image from 'next/image';
import type { Metadata } from 'next';
import { CLINIC_NAME, CLINIC_SPECIALTY, CLINIC_LOCATION } from '@/src/lib/constants';
import { providers, missionStatement } from '@/src/lib/content';

export const metadata: Metadata = {
  title: `About Us - ${CLINIC_NAME}`,
  description: `Learn about ${CLINIC_NAME} and our team of healthcare providers specializing in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}.`,
  openGraph: {
    title: `About Us - ${CLINIC_NAME}`,
    description: `Learn about ${CLINIC_NAME} and our team of healthcare providers.`,
    type: 'website',
  },
};

function ProviderCard({
  name,
  title,
  bio,
  photo,
}: {
  name: string;
  title: string;
  bio: string;
  photo?: string;
}) {
  const isPlaceholder =
    name === '[Provider Name]' ||
    title === '[Provider Title]' ||
    bio === '[Provider bio to be provided]';

  return (
    <Card className="h-full">
      <div className="flex flex-col">
        {photo && !photo.startsWith('[') && (
          <div className="mb-4 -mx-6 -mt-6">
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gray-200">
              <Image
                src={photo}
                alt={`${name}, ${title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-base text-primary-600 font-medium mb-4">{title}</p>
          {!isPlaceholder && bio && (
            <p className="text-base text-white leading-relaxed">{bio}</p>
          )}
          {isPlaceholder && (
            <p className="text-base text-white italic">
              Provider information to be provided
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function AboutPage() {
  const hasProviders =
    providers.length > 0 && providers[0].name !== '[Provider Name]';
  const hasMission = missionStatement && missionStatement !== '[Mission statement to be provided]';

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <Section variant="dark" className="py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Learn more about {CLINIC_NAME} and our commitment to providing
            exceptional care.
          </p>
        </div>
      </Section>

      {/* Mission Statement Section */}
      {hasMission && (
        <Section variant="gradient" className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <Card>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-primary-900 leading-relaxed">
                  {missionStatement}
                </p>
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* Providers Section */}
      <Section variant="gradient" className="py-12 sm:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-white">
            Meet our experienced healthcare providers dedicated to your care.
          </p>
        </div>

        {hasProviders ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider, index) => (
              <ProviderCard
                key={index}
                name={provider.name}
                title={provider.title}
                bio={provider.bio}
                photo={(provider as any).photo}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <div className="py-8">
                <svg
                  className="mx-auto h-12 w-12 text-primary-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-primary-900">
                  Provider Information
                </h3>
                <p className="mt-2 text-base text-primary-900">
                  Provider information will be displayed here once provided.
                </p>
              </div>
            </Card>
          </div>
        )}
      </Section>

      {/* Clinic Information Section */}
      <Section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Card>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                {CLINIC_NAME}
              </h2>
              <div className="space-y-4 text-base text-white">
                <p>
                  {CLINIC_NAME} specializes in {CLINIC_SPECIALTY.toLowerCase()} in{' '}
                  {CLINIC_LOCATION}. We are committed to providing compassionate,
                  patient-centered care to help improve your quality of life.
                </p>
                <p>
                  Our team of experienced healthcare providers works together to
                  develop personalized treatment plans tailored to your unique
                  needs and goals.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}


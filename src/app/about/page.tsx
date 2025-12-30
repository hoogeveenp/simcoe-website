import { Section } from "@/src/components/ui/Section";
import { Card } from "@/src/components/ui/Card";
import Image from "next/image";
import type { Metadata } from "next";
import {
  CLINIC_NAME,
  CLINIC_SPECIALTY,
  CLINIC_LOCATION,
} from "@/src/lib/constants";
import { providers, missionStatement } from "@/src/lib/content";

export const metadata: Metadata = {
  title: `About Us - ${CLINIC_NAME}`,
  description: `Learn about ${CLINIC_NAME} and our team of healthcare providers specializing in ${CLINIC_SPECIALTY.toLowerCase()} in ${CLINIC_LOCATION}.`,
  openGraph: {
    title: `About Us - ${CLINIC_NAME}`,
    description: `Learn about ${CLINIC_NAME} and our team of healthcare providers.`,
    type: "website",
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
  return (
    <Card className="h-full bg-primary-200">
      <div className="flex flex-col">
        {photo && !photo.startsWith("[") && (
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
          <h3 className="text-xl font-semibold text-gray-700 mb-1">{name}</h3>
          <p className="text-base text-primary-600 font-medium mb-4">{title}</p>
          <p className="text-base text-gray-900 leading-relaxed">{bio}</p>
        </div>
      </div>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Providers Section */}
      <Section variant="gradient" className="py-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-200 sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-4 text-lg text-primary-400">
            Meet our experienced healthcare providers dedicated to your care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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
      </Section>
    </div>
  );
}

import { Section } from "@/src/components/ui/Section";
import { Card } from "@/src/components/ui/Card";
import { Link } from "@/src/components/ui/Link";
import type { Metadata } from "next";
import { CLINIC_NAME, CLINIC_PHONE } from "@/src/lib/constants";
import { forms } from "@/src/lib/content";

export const metadata: Metadata = {
  title: `Patient Forms - ${CLINIC_NAME}`,
  description: `Download and complete pre-visit forms for ${CLINIC_NAME}. Submit completed forms before your appointment.`,
  openGraph: {
    title: `Patient Forms - ${CLINIC_NAME}`,
    description: `Download and complete pre-visit forms for ${CLINIC_NAME}.`,
    type: "website",
  },
};

function FormCard({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) {
  const isExternal = link.startsWith("http://") || link.startsWith("https://");
  const isPlaceholder = link === "[Form link or path]" || link.startsWith("[");

  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
          {description && description !== "[Form description]" && (
            <p className="text-base text-gray-600 mb-4">{description}</p>
          )}
        </div>
        <div className="mt-auto">
          {isPlaceholder ? (
            <div className="text-sm text-gray-500 italic">
              Form link to be provided
            </div>
          ) : (
            <Link
              href={link}
              external={isExternal}
              variant="button"
              className="w-full sm:w-auto"
            >
              Download Form
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function FormsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <Section variant="dark" className="py-6 sm:py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-200 sm:text-5xl">
            Patient Forms
          </h1>
          <p className="mt-4 text-lg text-primary-400 max-w-2xl mx-auto">
            Complete these forms before your visit to help us prepare for your
            appointment.
          </p>
        </div>
      </Section>

      {/* Forms Introduction */}
      <Section className="mb-16">
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Available Forms
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Card className="bg-primary-50 border-primary-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Why Complete Forms Before Your Visit?
                </h2>
                <p className="text-base text-gray-700">
                  Completing these forms in advance helps us better understand
                  your medical history and current concerns. This allows us to
                  make the most of your appointment time and provide you with
                  the best possible care.
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forms.map((form, index) => (
              <FormCard
                key={index}
                name={form.name}
                description={form.description}
                link={form.link}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

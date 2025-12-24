import { Section } from '@/src/components/ui/Section';
import { Card } from '@/src/components/ui/Card';
import { Link } from '@/src/components/ui/Link';
import type { Metadata } from 'next';
import { CLINIC_NAME, CLINIC_EMAIL, CLINIC_PHONE } from '@/src/lib/constants';
import { forms } from '@/src/lib/content';

export const metadata: Metadata = {
  title: `Patient Forms - ${CLINIC_NAME}`,
  description: `Download and complete pre-visit forms for ${CLINIC_NAME}. Submit completed forms before your appointment.`,
  openGraph: {
    title: `Patient Forms - ${CLINIC_NAME}`,
    description: `Download and complete pre-visit forms for ${CLINIC_NAME}.`,
    type: 'website',
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
  const isExternal = link.startsWith('http://') || link.startsWith('https://');
  const isPlaceholder = link === '[Form link or path]' || link.startsWith('[');

  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
          {description && description !== '[Form description]' && (
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
  const hasForms = forms.length > 0 && forms[0].name !== '[Form Name]';
  const phoneNumber = CLINIC_PHONE.replace(/[^0-9+]/g, '');

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <Section variant="dark" className="py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Patient Forms
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Complete these forms before your visit to help us prepare for your
            appointment.
          </p>
        </div>
      </Section>

      {/* Forms Introduction */}
      <Section className="py-12 sm:py-16">
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
        </div>
      </Section>

      {/* Forms List */}
      <Section variant="gradient" className="py-12 sm:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Available Forms
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Click on any form below to download or access it.
          </p>
        </div>

        {hasForms ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forms.map((form, index) => (
              <FormCard
                key={index}
                name={form.name}
                description={form.description}
                link={form.link}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <p className="text-gray-600">
                Form links will be available here once provided.
              </p>
            </Card>
          </div>
        )}
      </Section>

      {/* Submission Instructions */}
      <Section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center mb-8">
            How to Submit Your Forms
          </h2>
          <div className="space-y-6">
            <Card>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Download and Complete
                  </h3>
                  <p className="text-base text-gray-600">
                    Download the required forms and fill them out completely.
                    Please print clearly and ensure all information is accurate.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Submit Before Your Visit
                  </h3>
                  <p className="text-base text-gray-600 mb-3">
                    Submit your completed forms using one of the following
                    methods:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-gray-600 ml-4">
                    <li>
                      <strong>Email:</strong>{' '}
                      <a
                        href={`mailto:${CLINIC_EMAIL}`}
                        className="text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                      >
                        {CLINIC_EMAIL}
                      </a>
                    </li>
                    <li>
                      <strong>Fax:</strong> Please call us for our fax number
                    </li>
                    <li>
                      <strong>In Person:</strong> Bring completed forms to your
                      appointment
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Questions?
                  </h3>
                  <p className="text-base text-gray-600">
                    If you have any questions about completing the forms or need
                    assistance, please{' '}
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-primary-600 hover:text-primary-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                    >
                      call us
                    </a>{' '}
                    at {CLINIC_PHONE} during business hours.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}


'use client';

import { Section } from '@/src/components/ui/Section';
import { Card } from '@/src/components/ui/Card';
import { Link } from '@/src/components/ui/Link';
import { useState } from 'react';
import type { Metadata } from 'next';
import { CLINIC_NAME } from '@/src/lib/constants';
import { faqs, pdfResources } from '@/src/lib/content';

// Note: Metadata export doesn't work with 'use client', so we'll handle SEO differently
// For now, we'll add metadata in the layout or use a different approach

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isPlaceholder =
    question.startsWith('[') || answer.startsWith('[');

  return (
    <Card className="border-l-4 border-l-primary-500">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-center justify-between py-4">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">
            {question}
          </h3>
          <svg
            className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          className="pb-4 pt-2 border-t border-gray-200"
        >
          {isPlaceholder ? (
            <p className="text-base text-gray-500 italic">
              FAQ answer to be provided
            </p>
          ) : (
            <p className="text-base text-gray-700 leading-relaxed">{answer}</p>
          )}
        </div>
      )}
    </Card>
  );
}

function PDFResourceCard({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const isPlaceholder = path.startsWith('/pdfs/') && path.includes('.pdf');

  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-100 text-red-600">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
            {description && description !== 'Information about constipation' && (
              <p className="text-base text-gray-600 mb-4">{description}</p>
            )}
          </div>
        </div>
        <div className="mt-auto">
          {isPlaceholder ? (
            <div className="text-sm text-gray-500 italic">
              PDF document to be uploaded
            </div>
          ) : (
            <Link
              href={path}
              external={path.startsWith('http')}
              variant="button"
              className="w-full sm:w-auto"
            >
              View PDF
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function InformationPage() {
  const hasFAQs = faqs.length > 0 && !faqs[0].question.startsWith('[');
  const hasPDFs = pdfResources.length > 0;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <Section variant="dark" className="py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Information & Resources
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and access helpful resources.
          </p>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section className="py-12 sm:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a question? Check our FAQs below.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {hasFAQs ? (
            faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))
          ) : (
            <Card>
              <div className="text-center py-8">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  FAQs Coming Soon
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Frequently asked questions will be displayed here once
                  provided.
                </p>
              </div>
            </Card>
          )}
        </div>
      </Section>

      {/* PDF Resources Section */}
      <Section variant="gradient" className="py-12 sm:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Educational Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Download helpful PDF resources and educational materials.
          </p>
        </div>

        {hasPDFs ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pdfResources.map((resource, index) => (
              <PDFResourceCard
                key={index}
                name={resource.name}
                description={resource.description}
                path={resource.path}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <div className="py-8">
                <p className="text-gray-600">
                  PDF resources will be available here once uploaded.
                </p>
              </div>
            </Card>
          </div>
        )}
      </Section>
    </div>
  );
}


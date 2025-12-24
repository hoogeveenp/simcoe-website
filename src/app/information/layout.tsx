import type { Metadata } from 'next';
import { CLINIC_NAME } from '@/src/lib/constants';

export const metadata: Metadata = {
  title: `Information & FAQs - ${CLINIC_NAME}`,
  description: `Find answers to frequently asked questions and access educational resources about pain intervention and treatment at ${CLINIC_NAME}.`,
  openGraph: {
    title: `Information & FAQs - ${CLINIC_NAME}`,
    description: `Find answers to frequently asked questions and access educational resources.`,
    type: 'website',
  },
};

export default function InformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


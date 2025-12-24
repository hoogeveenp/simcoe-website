import type { Metadata } from 'next';
import { CLINIC_NAME, CLINIC_SPECIALTY } from '@/src/lib/constants';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${CLINIC_NAME} - ${CLINIC_SPECIALTY} in Barrie, Ontario`,
    template: `%s | ${CLINIC_NAME}`,
  },
  description: `${CLINIC_NAME} specializes in ${CLINIC_SPECIALTY.toLowerCase()} in Barrie, Ontario. Contact us to schedule an appointment.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


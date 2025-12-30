import Link from "next/link";
import {
  CLINIC_NAME,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_FAX,
  CLINIC_HOURS,
  NAV_ITEMS,
} from "@/src/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-tr from-primary-900 via-primary-800 to-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Clinic Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {CLINIC_NAME}
            </h3>
            <address className="not-italic text-sm text-white space-y-2">
              <p>{CLINIC_ADDRESS}</p>
              <p>
                <a
                  href={`tel:${CLINIC_PHONE.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
                  {CLINIC_PHONE}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${CLINIC_PHONE.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
                  {CLINIC_FAX}
                </a>
              </p>
            </address>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-white hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hours</h3>
            <div className="text-sm text-white space-y-1">
              <p>{CLINIC_HOURS.days}</p>
              <p>{CLINIC_HOURS.weekdays}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-white">
            &copy; {currentYear} {CLINIC_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

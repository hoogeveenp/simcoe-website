import {
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  CLINIC_PHONE,
  CLINIC_FAX,
} from "@/src/lib/constants";
import { Link } from "@/src/components/ui/Link";
import { Card } from "../ui/Card";

export function VisitUs() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CLINIC_ADDRESS
  )}`;

  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-7xl font-bold text-primary-900 sm:text-3xl md:text-5xl">
        Visit Us
      </h2>
      <div>
        <p className="mt-5 not-italic text-xl text-primary-800">
          <Link
            href={mapUrl}
            external
            className="text- hover:text-accent-600 font-semibold"
          >
            Get Directions →
          </Link>
        </p>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-6 justify-center">
        <Card className="h-full bg-primary-200">
          <div className="max-w-64 px-5">
            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              Location
            </h3>
            <address className="not-italic text-lg text-primary-700">
              <p>{CLINIC_ADDRESS}</p>
            </address>
          </div>
        </Card>
        <Card className="max-w-128 h-full bg-primary-200">
          <div className="px-5">
            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              Hours
            </h3>
            <div className="text-lg text-primary-700 space-y-1">
              <p>{CLINIC_HOURS.days}</p>
              <p>{CLINIC_HOURS.weekdays}</p>
            </div>
          </div>
        </Card>
        <Card className="h-full bg-primary-200">
          <div className="max-w-64 px-5">
            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              Contact Info
            </h3>
            <div className="text-lg text-primary-700 space-y-1">
              <p>{CLINIC_PHONE}</p>
              <p>{CLINIC_FAX}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

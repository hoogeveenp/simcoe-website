"use client";

import { missionStatement } from "@/src/lib/content";
import { CLINIC_NAME, CLINIC_TAGLINE, CLINIC_PHONE } from "@/src/lib/constants";
import { Button } from "@/src/components/ui/Button";
import { PainCycle } from "@/src/components/content/PainCycle";

export function Hero() {
  const phoneNumber = CLINIC_PHONE.replace(/[^0-9+]/g, "");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-primary-200 sm:text-5xl md:text-6xl">
        {CLINIC_NAME}
      </h1>
      <p className="mt-4 text-lg italic text-primary-400 sm:text-xl max-w-2xl mx-auto">
        {CLINIC_TAGLINE}
      </p>
      <p className="mt-6 text-lg leading-8 text-primary-200 max-w-5xl mx-auto">
        {missionStatement}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          variant="accent"
          size="large"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </Button>
        <Button
          variant="outline"
          size="large"
          onClick={() => (window.location.href = "/forms")}
        >
          Forms
        </Button>
      </div>
      <PainCycle />
    </div>
  );
}

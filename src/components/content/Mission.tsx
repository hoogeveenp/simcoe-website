import { missionStatement } from '@/src/lib/content';

export function Mission() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Our Mission
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {missionStatement}
      </p>
    </div>
  );
}


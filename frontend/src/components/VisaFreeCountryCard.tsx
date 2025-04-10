import {
  // MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface VisaFreeCountryProps {
  name: string;
  stayPeriod: string;
  requirements: string[];
  flag: string;
}

export default function VisaFreeCountryCard({ name, stayPeriod, requirements, flag }: VisaFreeCountryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{flag}</span>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <ClockIcon className="w-5 h-5" />
        <span>Stay period: {stayPeriod}</span>
      </div>
      <ul className="space-y-2">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-1">✓</span>
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 
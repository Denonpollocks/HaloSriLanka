import { FaCheck } from "react-icons/fa";

interface IncludedProps {
  items: string[];
}

export default function WhatsIncluded({ items }: IncludedProps) {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">What&apos;s Included</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 pt-1">
              <FaCheck className="text-pink-600" size={12} />
            </div>
            <span className="text-gray-700 leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { FaCheck } from "react-icons/fa";

interface IncludedProps {
  items: string[];
}

export default function WhatsIncluded({ items }: IncludedProps) {
  return (
    <div className="max-w-4xl mx-auto  mt-12">
      <h2 className="text-2xl font-bold mb-4">What&apos;s Included</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-2">
            <FaCheck className="text-pink-600 mt-1" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

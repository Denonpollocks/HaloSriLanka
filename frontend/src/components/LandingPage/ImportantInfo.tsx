import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface InfoItem {
  title: string;
  content: string;
}

interface ImportantInformationProps {
  title: string;
  items: InfoItem[];
}

export default function ImportantInformation({ title, items }: ImportantInformationProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`border rounded-xl transition-all duration-200 ${
              openIndex === index ? 'border-pink-200 shadow-md' : 'border-gray-200'
            }`}
          >
            <button
              className={`w-full flex justify-between items-center p-5 text-left font-medium rounded-xl
                ${openIndex === index 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg">{item.title}</span>
              <span className="text-pink-600">
                {openIndex === index ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-5 text-gray-600 leading-relaxed border-t border-pink-100">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

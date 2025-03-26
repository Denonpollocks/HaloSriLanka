"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface HotelDescriptionProps {
  description: {
    short: string;
    full: string;
  };
}

export default function HotelDescription({ description }: HotelDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Hotel</h2>
      <div className="prose prose-lg max-w-none">
        <div className={`relative ${!isExpanded && 'max-h-[200px] overflow-hidden'}`}>
          <p className="text-gray-600">
            {isExpanded ? description.full : description.short}
          </p>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 mt-2"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          {isExpanded ? (
            <FaChevronUp className="w-4 h-4" />
          ) : (
            <FaChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
    </section>
  );
} 
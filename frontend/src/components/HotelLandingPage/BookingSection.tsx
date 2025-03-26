'use client';
import { useState } from 'react';
import EnquiryForm from './EnquiryForm';

interface BookingSectionProps {
  price: number;
  hotelName: string;
}

export default function BookingSection({ price, hotelName }: BookingSectionProps) {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="relative sticky top-10 pt-10">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
        <div className="text-3xl font-bold text-gray-900">
          From ${price}
        </div>
        <button 
          onClick={() => setShowEnquiry(true)} 
          className="w-full bg-pink-600 text-white py-3 rounded-lg mt-4 hover:bg-pink-700"
        >
          Book Now
        </button>
      </div>
      {showEnquiry && (
        <EnquiryForm 
          hotelName={hotelName} 
          onClose={() => setShowEnquiry(false)} 
        />
      )}
    </div>
  );
} 
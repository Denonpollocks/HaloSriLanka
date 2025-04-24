'use client';

import { useState } from 'react';
import EnquiryForm from './HotelLandingPage/EnquiryForm';

export default function CouldntFindSection() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Couldn't Find What You Were Looking For?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our travel experts are here to help you create the perfect family holiday experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+94704545455" 
                className="flex-1 sm:flex-none bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us Now
              </a>
              <button 
                onClick={() => setShowEnquiry(true)}
                className="flex-1 sm:flex-none bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <EnquiryForm 
          hotelName="Family Packages" 
          onClose={() => setShowEnquiry(false)} 
        />
      )}
    </>
  );
} 
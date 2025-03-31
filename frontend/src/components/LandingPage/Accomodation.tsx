import { useState } from "react";
import { FaStar, FaRegStar, FaMapMarkerAlt, FaMoon, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

interface Hotel {
  name: string;
  image: string;
  rating: number;
  nights: number;
  location: string;
  detailsLink: string;
}

interface AccommodationProps {
  hotels: Hotel[];
}

export default function Accommodation({ hotels }: AccommodationProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleHotels = showAll ? hotels : hotels.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto  mt-12">
      <h2 className="text-3xl font-bold mb-4">
        Accomodations
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Experience comfort and elegance at our carefully selected hotels. Final confirmation will be provided 21 days before your journey.
      </p>

      <div className="grid gap-6">
        {visibleHotels.map((hotel, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                          {i < hotel.rating ? (
                            <FaStar className="text-yellow-400 w-5 h-5" />
                          ) : (
                            <FaRegStar className="text-gray-300 w-5 h-5" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                    <FaMoon className="text-pink-600" />
                    <span>{hotel.nights} nights</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <FaMapMarkerAlt className="text-pink-600" />
                  <span>{hotel.location}</span>
                </div>

                <Link 
                  href={hotel.detailsLink}
                  className="inline-flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 transition-colors"
                >
                  View Hotel Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hotels.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mx-auto mt-8 flex items-center gap-2 bg-white border-2 border-pink-600 text-pink-600 px-6 py-2 rounded-lg hover:bg-pink-50 transition-colors"
        >
          {showAll ? (
            <>View Less <FaChevronUp className="w-4 h-4" /></>
          ) : (
            <>View More <FaChevronDown className="w-4 h-4" /></>
          )}
        </button>
      )}
    </div>
  );
}

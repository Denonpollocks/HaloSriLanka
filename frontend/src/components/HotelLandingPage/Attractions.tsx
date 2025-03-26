"use client";

import { FaMapMarkerAlt, FaClock, FaTicketAlt, FaPlane } from 'react-icons/fa';

interface AttractionsProps {
  attractions: {
    name: string;
    type: string;
    distance: string;
    openingHours: string;
    price: string;
    image: string;
    description: string;
  }[];
  airportDistance: string;
}

export default function Attractions({ attractions, airportDistance }: AttractionsProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Nearby Attractions</h2>
      <div className="flex items-center gap-2 text-gray-600 mb-6">
        <FaPlane className="w-4 h-4" />
        <span className="text-sm">Airport Distance: {airportDistance}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attractions.map((attraction, index) => (
          <div key={index} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="w-32 h-32 relative flex-shrink-0">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-900 mb-1">{attraction.name}</h3>
              <p className="text-sm text-pink-600 mb-1">{attraction.type}</p>
              <p className="text-gray-600 text-sm mb-2">{attraction.description}</p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>{attraction.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="w-4 h-4" />
                  <span>{attraction.openingHours}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaTicketAlt className="w-4 h-4" />
                  <span>{attraction.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
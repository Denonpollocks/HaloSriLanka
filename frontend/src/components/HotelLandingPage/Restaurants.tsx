"use client";

import { FaMapMarkerAlt, FaClock, FaUtensils, FaDollarSign } from 'react-icons/fa';

interface RestaurantProps {
  restaurants: {
    name: string;
    cuisine: string;
    distance: string;
    priceRange: number;
    rating: number;
    openingHours: string;
    image: string;
    description: string;
  }[];
}

export default function Restaurants({ restaurants }: RestaurantProps) {
  const renderPriceRange = (range: number) => {
    return Array(range).fill('$').join('');
  };

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
           
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                <span className="text-green-600 font-medium">
                  {renderPriceRange(restaurant.priceRange)}
                </span>
              </div>
              <p className="text-sm text-pink-600 mb-1">{restaurant.cuisine}</p>
              <p className="text-gray-600 text-sm mb-2">{restaurant.description}</p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>{restaurant.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="w-4 h-4" />
                  <span>{restaurant.openingHours}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
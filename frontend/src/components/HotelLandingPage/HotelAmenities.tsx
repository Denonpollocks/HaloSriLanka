"use client";

import { FaWifi, FaSwimmingPool, FaSpa, FaUtensils, FaParking, FaCocktail, FaDumbbell, FaCoffee, FaConciergeBell } from 'react-icons/fa';

interface HotelAmenitiesProps {
  amenities: {
    name: string;
    icon: string;
  }[];
}

const iconMap = {
  wifi: FaWifi,
  pool: FaSwimmingPool,
  spa: FaSpa,
  restaurant: FaUtensils,
  parking: FaParking,
  bar: FaCocktail,
  gym: FaDumbbell,
  cafe: FaCoffee,
  service: FaConciergeBell,
};

export default function HotelAmenities({ amenities }: HotelAmenitiesProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Hotel Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => {
          const IconComponent = iconMap[amenity.icon as keyof typeof iconMap] || FaConciergeBell;
          
          return (
            <div key={index} className="flex items-start gap-3">
              <div className=" bg-pink-50 rounded-lg">
                <IconComponent className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{amenity.name}</h3>
              
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 
'use client';

import HotelCard from '../HotelCard';
import { hotels } from '@/data/hotels';

interface SimilarHotelsProps {
  currentHotelSlug: string;
  city: string;
  country: string;
}

export default function SimilarHotels({ currentHotelSlug, city, country }: SimilarHotelsProps) {
  const similarHotels = hotels
    .filter(hotel => 
      hotel.slug !== currentHotelSlug && 
      hotel.city === city &&
      hotel.country === country
    )
    .slice(0, 4);

  if (similarHotels.length === 0) return null;

  return (
    <section className="py-16 border-t border-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Similar Hotels in <span className="text-pink-600">{city}, {country}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarHotels.map((hotel) => (
            <HotelCard
              key={hotel.slug}
              name={hotel.name}
              location={hotel.location}
              description={hotel.description.short}
              rating={hotel.ratings.overall}
              price={hotel.price}
              image={hotel.images[0]}
              amenities={hotel.amenities.slice(0, 3).map(amenity => amenity.name)}
              reviewCount={hotel.ratings.totalReviews}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 
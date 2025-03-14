import Image from 'next/image';
import Link from 'next/link';

interface HotelCardProps {
  name: string;
  location: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
  reviewCount: number;
}

const HotelCard = ({
  name,
  location,
  description,
  rating,
  price,
  image,
  amenities,
  reviewCount
}: HotelCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-gray-600 text-sm">📍 {location}</p>
          </div>
          <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded">
            <span className="font-bold">{rating}</span>
            <span className="ml-1">★</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.map((amenity, index) => (
            <span key={index} className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {amenity}
            </span>
          ))}
          <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            +{amenities.length - 3} more
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
            <p className="text-sm text-gray-500">{reviewCount} reviews</p>
          </div>
          <Link 
            href={`/hotels/${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View Deal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
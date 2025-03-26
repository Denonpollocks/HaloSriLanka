import Image from 'next/image';
import Link from 'next/link';

interface PackageCardProps {
  title: string;
  location: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  features: string[];
  rating: number;
  reviewCount: number;
}

const PackageCard = ({
  title,
  location,
  description,
  duration,
  price,
  image,
  features,
  rating,
  reviewCount
}: PackageCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <div className="relative h-72 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full">
          {duration}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1 min-h-12">{title}</h3>
            <p className="text-gray-600 text-sm">📍 {location}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-pink-600 font-bold">{rating}</span>
            <span className="text-pink-600">★</span>
            <span className="text-gray-500 text-sm">({reviewCount})</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2 min-h-10">{description}</p>

        <div className="space-y-3 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-gray-600 text-sm"> / person</span>
          </div>
          <Link 
            href={`/packages/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
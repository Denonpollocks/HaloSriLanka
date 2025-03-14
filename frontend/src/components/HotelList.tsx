import HotelCard from './HotelCard';
import Link from 'next/link';


const hotels = [
  {
    name: "Park Hyatt New York",
    location: "Midtown, New York",
    description: "Luxury hotel with stunning views of Central Park and exceptional service, featuring spacious rooms",
    rating: 9.2,
    price: 499,
    image: "/images/hotels/park-hyatt.jpg",
    amenities: ["Spa", "Pool", "Restaurant", "Bar", "Room service"],
    reviewCount: 876
  },
  {
    name: "Park Hyatt New York",
    location: "Midtown, New York",
    description: "Luxury hotel with stunning views of Central Park and exceptional service, featuring spacious rooms",
    rating: 9.2,
    price: 499,
    image: "/images/hotels/park-hyatt.jpg",
    amenities: ["Spa", "Pool", "Restaurant", "Bar", "Room service"],
    reviewCount: 876
  },
  {
    name: "Park Hyatt New York",
    location: "Midtown, New York",
    description: "Luxury hotel with stunning views of Central Park and exceptional service, featuring spacious rooms",
    rating: 9.2,
    price: 499,
    image: "/images/hotels/park-hyatt.jpg",
    amenities: ["Spa", "Pool", "Restaurant", "Bar", "Room service"],
    reviewCount: 876
  },


  // Add more hotels here
];

const HotelList = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-sm text-blue-600 mb-2">Limited time offers</h2>
            <h1 className="text-3xl font-bold">Today's Best Deals</h1>
          </div>
          <Link 
            href="/hotels"
            className="text-blue-600 hover:underline flex items-center"
          >
            View all deals 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelList;
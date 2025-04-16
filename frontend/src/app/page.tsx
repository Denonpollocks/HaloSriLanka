import Image from 'next/image';
import Link from 'next/link';
import Features from '../components/Features';
import CardVacations from "../components/CardVacations";
import { Metadata } from 'next';
import Script from 'next/script';

// Add the hotel data directly in the page file
const hotels = [
  {
    name: "Cinnamon Velifushi Maldives",
    location: "Vaavu Atoll, Maldives",
    description: "A luxurious 5-star resort offering overwater and beach villas in the pristine Vaavu Atoll.",
    rating: 9.2,
    price: 53099,
    image: "/images/hotels/maldives/cinnamon-velifushi-maldives.jpg",
    amenities: ["Spa", "Pool", "Restaurant", "Bar", "Room service"],
    reviewCount: 3051
  },
  {
    name: "The Grand Blue Sky International",
    location: "Kusadasi, Turkey",
    description: "4-star beachfront resort in Kuşadası offering private beach access and panoramic sea views.",
    rating: 8.0,
    price: 41299,
    image: "/images/hotels/turkey/The-Grand-Blue-Sky-International.jpg",
    amenities: ["Spa", "Pool", "Restaurant", "Bar", "Room service"],
    reviewCount: 2792
  },
  {
    name: "Campanile Val de France",
    location: "Magny-le-Hongre, France",
    description: "Charming 3-star hotel near Disneyland® Paris with family-friendly amenities and a picturesque setting.",
    rating: 7.5,
    price: 22310,
    image: "/images/hotels/france/campanile-val-de-france.jpg",
    amenities: ["Spa", "Pool", "Restaurant", "Bar", "Room service"],
    reviewCount: 4600
  },
];

const popularDestinations = [
  {
    name: 'Maldives',
    description: 'Luxury overwater villas and pristine beaches',
    image: '/images/destinations/maldives/home.png',
    href: '/destinations/maldives'
  },
  {
    name: 'France',
    description: 'Iconic Eiffel Tower and romantic walks by the Seine',
    image: '/images/destinations/france/home.png',
    href: '/destinations/france'
  },
  {
    name: 'Japan',
    description: 'Traditional gardens and modern skyscrapers',
    image: '/images/destinations/japan/home.png',
    href: '/destinations/japan'
  },
];

// const travelServices = [
//   {
//     title: 'Customized Itineraries',
//     description: 'We tailor your journey to your preferences and interests',
//     backContent: 'Get personalized travel plans crafted by our expert team, including accommodations, activities, and local experiences.',
//     icon: ''
//   },
//   {
//     title: 'Visa Assistance',
//     description: 'We assist you with visa applications for your dream destinations',
//     backContent: 'Complete visa support including document preparation, application filing, and status tracking.',
//     icon: ''
//   },
//   {
//     title: 'Travel Insurance',
//     description: 'We provide comprehensive travel insurance to protect your journey',
//     backContent: 'Coverage for medical emergencies, trip cancellations, lost baggage, and other travel-related incidents.',
//     icon: ''
//   },
// ];

const testimonials = [
  {
    name: 'Sarah Thompson',
    location: 'United Kingdom',
    comment: 'An unforgettable experience with exceptional service',
  },
  {
    name: 'James Wilson',
    location: 'Australia',
    comment: 'The attention to detail and personalized recommendations made our trip perfect',
  },
  {
    name: 'Elena Rodriguez',
    location: 'Spain',
    comment: 'From booking to return, everything was seamless and stress-free',
  },
];

export const metadata: Metadata = {
  title: 'Halo Holidays | Luxury Travel & Premium Holiday Packages 2025',
  description: 'Discover exclusive holiday packages, luxury hotels, and unforgettable travel experiences worldwide. Book your dream vacation with Halo Holidays.',
  keywords: 'luxury holidays, premium travel, holiday packages, luxury hotels, travel experiences, Maldives, Paris, Tokyo',
  alternates: {
    canonical: 'https://haloholidays.com'
  },
  openGraph: {
    title: 'Halo Holidays | Luxury Travel & Premium Holiday Packages',
    description: 'Discover exclusive holiday packages and luxury travel experiences worldwide.',
    url: 'https://haloholidays.com',
    siteName: 'Halo Holidays',
    images: [
      {
        url: 'https://haloholidays.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Halo Holidays - Luxury Travel Experiences'
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halo Holidays | Luxury Travel & Premium Holiday Packages',
    description: 'Discover exclusive holiday packages and luxury travel experiences worldwide.',
    images: ['https://haloholidays.com/twitter-image.jpg'],
  }
};

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      {/* Add schema data as a simple string */}
      <Script
        id="schema-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Halo Holidays",
                  "url": "https://haloholidays.com/"
                },
                {
                  "@type": "TravelAgency",
                  "name": "Halo Holidays",
                  "url": "https://haloholidays.com/"
                },
                {
                  "@type": "ItemList",
                  "itemListElement": [
                    ${hotels.map((hotel, index) => `
                      {
                        "@type": "ListItem",
                        "position": ${index + 1},
                        "item": {
                          "@type": "Hotel",
                          "name": "${hotel.name}",
                          "image": "${hotel.image}",
                          "priceRange": "Rs.${hotel.price.toLocaleString()}"
                        }
                      }
                    `).join(',')}
                  ]
                }
              ]
            }
          `
        }}
      />

      <section className="mt-20 mb-20" aria-label="Hero Section">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="relative h-[400px] w-[624px] overflow-hidden hidden md:block 2xl:ml-20">
            <Image
              src='/hero/Home/h1.png'
              alt="Luxury holiday destinations for 2025"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Overlay */}
          <div className="relative">
            <div className="border-b-1 md:ml-3 pb-3 border-gray-300">
              <div className="flex flex-col">
                <h1 className="text-6xl md:text-7xl lg:text-9xl 2xl:text-9xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-[#dc0069] w-full text-center md:text-left">
                  Holidays
                </h1>
                <span className="mt-6 md:mt-0 text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-[#dc0069] text-center md:text-right w-full">
                  2025
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="mt-6 text-gray-500 max-w-xl text-sm hidden md:block">
                Why stay in one place when there&apos;s a whole world to explore? From breathtaking landscapes to rich cultural experiences, we connect you to destinations across the globe. Start your next adventure today and let&apos;s make memories that last a lifetime!
              </p>
              <p className="mt-6 text-gray-500 max-w-xl text-sm md:hidden">
                Why stay in one place when the world awaits? Explore breathtaking landscapes and rich cultures—your adventure starts now!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" aria-label="Popular Destinations">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Popular <span className="text-pink-600">Destinations</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {popularDestinations.map((destination, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] bg-white"
              >
                <div className="relative h-[300px] md:h-[350px] lg:h-[400px] w-full">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} - ${destination.description}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{destination.description}</p>
                  </div>
                </div>
                <div className="p-4 flex justify-center">
                  <Link href={destination.href} passHref aria-label={`Explore ${destination.name} holidays`}>
                    <button className="bg-pink-500 text-white py-2 px-6 rounded-md font-medium transition-all duration-300 hover:bg-pink-600 shadow-md cursor-pointer">
                      Read More
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Tailored Travel <span className="text-pink-600">Services</span>
          </h2>
          <CardVacations />
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className='mb-20' aria-label="Featured Hotels">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-sm text-blue-600 mb-2">Limited time offers</h2>
              <h3 className="text-3xl font-bold">Today&apos;s Best Deals</h3>
            </div>
            <Link 
              href="/hotels"
              className="text-blue-600 hover:underline flex items-center"
              aria-label="View all hotel deals"
            >
              View all deals 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="relative h-64 w-full">
                    <Image
                      src={hotel.image}
                      alt={`${hotel.name} - ${hotel.location}`}
                      fill
                      className="object-cover"
                 
                    />
                  </div>
                  <button 
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white"
                    aria-label="Save to favorites"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{hotel.name}</h4>
                      <p className="text-gray-600 text-sm">📍 {hotel.location}</p>
                    </div>
                    <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded">
                      <span className="font-bold">{hotel.rating}</span>
                      <span className="ml-1">★</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        +{hotel.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">Rs.{hotel.price.toLocaleString()}</span>
                      <span className="text-gray-600 text-sm"> / night</span>
                      <p className="text-sm text-gray-500">{hotel.reviewCount.toLocaleString()} reviews</p>
                    </div>
                    <Link 
                      href={`/hotels/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                      aria-label={`View deal for ${hotel.name}`}
                    >
                      View Deal
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='mb-20'>
        <Features features={[]} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 rounded-2xl" aria-label="Client Testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-9">
            What Our <span className="text-pink-600">Travelers Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <cite className="font-bold block">{testimonial.name}</cite>
                    <span className="text-gray-600 text-sm">{testimonial.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.comment}</p>
              </blockquote>
            ))}
          </div>
          <div className="flex justify-center mt-9">
            <Link 
              href='/reviews' 
              className='bg-pink-600 text-white p-2 rounded-md hover:bg-pink-700 transition-colors'
              aria-label="Read more customer reviews"
            >
              See More Reviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
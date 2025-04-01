import Image from 'next/image';
import Link from 'next/link';
import HotelList from '../components/HotelList';
import Features from '../components/Features';
import CardVacations from "../components/CardVacations";

const popularDestinations = [
  {
    name: 'Maldives',
    description: 'Luxury overwater villas and pristine beaches',
    image: '/images/destinations/maldives/home.png',
    href: '/maldives'
  },
  {
    name: 'Paris, France',
    description: 'Iconic Eiffel Tower and romantic walks by the Seine',
    image: '/images/destinations/france/home.png',
    href: '/paris'
  },
  {
    name: 'Tokyo, Japan',
    description: 'Traditional gardens and modern skyscrapers',
    image: '/images/destinations/japan/home.png',
    href: '/tokyo'

  },

];

const travelServices = [
  {
    title: 'Customized Itineraries',
    description: 'We tailor your journey to your preferences and interests',
    backContent: 'Get personalized travel plans crafted by our expert team, including accommodations, activities, and local experiences.',
    icon: ''
  },
  {
    title: 'Visa Assistance',
    description: 'We assist you with visa applications for your dream destinations',
    backContent: 'Complete visa support including document preparation, application filing, and status tracking.',
    icon: ''
  },
  {
    title: 'Travel Insurance',
    description: 'We provide comprehensive travel insurance to protect your journey',
    backContent: 'Coverage for medical emergencies, trip cancellations, lost baggage, and other travel-related incidents.',
    icon: ''
  },

  // Add more services
];

const testimonials = [
  {
    name: 'Sarah Thompson',
    location: 'United Kingdom',
    comment: 'An unforgettable experience with exceptional service',
    avatar: '/images/testimonials/avatar1.jpg'
  },

  {
    name: 'Sarah Thompson',
    location: 'United Kingdom',
    comment: 'An unforgettable experience with exceptional service',
    avatar: '/images/testimonials/avatar1.jpg'
  },

  {
    name: 'Sarah Thompson',
    location: 'United Kingdom',
    comment: 'An unforgettable experience with exceptional service',
    avatar: '/images/testimonials/avatar1.jpg'
  },
  // Add more testimonials
];

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="mt-20 mb-20" aria-label="Hero Section">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="relative h-[400px] w-full overflow-hidden hidden md:block">
            <Image
              src='/hero/Home/h1.png'
              alt="Holidays 2025"
              layout="fill"
              objectFit="cover"
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
                Why stay in one place when there’s a whole world to explore? From breathtaking landscapes to rich cultural experiences, we connect you to destinations across the globe. Start your next adventure today and let’s make memories that last a lifetime!
              </p>
              <p className="mt-6 text-gray-500 max-w-xl text-sm md:hidden">
                Why stay in one place when the world awaits? Explore breathtaking landscapes and rich cultures—your adventure starts now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-gray-50" aria-label="Popular Destinations">
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
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{destination.description}</p>
                  </div>
                </div>
                <div className="p-4 flex justify-center">
                  <Link href={destination.href} passHref>
                    <button className="bg-pink-500 text-white py-2 px-6 rounded-md font-medium transition-all duration-300 hover:bg-pink-600 shadow-md cursor-pointer">
                      Read More
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-gray-50 rounded-2xl mb-20" aria-label="Popular Destinations">
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
                    alt={destination.name}
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
                  <Link href={destination.href} passHref>
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

      <section className='mb-20'>
        <HotelList />
      </section>

      <section className='mb-20'>
        <Features features={[]} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" aria-label="Client Testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-9">
            What Our <span className="text-pink-600">Travelers Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <cite className="font-bold block">{testimonial.name}</cite>
                    <span className="text-gray-600 text-sm">{testimonial.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.comment}</p>
              </blockquote>
            ))}
          </div>
          <button className='bg-pink-600 text-white p-2 mx-auto flex mt-9 rounded-md'><Link href='/reviews'>See More Reviews </Link></button>
        </div>
      </section>
    </main>
  );
}
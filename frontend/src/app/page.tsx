import Image from 'next/image';
import Link from 'next/link';
import HotelList from '../components/HotelList';
import Features from '../components/Features';

const popularDestinations = [
  {
    name: 'Maldives Paradise',
    description: 'Luxury overwater villas and pristine beaches',
    image: '/images/destinations/maldives.jpg',
    href: '/maldives'
  },
  {
    name: 'Paris, France',
    description: 'Iconic Eiffel Tower and romantic walks by the Seine',
    image: '/images/destinations/paris.jpg',
    href: '/paris'
  },
  {
    name: 'Tokyo, Japan',
    description: 'Traditional gardens and modern skyscrapers',
    image: '/images/destinations/tokyo.jpg',
    href: '/tokyo'

  },

];

const travelServices = [
  {
    title: 'Customized Itineraries',
    description: 'We tailor your journey to your preferences and interests',
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
      <section className="py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-7xl lg:text-9xl 2xl:text-9xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-[#dc0069]">
              LET'S EXPLORE
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              Why stay in one place when there's a whole world to explore? From breathtaking landscapes
              to rich cultural experiences, we connect you to destinations across the globe. Start your next
              adventure today and let's make memories that last a lifetime!
            </p>
          </div>

          {/* Image Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 h-[600px]">
            <div className="space-y-4">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/sunset-dock.jpg"
                  alt="Sunset dock view"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="relative h-[180px] w-full">
                <Image
                  src="/images/palm-sunset.jpg"
                  alt="Palm trees at sunset"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="relative h-[180px] w-full">
                <Image
                  src="/images/petronas.jpg"
                  alt="Petronas Towers"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/fountain.jpg"
                  alt="Modern fountain"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" aria-label="Popular Destinations">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Popular <span className="text-pink-600">Destinations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <article key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-[400px] w-full">
                  
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.description}</p>
                  </div>
                  
                </div>
                <button className='bg-pink-600 text-white p-2 mx-auto flex mt-3 rounded-md'><Link href={destination.href}>Read More </Link></button>
              </article>
              
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-label="Our Services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Tailored Travel <span className="text-pink-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServices.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 text-pink-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16'>
        <HotelList />
      </section>

      <section className='py-16'>
        <Features features={[]} />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50" aria-label="Client Testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
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
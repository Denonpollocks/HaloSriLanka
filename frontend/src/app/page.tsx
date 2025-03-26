import Image from 'next/image';
import Link from 'next/link';
import HotelList from '../components/HotelList';
import Features from '../components/Features';
import HomeHero from '../components/hero/HomeHero';

const popularDestinations = [
  {
    name: 'Maldives',
    description: 'Luxury overwater villas and pristine beaches',
    image: '/images/destinations/maldives/maldives-watervilla.png',
    href: '/maldives'
  },
  {
    name: 'Paris, France',
    description: 'Iconic Eiffel Tower and romantic walks by the Seine',
    image: '/images/destinations/france/france.jpg',
    href: '/paris'
  },
  {
    name: 'Tokyo, Japan',
    description: 'Traditional gardens and modern skyscrapers',
    image: '/images/destinations/japan/japan.jpg',
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
      <section className="py-20">
        <HomeHero />
      </section>

      <section className="py-16 bg-gray-50" aria-label="Popular Destinations">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Popular <span className="text-pink-600">Destinations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
            <article key={index} className="group rounded-lg">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-sm opacity-90">{destination.description}</p>
              </div>
            </div>
          
            <button className="bg-pink-600 text-white p-2 mx-auto flex mt-3 rounded-md">
              <Link href={destination.href}>Read More</Link>
            </button>
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
              <div key={index} className="group h-[300px] [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <div className="absolute inset-0 p-6 border border-gray-100 shadow-lg rounded-lg bg-white">
                    <div className="w-12 h-12 mb-4 text-pink-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 h-full w-full p-6  rounded-lg bg-[#dc0069] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col h-full justify-center items-center text-center">
                      <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                      <p className="text-white">{service.backContent}</p>
                    </div>
                  </div>
                </div>
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
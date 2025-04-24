import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import {
  GlobeAsiaAustraliaIcon,
  CalendarIcon,
  // UserGroupIcon,
  ShieldCheckIcon,
  MapIcon,
  SunIcon,
  CurrencyDollarIcon,
  LanguageIcon,
  // ArrowRightIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Explore Destinations | Halo Holidays',
  description: 'Discover our handpicked collection of dream destinations around the world. From tropical beaches to historic cities, find your perfect holiday destination.',
  keywords: 'travel destinations, holiday destinations, international travel, luxury travel, beach destinations, city breaks',
};

// Define destinations data
const destinations = [
  {
    name: 'Maldives',
    description: 'Luxury overwater villas and pristine beaches',
    image: '/images/destinations/Maldives.png',
    featuredImage: '/images/destination-featured/Maldives.png',
    href: '/destinations/maldives',
    featured: true,
    continent: 'Asia',
    bestTimeToVisit: 'November to April',
    averageBudget: 'High',
    languages: ['Dhivehi', 'English'],
    highlights: ['Overwater Bungalows', 'Coral Reefs', 'Water Sports']
  },
  {
    name: 'France',
    description: 'Iconic Eiffel Tower and romantic walks by the Seine',
    image: '/images/destinations/France.png',
    featuredImage: '/images/destination-featured/France.png',
    href: '/destinations/france',
    featured: true,
    continent: 'Europe',
    bestTimeToVisit: 'April to June, September to October',
    averageBudget: 'Medium to High',
    languages: ['French', 'English'],
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral']
  },
  {
    name: 'Japan',
    description: 'Traditional gardens and modern skyscrapers',
    image: '/images/destinations/Japan.png',
    featuredImage: '/images/destination-featured/Japan.png',
    href: '/destinations/japan',
    featured: true,
    continent: 'Asia',
    bestTimeToVisit: 'March to May, September to November',
    averageBudget: 'Medium to High',
    languages: ['Japanese'],
    highlights: ['Cherry Blossoms', 'Tokyo Tower', 'Imperial Palace']
  },
  {
    name: 'Dubai, UAE',
    description: 'Futuristic architecture and luxury shopping',
    image: '/images/destinations/Dubai.png',
    href: '/destinations/dubai',
    featured: false,
    continent: 'Asia',
    bestTimeToVisit: 'November to March',
    averageBudget: 'High',
    languages: ['Arabic', 'English'],
    highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall']
  },
  {
    name: 'Indonesia',
    description: 'Tropical paradise with rich cultural heritage',
    image: '/images/destinations/Bali.png',
    href: '/destinations/indonesia',
    featured: false,
    continent: 'Asia',
    bestTimeToVisit: 'April to October',
    averageBudget: 'Low to Medium',
    languages: ['Indonesian', 'Balinese'],
    highlights: ['Ubud', 'Rice Terraces', 'Temple Tours']
  },
  {
    name: 'Greece',
    description: 'Stunning white buildings with blue domes overlooking the sea',
    image: '/images/destinations/Greece.png',
    href: '/destinations/greece',
    featured: false,
    continent: 'Europe',
    bestTimeToVisit: 'April to November',
    averageBudget: 'Medium to High',
    languages: ['Greek', 'English'],
    highlights: ['Oia Sunset', 'Black Sand Beaches', 'Caldera Views']
  },
  {
    name: 'Turkey',
    description: 'Where East meets West with rich historical sites',
    image: '/images/destinations/Turkey.png',
    href: '/destinations/turkey',
    featured: false,
    continent: 'Europe/Asia',
    bestTimeToVisit: 'April to May, September to November',
    averageBudget: 'Medium',
    languages: ['Turkish'],
    highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar']
  },
  {
    name: 'Singapore',
    description: 'Modern city-state with stunning architecture and gardens',
    image: '/images/destinations/Singapore.png',
    href: '/destinations/singapore',
    featured: false,
    continent: 'Asia',
    bestTimeToVisit: 'February to April',
    averageBudget: 'High',
    languages: ['English', 'Mandarin', 'Malay', 'Tamil'],
    highlights: ['Gardens by the Bay', 'Marina Bay Sands', 'Sentosa Island']
  },
  {
    name: 'Egypt',
    description: 'Ancient pyramids and rich historical heritage',
    image: '/images/destinations/Cairo.png',
    href: '/destinations/egypt',
    featured: false,
    continent: 'Africa',
    bestTimeToVisit: 'October to April',
    averageBudget: 'Low to Medium',
    languages: ['Arabic'],
    highlights: ['Pyramids of Giza', 'Egyptian Museum', 'Nile River']
  },
  {
    name: 'China',
    description: 'Imperial palaces and the Great Wall',
    image: '/images/destinations/China.png',
    href: '/destinations/china',
    featured: false,
    continent: 'Asia',
    bestTimeToVisit: 'September to October, March to May',
    averageBudget: 'Medium',
    languages: ['Mandarin'],
    highlights: ['Great Wall', 'Forbidden City', 'Summer Palace']
  },
  {
    name: 'Bangkok, Thailand',
    description: 'Vibrant street life and ornate shrines',
    image: '/images/destinations/Thailand.png',
    href: '/destinations/thailand',
    featured: false,
    continent: 'Asia',
    bestTimeToVisit: 'November to March',
    averageBudget: 'Low to Medium',
    languages: ['Thai'],
    highlights: ['Grand Palace', 'Floating Markets', 'Street Food']
  },
  {
    name: 'Kuala Lumpur, Malaysia',
    description: 'Modern skyline dominated by the Petronas Twin Towers',
    image: '/images/destinations/Malaysia.png',
    href: '/destinations/malaysia',
    featured: false,
    continent: 'Asia',
    bestTimeToVisit: 'May to July',
    averageBudget: 'Medium',
    languages: ['Malay', 'English'],
    highlights: ['Petronas Towers', 'Batu Caves', 'KL Tower']
  }
];

// Define travel guides data
// const travelGuides = [
//   {
//     title: 'Ultimate Maldives Guide',
//     description: 'Everything you need to know for a perfect Maldives getaway',
//     image: '/images/guides/maldives-guide.jpg',
//     href: '/travel-guide/maldives',
//     expertName: 'Sarah Williams',
//     experience: '10+ years'
//   },
//   {
//     title: 'Exploring Southeast Asia',
//     description: 'Navigate the diverse cultures and landscapes of Southeast Asia',
//     image: '/images/guides/southeast-asia.jpg',
//     href: '/travel-guide/southeast-asia',
//     expertName: 'Michael Chen',
//     experience: '12+ years'
//   },
//   {
//     title: 'European City Breaks',
//     description: 'Make the most of short trips to Europe\'s most captivating cities',
//     image: '/images/guides/europe-cities.jpg',
//     href: '/travel-guide/european-cities',
//     expertName: 'Emma Johnson',
//     experience: '8+ years'
//   }
// ];

// Define testimonials data
// const testimonials = [
//   {
//     name: 'Sarah Thompson',
//     location: 'United Kingdom',
//     comment: 'Our trip to the Maldives was absolutely perfect. The attention to detail from Halo Holidays made all the difference - from the seamless transfers to the personalized experiences.',
//     destination: 'Maldives'
//   },
//   {
//     name: 'James Wilson',
//     location: 'Australia',
//     comment: 'The Thailand itinerary Halo Holidays created for us struck the perfect balance between cultural experiences and relaxation. We\'ll definitely book with them again!',
//     destination: 'Thailand'
//   },
//   {
//     name: 'Elena Rodriguez',
//     location: 'Spain',
//     comment: 'Our family trip to Dubai exceeded all expectations. The hotel recommendations were spot-on and the activities were perfect for all ages. Highly recommend!',
//     destination: 'Dubai'
//   }
// ];

// Define travel experts data
const travelExperts = [
  {
    name: 'Kasun Gatamanna',
    title: 'All-in-One Specialist',
    experience: '4+ years',
    expertise: ['Luxury Travel', 'Cultural Experiences', 'Group Tours', 'Squad Trips'],
    image: '/images/Kasun.png'
  },
  {
    name: 'Shihaar Gazzaly',
    title: 'Europe & Asia Specialist',
    experience: '1+ years',
    expertise: ['Couple Tours', 'Squad Trips', 'Family Travel', 'Culinary Experiences'],
    image: '/images/Shihaar.png'
  },
  {
    name: 'Mohamed Naveed',
    title: 'MiddleEast & Asia Specialist',
    experience: '1+ years',
    expertise: ['Desert Adventures', 'Luxury Resorts', 'Honeymoon Tours', 'Family Trips'],
    image: '/images/Naveed.png'
  },
  {
    name: 'Mohamed Naflan',
    title: 'Europe Specialist',
    experience: '1+ years',
    expertise: ['City Breaks', 'Honeymoon Tours', 'Solo Experiences'],
    image: '/images/Naflan.png'
  },
  {
    name: 'Mathura Manogaren',
    title: 'Asia Specialist',
    experience: '1+ years',
    expertise: ['Solo Travel', 'Historical Adventures', 'Couple Getaways'],
    image: '/images/Mathura.png'
  },
  {
    name: 'Izam Ismath',
    title: 'Travel Specialist',
    experience: '1+ years',
    expertise: ['Family Trips', 'Luxury Tours', 'Group Travel', 'Corporate Travel'],
    image: '/images/Izam.png'
  }
];

export default function DestinationsPage() {
  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Halo Holidays",
    "url": "https://haloholidays.com/destinations",
    "description": "Discover our handpicked collection of dream destinations around the world.",
    "areaServed": destinations.map(dest => dest.name).join(", "),
    "makesOffer": destinations.map(dest => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "TravelAction",
        "name": `${dest.name} Holiday Packages`,
        "description": dest.description
      }
    }))
  };

  return (
    <>
      <Script
        id="destinations-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/destinations/hero.png"
              alt="World destinations collage"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove">Dream Destinations</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Discover handpicked destinations curated by our travel experts. From tropical paradises to historic cities, find your perfect getaway.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#featured-destinations"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
                aria-label="Explore featured destinations"
              >
                Explore Destinations
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-md transition-colors duration-300"
                aria-label="Contact our travel experts"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Destinations Section */}
        <section id="featured-destinations" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Featured <span className="text-pink-600">Destinations</span>
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our most popular destinations, handpicked for unforgettable experiences
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.filter(d => d.featured).map((destination, index) => (
                <article key={index} className="group relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-[1.00] bg-white">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={destination.featuredImage || destination.image}
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
                    <Link
                      href={destination.href}
                      className="bg-pink-500 text-white py-2 px-6 rounded-md font-medium transition-all duration-300 hover:bg-pink-600 shadow-md"
                      aria-label={`Explore ${destination.name} holidays`}
                    >
                      Explore
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Destination Categories Section */}
        {/* <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Explore by <span className="text-pink-600">Region</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Asia', count: destinations.filter(d => d.continent === 'Asia').length, image: '/images/regions/asia.jpg' },
                { name: 'Europe', count: destinations.filter(d => d.continent === 'Europe' || d.continent.includes('Europe')).length, image: '/images/regions/europe.jpg' },
                { name: 'Middle East', count: destinations.filter(d => d.name.includes('Dubai') || d.name.includes('Egypt')).length, image: '/images/regions/middle-east.jpg' },
                { name: 'Africa', count: destinations.filter(d => d.continent === 'Africa').length, image: '/images/regions/africa.jpg' },
              ].map((region, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-md group">
                  <div className="relative h-48">
                    <Image
                      src={region.image}
                      alt={`${region.name} region`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                    <p className="text-sm">{region.count} Destinations</p>
                    <Link 
                      href={`#${region.name.toLowerCase()}`}
                      className="mt-4 px-4 py-2 bg-pink-600/80 hover:bg-pink-600 rounded-md text-sm font-medium transition-colors duration-300"
                      aria-label={`View ${region.name} destinations`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* All Destinations Section */}
        <section id="all-destinations" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              All <span className="text-pink-600">Destinations</span>
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Explore our complete collection of handpicked destinations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative h-48">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>

                    <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapIcon className="h-4 w-4 mr-1" />
                        <span>{destination.continent}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <SunIcon className="h-4 w-4 mr-1" />
                        <span>Best: {destination.bestTimeToVisit.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                        <span>{destination.averageBudget}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <LanguageIcon className="h-4 w-4 mr-1" />
                        <span>{destination.languages[0]}</span>
                      </div>
                    </div>

                    <Link
                      href={destination.href}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                      aria-label={`Learn more about ${destination.name}`}
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Guides Section */}
        {/* <section id="travel-guides" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Expert <span className="text-pink-600">Travel Guides</span>
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Comprehensive resources to help you plan the perfect trip to your chosen destination
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {travelGuides.map((guide, index) => (
                <article key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <Link
                      href={guide.href}
                      className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded text-sm transition-colors duration-300"
                      aria-label={`Read ${guide.title}`}
                    >
                      Read Guide
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/travel-guide"
                className="inline-block border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-md transition-colors duration-300"
                aria-label="View all travel guides"
              >
                View All Travel Guides
              </Link>
            </div>
          </div>
        </section> */}

        {/* Travel Experts Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Meet Our <span className="text-pink-600">Travel Experts</span>
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our specialists have extensive first-hand knowledge of their regions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {travelExperts.map((expert, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm p-6 text-center">
                  <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      width={128}
                      height={128}
                      className="object-cover rounded-full"
                      sizes="128px"
                      quality={100}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
                  <p className="text-pink-600 font-medium mb-2">{expert.title}</p>
                  <p className="text-gray-600 mb-4">{expert.experience} experience</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {expert.expertise.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="text-pink-600 hover:text-pink-800 text-sm font-medium"
                    aria-label={`Contact ${expert.name}`}
                  >
                    Speak with {expert.name.split(' ')[0]}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2024 Travel Essentials Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              2024 Travel <span className="text-pink-600">Essentials</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Getting There Card */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
                <div className="flex items-center gap-3 mb-6">
                  <PaperAirplaneIcon className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-semibold">Travel Planning</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: CalendarIcon, text: "Book flights 3-6 months in advance" },
                    { icon: GlobeAsiaAustraliaIcon, text: "Check visa requirements early" },
                    { icon: ShieldCheckIcon, text: "Get comprehensive travel insurance" },
                    { icon: MapIcon, text: "Research local transportation options" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <item.icon className="w-5 h-5 text-pink-600" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Health & Safety Card */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-semibold">Health & Safety</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: ShieldCheckIcon, text: "Check travel advisories before booking" },
                    { icon: ShieldCheckIcon, text: "Research required vaccinations" },
                    { icon: ShieldCheckIcon, text: "Pack a basic first-aid kit" },
                    { icon: ShieldCheckIcon, text: "Keep digital copies of important documents" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <item.icon className="w-5 h-5 text-pink-600" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packing Tips Card */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
                <div className="flex items-center gap-3 mb-6">
                  <MapIcon className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-semibold">Packing Tips</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: MapIcon, text: "Research weather at your destination" },
                    { icon: MapIcon, text: "Pack versatile clothing items" },
                    { icon: MapIcon, text: "Bring universal power adapters" },
                    { icon: MapIcon, text: "Don't forget destination-specific essentials" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <item.icon className="w-5 h-5 text-pink-600" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Destination Planning Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help Planning Your <span className="text-pink-500">Perfect Trip</span>?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our travel experts are ready to create a personalized itinerary based on your preferences and budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md transition-colors duration-300"
                  aria-label="Contact our travel experts"
                >
                  Speak to an Expert
                </Link>
                <Link
                  href="/custom-package"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md transition-colors duration-300"
                  aria-label="Create a custom travel package"
                >
                  Create Custom Package
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our <span className="text-pink-600">Travelers Say</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <blockquote className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="ml-1">
                    <cite className="font-semibold text-lg">Sajanee Charithma</cite>
                    <p className="text-gray-600">Singapore Holiday</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Our experience with Halo holidays was wonderful! Mr. Naveed was very helpful with planning our trip to Singapore from booking flights to finalizing our travel itinerary, giving us various options to choose. He handled our tour with much professionalism and we are looking forward to plan our next tour with Halo holidays!&quot;
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </blockquote>

              <blockquote className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="ml-1">
                    <cite className="font-semibold text-lg">Anne Mendis</cite>
                    <p className="text-gray-600">Nepal and Thailand</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;I recently booked trips to Nepal and Thailand with Halo Holidays, and the experience so far has been great! Shihaar has been incredibly helpful, responsive, and attentive to my requirements, ensuring everything is tailored to my needs. Though I haven’t traveled yet, their professionalism and support have made the planning process smooth and hassle-free. Looking forward to the trips—highly recommend their service!&quot;
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </blockquote>

              <blockquote className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="ml-1">
                    <cite className="font-semibold text-lg">Nirmani Wickramasinghe</cite>
                    <p className="text-gray-600">Malaysia Holiday</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;I had an excellent experience working with Shihaar throughout the entire ticketing process. From start to finish, he was incredibly attentive and responsive, addressing all my questions and inquiries with patience and professionalism. His prompt communication and thorough assistance made the entire process smooth and stress-free. I truly appreciated his dedication to ensuring I had all the information I needed. Highly recommend Shihaar for his outstanding customer service!&quot;
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </blockquote>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/testimonials"
                className="inline-block border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Read More Testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="text-pink-600">Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How do I choose the right destination for my trip?",
                  answer: "Consider your interests (beaches, culture, adventure), budget, travel season, and time available. Our destination guides provide detailed information to help you make an informed decision, or you can speak with our travel experts for personalized recommendations."
                },
                {
                  question: "What's included in your holiday packages?",
                  answer: "Our packages typically include flights, accommodation, transfers, and selected activities. Some packages also include meals and guided tours. Each listing clearly specifies what's included, and we can customize any package to suit your preferences."
                },
                {
                  question: "How far in advance should I book my holiday?",
                  answer: "For peak seasons and popular destinations, we recommend booking 6-8 months in advance. For off-peak travel, 3-4 months is usually sufficient. Last-minute deals are sometimes available, but selection may be limited."
                },
                {
                  question: "Do I need travel insurance?",
                  answer: "We strongly recommend travel insurance for all trips. It provides protection against unexpected events like trip cancellations, medical emergencies, lost luggage, and more. We can help you select the right coverage for your specific journey."
                },
                {
                  question: "Can I customize the suggested itineraries?",
                  answer: "Absolutely! All our itineraries can be customized to match your preferences, pace, and interests. Contact our travel specialists to create your perfect tailor-made holiday."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org structured data */}
        <Script
          id="destination-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "TravelAgency",
                "name": "Halo Holidays",
                "url": "https://haloholidays.com/destinations",
                "description": "Discover our handpicked collection of dream destinations around the world. From tropical beaches to historic cities, find your perfect holiday destination.",
                "areaServed": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "0",
                    "longitude": "0"
                  },
                  "geoRadius": "20000"
                },
                "makesOffer": [
                  ${destinations.map(dest => `
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "TravelAction",
                        "name": "${dest.name} Holiday Packages",
                        "description": "${dest.description}"
                      }
                    }
                  `).join(',')}
                ]
              }
            `
          }}
        />
      </main>
    </>
  );
}

export const dynamic = 'force-static';
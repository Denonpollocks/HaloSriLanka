import { Metadata } from 'next';
import Image from 'next/image';
import { tourData } from '@/data/tours';
import LazySection from '@/components/LazySection';
import { StarIcon, PhoneIcon, ShieldCheckIcon, MapPinIcon, CalendarIcon, UserGroupIcon, CameraIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Sri Lanka Tours | Halo Holidays',
  description: 'Expertly crafted Sri Lanka tours with experienced guides, luxury accommodation and unforgettable experiences.',
};

export default function SriLankaTours() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                <GlobeAltIcon className="w-6 h-6" />
                <span>Holidays</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
                <MapPinIcon className="w-6 h-6" />
                <span>Hotel Only</span>
              </button>
              <button className="flex items-center space-x-2 text-pink-600">
                <CameraIcon className="w-6 h-6" />
                <span>Escorted Tours</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <select className="w-full p-3 rounded-lg border border-gray-300">
                <option>Any Destination or Escort...</option>
                {tourData.searchOptions.destinations.map((dest, i) => (
                  <option key={i}>{dest}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <select className="w-full p-3 rounded-lg border border-gray-300">
                <option>Any Airport</option>
                {tourData.searchOptions.airports.map((airport, i) => (
                  <option key={i}>{airport}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <input 
                type="date" 
                className="w-full p-3 rounded-lg border border-gray-300"
                placeholder="Any Date"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <select className="w-full p-3 rounded-lg border border-gray-300">
                <option>2 Guests</option>
                {[1,2,3,4].map(num => (
                  <option key={num}>{num} Guests</option>
                ))}
              </select>
            </div>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="bg-blue-800 text-white py-3 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg">
            {tourData.banner.text}
            <a href={tourData.banner.link} className="underline ml-2">View Tours &gt;</a>
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh]">
        <Image
          src="/images/tours/sri-lanka/hero.jpg"
          alt="Sri Lankan stilt fishermen at sunset"
          fill
          className="object-cover"
          priority
        />
        <button className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg flex items-center gap-2">
          <CameraIcon className="w-5 h-5" />
          View 17 Photos
        </button>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm">
          <a href="/tours" className="text-blue-600 hover:underline">Sri Lanka Escorted Tours</a>
          <span>&gt;</span>
          <span className="text-gray-600">Grand Tour of Sri Lanka</span>
        </div>
      </div>

      {/* Tour Details */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">{tourData.title}</h1>
        <h2 className="text-2xl text-gray-600 mb-6">{tourData.subtitle}</h2>
        
        <div className="flex flex-wrap gap-6 mb-8">
          {Object.entries(tourData.quickFacts).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          {tourData.description}
        </p>
      </section>

      {/* Contact Expert Section */}
      <section className="bg-pink-600 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Your tour of Sri Lanka is just a phone call away</h2>
            <p className="text-lg">Call our Travel Specialists today</p>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon className="w-8 h-8" />
            <span className="text-2xl font-bold">{tourData.contactInfo.phone}</span>
          </div>
        </div>
      </section>

      {/* Tour Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourData.tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-[250px]">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span>{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-bold text-pink-600 mb-4">{tour.price}</p>
                  <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                    View Tour Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Tour Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Triangle",
                desc: "Explore UNESCO World Heritage sites including Sigiriya Rock Fortress",
                icon: "🏛️"
              },
              {
                title: "Wildlife Safari",
                desc: "Spot elephants and leopards in Yala National Park",
                icon: "🐘"
              },
              {
                title: "Tea Plantations",
                desc: "Journey through the misty hills of Nuwara Eliya",
                icon: "🍃"
              },
              {
                title: "Coastal Beauty",
                desc: "Relax on pristine beaches and visit colonial Galle Fort",
                icon: "🏖️"
              },
              {
                title: "Local Experiences",
                desc: "Traditional cooking classes and village visits",
                icon: "👨‍🍳"
              },
              {
                title: "Luxury Hotels",
                desc: "Stay in carefully selected 4* and 5* accommodations",
                icon: "🏨"
              }
            ].map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <span className="text-4xl mb-4 block">{highlight.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">What&apos;s Included</h2>
              <div className="space-y-4">
                {[
                  "Return flights from London Heathrow",
                  "44 meals: 16 breakfasts, 14 lunches & 14 dinners",
                  "16 excursions and visits",
                  "All accommodation in 4* & 5* hotels",
                  "Services of an experienced tour manager",
                  "Overseas transfers & transportation",
                  "Porterage",
                  "All airport taxes and security charges"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/tours/sri-lanka/included-features.jpg"
                alt="Luxury hotel pool in Sri Lanka"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Your Itinerary</h2>
          <div className="space-y-6">
            {[
              {
                day: "Day 1-2",
                title: "Colombo",
                description: "Arrive in Colombo and transfer to your hotel. Next day explore the capital's colonial heritage."
              },
              {
                day: "Day 3-4",
                title: "Cultural Triangle",
                description: "Visit ancient cities of Anuradhapura and climb Sigiriya Rock Fortress."
              },
              {
                day: "Day 5-6",
                title: "Kandy",
                description: "Temple of the Tooth Relic and Royal Botanical Gardens."
              }
              // Add more days...
            ].map((day, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-pink-600 font-bold whitespace-nowrap">{day.day}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors">
            View Full Itinerary
          </button>
        </div>
      </section>

      {/* Price & Departure Dates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pricing Card */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Prices & Dates</h2>
              <div className="space-y-6">
                {[
                  {
                    month: "September 2024",
                    dates: [
                      { day: "05", price: "2,499" },
                      { day: "12", price: "2,599" },
                      { day: "19", price: "2,499" }
                    ]
                  },
                  {
                    month: "October 2024",
                    dates: [
                      { day: "03", price: "2,699" },
                      { day: "10", price: "2,799" },
                      { day: "17", price: "2,699" }
                    ]
                  }
                ].map((month, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-6">
                    <h3 className="font-semibold text-lg mb-4">{month.month}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {month.dates.map((date, dateIdx) => (
                        <div key={dateIdx} className="border border-gray-200 rounded-lg p-4 hover:border-pink-600 cursor-pointer transition-colors">
                          <p className="text-lg font-bold">{date.day} {month.month.split(' ')[0]}</p>
                          <p className="text-pink-600 font-bold">£{date.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Book */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Book</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Departure Date</label>
                  <input type="date" className="w-full p-3 rounded-lg border border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Passengers</label>
                  <select className="w-full p-3 rounded-lg border border-gray-300">
                    <option>2 Adults</option>
                    <option>1 Adult</option>
                    <option>3 Adults</option>
                  </select>
                </div>
                <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Extensions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Extensions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Colombo City Stay",
                duration: "3 nights",
                price: "299",
                image: "/images/tours/sri-lanka/colombo-extension.jpg"
              },
              {
                title: "Beach Stay",
                duration: "5 nights",
                price: "499",
                image: "/images/tours/sri-lanka/beach-extension.jpg"
              },
              {
                title: "Maldives Escape",
                duration: "4 nights",
                price: "899",
                image: "/images/tours/sri-lanka/maldives-extension.jpg"
              }
            ].map((extension, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image
                    src={extension.image}
                    alt={extension.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{extension.title}</h3>
                  <p className="text-gray-600 mb-4">{extension.duration}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-600 font-bold">from £{extension.price}</span>
                    <button className="text-pink-600 hover:text-pink-700">View Details →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Similar Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Similar Tours You May Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Secrets of Sri Lanka",
                duration: "14 Days",
                price: "from £2,299",
                image: "/images/tours/sri-lanka/secrets-tour.jpg",
                rating: 4.7,
                reviews: 856,
                highlights: ["Colombo City Stay", "Cultural Triangle", "Tea Plantations"]
              },
              {
                title: "Jewels of Sri Lanka",
                duration: "12 Days",
                price: "from £1,999",
                image: "/images/tours/sri-lanka/jewels-tour.jpg",
                rating: 4.8,
                reviews: 1024,
                highlights: ["Colombo City", "Wildlife Safari", "Beach Stay"]
              },
              {
                title: "Sri Lanka's Parks & Wildlife",
                duration: "15 Days",
                price: "from £2,499",
                image: "/images/tours/sri-lanka/wildlife-tour.jpg",
                rating: 4.9,
                reviews: 732,
                highlights: ["National Parks", "Beach Stay", "Wildlife Viewing"]
              }
            ].map((tour, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-[200px]">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-bold text-pink-600 mb-4">{tour.price}</p>
                  <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                    View Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-gray-500">(2,456 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Recent Traveler",
                date: "March 2024",
                rating: 5,
                title: "Exceptional Tour Experience",
                comment: "The tour was perfectly organized with a great balance of activities. Our guide was knowledgeable and accommodating."
              },
              {
                name: "Recent Traveler",
                date: "February 2024",
                rating: 5,
                title: "Unforgettable Sri Lanka Adventure",
                comment: "From the ancient cities to wildlife safaris, every day brought new excitement. Highly recommend!"
              },
              {
                name: "Recent Traveler",
                date: "January 2024",
                rating: 4,
                title: "Great Cultural Experience",
                comment: "Wonderful insight into Sri Lankan culture and history. Hotels were excellent throughout."
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                  <div className="text-yellow-400">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{review.title}</h3>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
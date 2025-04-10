import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { 
  PaperAirplaneIcon, 
  CalendarIcon, 
  GlobeAsiaAustraliaIcon,
  TicketIcon,
  IdentificationIcon,
  PlusIcon,
  MinusIcon,
  CheckIcon,
  TrophyIcon,
  UserGroupIcon,
  BeakerIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline';
import Breadcrumbs from '@/components/BreadCrumbs';
import { franceHotels } from '@/data/hotels/France/franceHotels';

export const metadata: Metadata = {
  title: 'Luxury France Holidays 2024 | Cultural & Gastronomic Experiences',
  description: 'Experience luxury France holidays featuring iconic landmarks, fine dining, and exclusive experiences. Book your 2024 French adventure today.',
  keywords: 'France holidays, luxury hotels France, Paris, French Riviera, Loire Valley, French cuisine',
  alternates: {
    canonical: 'https://haloholidays.com/destinations/france'
  },
  openGraph: {
    title: 'Luxury France Holidays 2024 | Cultural Paradise',
    description: 'Discover France\'s finest hotels, cultural experiences, and culinary adventures with exclusive holiday packages.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/destinations/france/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury French Hotel and Eiffel Tower Views'
      }
    ]
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "France",
  "description": "Where timeless elegance meets culinary excellence",
  "url": "https://haloholidays.com/destinations/france",
  "touristType": ["Luxury", "Culture", "Gastronomy", "Romance"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2300"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "1299",
    "highPrice": "8999",
    "offerCount": "45"
  }
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "France Luxury Holiday Packages 2024",
  "description": "Premium France packages including 5-star hotels and exclusive experiences",
  "brand": {
    "@type": "Brand",
    "name": "Halo Holidays"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "1299",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  }
};

export default function FranceDestination() {

  
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/france/france.jpg"
          alt="Eiffel Tower at Sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                        bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}>
            France
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Where timeless elegance meets culinary excellence
          </p>
        </div>
      </header>

      <Breadcrumbs />    

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Visit <span className="text-pink-600">France</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              Experience the perfect blend of culture, cuisine, and timeless elegance
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">France Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "45,000", label: "Châteaux", icon: "🏰" },
                      { number: "49", label: "UNESCO Sites", icon: "🏛️" },
                      { number: "67M", label: "Yearly Visitors", icon: "🌍" },
                      { number: "28", label: "Michelin 3★", icon: "⭐" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl mb-2 block">{stat.icon}</span>
                        <span className="block text-2xl font-bold text-gray-800">{stat.number}</span>
                        <span className="text-sm text-gray-600">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2024 Updates Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">2024 Travel Updates</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Paris Olympics",
                        desc: "Special events and celebrations",
                        icon: "🏅"
                      },
                      {
                        title: "New TGV Routes",
                        desc: "Enhanced rail connectivity",
                        icon: "🚄"
                      },
                      {
                        title: "Cultural Events",
                        desc: "Major exhibitions and festivals",
                        icon: "🎨"
                      },
                      {
                        title: "Sustainability",
                        desc: "Green tourism initiatives",
                        icon: "🌿"
                      }
                    ].map((update, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors">
                        <span className="text-2xl">{update.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{update.title}</h4>
                          <p className="text-sm text-gray-600">{update.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* UNESCO Badge */}
              <div className="border border-pink-500 text-gray-700 p-6 rounded-2xl mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UNESCO World Heritage Sites</h3>
                    <p className="text-gray-700">Including Mont Saint-Michel, Palace of Versailles, and Loire Valley</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024&apos;s Premier <span className="text-pink-600">Luxury Hotels</span>
            </h2>
            <p className="text-gray-600">
              Discover our handpicked collection of Dubai&apos;s finest hotels and resorts
            </p>
          </div>

          {/* Featured Packages Grid - Now using data from hotels.ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {franceHotels.slice(0, 3).map((hotel, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={hotel.cardImage}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{hotel.location.split(',')[0]}</p>
                    <h3 className="text-2xl font-bold">{hotel.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                    From LKR {hotel.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">{hotel.ratings.overall}</span>
                    <span className="text-gray-500 text-sm">({hotel.ratings.totalReviews} reviews)</span>
                  </div>
                  
                  <div className="space-y-3">
                    {hotel.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckIcon className="w-5 h-5 text-pink-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                    <Link 
            href={`/destinations/france/hotel/${hotel.slug.toLowerCase().replace(/\s+/g, '-')}`}
          
          >
            <button className="w-full cursor-pointer mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                    View Package
                  </button>
          </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Experiences Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Unforgettable Experiences</h2>
            <p className="text-lg text-gray-700">
              Discover the best of France through carefully curated experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Heritage",
                icon: HomeModernIcon,
                description: "Explore France's rich artistic legacy",
                highlights: ["Private Louvre Tours", "Palace of Versailles", "Loire Valley Châteaux"]
              },
              {
                title: "Gastronomic Journey",
                icon: GlobeAsiaAustraliaIcon,
                description: "Savor French culinary excellence",
                highlights: ["Michelin Dining", "Wine Tasting", "Cooking Classes"]
              },
              {
                title: "Lifestyle & Leisure",
                icon: UserGroupIcon,
                description: "Experience French art de vivre",
                highlights: ["Riviera Yachting", "Fashion Tours", "Spa Retreats"]
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <experience.icon className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckIcon className="w-5 h-5 text-pink-600 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">French Culinary Journey</h2>
            <p className="text-lg text-gray-700">
              Experience world-renowned French gastronomy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Haute Cuisine",
                desc: "Michelin-starred experiences",
                image: "france-Haute-Cuisine.jpg"
              },
              {
                title: "Wine Regions",
                desc: "Premier cru tastings",
                image: "france-wine-regions.jpg"
              },
              {
                title: "Culinary Arts",
                desc: "Expert cooking classes",
                image: "france-culinary-arts.jpg"
              }
            ].map((experience, index) => (
              <div key={index} className="group relative h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/hotels/france/food/${experience.image}`}
                  alt={experience.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{experience.title}</h3>
                  <p>{experience.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">2024 Culinary Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Signature Dishes</h4>
                <ul className="space-y-3">
                  {['Coq au Vin', 'Bouillabaisse', 'Beef Bourguignon', 'Tarte Tatin'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-pink-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Top Restaurants</h4>
                <ul className="space-y-3">
                  {['Guy Savoy', 'L\'Arpège', 'Le Louis XV'].map((venue, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <TrophyIcon className="w-5 h-5 text-pink-600" />
                      {venue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Guide Section */}
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
                <h3 className="text-xl font-semibold">Getting There</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: PaperAirplaneIcon, text: "Major airports in Paris, Nice, Lyon" },
                  { icon: GlobeAsiaAustraliaIcon, text: "High-speed TGV rail network" },
                  { icon: TicketIcon, text: "Efficient public transport" },
                  { icon: IdentificationIcon, text: "Visa-free for EU citizens" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <item.icon className="w-5 h-5 text-pink-600" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to Visit Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <CalendarIcon className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-semibold">When to Visit</h3>
              </div>
              <div className="space-y-4">
                {[
                  { season: "Spring (Apr-Jun)", desc: "Perfect weather, fewer crowds" },
                  { season: "Autumn (Sep-Nov)", desc: "Wine harvest, cultural events" }
                ].map((period, index) => (
                  <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <h4 className="font-semibold text-pink-900">{period.season}</h4>
                    <p className="text-sm mt-2 text-gray-700">{period.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Tips Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <BeakerIcon className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-semibold">Local Tips</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Language", desc: "Learn basic French phrases" },
                  { title: "Dining", desc: "Lunch 12-2, Dinner 7:30-10" },
                  { title: "Museums", desc: "Book tickets in advance" },
                  { title: "Transport", desc: "Get a Metro/RER pass" }
                ].map((tip, index) => (
                  <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <p className="font-semibold text-pink-800">{tip.title}</p>
                    <p className="text-sm mt-2 text-gray-700">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            France Travel <span className="text-pink-600">FAQs</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What's the best time to visit France?",
                answer: "Spring (April-June) and autumn (September-November) offer mild weather and fewer tourists. Summer is peak season with higher prices and crowds, while winter is ideal for skiing in the Alps."
              },
              {
                question: "Do I need to speak French?",
                answer: "While English is widely spoken in tourist areas, learning basic French phrases is appreciated and can enhance your experience, especially in smaller towns and rural areas."
              },
              {
                question: "How do I get around France?",
                answer: "France has excellent transportation options including the high-speed TGV train network, efficient local metros, and domestic flights. Rental cars are great for exploring countryside regions."
              },
              {
                question: "What about dining etiquette?",
                answer: "French dining has specific customs: lunch is typically 12-2pm, dinner 7:30-10pm. Reservations are recommended for restaurants. Service is included in the bill, but small tips are appreciated."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <PlusIcon className="w-6 h-6 group-open:hidden" />
                    <MinusIcon className="w-6 h-6 hidden group-open:block" />
                  </summary>
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white">
        <div className="container border-b border-gray-200 py-10 mx-auto px-4 text-center">
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Start Your French Journey</h2>
          <p className="text-xl text-gray-700 mb-8">Contact our France specialists to plan your perfect 2024 escape</p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>

      <Script id="schema-data" type="application/ld+json">
        {JSON.stringify([schemaData, packageSchema])}
      </Script>
    </main>
  );
}

   // Add this export to your page
   export const dynamic = 'force-static';
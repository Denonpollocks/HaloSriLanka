import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
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
import { singaporeHotels } from '@/data/hotels/Singapore/singaporeHotels';

export const metadata: Metadata = {
  title: 'Luxury Singapore Holidays 2024 | Urban & Cultural Experiences',
  description: 'Experience luxury Singapore holidays featuring world-class hotels, fine dining, and exclusive experiences. Book your 2024 Singapore escape today.',
  keywords: 'Singapore holidays, luxury hotels Singapore, Marina Bay Sands, Gardens by the Bay, Singapore dining',
  alternates: {
    canonical: 'https://haloholidays.com/destinations/singapore'
  },
  openGraph: {
    title: 'Luxury Singapore Holidays 2024 | Urban & Cultural Paradise',
    description: 'Discover Singapore\'s finest hotels, dining experiences, and cultural attractions with exclusive holiday packages.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/destinations/singapore/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Singapore Skyline with Marina Bay Sands'
      }
    ]
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "Singapore",
  "description": "Where modern luxury meets cultural heritage in a garden city",
  "url": "https://haloholidays.com/destinations/singapore",
  "touristType": ["Luxury", "Urban", "Culture", "Gastronomy"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2500"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "1299",
    "highPrice": "5999",
    "offerCount": "20"
  },
  "includesAttraction": [
    {
      "@type": "TouristAttraction",
      "name": "Marina Bay Sands",
      "description": "Iconic integrated resort featuring luxury shopping, dining, and infinity pool."
    },
    {
      "@type": "TouristAttraction",
      "name": "Gardens by the Bay",
      "description": "Futuristic nature park with Supertree Grove and climate-controlled conservatories."
    }
  ]
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Singapore Luxury Holiday Packages 2024",
  "description": "Premium Singapore packages including 5-star hotels and exclusive experiences",
  "brand": {
    "@type": "Brand",
    "name": "Halo Holidays"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "1299",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  }
};

export default function SingaporeDestination() {
 
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/singapore/singapore.jpg"
          alt="Singapore skyline with Marina Bay Sands"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <h1
            className={`text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent 
                        bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white animate-gradientMove`}
          >
            Singapore
          </h1>

          <p className="text-white text-xl max-w-2xl mt-4">
            Where tradition meets tomorrow in Asia's garden city
          </p>
        </div>
      </header>

      <Breadcrumbs />     

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Visit <span className="text-pink-600">Singapore</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              Experience a perfect blend of urban sophistication, cultural heritage, and natural wonders.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">Singapore Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "63", label: "Islands", icon: "🏝️" },
                      { number: "57m", label: "Yearly Visitors", icon: "✈️" },
                      { number: "27°C", label: "Avg. Temperature", icon: "☀️" },
                      { number: "50+", label: "Michelin Stars", icon: "⭐" }
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
                        title: "New Attractions",
                        desc: "Opening of Museum of Ice Cream and SkyHelix Sentosa",
                        icon: "🎨"
                      },
                      {
                        title: "Enhanced Connectivity",
                        desc: "New MRT lines and improved airport terminals",
                        icon: "🚇"
                      },
                      {
                        title: "Sustainable Tourism",
                        desc: "Green initiatives across major attractions",
                        icon: "🌱"
                      },
                      {
                        title: "Digital Integration",
                        desc: "Contactless payment and digital tourist passes",
                        icon: "📱"
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
              <div className="border rounded border-pink-500 text-gray-700 p-6 rounded-2xl mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UNESCO World Heritage Site</h3>
                    <p className="text-gray-700">Singapore Botanic Gardens — A tropical paradise showcasing centuries of horticultural heritage</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              2024's Premier <span className="text-pink-600">Luxury Hotels</span>
            </h2>
            <p className="text-gray-600">
              Discover our handpicked collection of Dubai's finest hotels and resorts
            </p>
          </div>

          {/* Featured Packages Grid - Now using data from hotels.ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {singaporeHotels.slice(0, 3).map((hotel, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={hotel.images[0]}
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
                    From AED {hotel.price.toLocaleString()}
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
                  
                  <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                    View Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Cultural Experiences */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Cultural Experiences</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    title: "Hawker Centers",
                    location: "Chinatown",
                    highlight: "UNESCO-listed street food"
                  },
                  {
                    title: "Heritage Tours",
                    location: "Little India",
                    highlight: "Cultural walking tours"
                  },
                  {
                    title: "Art Galleries",
                    location: "National Gallery",
                    highlight: "Southeast Asian art"
                  },
                  {
                    title: "Cultural Shows",
                    location: "Esplanade",
                    highlight: "Traditional performances"
                  }
                ].map((experience, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-pink-600 mb-2">{experience.title}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>📍 {experience.location}</p>
                      <p className="text-xs mt-2 text-gray-500">{experience.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Adventure Activities */}
            <div className="group mt-12">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <Image
                  src="/images/destinations/singapore/adventure-activities.jpg"
                  alt="Singapore adventure activities"
                  width={800}
                  height={500}
                  className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                  Urban Adventures
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  From thrilling theme parks to serene gardens, Singapore offers diverse urban adventures.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "City Adventures",
                      activities: [
                        "Night Safari",
                        "Universal Studios",
                        "ArtScience Museum"
                      ]
                    },
                    {
                      title: "Nature Activities",
                      activities: [
                        "Gardens by the Bay",
                        "TreeTop Walk",
                        "Southern Ridges"
                      ]
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-pink-600 mb-4">{category.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {category.activities.map((activity, idx) => (
                          <div key={idx} className="p-3 bg-pink-50 rounded-lg text-center">
                            <p className="text-sm text-gray-700">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
                  { icon: PaperAirplaneIcon, text: "Direct flights from London (13h)" },
                  { icon: GlobeAsiaAustraliaIcon, text: "Changi Airport - World's Best" },
                  { icon: TicketIcon, text: "Efficient airport transfers" },
                  { icon: IdentificationIcon, text: "Visa-free for UK citizens (90 days)" }
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
                  { season: "Peak Season (Jul-Sep)", desc: "Less rainfall, major events" },
                  { season: "Value Season (Feb-Apr)", desc: "Lower humidity, good rates" }
                ].map((period, index) => (
                  <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <h4 className="font-semibold text-pink-900">{period.season}</h4>
                    <p className="text-sm mt-2 text-gray-700">{period.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Tips Card */}
            <div className="md:col-span-2 lg:col-span-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold">Local Tips</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Transport", desc: "Get an EZ-Link card for public transport" },
                  { title: "Dining", desc: "Try hawker centers for authentic food" },
                  { title: "Culture", desc: "Respect local customs and cleanliness laws" }
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
            Singapore Travel <span className="text-pink-600">FAQs</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How many days do I need in Singapore?",
                answer: "We recommend 4-5 days to explore Singapore's main attractions, including Gardens by the Bay, Sentosa Island, and cultural districts."
              },
              {
                question: "What's the best way to get around Singapore?",
                answer: "The MRT (Mass Rapid Transit) system is efficient and extensive. Purchase a Tourist Pass for unlimited travel."
              },
              {
                question: "Is Singapore expensive to visit?",
                answer: "While Singapore can be expensive, there are options for all budgets. Hawker centers offer affordable dining, and public transport is reasonable."
              },
              {
                question: "Do I need to speak Chinese in Singapore?",
                answer: "No, English is widely spoken in Singapore and is the main language of business and education."
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

      <Script id="schema-data" type="application/ld+json">
        {JSON.stringify([schemaData, packageSchema])}
      </Script>
    </main>
  );
}

   // Add this export to your page
   export const dynamic = 'force-static';
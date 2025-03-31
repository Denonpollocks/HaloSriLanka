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

} from '@heroicons/react/24/outline';
import Breadcrumbs from '@/components/BreadCrumbs';
import { malaysiaHotels } from '@/data/hotels/Malaysia/malayasiaHotels';

export const metadata: Metadata = {
  title: 'Best Malaysia Holidays & All-Inclusive Packages 2025 | Explore Nature & Culture',
  description: 'Plan your perfect Malaysia holiday in 2024/25. Explore all-inclusive packages, vibrant cities, beaches, and rainforest adventures with exclusive offers.',
  keywords: 'Malaysia holidays, Malaysia all-inclusive, Malaysia holiday package, Malaysia resorts, Kuala Lumpur hotels, Langkawi vacation, Borneo travel',
  alternates: {
    canonical: 'https://haloholidays.com/destinations/malaysia'
  },
  openGraph: {
    title: 'Best Malaysia Holidays & All-Inclusive Packages 2024',
    description: 'Discover Malaysia\'s best resorts, city breaks, and cultural experiences with unbeatable packages and deals.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/destinations/malaysia/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Malaysia Travel Package – Petronas Towers and Tropical Beaches'
      }
    ]
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "Malaysia All-Inclusive Packages",
  "description": "Book Malaysia holiday packages with top-rated city tours, beach escapes, and rainforest adventures for 2024/25.",
  "url": "https://haloholidays.com/destinations/malaysia",
  "touristType": ["Couples", "Families", "Culture Lovers", "Adventure Seekers"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1200"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "999",
    "highPrice": "4599",
    "offerCount": "25"
  },
  "includesAttraction": [
    {
      "@type": "TouristAttraction",
      "name": "Langkawi Island Getaways",
      "description": "Enjoy pristine beaches, mangrove tours, and sunset cruises on Langkawi's tranquil coast."
    },
    {
      "@type": "TouristAttraction",
      "name": "Cultural Tours of Kuala Lumpur",
      "description": "Visit the Petronas Towers, Batu Caves, and bustling street markets in Malaysia's vibrant capital."
    }
  ]
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Malaysia Holiday Package 2024 - All Inclusive",
  "description": "Exclusive all-inclusive Malaysia holiday package featuring Kuala Lumpur city tours, beach resorts, and rainforest excursions.",
  "brand": {
    "@type": "Brand",
    "name": "Halo Holidays"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "999",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  }
};

export default function MalaysiaDestination() {

 
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/malaysia/malaysia.jpg"
          alt="Iconic Malaysia view with Petronas Towers and beaches"
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
            Malaysia
          </h1>

          <p className="text-white text-xl max-w-2xl mt-4">
            Where rich culture meets tropical adventure
          </p>
        </div>
      </header>

      <Breadcrumbs />   

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Visit <span className="text-pink-600">Malaysia</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              From tropical islands to bustling cities, Malaysia is a diverse paradise rich in culture, cuisine, and adventure.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">Malaysia Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "13", label: "States", icon: "🗺️" },
                      { number: "878m", label: "Tallest Towers (Petronas)", icon: "🏙️" },
                      { number: "30°C", label: "Avg. Temperature", icon: "☀️" },
                      { number: "1000+", label: "Islands to Explore", icon: "🏖️" }
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
                        title: "Eco-Friendly Resorts",
                        desc: "New sustainable lodges in Borneo and Langkawi",
                        icon: "🌿"
                      },
                      {
                        title: "Improved Connectivity",
                        desc: "Direct flights from UK cities to KL and Penang",
                        icon: "✈️"
                      },
                      {
                        title: "Island Hopping Tours",
                        desc: "Now operating across Langkawi and Redang",
                        icon: "🚤"
                      },
                      {
                        title: "New Cultural Trails",
                        desc: "Historical experiences in Malacca and Penang",
                        icon: "🏛️"
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
              <div className="border rounded border-blue-500 text-gray-700 p-6 rounded-2xl mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UNESCO World Heritage Sites</h3>
                    <p className="text-gray-700">Explore George Town & Melaka — celebrated for their multicultural heritage and architecture</p>
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
              2024's Premier <span className="text-pink-600">Luxury Hotels</span>
            </h2>
            <p className="text-gray-600">
              Discover our handpicked collection of Dubai's finest hotels and resorts
            </p>
          </div>

          {/* Featured Packages Grid - Now using data from hotels.ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {malaysiaHotels.slice(0, 3).map((hotel, index) => (
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

      {/* Experiences Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Unique Malaysian <span className="text-pink-600">Experiences</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            From cultural immersion to adventure activities, discover the best of Malaysia
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Cultural Experiences */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <Image
                  src="/images/destinations/malaysia/cultural-experiences.jpg"
                  alt="Malaysian cultural experiences"
                  width={800}
                  height={500}
                  className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                  Cultural Immersion
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Experience Malaysia's rich multicultural heritage through its traditions, festivals, and cuisine.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Heritage Tours",
                      location: "Penang",
                      highlight: "UNESCO sites & street art"
                    },
                    {
                      title: "Cooking Classes",
                      location: "Melaka",
                      highlight: "Traditional Nyonya cuisine"
                    },
                    {
                      title: "Cultural Shows",
                      location: "Sarawak",
                      highlight: "Indigenous performances"
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
            </div>

            {/* Adventure Activities */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <Image
                  src="/images/destinations/malaysia/adventure-activities.jpg"
                  alt="Malaysian adventure activities"
                  width={800}
                  height={500}
                  className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                  Adventure & Nature
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  From rainforest canopy walks to underwater exploration, Malaysia offers endless adventure opportunities.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "Rainforest Adventures",
                      activities: [
                        "Taman Negara treks",
                        "Canopy walkways",
                        "River safaris"
                      ]
                    },
                    {
                      title: "Marine Activities",
                      activities: [
                        "Sipadan diving",
                        "Island hopping",
                        "Snorkeling tours"
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
                  { icon: GlobeAsiaAustraliaIcon, text: "Major airports: KL, Penang, Kota Kinabalu" },
                  { icon: TicketIcon, text: "Domestic flights readily available" },
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
                  { season: "Peak Season (Jun-Aug)", desc: "Perfect for east coast beaches" },
                  { season: "Value Season (Mar-May)", desc: "Less crowds, great for cities" }
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
                  { title: "Transport", desc: "Use Grab app for reliable taxi service" },
                  { title: "Dining", desc: "Street food is safe and delicious" },
                  { title: "Culture", desc: "Dress modestly at religious sites" }
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
            Malaysia Travel <span className="text-pink-600">FAQs</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Is Malaysia suitable for family travel?",
                answer: "Yes, Malaysia is very family-friendly with numerous attractions, good infrastructure, and family-oriented resorts."
              },
              {
                question: "What's the best way to get around Malaysia?",
                answer: "Domestic flights for long distances, while trains, buses, and ride-hailing apps work well for city travel."
              },
              {
                question: "Do I need to speak Malay to visit?",
                answer: "No, English is widely spoken in tourist areas and major cities. Basic Malay phrases are appreciated but not necessary."
              },
              {
                question: "What's the currency and payment situation?",
                answer: "Malaysian Ringgit (MYR) is the currency. Cards are widely accepted in cities, but carry cash for markets and rural areas."
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
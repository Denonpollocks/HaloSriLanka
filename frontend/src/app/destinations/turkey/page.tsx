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

export const metadata: Metadata = {
  title: 'Luxury Turkey Holidays 2024 | Cultural & Historical Experiences',
  description: 'Experience luxury Turkey holidays featuring ancient wonders, Mediterranean beaches, and exclusive experiences. Book your 2024 Turkish adventure today.',
  keywords: 'Turkey holidays, luxury Turkish hotels, Istanbul, Cappadocia, Turkish riviera, Bodrum, Turkish culture',
  alternates: {
    canonical: 'https://haloholidays.com/destinations/turkey'
  },
  openGraph: {
    title: 'Luxury Turkey Holidays 2024 | Cultural & Beach Paradise',
    description: 'Discover Turkey\'s finest hotels, cultural experiences, and coastal adventures with exclusive holiday packages.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/destinations/turkey/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Turkish Resort and Historical Sites'
      }
    ]
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "Turkey",
  "description": "Where East meets West in a tapestry of history and luxury",
  "url": "https://haloholidays.com/destinations/turkey",
  "touristType": ["Luxury", "Culture", "History", "Beach"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1800"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "799",
    "highPrice": "3999",
    "offerCount": "40"
  },
  "includesAttraction": [
    {
      "@type": "TouristAttraction",
      "name": "Luxury Beach Resorts",
      "description": "Experience world-class hospitality at Turkey's finest coastal resorts."
    },
    {
      "@type": "TouristAttraction",
      "name": "Historical Wonders",
      "description": "Explore ancient ruins, Ottoman palaces, and UNESCO World Heritage sites."
    }
  ]
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Turkey Luxury Holiday Packages 2024",
  "description": "Premium Turkey holiday packages including 5-star hotels and exclusive experiences",
  "brand": {
    "@type": "Brand",
    "name": "Halo Holidays"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "799",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  }
};

export default function TurkeyDestination() {
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/turkey/turkey.jpg"
          alt="Luxury Turkish Resort with Historical Backdrop"
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
            Turkey
          </h1>

          <p className="text-white text-xl max-w-2xl mt-4">
            Where ancient civilizations meet modern luxury
          </p>
        </div>
      </header>
      <Breadcrumbs />   
      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Visit <span className="text-pink-600">Turkey</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              Experience the perfect blend of ancient history, stunning coastlines, and world-renowned hospitality.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">Turkey Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "21", label: "UNESCO Sites", icon: "🏛️" },
                      { number: "8,333", label: "km Coastline", icon: "🏖️" },
                      { number: "25°C", label: "Avg. Temperature", icon: "☀️" },
                      { number: "82", label: "Provinces", icon: "🗺️" }
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
                        title: "New Luxury Hotels",
                        desc: "Opening of world-class properties in Istanbul and Bodrum",
                        icon: "🏨"
                      },
                      {
                        title: "Enhanced Connectivity",
                        desc: "New flight routes from major cities",
                        icon: "✈️"
                      },
                      {
                        title: "Cultural Initiatives",
                        desc: "New museum openings and restoration projects",
                        icon: "🏺"
                      },
                      {
                        title: "Digital Integration",
                        desc: "E-visa and digital tourist services",
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
                    <h3 className="text-xl font-semibold mb-2">UNESCO World Heritage Sites</h3>
                    <p className="text-gray-700">Including Historic Areas of Istanbul, Cappadocia, and Ancient Ephesus</p>
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
        Discover our handpicked collection of Turkey's finest hotels, from historic palaces to coastal retreats
      </p>
    </div>

    {/* Featured Packages Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {/* Four Seasons Bosphorus */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="/images/destinations/turkey/four-seasons-bosphorus.jpg"
            alt="Four Seasons Bosphorus"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-medium">Istanbul</p>
            <h3 className="text-2xl font-bold">Four Seasons Bosphorus</h3>
          </div>
          <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
            From £899
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">★</span>
            <span className="font-medium">4.9</span>
            <span className="text-gray-500 text-sm">(1,850 reviews)</span>
          </div>
          
          <div className="space-y-3">
            {['Palace Building', 'Bosphorus Views', 'Luxury Spa', 'Turkish Hammam'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
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

      {/* Mandarin Oriental Bodrum */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="/images/destinations/turkey/mandarin-oriental-bodrum.jpg"
            alt="Mandarin Oriental Bodrum"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-medium">Bodrum</p>
            <h3 className="text-2xl font-bold">Mandarin Oriental</h3>
          </div>
          <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
            From £1,299
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">★</span>
            <span className="font-medium">4.8</span>
            <span className="text-gray-500 text-sm">(1,450 reviews)</span>
          </div>
          
          <div className="space-y-3">
            {['Private Beach', 'Infinity Pools', 'Gourmet Dining', 'Water Sports'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
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

      {/* Museum Hotel Cappadocia */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="/images/destinations/turkey/museum-hotel-cappadocia.jpg"
            alt="Museum Hotel Cappadocia"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-medium">Cappadocia</p>
            <h3 className="text-2xl font-bold">Museum Hotel</h3>
          </div>
          <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
            From £699
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">★</span>
            <span className="font-medium">4.9</span>
            <span className="text-gray-500 text-sm">(1,250 reviews)</span>
          </div>
          
          <div className="space-y-3">
            {['Cave Suites', 'Valley Views', 'Historic Setting', 'Wine Cellar'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
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
    </div>

    {/* Destination Guide Section */}
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Your Guide to <span className="text-pink-600">Turkey's Regions</span>
      </h3>
      
      <p className="text-gray-700 mb-8 text-center">
        From the Mediterranean coast to the peaks of Anatolia, discover Turkey's diverse landscapes
      </p>
    </div>
  </div>
</section>


      {/* Experiences Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Unforgettable Experiences</h2>
            <p className="text-lg text-gray-700">
              Discover the best of Turkey through carefully curated experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Historical Wonders",
                icon: HomeModernIcon,
                description: "Explore ancient civilizations and Ottoman splendor",
                highlights: ["Hagia Sophia", "Ephesus", "Topkapi Palace"]
              },
              {
                title: "Coastal Paradise",
                icon: GlobeAsiaAustraliaIcon,
                description: "Experience the Turkish Riviera's crystal waters",
                highlights: ["Blue Cruise", "Hidden Bays", "Beach Clubs"]
              },
              {
                title: "Cultural Journey",
                icon: UserGroupIcon,
                description: "Immerse yourself in Turkish traditions",
                highlights: ["Bazaar Tours", "Cooking Classes", "Art Workshops"]
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
            <h2 className="text-4xl font-bold mb-4">Turkish Culinary Journey</h2>
            <p className="text-lg text-gray-700">
              Experience the rich flavors of Turkish cuisine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Street Food Tours",
                desc: "Explore vibrant bazaars and local markets",
                image: "street-food.jpg"
              },
              {
                title: "Fine Dining",
                desc: "Modern Turkish gastronomy",
                image: "fine-dining.jpg"
              },
              {
                title: "Cooking Classes",
                desc: "Learn authentic Turkish recipes",
                image: "cooking-class.jpg"
              }
            ].map((experience, index) => (
              <div key={index} className="group relative h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/destinations/turkey/${experience.image}`}
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
                <h4 className="text-lg font-semibold mb-4">Must-Try Dishes</h4>
                <ul className="space-y-3">
                  {['Kebabs', 'Meze Selection', 'Pide', 'Baklava'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-pink-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Award-Winning Venues</h4>
                <ul className="space-y-3">
                  {['Mikla Istanbul', 'Turk Fatih Tutak', 'Nicole Restaurant'].map((venue, i) => (
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
                  { icon: PaperAirplaneIcon, text: "Direct flights from London (4h)" },
                  { icon: GlobeAsiaAustraliaIcon, text: "Multiple international airports" },
                  { icon: TicketIcon, text: "Efficient domestic flights" },
                  { icon: IdentificationIcon, text: "E-visa system" }
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
                  { season: "Peak Season (Jun-Aug)", desc: "Perfect for coastal areas" },
                  { season: "Shoulder Season (Apr-May, Sep-Oct)", desc: "Ideal weather, fewer crowds" }
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
      { title: "Currency", desc: "Use a mix of cards and Turkish Lira" },
      { title: "Transport", desc: "Metro in cities, flights between regions" },
      { title: "Dining", desc: "Try local meyhanes for authentic experience" },
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
Turkey Travel <span className="text-pink-600">FAQs</span>
</h2>

<div className="space-y-6">
{[
  {
    question: "What's the best time to visit Turkey?",
    answer: "Spring (April-May) and Autumn (September-October) offer ideal temperatures and fewer crowds. Summer (June-August) is perfect for coastal areas but can be hot inland. Winter (November-March) is cooler with occasional rain but great for city exploring and winter sports."
  },
  {
    question: "Do I need a visa to visit Turkey?",
    answer: "Most visitors need an e-visa, which can be easily obtained online before travel. Some nationalities are exempt for short stays. Check the official Turkish e-visa website for the latest requirements."
  },
  {
    question: "Is Turkey safe for tourists?",
    answer: "Turkey is generally very safe for tourists, with millions visiting annually. As with any destination, take normal precautions, particularly in busy areas. Tourist areas are well-policed and locals are known for their hospitality."
  },
  {
    question: "What's the best way to get around Turkey?",
    answer: "Turkey has excellent transport infrastructure. Domestic flights connect major cities, high-speed trains link key destinations, and local transport is efficient. In cities, use the metro systems and official taxis. For coastal areas, gulets (traditional boats) offer a unique way to explore."
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
<h2 className="text-3xl text-pink-600 font-bold mb-6">Start Your Turkish Adventure</h2>
<p className="text-xl text-gray-700 mb-8">Contact our Turkey specialists to plan your perfect 2024 escape</p>
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
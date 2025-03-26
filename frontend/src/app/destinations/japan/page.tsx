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
  title: 'Luxury Japan Tours 2024 | Traditional & Modern Experiences',
  description: 'Experience luxury Japan tours featuring ancient temples, modern cities, and exclusive cultural experiences. Book your 2024 Japanese journey today.',
  keywords: 'Japan tours, luxury Japan travel, Tokyo, Kyoto, Mount Fuji, Japanese culture, ryokans',
  alternates: {
    canonical: 'https://haloholidays.com/destinations/japan'
  },
  openGraph: {
    title: 'Luxury Japan Tours 2024 | Traditional & Modern Paradise',
    description: 'Discover Japan\'s finest hotels, cultural experiences, and urban adventures with exclusive holiday packages.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/destinations/japan/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Japanese Ryokan and Modern City Views'
      }
    ]
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelDestination",
  "name": "Japan",
  "description": "Where tradition harmoniously blends with innovation",
  "url": "https://haloholidays.com/destinations/japan",
  "touristType": ["Luxury", "Culture", "Gastronomy", "Urban"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2100"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "2499",
    "highPrice": "8999",
    "offerCount": "35"
  }
};

const packageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Japan Luxury Tour Packages 2024",
  "description": "Premium Japan travel packages including luxury ryokans and exclusive experiences",
  "brand": {
    "@type": "Brand",
    "name": "Halo Holidays"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "2499",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01"
  }
};

export default function JapanDestination() {
  return (
    <main className="min-h-screen">
      <header className="relative h-[80vh] flex items-center">
        <Image
          src="/images/destinations/japan/japan.jpg"
          alt="Modern Tokyo Skyline with Mount Fuji"
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
            Japan
          </h1>

          <p className="text-white text-xl max-w-2xl mt-4">
            Where ancient traditions meet modern innovation
          </p>
        </div>
      </header>
      <Breadcrumbs />   
      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Visit <span className="text-pink-600">Japan</span> in 2024?
            </h2>
            <p className="text-lg text-gray-700">
              Experience the perfect harmony of ancient traditions and cutting-edge technology
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Stats Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-6 text-pink-600">Japan Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "23", label: "UNESCO Sites", icon: "🏯" },
                      { number: "6,852", label: "Islands", icon: "🗾" },
                      { number: "21°C", label: "Avg. Temperature", icon: "🌸" },
                      { number: "47", label: "Prefectures", icon: "🗺️" }
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
                        desc: "Opening of world-class properties in Tokyo and Kyoto",
                        icon: "🏨"
                      },
                      {
                        title: "Enhanced Rail Network",
                        desc: "New Shinkansen routes and services",
                        icon: "🚅"
                      },
                      {
                        title: "Cultural Events",
                        desc: "Special exhibitions and festivals",
                        icon: "🎎"
                      },
                      {
                        title: "Digital Integration",
                        desc: "Improved tourist apps and services",
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
                    <p className="text-gray-700">Including Mount Fuji, Historic Kyoto, and Ancient Nara</p>
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
              Discover our handpicked collection of Japan's finest hotels and traditional ryokans
            </p>
          </div>

          {/* Featured Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Aman Tokyo */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/images/destinations/japan/aman-tokyo.jpg"
                  alt="Aman Tokyo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Tokyo</p>
                  <h3 className="text-2xl font-bold">Aman Tokyo</h3>
                </div>
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                  From £1,299
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-500 text-sm">(1,250 reviews)</span>
                </div>
                
                <div className="space-y-3">
                  {['Urban Sanctuary', 'Traditional Spa', 'City Views', 'Fine Dining'].map((feature, index) => (
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

            {/* Hoshinoya Kyoto */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/images/destinations/japan/hoshinoya-kyoto.jpg"
                  alt="Hoshinoya Kyoto"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Kyoto</p>
                  <h3 className="text-2xl font-bold">Hoshinoya Kyoto</h3>
                </div>
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                  From £899
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500 text-sm">(980 reviews)</span>
                </div>
                
                <div className="space-y-3">
                  {['Riverside Location', 'Traditional Ryokan', 'Tea Ceremony', 'Private Gardens'].map((feature, index) => (
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

            {/* Park Hyatt Tokyo */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/images/destinations/japan/park-hyatt-tokyo.jpg"
                  alt="Park Hyatt Tokyo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Tokyo</p>
                  <h3 className="text-2xl font-bold">Park Hyatt Tokyo</h3>
                </div>
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                  From £799
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-500 text-sm">(1,450 reviews)</span>
                </div>
                
                <div className="space-y-3">
                  {['Iconic Views', 'Luxury Spa', 'World-class Dining', 'Pool & Fitness'].map((feature, index) => (
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
              Your Guide to <span className="text-pink-600">Japan's Regions</span>
            </h3>
            
            <p className="text-gray-700 mb-8 text-center">
              From bustling cities to serene countryside, discover Japan's diverse regions
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
              Discover the best of Japan through carefully curated experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Immersion",
                icon: HomeModernIcon,
                description: "Experience authentic Japanese traditions",
                highlights: ["Tea Ceremonies", "Zen Meditation", "Kimono Wearing"]
              },
              {
                title: "Modern Japan",
                icon: GlobeAsiaAustraliaIcon,
                description: "Explore cutting-edge technology and pop culture",
                highlights: ["Robot Restaurants", "Anime Districts", "Gaming Centers"]
              },
              {
                title: "Natural Wonders",
                icon: UserGroupIcon,
                description: "Connect with Japan's stunning landscapes",
                highlights: ["Mount Fuji", "Cherry Blossoms", "Hot Springs"]
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
            <h2 className="text-4xl font-bold mb-4">Japanese Culinary Journey</h2>
            <p className="text-lg text-gray-700">
              Experience the artistry and precision of Japanese cuisine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Fine Dining",
                desc: "Michelin-starred experiences",
                image: "Fine-Dining-In-Japan.jpg"
              },
              {
                title: "Street Food",
                desc: "Local izakaya and markets",
                image: "Japan-Street-Food.jpg"
              },
              {
                title: "Cooking Classes",
                desc: "Master Japanese techniques",
                image: "Japan-cooking-classes.jpg"
              }
            ].map((experience, index) => (
              <div key={index} className="group relative h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/destinations/japan/${experience.image}`}
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
                  {['Omakase Sushi', 'Wagyu Beef', 'Ramen', 'Kaiseki'].map((item, i) => (
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
                  {['Sukiyabashi Jiro', 'Narisawa', 'Den'].map((venue, i) => (
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
                  { icon: PaperAirplaneIcon, text: "Direct flights from London (11h 30m)" },
                  { icon: GlobeAsiaAustraliaIcon, text: "Major airports in Tokyo, Osaka" },
                  { icon: TicketIcon, text: "Efficient rail network" },
                  { icon: IdentificationIcon, text: "Visa-free for many nationalities" }
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
                  { season: "Spring (Mar-May)", desc: "Cherry blossom season" },
                  { season: "Autumn (Sep-Nov)", desc: "Pleasant weather, fall colors" }
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
                  { title: "Transport", desc: "Get a JR Pass for train travel" },
                  { title: "Etiquette", desc: "Learn basic customs and greetings" },
                  { title: "Payment", desc: "Carry cash, not all places take cards" },
                  { title: "Language", desc: "Download translation apps" }
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
            Japan Travel <span className="text-pink-600">FAQs</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What's the best time to visit Japan?",
                answer: "Spring (March-May) for cherry blossoms and autumn (September-November) for fall colors are the most popular seasons. Summer can be hot and humid, while winter offers great skiing opportunities and illumination festivals."
              },
              {
                question: "Do I need a visa to visit Japan?",
                answer: "Many nationalities can enter Japan visa-free for tourism for up to 90 days. Check the latest requirements through the Japanese embassy in your country."
              },
              {
                question: "Is Japan expensive to visit?",
                answer: "While Japan can be expensive, there are options for all budgets. Major expenses include accommodation and transportation, but food can be relatively affordable with many reasonable dining options."
              },
              {
                question: "How do I get around Japan?",
                answer: "Japan's public transportation is excellent. The JR Pass offers unlimited travel on JR trains, including most Shinkansen (bullet trains). Major cities have efficient metro systems, and taxis are readily available but expensive."
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
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Start Your Japanese Journey</h2>
          <p className="text-xl text-gray-700 mb-8">Contact our Japan specialists to plan your perfect 2024 escape</p>
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
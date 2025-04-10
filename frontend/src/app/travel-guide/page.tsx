import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  MapIcon,
  CalendarIcon,
  // GlobeAltIcon,
  ShieldCheckIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Expert Travel Guides & Tips 2024 | Comprehensive Travel Resources',
  description: 'Access expert travel guides, destination insights, and professional travel tips. Written by experienced travel specialists with years of industry expertise.',
  keywords: 'travel guide, expert travel tips, destination guides, travel planning, travel advice 2024',
  openGraph: {
    title: 'Expert Travel Guides & Tips 2024',
    description: 'Comprehensive travel resources and destination guides by expert travel specialists',
    images: ['/images/travel-guide-og.jpg'],
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": "Comprehensive Travel Guide 2024",
  "description": "Expert travel guides and tips for popular destinations",
  "publisher": {
    "@type": "Organization",
    "name": "Your Company Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  },
  "author": {
    "@type": "Person",
    "name": "Travel Expert Team",
    "jobTitle": "Senior Travel Specialists"
  },
  "about": {
    "@type": "Thing",
    "name": "Travel Planning",
    "description": "Comprehensive travel planning resources and destination guides"
  }
};

const destinationGuides = [
  {
    title: "Maldives Travel Guide",
    description: "Luxury resorts, water villas, and island experiences",
    image: "/images/guides/maldives.jpg",
    expertName: "Sarah Williams",
    experience: "12 years",
    slug: "maldives"
  },
  {
    title: "Dubai City Guide",
    description: "Modern attractions, desert safaris, and shopping",
    image: "/images/guides/dubai.jpg",
    expertName: "Mohammed Ahmed",
    experience: "10 years",
    slug: "dubai"
  }
  // Add more destinations
];

export default function TravelGuide() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center">
        <Image
          src="/images/travel-guide-hero.jpg"
          alt="Travel Guide Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
            Expert Travel Guides & Resources
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Comprehensive destination guides and travel tips from experienced specialists
          </p>
        </div>
      </header>

      {/* Expert Guides Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Destination <span className="text-pink-600">Guides</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationGuides.map((guide, index) => (
              <Link
                href={`/travel-guide/${guide.slug}`}
                key={index}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>By {guide.expertName}</span>
                      <span className="mx-2">•</span>
                      <span>{guide.experience} experience</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Planning Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Travel Planning <span className="text-pink-600">Essentials</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Trip Planning",
                icon: CalendarIcon,
                items: [
                  "Research peak seasons",
                  "Check visa requirements",
                  "Book accommodations early",
                  "Plan local transportation"
                ]
              },
              {
                title: "Budget Management",
                icon: MapIcon,
                items: [
                  "Set daily budgets",
                  "Account for hidden costs",
                  "Emergency fund planning",
                  "Currency exchange tips"
                ]
              },
              {
                title: "Safety Measures",
                icon: ShieldCheckIcon,
                items: [
                  "Travel insurance coverage",
                  "Emergency contacts list",
                  "Local embassy details",
                  "Health precautions"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckIcon className="w-5 h-5 text-pink-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Expert Travel <span className="text-pink-600">Tips</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Cultural Awareness",
                content: "Understanding local customs and traditions enhances your travel experience and shows respect for the destinations culture.",
                author: "Sarah Williams",
                experience: "12 years as Cultural Tourism Specialist"
              },
              {
                title: "Sustainable Travel",
                content: "Choose eco-friendly accommodations and minimize your environmental impact while supporting local communities.",
                author: "Michael Chen",
                experience: "10 years as Sustainable Tourism Expert"
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                <p className="text-gray-600 mb-6">{tip.content}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="font-medium">{tip.author}</span>
                  <span>•</span>
                  <span>{tip.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Following pattern from Maldives page */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Travel <span className="text-pink-600">FAQs</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "When is the best time to book international flights?",
                answer: "Generally, booking 3-6 months ahead offers the best prices. For peak seasons, book 6-8 months in advance."
              },
              {
                question: "How can I find authentic local experiences?",
                answer: "Research local guides, read community forums, and use apps that connect travelers with local hosts."
              },
              {
                question: "What travel insurance should I get?",
                answer: "Look for comprehensive coverage including medical, cancellation, and emergency evacuation. Compare policies from multiple providers."
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

      {/* CTA Section - Following pattern from Maldives page */}
      <section className="py-16">
        <div className="container border-b border-gray-200 py-10 mx-auto px-4 text-center">
          <h2 className="text-3xl text-pink-600 font-bold mb-6">Start Your Journey</h2>
          <p className="text-xl text-gray-700 mb-8">Connect with our travel specialists to plan your perfect trip</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  );
} 
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  PresentationChartBarIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'MICE Events & Conference Management Services | Corporate Solutions',
  description: 'Professional MICE event management services including meetings, incentives, conferences, and exhibitions. Expert planning and execution for corporate events.',
  keywords: 'MICE events, corporate events, conference management, exhibition planning, business meetings, corporate incentives'
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MICE Events Management",
  "provider": {
    "@type": "Organization",
    "name": "Your Company Name"
  },
  "description": "Professional MICE event management services for corporate clients",
  "serviceType": "Corporate Event Management",
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "MICE Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conference Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exhibition Planning"
        }
      }
    ]
  }
};

export default function MICEEvents() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/corporate-services/Mice-Events.png"
          alt="MICE Events and Conference Management"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            MICE Events <span className="text-pink-600">Management</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Comprehensive solutions for Meetings, Incentives, Conferences, and Exhibitions
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Professional MICE <span className="text-pink-600">Event Solutions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Delivering exceptional corporate experiences through meticulous planning, innovative solutions, and flawless execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Corporate Conferences",
                desc: "Large-scale events with comprehensive planning",
                icon: PresentationChartBarIcon
              },
              {
                title: "Trade Shows & Exhibitions",
                desc: "Custom booth designs and exhibitor management",
                icon: BuildingOffice2Icon
              },
              {
                title: "Incentive Programs",
                desc: "Motivational events and reward ceremonies",
                icon: UserGroupIcon
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <item.icon className="w-8 h-8 text-pink-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/corporate-services/event-venue-management.png"
                alt="MICE Event Management Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Comprehensive Solutions</h3>
                <p className="text-lg">End-to-end event management services</p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Venue Selection",
                  content: "Global network of premium conference venues and exhibition centers"
                },
                {
                  title: "Technical Production",
                  content: "State-of-the-art AV equipment and virtual event capabilities"
                },
                {
                  title: "Attendee Management",
                  content: "Registration systems and on-site coordination"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-pink-600">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Plan Your Next Corporate Event?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our MICE specialists to discuss your event requirements and discover how we can help create an exceptional experience.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Get in Touch
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
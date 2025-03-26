import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  GlobeAltIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Business Travel Management Services | Corporate Solutions',
  description: 'Streamlined business travel management with 24/7 support, expense tracking, and customized corporate travel solutions for your team.',
  keywords: 'business travel, corporate travel management, travel expense management, business travel support, corporate travel solutions'
};

// Schema data remains the same as in the original file
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Travel Management",
  // ... rest of the schema
};

export default function BusinessTravel() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - keeping the same structure */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/corporate/business-travel.jpg"
          alt="Business Travel Management"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Business Travel <span className="text-pink-600">Management</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Streamlined travel solutions with 24/7 support for your corporate team
          </p>
        </div>
      </section>

      {/* Main Services Section - following MICE Events structure */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Professional Travel <span className="text-pink-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Delivering seamless corporate travel experiences through innovative technology and personalized support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "24/7 Travel Support",
                desc: "Round-the-clock assistance for your business travelers",
                icon: ClockIcon
              },
              {
                title: "Expense Management",
                desc: "Automated tracking and reporting solutions",
                icon: CreditCardIcon
              },
              {
                title: "Mobile Solutions",
                desc: "Advanced booking and travel management apps",
                icon: DevicePhoneMobileIcon
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

      {/* Split Section with Image - matching MICE Events layout */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/corporate/travel-management.jpg"
                alt="Business Travel Management Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Travel Management</h3>
                <p className="text-lg">End-to-end corporate travel solutions</p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Policy Compliance",
                  content: "Custom travel policies with automated compliance monitoring"
                },
                {
                  title: "Risk Management",
                  content: "Real-time tracking and emergency support services"
                },
                {
                  title: "Reporting & Analytics",
                  content: "Comprehensive travel spend and behavior analytics"
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
            Transform Your Business Travel Program
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our travel specialists to discover how we can streamline your corporate travel management.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Contact Our Team
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
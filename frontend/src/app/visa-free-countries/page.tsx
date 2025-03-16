import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import VisaFreeCountryCard from '@/components/VisaFreeCountryCard';
import { CheckCircleIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Visa Free Countries for Sri Lankan Passport | 2024 Complete Guide',
  description: 'Discover 50+ countries without visa requirements for Sri Lankan passport holders. Complete 2024 guide to visa-free travel, free visa on arrival destinations.',
  keywords: 'visa free countries, countries without visa for sri lankan passport, free visa, Sri Lankan passport visa free, visa free travel',
  openGraph: {
    title: 'Visa Free Countries for Sri Lankan Passport | 2024 Complete Guide',
    description: 'Discover 50+ countries without visa requirements for Sri Lankan passport holders. Complete 2024 guide to visa-free travel.',
    images: ['/images/visa-free/hero.jpg'],
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": "Visa Free Countries for Sri Lankan Passport Holders",
  "description": "Complete guide to countries offering visa-free entry and visa on arrival for Sri Lankan passport holders",
  "datePublished": "2024-03-20",
  "dateModified": "2024-03-20",
  "publisher": {
    "@type": "Organization",
    "name": "Your Travel Company",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which countries can Sri Lankans visit without a visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sri Lankan passport holders can visit several countries without a visa, including Singapore (30 days), Nepal (30 days), and Maldives (30 days)."
        }
      },
      // Add more FAQ items
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Visa Free Travel",
    "description": "Information about countries that allow visa-free entry for Sri Lankan passport holders"
  }
};

const visaFreeCountries = [
  {
    name: 'Singapore',
    stayPeriod: '30 days',
    flag: '🇸🇬',
    requirements: [
      'Valid passport with 6 months validity',
      'Return ticket',
      'Sufficient funds proof',
    ]
  },
  {
    name: 'Nepal',
    stayPeriod: '30 days',
    flag: '🇳🇵',
    requirements: [
      'Valid passport',
      'Tourist visa on arrival',
      'Two passport photos',
    ]
  },
  // Add more countries...
];

export default function VisaFreeCountries() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative h-[50vh] md:h-[70vh] flex items-center">
          <Image
            src="/images/visa-free/hero.jpg"
            alt="Visa Free Travel Destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-7xl font-medium text-white mb-4 md:mb-6">
              Visa Free Countries for Sri Lankan Passport
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mb-6 md:mb-8">
              Complete guide to countries offering visa-free entry and visa on arrival
            </p>
          </div>
        </header>

        {/* Quick Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                <div className="text-gray-600">Visa-Free Countries</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-pink-600 mb-2">30+</div>
                <div className="text-gray-600">Visa on Arrival</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-pink-600 mb-2">14-90</div>
                <div className="text-gray-600">Days Stay Period</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Free Visa Countries for Sri Lankan Passport Holders in 2024
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                  Sri Lankan passport holders can travel to numerous destinations without the hassle of obtaining a visa beforehand. Here's your comprehensive guide to visa-free travel and countries offering visa on arrival facilities.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">
                  Popular Visa-Free Destinations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {visaFreeCountries.map((country, index) => (
                    <VisaFreeCountryCard key={index} {...country} />
                  ))}
                </div>

                <h3 className="text-2xl font-bold mt-12 mb-6">
                  Countries with Visa on Arrival for Sri Lankans
                </h3>
                <p className="mb-6">
                  Several countries welcome Sri Lankan travelers with a simple visa on arrival process, making your journey smoother and more convenient.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-12">
                  <h4 className="text-xl font-semibold mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-pink-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No pre-travel visa application required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-pink-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Quick processing at arrival airport</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-pink-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cost-effective travel options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Planning Your Visa-Free Trip?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our travel experts can help you plan the perfect visa-free holiday
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0">
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Visa-Free Destinations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
              Popular Visa-Free <span className="text-pink-600">Destinations</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {visaFreeCountries.map((country, index) => (
                <VisaFreeCountryCard key={index} {...country} />
              ))}
            </div>
          </div>
        </section>

        {/* Travel Requirements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Essential Travel <span className="text-pink-600">Requirements</span>
              </h2>
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <div className="grid md:grid-cols-2 gap-8">
                      {[
                        {
                          title: "General Requirements",
                          items: [
                            "Valid passport (minimum 6 months validity)",
                            "Return flight tickets",
                            "Hotel reservations",
                            "Travel insurance (recommended)",
                            "Sufficient funds proof"
                          ]
                        },
                        {
                          title: "Additional Documents",
                          items: [
                            "Bank statements (3 months)",
                            "Employment letter",
                            "Passport-size photographs",
                            "Vaccination records",
                            "Emergency contact information"
                          ]
                        }
                      ].map((section, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                          <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                          <ul className="space-y-3">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-pink-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked <span className="text-pink-600">Questions</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Which countries can Sri Lankans visit without a visa?",
                    answer: "Sri Lankan passport holders can visit several countries without obtaining a visa beforehand, including Singapore (30 days), Nepal (30 days), Maldives (30 days), and more. Some countries offer visa on arrival facilities."
                  },
                  {
                    question: "What is the difference between visa-free and visa on arrival?",
                    answer: "Visa-free entry means you can enter the country without any visa formalities. Visa on arrival requires you to obtain a visa at the port of entry, usually involving a fee and basic documentation."
                  },
                  {
                    question: "How long can I stay in visa-free countries?",
                    answer: "The duration varies by country, typically ranging from 14 to 90 days. It's crucial to check the specific stay period for each destination before traveling."
                  },
                  // Add more FAQs...
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Essential Travel <span className="text-pink-600">Tips</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pre-Travel Checklist",
                  icon: CheckCircleIcon,
                  tips: [
                    "Check passport validity",
                    "Research entry requirements",
                    "Book return flights",
                    "Arrange travel insurance",
                    "Print essential documents"
                  ]
                },
                {
                  title: "Financial Planning",
                  icon: CurrencyDollarIcon,
                  tips: [
                    "Carry sufficient funds",
                    "Inform bank of travel",
                    "Keep emergency cash",
                    "Check currency restrictions",
                    "Save proof of finances"
                  ]
                },
                {
                  title: "Safety Measures",
                  icon: ShieldCheckIcon,
                  tips: [
                    "Register with embassy",
                    "Save emergency contacts",
                    "Keep document copies",
                    "Research local customs",
                    "Check travel advisories"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-pink-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Additional <span className="text-pink-600">Travel Services</span>
              </h2>
              <p className="text-lg text-gray-700">
                Comprehensive travel solutions to complement your visa-free journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Visa Processing",
                  description: "Expert assistance for countries requiring visas",
                  icon: "🛂",
                  href: "/visa-services"
                },
                {
                  title: "Travel Insurance",
                  description: "Comprehensive coverage for worry-free travel",
                  icon: "🛡️",
                  href: "/travel-insurance"
                },
                {
                  title: "Flight Bookings",
                  description: "Best deals on international flights",
                  icon: "✈️",
                  href: "/flights"
                }
              ].map((service, index) => (
                <Link 
                  href={service.href}
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your <span className="text-pink-400">Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get expert advice on visa-free travel and comprehensive trip planning
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact"
                  className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center gap-2"
                >
                  Book Free Consultation
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/visa-services"
                  className="text-pink-400 hover:text-pink-300 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-400 hover:border-pink-300 transition-colors inline-flex items-center gap-2"
                >
                  Explore Visa Services
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 
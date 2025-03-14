import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Travel Solutions | Halo Holidays',
  description: 'Specialized corporate travel management services, MICE events, and business travel packages with premium support and customized solutions.',
  keywords: 'corporate travel, business travel, MICE events, corporate events Sri Lanka, business travel management',
};

const corporateServices = [
  {
    title: 'MICE Events',
    description: 'Meetings, Incentives, Conferences, and Exhibitions tailored to your business needs',
    icon: '/icons/mice.svg'
  },
  {
    title: 'Business Travel',
    description: 'Streamlined booking process with 24/7 travel support for your team',
    icon: '/icons/business.svg'
  },
  {
    title: 'Corporate Retreats',
    description: 'Team building and corporate wellness programs in premium locations',
    icon: '/icons/retreat.svg'
  }
];

export default function Corporate() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/corporate/hero.jpg"
          alt="Corporate Travel Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Corporate Travel <span className="text-pink-600">Solutions</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Elevate your business travel experience with our premium corporate services and dedicated support team.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Corporate <span className="text-pink-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <div 
                key={index}
                className="p-6 border rounded-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Corporate Travel?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our corporate travel specialists to create a customized solution for your business.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
    </main>
  );
}
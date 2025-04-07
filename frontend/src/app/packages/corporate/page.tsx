import Image from 'next/image';
import type { Metadata } from 'next';
import Features from '@/components/Features';
import Breadcrumbs from '@/components/BreadCrumbs';

export const metadata: Metadata = {
  title: 'Corporate Travel Solutions | Halo Holidays',
  description: 'Specialized corporate travel management services, MICE events, and business travel packages with premium support and customized solutions.',
  keywords: 'corporate travel, business travel, MICE events, corporate events Sri Lanka, business travel management',
};

const corporateServices = [
  {
    title: 'MICE Events',
    description: 'Meetings, Incentives, Conferences, and Exhibitions tailored to your business needs',
    // icon: '/icons/mice.svg',
    link: '/corporate/mice-events'
  },
  {
    title: 'Business Travel',
    description: 'Streamlined booking process with 24/7 travel support for your team',
    // icon: '/icons/business.svg',
    link: '/corporate/business-travel'
  },
  {
    title: 'Corporate Retreats',
    description: 'Team building and corporate wellness programs in premium locations',
    // icon: '/icons/retreat.svg',
    link: '/corporate/corporate-retreats'
  }
];

const corporatePackages = [
  {
    title: "Executive Business Package",
    price: "From $999",
    features: [
      "Luxury Hotel Accommodation",
      "Private Airport Transfers",
      "24/7 Concierge Service",
      "Business Lounge Access",
      "Meeting Room Facilities"
    ],
    image: "/images/corporate-services/executive-package.jpg"
  },
  {
    title: "Team Retreat Package",
    price: "From $1499",
    features: [
      "Resort Accommodation",
      "Team Building Activities",
      "Wellness Programs",
      "Group Dining Experiences",
      "Adventure Excursions"
    ],
    image: "/images/corporate-services/team-retreat.jpg"
  },
  {
    title: "Conference Package",
    price: "From $2499",
    features: [
      "Conference Hall Rental",
      "AV Equipment Setup",
      "Catering Services",
      "Group Accommodation",
      "Event Management"
    ],
    image: "/images/corporate-services/conference-packages.jpg"
  }
];

export default function Corporate() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/corporate-services/Corporate-Travel.jpg"
          alt="Corporate Travel Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Corporate Travel <span className="text-pink-600">Solutions</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Elevate your business travel experience with our premium corporate services and dedicated support team.
          </p>
        </div>
      </section>
      <Breadcrumbs /> 

      {/* Why Choose Us Section */}
      <section className="">
      <div className="container mx-auto px-4">
       <Features features={corporateServices} />
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
              <a key={index} href={service.link}>
                <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                  {/* <Image
                    src={service.image}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="mb-4"
                  /> */}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Premium Corporate <span className="text-pink-600">Packages</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-pink-600 font-bold mb-4">{pkg.price}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-pink-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our <span className="text-pink-600">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Initial meeting to understand your requirements" },
              { step: "2", title: "Custom Solution", desc: "Tailored travel solution design" },
              { step: "3", title: "Implementation", desc: "Seamless execution of travel plans" },
              { step: "4", title: "Support", desc: "Ongoing assistance and optimization" }
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full border-t-2 border-dashed border-pink-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Client <span className="text-pink-600">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Exceptional service and attention to detail. Made our corporate retreat truly memorable.",
                author: "Sarah Johnson",
                position: "HR Director, Tech Corp"
              },
              {
                text: "The team went above and beyond to accommodate our last-minute changes. Highly recommended!",
                author: "Michael Chen",
                position: "CEO, Innovation Labs"
              },
              {
                text: "Professional, efficient, and cost-effective solutions for all our business travel needs.",
                author: "Emma Williams",
                position: "Travel Manager, Global Inc"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-pink-600 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Contact CTA Section with updated styling */}
      <section className="border py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-black font-bold mb-6">
            Ready to Transform <span className="text-pink-600">Your Corporate Travel?</span>  
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-black/90">
            Get in touch with our corporate travel specialists to create a customized solution for your business.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-300 transition-colors font-bold">
            Contact Our Team
          </button>
        </div>
      </section>
    </main>
  );
}
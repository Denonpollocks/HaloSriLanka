import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  UserGroupIcon,
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  SunIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Corporate Retreat Programs | Team Building & Wellness Solutions',
  description: 'Premium corporate retreat solutions combining luxury accommodations with team-building activities and wellness initiatives.',
  keywords: 'corporate retreats, team building, corporate wellness, leadership development, executive retreats'
};

export default function CorporateRetreats() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/corporate-services/corporate-retreats.jpg"
          alt="Corporate Retreat Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Corporate <span className="text-pink-600">Retreats</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Transform team dynamics with immersive retreat experiences
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Premium Retreat <span className="text-pink-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our corporate retreat programs combine luxury accommodations with purposeful team-building activities and wellness initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Team Building",
                desc: "Collaborative challenges and strategic activities",
                icon: UserGroupIcon
              },
              {
                title: "Wellness Programs",
                desc: "Holistic health and mindfulness initiatives",
                icon: HeartIcon
              },
              {
                title: "Leadership Development",
                desc: "Executive coaching and workshops",
                icon: AcademicCapIcon
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

      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/corporate-services/retreat-experience.jpg"
                alt="Luxury Corporate Retreat Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Customized Programs</h3>
                <p className="text-lg">Tailored retreat experiences for your team</p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Premium Locations",
                  content: "Luxury resorts and exclusive venues worldwide"
                },
                {
                  title: "Wellness Integration",
                  content: "Modern corporate wellness practices with traditional healing techniques"
                },
                {
                  title: "Strategic Planning",
                  content: "Focused sessions for team alignment and goal setting"
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

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our retreat specialists to design a transformative experience for your organization.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel News & Updates | Halo Holidays',
  description: 'Stay updated with the latest travel news, destination guides, and industry updates from Halo Holidays.',
  keywords: 'travel news, destination guides, travel updates, Sri Lanka tourism news',
};

const featuredNews = [
  {
    title: 'New Direct Flights to Maldives Announced',
    excerpt: 'Major airlines introduce new routes connecting major cities to the Maldives...',
    image: '/images/news/flights.jpg',
    category: 'Industry Updates',
    date: '2024-03-15',
    slug: 'new-direct-flights-maldives'
  },
  {
    title: 'New Direct Flights to Maldives Announced',
    excerpt: 'Major airlines introduce new routes connecting major cities to the Maldives...',
    image: '/images/news/flights.jpg',
    category: 'Industry Updates',
    date: '2024-03-15',
    slug: 'new-direct-flights-maldives'
  },
  {
    title: 'New Direct Flights to Maldives Announced',
    excerpt: 'Major airlines introduce new routes connecting major cities to the Maldives...',
    image: '/images/news/flights.jpg',
    category: 'Industry Updates',
    date: '2024-03-15',
    slug: 'new-direct-flights-maldives'
  },

  // Add more news items
];

const travelGuides = [
  {
    title: 'Ultimate Tokyo Travel Guide 2024',
    excerpt: 'Everything you need to know about visiting Tokyo...',
    image: '/images/news/tokyo-guide.jpg',
    readTime: '8 min read',
    slug: 'tokyo-travel-guide-2024'
  },
  // Add more guides
];

export default function News() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Featured News */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/images/news/hero-news.jpg"
          alt="Latest Travel News"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-600">
            Travel Updates
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Stay informed with the latest travel news and destination insights
          </p>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map((article, index) => (
              <Link href={`/news/${article.slug}`} key={index}>
                <article className="group cursor-pointer">
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </div>
                  </div>
                  <time className="text-gray-500 text-sm">{article.date}</time>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-pink-600">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{article.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guides Section - Magazine Style */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Travel Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelGuides.map((guide, index) => (
              <Link href={`/guides/${guide.slug}`} key={index}>
                <article className="flex gap-6 bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="relative w-40 h-40">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <span className="text-pink-600 text-sm">{guide.readTime}</span>
                    <h3 className="text-xl font-bold mt-2">{guide.title}</h3>
                    <p className="text-gray-600 mt-2">{guide.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest travel updates, exclusive offers, and destination guides.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <button className="bg-white text-pink-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
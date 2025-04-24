import Breadcrumbs from '@/components/BreadCrumbs';
import Image from 'next/image';
// import Link from 'next/link';


const featuredNews = [
  {
    title: 'Tourist Arrivals Surge in Sri Lanka',
    excerpt: 'For the second time in Sri Lankan history, the highest number of tourists to visit the country in a single month has been recorded in January 2025...',
    image: '/images/news/tourism.jpg',
    category: 'Tourism Updates',
    date: '2025-02-06',
    slug: 'https://www.newsfirst.lk/2025/02/06/tourist-arrivals-surge-in-sri-lanka-sltda-records-highest-number-since-2018',
    publisher: {
      name: 'News First',
      url: 'https://www.newsfirst.lk',
      logo: 'https://www.newsfirst.lk/logo.png'
    }
  },
  {
    title: 'Sri Lanka among top Eid getaways for Omani travellers',
    excerpt: 'Sri Lanka has emerged as one of the most sought-after international destinations for travellers in Oman this Eid season...',
    image: '/images/news/Eid.jpg',
    category: 'Tourism Updates',
    date: '2025-03-26',
    slug: 'https://www.dailymirror.lk/breaking-news/Sri-Lanka-among-top-Eid-getaways-for-Omani-travellers/108-305197',
    publisher: {
      name: 'Daily Mirror',
      url: 'https://www.dailymirror.lk',
      logo: 'https://www.dailymirror.lk/logo.png'
    }
  },
  {
    title: 'Refurbished Boeing 777 with Premium Economy and Business Class Starting June 2025',
    excerpt: 'Emirates is pushing the envelope on enhancing the passenger experience, with plans to introduce Boeing 777s featuring upgraded cabins to eight more destinations within',
    image: '/images/news/emirates-ttw.jpg',
    category: 'Airline Updates',
    date: '2025-03-25',
    slug: 'https://www.travelandtourworld.com/news/article/portugal-ireland-hong-kong-maldives-india-sri-lanka-and-south-africa-to-experience-emirates-revolutionary-refurbished-boeing-777-with-premium-economy-and-business-class-starting-june-2025/',
    publisher: {
      name: 'Travel and Tour World',
      url: 'https://www.travelandtourworld.com',
      logo: 'https://www.travelandtourworld.com/logo.png'
    }
  },

  // Add more news items
];

// const travelGuides = [
//   {
//     title: 'Ultimate Tokyo Travel Guide 2024',
//     excerpt: 'Everything you need to know about visiting Tokyo...',
//     image: '/images/news/tokyo-guide.jpg',
//     readTime: '8 min read',
//     slug: 'tokyo-travel-guide-2024'
//   },
//   {
//     title: 'Ultimate Tokyo Travel Guide 2024',
//     excerpt: 'Everything you need to know about visiting Tokyo...',
//     image: '/images/news/tokyo-guide.jpg',
//     readTime: '8 min read',
//     slug: 'tokyo-travel-guide-2024'
//   },
 

//   // Add more guides
// ];

export function generateMetadata() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticleList',
    'itemListElement': featuredNews.map((article, index) => ({
      '@type': 'NewsArticle',
      'position': index + 1,
      'headline': article.title,
      'description': article.excerpt,
      'image': article.image,
      'datePublished': article.date,
      'url': article.slug,
      'publisher': {
        '@type': 'Organization',
        'name': article.publisher.name,
        'url': article.publisher.url,
        'logo': {
          '@type': 'ImageObject',
          'url': article.publisher.logo
        }
      },
      'isAccessibleForFree': true,
      'copyrightHolder': {
        '@type': 'Organization',
        'name': article.publisher.name
      },
      'author': {
        '@type': 'Organization',
        'name': article.publisher.name,
        'url': article.publisher.url
      }
    }))
  };

  return {
    title: 'Travel News & Updates | Halo Holidays',
    description: 'Stay updated with the latest travel news, destination guides, and industry updates from Halo Holidays.',
    keywords: 'travel news, destination guides, travel updates, Sri Lanka tourism news',
    alternates: {
      canonical: 'https://www.haloholidays.com/news'
    },
    other: {
      'script:ld+json': JSON.stringify(jsonLd)
    }
  };
}

export default function News() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Featured News */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/images/news/news.jpg"
          alt="Latest Travel News"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-medium uppercase text-white bg-clip-text ">
            Travel Updates
          </h1>
          <p className="text-white text-xl max-w-2xl mt-4">
            Stay informed with the latest travel news and destination insights
          </p>
        </div>
      </section>
      <Breadcrumbs />
      {/* Featured Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map((article, index) => (
              <a 
                href={article.slug}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <article 
                  className="cursor-pointer"
                  itemScope 
                  itemType="https://schema.org/NewsArticle"
                >
                  <meta itemProp="datePublished" content={article.date} />
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      itemProp="image"
                    />
                    <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </div>
                  </div>
                  
                  <time className=" text-gray-500 text-sm" itemProp="datePublished">
                    {article.date}
                   
                  </time>
                  
                  <h3 
                    className="text-xl font-bold mt-2 group-hover:text-pink-600"
                    itemProp="headline"
                  >
                    {article.title}
                  </h3>
                  <p 
                    className="text-gray-600 mt-2"
                    itemProp="description"
                  >
                    {article.excerpt}
                  </p>
                  <div className="mt-2 text-sm text-gray-500">
                    Source: <span itemProp="publisher">{article.publisher.name}</span>
                  </div>
                  <span className="sr-only">Opens in new tab</span>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guides Section - Magazine Style */}
      {/* <section className="bg-gray-50 py-16">
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
      </section> */}

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
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
      </section> */}
    </main>
  );
}
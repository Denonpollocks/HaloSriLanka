import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Breadcrumbs from '@/components/BreadCrumbs';

export const metadata = {
  title: 'Travel Blog & Guides | Expert Travel Tips',
  description: 'Discover expert travel guides, visa information, and destination tips from our travel specialists.',
  keywords: 'travel blog, travel guides, visa guides, destination tips, travel advice'
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pb-20">
      <header className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Travel Blog & Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert insights, destination guides, and travel tips from our specialists
          </p>
        </div>
      </header>
      <Breadcrumbs />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-pink-600 font-semibold">
                      {blog.category}
                    </span>
                    <h2 className="text-xl font-bold mt-2 mb-3">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <time>{blog.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 
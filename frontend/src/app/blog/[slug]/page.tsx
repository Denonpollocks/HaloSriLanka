// import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';
import { blogs, type BlogPost } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/BreadCrumbs';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>
}

export async function generateMetadata({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = blogs.find(blog => blog.slug === resolvedParams.slug);
  
  if (!post) return {};

  return {
    title: `${post.title} | Travel Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = blogs.find(blog => blog.slug === resolvedParams.slug);
  
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://yourdomain.com${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://yourdomain.com/blog/your-story-slug"
    }
  };

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/blog"
            className="text-white mb-6 inline-flex items-center gap-2 hover:text-pink-400"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
            {post.title}
          </h1>
        </div>
      </header>
      <Breadcrumbs />

      {/* Article Meta */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <time>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p className="lead">{post.content.introduction}</p>

            {post.content.sections.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                {section.points && (
                  <ul>
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3>Expert Tips</h3>
              <ul>
                {post.content.expertTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>{post.content.conclusion}</p>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
} 
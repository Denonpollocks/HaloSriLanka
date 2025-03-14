import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Halo Holidays',
  description: 'Read authentic reviews and testimonials from our valued customers about their travel experiences with Halo Holidays.',
  keywords: 'travel reviews, customer testimonials, Halo Holidays reviews, travel experiences',
};

const textReviews = [
  {
    name: 'Emma Wilson',
    location: 'Australia',
    rating: 5,
    review: 'The attention to detail in planning our family vacation was exceptional. Every aspect was perfectly coordinated.',
    date: '2024-03-10'
  },
  {
    name: 'Emma Wilson',
    location: 'Australia',
    rating: 5,
    review: 'The attention to detail in planning our family vacation was exceptional. Every aspect was perfectly coordinated.',
    date: '2024-03-10'
  },
  {
    name: 'Emma Wilson',
    location: 'Australia',
    rating: 5,
    review: 'The attention to detail in planning our family vacation was exceptional. Every aspect was perfectly coordinated.',
    date: '2024-03-10'
  },
  // Add more text reviews
];

const photoReviews = [
  {
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    review: 'Our Maldives trip was a dream come true!',
    image: '/images/reviews/maldives-review.jpg',
    profilePic: '/images/reviews/david.jpg',
    date: '2024-03-15'
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    review: 'Our Maldives trip was a dream come true!',
    image: '/images/reviews/maldives-review.jpg',
    profilePic: '/images/reviews/david.jpg',
    date: '2024-03-15'
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    review: 'Our Maldives trip was a dream come true!',
    image: '/images/reviews/maldives-review.jpg',
    profilePic: '/images/reviews/david.jpg',
    date: '2024-03-15'
  },
  // Add more photo reviews
];

const videoReviews = [
  {
    name: 'Sarah & James',
    location: 'United Kingdom',
    thumbnail: '/images/reviews/video-thumb1.jpg',
    videoUrl: '/videos/testimonial1.mp4',
    title: 'Our Amazing Sri Lankan Adventure'
  },
  {
    name: 'Sarah & James',
    location: 'United Kingdom',
    thumbnail: '/images/reviews/video-thumb1.jpg',
    videoUrl: '/videos/testimonial1.mp4',
    title: 'Our Amazing Sri Lankan Adventure'
  },
  // Add more video reviews
];

export default function Reviews() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What Our Travelers Say
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Authentic experiences shared by our valued customers
          </p>
        </div>
      </section>

      {/* Text Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Customer <span className="text-pink-600">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {textReviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <time className="text-sm text-gray-500">{review.date}</time>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Travel <span className="text-pink-600">Moments</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={review.image}
                    alt={`Travel experience by ${review.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={review.profilePic}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-gray-600 text-sm">{review.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Video <span className="text-pink-600">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoReviews.map((review, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={review.thumbnail}
                    alt={review.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-pink-600 text-4xl">▶</span>
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg">{review.title}</h3>
                  <p className="text-gray-600">
                    {review.name} from {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
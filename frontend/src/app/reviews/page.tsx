import Image from 'next/image';
import type { Metadata } from 'next';
import ReviewsContent from '../../components/ReviewsContent';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Halo Holidays',
  description: 'Read authentic reviews and testimonials from our valued customers about their travel experiences with Halo Holidays.',
  keywords: 'travel reviews, customer testimonials, Halo Holidays reviews, travel experiences',
};

const textReviews = [
  {
    name: 'Sanduni Nimeshika Gunawardana',
    location: 'Sri Lanka',
    rating: 5,
    review: 'We had an amazing time on our Dubai tour! Everything was smooth from start to finish – the Marina Dhow Cruise, City Tour, Burj Khalifa, Dubai Mall, and especially the thrilling Desert Safari were all unforgettable experiences. This trip was truly memorable, and we\'re so glad we got to experience the best of Dubai without any stress!',
    date: '2025-04-14'
  },
  {
    name: 'Sajjaad Ahamed',
    location: 'Sri Lanka',
    rating: 5,
    review: 'I had a fantastic experience with Halo Holidays. From start to finish, their customer service was outstanding. Naveed, in particular, was excellent—he went above and beyond to ensure my visa application was successfully submitted and kept me informed every step of the way. I truly appreciated the constant updates and personal attention.',
    date: '2025-04-11'
  },
  {
    name: 'Shashika Radalage',
    location: 'Sri Lanka',
    rating: 5,
    review: 'Thank you so much for arranging the Singapore tour it was wonderfully organized right from the very first call I made. Every detail was handled with such care and professionalism. I truly appreciated how promptly you responded to all my questions, always in a friendly and helpful manner.',
    date: '2025-04-11'
  },
  // Add more text reviews
];

const photoReviews = [
  {
    name: 'Praba Devi',
    location: 'Sri Lanka',
    rating: 5,
    review: 'I enjoyed each and every aspect of the tour.  I would recommend Halo Holidays to anyone who looks out for an exciting tour.',
    image: '/images/reviews/TM1.png',
    profilePic: '/images/reviews/david.jpg',
    date: '2024-03-15'
  },
  {
    name: 'Sachira De Silva',
    location: 'Sri Lanka',
    rating: 5,
    review: 'Overall, we are very happy with their service and we will get more services from then in future.',
    image: '/images/reviews/TM2.png',
    profilePic: '/images/reviews/david.jpg',
    date: '2024-03-15'
  },
  {
    name: 'Sanjana De Zoysa',
    location: 'Sri Lanka',
    rating: 5,
    review: 'An unforgettable experience! We look forward to planning our next adventure with you.',
    image: '/images/reviews/TM3.png',
    profilePic: '/images/reviews/david.jpg',
    date: '2024-03-15'
  },
  // Add more photo reviews
];

export default function Reviews() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}

      <section className="relative py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-20">
              What Our <span className="text-pink-600">Travelers</span> Say
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Authentic experiences shared by our valued customers
            </p>
          </div>
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
                    quality={100}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {/* <Image
                      src={review.profilePic}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    /> */}
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
        <ReviewsContent />
      </section>
    </main>
  );
}
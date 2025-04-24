"use client";
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';

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
    videoUrl: '/videos/testimonial2.mp4',
    title: 'Our Amazing Sri Lankan Adventure'
  },
  {
    name: 'Sarah & James',
    location: 'United Kingdom',
    thumbnail: '/images/reviews/video-thumb1.jpg',
    videoUrl: '/videos/testimonial3.mp4',
    title: 'Our Amazing Sri Lankan Adventure'
  },
];

export default function ReviewsContent() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  return (
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Video <span className="text-pink-600">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoReviews.map((review, index) => (
              <VideoPlayer
                key={index}
                thumbnail={review.thumbnail}
                videoUrl={review.videoUrl}
                title={review.title}
                name={review.name}
                location={review.location}
                currentVideo={currentVideo}
                setCurrentVideo={setCurrentVideo}
              />
            ))}
          </div>
        </div>
  );
} 
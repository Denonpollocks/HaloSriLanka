import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image';

interface Testimonial {
  name: string;
  date: string;
  text: string;
  avatar?: string;
}

export default function TourTestimonial({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-8">What Travelers Say</h2>
      
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <div className="flex items-start gap-4">
          <FaQuoteLeft className="text-pink-600 text-3xl flex-shrink-0" />
          <div>
            <p className="text-gray-600 italic mb-4">{testimonials[currentIndex].text}</p>
            <div className="flex items-center">
              {testimonials[currentIndex].avatar && (
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-pink-600 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

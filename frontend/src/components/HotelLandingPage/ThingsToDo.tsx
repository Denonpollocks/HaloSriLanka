"use client";

import Image from 'next/image';
import { FaMapMarkerAlt, FaClock, FaWalking } from 'react-icons/fa';

interface ThingsToDoProps {
  activities: {
    title: string;
    description: string;
    distance: string;
    duration?: string;
    type: string;
    image: string;
  }[];
}

export default function ThingsToDo({ activities }: ThingsToDoProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Things to Do Nearby</h2>
      <div className="grid grid-cols-1 gap-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="w-24 h-24 relative flex-shrink-0">              
              <Image
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover rounded-lg"
                width={96}
                height={96}
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-900 mb-1">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>{activity.distance}</span>
                </div>
                {activity.duration && (
                  <div className="flex items-center gap-1">
                    <FaClock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <FaWalking className="w-4 h-4" />
                  <span>{activity.type}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
"use client";

import Image from "next/image";

interface HighlightProps {
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function Highlights({ highlights }: HighlightProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0">
              <Image
                src={`/icons/${highlight.icon}.svg`}
                alt={highlight.title}
                className="w-full h-full"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
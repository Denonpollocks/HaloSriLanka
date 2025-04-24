import { ReactNode } from "react";

export interface HotelAmenity {
  name: ReactNode;
  icon: string;
  label: string;
}

export interface HotelRoom {
  name: string;
  description: string;
  size: string;
  maxOccupancy: number;
  bedType: string;
  images: string[];
  amenities: string[];
}

export interface Hotel {
  cardImage: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  ratings: { overall: number; totalReviews: number; categories: [] };
  id: string;
  name: string;
  slug: string;
  location: string;
  city: string;
  country: string;
  price: number;
  images: string[];
  description: {
    short: string;
    full: string;
  };
  amenities: {
    name: string;
    icon: string;
    description?: string;
  }[];
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  rooms: HotelRoom[];
  features: string[];
  thingsToDo: {
    title: string;
    description: string;
    distance: string;
    duration?: string;
    type: string;
    image: string;
  }[];
  airportDistance: string;
  restaurants: {
    name: string;
    cuisine: string;
    distance: string;
    priceRange: number; // 1-4 representing $-$$$$
    rating: number;
    openingHours: string;
    image: string;
    description: string;
  }[];
  attractions: {
    name: string;
    type: string;
    distance: string;
    openingHours: string;
    price: string;
    image: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const dubaiHotels: Hotel[] = [
    {
        id: "atlantis-the-palm",
        name: "Atlantis The Palm",
        slug: "atlantis-the-palm-dubai",
        cardImage: "/images/destinations/dubai/1.png",
        location: "Dubai, UAE",
        city: "Dubai",
        country: "UAE",
        price: 850,
        rating: 5,
        ratings: {
          overall: 4.7,
          totalReviews: 2043,
          categories: []
        },
        coordinates: {
          lat: 25.1304,
          lng: 55.1172
        },
        images: [
          "/images/hotels/dubai/Atlantis-The-Palm.jpg",
          "/images/hotels/dubai/Atlantis-The-Palm-2.jpg",
          "/images/hotels/dubai/Atlantis-The-Palm-3.jpg",
          "/images/hotels/dubai/Atlantis-The-Palm-4.jpg",
          "/images/hotels/dubai/Atlantis-The-Palm-5.jpg",
          "/images/hotels/dubai/Atlantis-The-Palm-6.jpg",
          "/images/hotels/dubai/Atlantis-The-Palm-7.jpg",

        ],
        highlights: [
          {
            title: "Private Beach",
            description: "Access to a stunning private beach with luxury cabanas.",
            icon: "umbrella-beach"
          },
          {
            title: "Aquaventure Waterpark",
            description: "Free access to one of the world's largest waterparks.",
            icon: "water"
          },
          {
            title: "Underwater Suites",
            description: "Iconic suites with floor-to-ceiling views of the Ambassador Lagoon.",
            icon: "bed"
          }
        ],
        description: {
          short: "Iconic 5-star resort on Dubai's Palm Island with world-class dining, attractions, and luxury accommodation.",
          full: "Atlantis The Palm is a world-renowned resort on Dubai's artificial archipelago, The Palm. With luxurious accommodations, award-winning restaurants, a massive waterpark, and marine animal encounters, this 5-star resort offers an unforgettable experience for couples, families, and thrill-seekers alike."
        },
        amenities: [
          {
            name: "Free Wi-Fi",
            icon: "wifi",
            description: "Stay connected throughout the property"
          },
          {
            name: "Outdoor Pools",
            icon: "swimmer",
            description: "Multiple temperature-controlled pools for adults and children"
          },
          {
            name: "24/7 Concierge",
            icon: "concierge-bell",
            description: "Dedicated service for all your needs"
          },
          {
            name: "Gourmet Dining",
            icon: "utensils",
            description: "20+ restaurants and celebrity chef experiences"
          },
          {
            name: "Luxury Spa",
            icon: "spa",
            description: "Relaxing treatments with ocean views"
          },
          {
            name: "Valet Parking",
            icon: "parking",
            description: "Free valet parking available"
          }
        ],
        rooms: [
          {
            name: "Ocean King Room",
            description: "Spacious room with full views of the Arabian Sea.",
            size: "45m²",
            maxOccupancy: 3,
            bedType: "King",
            images: ["/images/hotels/atlantis-room.jpg"],
            amenities: ["Free Wi-Fi", "Mini Bar", "Balcony", "Smart TV", "Room Service"]
          }
        ],
        features: [
          "Private Beach",
          "Marine Experiences",
          "Kids Club",
          "Award-Winning Dining",
          "Fitness Center",
          "Luxury Shopping"
        ],
        thingsToDo: [
          {
            title: "Aquaventure Waterpark",
            description: "Experience thrilling slides and river rides.",
            distance: "0 km (on-site)",
            duration: "Full day",
            type: "Waterpark",
            image: "/images/activities/adventure-waterpark-dubai.jpg"
          },
          {
            title: "The Lost Chambers Aquarium",
            description: "Explore over 65,000 marine animals in themed chambers.",
            distance: "0 km (on-site)",
            type: "Aquarium",
            duration: "2 hours",
            image: "/images/activities/lost-chambers-aquarium-dubai.jpg"
          },
          {
            title: "Helicopter Tour",
            description: "Soar above The Palm and the Dubai skyline.",
            distance: "2 km",
            type: "Adventure",
            duration: "15-30 minutes",
            image: "/images/activities/helicopter-dubai-tour.jpg"
          }
        ],
        restaurants: [
          {
            name: "Ossiano",
            cuisine: "Seafood",
            distance: "On-site",
            priceRange: 4,
            rating: 4.8,
            openingHours: "6:30 PM - 11:00 PM",
            image: "/images/restaurants/ossiano-dubai.jpg",
            description: "Underwater fine dining experience with floor-to-ceiling aquarium views."
          },
          {
            name: "Bread Street Kitchen",
            cuisine: "British",
            distance: "On-site",
            priceRange: 3,
            rating: 4.5,
            openingHours: "12:00 PM - 11:00 PM",
            image: "/images/restaurants/bread-street-kitchen-dubai.jpg",
            description: "A Gordon Ramsay restaurant offering hearty British classics."
          },
          {
            name: "Saffron",
            cuisine: "Asian Buffet",
            distance: "On-site",
            priceRange: 2,
            rating: 4.3,
            openingHours: "7:00 AM - 11:00 AM, 6:00 PM - 10:00 PM",
            image: "/images/restaurants/saffron-dubai.jpg",
            description: "Dubai's largest buffet with 220 dishes and live cooking stations."
          }
        ],
        attractions: [
          {
            name: "The Pointe",
            type: "Shopping & Dining",
            distance: "3 km",
            openingHours: "10:00 AM - 12:00 AM",
            price: "Free",
            image: "/images/attractions/the-pointe-dubai.jpg",
            description: "Waterfront destination with shops, dining, and a fountain show."
          },
          {
            name: "Burj Khalifa",
            type: "Landmark",
            distance: "25 km",
            openingHours: "8:30 AM - 11:00 PM",
            price: "$",
            image: "/images/attractions/burj-khalifa.jpg",
            description: "World's tallest building with observation decks and luxury dining."
          },
          {
            name: "Dubai Marina",
            type: "Cityscape",
            distance: "15 km",
            openingHours: "All day",
            price: "Free",
            image: "/images/attractions/dubai-marina.jpg",
            description: "Trendy waterfront with cafes, walkways, and yacht cruises."
          }
        ],
        airportDistance: "15 km",
        faqs: [
          {
            question: "What is the check-in and check-out time?",
            answer: "Check-in is at 3:00 PM, and check-out is at 12:00 PM."
          },
          {
            question: "What is the cancellation policy?",
            answer: "Cancellation is allowed up to 24 hours before the check-in date."
          },
          {
            question: "What is the cancellation policy?",
            answer: "Cancellation is allowed up to 24 hours before the check-in date."
          },
          {
            question: "What is the cancellation policy?",
            answer: "Cancellation is allowed up to 24 hours before the check-in date."
          }
        ]
      },
      {
        id: "nh-collection-dubai",
        name: "NH Collection Dubai The Palm",
        slug: "nh-collection-dubai-the-palm",
        location: "Palm Jumeirah, Crescent Road (West), Dubai, United Arab Emirates",
        city: "Dubai",
        country: "UAE",
        price: 450,
        rating: 5,
        ratings: {
          overall: 4.6,
          totalReviews: 875,
          categories: []
        },
        coordinates: {
          lat: 25.1167,
          lng: 55.1386
        },
        cardImage: "/images/destinations/dubai/2.png",
        images: [
          "/images/hotels/nh-collection-1.jpg",
          "/images/hotels/nh-collection-2.jpg",
          "/images/hotels/nh-collection-3.jpg"
        ],
        highlights: [
          {
            title: "Rooftop Infinity Pool",
            description: "Skyline views with a rooftop pool and sun deck.",
            icon: "swimmer"
          },
          {
            title: "Private Beach Access",
            description: "Enjoy serene private beach moments with luxurious loungers.",
            icon: "umbrella-beach"
          },
          {
            title: "Wellness & Fitness",
            description: "State-of-the-art gym, spa treatments, and relaxation spaces.",
            icon: "dumbbell"
          }
        ],
        description: {
          short: "A stylish, modern 5-star hotel offering stunning views and luxury amenities on Palm Jumeirah.",
          full: "NH Collection Dubai The Palm offers a prime location on the West Crescent of the iconic Palm Jumeirah. The hotel provides breathtaking views of the Dubai Marina skyline, spacious rooms, fine dining, rooftop pools, and a variety of relaxing and recreational activities. Perfect for both business and leisure travelers."
        },
        amenities: [
          {
            name: "Free Wi-Fi",
            icon: "wifi",
            description: "Unlimited high-speed internet access throughout the hotel"
          },
          {
            name: "Infinity Rooftop Pool",
            icon: "swimmer",
            description: "Panoramic views and relaxing sunbeds"
          },
          {
            name: "Concierge Service",
            icon: "concierge-bell",
            description: "24/7 concierge to assist with all guest needs"
          },
          {
            name: "Gourmet Restaurants",
            icon: "utensils",
            description: "Diverse cuisine with local and international flavors"
          },
          {
            name: "Luxury Spa",
            icon: "spa",
            description: "Personalized wellness treatments"
          },
          {
            name: "Free Parking",
            icon: "parking",
            description: "Valet and underground self-parking available"
          }
        ],
        rooms: [
          {
            name: "Premier Sea View Room",
            description: "Modern room with direct views of the Arabian Gulf.",
            size: "38m²",
            maxOccupancy: 3,
            bedType: "King",
            images: ["/images/hotels/nh-collection-room.jpg"],
            amenities: ["Smart TV", "Rain Shower", "Mini Bar", "Balcony", "Wi-Fi"]
          }
        ],
        features: [
          "Private Beach",
          "Rooftop Lounge",
          "Conference Facilities",
          "Luxury Spa",
          "Fitness Center",
          "In-room Dining"
        ],
        thingsToDo: [
          {
            title: "Sunset Paddleboarding",
            description: "Explore the calm waters of the Palm with a sunset paddleboard session.",
            distance: "50 meters",
            duration: "1 hour",
            type: "Water Activity",
            image: "/images/activities/paddleboarding.jpg"
          },
          {
            title: "Skyline Yoga",
            description: "Morning yoga with panoramic views from the rooftop deck.",
            distance: "On-site",
            type: "Wellness",
            duration: "1 hour",
            image: "/images/activities/yoga.jpg"
          },
          {
            title: "The View at The Palm",
            description: "Observation deck offering 360-degree views from Palm Tower.",
            distance: "2.5 km",
            duration: "1 hour",
            type: "Sightseeing",
            image: "/images/activities/view-palm.jpg"
          }
        ],
        restaurants: [
          {
            name: "Maiora",
            cuisine: "International Buffet",
            distance: "On-site",
            priceRange: 3,
            rating: 4.4,
            openingHours: "6:30 AM - 11:00 PM",
            image: "/images/restaurants/maiora.jpg",
            description: "All-day dining with fresh buffet and à la carte options."
          },
          {
            name: "SEEN Rooftop Bar",
            cuisine: "Fusion / Tapas",
            distance: "On-site",
            priceRange: 4,
            rating: 4.7,
            openingHours: "5:00 PM - 2:00 AM",
            image: "/images/restaurants/seen.jpg",
            description: "Trendy rooftop bar with skyline views and crafted cocktails."
          },
          {
            name: "Revo Café",
            cuisine: "Healthy & Vegan",
            distance: "On-site",
            priceRange: 2,
            rating: 4.3,
            openingHours: "7:00 AM - 9:00 PM",
            image: "/images/restaurants/revo.jpg",
            description: "Wholesome café serving smoothies, wraps, and health bowls."
          }
        ],
        attractions: [
          {
            name: "The Pointe",
            type: "Dining & Shopping",
            distance: "3 km",
            openingHours: "10:00 AM - 12:00 AM",
            price: "Free",
            image: "/images/attractions/the-pointe.jpg",
            description: "Diverse restaurants, fountain shows, and waterfront views."
          },
          {
            name: "Aquaventure Waterpark",
            type: "Theme Park",
            distance: "5 km",
            openingHours: "10:00 AM - 6:00 PM",
            price: "$$$",
            image: "/images/attractions/aquaventure.jpg",
            description: "Dubai's largest waterpark with thrilling slides and a lazy river."
          },
          {
            name: "Palm Fountain Show",
            type: "Entertainment",
            distance: "2.5 km",
            openingHours: "6:00 PM - 11:00 PM",
            price: "Free",
            image: "/images/attractions/fountain.jpg",
            description: "World's largest fountain show at The Pointe every evening."
          }
        ],
        airportDistance: "15 km",
        faqs: []
      },
  
     
      

      
      
       
      
     
]; 
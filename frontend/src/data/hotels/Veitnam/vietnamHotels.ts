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
  cardImage: string;
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

export const vietnamHotels: Hotel[] = [
        
  
      {
        "id": "barcelo-cairo-pyramids",
        "name": "Barceló Cairo Pyramids",
        "slug": "barcelo-cairo-pyramids-giza",
        "location": "Giza, Egypt",
        "city": "Giza",
        "country": "Egypt",
        "price": 82,
        "rating": 4,
        "ratings": {
          "overall": 4.0,
          "totalReviews": 1547,
          "categories": []
        },
        "coordinates": {
          "lat": 29.9884,
          "lng": 31.1285
        },
        "cardImage": "/images/hotels/giza/Barcelo-Cairo-Pyramids.jpg",
        "images": [
          "/images/hotels/giza/Barcelo-Cairo-Pyramids.jpg",
          "/images/hotels/giza/Barcelo-Cairo-Pyramids-2.jpg",
          "/images/hotels/giza/Barcelo-Cairo-Pyramids-3.jpg",
          "/images/hotels/giza/Barcelo-Cairo-Pyramids-4.jpg",
          "/images/hotels/giza/Barcelo-Cairo-Pyramids-5.jpg",
          "/images/hotels/giza/Barcelo-Cairo-Pyramids-6.jpg",
          "/images/hotels/giza/Barcelo-Cairo-Pyramids-7.jpg"
        ],
        "highlights": [
          {
            "title": "Proximity to Pyramids",
            "description": "Located just 2.5 miles from the Giza Plateau, home to the iconic pyramids.",
            "icon": "landmark"
          },
          {
            "title": "Rooftop Pool",
            "description": "Heated outdoor pool with panoramic views of the pyramids.",
            "icon": "swimming-pool"
          },
          {
            "title": "Diverse Dining Options",
            "description": "Three on-site restaurants offering international and Italian cuisine.",
            "icon": "utensils"
          }
        ],
        "description": {
          "short": "Modern 4-star hotel in Giza offering comfortable accommodations with stunning pyramid views.",
          "full": "Barceló Cairo Pyramids is a contemporary hotel situated on Sharia Al Haram, one of Egypt's most famous avenues. The hotel boasts 236 spacious rooms, some with breathtaking views of the Giza pyramids. Guests can enjoy a heated rooftop pool, multiple dining venues, and easy access to Cairo's historic sites."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary high-speed internet throughout the hotel."
          },
          {
            "name": "Fitness Center",
            "icon": "dumbbell",
            "description": "State-of-the-art gym with modern equipment."
          },
          {
            "name": "Spa Services",
            "icon": "spa",
            "description": "Relaxing treatments including massages, facials, and body wraps."
          },
          {
            "name": "24-Hour Concierge",
            "icon": "concierge-bell",
            "description": "Assistance available around the clock for all guest needs."
          },
          {
            "name": "Airport Shuttle",
            "icon": "shuttle-van",
            "description": "Convenient transportation to and from Cairo International Airport."
          },
          {
            "name": "On-Site Parking",
            "icon": "parking",
            "description": "Complimentary parking facilities for guests."
          }
        ],
        "rooms": [
          {
            "name": "Superior Pyramid View Room",
            "description": "Modern room offering stunning views of the Giza pyramids.",
            "size": "32m²",
            "maxOccupancy": 2,
            "bedType": "King",
            "images": ["/images/hotels/barcelo-room.jpg"],
            "amenities": ["Free Wi-Fi", "Mini Bar", "Flat-screen TV", "Air Conditioning", "Room Service"]
          }
        ],
        "features": [
          "Proximity to Pyramids",
          "Rooftop Pool",
          "Multiple Dining Options",
          "Fitness Center",
          "Spa Services",
          "Conference Facilities"
        ],
        "thingsToDo": [
          {
            "title": "Giza Pyramid Complex",
            "description": "Explore the ancient pyramids and the Great Sphinx.",
            "distance": "4 km",
            "duration": "Half-day",
            "type": "Historical Site",
            "image": "/images/activities/giza-pyramids.jpg"
          },
          {
            "title": "Egyptian Museum",
            "description": "Discover a vast collection of ancient Egyptian artifacts.",
            "distance": "10 km",
            "duration": "2-3 hours",
            "type": "Museum",
            "image": "/images/activities/egyptian-museum.jpg"
          },
          {
            "title": "Khan el-Khalili Bazaar",
            "description": "Experience traditional shopping in a historic market.",
            "distance": "12 km",
            "duration": "2 hours",
            "type": "Market",
            "image": "/images/activities/khan-el-khalili.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Horus Restaurant",
            "cuisine": "International",
            "distance": "On-site",
            "priceRange": 3,
            "rating": 4.5,
            "openingHours": "6:30 AM - 10:30 PM",
            "image": "/images/restaurants/horus-restaurant.jpg",
            "description": "Buffet-style dining with a variety of international dishes."
          },
          {
            "name": "Nefertari Restaurant",
            "cuisine": "Italian",
            "distance": "On-site",
            "priceRange": 3,
            "rating": 4.3,
            "openingHours": "12:00 PM - 11:00 PM",
            "image": "/images/restaurants/nefertari-restaurant.jpg",
            "description": "Authentic Italian cuisine in a cozy setting."
          },
          {
            "name": "Sphinx Restaurant",
            "cuisine": "Local and International",
            "distance": "On-site",
            "priceRange": 2,
            "rating": 4.0,
            "openingHours": "24 hours",
            "image": "/images/restaurants/sphinx-restaurant.jpg",
            "description": "Casual dining offering a mix of local and international dishes."
          }
        ],
        "attractions": [
          {
            "name": "The Great Sphinx",
            "type": "Monument",
            "distance": "4 km",
            "openingHours": "8:00 AM - 5:00 PM",
            "price": "$",
            "image": "/images/attractions/great-sphinx.jpg",
            "description": "Iconic limestone statue with the body of a lion and the head of a pharaoh."
          },
          {
            "name": "Cairo Tower",
            "type": "Landmark",
            "distance": "10 km",
            "openingHours": "9:00 AM - 1:00 AM",
            "price": "$",
            "image": "/images/attractions/cairo-tower.jpg",
            "description": "Panoramic city views from one of Cairo’s tallest structures."
          },
          {
            "name": "Pharaonic Village",
            "type": "Cultural Experience",
            "distance": "8 km",
            "openingHours": "9:00 AM - 5:00 PM",
            "price": "$$",
            "image": "/images/attractions/pharaonic-village.jpg",
            "description": "Live reenactments of ancient Egyptian life with educational tours and museums."
          }
        ],
        "airportDistance": "30 km",
        "faqs": [
          {
            "question": "What time is check-in and check-out?",
            "answer": "Check-in starts at 2:00 PM and check-out is until 12:00 PM."
          },
          {
            "question": "Does the hotel offer airport transportation?",
            "answer": "Yes, airport shuttle services are available upon request for an additional charge."
          },
          {
            "question": "Are pets allowed at Barceló Cairo Pyramids?",
            "answer": "No, pets are not allowed at the property."
          },
          {
            "question": "Is breakfast included in the room rate?",
            "answer": "Breakfast is included in some room packages—please check your booking details."
          }
        ]
      },

   
           

      
      
       
      
     
]; 
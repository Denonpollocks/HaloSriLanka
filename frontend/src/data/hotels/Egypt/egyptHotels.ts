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

export const egyptHotels: Hotel[] = [
        
  
    {
        "id": "barcelo-cairo-pyramids",
        "name": "Barceló Cairo Pyramids",
        "slug": "barcelo-cairo-pyramids-giza",
        "location": "Giza, Egypt",
        "city": "Egypt",
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
        "cardImage": "/images/hotels/egypt/Barcelo-Cairo-Pyramids.jpg",
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

      {
        "id": "pharaohs-hotel-cairo",
        "name": "Pharaohs Hotel",
        "slug": "pharaohs-hotel-cairo",
        "location": "Cairo, Egypt",
        "city": "Cairo",
        "country": "Egypt",
        "price": 50,
        "rating": 3,
        "ratings": {
          "overall": 5.9,
          "totalReviews": 234,
          "categories": []
        },
        "coordinates": {
          "lat": 30.0425,
          "lng": 31.2241
        },
        "cardImage": "/images/hotels/egypt/Pharaohs-Hotel.jpg",
        "images": [
          "/images/hotels/cairo/Pharaohs-Hotel-1.jpg",
          "/images/hotels/cairo/Pharaohs-Hotel-2.jpg",
          "/images/hotels/cairo/Pharaohs-Hotel-3.jpg",
          "/images/hotels/cairo/Pharaohs-Hotel-4.jpg",
          "/images/hotels/cairo/Pharaohs-Hotel-5.jpg"
        ],
        "highlights": [
          {
            "title": "Proximity to Nile River",
            "description": "Located just 100 meters from the Nile River, offering easy access to riverbank activities.",
            "icon": "water"
          },
          {
            "title": "Rooftop Restaurant",
            "description": "Panoramic views of the Nile while enjoying Egyptian and international cuisine.",
            "icon": "utensils"
          },
          {
            "title": "Central Location",
            "description": "Situated in the Dokki district, close to Cairo's major attractions.",
            "icon": "map-marker-alt"
          }
        ],
        "description": {
          "short": "Budget-friendly hotel in Cairo's Dokki district, near the Nile River.",
          "full": "Pharaohs Hotel offers affordable accommodations in the heart of Cairo's Dokki district, just steps away from the Nile River. Guests can enjoy comfortable rooms, a rooftop restaurant with panoramic views, and easy access to the city's main attractions."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary internet access in public areas."
          },
          {
            "name": "Air Conditioning",
            "icon": "snowflake",
            "description": "All rooms equipped with air conditioning for comfort."
          },
          {
            "name": "24-Hour Reception",
            "icon": "concierge-bell",
            "description": "Front desk services available around the clock."
          },
          {
            "name": "On-Site Dining",
            "icon": "utensils",
            "description": "Rooftop restaurant serving Egyptian and international dishes."
          },
          {
            "name": "Room Service",
            "icon": "hotel",
            "description": "In-room dining available for guests."
          },
          {
            "name": "Laundry Service",
            "icon": "tshirt",
            "description": "Laundry and dry-cleaning services offered."
          }
        ],
        "rooms": [
          {
            "name": "Standard Room with Nile View",
            "description": "Room featuring a balcony with views of the Nile River.",
            "size": "25m²",
            "maxOccupancy": 2,
            "bedType": "Double or Twin",
            "images": ["/images/hotels/pharaohs-nile-view-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Standard Room with City View",
            "description": "Room with a balcony overlooking the city.",
            "size": "25m²",
            "maxOccupancy": 2,
            "bedType": "Double or Twin",
            "images": ["/images/hotels/pharaohs-city-view-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Deluxe Triple Room with Nile View",
            "description": "Spacious room with three beds and Nile River views.",
            "size": "30m²",
            "maxOccupancy": 3,
            "bedType": "Three Single Beds",
            "images": ["/images/hotels/pharaohs-deluxe-triple-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          }
        ],
        "features": [
          "Proximity to Nile River",
          "Rooftop Restaurant",
          "Central Location",
          "Budget-Friendly",
          "24-Hour Reception",
          "Room Service"
        ],
        "thingsToDo": [
          {
            "title": "Egyptian Museum",
            "description": "Explore ancient artifacts and treasures, including Tutankhamun's collection.",
            "distance": "1.5 km",
            "duration": "2-3 hours",
            "type": "Museum",
            "image": "/images/activities/egyptian-museum.jpg"
          },
          {
            "title": "Cairo Opera House",
            "description": "Attend performances in Egypt's premier performing arts venue.",
            "distance": "1 km",
            "duration": "Varies",
            "type": "Cultural",
            "image": "/images/activities/cairo-opera-house.jpg"
          },
          {
            "title": "Khan el-Khalili Bazaar",
            "description": "Shop for traditional crafts, jewelry, and souvenirs in a historic market.",
            "distance": "4 km",
            "duration": "2-3 hours",
            "type": "Shopping",
            "image": "/images/activities/khan-el-khalili.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Rooftop Restaurant",
            "cuisine": "Egyptian and International",
            "distance": "On-site",
            "priceRange": 2,
            "rating": 4.0,
            "openingHours": "7:00 AM - 11:00 PM",
            "image": "/images/restaurants/pharaohs-rooftop-restaurant.jpg",
            "description": "Offers a variety of local and international dishes with panoramic Nile views."
          },
          {
            "name": "Nearby Dining Options",
            "cuisine": "Various",
            "distance": "Within 1 km",
            "priceRange": 2,
            "rating": 4.0,
            "openingHours": "Varies",
            "image": "/images/restaurants/nearby-dining-cairo.jpg",
            "description": "Multiple restaurants and cafes offering diverse cuisines in the surrounding area."
          }
        ],
          "attractions": [
          {
            "name": "Tahrir Square",
            "type": "Historical Landmark",
            "distance": "2 km",
            "openingHours": "Open 24 hours",
            "price": "Free",
            "image": "/images/attractions/tahrir-square.jpg",
            "description": "Famous public square in downtown Cairo, known for its cultural and political significance."
          },
          {
            "name": "Cairo Tower",
            "type": "Landmark",
            "distance": "1.5 km",
            "openingHours": "9:00 AM - 1:00 AM",
            "price": "$",
            "image": "/images/attractions/cairo-tower.jpg",
            "description": "Modern tower offering panoramic views of Cairo and the Nile River."
          },
          {
            "name": "Zamalek Art Gallery",
            "type": "Art Gallery",
            "distance": "2.2 km",
            "openingHours": "11:00 AM - 9:00 PM",
            "price": "Free",
            "image": "/images/attractions/zamalek-art-gallery.jpg",
            "description": "Showcases contemporary Egyptian art in a chic gallery space."
          }
        ],
        "airportDistance": "23 km",
        "faqs": [
          {
            "question": "What time is check-in and check-out at Pharaohs Hotel?",
            "answer": "Check-in starts at 2:00 PM and check-out is at 12:00 PM."
          },
          {
            "question": "Is there free Wi-Fi at the hotel?",
            "answer": "Yes, free Wi-Fi is available in public areas and rooms."
          },
          {
            "question": "Does the hotel provide airport transfers?",
            "answer": "Yes, airport shuttle service can be arranged for an additional charge."
          },
          {
            "question": "Are there any family rooms?",
            "answer": "Yes, the hotel offers triple rooms suitable for families."
          }
        ]
      },

      {
        "id": "kempinski-nile-hotel-cairo",
        "name": "Kempinski Nile Hotel",
        "slug": "kempinski-nile-hotel-cairo",
        "location": "Garden City, Cairo, Egypt",
        "cardImage": "/images/hotels/egypt/Kempinski-Nile-Hotel.jpg",
        "city": "Cairo",
        "country": "Egypt",
        "price": 160,
        "rating": 5,
        "ratings": {
          "overall": 4.6,
          "totalReviews": 3051,
          "categories": []
        },
        "coordinates": {
          "lat": 30.0392,
          "lng": 31.2289
        },
        "images": [
          "/images/hotels/cairo/Kempinski-Nile-Hotel-1.jpg",
          "/images/hotels/cairo/Kempinski-Nile-Hotel-2.jpg",
          "/images/hotels/cairo/Kempinski-Nile-Hotel-3.jpg",
          "/images/hotels/cairo/Kempinski-Nile-Hotel-4.jpg",
          "/images/hotels/cairo/Kempinski-Nile-Hotel-5.jpg"
        ],
        "highlights": [
          {
            "title": "Nile River Views",
            "description": "Luxury rooms and suites with private balconies overlooking the Nile.",
            "icon": "binoculars"
          },
          {
            "title": "Rooftop Pool & Bar",
            "description": "Infinity pool with panoramic views and a stylish bar.",
            "icon": "cocktail"
          },
          {
            "title": "Butler Service",
            "description": "Personalized 24/7 butler service for an elevated experience.",
            "icon": "user-tie"
          }
        ],
        "description": {
          "short": "Elegant 5-star hotel on the banks of the Nile in Cairo’s Garden City district.",
          "full": "Kempinski Nile Hotel offers a refined luxury experience in the heart of Cairo. Located in the upscale Garden City area, this boutique 5-star hotel features elegant rooms with private balconies, fine dining options, a rooftop pool, a relaxing spa, and attentive butler service. Ideal for couples, business travelers, and anyone seeking an indulgent stay near major landmarks."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "High-speed internet throughout the property."
          },
          {
            "name": "Infinity Rooftop Pool",
            "icon": "swimmer",
            "description": "Relax with stunning Nile views at the rooftop pool."
          },
          {
            "name": "Spa & Wellness Center",
            "icon": "spa",
            "description": "Luxury treatments, sauna, and steam room."
          },
          {
            "name": "Fitness Center",
            "icon": "dumbbell",
            "description": "Well-equipped gym for your workouts."
          },
          {
            "name": "Butler Service",
            "icon": "bell",
            "description": "24/7 personalized butler service."
          },
          {
            "name": "Fine Dining Restaurants",
            "icon": "utensils",
            "description": "Multiple gourmet dining experiences on-site."
          }
        ],
        "rooms": [
          {
            "name": "Deluxe Nile View Room",
            "description": "Elegant room with a private balcony overlooking the Nile River.",
            "size": "33m²",
            "maxOccupancy": 2,
            "bedType": "King",
            "images": ["/images/hotels/kempinski-nile-room.jpg"],
            "amenities": ["Free Wi-Fi", "Butler Service", "Flat-Screen TV", "Coffee Machine", "Rain Shower"]
          }
        ],
        "features": [
          "Nile River Views",
          "Boutique Luxury",
          "Rooftop Pool",
          "Fine Dining",
          "Personal Butler",
          "Central Location"
        ],
        "thingsToDo": [
          {
            "title": "Egyptian Museum",
            "description": "One of the world’s largest collections of ancient Egyptian artifacts.",
            "distance": "1.3 km",
            "duration": "2-3 hours",
            "type": "Museum",
            "image": "/images/activities/egyptian-museum.jpg"
          },
          {
            "title": "Feluca Nile Cruise",
            "description": "Traditional wooden sailboat ride along the Nile River.",
            "distance": "0.2 km",
            "duration": "1 hour",
            "type": "Relaxation",
            "image": "/images/activities/feluca-nile-cruise.jpg"
          },
          {
            "title": "Cairo Opera House",
            "description": "Cultural performances and events just across the river.",
            "distance": "1 km",
            "duration": "2 hours",
            "type": "Cultural",
            "image": "/images/activities/cairo-opera-house.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "The Blue",
            "cuisine": "Mediterranean",
            "distance": "On-site",
            "priceRange": 4,
            "rating": 4.7,
            "openingHours": "6:30 AM - 11:00 PM",
            "image": "/images/restaurants/kempinski-blue.jpg",
            "description": "Chic restaurant serving Mediterranean cuisine with a modern twist."
          },
          {
            "name": "Osmanly",
            "cuisine": "Turkish",
            "distance": "On-site",
            "priceRange": 3,
            "rating": 4.5,
            "openingHours": "1:00 PM - 11:00 PM",
            "image": "/images/restaurants/osmanly.jpg",
            "description": "Authentic Ottoman-Turkish cuisine served in a regal setting."
          }
        ],
        "attractions": [
          {
            "name": "Tahrir Square",
            "type": "Historical Landmark",
            "distance": "1.2 km",
            "openingHours": "Open 24/7",
            "price": "Free",
            "image": "/images/attractions/tahrir-square.jpg",
            "description": "Iconic square near the Egyptian Museum, at the heart of Cairo’s downtown."
          },
          {
            "name": "Zamalek Island",
            "type": "Lifestyle & Culture",
            "distance": "2.5 km",
            "openingHours": "All day",
            "price": "Free",
            "image": "/images/attractions/zamalek.jpg",
            "description": "Trendy district with art galleries, boutiques, and cafés."
          },
          {
            "name": "Coptic Cairo",
            "type": "Historical & Religious",
            "distance": "5 km",
            "openingHours": "9:00 AM - 4:00 PM",
            "price": "$",
            "image": "/images/attractions/coptic-cairo.jpg",
            "description": "Historic Christian area with churches and museums."
          }
        ],
        "airportDistance": "22 km",
        "faqs": [
          {
            "question": "What time is check-in and check-out?",
            "answer": "Check-in is at 3:00 PM, and check-out is at 12:00 PM."
          },
          {
            "question": "Is butler service included in all rooms?",
            "answer": "Yes, butler service is available for all rooms and suites."
          },
          {
            "question": "Does the hotel offer airport transportation?",
            "answer": "Yes, private airport transfers can be arranged for an extra fee."
          },
          {
            "question": "Is the hotel suitable for business travelers?",
            "answer": "Absolutely. It offers meeting rooms, business services, and fast Wi-Fi."
          }
        ]
      },

           

      
      
       
      
     
]; 
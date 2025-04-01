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

export const italyHotels: Hotel[] = [
        
    {
        "id": "hotel-plaza-venice",
        "name": "Hotel Plaza Venice",
        "slug": "hotel-plaza-venice",
        "location": "Mestre, Italy",
        "city": "Mestre",
        "country": "Italy",
        "price": 120,
        "rating": 4,
        "ratings": {
          "overall": 8.2,
          "totalReviews": 5709,
          "categories": []
        },
        "coordinates": {
          "lat": 45.4827,
          "lng": 12.2346
        },
        "cardImage": "/images/hotels/italy/Hotel-Plaza-Venice.jpg",
        "images": [
          "/images/hotels/mestre/hotel-plaza-venice-1.jpg",
          "/images/hotels/mestre/hotel-plaza-venice-2.jpg",
          "/images/hotels/mestre/hotel-plaza-venice-3.jpg",
          "/images/hotels/mestre/hotel-plaza-venice-4.jpg",
          "/images/hotels/mestre/hotel-plaza-venice-5.jpg"
        ],
        "highlights": [
          {
            "title": "Prime Location",
            "description": "Situated directly opposite Mestre Train Station, offering quick access to Venice in just 10 minutes by train or bus.",
            "icon": "map-marker-alt"
          },
          {
            "title": "Elegant Accommodations",
            "description": "Features 209 elegantly furnished rooms with modern amenities and marble bathrooms.",
            "icon": "bed"
          },
          {
            "title": "On-Site Dining",
            "description": "Home to the Soul Kitchen restaurant, serving a diverse menu of Italian and international dishes throughout the day.",
            "icon": "utensils"
          }
        ],
        "description": {
          "short": "A 4-star hotel in Mestre offering elegant rooms, modern amenities, and convenient access to Venice.",
          "full": "Hotel Plaza Venice is a 4-star establishment located directly across from Mestre Train Station, providing guests with seamless connectivity to Venice and its surrounding areas. The hotel boasts 209 rooms, each designed with classic furnishings and equipped with contemporary amenities to ensure a comfortable stay. Guests can indulge in culinary delights at the on-site Soul Kitchen restaurant, which offers a variety of Italian and international dishes. With its strategic location and comprehensive facilities, Hotel Plaza Venice serves as an ideal base for both leisure and business travelers."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary high-speed internet access available throughout the hotel."
          },
          {
            "name": "24-Hour Front Desk",
            "icon": "concierge-bell",
            "description": "Round-the-clock reception services to assist guests at any time."
          },
          {
            "name": "Meeting Rooms",
            "icon": "briefcase",
            "description": "Three fully-equipped meeting rooms suitable for business events and conferences."
          },
          {
            "name": "On-Site Restaurant",
            "icon": "utensils",
            "description": "Soul Kitchen offers a diverse menu of Italian and international cuisine."
          },
          {
            "name": "Room Service",
            "icon": "concierge-bell",
            "description": "In-room dining available for guests preferring private meals."
          },
          {
            "name": "Laundry Service",
            "icon": "tshirt",
            "description": "Professional laundry and dry-cleaning services for guests' convenience."
          }
        ],
        "rooms": [
          {
            "name": "Classic Double or Twin Room",
            "description": "Elegantly furnished room with warm colors and a fully equipped marble bathroom.",
            "size": "20m²",
            "maxOccupancy": 2,
            "bedType": "1 Queen or 2 Twin beds",
            "images": ["/images/hotels/mestre/classic-double-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe"]
          },
          {
            "name": "Superior Double or Twin Room",
            "description": "Spacious room featuring a seating area and classic décor, offering enhanced comfort.",
            "size": "25m²",
            "maxOccupancy": 2,
            "bedType": "1 Queen or 2 Twin beds",
            "images": ["/images/hotels/mestre/superior-double-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe"]
          },
          {
            "name": "Deluxe Double Room",
            "description": "Luxurious room offering extra space, a seating area, and premium amenities for a refined stay.",
            "size": "30m²",
            "maxOccupancy": 2,
            "bedType": "1 King bed",
            "images": ["/images/hotels/mestre/deluxe-double-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Bathrobe"]
          }
        ],
        "features": [
          "Strategic location opposite Mestre Train Station",
          "Elegant and spacious rooms with modern amenities",
          "On-site dining at Soul Kitchen restaurant",
          "Proximity to Venice with a 10-minute train or bus ride",
          "Comprehensive business facilities including meeting rooms",
          "High-speed free Wi-Fi throughout the property"
        ],
        "thingsToDo": [
          {
            "title": "Explore Venice",
            "description": "Discover the historic canals, architecture, and art of Venice, just a short train ride away.",
            "distance": "10 km",
            "duration": "Full day",
            "type": "Cultural",
            "image": "/images/activities/venice-exploration.jpg"
          },
          {
            "title": "Visit Murano Island",
            "description": "Famous for its glass-making traditions, Murano offers workshops and beautiful glass art.",
            "distance": "15 km",
            "duration": "Half day",
            "type": "Cultural",
            "image": "/images/activities/murano-island.jpg"
          },
          {
            "title": "St. Mark's Square",
            "description": "Experience the heart of Venice at Piazza San Marco, surrounded by iconic landmarks.",
            "distance": "10 km",
            "duration": "2-3 hours",
            "type": "Cultural",
            "image": "/images/activities/st-marks-square.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Soul Kitchen",
            "cuisine": "Italian & International",
            "distance": "On-site",
            "priceRange": 2,
            "rating": 4.5,
            "openingHours": "12:00 PM – 10:30 PM",
            "image": "/images/restaurants/soul-kitchen.jpg",
            "description": "Offers a diverse menu featuring Italian and international dishes, with a focus on fresh, quality ingredients."
          }
        ],
        "attractions": [
          {
            "name": "Venice Historic Center",
            "type": "Cultural",
            "distance": "10 km",
            "openingHours": "All day",
            "price": "Free entry",
            "image": "/images/attractions/venice-historic-center.jpg",
            "description": "Explore the canals, bridges, and architectural marvels of Venice including the Rialto Bridge and Grand Canal."
          },
          {
            "name": "Teatro La Fenice",
            "type": "Opera House",
            "distance": "9.8 km",
            "openingHours": "9:30 AM – 6:00 PM",
            "price": "$$",
            "image": "/images/attractions/teatro-la-fenice.jpg",
            "description": "One of the most renowned landmarks in the history of Italian theatre and opera."
          },
          {
            "name": "Peggy Guggenheim Collection",
            "type": "Art Museum",
            "distance": "10.2 km",
            "openingHours": "10:00 AM – 6:00 PM",
            "price": "$$",
            "image": "/images/attractions/peggy-guggenheim.jpg",
            "description": "Modern art museum located on the Grand Canal featuring works by Picasso, Dalí, and Pollock."
          }
        ],
        "airportDistance": "12 km (Venice Marco Polo Airport)",
        "faqs": [
          {
            "question": "How far is the hotel from Venice?",
            "answer": "The hotel is located directly opposite Mestre Train Station, and Venice can be reached in just 10 minutes by train."
          },
          {
            "question": "Is parking available?",
            "answer": "Yes, private parking is available on site for an additional charge."
          },
          {
            "question": "Is breakfast included?",
            "answer": "Breakfast is available daily and can be included depending on your booking package."
          },
          {
            "question": "Is there Wi-Fi in the rooms?",
            "answer": "Yes, all rooms and public areas offer free high-speed Wi-Fi."
          }
        ]
      },

      {
        "id": "raganelli-hotel-rome",
        "name": "Raganelli Hotel",
        "slug": "raganelli-hotel-rome",
        "location": "Rome, Italy",
        "city": "Rome",
        "country": "Italy",
        "price": 120,
        "rating": 4,
        "ratings": {
          "overall": 8.0,
          "totalReviews": 1500,
          "categories": []
        },
        "coordinates": {
          "lat": 41.8992,
          "lng": 12.4184
        },
        "cardImage": "/images/hotels/italy/Raganelli-Hotel.jpg",
        "images": [
          "/images/hotels/rome/raganelli-hotel-1.jpg",
          "/images/hotels/rome/raganelli-hotel-2.jpg",
          "/images/hotels/rome/raganelli-hotel-3.jpg",
          "/images/hotels/rome/raganelli-hotel-4.jpg",
          "/images/hotels/rome/raganelli-hotel-5.jpg"
        ],
        "highlights": [
          {
            "title": "Proximity to Vatican City",
            "description": "Located less than 3 km from Vatican City, offering easy access to its historic sites.",
            "icon": "map-marker-alt"
          },
          {
            "title": "Elegant Rooftop Terrace",
            "description": "Features a beautiful rooftop terrace, perfect for relaxing and enjoying sunsets.",
            "icon": "sun"
          },
          {
            "title": "Free Private Parking",
            "description": "Offers complimentary private parking directly in front of the hotel for guests.",
            "icon": "parking"
          }
        ],
        "description": {
          "short": "A 4-star hotel in Rome combining boutique charm with modern comforts, strategically located near Vatican City.",
          "full": "Raganelli Hotel, with its 45 elegantly furnished rooms, strikes a perfect balance between the coziness of a boutique establishment and the amenities of a luxurious four-star hotel. Strategically situated less than 3 km from Vatican City, the hotel provides guests with easy access to Rome's historic landmarks. The property boasts a beautiful rooftop terrace, offering a serene spot to unwind and witness stunning sunsets over the city. Complimentary private parking and proximity to public transportation make it a convenient choice for both leisure and business travelers."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary high-speed internet access throughout the hotel."
          },
          {
            "name": "Rooftop Terrace",
            "icon": "sun",
            "description": "A scenic rooftop area for guests to relax and enjoy panoramic views of Rome."
          },
          {
            "name": "24-Hour Front Desk",
            "icon": "concierge-bell",
            "description": "Round-the-clock reception services to assist guests at any time."
          },
          {
            "name": "Bar & Lounge",
            "icon": "cocktail",
            "description": "On-site bar offering a selection of beverages in a cozy atmosphere."
          },
          {
            "name": "Free Private Parking",
            "icon": "parking",
            "description": "Complimentary on-site parking available for guests' convenience."
          },
          {
            "name": "Meeting Facilities",
            "icon": "briefcase",
            "description": "Equipped spaces suitable for business meetings and events."
          }
        ],
        "rooms": [
          {
            "name": "Standard Room",
            "description": "Comfortable room featuring modern amenities and elegant décor.",
            "size": "20m²",
            "maxOccupancy": 2,
            "bedType": "1 Queen or 2 Twin beds",
            "images": ["/images/hotels/rome/standard-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe"]
          },
          {
            "name": "Comfort Room",
            "description": "Spacious room with additional seating area and enhanced amenities.",
            "size": "25m²",
            "maxOccupancy": 2,
            "bedType": "1 Queen or 2 Twin beds",
            "images": ["/images/hotels/rome/comfort-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Seating Area"]
          },
          {
            "name": "Junior Suite with Balcony",
            "description": "Elegant suite featuring a private balcony with city views and a separate living area.",
            "size": "30m²",
            "maxOccupancy": 2,
            "bedType": "1 King bed",
            "images": ["/images/hotels/rome/junior-suite-balcony.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Private Balcony", "Living Area"]
          }
        ],
        "features": [
          "Close proximity to Vatican City",
          "Elegant rooftop terrace with panoramic views",
          "Complimentary private parking",
          "Cozy bar and lounge area",
          "Modern, well-equipped rooms",
          "Strategic location with easy access to public transportation"
        ],
        "thingsToDo": [
          {
            "title": "Vatican Museums",
            "description": "Explore the vast collection of art and historical artifacts housed within the Vatican.",
            "distance": "3 km",
            "duration": "3-4 hours",
            "type": "Museum",
            "image": "/images/activities/vatican-museums.jpg"
          },
          {
            "title": "St. Peter's Basilica",
            "description": "Visit the iconic basilica renowned for its Renaissance architecture and Michelangelo's dome.",
            "distance": "3.5 km",
            "duration": "1-2 hours",
            "type": "Religious Site",
            "image": "/images/activities/st-peters-basilica.jpg"
          },
          {
            "title": "Colosseum",
            "description": "Discover the ancient amphitheater that stands as a symbol of Rome's imperial past.",
            "distance": "6 km",
            "duration": "2-3 hours",
            "type": "Historical Site",
            "image": "/images/activities/colosseum.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Raganelli Lounge Bar",
            "cuisine": "Italian & International",
            "distance": "On-site",
            "priceRange": 2,
            "rating": 4.2,
            "openingHours": "5:00 PM – 11:00 PM",
            "image": "/images/restaurants/raganelli-lounge-bar.jpg",
            "description": "Offers a selection of beverages and light snacks in a relaxed setting."
          }
        ],
        "attractions": [
          {
            "name": "Vatican City",
            "type": "Religious & Cultural Site",
            "distance": "3 km",
            "openingHours": "9:00 AM – 6:00 PM",
            "price": "Varies",
            "image": "/images/attractions/vatican-city.jpg",
            "description": "Home to the Pope, the Vatican Museums, St. Peter’s Basilica, and the Sistine Chapel—this walled enclave is the spiritual heart of Catholicism."
          },
          {
            "name": "Piazza Navona",
            "type": "Historical Square",
            "distance": "5.5 km",
            "openingHours": "All day",
            "price": "Free",
            "image": "/images/attractions/piazza-navona.jpg",
            "description": "One of Rome’s most beautiful and lively squares, known for its Baroque fountains, street performers, and cafes."
          },
          {
            "name": "Trevi Fountain",
            "type": "Landmark",
            "distance": "6 km",
            "openingHours": "All day",
            "price": "Free",
            "image": "/images/attractions/trevi-fountain.jpg",
            "description": "Toss a coin into the world-famous fountain to ensure your return to Rome—an iconic photo spot and must-see."
          }
        ],
        "airportDistance": "25 km (Rome Fiumicino Airport)",
        "faqs": [
          {
            "question": "Does Raganelli Hotel offer airport shuttle service?",
            "answer": "Yes, airport transfers can be arranged on request for an additional fee."
          },
          {
            "question": "Is breakfast included in the room rate?",
            "answer": "Breakfast is available as an optional add-on or included in select room packages."
          },
          {
            "question": "Is the hotel near public transport?",
            "answer": "Yes, the hotel is well connected to Rome’s transport system with a bus stop right outside."
          },
          {
            "question": "Does the hotel have parking?",
            "answer": "Yes, free private parking is available directly in front of the hotel."
          }
        ]
      }
      
       
      
      
     
]; 
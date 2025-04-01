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

export const franceHotels: Hotel[] = [
        
    {
        "id": "campanile-val-de-france",
        "name": "Campanile Val de France",
        "slug": "campanile-val-de-france",
        "location": "Magny-le-Hongre, France",
        "city": "Magny-le-Hongre",
        "country": "France",
        "price": 120,
        "rating": 3,
        "ratings": {
          "overall": 7.5,
          "totalReviews": 4600,
          "categories": []
        },
        "coordinates": {
          "lat": 48.8761,
          "lng": 2.8023
        },
        "cardImage": "/images/hotels/france/Campanile-Val-De-France.jpg",
        "images": [
          "/images/hotels/magny-le-hongre/Campanile-Val-de-France-1.jpg",
          "/images/hotels/magny-le-hongre/Campanile-Val-de-France-2.jpg",
          "/images/hotels/magny-le-hongre/Campanile-Val-de-France-3.jpg",
          "/images/hotels/magny-le-hongre/Campanile-Val-de-France-4.jpg",
          "/images/hotels/magny-le-hongre/Campanile-Val-de-France-5.jpg"
        ],
        "highlights": [
          {
            "title": "Proximity to Disneyland® Paris",
            "description": "Just a 10-minute free shuttle ride to the Disney Parks.",
            "icon": "shuttle-van"
          },
          {
            "title": "On-Site Educational Farm",
            "description": "Features animals like ponies, goats, and rabbits for family enjoyment.",
            "icon": "paw"
          },
          {
            "title": "Scenic Lakeside Setting",
            "description": "Located by a beautiful lake, offering serene countryside views.",
            "icon": "water"
          }
        ],
        "description": {
          "short": "Charming 3-star hotel near Disneyland® Paris with family-friendly amenities and a picturesque setting.",
          "full": "Campanile Val de France is a delightful 3-star hotel situated in Magny-le-Hongre, offering guests a serene retreat just minutes away from the excitement of Disneyland® Paris. The hotel provides comfortable accommodations, on-site dining, and unique features like an educational farm, making it an ideal choice for families and Disney enthusiasts alike."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary high-speed internet access throughout the hotel."
          },
          {
            "name": "Free Shuttle to Disney Parks",
            "icon": "shuttle-van",
            "description": "Regular complimentary shuttle service to and from Disneyland® Paris."
          },
          {
            "name": "On-Site Restaurant & Bar",
            "icon": "utensils",
            "description": "Le Marché Gourmand offers buffet-style meals; Le Bar serves drinks and snacks."
          },
          {
            "name": "Educational Mini Farm",
            "icon": "paw",
            "description": "Features animals such as ponies, goats, and rabbits for guests to enjoy."
          },
          {
            "name": "Children's Play Areas",
            "icon": "child",
            "description": "Includes a merry-go-round, video games room, and outdoor playground."
          },
          {
            "name": "Free Parking",
            "icon": "parking",
            "description": "Complimentary on-site parking available for hotel guests."
          }
        ],
        "rooms": [
          {
            "name": "Standard Room",
            "description": "Bright, inviting room suitable for families, featuring comfortable bedding and modern amenities.",
            "size": "20m²",
            "maxOccupancy": 4,
            "bedType": "1 double bed and 1 set of bunk beds, or 2 single beds and 1 set of bunk beds",
            "images": ["/images/hotels/magny-le-hongre/standard-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Hairdryer"]
          }
        ],
        "features": [
          "Proximity to Disneyland® Paris",
          "On-Site Educational Farm",
          "Scenic Lakeside Setting",
          "Family-Friendly Amenities",
          "Free Shuttle Service",
          "On-Site Dining Options"
        ],
        "thingsToDo": [
          {
            "title": "Disneyland® Paris",
            "description": "Experience the magic of Disney with thrilling rides, shows, and character encounters.",
            "distance": "3 km",
            "duration": "Full day",
            "type": "Theme Park",
            "image": "/images/activities/disneyland-paris.jpg"
          },
          {
            "title": "Golf Disneyland® Paris",
            "description": "Enjoy a round of golf at this 27-hole course suitable for all skill levels.",
            "distance": "2 km",
            "duration": "2-4 hours",
            "type": "Recreation",
            "image": "/images/activities/golf-disneyland.jpg"
          },
          {
            "title": "La Vallée Village",
            "description": "Shop for luxury brands at discounted prices in this open-air shopping village.",
            "distance": "5 km",
            "duration": "2-3 hours",
            "type": "Shopping",
            "image": "/images/activities/la-vallee-village.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Le Marché Gourmand",
            "cuisine": "French",
            "distance": "On-site",
            "priceRange": 2,
            "rating": 4.0,
            "openingHours": "Breakfast: 7:00 AM – 10:30 AM; Dinner: 6:00 PM – 10:30 PM",
            "image": "/images/restaurants/le-marche-gourmand.jpg",
            "description": "Buffet-style restaurant offering a variety of French and international dishes."
          },
          {
            "name": "Le Bar",
            "cuisine": "Bar",
            "distance": "On-site",
            "priceRange": 1,
            "rating": 3.8,
            "openingHours": "8:00 AM – 12:00 AM",
            "image": "/images/restaurants/le-bar.jpg",
            "description": "Casual bar serving a selection of beverages and light snacks."
          }
        ],
        "attractions": [
          {
            "name": "Disney Village",
            "type": "Entertainment District",
            "distance": "3 km",
            "openingHours": "7:30 AM – 12:00 AM",
            "price": "Free entry",
            "image": "/images/attractions/disney-village.jpg",
            "description": "A lively entertainment complex with shops, restaurants, and live performances located just outside the Disney Parks."
        },
        {
          "name": "Sea Life Aquarium Val d'Europe",
          "type": "Aquarium",
          "distance": "5.5 km",
          "openingHours": "10:00 AM – 6:30 PM",
          "price": "$",
          "image": "/images/attractions/sea-life-val-europe.jpg",
          "description": "Family-friendly attraction featuring marine life exhibits, interactive tanks, and feeding sessions."
        },
        {
          "name": "Val d'Europe Shopping Center",
          "type": "Shopping Mall",
          "distance": "5 km",
          "openingHours": "10:00 AM – 9:00 PM",
          "price": "Free entry",
          "image": "/images/attractions/val-d-europe.jpg",
          "description": "Large indoor shopping mall with international and French brand stores, a hypermarket, and restaurants."
        }
      ],
      "airportDistance": "43 km (Charles de Gaulle Airport)",
      "faqs": [
        {
          "question": "Is there a shuttle service to Disneyland® Paris?",
          "answer": "Yes, the hotel provides a free shuttle bus to the Disney Parks and Marne-la-Vallée–Chessy station every 15–20 minutes."
        },
        {
          "question": "Is parking available at the hotel?",
          "answer": "Yes, on-site parking is available for €15 per day."
        },
        {
          "question": "Are there dining options for kids?",
          "answer": "Yes, the buffet restaurant offers a variety of dishes suitable for children, and high chairs are available."
        },
        {
          "question": "Does the hotel offer Disney Park tickets?",
          "answer": "Yes, Disney tickets can be purchased directly at the hotel’s reception."
        }
      ]
    },

    {
        "id": "ritz-paris",
        "name": "Ritz Paris",
        "slug": "ritz-paris",
        "location": "15 Place Vendôme, Paris, France",
        "city": "Paris",
        "country": "France",
        "price": 1500,
        "rating": 5,
        "ratings": {
          "overall": 9.5,
          "totalReviews": 1200,
          "categories": []
        },
        "coordinates": {
          "lat": 48.8686,
          "lng": 2.3285
        },
        "cardImage": "/images/hotels/france/Ritz-Paris.jpg",
        "images": [
          "/images/hotels/paris/ritz-paris-1.jpg",
          "/images/hotels/paris/ritz-paris-2.jpg",
          "/images/hotels/paris/ritz-paris-3.jpg",
          "/images/hotels/paris/ritz-paris-4.jpg",
          "/images/hotels/paris/ritz-paris-5.jpg"
        ],
        "highlights": [
          {
            "title": "Historic Luxury",
            "description": "Established in 1898, the Ritz Paris has been a symbol of elegance and opulence for over a century.",
            "icon": "landmark"
          },
          {
            "title": "Prime Location",
            "description": "Situated in the heart of Paris at Place Vendôme, offering easy access to the city's major attractions.",
            "icon": "map-marker-alt"
          },
          {
            "title": "World-Class Dining",
            "description": "Home to the Michelin-starred restaurant L'Espadon and the legendary Bar Hemingway.",
            "icon": "utensils"
          }
        ],
        "description": {
          "short": "Iconic 5-star hotel in Paris, renowned for its historic charm, luxurious accommodations, and exceptional service.",
          "full": "The Ritz Paris, located at 15 Place Vendôme, is a beacon of luxury and sophistication. Since its opening in 1898, it has hosted royalty, celebrities, and discerning travelers. The hotel seamlessly blends historic charm with modern amenities, offering guests an unparalleled experience in the City of Light."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary high-speed internet access throughout the hotel."
          },
          {
            "name": "Spa and Wellness Center",
            "icon": "spa",
            "description": "The Ritz Club offers a range of treatments, an indoor pool, and fitness facilities."
          },
          {
            "name": "Gourmet Restaurants",
            "icon": "utensils",
            "description": "Multiple dining options including the Michelin-starred L'Espadon."
          },
          {
            "name": "Concierge Service",
            "icon": "concierge-bell",
            "description": "24-hour concierge to assist with reservations, recommendations, and more."
          },
          {
            "name": "Luxury Boutiques",
            "icon": "shopping-bag",
            "description": "On-site high-end shopping options for discerning guests."
          },
          {
            "name": "Airport Shuttle",
            "icon": "shuttle-van",
            "description": "Private transfer services available upon request."
          }
        ],
        "rooms": [
          {
            "name": "Superior Room",
            "description": "Elegant room featuring classic French décor, offering a comfortable retreat with modern amenities.",
            "size": "35m²",
            "maxOccupancy": 2,
            "bedType": "King or Twin",
            "images": ["/images/hotels/paris/ritz-superior-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar"]
          },
          {
            "name": "Deluxe Suite",
            "description": "Spacious suite with separate living area, adorned with period furnishings and overlooking the tranquil garden.",
            "size": "55m²",
            "maxOccupancy": 3,
            "bedType": "King",
            "images": ["/images/hotels/paris/ritz-deluxe-suite.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar", "Living Room"]
          },
          {
            "name": "Coco Chanel Suite",
            "description": "Luxurious suite inspired by the iconic designer, featuring opulent décor and exclusive amenities.",
            "size": "188m²",
            "maxOccupancy": 2,
            "bedType": "King",
            "images": ["/images/hotels/paris/ritz-coco-chanel-suite.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar", "Living Room", "Dining Area"]
          }
        ],
        "features": [
          "Historic Luxury",
          "Prime Location",
          "World-Class Dining",
          "Renowned Spa",
          "Elegant Rooms and Suites",
          "Exclusive Shopping"
        ],
        "thingsToDo": [
          {
            "title": "Louvre Museum",
            "description": "Explore the world's largest art museum, home to masterpieces like the Mona Lisa.",
            "distance": "1 km",
            "duration": "2-4 hours",
            "type": "Museum",
            "image": "/images/activities/louvre-museum.jpg"
          },
          {
            "title": "Eiffel Tower",
            "description": "Visit Paris's most iconic landmark and enjoy panoramic city views.",
            "distance": "3 km",
            "duration": "1-2 hours",
            "type": "Landmark",
            "image": "/images/activities/eiffel-tower.jpg"
          },
          {
            "title": "Seine River Cruise",
            "description": "Experience Paris from the water with a scenic boat tour along the Seine.",
            "distance": "1.5 km",
            "duration": "1-2 hours",
            "type": "Tour",
            "image": "/images/activities/seine-river-cruise.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "L'Espadon",
            "cuisine": "French",
            "distance": "On-site",
            "priceRange": 4,
            "rating": 4.8,
            "openingHours": "Lunch: 12:30 PM – 2:00 PM; Dinner: 7:30 PM – 10:00 PM",
            "image": "/images/restaurants/l-espadon.jpg",
            "description": "Michelin-starred restaurant offering exquisite French cuisine in an elegant setting."
          },
          {
            "name": "Bar Vendôme",
            "cuisine": "Brasserie",
            "distance": "On-site",
            "priceRange": 3,
            "rating": 4.5
            ,
      "openingHours": "7:00 AM – 10:30 PM",
      "image": "/images/restaurants/bar-vendome.jpg",
      "description": "Chic brasserie serving classic Parisian dishes in a glass-roofed courtyard."
    },
    {
      "name": "Bar Hemingway",
      "cuisine": "Cocktails",
      "distance": "On-site",
      "priceRange": 3,
      "rating": 4.9,
      "openingHours": "6:00 PM – 2:00 AM",
      "image": "/images/restaurants/bar-hemingway.jpg",
      "description": "Legendary cocktail bar named after Ernest Hemingway, known for its intimate setting and expertly crafted drinks."
    }
  ],
  "attractions": [
    {
      "name": "Palais Garnier",
      "type": "Opera House",
      "distance": "1.2 km",
      "openingHours": "10:00 AM – 5:00 PM",
      "price": "$$",
      "image": "/images/attractions/palais-garnier.jpg",
      "description": "Opulent 19th-century opera house offering performances and guided tours of its gilded interiors."
    },
    {
      "name": "Champs-Élysées",
      "type": "Shopping Boulevard",
      "distance": "2 km",
      "openingHours": "All day",
      "price": "Free",
      "image": "/images/attractions/champs-elysees.jpg",
      "description": "Famous avenue lined with high-end boutiques, cafes, and theaters, leading to the Arc de Triomphe."
    },
    {
      "name": "Musée d'Orsay",
      "type": "Museum",
      "distance": "2 km",
      "openingHours": "9:30 AM – 6:00 PM",
      "price": "$$",
      "image": "/images/attractions/musee-dorsay.jpg",
      "description": "Museum housed in a former railway station, featuring Impressionist and Post-Impressionist masterpieces."
    }
  ],
  "airportDistance": "25 km (Charles de Gaulle Airport)",
  "faqs": [
    {
      "question": "Is airport transportation available?",
      "answer": "Yes, the hotel offers private airport transfers upon request for an additional fee."
    },
    {
      "question": "What are the check-in and check-out times?",
      "answer": "Check-in is from 3:00 PM and check-out is until 12:00 PM."
    },
    {
      "question": "Is breakfast included in the room rate?",
      "answer": "Breakfast is available at an additional cost unless otherwise stated in your reservation."
    },
    {
      "question": "Are pets allowed at the Ritz Paris?",
      "answer": "Yes, small pets are allowed upon request, and the hotel offers pet amenities."
    }
  ]
},

{
    "id": "four-seasons-hotel-george-v-paris",
    "name": "Four Seasons Hotel George V, Paris",
    "slug": "four-seasons-hotel-george-v-paris",
    "location": "31 Avenue George V, Paris, France",
    "city": "Paris",
    "country": "France",
    "price": 1500,
    "rating": 5,
    "ratings": {
      "overall": 9.6,
      "totalReviews": 1500,
      "categories": []
    },
    "coordinates": {
      "lat": 48.8686,
      "lng": 2.3005
    },
    "cardImage": "/images/hotels/france/Four-Seasons-Hotel-George-V-Paris.jpg",
    "images": [
      "/images/hotels/paris/four-seasons-george-v-1.jpg",
      "/images/hotels/paris/four-seasons-george-v-2.jpg",
      "/images/hotels/paris/four-seasons-george-v-3.jpg",
      "/images/hotels/paris/four-seasons-george-v-4.jpg",
      "/images/hotels/paris/four-seasons-george-v-5.jpg"
    ],
    "highlights": [
      {
        "title": "Historic Art Deco Landmark",
        "description": "Established in 1928, this iconic hotel embodies timeless elegance in the heart of Paris.",
        "icon": "landmark"
      },
      {
        "title": "Michelin-Starred Dining",
        "description": "Home to three renowned restaurants boasting a total of six Michelin stars.",
        "icon": "utensils"
      },
      {
        "title": "Prime Location",
        "description": "Situated just off the Champs-Élysées, offering easy access to Paris's major attractions.",
        "icon": "map-marker-alt"
      }
    ],
    "description": {
      "short": "Luxurious 5-star hotel in Paris, renowned for its historic charm, exceptional dining, and impeccable service.",
      "full": "Four Seasons Hotel George V, Paris, located at 31 Avenue George V, is a symbol of luxury and sophistication. Since its opening in 1928, it has welcomed discerning travelers seeking unparalleled service and elegance. Nestled in the Golden Triangle, the hotel offers opulent accommodations, world-class dining, and a serene spa, all within steps of the city's most celebrated landmarks."
    },
    "amenities": [
      {
        "name": "Free Wi-Fi",
        "icon": "wifi",
        "description": "Complimentary high-speed internet access throughout the hotel."
      },
      {
        "name": "Spa and Wellness Center",
        "icon": "spa",
        "description": "Offers a range of treatments, an indoor pool, and fitness facilities."
      },
      {
        "name": "Michelin-Starred Restaurants",
        "icon": "utensils",
        "description": "Three on-site restaurants with a combined total of six Michelin stars."
      },
      {
        "name": "Concierge Service",
        "icon": "concierge-bell",
        "description": "24-hour concierge to assist with reservations, recommendations, and more."
      },
      {
        "name": "Luxury Boutiques",
        "icon": "shopping-bag",
        "description": "On-site high-end shopping options for discerning guests."
      },
      {
        "name": "Airport Shuttle",
        "icon": "shuttle-van",
        "description": "Private transfer services available upon request."
      }
    ],
    "rooms": [
      {
        "name": "Superior Room",
        "description": "Elegant room featuring classic French décor, offering a comfortable retreat with modern amenities.",
        "size": "37m²",
        "maxOccupancy": 2,
        "bedType": "King or Twin",
        "images": ["/images/hotels/paris/four-seasons-superior-room.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar"]
      },
      {
        "name": "Deluxe Suite",
        "description": "Spacious suite with separate living area, adorned with period furnishings and offering city views.",
        "size": "50m²",
        "maxOccupancy": 3,
        "bedType": "King",
        "images": ["/images/hotels/paris/four-seasons-deluxe-suite.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar", "Living Room"]
      },
      {
        "name": "Penthouse Suite",
        "description": "Luxurious suite with panoramic views of Paris, featuring a private terrace and opulent amenities.",
        "size": "160m²",
        "maxOccupancy": 2,
        "bedType": "King",
        "images": ["/images/hotels/paris/four-seasons-penthouse-suite.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar", "Private Terrace"]
      }
    ],
    "features": [
      "Historic Art Deco Architecture",
      "Michelin-Starred Dining",
      "Prime Central Location",
      "Luxurious Spa Facilities",
      "Elegant Rooms and Suites",
      "Exclusive Shopping Experience"
    ],
    "thingsToDo": [
      {
        "title": "Champs-Élysées",
        "description": "Stroll along Paris's most famous avenue, lined with shops, cafés, and theaters.",
        "distance": "0.3 km",
        "duration": "1-2 hours",
        "type": "Sightseeing",
        "image": "/images/activities/champs-elysees.jpg"
      },
      {
        "title": "Eiffel Tower",
        "description": "Visit the iconic landmark and enjoy breathtaking views of the city.",
        "distance": "1.5 km",
        "duration": "2-3 hours",
        "type": "Landmark",
        "image": "/images/activities/eiffel-tower.jpg"
      },
      {
        "title": "Louvre Museum",
        "description": "Explore the world's largest art museum, home to masterpieces like the Mona Lisa.",
        "distance": "2 km",
        "duration": "2-4 hours",
        "type": "Museum",
        "image": "/images/activities/louvre-museum.jpg"
      }
    ],
    "restaurants": [
      {
        "name": "Le Cinq",
        "cuisine": "French",
        "distance": "On-site",
        "priceRange": 4,
        "rating": 4.9,
        "openingHours": "Lunch: 12:30 PM – 2:00 PM; Dinner: 7:00 PM – 10:00 PM",
        "image": "/images/restaurants/le-cinq.jpg",
        "description": "Three Michelin-starred restaurant offering refined French cuisine in an opulent dining room."
    },
    {
      "name": "Le George",
      "cuisine": "Mediterranean",
      "distance": "On-site",
      "priceRange": 4,
      "rating": 4.8,
      "openingHours": "Lunch: 12:30 PM – 2:30 PM; Dinner: 7:00 PM – 10:30 PM",
      "image": "/images/restaurants/le-george.jpg",
      "description": "One Michelin-starred restaurant serving contemporary Mediterranean cuisine in a chic setting."
    },
    {
      "name": "L'Orangerie",
      "cuisine": "French Contemporary",
      "distance": "On-site",
      "priceRange": 4,
      "rating": 4.7,
      "openingHours": "Breakfast: 7:00 AM – 10:30 AM; Dinner: 7:00 PM – 10:30 PM",
      "image": "/images/restaurants/l-orangerie.jpg",
      "description": "Award-winning French restaurant with a focus on light, plant-based dishes and garden ambiance."
    },
    {
      "name": "La Galerie",
      "cuisine": "French Café",
      "distance": "On-site",
      "priceRange": 3,
      "rating": 4.6,
      "openingHours": "10:00 AM – 11:00 PM",
      "image": "/images/restaurants/la-galerie.jpg",
      "description": "Relaxed all-day dining lounge with classic French options and live piano in the evening."
    }
  ],
  "attractions": [
    {
      "name": "Palais de Tokyo",
      "type": "Contemporary Art Museum",
      "distance": "1.3 km",
      "openingHours": "10:00 AM – 10:00 PM",
      "price": "$$",
      "image": "/images/attractions/palais-de-tokyo.jpg",
      "description": "Cutting-edge contemporary art space offering exhibits and installations in a massive riverside venue."
    },
    {
      "name": "Trocadéro Gardens",
      "type": "Park & Landmark Views",
      "distance": "2 km",
      "openingHours": "All day",
      "price": "Free",
      "image": "/images/attractions/trocadero-gardens.jpg",
      "description": "Beautiful landscaped gardens with one of the best views of the Eiffel Tower."
    },
    {
      "name": "Musée Yves Saint Laurent",
      "type": "Fashion Museum",
      "distance": "1.5 km",
      "openingHours": "11:00 AM – 6:00 PM",
      "price": "$$",
      "image": "/images/attractions/yves-saint-laurent-museum.jpg",
      "description": "Dedicated museum showcasing the legacy and fashion collections of Yves Saint Laurent."
    }
  ],
  "airportDistance": "25 km (Charles de Gaulle Airport)",
  "faqs": [
    {
      "question": "Does the hotel offer transportation to the airport?",
      "answer": "Yes, private transfers to and from the airport can be arranged upon request for an additional charge."
    },
    {
      "question": "What are the check-in and check-out times?",
      "answer": "Check-in begins at 3:00 PM and check-out is until 12:00 PM."
    },
    {
      "question": "Are pets allowed at the hotel?",
      "answer": "Yes, pets are allowed and will be pampered with special amenities during their stay."
    },
    {
      "question": "Is the spa accessible to non-guests?",
      "answer": "Yes, the spa and wellness facilities are open to non-resident guests upon appointment."
    }
  ]
}

   
  

       
      
    
      
   
           

      
      
       
      
     
]; 
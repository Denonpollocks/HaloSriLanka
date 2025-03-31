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

export const maldivesHotels: Hotel[] = [
        
    {
        "id": "cinnamon-hakuraa-huraa-maldives",
        "name": "Cinnamon Hakuraa Huraa Maldives",
        "slug": "cinnamon-hakuraa-huraa-maldives",
        "location": "Meemu Atoll, Maldives",
        "city": "Hakuraa Huraa",
        "country": "Maldives",
        "price": 680,
        "rating": 4.5,
        "ratings": {
          "overall": 9.2,
          "totalReviews": 3051,
          "categories": []
        },
        "coordinates": {
          "lat": 2.8516,
          "lng": 73.5431
        },
        "images": [
          "/images/hotels/maldives/Cinnamon-Hakuraa-Huraa-1.jpg",
          "/images/hotels/maldives/Cinnamon-Hakuraa-Huraa-2.jpg",
          "/images/hotels/maldives/Cinnamon-Hakuraa-Huraa-3.jpg",
          "/images/hotels/maldives/Cinnamon-Hakuraa-Huraa-4.jpg",
          "/images/hotels/maldives/Cinnamon-Hakuraa-Huraa-5.jpg"
        ],
        "highlights": [
          {
            "title": "Overwater Villas",
            "description": "Luxurious villas perched over the lagoon with direct water access.",
            "icon": "home"
          },
          {
            "title": "All-Inclusive Dining",
            "description": "Diverse culinary experiences included in your stay.",
            "icon": "utensils"
          },
          {
            "title": "Platinum Island",
            "description": "Exclusive adults-only area offering privacy and premium amenities.",
            "icon": "user-lock"
          }
        ],
        "description": {
          "short": "An upscale all-inclusive resort offering overwater and beach villas in the serene Meemu Atoll.",
          "full": "Cinnamon Hakuraa Huraa Maldives provides guests with a luxurious escape featuring overwater and beach villas set against the pristine backdrop of Meemu Atoll. The resort boasts all-inclusive dining, a world-class spa, and the exclusive Platinum Island for adults seeking privacy and tranquility."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary internet access throughout the resort."
          },
          {
            "name": "Spa & Wellness Center",
            "icon": "spa",
            "description": "Indulge in rejuvenating treatments at the on-site spa."
          },
          {
            "name": "Water Sports",
            "icon": "swimmer",
            "description": "Enjoy activities like snorkeling, windsurfing, and canoeing."
          },
          {
            "name": "Fitness Center",
            "icon": "dumbbell",
            "description": "Stay active with modern exercise equipment."
          },
          {
            "name": "Private Beach",
            "icon": "umbrella-beach",
            "description": "Relax on the resort's exclusive white sandy beaches."
          },
          {
            "name": "Airport Transfers",
            "icon": "plane",
            "description": "Seaplane transfers from Malé International Airport."
          }
        ],
        "rooms": [
          {
            "name": "Overwater Villa",
            "description": "Spacious villas with direct lagoon access and panoramic ocean views.",
            "size": "70m²",
            "maxOccupancy": 2,
            "bedType": "King",
            "images": ["/images/hotels/maldives/Overwater-Villa.jpg"],
            "amenities": ["Free Wi-Fi", "Minibar", "Air Conditioning", "Private Deck", "Flat-Screen TV"]
          },
          {
            "name": "Beach Bungalow",
            "description": "Cozy bungalows nestled along the shoreline with beach access.",
            "size": "65m²",
            "maxOccupancy": 2,
            "bedType": "King",
            "images": ["/images/hotels/maldives/Beach-Bungalow.jpg"],
            "amenities": ["Free Wi-Fi", "Minibar", "Air Conditioning", "Private Terrace", "Flat-Screen TV"]
          },
          {
            "name": "Platinum Beach Bungalow",
            "description": "Exclusive adults-only bungalows offering premium amenities and privacy.",
            "size": "75m²",
            "maxOccupancy": 2,
            "bedType": "King",
            "images": ["/images/hotels/maldives/Platinum-Beach-Bungalow.jpg"],
            "amenities": ["Free Wi-Fi", "Minibar", "Air Conditioning", "Private Terrace", "Flat-Screen TV"]
          }
        ],
        "features": [
          "Overwater Villas",
          "All-Inclusive Dining",
          "Platinum Island",
          "Spa & Wellness Center",
          "Water Sports",
          "Private Beach"
        ],
        "thingsToDo": [
          {
            "title": "Snorkeling Excursions",
            "description": "Explore vibrant coral reefs and marine life.",
            "distance": "On-site",
            "duration": "2 hours",
            "type": "Adventure",
            "image": "/images/activities/snorkeling-maldives.jpg"
          },
          {
            "title": "Dolphin Watching",
            "description": "Witness playful dolphins in their natural habitat.",
            "distance": "5 km",
            "duration": "3 hours",
            "type": "Wildlife",
            "image": "/images/activities/dolphin-watching-maldives.jpg"
          },
          {
            "title": "Island Hopping",
            "description": "Discover nearby islands and experience local culture.",
            "distance": "Varies",
            "duration": "Half-day",
            "type": "Cultural",
            "image": "/images/activities/island-hopping-maldives.jpg"
          }
        ],
          "restaurants": [
          {
            "name": "Malaafaiy Restaurant",
            "cuisine": "International Buffet",
            "distance": "On-site",
            "priceRange": 3,
            "rating": 4.5,
            "openingHours": "7:00 AM - 10:00 PM",
            "image": "/images/restaurants/malaafaiy-restaurant.jpg",
            "description": "Offers a diverse buffet with global cuisines and live cooking stations."
          },
          {
            "name": "Nalha Falhu Lounge & Bar",
            "cuisine": "Bar",
            "distance": "On-site",
            "priceRange": 2,
            "rating": 4.3,
            "openingHours": "10:00 AM - 12:00 AM",
            "image": "/images/restaurants/nalha-falhu-bar.jpg",
            "description": "Relax with a wide selection of cocktails, wines, and spirits while enjoying lagoon views."
          },
          {
            "name": "Vevu Bar & Grill",
            "cuisine": "Grill / À la carte",
            "distance": "Platinum Island (adults-only)",
            "priceRange": 4,
            "rating": 4.6,
            "openingHours": "7:00 PM - 10:00 PM",
            "image": "/images/restaurants/vevu-bar-grill.jpg",
            "description": "An exclusive beachfront dining experience with fresh grilled seafood and premium cuts."
          }
        ],
        "attractions": [
          {
            "name": "Meemu Atoll Reefs",
            "type": "Natural",
            "distance": "Direct access",
            "openingHours": "All day",
            "price": "Free",
            "image": "/images/attractions/meemu-reef.jpg",
            "description": "Colorful coral reefs teeming with marine life ideal for snorkeling and diving."
          },
          {
            "name": "Local Island Visit",
            "type": "Cultural Experience",
            "distance": "6 km",
            "openingHours": "By tour schedule",
            "price": "$$",
            "image": "/images/attractions/local-island-visit.jpg",
            "description": "Learn about traditional Maldivian island life on nearby inhabited islands."
          },
          {
            "name": "Sunset Cruise",
            "type": "Leisure",
            "distance": "Departing from resort",
            "openingHours": "Evenings",
            "price": "$$",
            "image": "/images/attractions/sunset-cruise-maldives.jpg",
            "description": "Romantic boat ride during golden hour with views of the setting sun over the Indian Ocean."
          }
        ],
        "airportDistance": "145 km (via seaplane)",
        "faqs": [
          {
            "question": "How do I reach the resort from Malé International Airport?",
            "answer": "Guests arrive via a scenic 45-minute seaplane transfer arranged by the resort."
          },
          {
            "question": "Is the resort all-inclusive?",
            "answer": "Yes, all meals, selected beverages, and non-motorized water sports are included."
          },
          {
            "question": "Is the resort adults-only?",
            "answer": "The Platinum Island section is adults-only, while the main island is family-friendly."
          },
          {
            "question": "Are there vegetarian or halal food options?",
            "answer": "Yes, the resort caters to various dietary requirements including vegetarian and halal options."
          }
        ]
      },
      {
        "id": "cinnamon-velifushi-maldives",
        "name": "Cinnamon Velifushi Maldives",
        "slug": "cinnamon-velifushi-maldives",
        "location": "Vaavu Atoll, Maldives",
        "city": "Aarah",
        "country": "Maldives",
        "price": 700,
        "rating": 5,
        "ratings": {
          "overall": 9.2,
          "totalReviews": 3051,
          "categories": []
        },
        "coordinates": {
          "lat": 3.4707,
          "lng": 73.5417
        },
        "images": [
          "/images/hotels/maldives/Cinnamon-Velifushi-1.jpg",
          "/images/hotels/maldives/Cinnamon-Velifushi-2.jpg",
          "/images/hotels/maldives/Cinnamon-Velifushi-3.jpg",
          "/images/hotels/maldives/Cinnamon-Velifushi-4.jpg",
          "/images/hotels/maldives/Cinnamon-Velifushi-5.jpg"
        ],
        "highlights": [
          {
            "title": "Overwater Villas",
            "description": "Luxurious villas with direct lagoon access and panoramic ocean views.",
            "icon": "home"
          },
          {
            "title": "All-Inclusive Dining",
            "description": "Diverse culinary experiences included in your stay.",
            "icon": "utensils"
          },
          {
            "title": "World-Class Diving",
            "description": "Access to some of the Maldives' best diving spots teeming with marine life.",
            "icon": "fish"
          }
        ],
        "description": {
          "short": "A luxurious 5-star resort offering overwater and beach villas in the pristine Vaavu Atoll.",
          "full": "Cinnamon Velifushi Maldives is a luxurious 5-star resort located in the unspoiled beauty of Vaavu Atoll. The resort features elegant overwater and beach villas, all-inclusive dining options, and access to some of the Maldives' most vibrant marine ecosystems. Guests can indulge in world-class diving, relax at the spa, and enjoy unparalleled hospitality in a serene island setting."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary internet access throughout the resort."
          },
          {
            "name": "Spa & Wellness Center",
            "icon": "spa",
            "description": "Indulge in rejuvenating treatments at the on-site spa."
          },
          {
            "name": "Water Sports",
            "icon": "swimmer",
            "description": "Enjoy activities like snorkeling, diving, and windsurfing."
          },
          {
            "name": "Fitness Center",
            "icon": "dumbbell",
            "description": "Stay active with modern exercise equipment."
          },
          {
            "name": "Private Beach",
            "icon": "umbrella-beach",
            "description": "Relax on the resort's exclusive white sandy beaches."
          },
          {
            "name": "Airport Transfers",
            "icon": "plane",
            "description": "Speedboat or seaplane transfers from Malé International Airport."
          }
        ],
        "rooms": [
          {
            "name": "Overwater Villa",
            "description": "Spacious villas with direct lagoon access and panoramic ocean views.",
            "size": "100m²",
            "maxOccupancy": 3,
            "bedType": "King",
            "images": ["/images/hotels/maldives/Overwater-Villa.jpg"],
            "amenities": ["Free Wi-Fi", "Minibar", "Air Conditioning", "Private Deck", "Flat-Screen TV"]
          },
          {
            "name": "Beach Bungalow",
            "description": "Cozy bungalows nestled along the shoreline with beach access.",
            "size": "65m²",
            "maxOccupancy": 3,
            "bedType": "King",
            "images": ["/images/hotels/maldives/Beach-Bungalow.jpg"],
            "amenities": ["Free Wi-Fi", "Minibar", "Air Conditioning", "Private Terrace", "Flat-Screen TV"]
          },
          {
            "name": "Sunset Water Suite",
            "description": "Exclusive suites offering breathtaking sunset views over the ocean.",
            "size": "110m²",
            "maxOccupancy": 3,
            "bedType": "King",
            "images": ["/images/hotels/maldives/Sunset-Water-Suite.jpg"],
            "amenities": ["Free Wi-Fi", "Minibar", "Air Conditioning", "Private Deck", "Flat-Screen TV"]
          }
        ],
        "features": [
          "Overwater Villas",
          "All-Inclusive Dining",
          "World-Class Diving",
          "Spa & Wellness Center",
          "Water Sports",
          "Private Beach"
        ],
        "thingsToDo": [
          {
            "title": "Snorkeling Excursions",
            "description": "Explore vibrant coral reefs and marine life.",
            "distance": "On-site",
            "duration": "2 hours",
            "type": "Adventure",
            "image": "/images/activities/snorkeling-maldives.jpg"
          },
          {
            "title": "Dolphin Watching",
            "description": "Witness playful dolphins in their natural habitat.",
            "distance": "5 km",
            "duration": "3 hours",
            "type": "Wildlife",
            "image": "/images/activities/dolphin-watching-maldives.jpg"
          },
          {
            "title": "Island Hopping",
            "description": "Discover nearby islands and experience local culture.",
            "distance": "Varies",
            "duration": "Half-day",
            "type": "Cultural",
            "image": "/images/activities/island-hopping-maldives.jpg"
          }
        ],
       "restaurants": [
    {
      "name": "Vah Restaurant",
      "cuisine": "International Buffet",
      "distance": "On-site",
      "priceRange": 3,
      "rating": 4.5,
      "openingHours": "Breakfast: 7:30 AM - 9:30 AM, Lunch: 12:30 PM - 2:30 PM, Dinner: 7:30 PM - 9:30 PM",
      "image": "/images/restaurants/vah-restaurant.jpg",
      "description": "Offers a diverse buffet with global cuisines and live cooking stations."
    },
    {
      "name": "Marlin Restaurant",
      "cuisine": "Seafood",
      "distance": "On-site",
      "priceRange": 4,
      "rating": 4.7,
      "openingHours": "Lunch: 12:30 PM - 2:30 PM, Dinner: 7:00 PM - 11:00 PM",
      "image": "/images/restaurants/marlin-restaurant.jpg",
      "description": "Overwater dining experience specializing in fresh seafood and ocean-inspired dishes."
    },
    {
      "name": "Hama Rhythmic Bar",
      "cuisine": "Bar",
      "distance": "On-site",
      "priceRange": 2,
      "rating": 4.4,
      "openingHours": "8:00 PM - Until last guest leaves",
      "image": "/images/restaurants/hama-rhythmic-bar.jpg",
      "description": "Lively bar offering exotic cocktails, live music, and a vibrant atmosphere."
    },
    {
      "name": "Fen Pool Bar",
      "cuisine": "Bar",
      "distance": "On-site",
      "priceRange": 2,
      "rating": 4.3,
      "openingHours": "8:00 AM - 12:00 AM",
      "image": "/images/restaurants/fen-pool-bar.jpg",
      "description": "Relaxed poolside bar serving refreshing beverages and light snacks throughout the day."
    },
    {
      "name": "Iru Beach Bar",
      "cuisine": "Bar",
      "distance": "On-site",
      "priceRange": 2,
      "rating": 4.2,
      "openingHours": "10:00 AM - 6:00 PM",
      "image": "/images/restaurants/iru-beach-bar.jpg",
      "description": "Beachfront bar offering cocktails, fresh juices, and signature gelato with stunning ocean views."
    }
  ],
  "attractions": [
    {
      "name": "Alimatha Island",
      "type": "Island",
      "distance": "15 km",
      "openingHours": "All day",
      "price": "$$",
      "image": "/images/attractions/alimatha-island.jpg",
      "description": "Popular island known for its pristine beaches and excellent diving spots."
    },
    {
      "name": "Shipwreck Dive Site",
      "type": "Diving",
      "distance": "10 km",
      "openingHours": "By tour schedule",
      "price": "$$$",
      "image": "/images/attractions/shipwreck-dive.jpg",
      "description": "Explore an underwater shipwreck teeming with marine life, suitable for experienced divers."
    },
    {
      "name": "Local Village Tour",
      "type": "Cultural Experience",
      "distance": "Varies",
      "openingHours": "By tour schedule",
      "price": "$",
      "image": "/images/attractions/local-village-tour.jpg",
      "description": "Visit nearby inhabited islands to experience traditional Maldivian culture and lifestyle."
    }
  ],
  "airportDistance": "90 km (via speedboat or seaplane)",
  "faqs": [
    {
      "question": "What are the transfer options from Malé International Airport?",
      "answer": "Guests can choose between a 20-minute seaplane transfer or a 90-minute speedboat ride to reach the resort."
    },
    {
      "question": "Is there a dress code for the restaurants?",
      "answer": "While the resort maintains a relaxed atmosphere, smart casual attire is recommended for dinner at the restaurants."
    },
    {
      "question": "Are there facilities for children?",
      "answer": "Yes, the resort offers family-friendly accommodations and activities suitable for children."
    },
    {
      "question": "What languages are spoken by the staff?",
      "answer": "The staff is proficient in English and several other languages to cater to international guests."
    }
  ]
},

{
  "id": "ellaidhoo-maldives-by-cinnamon",
  "name": "Ellaidhoo Maldives by Cinnamon",
  "slug": "ellaidhoo-maldives-by-cinnamon",
  "location": "Alif Alif Atoll, Maldives",
  "city": "Ellaidhoo",
  "country": "Maldives",
  "price": 350,
  "rating": 4,
  "ratings": {
    "overall": 8.5,
    "totalReviews": 1200,
    "categories": []
  },
  "coordinates": {
    "lat": 4.0045,
    "lng": 72.9460
  },
  "images": [
    "/images/hotels/maldives/Ellaidhoo-1.jpg",
    "/images/hotels/maldives/Ellaidhoo-2.jpg",
    "/images/hotels/maldives/Ellaidhoo-3.jpg",
    "/images/hotels/maldives/Ellaidhoo-4.jpg",
    "/images/hotels/maldives/Ellaidhoo-5.jpg"
  ],
  "highlights": [
    {
      "title": "Exceptional House Reef",
      "description": "Renowned for its vibrant house reef, offering unparalleled snorkeling and diving experiences.",
      "icon": "fish"
    },
    {
      "title": "Overwater and Beach Accommodations",
      "description": "Choose between charming beach bungalows and luxurious overwater villas with stunning ocean views.",
      "icon": "home"
    },
    {
      "title": "All-Inclusive Packages",
      "description": "Comprehensive packages covering meals, beverages, and select activities for a hassle-free stay.",
      "icon": "utensils"
    }
  ],
  "description": {
    "short": "A 4-star resort celebrated for its exceptional house reef and diverse accommodations in the Maldives.",
    "full": "Ellaidhoo Maldives by Cinnamon is a 4-star resort situated in the picturesque Alif Alif Atoll. The resort offers guests a unique blend of comfort and adventure, featuring an extraordinary house reef ideal for snorkeling and diving enthusiasts. Accommodations range from beach bungalows nestled among palm trees to overwater villas with panoramic ocean vistas. With all-inclusive packages, guests can indulge in a variety of dining options and activities, ensuring a memorable island getaway."
  },
  "amenities": [
    {
      "name": "Free Wi-Fi",
      "icon": "wifi",
      "description": "Stay connected with complimentary internet access throughout the resort."
    },
    {
      "name": "Infinity Pool",
      "icon": "swimmer",
      "description": "Relax in the resort's infinity pool overlooking the turquoise waters."
    },
    {
      "name": "Diving Center",
      "icon": "fish",
      "description": "Certified PADI diving center offering courses and excursions to explore the vibrant marine life."
    },
    {
      "name": "Spa Services",
      "icon": "spa",
      "description": "Rejuvenate with a range of spa treatments designed to relax and revitalize."
    },
    {
      "name": "Fitness Center",
      "icon": "dumbbell",
      "description": "Maintain your workout routine with access to modern fitness equipment."
    },
    {
      "name": "Airport Transfers",
      "icon": "plane",
      "description": "Convenient seaplane or speedboat transfers from Malé International Airport."
    }
  ],
  "rooms": [
    {
      "name": "Standard Room",
      "description": "Cozy rooms located amidst the island's lush gardens, offering a tranquil retreat.",
      "size": "35m²",
      "maxOccupancy": 2,
      "bedType": "King",
      "images": ["/images/hotels/maldives/Standard-Room.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
    },
    {
      "name": "Beach Bungalow",
      "description": "Spacious bungalows with direct beach access and stunning sea views.",
      "size": "45m²",
      "maxOccupancy": 3,
      "bedType": "King",
      "images": ["/images/hotels/maldives/Beach-Bungalow.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom", "Outdoor Shower"]
    },
    {
      "name": "Water Bungalow",
      "description": "Luxurious overwater villas with private decks and direct lagoon access.",
      "size": "55m²",
      "maxOccupancy": 3,
      "bedType": "King",
      "images": ["/images/hotels/maldives/Water-Bungalow.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom", "Private Deck"]
    }
  ],
  "features": [
    "Exceptional House Reef",
    "Overwater and Beach Accommodations",
    "All-Inclusive Packages",
    "Infinity Pool",
    "Diving Center",
    "Spa Services"
  ],
  "thingsToDo": [
    {
      "title": "Snorkeling on the House Reef",
      "description": "Discover the vibrant marine life just steps from the shore.",
      "distance": "On-site",
      "duration": "Flexible",
      "type": "Adventure",
      "image": "/images/activities/snorkeling-ellaidhoo.jpg"
    },
    {
      "title": "Scuba Diving Excursions",
      "description": "Explore renowned dive sites with experienced instructors.",
      "distance": "Varies",
      "duration": "Half-day",
      "type": "Adventure",
      "image": "/images/activities/scuba-diving-ellaidhoo.jpg"
    },
    {
      "title": "Sunset Fishing Trips",
      "description": "Experience traditional Maldivian fishing at dusk.",
      "distance": "Off-site",
      "duration": "3 hours",
      "type": "Cultural",
      "image": "/images/activities/sunset-fishing-ellaidhoo.jpg"
    }
  ],
  "restaurants": [
    {
      "name": "Madi Restaurant",
      "cuisine": "International Buffet",
      "distance": "On-site",
      "priceRange": 3,
      "rating": 4.5,
      "openingHours": "Breakfast: 7:00 AM - 10:00 AM, Lunch: 12:30 PM - 2:30 PM, Dinner: 7:30 PM - 9:30 PM",
      "image": "/images/restaurants/madi-restaurant.jpg",
      "description": "Offers a diverse buffet with global cuisines and live cooking stations."
    },
    {
      "name": "Iruohsnee Bar",
      "cuisine": "Bar",
      "distance": "On-site",
      "priceRange": 2,
      "rating": 4.3,
      "openingHours": "9:00 AM - Until last guest leaves",
      "image": "/images/restaurants/iruohsnee-bar.jpg",
      "description": "Relax with tropical cocktails and ocean views, perfect for sunset evenings."
    },
    {
      "name": "The Malamathi Bar",
      "cuisine": "Snacks & Drinks",
      "distance": "Poolside",
      "priceRange": 2,
      "rating": 4.0,
      "openingHours": "10:00 AM - 10:00 PM",
      "image": "/images/restaurants/malamathi-bar.jpg",
      "description": "Offers light bites, drinks, and a casual setting next to the infinity pool."
    }
  ],
  "attractions": [
    {
      "name": "Maaya Thila Dive Site",
      "type": "Diving",
      "distance": "25 km",
      "openingHours": "By excursion",
      "price": "$$$",
      "image": "/images/attractions/maaya-thila.jpg",
      "description": "One of the top dive sites in the Maldives, known for reef sharks and coral walls."
    },
    {
      "name": "North Ari Atoll Excursions",
      "type": "Adventure",
      "distance": "Varies",
      "openingHours": "Tour-based",
      "price": "$$",
      "image": "/images/attractions/north-ari-atoll.jpg",
      "description": "Enjoy dolphin watching, sandbank picnics, and cultural island tours."
    },
    {
      "name": "Stargazing on the Jetty",
      "type": "Relaxation",
      "distance": "On-site",
      "openingHours": "Night",
      "price": "Free",
      "image": "/images/attractions/stargazing-ellaidhoo.jpg",
      "description": "Unwind under a clear Maldivian sky for a magical night-time experience."
    }
  ],
  "airportDistance": "42 km (25 min by seaplane or 90 min by speedboat)",
  "faqs": [
    {
      "question": "How do I get to the resort from the airport?",
      "answer": "You can choose a 25-minute scenic seaplane ride or a 90-minute speedboat transfer from Malé International Airport."
    },
    {
      "question": "Is the house reef suitable for beginners?",
      "answer": "Yes, the house reef is ideal for both beginners and advanced snorkelers and divers."
    },
    {
      "question": "Do rooms have direct beach or lagoon access?",
      "answer": "Yes, beach bungalows offer direct access to the beach, and water bungalows provide private lagoon entry."
    },
    {
      "question": "Is the resort all-inclusive?",
      "answer": "All-inclusive meal plans are available and include meals, drinks, and selected activities."
    }
  ]
}

   
           

      
      
       
      
     
]; 
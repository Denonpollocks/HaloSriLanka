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

export const indonesiaHotels: Hotel[] = [
        
  
  {
    "id": "ayana-resort-and-spa-bali",
    "name": "AYANA Resort and Spa Bali",
    "slug": "ayana-resort-and-spa-bali",
    "location": "Jimbaran, Bali, Indonesia",
    "city": "Jimbaran",
    "country": "Indonesia",
    "price": 350,
    "rating": 5,
    "ratings": {
      "overall": 9.2,
      "totalReviews": 5000,
      "categories": []
    },
    "coordinates": {
      "lat": -8.7904,
      "lng": 115.1550
    },
    "images": [
      "/images/hotels/bali/ayana-resort-1.jpg",
      "/images/hotels/bali/ayana-resort-2.jpg",
      "/images/hotels/bali/ayana-resort-3.jpg",
      "/images/hotels/bali/ayana-resort-4.jpg",
      "/images/hotels/bali/ayana-resort-5.jpg"
    ],
    "highlights": [
      {
        "title": "Cliffside Ocean Views",
        "description": "Perched atop cliffs overlooking Jimbaran Bay, offering breathtaking sunsets and panoramic sea vistas.",
        "icon": "water"
      },
      {
        "title": "World-Class Spa",
        "description": "Home to the renowned Spa on the Rocks, providing unique treatments amidst stunning ocean surroundings.",
        "icon": "spa"
      },
      {
        "title": "Diverse Dining Options",
        "description": "Features 19 restaurants and bars, including the iconic Rock Bar, offering a variety of culinary experiences.",
        "icon": "utensils"
      }
    ],
    "description": {
      "short": "Luxurious 5-star resort in Bali, renowned for its cliffside views, exceptional spa services, and diverse dining experiences.",
      "full": "AYANA Resort and Spa Bali is a sprawling 90-hectare luxury resort perched on the cliffs above Jimbaran Bay. Offering a blend of traditional Balinese elegance and modern amenities, the resort provides guests with unparalleled ocean views, a world-class spa, and an array of dining options. With its expansive gardens, private beach, and multiple swimming pools, AYANA ensures a serene and indulgent getaway."
    },
    "amenities": [
      {
        "name": "Free Wi-Fi",
        "icon": "wifi",
        "description": "Complimentary high-speed internet access throughout the resort."
      },
      {
        "name": "Spa and Wellness Center",
        "icon": "spa",
        "description": "Offers over 40 rejuvenating treatments, including thalassotherapy and the iconic Spa on the Rocks."
      },
      {
        "name": "Multiple Swimming Pools",
        "icon": "swimming-pool",
        "description": "14 unique pools, including an infinity pool overlooking the Indian Ocean."
      },
      {
        "name": "Private Beach",
        "icon": "umbrella-beach",
        "description": "Secluded white-sand beach accessible exclusively to resort guests."
      },
      {
        "name": "Golf Putting Course",
        "icon": "golf-ball",
        "description": "18-hole golf putting course set within the resort's lush gardens."
      },
      {
        "name": "Fitness Center",
        "icon": "dumbbell",
        "description": "24/7 fitness facilities equipped with modern exercise equipment."
      }
    ],
    "rooms": [
      {
        "name": "Resort View Room",
        "description": "Elegant room with private balcony overlooking the resort's tropical gardens.",
        "size": "48m²",
        "maxOccupancy": 3,
        "bedType": "King or Twin",
        "images": ["/images/hotels/bali/ayana-resort-view-room.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar"]
      },
      {
        "name": "Ocean View Suite",
        "description": "Spacious suite with separate living area and panoramic views of Jimbaran Bay.",
        "size": "98m²",
        "maxOccupancy": 3,
        "bedType": "King",
        "images": ["/images/hotels/bali/ayana-ocean-view-suite.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar", "Living Room"]
      },
      {
        "name": "Cliff Villa",
        "description": "Luxurious private villa with plunge pool, offering uninterrupted ocean views from a secluded cliffside location.",
        "size": "300m²",
        "maxOccupancy": 3,
        "bedType": "King",
        "images": ["/images/hotels/bali/ayana-cliff-villa.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar", "Private Pool", "Butler Service"]
      }
    ],
    "features": [
      "Cliffside Ocean Views",
      "World-Class Spa",
      "Diverse Dining Options",
      "Multiple Swimming Pools",
      "Private Beach Access",
      "Lush Tropical Gardens"
    ],
    "thingsToDo": [
      {
        "title": "Uluwatu Temple",
        "description": "Visit the iconic sea temple perched on a cliff, renowned for its traditional Kecak dance performances at sunset.",
        "distance": "10 km",
        "duration": "2-3 hours",
        "type": "Cultural",
        "image": "/images/activities/uluwatu-temple.jpg"
      },
      {
        "title": "Jimbaran Seafood Dining",
        "description": "Experience beachfront dining with fresh seafood grilled to perfection along Jimbaran Bay.",
        "distance": "5 km",
        "duration": "2 hours",
        "type": "Culinary",
        "image": "/images/activities/jimbaran-seafood.jpg"
      },
      {
        "title": "Balinese Cooking Class",
        "description": "Learn the art of traditional Balinese cuisine with hands-on cooking classes led by expert chefs.",
        "distance": "On-site",
        "duration": "3 hours",
        "type": "Culinary",
        "image": "/images/activities/balinese-cooking-class.jpg"
      }
    ],
    "restaurants": [
      {
        "name": "Rock Bar",
        "cuisine": "Bar",
        "distance": "On-site",
        "priceRange": 3,
        "rating": 4.7,
        "openingHours": "4:00 PM – 12:00 AM",
        "image": "/images/restaurants/rock-bar.jpg",
        "description": "Iconic open-air bar perched on natural rocks with stunning ocean views and signature cocktails."
      },
      {
        "name": "DAVA Steak & Seafood",
        "cuisine": "Steakhouse / Seafood",
        "distance": "On-site",
        "priceRange": 4,
        "rating": 4.6,
        "openingHours": "6:30 PM – 11:00 PM",
        "image": "/images/restaurants/dava-steak-seafood.jpg",
        "description": "Upscale dining featuring premium steaks, fresh seafood, and fine wines in a modern setting."
      },
      {
        "name": "Sami Sami",
        "cuisine": "Italian",
        "distance": "On-site",
        "priceRange": 3,
        "rating": 4.4,
        "openingHours": "12:00 PM – 10:00 PM",
        "image": "/images/restaurants/sami-sami.jpg",
        "description": "Cliff-edge Italian restaurant offering pasta, pizza, and panoramic ocean views."
      },
      {
        "name": "Kubu Beach Club",
        "cuisine": "Beach Grill",
        "distance": "On-site",
        "priceRange": 2,
        "rating": 4.5,
        "openingHours": "10:00 AM – 6:00 PM",
        "image": "/images/restaurants/kubu-beach-club.jpg",
        "description": "Chill beachside dining with grilled seafood, tropical drinks, and toes-in-the-sand ambiance."
      }
    ],
    "attractions": [
      {
        "name": "Garuda Wisnu Kencana Cultural Park",
        "type": "Cultural Landmark",
        "distance": "8 km",
        "openingHours": "9:00 AM – 9:00 PM",
        "price": "$$",
        "image": "/images/attractions/gwk-park.jpg",
        "description": "Massive cultural park home to one of the tallest statues in the world and various Balinese shows."
      },
      {
        "name": "Padang Padang Beach",
        "type": "Beach",
        "distance": "12 km",
        "openingHours": "All day",
        "price": "$",
        "image": "/images/attractions/padang-padang.jpg",
        "description": "Secluded beach with turquoise waters and great surfing, accessible through a rock cave."
      },
      {
        "name": "Samasta Lifestyle Village",
        "type": "Shopping & Dining",
        "distance": "6 km",
        "openingHours": "10:00 AM – 10:00 PM",
        "price": "Free entry",
        "image": "/images/attractions/samasta-village.jpg",
        "description": "Open-air lifestyle complex offering boutiques, cafes, souvenir shops, and live events."
      }
    ],
    "airportDistance": "10 km (Ngurah Rai International Airport)",
    "faqs": [
      {
        "question": "Is airport transfer included?",
        "answer": "Airport transfer is available on request for an additional charge. Complimentary for certain villa categories."
      },
      {
        "question": "Do guests have access to all AYANA and RIMBA facilities?",
        "answer": "Yes, staying at AYANA includes access to both AYANA and RIMBA Jimbaran Bali facilities and restaurants."
      },
      {
        "question": "What is the check-in and check-out time?",
        "answer": "Check-in is from 3:00 PM and check-out is until 12:00 PM."
      },
      {
        "question": "Is the Rock Bar exclusive to guests?",
        "answer": "Non-guests may visit the Rock Bar, but resort guests receive priority access via private inclinator."
      }
    ]
  },

  {
    "id": "sankara-ubud-resort",
    "name": "The Sankara Resort by Pramana",
    "slug": "sankara-ubud-resort",
    "location": "Ubud, Bali, Indonesia",
    "city": "Ubud",
    "country": "Indonesia",
    "price": 150,
    "rating": 4,
    "ratings": {
      "overall": 9.0,
      "totalReviews": 2637,
      "categories": []
    },
    "coordinates": {
      "lat": -8.5466,
      "lng": 115.2603
    },
    "images": [
      "/images/hotels/ubud/sankara-resort-1.jpg",
      "/images/hotels/ubud/sankara-resort-2.jpg",
      "/images/hotels/ubud/sankara-resort-3.jpg",
      "/images/hotels/ubud/sankara-resort-4.jpg",
      "/images/hotels/ubud/sankara-resort-5.jpg"
    ],
    "highlights": [
      {
        "title": "Tranquil Natural Setting",
        "description": "Nestled in the traditional village of Kumbuh, Mas, surrounded by lush tropical gardens and exotic plantations.",
        "icon": "leaf"
      },
      {
        "title": "Authentic Balinese Architecture",
        "description": "Features 30 Balinese-styled rooms and villas, blending traditional design with modern comforts.",
        "icon": "home"
      },
      {
        "title": "Proximity to Ubud Center",
        "description": "Located just a 15-minute drive from the cultural and artistic hub of Ubud.",
        "icon": "map-marker-alt"
      }
    ],
    "description": {
      "short": "A serene 4-star resort in Ubud offering authentic Balinese architecture, lush surroundings, and close proximity to cultural attractions.",
      "full": "The Sankara Resort by Pramana is a hidden gem situated in the traditional village of Kumbuh, Mas, Ubud. Spread across a breathtaking landscape adorned with Balinese frangipani, mangosteen, coconut, and red palm trees, the resort offers a peaceful retreat. With 30 Balinese-styled rooms and villas, guests can immerse themselves in a harmonious blend of traditional design and modern amenities. The resort's strategic location provides easy access to Ubud's cultural landmarks, making it an ideal choice for travelers seeking tranquility without being far from the vibrant town center."
    },
    "amenities": [
      {
        "name": "Free Wi-Fi",
        "icon": "wifi",
        "description": "Complimentary high-speed internet access throughout the resort."
      },
      {
        "name": "Infinity Pool",
        "icon": "swimming-pool",
        "description": "An 8,000 sqm infinity pool surrounded by palm trees and a wooden sundeck."
      },
      {
        "name": "Radha Spa",
        "icon": "spa",
        "description": "On-site spa offering a range of rejuvenating treatments and wellness programs."
      },
      {
        "name": "The Kumbuh Restaurant",
        "icon": "utensils",
        "description": "Serves a combination of Balinese specialties and Western cuisine with sunset views."
      },
      {
        "name": "Yoga Center",
        "icon": "om",
        "description": "Dedicated space for yoga sessions to enhance physical and mental well-being."
      },
      {
        "name": "Shuttle Service",
        "icon": "shuttle-van",
        "description": "Complimentary shuttle service to and from Ubud center at scheduled times."
      }
    ],
    "rooms": [
      {
        "name": "Deluxe Room",
        "description": "Elegant room with views of coconut trees and rice fields, featuring traditional Balinese décor.",
        "size": "48m²",
        "maxOccupancy": 2,
        "bedType": "King",
        "images": ["/images/hotels/ubud/sankara-deluxe-room.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathtub", "Minibar"]
      },
      {
        "name": "Deluxe Pool Villa",
        "description": "Private villa with personal infinity pool overlooking rice fields, offering enhanced privacy and comfort.",
        "size": "100m²",
        "maxOccupancy": 2,
        "bedType": "King",
        "images": ["/images/hotels/ubud/sankara-deluxe-pool-villa.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Open-air Shower", "Minibar", "Private Pool"]
      },
      {
        "name": "One Bedroom Pool Villa",
        "description": "Spacious villa with a private garden and infinity pool, blending luxury with traditional Balinese aesthetics.",
        "size": "150m²",
        "maxOccupancy": 2,
        "bedType": "King",
        "images": ["/images/hotels/ubud/sankara-one-bedroom-pool-villa.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Marble Bathroom", "Minibar", "Private Pool", "Kitchenette"]
      }
    ],
    "features": [
      "Tranquil Natural Setting",
      "Authentic Balinese Architecture",
      "Proximity to Ubud Center",
      "Infinity Pool",
      "On-site Spa and Wellness Center",
      "Cultural Activities and Experiences"
    ],
    "thingsToDo": [
      {
        "title": "Ubud Monkey Forest",
        "description": "Explore the sacred sanctuary home to hundreds of long-tailed macaques amidst ancient temples.",
        "distance": "5 km",
        "duration": "1-2 hours",
        "type": "Nature",
        "image": "/images/activities/ubud-monkey-forest.jpg"
      },
      {
        "title": "Tegallalang Rice Terraces",
        "description": "Witness the iconic terraced rice fields and enjoy the breathtaking landscape of Ubud's countryside.",
        "distance": "12 km",
        "duration": "2 hours",
        "type": "Scenic",
        "image": "/images/activities/tegallalang-rice-terraces.jpg"
      },
      {
        "title": "Ubud Art Market",
        "description": "Shop for traditional Balinese art, crafts, and souvenirs at this vibrant local market.",
        "distance": "6 km",
        "duration": "1-2 hours",
        "type": "Shopping",
        "image": "/images/activities/ubud-art-market.jpg"
      }
    ],
    "restaurants": [
      {
        "name": "The Kumbuh Restaurant",
        "cuisine": "Balinese & Western",
        "distance": "On-site",
        "priceRange": 2,
        "rating": 4.5,
        "openingHours": "7:00 AM – 10:30 PM",
        "image": "/images/restaurants/the-kumbuh-restaurant.jpg",
        "description": "Serves a blend of Balinese and international cuisine with garden and rice field views."
      },
      {
        "name": "In-Villa Dining",
        "cuisine": "International",
        "distance": "In-room",
        "priceRange": 3,
        "rating": 4.4,
        "openingHours": "24/7",
        "image": "/images/restaurants/in-villa-dining.jpg",
        "description": "Enjoy private meals from the comfort of your villa with personalized service."
      }
    ],
    "attractions": [
      {
        "name": "Goa Gajah (Elephant Cave)",
        "type": "Historical Landmark",
        "distance": "5.5 km",
        "openingHours": "8:00 AM – 4:30 PM",
        "price": "$",
        "image": "/images/attractions/goa-gajah.jpg",
        "description": "An ancient archaeological site featuring a meditation cave, rock carvings, and bathing pools."
      },
      {
        "name": "Campuhan Ridge Walk",
        "type": "Nature Trail",
        "distance": "7 km",
        "openingHours": "All day",
        "price": "Free",
        "image": "/images/attractions/campuhan-ridge-walk.jpg",
        "description": "Scenic walking trail offering panoramic views of Ubud’s hills, forests, and rice fields."
      },
      {
        "name": "Saraswati Temple",
        "type": "Temple",
        "distance": "6 km",
        "openingHours": "7:00 AM – 5:00 PM",
        "price": "Free",
        "image": "/images/attractions/saraswati-temple.jpg",
        "description": "Beautiful water temple dedicated to the goddess of knowledge, with lotus ponds and Balinese carvings."
      }
    ],
    "airportDistance": "35 km (Ngurah Rai International Airport)",
    "faqs": [
      {
        "question": "Do you offer a shuttle to Ubud center?",
        "answer": "Yes, the resort provides complimentary scheduled shuttle service to central Ubud daily."
      },
      {
        "question": "Is the resort suitable for honeymooners?",
        "answer": "Absolutely. The Sankara Resort offers romantic pool villas, private dining, and spa packages for couples."
      },
      {
        "question": "Is breakfast included in all room types?",
        "answer": "Yes, a daily à la carte or buffet breakfast is included for all guests."
      },
      {
        "question": "Are cooking classes or yoga sessions available?",
        "answer": "Yes, guests can join Balinese cooking classes and yoga sessions at the resort’s wellness center."
      }
    ]
  },

  {
    "id": "villa-coco-seminyak",
    "name": "Villa Coco",
    "slug": "villa-coco-seminyak",
    "location": "Seminyak, Bali, Indonesia",
    "city": "Seminyak",
    "country": "Indonesia",
    "price": 150,
    "rating": 4,
    "ratings": {
      "overall": 9.0,
      "totalReviews": 500,
      "categories": []
    },
    "coordinates": {
      "lat": -8.6985,
      "lng": 115.1670
    },
    "images": [
      "/images/hotels/seminyak/villa-coco-1.jpg",
      "/images/hotels/seminyak/villa-coco-2.jpg",
      "/images/hotels/seminyak/villa-coco-3.jpg",
      "/images/hotels/seminyak/villa-coco-4.jpg",
      "/images/hotels/seminyak/villa-coco-5.jpg"
    ],
    "highlights": [
      {
        "title": "Proximity to Double Six Beach",
        "description": "Located just a 5-minute walk from the popular Double Six Beach, offering easy access to sun, sand, and surf.",
        "icon": "umbrella-beach"
      },
      {
        "title": "Private Pool Villas",
        "description": "Offers a range of accommodations, including villas with private pools for enhanced privacy and relaxation.",
        "icon": "swimming-pool"
      },
      {
        "title": "Traditional Balinese Design",
        "description": "Features villas with traditional alang-alang (thatched) roofs, blending authentic Balinese architecture with modern comforts.",
        "icon": "home"
      }
    ],
    "description": {
      "short": "Charming villa complex in Seminyak offering traditional Balinese-style accommodations with modern amenities, close to the beach and local attractions.",
      "full": "Villa Coco is a tranquil oasis nestled in the heart of Seminyak, Bali. Established in 1989, the villa complex offers a blend of traditional and modern accommodations, ranging from one to four-bedroom villas. Each villa boasts air-conditioned bedrooms, open-air living spaces, and private gardens, providing a perfect blend of privacy and comfort. Equipped with kitchenettes and nestled just a short walk from the beach and Seminyak’s vibrant scene, Villa Coco combines the convenience of hotel service with the serenity of villa living in Bali."
    },
    "amenities": [
      {
        "name": "Free Wi-Fi",
        "icon": "wifi",
        "description": "Complimentary high-speed internet access throughout the property."
      },
      {
        "name": "Outdoor Swimming Pool",
        "icon": "swimming-pool",
        "description": "Communal pool area surrounded by lush tropical gardens."
      },
      {
        "name": "In-Villa Dining",
        "icon": "utensils",
        "description": "Personalized in-house catering services, featuring affordable BBQ options and an extensive menu prepared by trained cooks."
      },
      {
        "name": "Cooking Classes",
        "icon": "utensils",
        "description": "Learn the art of Balinese cooking by joining authentic cooking classes available every day at 10 AM and 4 PM."
      },
      {
        "name": "Spa Services",
        "icon": "spa",
        "description": "On-site spa offering a range of rejuvenating treatments and wellness programs."
      },
      {
        "name": "Event Planning",
        "icon": "calendar-alt",
        "description": "Host your special events, including weddings, with comprehensive planning services to ensure a memorable celebration."
      }
    ],
    "rooms": [
      {
        "name": "One-Bedroom Tropical Bungalow",
        "description": "Two-level bungalow with traditional alang-alang roof, featuring an open-air living area and kitchenette.",
        "size": "70m²",
        "maxOccupancy": 2,
        "bedType": "King",
        "images": ["/images/hotels/seminyak/one-bedroom-tropical-bungalow.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Kitchenette", "Private Garden"]
      },
      {
        "name": "One-Bedroom Pool Villa",
        "description": "Private villa with a sparkling pool, fully equipped kitchen, and adjoining dining and lounge areas.",
        "size": "100m²",
        "maxOccupancy": 2,
        "bedType": "King",
        "images": ["/images/hotels/seminyak/one-bedroom-pool-villa.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Private Pool", "Kitchenette"]
      },
      {
        "name": "Two-Bedroom Pool Villa",
        "description": "Spacious villa with two air-conditioned bedrooms, private pool, and open-plan living and dining areas.",
        "size": "150m²",
        "maxOccupancy": 4,
        "bedType": "King and Twin",
        "images": ["/images/hotels/seminyak/two-bedroom-pool-villa.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Private Pool", "Kitchenette"]
      }
    ],
    "features": [
      "Proximity to Double Six Beach",
      "Private Pool Villas",
      "Traditional Balinese Design",
      "Lush Tropical Gardens",
      "Personalized In-House Catering",
      "Authentic Cooking Classes"
    ],
    "thingsToDo": [
      {
        "title": "Double Six Beach",
        "description": "Enjoy sunbathing, surfing, and vibrant beach bars at this popular Seminyak beach.",
        "distance": "300m",
        "duration": "Varies",
        "type": "Beach",
        "image": "/images/activities/double-six-beach.jpg"
      },
      {
        "title": "Seminyak Village",
        "description": "Explore a variety of shops, boutiques, and dining options in this upscale shopping center.",
        "distance": "1.5 km",
        "duration": "2-3 hours",
        "type": "Shopping",
        "image": "/images/activities/seminyak-village.jpg"
      },
      {
        "title": "Petitenget Temple",
        "description": "Visit this historic Balinese temple known for its cultural significance and traditional architecture.",
        "distance": "2 km",
        "duration": "1 hour",
        "type": "Cultural",
        "image": "/images/activities/petitenget-temple.jpg"
      }
    ],
    "restaurants": [
      {
        "name": "The Kumbuh Restaurant",
        "cuisine": "Balinese & Western",
        "distance": "On-site",
        "priceRange": 2,
        "rating": 4.5,
        "openingHours": "7:00 AM – 10:30 PM",
        "image": "/images/restaurants/the-kumbuh-restaurant.jpg",
        "description": "Serves a blend of Balinese and international cuisine with garden and rice field views."
      },
      {
        "name": "In-Villa Dining",
        "cuisine": "Balinese & International",
        "distance": "In-room",
        "priceRange": 2,
        "rating": 4.4,
        "openingHours": "7:00 AM – 10:00 PM",
        "image": "/images/restaurants/in-villa-dining.jpg",
        "description": "Enjoy freshly prepared meals in the comfort of your villa, including BBQ and special occasion options."
      }
    ],
    "attractions": [
      {
        "name": "Bintang Supermarket",
        "type": "Local Market",
        "distance": "400m",
        "openingHours": "7:00 AM – 10:00 PM",
        "price": "Free",
        "image": "/images/attractions/bintang-supermarket.jpg",
        "description": "Convenient supermarket offering groceries, local snacks, souvenirs, and daily essentials."
      },
      {
        "name": "La Plancha Beach Bar",
        "type": "Bar & Sunset Spot",
        "distance": "700m",
        "openingHours": "10:00 AM – 11:00 PM",
        "price": "$$",
        "image": "/images/attractions/la-plancha.jpg",
        "description": "Colorful beanbag-lined beach bar perfect for cocktails and stunning Seminyak sunsets."
      },
      {
        "name": "Seminyak Night Market",
        "type": "Cultural Experience",
        "distance": "1.2 km",
        "openingHours": "6:00 PM – 11:00 PM",
        "price": "$",
        "image": "/images/attractions/seminyak-night-market.jpg",
        "description": "Explore traditional food stalls and local crafts in an authentic night market setting."
      }
    ],
    "airportDistance": "9 km (Ngurah Rai International Airport)",
    "faqs": [
      {
        "question": "Is airport pickup available?",
        "answer": "Yes, airport transfers can be arranged upon request for an additional fee."
      },
      {
        "question": "Do you provide daily housekeeping?",
        "answer": "Yes, daily housekeeping and evening turndown service are included."
      },
      {
        "question": "Is breakfast included?",
        "answer": "Yes, all villa bookings include daily breakfast served either in the villa or at the restaurant."
      },
      {
        "question": "Are pets allowed at Villa Coco?",
        "answer": "Unfortunately, pets are not allowed at this property."
      }
    ]
  }
  
  
   
  
  
  

   
           

      
      
       
      
     
]; 
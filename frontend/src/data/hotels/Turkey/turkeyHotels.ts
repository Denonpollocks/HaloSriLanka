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

export const turkeyHotels: Hotel[] = [
        
  
    {
        "id": "crystal-flora-beach-resort",
        "name": "Crystal Flora Beach Resort",
        "slug": "crystal-flora-beach-resort",
        "location": "Beldibi, Turkey",
        "city": "Beldibi",
        "country": "Turkey",
        "price": 150,
        "rating": 5,
        "ratings": {
          "overall": 8.0,
          "totalReviews": 1200,
          "categories": []
        },
        "coordinates": {
          "lat": 36.7136,
          "lng": 30.5655
        },
        "cardImage": "/images/hotels/turkey/Crystal-Flora-Beach-Resort.jpg",
        "images": [
          "/images/hotels/beldibi/Crystal-Flora-Beach-Resort-1.jpg",
          "/images/hotels/beldibi/Crystal-Flora-Beach-Resort-2.jpg",
          "/images/hotels/beldibi/Crystal-Flora-Beach-Resort-3.jpg",
          "/images/hotels/beldibi/Crystal-Flora-Beach-Resort-4.jpg",
          "/images/hotels/beldibi/Crystal-Flora-Beach-Resort-5.jpg"
        ],
        "highlights": [
          {
            "title": "Private Beach",
            "description": "900-meter-long Blue Flag pebble beach with a private pier.",
            "icon": "umbrella-beach"
          },
          {
            "title": "Aquapark",
            "description": "Extensive aquapark featuring adrenaline-pumping slides and fun.",
            "icon": "water-slide"
          },
          {
            "title": "Spa & Wellness",
            "description": "Comprehensive spa facilities including hammam, beauty center, and fitness gym.",
            "icon": "spa"
          }
        ],
        "description": {
          "short": "5-star all-inclusive resort in Beldibi, offering a private beach, aquapark, and diverse dining options.",
          "full": "Nestled between the lush greenery of the Taurus Mountains and the serene blues of the Mediterranean, Crystal Flora Beach Resort offers an immersive vacation experience in harmony with nature. Guests can enjoy spacious garden-view rooms, a 900-meter-long private pebble beach, and an extensive aquapark. The resort features multiple dining venues serving Turkish, Asian, and seafood specialties, as well as numerous bars providing 24-hour meals and beverages."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary internet access throughout the resort."
          },
          {
            "name": "Outdoor Pools",
            "icon": "swimmer",
            "description": "Multiple outdoor swimming pools with sundecks and loungers."
          },
          {
            "name": "Fitness Center",
            "icon": "dumbbell",
            "description": "Fully equipped gym for guests to maintain their workout routines."
          },
          {
            "name": "Kids Club",
            "icon": "child",
            "description": "Crispy Kids World offers activities and play areas for children."
          },
          {
            "name": "Tennis Court",
            "icon": "table-tennis",
            "description": "On-site tennis court available for guest use."
          },
          {
            "name": "24-Hour Reception",
            "icon": "concierge-bell",
            "description": "Front desk services available around the clock."
          }
        ],
        "rooms": [
          {
            "name": "Standard Room",
            "description": "Comfortable room with garden views and modern amenities.",
            "size": "19m²",
            "maxOccupancy": 3,
            "bedType": "Double or Twin",
            "images": ["/images/hotels/beldibi/crystal-flora-standard-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Family Room",
            "description": "Spacious room with two bedrooms, ideal for families.",
            "size": "36m²",
            "maxOccupancy": 4,
            "bedType": "Double and Twin",
            "images": ["/images/hotels/beldibi/crystal-flora-family-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Deluxe Room",
            "description": "Elegant room with additional space and enhanced amenities.",
            "size": "24m²",
            "maxOccupancy": 3,
            "bedType": "Double or Twin",
            "images": ["/images/hotels/beldibi/crystal-flora-deluxe-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          }
        ],
        "features": [
          "Private Beach",
          "Aquapark",
          "Spa & Wellness",
          "Multiple Dining Options",
          "Kids Club",
          "Tennis Court"
        ],
        "thingsToDo": [
          {
            "title": "Visit Antalya City Center",
            "description": "Explore the historic sites, shops, and restaurants in Antalya's city center.",
            "distance": "25 km",
            "duration": "Half-day",
            "type": "City Tour",
            "image": "/images/activities/antalya-city-center.jpg"
          },
          {
            "title": "Boat Tour",
            "description": "Enjoy a scenic boat tour along the Mediterranean coast.",
            "distance": "Departing from hotel",
            "duration": "Full-day",
            "type": "Excursion",
            "image": "/images/activities/mediterranean-boat-tour.jpg"
          },
          {
            "title": "Hiking in Taurus Mountains",
            "description": "Experience guided hikes through the lush landscapes of the Taurus Mountains.",
            "distance": "5 km",
            "duration": "Half-day",
            "type": "Adventure",
            "image": "/images/activities/taurus-mountains-hiking.jpg"
          }
        ],
        "restaurants": [
            {
              "name": "Aspendos Main Restaurant",
              "cuisine": "International Buffet",
              "distance": "On-site",
              "priceRange": 3,
              "rating": 4.5,
              "openingHours": "7:00 AM - 10:00 PM",
              "image": "/images/restaurants/aspendos-main-restaurant.jpg",
              "description": "Offers a wide selection of international dishes in a buffet setting."
            },
            {
              "name": "La Fiesta",
              "cuisine": "Mexican",
              "distance": "On-site",
              "priceRange": 4,
              "rating": 4.2,
              "openingHours": "6:00 PM - 10:00 PM",
              "image": "/images/restaurants/la-fiesta.jpg",
              "description": "A la carte Mexican dining experience with spicy flavors and colorful ambiance."
            },
            {
              "name": "Turkish A’la Carte Restaurant",
              "cuisine": "Turkish",
              "distance": "On-site",
              "priceRange": 3,
              "rating": 4.3,
              "openingHours": "6:00 PM - 10:00 PM",
              "image": "/images/restaurants/turkish-ala-carte.jpg",
              "description": "Authentic Turkish cuisine featuring mezes, grilled meats, and desserts."
            }
          ],
          "attractions": [
            {
              "name": "Göynük Canyon",
              "type": "Nature & Hiking",
              "distance": "15 km",
              "openingHours": "9:00 AM - 6:00 PM",
              "price": "$",
              "image": "/images/attractions/goynuk-canyon.jpg",
              "description": "Beautiful canyon ideal for hiking, swimming, and ziplining."
            },
            {
              "name": "Kemer Marina",
              "type": "Marina",
              "distance": "20 km",
              "openingHours": "All day",
              "price": "Free",
              "image": "/images/attractions/kemer-marina.jpg",
              "description": "Popular seaside promenade with cafes, boutiques, and boat tours."
            },
            {
              "name": "Phaselis Ancient City",
              "type": "Historical Site",
              "distance": "35 km",
              "openingHours": "8:00 AM - 7:00 PM",
              "price": "$",
              "image": "/images/attractions/phaselis.jpg",
              "description": "Ancient Lycian ruins set along the coast, with beaches and forest trails."
            }
          ],
          "airportDistance": "45 km",
          "faqs": [
            {
              "question": "What is the distance from Antalya Airport to Crystal Flora Beach Resort?",
              "answer": "The resort is approximately 45 km from Antalya Airport, around 45–60 minutes by car."
            },
            {
              "question": "Is the beach sandy or pebbly?",
              "answer": "The resort features a private Blue Flag pebble beach with a wooden pier."
            },
            {
              "question": "Are there vegetarian or gluten-free meal options?",
              "answer": "Yes, the resort offers vegetarian and gluten-free dishes at the buffet and à la carte restaurants."
            },
            {
              "question": "Do you offer babysitting or childcare services?",
              "answer": "Yes, babysitting services can be arranged on request for an extra charge."
            }
          ]
        },
        {
            "id": "grand-blue-sky-international",
            "name": "The Grand Blue Sky International",
            "slug": "grand-blue-sky-international",
            "location": "Kuşadası, Turkey",
            "city": "Kuşadası",
            "country": "Turkey",
            "price": 120,
            "rating": 4,
            "ratings": {
              "overall": 8.0,
              "totalReviews": 2792,
              "categories": []
            },
            "coordinates": {
              "lat": 37.8410,
              "lng": 27.2550
            },
            "cardImage": "/images/hotels/turkey/The-Grand-Blue-Sky-International.jpg",
            "images": [
              "/images/hotels/kusadasi/Grand-Blue-Sky-International-1.jpg",
              "/images/hotels/kusadasi/Grand-Blue-Sky-International-2.jpg",
              "/images/hotels/kusadasi/Grand-Blue-Sky-International-3.jpg",
              "/images/hotels/kusadasi/Grand-Blue-Sky-International-4.jpg",
              "/images/hotels/kusadasi/Grand-Blue-Sky-International-5.jpg"
            ],
            "highlights": [
              {
                "title": "Private Beach",
                "description": "150-meter private Blue Flag beach with turquoise waters.",
                "icon": "umbrella-beach"
              },
              {
                "title": "Panoramic Views",
                "description": "Offers stunning views of the Aegean Sea and the Greek island of Samos.",
                "icon": "mountain"
              },
              {
                "title": "Multiple Dining Options",
                "description": "Features several on-site restaurants serving diverse cuisines.",
                "icon": "utensils"
              }
            ],
            "description": {
              "short": "4-star beachfront resort in Kuşadası offering private beach access and panoramic sea views.",
              "full": "The Grand Blue Sky International is a 4-star beachfront resort located in Kuşadası, Turkey. Situated in the famous 'Ladies Beach' area, the hotel offers a 150-meter private Blue Flag beach with turquoise waters. Guests can enjoy panoramic views of the Aegean Sea and the Greek island of Samos. The resort features multiple dining options, including Italian, Ottoman, and seafood restaurants. Amenities include outdoor pools, a fitness center, spa services, and various water sports activities. The hotel is approximately 3 km from Kuşadası town center and 75 km from İzmir Adnan Menderes Airport."
            },
            "amenities": [
              {
                "name": "Free Wi-Fi",
                "icon": "wifi",
                "description": "Complimentary internet access throughout the resort."
              },
              {
                "name": "Outdoor Pools",
                "icon": "swimmer",
                "description": "Multiple outdoor swimming pools with sun loungers and umbrellas."
              },
              {
                "name": "Fitness Center",
                "icon": "dumbbell",
                "description": "Fully equipped gym for guests to maintain their workout routines."
              },
              {
                "name": "Spa Services",
                "icon": "spa",
                "description": "Offers a range of spa treatments, including massages and a Turkish bath."
              },
              {
                "name": "Kids Club",
                "icon": "child",
                "description": "Supervised activities and play areas for children."
              },
              {
                "name": "24-Hour Reception",
                "icon": "concierge-bell",
                "description": "Front desk services available around the clock."
              }
            ],
            "rooms": [
              {
                "name": "Standard Room with Garden View",
                "description": "35 m² room with ceramic flooring, offering garden views.",
                "size": "35m²",
                "maxOccupancy": 3,
                "bedType": "Double or Twin",
                "images": ["/images/hotels/kusadasi/grand-blue-sky-standard-garden-view.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
              },
              {
                "name": "Standard Room with Sea View",
                "description": "50 m² room with hardwood flooring, offering panoramic sea views.",
                "size": "50m²",
                "maxOccupancy": 3,
                "bedType": "Double or Twin",
                "images": ["/images/hotels/kusadasi/grand-blue-sky-standard-sea-view.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
              },
              {
                "name": "Exclusive Room",
                "description": "Spacious room with enhanced amenities and sea views.",
                "size": "55m²",
                "maxOccupancy": 3,
                "bedType": "Double or Twin",
                "images": ["/images/hotels/kusadasi/grand-blue-sky-exclusive-room.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
              }
            ],
            "features": [
              "Private Beach",
              "Panoramic Views",
              "Multiple Dining Options",
              "Outdoor Pools",
              "Spa Services",
              "Kids Club"
            ],
            "thingsToDo": [
              {
                "title": "Visit Ephesus",
                "description": "Explore the ancient city of Ephesus, known for its well-preserved ruins.",
                "distance": "18 km",
                "duration": "Half-day",
                "type": "Historical",
                "image": "/images/activities/ephesus.jpg"
              },
              {
                "title": "Boat Tour",
                "description": "Enjoy a scenic boat tour along the Aegean coast.",
                "distance": "Departing from hotel",
                "duration": "Full-day",
                "type": "Excursion",
                "image": "/images/activities/aegean-boat-tour.jpg"
              },
              {
                "title": "Shopping in Kuşadası",
                "description": "Visit local markets and shops in Kuşadası town center.",
                "distance": "3 km",
                "duration": "Variable",
                "type": "Shopping",
                "image": "/images/activities/kusadasi-shopping.jpg"
              }
            ],
            "restaurants": [
                {
                  "name": "Blue Sea Food Restaurant",
                  "cuisine": "Seafood",
                  "distance": "On-site",
                  "priceRange": 3,
                  "rating": 4.5,
                  "openingHours": "6:00 PM - 10:00 PM (June 1 - September 30)",
                  "image": "/images/restaurants/blue-sea-food-restaurant.jpg",
                  "description": "Offers a variety of fresh seafood dishes in a seaside setting."
                },
                {
                  "name": "Italian Restaurant",
                  "cuisine": "Italian",
                  "distance": "On-site",
                  "priceRange": 3,
                  "rating": 4.4,
                  "openingHours": "6:00 PM - 10:00 PM (June 1 - September 30)",
                  "image": "/images/restaurants/italian-restaurant.jpg",
                  "description": "Serves classic Italian cuisine, including pizzas and pastas."
                },
                {
                  "name": "Ottoman Restaurant",
                  "cuisine": "Traditional Ottoman",
                  "distance": "On-site",
                  "priceRange": 3,
                  "rating": 4.3,
                  "openingHours": "6:00 PM - 10:00 PM (June 15 - September 20)",
                  "image": "/images/restaurants/ottoman-restaurant.jpg",
                  "description": "Features traditional Ottoman cuisine with rich flavors and spices."
                }
              ],
              "attractions": [
                {
                  "name": "Ladies Beach",
                  "type": "Beach",
                  "distance": "0.5 km",
                  "openingHours": "All day",
                  "price": "Free",
                  "image": "/images/attractions/ladies-beach.jpg",
                  "description": "Popular sandy beach known for its clear waters and vibrant promenade."
                },
                {
                  "name": "Kuşadası Castle",
                  "type": "Historical Site",
                  "distance": "4 km",
                  "openingHours": "9:00 AM - 7:00 PM",
                  "price": "$",
                  "image": "/images/attractions/kusadasi-castle.jpg",
                  "description": "Historic castle offering panoramic views of the town and sea."
                },
                {
                  "name": "Aqua Fantasy Aquapark",
                  "type": "Water Park",
                  "distance": "10 km",
                  "openingHours": "10:00 AM - 6:00 PM",
                  "price": "$$",
                  "image": "/images/attractions/aqua-fantasy-aquapark.jpg",
                  "description": "Family-friendly water park with numerous slides and pools."
                }
              ],
              "airportDistance": "75 km",
              "faqs": [
                {
                  "question": "What are the check-in and check-out times?",
                  "answer": "Check-in is from 2:00 PM, and check-out is until 12:00 PM."
                },
                {
                  "question": "Is airport transportation available?",
                  "answer": "Yes, the hotel offers airport shuttle services at an additional charge."
                },
                {
                  "question": "Are pets allowed at the hotel?",
                  "answer": "No, pets are not permitted at The Grand Blue Sky International."
                },
                {
                  "question": "Is Wi-Fi available in the rooms?",
                  "answer": "Yes, complimentary Wi-Fi is available throughout the hotel, including guest rooms."
                }
              ]
            },

            {
                "id": "green-forest-holiday-village",
                "name": "Green Forest Holiday Village",
                "slug": "green-forest-holiday-village",
                "location": "Hisarönü, Turkey",
                "city": "Hisarönü",
                "country": "Turkey",
                "price": 100,
                "rating": 4,
                "ratings": {
                  "overall": 8.5,
                  "totalReviews": 2673,
                  "categories": []
                },
                "coordinates": {
                  "lat": 36.5743,
                  "lng": 29.1356
                },
                "cardImage": "/images/hotels/turkey/Green-Forest-Holiday-Village.jpg",
                "images": [
                  "/images/hotels/hisaronu/Green-Forest-Holiday-Village-1.jpg",
                  "/images/hotels/hisaronu/Green-Forest-Holiday-Village-2.jpg",
                  "/images/hotels/hisaronu/Green-Forest-Holiday-Village-3.jpg",
                  "/images/hotels/hisaronu/Green-Forest-Holiday-Village-4.jpg",
                  "/images/hotels/hisaronu/Green-Forest-Holiday-Village-5.jpg"
                ],
                "highlights": [
                  {
                    "title": "Secluded Forest Setting",
                    "description": "Nestled among pine trees with a stunning mountain backdrop, offering a tranquil retreat.",
                    "icon": "tree"
                  },
                  {
                    "title": "Proximity to Hisarönü",
                    "description": "A short walk from the lively village center of Hisarönü, providing easy access to shops, bars, and restaurants.",
                    "icon": "map-marker-alt"
                  },
                  {
                    "title": "Outdoor Pool with Mountain Views",
                    "description": "Spacious freeform pool area offering panoramic views of the Taurus Mountains.",
                    "icon": "swimmer"
                  }
                ],
                "description": {
                  "short": "4-star hotel in Hisarönü offering a secluded forest setting with mountain views and close proximity to local attractions.",
                  "full": "Green Forest Holiday Village is a 4-star hotel located in Hisarönü, Turkey. Surrounded by pine forests and backed by the Taurus Mountains, the hotel offers a tranquil retreat while being just a short walk from the lively village center. Guests can enjoy a spacious outdoor pool with mountain views, multiple dining options, and various recreational facilities. The hotel is approximately 4 km from Ölüdeniz Beach and 60 km from Dalaman Airport."
                },
                "amenities": [
                  {
                    "name": "Free Wi-Fi",
                    "icon": "wifi",
                    "description": "Complimentary internet access in public areas."
                  },
                  {
                    "name": "Outdoor Pool",
                    "icon": "swimmer",
                    "description": "Large freeform pool with sun loungers and umbrellas."
                  },
                  {
                    "name": "Fitness Center",
                    "icon": "dumbbell",
                    "description": "Fully equipped gym for guests to maintain their workout routines."
                  },
                  {
                    "name": "Spa Services",
                    "icon": "spa",
                    "description": "Offers a range of spa treatments, including massages and a Turkish bath."
                  },
                  {
                    "name": "Kids' Pool",
                    "icon": "child",
                    "description": "Dedicated children's pool for younger guests."
                  },
                  {
                    "name": "24-Hour Reception",
                    "icon": "concierge-bell",
                    "description": "Front desk services available around the clock."
                  }
                ],
                "rooms": [
                  {
                    "name": "Standard Double Room",
                    "description": "Comfortable room with modern amenities and garden views.",
                    "size": "25m²",
                    "maxOccupancy": 2,
                    "bedType": "Double or Twin",
                    "images": ["/images/hotels/hisaronu/green-forest-standard-room.jpg"],
                    "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
                  },
                  {
                    "name": "Family Room",
                    "description": "Spacious room with additional bedding, suitable for families.",
                    "size": "35m²",
                    "maxOccupancy": 4,
                    "bedType": "Double and Twin",
                    "images": ["/images/hotels/hisaronu/green-forest-family-room.jpg"],
                    "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
                  },
                  {
                    "name": "Swim-Up Room",
                    "description": "Ground floor room with direct access to the pool.",
                    "size": "30m²",
                    "maxOccupancy": 2,
                    "bedType": "Double",
                    "images": ["/images/hotels/hisaronu/green-forest-swim-up-room.jpg"],
                    "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
                  }
                ],
                "features": [
                  "Secluded Forest Setting",
                  "Proximity to Hisarönü",
                  "Outdoor Pool with Mountain Views",
                  "Multiple Dining Options",
                  "Spa Services",
                  "Kids' Pool"
                ],
                "thingsToDo": [
                  {
                    "title": "Visit Ölüdeniz Beach",
                    "description": "Experience the famous Blue Lagoon and enjoy various water sports.",
                    "distance": "4 km",
                    "duration": "Half-day",
                    "type": "Beach",
                    "image": "/images/activities/oludeniz-beach.jpg"
                  },
                  {
                    "title": "Paragliding from Babadağ Mountain",
                    "description": "Enjoy tandem paragliding flights offering breathtaking views over Ölüdeniz.",
                    "distance": "5 km",
                    "duration": "Half-day",
                    "type": "Adventure",
                    "image": "/images/activities/paragliding-babadag.jpg"
                  },
                  {
                    "title": "Explore Fethiye Market",
                    "description": "Shop for local produce, textiles, and souvenirs in a vibrant market setting.",
                    "distance": "8 km",
                    "duration": "Variable",
                    "type": "Shopping",
                    "image": "/images/activities/fethiye-market.jpg"
                  }
                ],
                "restaurants": [
                    {
                      "name": "Main Buffet Restaurant",
                      "cuisine": "International",
                      "distance": "On-site",
                      "priceRange": 3,
                      "rating": 4.2,
                      "openingHours": "7:00 AM - 10:00 PM",
                      "image": "/images/restaurants/green-forest-main-restaurant.jpg",
                      "description": "Offers a variety of international dishes in a buffet setting."
                    },
                    {
                      "name": "À La Carte Restaurant",
                      "cuisine": "Turkish",
                      "distance": "On-site",
                      "priceRange": 3,
                      "rating": 4.0,
                      "openingHours": "6:00 PM - 10:00 PM",
                      "image": "/images/restaurants/green-forest-ala-carte-restaurant.jpg",
                      "description": "Serves traditional Turkish cuisine in an intimate setting."
                    },
                    {
                      "name": "Poolside Snack Bar",
                      "cuisine": "Light Meals",
                      "distance": "On-site",
                      "priceRange": 2,
                      "rating": 4.1,
                      "openingHours": "11:00 AM - 5:00 PM",
                      "image": "/images/restaurants/green-forest-poolside-snack-bar.jpg",
                      "description": "Provides a selection of light meals and refreshments by the pool."
                    }
                  ],
                  "attractions": [
                    {
                      "name": "Ölüdeniz Beach",
                      "type": "Beach",
                      "distance": "4 km",
                      "openingHours": "All day",
                      "price": "Free",
                      "image": "/images/attractions/oludeniz-beach.jpg",
                      "description": "Famous for its Blue Lagoon and crystal-clear waters, ideal for swimming and sunbathing."
                    },
                    {
                      "name": "Babadağ Mountain",
                      "type": "Adventure",
                      "distance": "5 km",
                      "openingHours": "9:00 AM - 6:00 PM",
                      "price": "$",
                      "image": "/images/attractions/babadag-mountain.jpg",
                      "description": "Popular spot for paragliding, offering breathtaking views over Ölüdeniz."
                    },
                    {
                      "name": "Fethiye Market",
                      "type": "Shopping",
                      "distance": "8 km",
                      "openingHours": "9:00 AM - 7:00 PM",
                      "price": "Free",
                      "image": "/images/attractions/fethiye-market.jpg",
                      "description": "Bustling market offering local produce, textiles, and souvenirs."
                    }
                  ],
                  "airportDistance": "60 km",
                  "faqs": [
                    {
                      "question": "What are the check-in and check-out times?",
                      "answer": "Check-in is from 2:00 PM, and check-out is until 12:00 PM."
                    },
                    {
                      "question": "Is there a shuttle service to Ölüdeniz Beach?",
                      "answer": "Yes, the hotel offers a complimentary shuttle service to Ölüdeniz Beach, which is a 5-minute drive away."
                    },
                    {
                      "question": "Are there facilities for children?",
                      "answer": "Yes, the hotel features a kids' pool and offers various activities suitable for children."
                    },
                    {
                      "question": "Is Wi-Fi available in the rooms?",
                      "answer": "Complimentary Wi-Fi is available in public areas; availability in rooms may vary."
                    }
                  ]
                }
                
               
              
            
           
          
        
       
      

   
           

      
      
       
      
     
]; 
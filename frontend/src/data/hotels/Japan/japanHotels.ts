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

export const japanHotels: Hotel[] = [
        
  
    {
        "id": "hotel-east-21-tokyo",
        "name": "Hotel East 21 Tokyo",
        "slug": "hotel-east-21-tokyo",
        "location": "Koto, Tokyo, Japan",
        "city": "Tokyo",
        "country": "Japan",
        "price": 120,
        "rating": 4,
        "ratings": {
          "overall": 8.5,
          "totalReviews": 1649,
          "categories": []
        },
        "coordinates": {
          "lat": 35.6738,
          "lng": 139.8174
        },
        "cardImage": "/images/hotels/japan/Tokyo-East-21.jpg",
        "images": [
          "/images/hotels/japan/Hotel-East-21-Tokyo/Hotel-East-21-Tokyo-1.jpg",
          "/images/hotels/japan/Hotel-East-21-Tokyo/Hotel-East-21-Tokyo-2.jpg",
          "/images/hotels/japan/Hotel-East-21-Tokyo/Hotel-East-21-Tokyo-3.jpg",
          "/images/hotels/japan/Hotel-East-21-Tokyo/Hotel-East-21-Tokyo-4.jpg",
          "/images/hotels/japan/Hotel-East-21-Tokyo/Hotel-East-21-Tokyo-5.jpg",
          "/images/hotels/japan/Hotel-East-21-Tokyo/Hotel-East-21-Tokyo-6.jpg",
          "/images/hotels/japan/Hotel-East-21-Tokyo/Hotel-East-21-Tokyo-7.jpg",
        ],
        "highlights": [
          {
            "title": "Elegant European Design",
            "description": "Inspired by 19th-century European architecture, offering a classic and sophisticated ambiance.",
            "icon": "landmark"
          },
          {
            "title": "Proximity to Toyocho Station",
            "description": "An 8-minute walk to Toyocho Subway Station, providing easy access to central Tokyo.",
            "icon": "subway"
          },
          {
            "title": "Diverse Dining Options",
            "description": "Features multiple on-site restaurants serving a variety of cuisines.",
            "icon": "utensils"
          }
        ],
        "description": {
          "short": "4-star hotel in Koto, Tokyo, offering classic European elegance and modern amenities.",
          "full": "Hotel East 21 Tokyo is a 4-star establishment located in Koto, Tokyo. The hotel embodies 19th-century European elegance, providing guests with a sophisticated and comfortable stay. It is conveniently situated an 8-minute walk from Toyocho Subway Station, allowing easy access to central Tokyo. The hotel offers a range of dining options, including French, Chinese, and Japanese cuisines. Amenities include spacious rooms with free Wi-Fi, an outdoor pool, fitness center, and free shuttle services to Tokyo Disney Resort with advance reservation. The hotel is approximately 9 miles from Haneda Airport and 33 miles from Narita Airport."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary internet access throughout the hotel."
          },
          {
            "name": "Outdoor Pool",
            "icon": "swimmer",
            "description": "Seasonal outdoor pool available for guest use."
          },
          {
            "name": "Fitness Center",
            "icon": "dumbbell",
            "description": "Fully equipped gym for guests to maintain their workout routines."
          },
          {
            "name": "Spa Services",
            "icon": "spa",
            "description": "Offers a range of spa treatments for relaxation."
          },
          {
            "name": "24-Hour Reception",
            "icon": "concierge-bell",
            "description": "Front desk services available around the clock."
          },
          {
            "name": "Airport Shuttle",
            "icon": "shuttle-van",
            "description": "Provides airport transportation services for guests."
          }
        ],
        "rooms": [
          {
            "name": "Standard Twin Room",
            "description": "Comfortable room with two twin beds and modern amenities.",
            "size": "25m²",
            "maxOccupancy": 2,
            "bedType": "Twin",
            "images": ["/images/hotels/tokyo/hotel-east-21-standard-twin.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Deluxe Double Room",
            "description": "Spacious room with a double bed and city views.",
            "size": "30m²",
            "maxOccupancy": 2,
            "bedType": "Double",
            "images": ["/images/hotels/tokyo/hotel-east-21-deluxe-double.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Japanese-Style Room",
            "description": "Traditional tatami room with futon bedding and a view of Tokyo Skytree.",
            "size": "54m²",
            "maxOccupancy": 2,
            "bedType": "Futon",
            "images": ["/images/hotels/tokyo/hotel-east-21-japanese-room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          }
        ],
        "features": [
          "Elegant European Design",
          "Proximity to Toyocho Station",
          "Diverse Dining Options",
          "Outdoor Pool",
          "Spa Services",
          "Free Shuttle to Tokyo Disney Resort"
        ],
        "thingsToDo": [
          {
            "title": "Visit Tokyo Skytree",
            "description": "Explore one of Tokyo's tallest towers offering panoramic city views.",
            "distance": "5 km",
            "duration": "2-3 hours",
            "type": "Observation Deck",
            "image": "/images/activities/tokyo-skytree.jpg"
          },
          {
            "title": "Explore Kiyosumi Garden",
            "description": "Stroll through a traditional Japanese landscape garden nearby.",
            "distance": "3 km",
            "duration": "1-2 hours",
            "type": "Garden",
            "image": "/images/activities/kiyosumi-garden.jpg"
          },
          {
            "title": "Shopping at Ginza",
            "description": "Experience upscale shopping and dining in Tokyo's renowned district.",
            "distance": "6 km",
            "duration": "Variable",
            "type": "Shopping",
            "image": "/images/activities/ginza-shopping.jpg"
          }
        ],
        "restaurants": [
            {
              "name": "Brasserie Harmony",
              "cuisine": "French",
              "distance": "On-site",
              "priceRange": 3,
              "rating": 4.5,
              "openingHours": "Breakfast: 6:00 AM - 10:30 AM; Lunch: 11:30 AM - 3:00 PM; Dinner: Weekdays 5:00 PM - 9:30 PM, Weekends 5:30 PM - 9:30 PM",
              "image": "/images/restaurants/brasserie-harmony.jpg",
              "description": "Offers a variety of French and Western dishes in a classical, upbeat atmosphere."
            },
            {
              "name": "Chinese Restaurant Toen",
              "cuisine": "Chinese",
              "distance": "On-site",
              "priceRange": 3,
              "rating": 4.4,
              "openingHours": "Lunch: 11:30 AM - 3:00 PM; Dinner: 5:00 PM - 9:30 PM",
              "image": "/images/restaurants/chinese-restaurant-toen.jpg",
              "description": "Authentic Cantonese cuisine ranging from traditional dishes to modern interpretations."
            },
            {
              "name": "Japanese Restaurant Sazanka",
              "cuisine": "Japanese",
              "distance": "On-site",
              "priceRange": 3,
              "rating": 4.6,
              "openingHours": "Lunch: 11:30 AM - 3:00 PM; Dinner: 5:00 PM - 9:30 PM",
              "image": "/images/restaurants/japanese-restaurant-sazanka.jpg",
              "description": "Traditional Japanese kaiseki with views of Tokyo Skytree and Tokyo Bay from the 21st floor."
            },
            {
              "name": "Sushi Bar Shirakawa",
              "cuisine": "Sushi",
              "distance": "On-site",
              "priceRange": 3,
              "rating": 4.3,
              "openingHours": "Lunch: 11:30 AM - 3:00 PM; Dinner: 5:00 PM - 9:30 PM",
              "image": "/images/restaurants/sushi-bar-shirakawa.jpg",
              "description": "Intimate 10-seat sushi bar offering fresh sushi selections."
            },
            {
              "name": "Teppanyaki Kiba",
              "cuisine": "Teppanyaki",
              "distance": "On-site",
              "priceRange": 4,
              "rating": 4.7,
              "openingHours": "Lunch: 11:30 AM - 3:00 PM; Dinner: 5:00 PM - 9:30 PM",
              "image": "/images/restaurants/teppanyaki-kiba.jpg",
              "description": "Teppanyaki grill featuring premium meats and seafood prepared before guests."
            },
            {
              "name": "Cocktail Lounge Panorama",
              "cuisine": "Bar",
              "distance": "On-site",
              "priceRange": 2,
              "rating": 4.2,
              "openingHours": "7:00 PM - 11:00 PM",
              "image": "/images/restaurants/cocktail-lounge-panorama.jpg",
              "description": "Lounge offering a variety of cocktails with panoramic city views."
            },
            {
              "name": "Lobby Lounge",
              "cuisine": "Cafe",
              "distance": "On-site",
              "priceRange": 2,
              "rating": 4.0,
              "openingHours": "11:00 AM - 6:30 PM",
              "image": "/images/restaurants/lobby-lounge.jpg",
              "description": "Casual setting for light meals, desserts, and beverages."
            },
            {
              "name": "Bakery Shop Un",
              "cuisine": "Bakery",
              "distance": "On-site",
              "priceRange": 1,
              "rating": 4.1,
              "openingHours": "11:00 AM - 6:30 PM",
              "image": "/images/restaurants/bakery-shop-un.jpg",
              "description": "Freshly baked bread, pastries, and cakes available for takeaway."
            }
          ],
          "attractions": [
            {
              "name": "Tokyo Skytree",
              "type": "Observation Tower",
              "distance": "5 km",
              "openingHours": "8:00 AM - 10:00 PM",
              "price": "$$",
              "image": "/images/attractions/tokyo-skytree.jpg",
              "description": "One of Tokyo's tallest towers offering panoramic city views."
            },
            {
              "name": "Kiyosumi Garden",
              "type": "Garden",
              "distance": "3 km",
              "openingHours": "9:00 AM - 5:00 PM",
              "price": "$",
              "image": "/images/attractions/kiyosumi-garden.jpg",
              "description": "Traditional Japanese landscape garden featuring a large pond, rocks, and walking paths."
            },
            {
              "name": "Ginza Shopping District",
              "type": "Shopping",
              "distance": "6 km",
              "openingHours": "Varies by store",
              "price": "Free",
              "image": "/images/attractions/ginza-shopping.jpg",
              "description": "Upscale shopping area known for its boutiques, art galleries, and restaurants."
            }
          ],
          "airportDistance": "Haneda Airport: 15 km; Narita Airport: 60 km",
          "faqs": [
            {
              "question": "What are the check-in and check-out times?",
              "answer": "Check-in is from 2:00 PM, and check-out is until 11:00 AM."
            },
            {
              "question": "Is there a shuttle service to Tokyo Disney Resort?",
              "answer": "Yes, the hotel offers a complimentary shuttle service to Tokyo Disney Resort with advance reservation."
            },
            {
              "question": "Are there any additional fees for using the pool or fitness center?",
              "answer": "Yes, there are fees for using the outdoor pool and fitness center, even for hotel guests."
            },
            {
              "question": "Is breakfast included in the room rate?",
              "answer": "Breakfast is not included in standard room rates but can be added for an additional fee."
            }
          ]
        },

        {
            "id": "international-garden-hotel-narita",
            "name": "International Garden Hotel Narita",
            "slug": "international-garden-hotel-narita",
            "location": "Narita, Japan",
            "city": "Narita",
            "country": "Japan",
            "price": 90,
            "rating": 3,
            "ratings": {
              "overall": 8.3,
              "totalReviews": 2100,
              "categories": []
            },
            "coordinates": {
              "lat": 35.7776,
              "lng": 140.3118
            },
            "cardImage": "/images/hotels/japan/International-Garden-Hotel-Narita.jpg",
            "images": [
              "/images/hotels/japan/International-Garden-Hotel-Narita/International-Garden-Hotel-Narita-1.jpg",
              "/images/hotels/japan/International-Garden-Hotel-Narita/International-Garden-Hotel-Narita-2.jpg",
              "/images/hotels/japan/International-Garden-Hotel-Narita/International-Garden-Hotel-Narita-3.jpg",
              "/images/hotels/japan/International-Garden-Hotel-Narita/International-Garden-Hotel-Narita-4.jpg",
              "/images/hotels/japan/International-Garden-Hotel-Narita/International-Garden-Hotel-Narita-5.jpg",
              "/images/hotels/japan/International-Garden-Hotel-Narita/International-Garden-Hotel-Narita-6.jpg",
              "/images/hotels/japan/International-Garden-Hotel-Narita/International-Garden-Hotel-Narita-7.jpg",
            ],
            "highlights": [
              {
                "title": "Free Shuttle Bus",
                "description": "Complimentary shuttle to Narita Airport, train station, and shopping areas.",
                "icon": "shuttle-van"
              },
              {
                "title": "Spacious Rooms",
                "description": "Large rooms (28m²+) with modern amenities and soft-toned decor.",
                "icon": "bed"
              },
              {
                "title": "On-site Convenience Store",
                "description": "7-Eleven store inside the hotel for snacks, drinks, and essentials.",
                "icon": "shopping-bag"
              }
            ],
            "description": {
              "short": "Modern 3.5-star hotel near Narita Airport with spacious rooms and a free airport shuttle.",
              "full": "International Garden Hotel Narita is a 3.5-star hotel offering spacious accommodations in a peaceful setting just 15 minutes from Narita International Airport. With a complimentary shuttle bus, an Italian-themed restaurant, on-site convenience store, and modern fitness center, the hotel caters to both business and leisure travelers seeking comfort and convenience."
            },
            "amenities": [
              {
                "name": "Free Wi-Fi",
                "icon": "wifi",
                "description": "Complimentary internet throughout the hotel."
              },
              {
                "name": "24-Hour Fitness Center",
                "icon": "dumbbell",
                "description": "Stay fit with modern gym equipment open around the clock."
              },
              {
                "name": "Airport Shuttle",
                "icon": "shuttle-van",
                "description": "Free shuttle service to Narita Airport and nearby areas."
              },
              {
                "name": "On-Site Dining",
                "icon": "utensils",
                "description": "Restaurant serving Japanese and Western dishes."
              },
              {
                "name": "Convenience Store",
                "icon": "shopping-bag",
                "description": "7-Eleven inside the hotel for quick purchases."
              },
              {
                "name": "Meeting Rooms",
                "icon": "briefcase",
                "description": "Equipped spaces for business meetings and events."
              }
            ],
            "rooms": [
              {
                "name": "Standard Twin Room",
                "description": "Spacious twin room with desk, flat-screen TV, and ensuite bath.",
                "size": "28m²",
                "maxOccupancy": 2,
                "bedType": "Twin",
                "images": ["/images/hotels/narita/standard-twin.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "TV", "Refrigerator", "Private Bathroom"]
              },
              {
                "name": "Deluxe Double Room",
                "description": "Larger room with double bed, seating area, and panoramic views.",
                "size": "32m²",
                "maxOccupancy": 2,
                "bedType": "Double",
                "images": ["/images/hotels/narita/deluxe-double.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "TV", "Refrigerator", "Private Bathroom"]
              },
              {
                "name": "Triple Room",
                "description": "Ideal for families or groups, with three beds and extra space.",
                "size": "35m²",
                "maxOccupancy": 3,
                "bedType": "Triple",
                "images": ["/images/hotels/narita/triple-room.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "TV", "Refrigerator", "Private Bathroom"]
              }
            ],
            "features": [
              "Free Shuttle Bus",
              "Spacious Rooms",
              "On-site Convenience Store",
              "Fitness Center",
              "Meeting Rooms",
              "Quiet Neighborhood"
            ],
            "thingsToDo": [
              {
                "title": "Naritasan Shinsho-ji Temple",
                "description": "Historic Buddhist temple complex with beautiful gardens.",
                "distance": "2.5 km",
                "duration": "1-2 hours",
                "type": "Cultural",
                "image": "/images/activities/naritasan-temple.jpg"
              },
              {
                "title": "AEON Mall Narita",
                "description": "Large shopping mall with dining and entertainment options.",
                "distance": "1.8 km",
                "duration": "2-3 hours",
                "type": "Shopping",
                "image": "/images/activities/aeon-mall-narita.jpg"
              },
              {
                "title": "Narita Omotesando Street",
                "description": "Traditional street lined with shops and restaurants leading to the temple.",
                "distance": "2.2 km",
                "duration": "1-2 hours",
                "type": "Cultural",
                "image": "/images/activities/narita-omotesando.jpg"
              }
            ],
            "restaurants": [
              {
                "name": "Restaurant AVANTI",
                "cuisine": "Italian & International",
                "distance": "On-site",
                "priceRange": 2,
                "rating": 4.2,
                "openingHours": "6:00 AM – 10:00 AM, 11:30 AM – 2:00 PM, 5:30 PM – 9:00 PM",
                "image": "/images/restaurants/avanti.jpg",
                "description": "Buffet-style and à la carte menu offering Italian, Japanese, and Western cuisine."
              }
            ],
            "attractions": [
              {
                "name": "Narita International Airport",
                "type": "Transport Hub",
                "distance": "8 km",
                "openingHours": "24 Hours",
                "price": "Free Shuttle",
                "image": "/images/attractions/narita-airport.jpg",
                "description": "Major international gateway to Japan, just 15 minutes away."
              },
              {
                "name": "Sakura-no-Yama Park",
                "type": "Park",
                "distance": "4 km",
                "openingHours": "6:00 AM – 9:00 PM",
                "price": "Free",
                "image": "/images/attractions/sakura-no-yama.jpg",
                "description": "Scenic park with cherry blossoms and views of planes landing and taking off."
              }
            ],
            "airportDistance": "8 km",
            "faqs": [
              {
                "question": "Is there a shuttle service to Narita Airport?",
                "answer": "Yes, a free shuttle service runs regularly between the hotel and the airport."
              },
              {
                "question": "Are early check-ins available?",
                "answer": "Subject to availability. Contact the hotel in advance for arrangements."
              },
              {
                "question": "Is breakfast included?",
                "answer": "Not all room plans include breakfast. Please check your booking confirmation."
              },
              {
                "question": "Does the hotel have non-smoking rooms?",
                "answer": "Yes, both smoking and non-smoking rooms are available upon request."
              }
            ]
          },

          {
            "id": "shibuya-granbell-hotel-tokyo",
            "name": "Shibuya Granbell Hotel",
            "slug": "shibuya-granbell-hotel-tokyo",
            "location": "Shibuya, Tokyo, Japan",
            "city": "Tokyo",
            "country": "Japan",
            "price": 140,
            "rating": 3,
            "ratings": {
              "overall": 8.0,
              "totalReviews": 3500,
              "categories": []
            },
            "coordinates": {
              "lat": 35.6566,
              "lng": 139.6984
            },
            "cardImage": "/images/hotels/japan/Shibuya-Granbell-Hotel.jpg",
            "images": [
              "/images/hotels/japan/Shibuya-Granbell-Hotel/Shibuya-Granbell-Hotel-1.jpg",
              "/images/hotels/japan/Shibuya-Granbell-Hotel/Shibuya-Granbell-Hotel-2.jpg",
              "/images/hotels/japan/Shibuya-Granbell-Hotel/Shibuya-Granbell-Hotel-3.jpg",
              "/images/hotels/japan/Shibuya-Granbell-Hotel/Shibuya-Granbell-Hotel-4.jpg",
              "/images/hotels/japan/Shibuya-Granbell-Hotel/Shibuya-Granbell-Hotel-5.jpg",
           
            ],
            "highlights": [
              {
                "title": "3-Minute Walk from Shibuya Station",
                "description": "Superb central location with quick access to trains and city hotspots.",
                "icon": "train"
              },
              {
                "title": "Designer Interiors",
                "description": "Stylish, art-inspired rooms with modern Japanese flair.",
                "icon": "palette"
              },
              {
                "title": "Surrounded by Dining & Nightlife",
                "description": "Tons of restaurants, bars, and clubs right outside the hotel.",
                "icon": "utensils"
              }
            ],
            "description": {
              "short": "Trendy 3-star boutique hotel in Shibuya, perfect for travelers looking to stay near Tokyo’s iconic crossing.",
              "full": "Shibuya Granbell Hotel is a designer boutique hotel located just 3 minutes from Shibuya Station. With art-inspired interiors and individually themed rooms, the hotel blends modern design and comfort. It's a top choice for travelers wanting to explore Tokyo’s vibrant nightlife and culture, with easy access to Shinjuku, Harajuku, and beyond. On-site amenities include free Wi-Fi, a bar-restaurant, and laundry services."
            },
            "amenities": [
              {
                "name": "Free Wi-Fi",
                "icon": "wifi",
                "description": "High-speed internet access throughout the property."
              },
              {
                "name": "24-Hour Reception",
                "icon": "concierge-bell",
                "description": "Front desk services available around the clock."
              },
              {
                "name": "On-Site Dining",
                "icon": "utensils",
                "description": "In-house restaurant and bar for casual meals and drinks."
              },
              {
                "name": "Laundry Service",
                "icon": "tshirt",
                "description": "Paid laundry and dry-cleaning services available."
              },
              {
                "name": "Vending Machines",
                "icon": "coffee",
                "description": "Drink and snack vending machines on each floor."
              },
              {
                "name": "Luggage Storage",
                "icon": "suitcase-rolling",
                "description": "Free luggage storage before check-in or after check-out."
              }
            ],
            "rooms": [
              {
                "name": "Standard Single Room",
                "description": "Compact modern room for solo travelers, ideal for short stays.",
                "size": "14m²",
                "maxOccupancy": 1,
                "bedType": "Single",
                "images": ["/images/hotels/tokyo/shibuya-single.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Refrigerator"]
              },
              {
                "name": "Standard Double Room",
                "description": "Cozy room for two with contemporary design and queen bed.",
                "size": "18m²",
                "maxOccupancy": 2,
                "bedType": "Double",
                "images": ["/images/hotels/tokyo/shibuya-double.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Refrigerator"]
              },
              {
                "name": "Designer Queen Room",
                "description": "Spacious, stylish room with unique art pieces and city views.",
                "size": "22m²",
                "maxOccupancy": 2,
                "bedType": "Queen",
                "images": ["/images/hotels/tokyo/shibuya-designer.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Seating Area"]
              }
            ],
            "features": [
              "3-Minute Walk from Shibuya Station",
              "Designer Interiors",
              "Surrounded by Dining & Nightlife",
              "Bar & Restaurant",
              "Modern Japanese Décor",
              "Excellent City Access"
            ],
            "thingsToDo": [
              {
                "title": "Shibuya Scramble Crossing",
                "description": "Tokyo’s iconic crosswalk, alive with lights, people, and energy.",
                "distance": "0.5 km",
                "duration": "15-30 mins",
                "type": "Landmark",
                "image": "/images/activities/shibuya-crossing.jpg"
              },
              {
                "title": "Shibuya 109",
                "description": "Trendy fashion hub for youth culture and Japanese streetwear.",
                "distance": "0.6 km",
                "duration": "1-2 hours",
                "type": "Shopping",
                "image": "/images/activities/shibuya-109.jpg"
              },
              {
                "title": "Yoyogi Park",
                "description": "Popular park for picnics, walking, and weekend performances.",
                "distance": "2 km",
                "duration": "1-2 hours",
                "type": "Nature",
                "image": "/images/activities/yoyogi-park.jpg"
              }
            ],
            "restaurants": [
              {
                "name": "Cona Pizza Shibuya",
                "cuisine": "Italian",
                "distance": "On-site (1st Floor)",
                "priceRange": 2,
                "rating": 4.2,
                "openingHours": "5:00 PM – 12:00 AM",
                "image": "/images/restaurants/cona-shibuya.jpg",
                "description": "Casual pizzeria offering wood-fired pizza and drinks."
              }
            ],
            "attractions": [
              {
                "name": "Meiji Shrine",
                "type": "Cultural",
                "distance": "2.5 km",
                "openingHours": "5:00 AM – 6:00 PM",
                "price": "Free",
                "image": "/images/attractions/meiji-shrine.jpg",
                "description": "Serene shrine surrounded by forest, a peaceful break from the city."
              },
              {
                "name": "Harajuku Takeshita Street",
                "type": "Fashion & Culture",
                "distance": "2.2 km",
                "openingHours": "10:00 AM – 8:00 PM",
                "price": "Free",
                "image": "/images/attractions/takeshita-street.jpg",
                "description": "Colorful, youth-centric street lined with boutiques and snacks."
              }
            ],
            "airportDistance": "20 km (Haneda), 80 km (Narita)",
            "faqs": [
              {
                "question": "What time is check-in and check-out?",
                "answer": "Check-in is from 2:00 PM and check-out is until 11:00 AM."
              },
              {
                "question": "Is breakfast available?",
                "answer": "The hotel does not serve breakfast, but many nearby cafés open early."
              },
              {
                "question": "Do the rooms have bathtubs?",
                "answer": "Most rooms include deep Japanese-style bathtubs."
              },
              {
                "question": "Is there parking on-site?",
                "answer": "No private parking is available at the hotel."
              }
            ]
          }
          

          
        
       
      
       
      

      
      
       
      
     
]; 
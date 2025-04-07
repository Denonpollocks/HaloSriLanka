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

export const thailandHotels: Hotel[] = [
        
  
    {
        "id": "baiyoke-sky-hotel",
        "name": "Baiyoke Sky Hotel",
        "slug": "baiyoke-sky-hotel-bangkok",
        "location": "Bangkok, Thailand",
        "city": "Bangkok",
        "country": "Thailand",
        "price": 120,
        "rating": 4,
        "ratings": {
          "overall": 7.5,
          "totalReviews": 8500,
          "categories": []
        },
        "coordinates": {
          "lat": 13.7544,
          "lng": 100.5403
        },
        "cardImage": "/images/hotels/thailand/Baiyoke-Sky-Hotel.jpg",
        "images": [

          "/images/hotels/thailand/Baiyoke-Sky/Baiyoke-Sky-3.jpg",
          "/images/hotels/thailand/Baiyoke-Sky/Baiyoke-Sky-2.jpg",
          "/images/hotels/thailand/Baiyoke-Sky/Baiyoke-Sky-1.jpg",
          "/images/hotels/thailand/Baiyoke-Sky/Baiyoke-Sky-4.jpg",
          "/images/hotels/thailand/Baiyoke-Sky/Baiyoke-Sky-5.jpg",
          "/images/hotels/thailand/Baiyoke-Sky/Baiyoke-Sky-6.jpg",
          "/images/hotels/thailand/Baiyoke-Sky/Baiyoke-Sky-7.jpg",
        ],
        "highlights": [
          {
            "title": "Panoramic City Views",
            "description": "As Thailand's tallest hotel, enjoy breathtaking 360-degree views of Bangkok from the observation deck.",
            "icon": "binoculars"
          },
          {
            "title": "Central Location",
            "description": "Situated in the vibrant Pratunam area, renowned for its bustling markets and shopping centers.",
            "icon": "map-marker-alt"
          },
          {
            "title": "Sky-high Dining",
            "description": "Multiple dining venues located on the upper floors, offering a unique culinary experience with city vistas.",
            "icon": "utensils"
          }
        ],
        "description": {
          "short": "Iconic 88-story hotel in Bangkok's Pratunam district, offering unparalleled city views and proximity to major shopping hubs.",
          "full": "Baiyoke Sky Hotel stands as an iconic landmark in Bangkok, soaring 88 stories above the bustling Pratunam district. As Thailand's tallest hotel, it offers guests unparalleled panoramic views of the city skyline. The hotel features a range of dining options situated on its upper floors, providing a unique culinary experience amidst breathtaking vistas. Its central location places guests within walking distance of vibrant markets and major shopping centers, making it an ideal choice for both leisure and business travelers seeking a memorable stay in the heart of Bangkok."
        },
        "amenities": [
          {
            "name": "Free Wi-Fi",
            "icon": "wifi",
            "description": "Complimentary high-speed internet access throughout the hotel."
          },
          {
            "name": "Outdoor Pool",
            "icon": "swimmer",
            "description": "Relax and unwind in the hotel's outdoor swimming pool."
          },
          {
            "name": "Fitness Center",
            "icon": "dumbbell",
            "description": "Stay active with access to modern exercise equipment."
          },
          {
            "name": "Spa Services",
            "icon": "spa",
            "description": "Indulge in a variety of rejuvenating spa treatments."
          },
          {
            "name": "24-Hour Reception",
            "icon": "concierge-bell",
            "description": "Front desk services available around the clock for your convenience."
          },
          {
            "name": "Airport Shuttle",
            "icon": "shuttle-van",
            "description": "Convenient transportation services to and from the airport."
          }
        ],
        "rooms": [
          {
            "name": "Superior Room",
            "description": "Comfortable room with city views, featuring modern amenities.",
            "size": "32m²",
            "maxOccupancy": 2,
            "bedType": "King or Twin",
            "images": ["/images/hotels/bangkok/Baiyoke-Superior-Room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Deluxe Room",
            "description": "Spacious room located on higher floors, offering enhanced city views.",
            "size": "39m²",
            "maxOccupancy": 2,
            "bedType": "King or Twin",
            "images": ["/images/hotels/bangkok/Baiyoke-Deluxe-Room.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
          },
          {
            "name": "Suite",
            "description": "Luxurious suite with separate living area and panoramic city views.",
            "size": "65m²",
            "maxOccupancy": 3,
            "bedType": "King",
            "images": ["/images/hotels/bangkok/Baiyoke-Suite.jpg"],
            "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom", "Living Area"]
          }
        ],
        "features": [
          "Panoramic City Views",
          "Central Location",
          "Sky-high Dining",
          "Outdoor Pool",
          "Fitness Center",
          "Spa Services"
        ],
        "thingsToDo": [
          {
            "title": "Observation Deck",
            "description": "Experience breathtaking 360-degree views of Bangkok from the 84th-floor revolving observation deck.",
            "distance": "On-site",
            "duration": "1 hour",
            "type": "Attraction",
            "image": "/images/activities/baiyoke-observation-deck.jpg"
          },
          {
            "title": "Pratunam Market",
            "description": "Explore one of Bangkok's most vibrant street markets, known for affordable fashion and accessories.",
            "distance": "0.2 km",
            "duration": "2-3 hours",
            "type": "Shopping",
            "image": "/images/activities/pratunam-market.jpg"
          },
          {
            "title": "Siam Paragon",
            "description": "Visit a premier shopping mall offering luxury brands, diverse dining options, and entertainment facilities.",
            "distance": "2 km",
            "duration": "3-4 hours",
            "type": "Shopping",
            "image": "/images/activities/siam-paragon.jpg"
          }
        ],
        "restaurants": [
            {
              "name": "Bangkok Sky Restaurant",
              "cuisine": "International Buffet",
              "distance": "On-site",
              "priceRange": 3,
              "rating": 4.2,
              "openingHours": "Breakfast: 6:00 AM - 10:00 AM, Lunch: 11:30 AM - 2:30 PM, Dinner: 5:30 PM - 10:00 PM",
              "image": "/images/restaurants/bangkok-sky-restaurant.jpg",
              "description": "Located on the 76th and 78th floors, this buffet restaurant offers global cuisine with sweeping views of Bangkok."
            },
            {
              "name": "Stella Palace Chinese Restaurant",
              "cuisine": "Chinese",
              "distance": "On-site",
              "priceRange": 4,
              "rating": 4.5,
              "openingHours": "6:00 PM - 10:00 PM",
              "image": "/images/restaurants/stella-palace.jpg",
              "description": "Authentic Cantonese and Chinese delicacies served in an elegant setting on the 79th floor."
            },
            {
              "name": "Baiyoke Floating Market",
              "cuisine": "Thai",
              "distance": "On-site",
              "priceRange": 2,
              "rating": 4.1,
              "openingHours": "6:00 PM - 10:00 PM",
              "image": "/images/restaurants/baiyoke-floating-market.jpg",
              "description": "A unique Thai dining experience inspired by traditional floating markets with live cooking stations."
            }
          ],
          "attractions": [
            {
              "name": "Victory Monument",
              "type": "Landmark",
              "distance": "1.2 km",
              "openingHours": "All day",
              "price": "Free",
              "image": "/images/attractions/victory-monument.jpg",
              "description": "An iconic roundabout monument in Bangkok, surrounded by bustling local shops and restaurants."
            },
            {
              "name": "Jim Thompson House",
              "type": "Museum",
              "distance": "2.5 km",
              "openingHours": "10:00 AM - 6:00 PM",
              "price": "$",
              "image": "/images/attractions/jim-thompson-house.jpg",
              "description": "A museum housing traditional Thai architecture and art, offering a glimpse into Thai silk history."
            },
            {
              "name": "Chatuchak Weekend Market",
              "type": "Market",
              "distance": "6.5 km",
              "openingHours": "Saturday - Sunday: 9:00 AM - 6:00 PM",
              "price": "Free",
              "image": "/images/attractions/chatuchak-market.jpg",
              "description": "One of the world’s largest markets, with over 15,000 stalls selling everything from fashion to food."
            }
          ],
          "airportDistance": "25 km",
          "faqs": [
            {
              "question": "What are the check-in and check-out times?",
              "answer": "Check-in is from 2:00 PM, and check-out is until 12:00 PM."
            },
            {
              "question": "Is airport transportation available?",
              "answer": "Yes, the hotel offers airport shuttle service at an additional charge."
            },
            {
              "question": "Does the observation deck require a ticket?",
              "answer": "Hotel guests receive complimentary access to the observation deck on the 84th floor."
            },
            {
              "question": "Are there vegetarian options at the restaurants?",
              "answer": "Yes, all restaurants offer vegetarian selections as part of their menus."
            }
          ]
        },

        {
            "id": "bangkok-palace-hotel",
            "name": "Bangkok Palace Hotel",
            "slug": "bangkok-palace-hotel-bangkok",
            "location": "Bangkok, Thailand",
            "city": "Bangkok",
            "country": "Thailand",
            "price": 80,
            "rating": 4,
            "ratings": {
              "overall": 7.0,
              "totalReviews": 5000,
              "categories": []
            },
            "coordinates": {
              "lat": 13.7500,
              "lng": 100.5420
            },
            "cardImage": "/images/hotels/thailand/Bangkok-Palace-Hotel.jpg",
            "images": [
              "/images/hotels/thailand/Bangkok-Palace/Bangkok-Palace-Hotel-1.jpg",
              "/images/hotels/thailand/Bangkok-Palace/Bangkok-Palace-Hotel-2.jpg",
              "/images/hotels/thailand/Bangkok-Palace/Bangkok-Palace-Hotel-3.jpg",
              "/images/hotels/thailand/Bangkok-Palace/Bangkok-Palace-Hotel-4.jpg",
              "/images/hotels/thailand/Bangkok-Palace/Bangkok-Palace-Hotel-5.jpg",  
              "/images/hotels/thailand/Bangkok-Palace/Bangkok-Palacel-Hotel-6.jpg",
              "/images/hotels/thailand/Bangkok-Palace/Bangkok-Palace-Hotel-7.jpg",
            ],
            "highlights": [
              {
                "title": "Central Location",
                "description": "Situated in the Makkasan-Pratunam area, offering easy access to shopping and business districts.",
                "icon": "map-marker-alt"
              },
              {
                "title": "Outdoor Pool",
                "description": "Enjoy a refreshing swim in the hotel's large outdoor pool.",
                "icon": "swimmer"
              },
              {
                "title": "On-Site Dining",
                "description": "Multiple dining options featuring Thai and international cuisine.",
                "icon": "utensils"
              }
            ],
            "description": {
              "short": "Comfortable 4-star hotel in Bangkok's Makkasan-Pratunam district, close to major shopping centers.",
              "full": "Bangkok Palace Hotel offers comfortable accommodations in the heart of Bangkok's Makkasan-Pratunam district. Guests can enjoy well-appointed rooms, an outdoor swimming pool, and multiple dining options. The hotel's central location provides easy access to popular shopping destinations like Pratunam Market and Platinum Fashion Mall."
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
                "name": "Fitness Center",
                "icon": "dumbbell",
                "description": "Stay active with access to modern exercise equipment."
              },
              {
                "name": "24-Hour Reception",
                "icon": "concierge-bell",
                "description": "Front desk services available around the clock."
              },
              {
                "name": "On-Site Dining",
                "icon": "utensils",
                "description": "Restaurants serving Thai and international dishes."
              },
              {
                "name": "Room Service",
                "icon": "hotel",
                "description": "In-room dining available for guests."
              }
            ],
            "rooms": [
              {
                "name": "Superior Room",
                "description": "Comfortable room with modern amenities and city views.",
                "size": "28m²",
                "maxOccupancy": 2,
                "bedType": "Double or Twin",
                "images": ["/images/hotels/bangkok-palace-superior-room.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
              },
              {
                "name": "Deluxe Room",
                "description": "Spacious room with enhanced amenities and city views.",
                "size": "28m²",
                "maxOccupancy": 2,
                "bedType": "Double or Twin",
                "images": ["/images/hotels/bangkok-palace-deluxe-room.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
              },
              {
                "name": "Executive Room",
                "description": "Luxurious room with additional amenities and city views.",
                "size": "28m²",
                "maxOccupancy": 2,
                "bedType": "Double or Twin",
                "images": ["/images/hotels/bangkok-palace-executive-room.jpg"],
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Satellite TV", "Minibar", "Private Bathroom"]
              }
            ],
            "features": [
              "Central Location",
              "Outdoor Pool",
              "On-Site Dining",
              "Fitness Center",
              "24-Hour Reception",
              "Room Service"
            ],
            "thingsToDo": [
              {
                "title": "Pratunam Market",
                "description": "Explore one of Bangkok's most vibrant street markets, known for affordable fashion and accessories.",
                "distance": "0.5 km",
                "duration": "2-3 hours",
                "type": "Shopping",
                "image": "/images/activities/pratunam-market.jpg"
              },
              {
                "title": "Platinum Fashion Mall",
                "description": "Shop at a popular wholesale mall offering a wide range of clothing and accessories.",
                "distance": "1 km",
                "duration": "2-3 hours",
                "type": "Shopping",
                "image": "/images/activities/platinum-fashion-mall.jpg"
              },
              {
                "title": "Central World",
                "description": "Visit one of Bangkok's largest shopping complexes, featuring retail stores, dining, and entertainment options.",
                "distance": "1.5 km",
                "duration": "3-4 hours",
                "type": "Shopping",
                "image": "/images/activities/central-world.jpg"
              }
            ],
            "restaurants": [
                {
                  "name": "Makkasan Restaurant",
                  "cuisine": "International Buffet",
                  "distance": "On-site",
                  "priceRange": 3,
                  "rating": 4.0,
                  "openingHours": "6:00 AM - 11:00 PM",
                  "image": "/images/restaurants/makkasan-restaurant.jpg",
                  "description": "Offers a wide selection of international dishes in a buffet setting."
                },
                {
                  "name": "Palace Bakery",
                  "cuisine": "Bakery and Café",
                  "distance": "On-site",
                  "priceRange": 2,
                  "rating": 4.2,
                  "openingHours": "7:00 AM - 8:00 PM",
                  "image": "/images/restaurants/palace-bakery.jpg",
                  "description": "Serves pastries, homemade ice creams, and hot beverages."
                }
              ],
              "attractions": [
                {
                  "name": "Suan Pakkad Palace Museum",
                  "type": "Museum",
                  "distance": "1.2 km",
                  "openingHours": "9:00 AM - 4:00 PM",
                  "price": "$",
                  "image": "/images/attractions/suan-pakkad-palace.jpg",
                  "description": "A historic Thai palace showcasing traditional architecture and antiques."
                },
                {
                  "name": "MBK Center",
                  "type": "Shopping Mall",
                  "distance": "2.5 km",
                  "openingHours": "10:00 AM - 10:00 PM",
                  "price": "Free",
                  "image": "/images/attractions/mbk-center.jpg",
                  "description": "Popular shopping center known for electronics, souvenirs, and fashion."
                },
                {
                  "name": "Erawan Shrine",
                  "type": "Religious Site",
                  "distance": "2 km",
                  "openingHours": "6:00 AM - 10:00 PM",
                  "price": "Free",
                  "image": "/images/attractions/erawan-shrine.jpg",
                  "description": "A famous shrine attracting both worshippers and tourists."
                }
              ],
              "airportDistance": "27 km",
              "faqs": [
                {
                  "question": "What time is check-in and check-out at Bangkok Palace Hotel?",
                  "answer": "Check-in is from 2:00 PM, and check-out is until 12:00 PM."
                },
                {
                  "question": "Does the hotel offer airport transportation?",
                  "answer": "Yes, airport shuttle services are available at an additional charge."
                },
                {
                  "question": "Is there a fitness center at the hotel?",
                  "answer": "Yes, the hotel provides a well-equipped fitness center for guests."
                },
                {
                  "question": "Is breakfast included in the room rate?",
                  "answer": "Breakfast is included in some room packages. Please check your booking details."
                }
              ]
            }
            
   
           

      
      
       
      
     
]; 
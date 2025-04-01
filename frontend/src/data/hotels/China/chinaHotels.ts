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

export const chinaHotels: Hotel[] = [
   

  {
    "id": "crowne-plaza-guangzhou-city-centre",
    "name": "Crowne Plaza Guangzhou City Centre",
    "slug": "crowne-plaza-guangzhou-city-centre",
    "location": "Guangzhou, China",
    "city": "Guangzhou",
    "country": "China",
    "price": 138,
    "rating": 4.5,
    "ratings": {
      "overall": 8.5,
      "totalReviews": 2000,
      "categories": []
    },
    "coordinates": {
      "lat": 23.1346,
      "lng": 113.2760
    },
    "cardImage": "/images/hotels/guangzhou/Crowne-Plaza-Guangzhou-City-Centre.jpg",
    "images": [
      "/images/hotels/guangzhou/crowne-plaza-1.jpg",
      "/images/hotels/guangzhou/crowne-plaza-2.jpg",
      "/images/hotels/guangzhou/crowne-plaza-3.jpg",
      "/images/hotels/guangzhou/crowne-plaza-4.jpg",
      "/images/hotels/guangzhou/crowne-plaza-5.jpg"
    ],
    "highlights": [
      {
        "title": "Central Location",
        "description": "Situated on Huanshi Road East, in the heart of Guangzhou's bustling commercial and shopping district.",
        "icon": "map-marker-alt"
      },
      {
        "title": "Spacious Accommodations",
        "description": "Features 460 well-appointed guest rooms and suites with extensive city or greenery views.",
        "icon": "bed"
      },
      {
        "title": "Diverse Dining Options",
        "description": "Offers multiple on-site restaurants serving Cantonese and international cuisine.",
        "icon": "utensils"
      }
    ],
    "description": {
      "short": "A 5-star hotel in Guangzhou offering luxurious rooms, modern amenities, and convenient access to major attractions.",
      "full": "Crowne Plaza Guangzhou City Centre is an exclusive international 5-star hotel located on Huanshi Road East, the heart of downtown's bustling commercial and shopping district. The hotel features 460 well-appointed guest rooms and suites with extensive city or greenery views. Guests can enjoy complimentary Wi-Fi and a collection of specialty pillows for a comfortable stay. With multiple dining options, including authentic Cantonese cuisine at Baiyuelou Restaurant and international dishes at Appetite, the hotel caters to diverse culinary preferences. Its strategic location provides easy access to tourist attractions like Canton Tower, Baiyun Mountain, and Yuexiu Park."
    },
    "amenities": [
      {
        "name": "Free Wi-Fi",
        "icon": "wifi",
        "description": "Complimentary high-speed internet access throughout the hotel."
      },
      {
        "name": "Fitness Center",
        "icon": "dumbbell",
        "description": "Well-equipped gym open from 5:30 AM to 11:00 PM."
      },
      {
        "name": "Outdoor Swimming Pool",
        "icon": "swimming-pool",
        "description": "Relaxing pool area available for guests."
      },
      {
        "name": "Spa Services",
        "icon": "spa",
        "description": "On-site spa offering a range of rejuvenating treatments."
      },
      {
        "name": "Business Center",
        "icon": "briefcase",
        "description": "Comprehensive business facilities with meeting rooms and state-of-the-art equipment."
      },
      {
        "name": "Children's Play Area",
        "icon": "child",
        "description": "Dedicated play areas equipped with various children's facilities."
      }
    ],
    "rooms": [
      {
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities and elegant décor.",
        "size": "35m²",
        "maxOccupancy": 2,
        "bedType": "1 King or 2 Twin beds",
        "images": ["/images/hotels/guangzhou/standard-room.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe"]
      },
      {
        "name": "Premium Room",
        "description": "Spacious room offering enhanced comfort and city views.",
        "size": "40m²",
        "maxOccupancy": 2,
        "bedType": "1 King or 2 Twin beds",
        "images": ["/images/hotels/guangzhou/premium-room.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Seating Area"]
      },
      {
        "name": "One-Bedroom Suite",
        "description": "Luxurious suite with separate living area and panoramic city views.",
        "size": "60m²",
        "maxOccupancy": 2,
        "bedType": "1 King bed",
        "images": ["/images/hotels/guangzhou/one-bedroom-suite.jpg"],
        "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Living Area"]
      }
    ],
    "features": [
      "Central location in Guangzhou's commercial district",
      "Spacious rooms with city or greenery views",
      "Multiple on-site dining options",
      "Comprehensive business facilities",
      "Fitness center and outdoor pool",
      "Children's play area"
    ],
    "thingsToDo": [
      {
        "title": "Canton Tower",
        "description": "Visit the iconic tower offering panoramic views of Guangzhou.",
        "distance": "6 km",
        "duration": "2-3 hours",
        "type": "Landmark",
        "image": "/images/activities/canton-tower.jpg"
      },
      {
        "title": "Yuexiu Park",
        "description": "Explore the largest park in downtown Guangzhou, featuring beautiful landscapes and historical sites.",
        "distance": "2 km",
        "duration": "1-2 hours",
        "type": "Park",
        "image": "/images/activities/yuexiu-park.jpg"
      },
      {
        "title": "Beijing Road Pedestrian Street",
        "description": "Enjoy shopping and local cuisine at this popular pedestrian street.",
        "distance": "2.5 km",
        "duration": "2-3 hours",
        "type": "Shopping",
        "image": "/images/activities/beijing-road.jpg"
      }
    ],
    "restaurants": [
      {
        "name": "Baiyuelou Restaurant",
        "cuisine": "Cantonese",
        "distance": "On-site",
        "priceRange": 3,
        "rating": 4.5,
        "openingHours": "11:00 AM – 10:00 PM",
        "image": "/images/restaurants/baiyuelou.jpg",
        "description": "Offers authentic Cantonese cuisine featuring organic and fresh specialties."
      },
      {
        "name": "Appetite",
        "cuisine": "International",
        "distance": "On-site",
        "priceRange": 2,
        "rating": 4.3
        ,
      "openingHours": "6:30 AM – 10:00 PM",
      "image": "/images/restaurants/appetite.jpg",
      "description": "All-day dining restaurant offering a variety of international dishes in buffet and à la carte formats."
    }
  ],
  "attractions": [
    {
      "name": "Guangdong Museum",
      "type": "Museum",
      "distance": "5.5 km",
      "openingHours": "9:00 AM – 5:00 PM",
      "price": "Free",
      "image": "/images/attractions/guangdong-museum.jpg",
      "description": "Modern museum featuring exhibitions on history, art, and natural science with striking architecture."
    },
    {
      "name": "Shamian Island",
      "type": "Historical Site",
      "distance": "5 km",
      "openingHours": "All day",
      "price": "Free",
      "image": "/images/attractions/shamian-island.jpg",
      "description": "Historic colonial district with tree-lined avenues, charming architecture, and riverside views."
    },
    {
      "name": "Chen Clan Ancestral Hall",
      "type": "Cultural Landmark",
      "distance": "4.5 km",
      "openingHours": "8:30 AM – 5:30 PM",
      "price": "$",
      "image": "/images/attractions/chen-clan-academy.jpg",
      "description": "Traditional Lingnan-style building housing folk art and historic artifacts."
    }
  ],
  "airportDistance": "31 km (Guangzhou Baiyun International Airport)",
  "faqs": [
    {
      "question": "Is airport transportation available?",
      "answer": "Yes, airport transfer can be arranged by the hotel upon request for an additional fee."
    },
    {
      "question": "Is breakfast included in the room rate?",
      "answer": "Breakfast is included in most room packages. Please check your booking details to confirm."
    },
    {
      "question": "Does the hotel have a swimming pool?",
      "answer": "Yes, the hotel features a seasonal outdoor swimming pool."
    },
    {
      "question": "Are there facilities for business travelers?",
      "answer": "Yes, the hotel has a fully equipped business center and several meeting rooms."
    }
  ]
},

{
  "id": "guangzhou-hotel",
  "name": "Guangzhou Hotel",
  "slug": "guangzhou-hotel",
  "location": "Guangzhou, China",
  "city": "Guangzhou",
  "country": "China",
  "price": 80,
  "rating": 3.5,
  "ratings": {
    "overall": 7.0,
    "totalReviews": 1500,
    "categories": []
  },
  "coordinates": {
    "lat": 23.1168,
    "lng": 113.2536
  },
  "cardImage": "/images/hotels/guangzhou/Crowne-Plaza-Guangzhou-City-Centre.jpg",
  "images": [
    "/images/hotels/guangzhou/guangzhou-hotel-1.jpg",
    "/images/hotels/guangzhou/guangzhou-hotel-2.jpg",
    "/images/hotels/guangzhou/guangzhou-hotel-3.jpg",
    "/images/hotels/guangzhou/guangzhou-hotel-4.jpg",
    "/images/hotels/guangzhou/guangzhou-hotel-5.jpg"
  ],
  "highlights": [
    {
      "title": "Central Location",
      "description": "Situated in the Yuexiu District, offering easy access to popular attractions and transportation.",
      "icon": "map-marker-alt"
    },
    {
      "title": "Panoramic City Views",
      "description": "Guests can enjoy stunning views of Guangzhou's skyline from their rooms.",
      "icon": "city"
    },
    {
      "title": "On-Site Dining",
      "description": "Features multiple restaurants serving Cantonese and international cuisines.",
      "icon": "utensils"
    }
  ],
  "description": {
    "short": "A well-established hotel in Guangzhou offering comfortable accommodations with modern amenities, conveniently located in the heart of the city.",
    "full": "Guangzhou Hotel, a prominent 27-story establishment in the Yuexiu District, has been serving guests since 1968. Known for its central location, the hotel provides easy access to Guangzhou's bustling commercial areas and cultural sites. Guests can enjoy panoramic city views from well-appointed rooms equipped with modern amenities. The hotel features multiple on-site dining options, including traditional Cantonese cuisine and international dishes, catering to diverse culinary preferences. With its blend of historic charm and contemporary comfort, Guangzhou Hotel offers a unique stay experience in the heart of the city."
  },
  "amenities": [
    {
      "name": "Free Wi-Fi",
      "icon": "wifi",
      "description": "Complimentary high-speed internet access available throughout the hotel."
    },
    {
      "name": "Business Center",
      "icon": "briefcase",
      "description": "Facilities equipped with computers, printers, and meeting rooms for business travelers."
    },
    {
      "name": "Fitness Center",
      "icon": "dumbbell",
      "description": "On-site gym equipped with modern exercise equipment."
    },
    {
      "name": "24-Hour Front Desk",
      "icon": "concierge-bell",
      "description": "Round-the-clock reception services to assist guests at any time."
    },
    {
      "name": "Room Service",
      "icon": "concierge-bell",
      "description": "In-room dining options available for guests' convenience."
    },
    {
      "name": "Laundry Service",
      "icon": "tshirt",
      "description": "On-site laundry and dry-cleaning services available."
    }
  ],
  "rooms": [
    {
      "name": "Standard Room",
      "description": "Comfortable room with essential amenities and city views.",
      "size": "25m²",
      "maxOccupancy": 2,
      "bedType": "1 Queen or 2 Twin beds",
      "images": ["/images/hotels/guangzhou/standard-room.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe"]
    },
    {
      "name": "Deluxe Room",
      "description": "Spacious room offering enhanced comfort and better city views.",
      "size": "30m²",
      "maxOccupancy": 2,
      "bedType": "1 King or 2 Twin beds",
      "images": ["/images/hotels/guangzhou/deluxe-room.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Seating Area"]
    },
    {
      "name": "Executive Suite",
      "description": "Luxurious suite with separate living area and panoramic city views.",
      "size": "50m²",
      "maxOccupancy": 2,
      "bedType": "1 King bed",
      "images": ["/images/hotels/guangzhou/executive-suite.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Living Area"]
    }
  ],
  "features": [
    "Central location in Yuexiu District",
    "Panoramic city views",
    "Multiple on-site dining options",
    "Comprehensive business facilities",
    "Fitness center",
    "Historic charm with modern amenities"
  ],
  "thingsToDo": [
    {
      "title": "Beijing Road Pedestrian Street",
      "description": "A bustling shopping street offering a mix of modern shops and historic sites.",
      "distance": "1 km",
      "duration": "2-3 hours",
      "type": "Shopping",
      "image": "/images/activities/beijing-road.jpg"
    },
    {
      "title": "Yuexiu Park",
      "description": "The largest park in downtown Guangzhou, featuring beautiful landscapes and historical relics.",
      "distance": "2 km",
      "duration": "1-2 hours",
      "type": "Park",
      "image": "/images/activities/yuexiu-park.jpg"
    },
    {
      "title": "Canton Tower",
      "description": "A landmark of Guangzhou, offering panoramic views of the city from its observation deck.",
      "distance": "6 km",
      "duration": "2-3 hours",
      "type": "Landmark",
      "image": "/images/activities/canton-tower.jpg"
    }
  ],
  "restaurants": [
    {
      "name": "Xinghui Bakery",
      "cuisine": "Bakery",
      "distance": "On-site",
      "priceRange": 2,
      "rating": 4.0,
      "openingHours": "7:00 AM – 10:00 PM",
      "image": "/images/restaurants/xinghui-bakery.jpg",
      "description": "Offers a variety of freshly baked goods and pastries."
    },
    {
      "name": "Deyungong Restaurant",
      "cuisine": "Cantonese",
      "distance": "On-site",
      "priceRange": 3,
      "rating": 4.5,
      "openingHours": "11:00 AM – 10:00 PM",
      "image": "/images/restaurants/deyungong-restaurant.jpg",
      "description": "Traditional Cantonese dining experience featuring dim sum, seafood, and local delicacies in an elegant setting."
    }
  ],
  "attractions": [
    {
      "name": "Shamian Island",
      "type": "Historical Site",
      "distance": "3.5 km",
      "openingHours": "All day",
      "price": "Free",
      "image": "/images/attractions/shamian-island.jpg",
      "description": "Colonial-era island with picturesque tree-lined streets and historical European architecture."
    },
    {
      "name": "Chen Clan Ancestral Hall",
      "type": "Cultural Landmark",
      "distance": "4 km",
      "openingHours": "8:30 AM – 5:30 PM",
      "price": "$",
      "image": "/images/attractions/chen-clan-academy.jpg",
      "description": "A stunning example of Lingnan architecture, showcasing traditional Chinese art and heritage."
    },
    {
      "name": "Guangzhou Opera House",
      "type": "Theatre & Arts",
      "distance": "7.5 km",
      "openingHours": "10:00 AM – 10:00 PM (varies by event)",
      "price": "$$",
      "image": "/images/attractions/guangzhou-opera-house.jpg",
      "description": "One of the top performing arts venues in China, offering concerts, opera, and cultural performances."
    }
  ],
  "airportDistance": "32 km (Guangzhou Baiyun International Airport)",
  "faqs": [
    {
      "question": "Is airport transportation available?",
      "answer": "Yes, shuttle or private airport transfers can be arranged for an additional charge."
    },
    {
      "question": "Is breakfast included?",
      "answer": "Buffet breakfast is available for an additional fee or included depending on the package."
    },
    {
      "question": "Does the hotel accept international guests?",
      "answer": "Yes, the hotel caters to both domestic and international travelers and offers multilingual staff."
    },
    {
      "question": "Are there meeting or conference facilities?",
      "answer": "Yes, Guangzhou Hotel provides meeting rooms and business support services for events and conferences."
    }
  ]
},

{
  "id": "hotel-canton-guangzhou",
  "name": "Hotel Canton",
  "slug": "hotel-canton-guangzhou",
  "location": "Guangzhou, China",
  "city": "Guangzhou",
  "country": "China",
  "price": 90,
  "rating": 4,
  "ratings": {
    "overall": 8.0,
    "totalReviews": 1500,
    "categories": []
  },
  "coordinates": {
    "lat": 23.1255,
    "lng": 113.2655
  },
  "cardImage": "/images/hotels/guangzhou/hotel-canton-1.jpg",
  "images": [
    "/images/hotels/guangzhou/hotel-canton-1.jpg",
    "/images/hotels/guangzhou/hotel-canton-2.jpg",
    "/images/hotels/guangzhou/hotel-canton-3.jpg",
    "/images/hotels/guangzhou/hotel-canton-4.jpg",
    "/images/hotels/guangzhou/hotel-canton-5.jpg"
  ],
  "highlights": [
    {
      "title": "Central Location",
      "description": "Located in the Yuexiu District, providing easy access to Guangzhou's commercial and shopping areas.",
      "icon": "map-marker-alt"
    },
    {
      "title": "Comprehensive Amenities",
      "description": "Features a fitness center, sauna, and seasonal outdoor swimming pool for guest relaxation.",
      "icon": "swimming-pool"
    },
    {
      "title": "On-Site Dining",
      "description": "Offers multiple dining options serving Cantonese and international cuisines.",
      "icon": "utensils"
    }
  ],
  "description": {
    "short": "A 4-star hotel in Guangzhou offering comfortable accommodations with modern amenities, centrally located near popular attractions.",
    "full": "Hotel Canton is a well-established 4-star hotel situated in Guangzhou's Yuexiu District, placing guests within walking distance of popular areas like Beijing Road Pedestrian Street. The hotel offers 465 guest rooms equipped with modern amenities, including free Wi-Fi, flat-screen TVs, and minibars. Guests can enjoy a range of facilities such as a fitness center, sauna, and a seasonal outdoor pool. Multiple on-site dining options serve a variety of Cantonese and international dishes, catering to diverse culinary tastes. With its central location and comprehensive amenities, Hotel Canton provides a convenient and comfortable stay for both business and leisure travelers."
  },
  "amenities": [
    {
      "name": "Free Wi-Fi",
      "icon": "wifi",
      "description": "Complimentary high-speed internet access throughout the hotel."
    },
    {
      "name": "Fitness Center",
      "icon": "dumbbell",
      "description": "Well-equipped gym available for guest use."
    },
    {
      "name": "Seasonal Outdoor Pool",
      "icon": "swimming-pool",
      "description": "Outdoor swimming pool open during the warmer months."
    },
    {
      "name": "Sauna",
      "icon": "spa",
      "description": "Sauna facilities available for relaxation."
    },
    {
      "name": "Business Center",
      "icon": "briefcase",
      "description": "Comprehensive business services including meeting rooms and conference facilities."
    },
    {
      "name": "24-Hour Front Desk",
      "icon": "concierge-bell",
      "description": "Round-the-clock reception services to assist guests at any time."
    }
  ],
  "rooms": [
    {
      "name": "Standard Room",
      "description": "Comfortable room with essential amenities and city views.",
      "size": "30m²",
      "maxOccupancy": 2,
      "bedType": "1 Queen or 2 Twin beds",
      "images": ["/images/hotels/guangzhou/standard-room.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe"]
    },
    {
      "name": "Deluxe Room",
      "description": "Spacious room offering enhanced comfort and better city views.",
      "size": "35m²",
      "maxOccupancy": 2,
      "bedType": "1 King or 2 Twin beds",
      "images": ["/images/hotels/guangzhou/deluxe-room.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Seating Area"]
    },
    {
      "name": "Executive Suite",
      "description": "Luxurious suite with separate living area and panoramic city views.",
      "size": "50m²",
      "maxOccupancy": 2,
      "bedType": "1 King bed",
      "images": ["/images/hotels/guangzhou/executive-suite.jpg"],
      "amenities": ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Minibar", "Safe", "Living Area"]
    }
  ],
  "features": [
    "Central location in Yuexiu District",
    "Comprehensive amenities including fitness center and pool",
    "Multiple on-site dining options",
    "Business facilities with meeting rooms",
    "Proximity to shopping areas like Beijing Road",
    "Comfortable and spacious rooms with city views"
  ],
  "thingsToDo": [
    {
      "title": "Beijing Road Pedestrian Street",
      "description": "A bustling shopping street offering a mix of modern shops and historic sites.",
      "distance": "0.5 km",
      "duration": "2-3 hours",
      "type": "Shopping",
      "image": "/images/activities/beijing-road.jpg"
    },
    {
      "title": "Yuexiu Park",
      "description": "The largest park in downtown Guangzhou, featuring beautiful landscapes and historical relics.",
      "distance": "2 km",
      "duration": "1-2 hours",
      "type": "Park",
      "image": "/images/activities/yuexiu-park.jpg"
    },
    {
      "title": "Canton Tower",
      "description": "A landmark of Guangzhou, offering panoramic views of the city from its observation deck.",
      "distance": "6 km",
      "duration": "2-3 hours",
      "type": "Landmark",
      "image": "/images/activities/canton-tower.jpg"
    }
  ],
  "restaurants": [
    {
      "name": "On-Site Restaurant",
      "cuisine": "Cantonese & International",
      "distance": "On-site",
      "priceRange": 2,
      "rating": 4.0,
      "openingHours": "6:30 AM – 10:00 PM",
      "image": "/images/restaurants/on-site-restaurant.jpg",
      "description": "Offers a variety of Cantonese and international dishes in a comfortable setting."
    }
  ],
  "attractions": [
    {
      "name": "Guangdong Museum",
      "type": "Museum",
      "distance": "5.5 km",
      "openingHours": "9:00 AM – 5:00 PM",
      "price": "Free",
      "image": "/images/attractions/guangdong-museum.jpg",
      "description": "Explore exhibitions on Guangdong's natural history, art, and culture in a striking architectural setting."
    },
    {
      "name": "Shamian Island",
      "type": "Historical District",
      "distance": "4 km",
      "openingHours": "All day",
      "price": "Free",
      "image": "/images/attractions/shamian-island.jpg",
      "description": "Tree-lined colonial-style neighborhood with cafes, parks, and heritage architecture along the Pearl River."
    },
    {
      "name": "Temple of the Six Banyan Trees",
      "type": "Cultural Site",
      "distance": "2 km",
      "openingHours": "8:30 AM – 5:30 PM",
      "price": "$",
      "image": "/images/attractions/temple-six-banyan-trees.jpg",
      "description": "Historic Buddhist temple complex with an iconic flower pagoda and rich spiritual significance."
    }
  ],
  "airportDistance": "32 km (Guangzhou Baiyun International Airport)",
  "faqs": [
    {
      "question": "Is airport shuttle available?",
      "answer": "Yes, airport transfers can be arranged for an additional charge. Please contact the hotel in advance."
    },
    {
      "question": "Is breakfast included in the room rate?",
      "answer": "Breakfast is included with certain room packages or available as an add-on during booking."
    },
    {
      "question": "Does the hotel have conference facilities?",
      "answer": "Yes, Hotel Canton offers multiple meeting rooms and a business center with full amenities."
    },
    {
      "question": "Are pets allowed at the hotel?",
      "answer": "No, pets are not allowed at Hotel Canton except for service animals."
    }
  ]
}

 



 


   
  
     
      

      
      
       
      
     
]; 
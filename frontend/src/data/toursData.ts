import { TourData } from '@/types/tours';


export const travelModes = ['flight', 'transfer', 'tour', 'walking', 'coach', 'boat', 'train'] as const;
export type TravelMode = typeof travelModes[number];

// Create a mapping object for your icons


export const toursData: Record<string, TourData> = {
  "grand-tour-of-sri-lanka": {
    title: "Grand Tour of Sri Lanka",
    subtitle: "17 Day Escorted Tour",
    location: "Sri Lanka, Indian Ocean",
    price: 2499,
    heroImage: "/tour-images/sri-lanka-1.jpg",
    mapImage: "/tour-images/sri-lanka-map.jpg",
    duration: "17 days",
    tourCode: "SL17",
    pdfLink: "/pdfs/grand-tour-of-sri-lanka.pdf",
    gallery: [
      "/tour-images/sri-lanka-1.jpg",
      "/tour-images/sri-lanka-2.jpg",
      "/tour-images/sri-lanka-3.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "44 Meals Included" },
      { icon: 'excursions', label: "Excursions", value: "16 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Included" }
    ],

    description: "Journey to the heart of this captivating island, boasting an incredible variety of highlights from undiscovered pristine beaches in the East, to ancient civilizations and sacred pilgrimage sites in the Cultural Triangle. Journey high up into the tea plantations of Sri Lanka's hill country...",

    galleryPhotos: [
      {
        src: "/tour-images/sri-lanka-1.jpg",
        alt: "Sigiriya Rock Fortress",
        caption: "The ancient palace and fortress complex of Sigiriya"
      },
      {
        src: "/tour-images/sri-lanka-2.jpg",
        alt: "Tea Plantations",
        caption: "Stunning tea plantations in Nuwara Eliya"
      },
      {
        src: "/tour-images/sri-lanka-3.jpg",
        alt: "Temple of the Tooth",
        caption: "The sacred Temple of the Tooth in Kandy"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Visit temples and bazaars on a tour of Colombo",
        "Relax upon the beaches of Passikudah and Mirissa",
        "Explore the magnificent Sigiriya Rock Fortress and Dambulla Rock Temple",
        "Discover Kandy's sacred Temple of the Tooth",
        "Wander the ancient city ruins of Anuradhapura",
        "Enjoy a tour of the lush Nuwara Eliya tea plantation",
        "Wildlife safaris through Yala and Udawalawe National Parks",
        "Marvel at the beauty of Peradeniya botanical gardens",
        "Tour Galle's colonial buildings and UNESCO-listed centre"
      ],
      points: [],
      mapKey: [
        { label: "Train", color: "green" },
        { label: "Coach", color: "black" },
        { label: "Boat", color: "blue" },
        { label: "Airplane", color: "red" },
        { label: "Walking", color: "orange" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 0,
        title: "UK to Colombo",
        description: "Depart London on your scheduled, overnight flight to Colombo.",
        travelModes: ['flight', 'transfer', 'tour', 'walking', 'coach', 'boat']
      }
    ],

    includedItems: [
      "Hand-picked Accommodation",
      "Expert Local Guides",
      "Overseas Transfers ",
      "44 Meals",
      "All entrance fees",
      "Hold Luggage for all flights",
      "16 Excursions",
      "International Return Flights",
      "ABTA & ATOL Protection"
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "",
              availableDates: [{ dateRange: "", price: "", discount: "" }]
            },
            {
              month: "April 2025",
              basePrice: "",
              availableDates: [{ dateRange: "", price: "", discount: "" }]
            },
            {
              month: "May 2025",
              basePrice: "£2,599",
              availableDates: [{ dateRange: "", price: "", discount: "" }]
            },
            {
              month: "June 2025",
              basePrice: "£2,499",
              availableDates: [
                { dateRange: "4th Jun - 20th Jun", price: "£2,499" },
                { dateRange: "18th Jun - 4th Jul", price: "£3,149", discount: "£3,049" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Ramada Colombo",
          image: "/path-to-ramada-image.jpg",
          rating: 4,
          nights: 2,
          location: "Colombo, Sri Lanka",
          detailsLink: "#"
        },
        {
          name: "Amaya Lake",
          image: "/path-to-amaya-image.jpg",
          rating: 4,
          nights: 3,
          location: "Dambulla, Sri Lanka",
          detailsLink: "#"
        },
        {
          name: "Jetwing Blue",
          image: "/path-to-jetwing-image.jpg",
          rating: 5,
          nights: 2,
          location: "Negombo, Sri Lanka",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Margaret Foley",
        date: "24 Sep 24",
        text: "Had a fantastic holiday. The guide, driver, and assistant were extremely helpful. The guide ensured we covered the full itinerary and gave us loads of information regarding Sri Lanka..."
      },
      {
        name: "Jeffrey Hodge",
        date: "01 Sep 24",
        text: "We had a great time on our tour. The guide was very knowledgeable and the driver was very helpful. The tour was well organised and the accommodation was good. We would recommend this tour to anyone looking for a great holiday in Sri Lanka."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Itinerary Notes",
          content: "The order of events and sightseeing may vary according to local conditions or for operational purposes. The driving times listed are point to point and do not include the duration of excursions or stops en route..."
        },
        { title: "Payment", content: "Payment information details will be provided at the time of booking." },
        { title: "Passport and Visa information", content: "Ensure your passport is valid for at least 6 months beyond your travel date. Visa requirements vary by country." }
      ]
    }
  },

  "bangkok-and-pattaya": {
    title: "Bangkok & Pattaya Adventure",
    subtitle: "6 Day Tour with Family-Friendly Excursions",
    location: "Thailand",
    price: 289000,
    heroImage: "/images/packages/deals/bangkok-pattaya.jpg",
    mapImage: "/tour-images/thailand-map.jpg",
    duration: "6 days",
    tourCode: "TH06",
    pdfLink: "/pdfs/bangkok-pattaya-adventure.pdf",
    gallery: [
      "/tour-images/bangkok-1.jpg",
      "/tour-images/pattaya-1.jpg",
      "/tour-images/coral-island.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "4 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "An ideal escape with exciting tours, thrilling activities, and plenty of relaxation for everyone. From Bangkok’s vibrant cityscape and cultural landmarks to Pattaya’s scenic beaches and Coral Island’s crystal waters, this 5-day adventure is perfect for families and couples alike.",

    galleryPhotos: [
      {
        src: "/tour-images/bangkok-1.jpg",
        alt: "Bangkok Grand Palace",
        caption: "Marvel at Bangkok’s iconic Grand Palace"
      },
      {
        src: "/tour-images/pattaya-1.jpg",
        alt: "Pattaya City View",
        caption: "Enjoy the coastal charm of Pattaya"
      },
      {
        src: "/tour-images/coral-island.jpg",
        alt: "Coral Island Thailand",
        caption: "Sunbathe and swim at beautiful Coral Island"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Explore Bangkok’s temples and bustling street markets",
        "Enjoy a scenic boat ride to Coral Island",
        "Experience Dream World and Snow Town with the family",
        "Private transfers included for a seamless experience",
        "Relax on Pattaya’s sandy beaches"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Boat", color: "blue" },
        { label: "Walking", color: "orange" },
        { label: "Airplane", color: "red" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        description: "Arrive in Bangkok, transfer to Pattaya, and enjoy a city tour.",
        travelModes: ['transfer', 'coach']
      },
      {
        day: 2,
        title: "Coral Island Tour",
        description: "Take a speedboat to Coral Island for a day of swimming, snorkeling, and relaxing under the sun with lunch.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Transfer to Bangkok",
        description: "Transfer to Bangkok and enjoy an evening dinner cruise.",
        travelModes: ['coach']
      },
      {
        day: 4,
        title: "Dream World & Snow Town",
        description: "A full day of excitement at Dream World amusement park and Snow Town – perfect for families.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 5,
        title: "Free Day in Bangkok",
        description: "Free day to explore Bangkok at your own pace.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 6,
        title: "Departure from Bangkok",
        description: "Departure from Bangkok, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "05 Nights / 06 Days accommodation in 4-star hotels.",
      "Private & Intercity Transfers",
      "Daily Breakfast & Select Meals",
      "Excursion Tickets (Dream World, Coral Island)",
      "Chao Phraya Dinner Cruise with scenic views.",
      "Pattaya City Tour to explore key attractions.",
      "Airport Pickup and Drop-off"
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,890",
              availableDates: [
                { dateRange: "10th Mar - 15th Mar", price: "£2,890" },
                { dateRange: "24th Mar - 29th Mar", price: "£2,990", discount: "£2,940" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,999",
              availableDates: [
                { dateRange: "7th Apr - 12th Apr", price: "£2,999" },
                { dateRange: "21st Apr - 26th Apr", price: "£3,099", discount: "£2,999" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Mandarin Hotel Bangkok",
          image: "/tour-images/mandarin-bangkok.jpg",
          rating: 4,
          nights: 2,
          location: "Bangkok, Thailand",
          detailsLink: "#"
        },
        {
          name: "Siam Bayshore Resort",
          image: "/tour-images/siam-bayshore.jpg",
          rating: 4,
          nights: 2,
          location: "Pattaya, Thailand",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Lisa Townsend",
        date: "03 Jan 24",
        text: "Such a great tour for families! The private transfers made everything stress-free and the activities were spot-on for the kids. Loved Coral Island!"
      },
      {
        name: "Raj Patel",
        date: "15 Feb 24",
        text: "We had a lovely time – well organised, amazing food, and the guide was super helpful. Dream World was a highlight for our children!"
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Travel Notes",
          content: "Itinerary and schedule may vary slightly depending on local conditions and holidays."
        },
        {
          title: "Travel Insurance",
          content: "All travellers are required to have valid travel insurance prior to departure."
        },
        {
          title: "Visa & Passport",
          content: "UK passport holders do not require a visa for stays under 30 days in Thailand. Ensure your passport has 6 months validity."
        }
      ]
    }
  },

  "singapore-and-malaysia": {
    title: "Singapore & Malaysia Adventure",
    subtitle: "6 Day Twin City Discovery Tour",
    location: "Singapore & Malaysia",
    price: 339000,
    heroImage: "/images/packages/deals/singapore-and-malaysia.jpg",
    mapImage: "/tour-images/singapore-malaysia-map.jpg",
    duration: "6 days",
    tourCode: "SM06",
    pdfLink: "/pdfs/singapore-malaysia-adventure.pdf",
    gallery: [
      "/tour-images/singapore-marina-bay.jpg",
      "/tour-images/kuala-lumpur.jpg",
      "/tour-images/melaka.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "5 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Experience the vibrant contrast of ultra-modern Singapore and the cultural richness of Malaysia in this 6-day twin-country adventure. Explore world-famous landmarks, bustling night markets, and serene temples, all while enjoying luxury hotels and private transfers throughout.",

    galleryPhotos: [
      {
        src: "/tour-images/singapore-marina-bay.jpg",
        alt: "Marina Bay Sands",
        caption: "Skyline views from the iconic Marina Bay Sands in Singapore"
      },
      {
        src: "/tour-images/kuala-lumpur.jpg",
        alt: "Petronas Towers Kuala Lumpur",
        caption: "The dazzling Petronas Twin Towers in Kuala Lumpur"
      },
      {
        src: "/tour-images/melaka.jpg",
        alt: "Melaka Heritage Town",
        caption: "The historical charm of Melaka’s Dutch Square"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Experience thrilling rides at Universal Studios Singapore.",
        "Visit the Gardens by the Bay and Supertree Grove",
        "Explore Singapore’s Chinatown, Little India & Kampong Glam",
        "Tour the UNESCO World Heritage town of Melaka",
        "Photo stop at the Petronas Twin Towers",
        "Shop and dine in Bukit Bintang, KL’s trendiest district"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Boat", color: "blue" },
        { label: "Walking", color: "orange" },
        { label: "Airplane", color: "red" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Welcome to Singapore",
        description: "Arrive in Singapore and explore the stunning Gardens by the Bay.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Universal Studios Singapore",
        description: "Experience a day of thrilling rides and attractions at Universal Studios Singapore.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Singapore to Melaka (Malaysia)",
        description: "Travel by private coach to Malaysia with a stop in the heritage-rich town of Melaka for sightseeing and lunch.",
        travelModes: ['coach']
      },
      {
        day: 4,
        title: "Genting Highlands",
        description: "Transfer to Genting Highlands for a day of fun and excitement at the theme park and casino.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 5,
        title: "Sunway Lagoon Theme Park",
        description: "Spend a day at Sunway Lagoon Theme Park, one of the largest theme parks in Malaysia.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 6,
        title: "Departure from Kuala Lumpur",
        description: "Departure from Kuala Lumpur, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "05 Nights / 06 Days accommodation in premium hotels.",
      "Daily Breakfast & Select Dinners",
      "Private Airport Transfers",
      "All Excursions Listed in Itinerary",
      "Air-Conditioned Coaches Between Cities",
      "Round-trip airfare included."
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£3,190",
              availableDates: [
                { dateRange: "12th Mar - 18th Mar", price: "£3,190" },
                { dateRange: "26th Mar - 1st Apr", price: "£3,290", discount: "£3,240" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£3,299",
              availableDates: [
                { dateRange: "9th Apr - 15th Apr", price: "£3,299" },
                { dateRange: "23rd Apr - 29th Apr", price: "£3,399", discount: "£3,299" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Hotel Boss Singapore",
          image: "/tour-images/hotel-boss.jpg",
          rating: 4,
          nights: 2,
          location: "Singapore",
          detailsLink: "#"
        },
        {
          name: "The Straits Hotel Melaka",
          image: "/tour-images/straits-melaka.jpg",
          rating: 4,
          nights: 1,
          location: "Melaka, Malaysia",
          detailsLink: "#"
        },
        {
          name: "Verdant Hill Hotel",
          image: "/tour-images/verdant-kl.jpg",
          rating: 4,
          nights: 3,
          location: "Kuala Lumpur, Malaysia",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Amelia Wright",
        date: "04 Mar 24",
        text: "Absolutely fantastic tour! Singapore’s modern vibes mixed with Malaysia’s culture made for a great trip. Very well organised and a great balance of sightseeing and leisure."
      },
      {
        name: "Daniel Green",
        date: "19 Feb 24",
        text: "Loved every minute! Our guide was brilliant and ensured we had the best experiences. Highly recommend this itinerary for first-time Southeast Asia travellers."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders do not need a visa for either Singapore or Malaysia for stays up to 30 and 90 days respectively. Ensure passport has 6 months validity."
        },
        {
          title: "Travel Insurance",
          content: "All travellers must have comprehensive travel insurance covering health, travel delays, and cancellations."
        },
        {
          title: "Mobility",
          content: "This tour includes moderate walking, some uneven terrain and multiple hotel stays. Not suitable for those with limited mobility."
        }
      ]
    }
  },

  "shimla-and-manali": {
    title: "Shimla & Manali Escape",
    subtitle: "7 Day Himalayan Hill Station Tour",
    location: "India, Asia",
    price: 289000,
    heroImage: "/images/packages/deals/shimla-manali.jpg",
    mapImage: "/tour-images/shimla-manali-map.jpg",
    duration: "7 days",
    tourCode: "IN07",
    pdfLink: "/pdfs/shimla-manali-escape.pdf",
    gallery: [
      "/tour-images/shimla-town.jpg",
      "/tour-images/manali-valley.jpg",
      "/tour-images/rohtang-pass.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast & Dinner Included" },
      { icon: 'excursions', label: "Excursions", value: "5 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Breathe in the crisp Himalayan air as you escape to India’s stunning northern hill stations. This relaxing 7-day journey combines colonial charm in Shimla with scenic valleys in Manali. Discover temples, local markets, mountain views, and optional adventure activities throughout your journey.",

    galleryPhotos: [
      {
        src: "/tour-images/shimla-town.jpg",
        alt: "Shimla Town",
        caption: "Explore the colonial elegance and ridge views of Shimla"
      },
      {
        src: "/tour-images/manali-valley.jpg",
        alt: "Manali Valley",
        caption: "Unwind in the lush green valley of Manali surrounded by mountains"
      },
      {
        src: "/tour-images/rohtang-pass.jpg",
        alt: "Rohtang Pass",
        caption: "Scenic drive up to Rohtang Pass for panoramic views and snow"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Scenic drive from Delhi to Shimla, the Queen of Hills.",
        "Explore the charming beauty and heritage of Shimla.",
        "Visit Hadimba Temple and Tibetan Monasteries in Manali",
        "Thrilling adventure at Solang Valley and a scenic tour of Manali.",
        "Enjoy local Himachali cuisine and traditional hospitality"
      ],
      points: [],
      mapKey: [
        { label: "Train", color: "green" },
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrive in Delhi – Transfer to Shimla",
        description: "Arrive in Delhi and travel by private coach to Shimla, nestled in the Himalayas. Overnight stay in Shimla.",
        travelModes: ['transfer', 'coach']
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        description: "Explore the Mall Road, Christ Church, Jakhu Temple, and enjoy ridge-top views with scenic views of the Himalayas.",
        travelModes: ['walking', 'coach']
      },
      {
        day: 3,
        title: "Transfer to Manali",
        description: "Experience the iconic Kalka-Shimla Toy Train before continuing the scenic drive to Manali.",
        travelModes: ['train', 'coach']
      },
      {
        day: 4,
        title: "Solang Valley Adventure",
        description: "Spend a day at the breathtaking Solang Valley, one of the most popular adventure destinations in Manali.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 5,
        title: "Manali Local Exploration",
        description: "Visit the Hadimba Temple, Vashisht Baths, and the local bazaar.",
        travelModes: ['walking', 'coach']
      },
      {
        day: 6,
        title: "Transfer from Manali to Chandigarh.",
        description: "Scenic drive back to Delhi. Enjoy a farewell dinner and relax before departure.",
        travelModes: ['coach']
      },
      {
        day: 7,
        title: "Departure from Delhi",
        description: "Departure from Delhi, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "06 Nights / 07 Days accommodation in 4-star hotels",
      "Daily Breakfast & Select Dinners",
      "Return International Flights",
      "Private Airport & Intercity Transfers",
      "Toy Train Ride from Shimla",
      "All Entrance Fees for Excursions",
      "English-speaking chauffeur guide throughout the trip"
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,090",
              availableDates: [
                { dateRange: "15th Mar - 22nd Mar", price: "£2,090" },
                { dateRange: "25th Mar - 1st Apr", price: "£2,190", discount: "£2,140" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,190",
              availableDates: [
                { dateRange: "8th Apr - 15th Apr", price: "£2,190" },
                { dateRange: "20th Apr - 27th Apr", price: "£2,290", discount: "£2,240" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Clarkes Hotel",
          image: "/tour-images/clarkes-shimla.jpg",
          rating: 4,
          nights: 3,
          location: "Shimla, India",
          detailsLink: "#"
        },
        {
          name: "The Manali Inn",
          image: "/tour-images/manali-inn.jpg",
          rating: 4,
          nights: 3,
          location: "Manali, India",
          detailsLink: "#"
        },
        {
          name: "Hotel The Royal Plaza",
          image: "/tour-images/royal-plaza-delhi.jpg",
          rating: 4,
          nights: 1,
          location: "Delhi, India",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Helen Dawson",
        date: "12 Mar 24",
        text: "Beautiful tour with breathtaking views! The toy train ride and the day at Rohtang Pass were unforgettable. Everything was well organised and the hotels were great."
      },
      {
        name: "Martin Khan",
        date: "26 Feb 24",
        text: "Great escape from the hustle of Delhi. Loved the chilled pace of the trip, especially in Manali. Highly recommend for a scenic Indian mountain getaway."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Travel Notes",
          content: "Rohtang Pass accessibility depends on weather and permits. Alternatives like Solang Valley will be arranged if closed."
        },
        {
          title: "What to Pack",
          content: "Warm clothing recommended, especially for higher altitudes. Comfortable walking shoes essential."
        },
        {
          title: "Visa & Passport",
          content: "UK passport holders require a tourist visa for India. Ensure passport is valid for at least 6 months from date of travel."
        }
      ]
    }
  },

  "abu-dhabi-and-dubai": {
    title: "Abu Dhabi & Dubai Adventure",
    subtitle: "6 Day Twin City Arabian Escape",
    location: "United Arab Emirates",
    price: 489000,
    heroImage: "/images/packages/deals/Dubai-and-Abu-Dhabi.jpg",
    mapImage: "/tour-images/uae-map.jpg",
    duration: "6 days",
    tourCode: "AE06",
    pdfLink: "/pdfs/abu-dhabi-dubai-adventure.pdf",
    gallery: [
      "/tour-images/dubai-burj-khalifa.jpg",
      "/tour-images/abu-dhabi-grand-mosque.jpg",
      "/tour-images/desert-safari.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Select Meals Included" },
      { icon: 'excursions', label: "Excursions", value: "4 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Discover the best of the UAE with this perfectly balanced 6-day itinerary that takes you from the cultural heritage of Abu Dhabi to the futuristic skyline of Dubai. Enjoy desert adventures, grand mosques, luxurious shopping, and dazzling city lights, all with guided tours and private transfers.",

    galleryPhotos: [
      {
        src: "/tour-images/dubai-burj-khalifa.jpg",
        alt: "Burj Khalifa Dubai",
        caption: "Witness the awe-inspiring Burj Khalifa – the tallest building in the world"
      },
      {
        src: "/tour-images/abu-dhabi-grand-mosque.jpg",
        alt: "Sheikh Zayed Grand Mosque",
        caption: "Marvel at the Sheikh Zayed Grand Mosque’s intricate beauty"
      },
      {
        src: "/tour-images/desert-safari.jpg",
        alt: "Dubai Desert Safari",
        caption: "Experience an exhilarating desert safari with dune bashing and BBQ dinner"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Visit the Sheikh Zayed Grand Mosque in Abu Dhabi",
        "Explore the Louvre Abu Dhabi and Corniche waterfront",
        "Enjoy a thrilling Dubai Desert Safari experience",
        "Visit the Burj Khalifa observation deck and Dubai Mall",
        "Cruise along Dubai Marina on a luxury dhow dinner cruise"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Boat", color: "blue" },
        { label: "Airplane", color: "red" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Welcome to Abu Dhabi",
        description: "Arrival in Abu Dhabi, transfer to Dubai and check into your hotel.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Dubai City Tour",
        description: "Explore Dubai with a city tour, monorail ride, View at The Palm, and Dubai Frame.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Museum and Desert Safari",
        description: "Visit the Museum of the Future, then enjoy a thrilling desert safari with a BBQ dinner.",
        travelModes: ['coach']
      },
      {
        day: 4,
        title: "Cruise and Shopping",
        description: "Shop at the Gold Souk and relax on a Marina Dhow Cruise.",
        travelModes: ['walking', 'coach']
      },
      {
        day: 5,
        title: "Transfer to Abu Dhabi",
        description: "Transfer to Abu Dhabi, visit the Sheikh Zayed Grand Mosque, and explore the Louvre Abu Dhabi along other iconic landmarks.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 6,
        title: "Departure from Abu Dhabi",
        description: "Departure from Abu Dhabi, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "05 Nights / 06 Days accommodation on BB basis",
      "Daily Breakfast & Select Dinners",
      "Private Airport Transfers",
      "All Listed Excursions with English-Speaking Guide",
      "Desert Safari with BBQ Dinner",
      "Luxury Dhow Dinner Cruise",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,590",
              availableDates: [
                { dateRange: "5th Mar - 10th Mar", price: "£2,590" },
                { dateRange: "20th Mar - 25th Mar", price: "£2,690", discount: "£2,640" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,690",
              availableDates: [
                { dateRange: "10th Apr - 15th Apr", price: "£2,690" },
                { dateRange: "24th Apr - 29th Apr", price: "£2,790", discount: "£2,690" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Royal Rose Hotel",
          image: "/tour-images/royal-rose-abu-dhabi.jpg",
          rating: 5,
          nights: 2,
          location: "Abu Dhabi, UAE",
          detailsLink: "#"
        },
        {
          name: "Taj Jumeirah Lakes Towers",
          image: "/tour-images/taj-jumeirah.jpg",
          rating: 5,
          nights: 3,
          location: "Dubai, UAE",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Claire Robinson",
        date: "14 Jan 24",
        text: "Absolutely stunning from start to finish! The desert safari was such a thrill, and both Abu Dhabi and Dubai were breathtaking. Smooth, luxurious experience all the way."
      },
      {
        name: "Naseer Ahmed",
        date: "30 Dec 23",
        text: "Well-organised, comfortable tour with excellent guides. Loved the food, the city views, and the touch of culture throughout. Would definitely book again!"
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders can enter the UAE without a visa for stays up to 30 days. Ensure 6 months passport validity."
        },
        {
          title: "Dress Code",
          content: "Respectful clothing is required when visiting mosques and traditional sites. Shoulders and knees should be covered."
        },
        {
          title: "Desert Safari Note",
          content: "Dune bashing is not suitable for pregnant women or those with back problems. Alternative arrangements can be made upon request."
        }
      ]
    }
  },

  "malaysia-package": {
    title: "Malaysia City & Adventure",
    subtitle: "4 Day Cultural & Nature Discovery Tour",
    location: "Malaysia",
    price: 189000,
    heroImage: "/images/packages/deals/Malaysia-adventure.jpg",
    mapImage: "/tour-images/malaysia-map.jpg",
    duration: "4 days",
    tourCode: "MY04",
    pdfLink: "/pdfs/malaysia-city-adventure.pdf",
    gallery: [
      "/tour-images/kuala-lumpur-skyline.jpg",
      "/tour-images/cameron-highlands.jpg",
      "/tour-images/langkawi-beach.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "5 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Uncover Malaysia’s exciting blend of city charm and natural beauty in this 4-day tour. From the modern capital of Kuala Lumpur to the cool tea hills of Cameron Highlands and the tropical beaches of Langkawi, this journey offers culture, cuisine, and adventure all in one unforgettable escape.",

    galleryPhotos: [
      {
        src: "/tour-images/kuala-lumpur-skyline.jpg",
        alt: "Kuala Lumpur Skyline",
        caption: "Modern meets tradition in Kuala Lumpur’s stunning skyline"
      },
      {
        src: "/tour-images/cameron-highlands.jpg",
        alt: "Cameron Highlands Tea Plantations",
        caption: "Breathe in the cool mountain air among tea plantations in Cameron Highlands"
      },
      {
        src: "/tour-images/langkawi-beach.jpg",
        alt: "Langkawi Beach",
        caption: "Relax on the pristine beaches of Langkawi"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Marvel at the Petronas Twin Towers in Kuala Lumpur",
        "Visit Batu Caves and Central Market",
        "Explore lush tea estates in the Cameron Highlands",
        "Trek through mossy forests and sample local strawberries",
        "Island-hop and relax on the beaches of Langkawi",
        "Enjoy thrilling rides and attractions at Sunway Lagoon"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Airplane", color: "red" },
        { label: "Boat", color: "blue" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Welcome to Kuala Lumpur",
        description: "Arrive in KL, transfer to your hotel, and enjoy a welcome dinner in the city centre along the city's attractions and iconic sights.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Genting Highlands",
        description: "Visit the Genting Highlands, enjoy the theme park, and enjoy the night view of Genting Highlands.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Sunway Lagoon",
        description: "Enjoy thrilling rides and attractions at Sunway Lagoon.",
        travelModes: ['coach']
      },
      {
        day: 4,
        title: "Departure from Kuala Lumpur",
        description: "Departure from Kuala Lumpur, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      },
    ],

    includedItems: [
      "03 Nights / 04 Days accommodation in a 4-star hotel",
      "Daily Breakfast",
      "Single Entry Tourist Visa",
      "All Listed Excursions & Activities",
      "Private Airport & Intercity Transfers",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,790",
              availableDates: [
                { dateRange: "9th Mar - 15th Mar", price: "£2,790" },
                { dateRange: "23rd Mar - 29th Mar", price: "£2,890", discount: "£2,840" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,899",
              availableDates: [
                { dateRange: "6th Apr - 12th Apr", price: "£2,899" },
                { dateRange: "20th Apr - 26th Apr", price: "£2,999", discount: "£2,899" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Verdant Hill Hotel",
          image: "/tour-images/verdant-kl.jpg",
          rating: 4,
          nights: 2,
          location: "Kuala Lumpur, Malaysia",
          detailsLink: "#"
        },
        {
          name: "Cameron Highlands Resort",
          image: "/tour-images/cameron-resort.jpg",
          rating: 4,
          nights: 2,
          location: "Cameron Highlands, Malaysia",
          detailsLink: "#"
        },
        {
          name: "Holiday Villa Beach Resort",
          image: "/tour-images/langkawi-resort.jpg",
          rating: 4,
          nights: 2,
          location: "Langkawi, Malaysia",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Harriet Lewis",
        date: "20 Feb 24",
        text: "What a stunning combination of city lights, cool mountains, and sandy beaches! Malaysia is such a hidden gem. The trip was well organised and the food was incredible."
      },
      {
        name: "Sohail Ali",
        date: "10 Mar 24",
        text: "From KL to Langkawi, every day had something new. Loved the tea plantations and our sunset cruise. Perfect balance of culture and chill."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Internal Flights",
          content: "Domestic flights (KL–Langkawi–KL) are included and operated by Malaysia Airlines or similar."
        },
        {
          title: "Climate & Clothing",
          content: "Pack for warm weather with light layers for the highlands. Comfortable footwear recommended for walking tours."
        },
        {
          title: "Visa & Passport",
          content: "UK passport holders can enter Malaysia visa-free for up to 90 days. Ensure passport validity of at least 6 months."
        }
      ]
    }
  },

  "vietnam-discovery-tour": {
    title: "Vietnam Discovery Tour",
    subtitle: "5 Day North to South Cultural Journey",
    location: "Vietnam, Southeast Asia",
    price: 315000,
    heroImage: "/images/packages/deals/Vietnam-discovery.jpg",
    mapImage: "/tour-images/vietnam-map.jpg",
    duration: "5 days",
    tourCode: "VN05",
    pdfLink: "/pdfs/vietnam-discovery-tour.pdf",
    gallery: [
      "/tour-images/halong-bay.jpg",
      "/tour-images/hoi-an-lanterns.jpg",
      "/tour-images/ho-chi-minh.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "4 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "From the limestone cliffs of Halong Bay to the lantern-lit streets of Hoi An and the bustling energy of Ho Chi Minh City, this 5-day Vietnam Discovery Tour is the perfect introduction to one of Asia’s most vibrant and historic countries. Enjoy a rich mix of cultural landmarks, natural wonders, and local cuisine.",

    galleryPhotos: [
      {
        src: "/tour-images/halong-bay.jpg",
        alt: "Halong Bay",
        caption: "Cruise through the majestic limestone karsts of Halong Bay"
      },
      {
        src: "/tour-images/hoi-an-lanterns.jpg",
        alt: "Hoi An Lantern Festival",
        caption: "Wander the magical lantern-lit streets of Hoi An"
      },
      {
        src: "/tour-images/ho-chi-minh.jpg",
        alt: "Ho Chi Minh City",
        caption: "Experience the fast-paced energy and French-colonial charm of Saigon"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      //  { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Enjoy a luxury overnight cruise on Halong Bay",
        "Discover Hanoi’s Old Quarter and Ho Chi Minh Mausoleum",
        "Explore the ancient town of Hoi An and enjoy a lantern-making experience",
        "Tour the imperial capital of Hue by boat and cyclo",
        "Sail through the mesmerizing Halong Bay on an overnight cruise",
        "Sample street food and traditional Vietnamese cooking"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Boat", color: "blue" },
        { label: "Walking", color: "orange" },
        { label: "Airplane", color: "red" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Welcome to Hanoi",
        description: "Arrive in Hanoi and transfer to your hotel. Enjoy a welcome dinner and orientation walk along the city's highlights.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Ninh Binh",
        description: "Discover the ancient town of Ninh Binh, enjoy the beautiful landscape, and enjoy a traditional water puppet show.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Transfer to Halong Bay",
        description: "Transfer to Halong Bay and board your luxury overnight cruise.",
        travelModes: ['coach', 'boat']
      },
      {
        day: 4,
        title: "Return to Hanoi",
        description: "Return to Hanoi, with an afternoon of free time to explore the city.",
        travelModes: ['boat', 'coach', 'flight']
      },
      {
        day: 5,
        title: "Departure from Hanoi",
        description: "Departure from Hanoi, taking home cherished memories.",
        travelModes: ['coach', 'flight']
      },
    ],

    includedItems: [
      "04 Nights / 05 Days accommodation in a 4-star hotel",
      "Luxury Halong Bay Cruise",
      "Daily Breakfast",
      "All Listed Excursions & Activities",
      "Private Airport & Intercity Transfers",
      "Single Entry Tourist Visa",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,690",
              availableDates: [
                { dateRange: "10th Mar - 19th Mar", price: "£2,690" },
                { dateRange: "24th Mar - 2nd Apr", price: "£2,790", discount: "£2,740" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,790",
              availableDates: [
                { dateRange: "7th Apr - 16th Apr", price: "£2,790" },
                { dateRange: "21st Apr - 30th Apr", price: "£2,890", discount: "£2,790" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "La Sinfonía del Rey Hotel",
          image: "/tour-images/la-sinfonia-hanoi.jpg",
          rating: 4,
          nights: 2,
          location: "Hanoi, Vietnam",
          detailsLink: "#"
        },
        {
          name: "Halong Bay Cruise",
          image: "/tour-images/halong-cruise.jpg",
          rating: 4,
          nights: 1,
          location: "Halong Bay, Vietnam",
          detailsLink: "#"
        },
        {
          name: "Little Riverside Hoi An",
          image: "/tour-images/hoi-an-hotel.jpg",
          rating: 4,
          nights: 2,
          location: "Hoi An, Vietnam",
          detailsLink: "#"
        },
        {
          name: "Imperial Hotel Hue",
          image: "/tour-images/imperial-hue.jpg",
          rating: 4,
          nights: 1,
          location: "Hue, Vietnam",
          detailsLink: "#"
        },
        {
          name: "Liberty Central Saigon",
          image: "/tour-images/liberty-saigon.jpg",
          rating: 4,
          nights: 3,
          location: "Ho Chi Minh City, Vietnam",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Joanne McCarthy",
        date: "05 Feb 24",
        text: "The perfect mix of culture, comfort and scenery. I loved every moment from the cruise to Hoi An. The itinerary was well paced and we learned so much about Vietnam’s history and people."
      },
      {
        name: "Ethan Lim",
        date: "19 Jan 24",
        text: "An amazing introduction to Vietnam! Smooth transfers, lovely hotels, great food, and incredible sights. The guides were top-notch. 10/10."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders must apply for an eVisa before travelling to Vietnam. Ensure your passport is valid for at least 6 months."
        },
        {
          title: "Packing Suggestions",
          content: "Pack light clothing for tropical weather, but include a light jacket for cooler areas like Halong Bay and Hue."
        },
        {
          title: "Halong Bay Weather",
          content: "Cruise activities may vary depending on weather. In case of cancellation, alternative arrangements will be made."
        }
      ]
    }
  },

  "cambodia-cultural-tour": {
    title: "Cambodia Cultural Escape",
    subtitle: "5 Day Journey Through Ancient Temples & Khmer Culture",
    location: "Cambodia, Southeast Asia",
    price: 381000,
    heroImage: "/images/packages/deals/Cambodia-tour.jpg",
    mapImage: "/tour-images/cambodia-map.jpg",
    duration: "5 days",
    tourCode: "KH05",
    pdfLink: "/pdfs/cambodia-cultural-escape.pdf",
    gallery: [
      "/tour-images/angkor-wat.jpg",
      "/tour-images/phnom-penh.jpg",
      "/tour-images/floating-village.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "3 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Uncover the wonders of Cambodia on this immersive 5-day cultural journey. Explore the legendary Angkor Wat at sunrise, cruise through floating villages on Tonlé Sap Lake, and experience the resilience and warmth of the Cambodian people in Phnom Penh and Siem Reap.",

    galleryPhotos: [
      {
        src: "/tour-images/angkor-wat.jpg",
        alt: "Angkor Wat Temple",
        caption: "Witness sunrise over the majestic Angkor Wat"
      },
      {
        src: "/tour-images/phnom-penh.jpg",
        alt: "Royal Palace Phnom Penh",
        caption: "Explore the Royal Palace and Silver Pagoda in Phnom Penh"
      },
      {
        src: "/tour-images/floating-village.jpg",
        alt: "Floating Village on Tonlé Sap",
        caption: "Cruise through Cambodia’s unique floating villages"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      //  { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Marvel at sunrise over Angkor Wat",
        "Dive into Phnom Penh's historical & cultural highlights",
        "Discover the wonders of Siem Reap with a temple exploration tour",
        "Explore Phnom Penh’s Royal Palace & National Museum",
        "Experience local markets and sights"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Boat", color: "blue" },
        { label: "Walking", color: "orange" },
        { label: "Airplane", color: "red" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Welcome to Phnom Penh",
        description: "Arrival, airport transfer and check-in. Enjoy a welcome dinner and cultural show.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Phnom Penh City Tour",
        description: "Visit the Royal Palace, National Museum, and learn Cambodia’s recent history at Tuol Sleng and the Killing Fields.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Phnom Penh to Siem Reap",
        description: "Transfer to Siem Reap and take a relaxing walk around the lively night markets.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 4,
        title: "Siem Reap Temple Exploration",
        description: "Explore the magnificent temples of Siem Reap.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 5,
        title: "Departure from Siem Reap",
        description: "Departure from Siem Reap, taking home lasting memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "04 Nights / 05 Days accommodation in 4-star hotels",
      "Daily Breakfast",
      "All Listed Excursions & Activities",
      "Private Airport & Intercity Transfers",
      "Single Entry Tourist Visa",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,390",
              availableDates: [
                { dateRange: "14th Mar - 20th Mar", price: "£2,390" },
                { dateRange: "28th Mar - 3rd Apr", price: "£2,490", discount: "£2,440" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,490",
              availableDates: [
                { dateRange: "11th Apr - 17th Apr", price: "£2,490" },
                { dateRange: "25th Apr - 1st May", price: "£2,590", discount: "£2,490" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Palace Gate Hotel",
          image: "/tour-images/palace-gate.jpg",
          rating: 4,
          nights: 2,
          location: "Phnom Penh, Cambodia",
          detailsLink: "#"
        },
        {
          name: "Treeline Urban Resort",
          image: "/tour-images/treeline-siem-reap.jpg",
          rating: 4,
          nights: 4,
          location: "Siem Reap, Cambodia",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Julia Pearson",
        date: "18 Feb 24",
        text: "The temples were absolutely breathtaking and the guides were so passionate. The floating villages and cooking class gave the tour a truly personal touch. Would highly recommend!"
      },
      {
        name: "Ravi Shah",
        date: "05 Mar 24",
        text: "A powerful and moving journey – the history, the culture, and the warmth of the people made this one of the most unforgettable trips I've ever taken."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders require a tourist visa for Cambodia. eVisas can be obtained online before travel."
        },
        {
          title: "Cultural Etiquette",
          content: "Respectful clothing required at temples – shoulders and knees should be covered. Footwear removed at sacred sites."
        },
        {
          title: "Weather Advice",
          content: "Expect hot, humid weather. Light, breathable clothing and sunscreen are essential. Stay hydrated throughout tours."
        }
      ]
    }
  },

  "oman-nature-culture-tour": {
    title: "Oman Nature & Culture Tour",
    subtitle: "5 Day Journey Through Desert, Mountains & Coast",
    location: "Oman, Middle East",
    price: 255400,
    heroImage: "/images/packages/deals/oman.jpg",
    mapImage: "/tour-images/oman-map.jpg",
    duration: "5 days",
    tourCode: "OM05",
    pdfLink: "/pdfs/oman-nature-culture-tour.pdf",
    gallery: [
      "/tour-images/muscat-grand-mosque.jpg",
      "/tour-images/wahiba-desert.jpg",
      "/tour-images/nizwa-fort.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "4/5 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Explore Oman’s dramatic landscapes and rich traditions on this 5-day guided tour. From the elegant mosques and souks of Muscat to the towering Hajar Mountains, serene wadis, and golden Wahiba Sands, this tour offers an authentic Arabian adventure blending nature and heritage.",

    galleryPhotos: [
      {
        src: "/tour-images/muscat-grand-mosque.jpg",
        alt: "Sultan Qaboos Grand Mosque",
        caption: "Marvel at the stunning architecture of the Sultan Qaboos Grand Mosque in Muscat"
      },
      {
        src: "/tour-images/wahiba-desert.jpg",
        alt: "Wahiba Sands Desert",
        caption: "Experience the vastness and silence of the Wahiba Sands desert"
      },
      {
        src: "/tour-images/nizwa-fort.jpg",
        alt: "Nizwa Fort",
        caption: "Discover Nizwa Fort and its lively traditional souk"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      //  { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Tour the elegant Grand Mosque and Royal Opera House in Muscat",
        "Swim in the turquoise waters of Wadi Bani Khalid",
        "Camp under the stars in the Wahiba Sands desert",
        "Visit the historic Nizwa Fort and traditional Friday market",
        "Explore Al Hamra and Misfat Al Abriyeen ancient villages",
        "Enjoy panoramic views from Jebel Shams, Oman’s Grand Canyon",
        "Cruise along the Muscat coastline on a traditional dhow boat"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Boat", color: "blue" },
        { label: "Walking", color: "orange" },
        { label: "Airplane", color: "red" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Muscat",
        description: "Arrive and transfer to your hotel. Evening at leisure with welcome dinner.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Muscat City Tour",
        description: "Visit the Sultan Qaboos Grand Mosque, Opera House, Muttrah Souk, and other top attractions.",
        travelModes: ['coach', 'walking', 'boat']
      },
      {
        day: 3,
        title: "Wadi Bani Khalid & Wahiba Sands",
        description: "Discover the beauty of Wadi Bani Khalid and the golden dunes of Wahiba Sands.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 4,
        title: "Coastal Tour",
        description: "Explore the coastal areas of Oman, scenic full day tour.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 5,
        title: "Departure from Oman",
        description: "Departure from Oman, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "04 Nights / 05 Days accommodation in 4-Star Hotels",
      "Daily Breakfast",
      "Return air tickets",
      "All Listed Excursions",
      "Single Entry Tourist Visa",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,890",
              availableDates: [
                { dateRange: "9th Mar - 16th Mar", price: "£2,890" },
                { dateRange: "23rd Mar - 30th Mar", price: "£2,990", discount: "£2,940" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,990",
              availableDates: [
                { dateRange: "6th Apr - 13th Apr", price: "£2,990" },
                { dateRange: "20th Apr - 27th Apr", price: "£3,090", discount: "£2,990" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Crowne Plaza Muscat",
          image: "/tour-images/crowne-plaza-muscat.jpg",
          rating: 5,
          nights: 2,
          location: "Muscat, Oman",
          detailsLink: "#"
        },
        {
          name: "Desert Nights Camp",
          image: "/tour-images/desert-nights-camp.jpg",
          rating: 4,
          nights: 1,
          location: "Wahiba Sands, Oman",
          detailsLink: "#"
        },
        {
          name: "Golden Tulip Nizwa",
          image: "/tour-images/golden-tulip-nizwa.jpg",
          rating: 4,
          nights: 2,
          location: "Nizwa, Oman",
          detailsLink: "#"
        },
        {
          name: "Alila Jabal Akhdar",
          image: "/tour-images/alila-jabal.jpg",
          rating: 5,
          nights: 2,
          location: "Jebel Akhdar, Oman",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Linda Hartley",
        date: "12 Mar 24",
        text: "This trip blew me away. Oman is breathtakingly beautiful, and the mix of desert, mountains, and history was just right. Our guide was exceptional!"
      },
      {
        name: "Zeeshan Malik",
        date: "28 Feb 24",
        text: "The highlight was camping in the desert under a sky full of stars. It felt adventurous yet luxurious. Highly recommended for anyone wanting something unique."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders must apply for an eVisa to enter Oman. Ensure at least 6 months passport validity."
        },
        {
          title: "Travel Fitness",
          content: "This tour involves walking and some mountain terrain. A good level of fitness is recommended."
        },
        {
          title: "Cultural Etiquette",
          content: "Oman is a conservative country. Dress modestly, especially in religious or rural areas."
        }
      ]
    }
  },

  "egypt-ancient-wonders-tour": {
    title: "Egypt – Ancient Wonders Tour",
    subtitle: "6 Day Journey Through the Land of Pharaohs",
    location: "Egypt, North Africa",
    price: 282000,
    heroImage: "/tour-images/egypt-wonders.jpg",
    mapImage: "/tour-images/egypt-map.jpg",
    duration: "6 days",
    tourCode: "EG06",
    pdfLink: "/pdfs/egypt-ancient-wonders-tour.pdf",
    gallery: [
      "/tour-images/pyramids-giza.jpg",
      "/tour-images/luxor-temple.jpg",
      "/tour-images/nile-cruise.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "6 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Step back in time and explore the ancient wonders of Egypt on this captivating 6-day tour. Visit the Great Pyramids of Giza, cruise along the Nile River, and discover the timeless temples of Luxor and Aswan. This is the ultimate journey through Egypt’s past and present.",

    galleryPhotos: [
      {
        src: "/tour-images/pyramids-giza.jpg",
        alt: "Pyramids of Giza",
        caption: "Stand in awe before the Great Pyramids and Sphinx of Giza"
      },
      {
        src: "/tour-images/luxor-temple.jpg",
        alt: "Luxor Temple",
        caption: "Wander through the illuminated columns of Luxor Temple at night"
      },
      {
        src: "/tour-images/nile-cruise.jpg",
        alt: "Nile River Cruise",
        caption: "Relax aboard your 5-star Nile cruise between Luxor and Aswan"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Marvel at the Pyramids of Giza and the Sphinx",
        "Explore the Egyptian Museum in Cairo",
        "Fly to Luxor and visit Karnak and Luxor Temples",
        "Cruise the Nile on a luxury 5-star ship",
        "Visit the Valley of the Kings and Queen Hatshepsut’s Temple",
        "See the High Dam and Philae Temple in Aswan",
        "Enjoy an optional excursion to Abu Simbel"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Boat", color: "blue" },
        { label: "Walking", color: "orange" },
        { label: "Airplane", color: "red" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive in Cairo and enjoy an evening Nile Cruise.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Pyramids of Giza & Egyptian Museum",
        description: "Explore the Giza Plateau, Egyptian Museum, and Tutankhamun's treasures.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Transfer to Alexandria",
        description: "Transfer to Alexandria for a full-day tour, including the Catacombs, Qaitbay Citadel, and Alexandria Library. Return to Cairo.",
        travelModes: ['coach']
      },
      {
        day: 4,
        title: "Cairo City Tour",
        description: "Visit the Alabaster Mosque of Mohamed Ali and tour Old Cairo.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 5,
        title: "Civilization Museum",
        description: "Discover the Civilization Museum and stroll through Azhar Park.",
        travelModes: ['boat', 'walking']
      },
      {
        day: 6,
        title: "Departure from Cairo",
        description: "Departure from Cairo, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "05 Nights / 06 Days accommodation in 4-Star Hotels",
      "Daily Breakfast",
      "All Listed Excursions",
      "Single Entry Tourist Visa",
      "Private Coach Transfers"
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,590",
              availableDates: [
                { dateRange: "5th Mar - 13th Mar", price: "£2,590" },
                { dateRange: "19th Mar - 27th Mar", price: "£2,690", discount: "£2,640" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,690",
              availableDates: [
                { dateRange: "9th Apr - 17th Apr", price: "£2,690" },
                { dateRange: "23rd Apr - 1st May", price: "£2,790", discount: "£2,690" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Steigenberger Hotel El Tahrir",
          image: "/tour-images/steigenberger-cairo.jpg",
          rating: 4,
          nights: 3,
          location: "Cairo, Egypt",
          detailsLink: "#"
        },
        {
          name: "Mövenpick MS Royal Lily",
          image: "/tour-images/nile-cruise-ship.jpg",
          rating: 5,
          nights: 4,
          location: "Nile Cruise (Luxor to Aswan)",
          detailsLink: "#"
        },
        {
          name: "Le Passage Hotel & Casino",
          image: "/tour-images/le-passage-cairo.jpg",
          rating: 4,
          nights: 1,
          location: "Cairo, Egypt (Airport Hotel)",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Carla James",
        date: "22 Feb 24",
        text: "An unforgettable experience! Seeing the Pyramids was surreal, and the cruise was so relaxing. Our Egyptologist guide brought history to life!"
      },
      {
        name: "Mark Douglas",
        date: "03 Mar 24",
        text: "Incredible from start to finish. Every day brought something new and exciting. I felt safe and well taken care of the entire time."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders must obtain a tourist visa for Egypt. Available online or on arrival for a small fee."
        },
        {
          title: "Weather & Packing",
          content: "Expect warm to hot weather. Light clothing, a hat, and sunscreen are recommended. Modest dress at religious sites."
        },
        {
          title: "Mobility",
          content: "This tour involves walking on uneven surfaces and stairs. A moderate level of fitness is required."
        }
      ]
    }
  },

  "azerbaijan-cultural-tour": {
    title: "Azerbaijan Cultural Tour",
    subtitle: "6 Day Exploration of the Land of Fire",
    location: "Azerbaijan, Caucasus",
    price: 439000,
    heroImage: "/images/packages/deals/Azerbaijan-tour.jpg",
    mapImage: "/tour-images/azerbaijan-map.jpg",
    duration: "6 days",
    tourCode: "AZ06",
    pdfLink: "/pdfs/azerbaijan-cultural-tour.pdf",
    gallery: [
      "/tour-images/baku-cityscape.jpg",
      "/tour-images/gobustan-petroglyphs.jpg",
      "/tour-images/sheki-palace.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "4 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Discover Azerbaijan’s fusion of East and West on this 6-day cultural journey. Explore futuristic Baku, ancient petroglyphs, majestic palaces, and mountain villages. This off-the-beaten-path adventure offers a deep dive into the country’s rich history, traditions, and breathtaking landscapes.",

    galleryPhotos: [
      {
        src: "/tour-images/baku-cityscape.jpg",
        alt: "Baku Flame Towers",
        caption: "Marvel at Baku’s contrast of modern architecture and medieval charm"
      },
      {
        src: "/tour-images/gobustan-petroglyphs.jpg",
        alt: "Gobustan Petroglyphs",
        caption: "Uncover ancient rock carvings in Gobustan National Park"
      },
      {
        src: "/tour-images/sheki-palace.jpg",
        alt: "Sheki Khan’s Palace",
        caption: "Step into the ornate Sheki Khan’s Palace with its colourful stained glass"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Enjoy the culture and architecture of Baku",
        "Tour the historic Absheron Peninsula",
        "Explore Absheron and Gobustan with a city tour",
        "Enjoy free days to explore at your leisure",
        "Visit the Gobustan mud volcanoes and petroglyphs",
        "Enjoy traditional Azerbaijani cuisine and cultural performances"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Baku",
        description: "Arrive in Baku and explore the city's top attractions.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Baku City Tour",
        description: "Discover Absheron, Gobustan, and more on a city tour.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Gabala Day Excursion",
        description: "Experience the natural beauty of Gabala.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 4,
        title: "Free Day",
        description: "Enjoy a free day to explore at your own pace.",
        travelModes: ['coach']
      },
      {
        day: 5,
        title: "Another Free Day",
        description: "Another free day for leisure or optional activities.",
        travelModes: ['walking']
      },
      {
        day: 6,
        title: "Departure from Baku",
        description: "Departure from Baku, taking home wonderful memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "05 Nights / 06 Days accommodation in 4-Star Hotels",
      "Daily Breakfast",
      "All Listed Excursions & Activities",
      "Return Air Tickets",
      "Private airport transfers",
      "Single Entry Tourist Visa",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,290",
              availableDates: [
                { dateRange: "16th Mar - 22nd Mar", price: "£2,290" },
                { dateRange: "30th Mar - 5th Apr", price: "£2,390", discount: "£2,340" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,390",
              availableDates: [
                { dateRange: "13th Apr - 19th Apr", price: "£2,390" },
                { dateRange: "27th Apr - 3rd May", price: "£2,490", discount: "£2,390" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Winter Park Hotel Baku",
          image: "/tour-images/winter-park-baku.jpg",
          rating: 4,
          nights: 3,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Sheki Palace Hotel",
          image: "/tour-images/sheki-palace-hotel.jpg",
          rating: 4,
          nights: 2,
          location: "Sheki, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Park Inn by Radisson Baku",
          image: "/tour-images/park-inn-baku.jpg",
          rating: 4,
          nights: 1,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Tina Andrews",
        date: "15 Mar 24",
        text: "A true hidden gem of a tour. Azerbaijan completely exceeded my expectations – beautiful, safe, and packed with history. Loved every minute!"
      },
      {
        name: "George Malik",
        date: "02 Apr 24",
        text: "Great itinerary, very well-paced. The Caucasus landscapes were stunning and the guide was extremely knowledgeable. Highly recommend this cultural escape."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders require an eVisa for Azerbaijan. It can be applied for online prior to travel."
        },
        {
          title: "Cultural Dress",
          content: "Modest clothing is advised, especially when visiting mosques or rural areas. Casual wear is acceptable in cities."
        },
        {
          title: "Terrain & Mobility",
          content: "Some walking on cobbled or uneven streets is involved. Suitable for guests with moderate mobility."
        }
      ]
    }
  },

  "golden-triangle-tour": {
    title: "Golden Triangle Tour",
    subtitle: "5 Day Exploration of the Golden Triangle",
    location: "India",
    price: 275000,
    heroImage: "/images/packages/deals/golden-tour.jpg",
    mapImage: "/tour-images/golden-triangle-map.jpg",
    duration: "5 days",
    tourCode: "GT05",
    pdfLink: "/pdfs/golden-triangle-tour.pdf",
    gallery: [
      "/tour-images/golden-triangle-1.jpg",
      "/tour-images/golden-triangle-2.jpg",
      "/tour-images/golden-triangle-3.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast & Dinner Included" },
      { icon: 'excursions', label: "Excursions", value: "4 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Discover the Golden Triangle of India on this 5-day tour. Explore the iconic cities of Delhi, Jaipur, and Agra, with visits to the Taj Mahal and other historical sites. This tour offers a deep dive into India's rich history, culture, and architecture.",

    galleryPhotos: [
      {
        src: "/tour-images/golden-triangle-1.jpg",
        alt: "Golden Triangle",
        caption: "Explore the iconic cities of Delhi, Jaipur, and Agra"
      },
      {
        src: "/tour-images/golden-triangle-2.jpg",
        alt: "Golden Triangle",
        caption: "Explore the iconic cities of Delhi, Jaipur, and Agra"
      },
      {
        src: "/tour-images/golden-triangle-3.jpg",
        alt: "Golden Triangle",
        caption: "Explore the iconic cities of Delhi, Jaipur, and Agra"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Visit the iconic cities of Delhi, Jaipur, and Agra",
        "Explore the historical sites of the Golden Triangle",
        "Enjoy the rich culture and traditions of India",
        "Visit the Taj Mahal and other historical sites",
        "Enjoy the delicious cuisine of India",
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Arrive in New Delhi and transfer to Agra. Visit the iconic Taj Mahal and Agra Fort. Overnight in Agra.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Transfer to Jaipur",
        description: "Travel to Jaipur, stopping at the historic Fatehpur Sikri en route. Arrive in Jaipur by evening. Overnight in Jaipur.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "City Tour of Jaipur",
        description: "Explore Jaipur’s top attractions on a full-day city tour. Overnight in Jaipur.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 4,
        title: "Transfer to Delhi & City Tour",
        description: "Transfer to New Delhi and enjoy a city tour.",
        travelModes: ['coach']
      },
      {
        day: 5,
        title: "Departure from Delhi",
        description: "Departure from New Delhi, taking home wonderful memories.",
        travelModes: ['coach', 'flight']
      },
    ],

    includedItems: [
      "04 Nights / 05 Days accommodation in 4-Star Hotels",
      "Daily Breakfast & Dinner",
      "All Listed Excursions & Activities",
      "Return Air Tickets",
      "Private transfers",
      "English-speaking chauffeur guide",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,290",
              availableDates: [
                { dateRange: "16th Mar - 22nd Mar", price: "£2,290" },
                { dateRange: "30th Mar - 5th Apr", price: "£2,390", discount: "£2,340" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,390",
              availableDates: [
                { dateRange: "13th Apr - 19th Apr", price: "£2,390" },
                { dateRange: "27th Apr - 3rd May", price: "£2,490", discount: "£2,390" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Winter Park Hotel Baku",
          image: "/tour-images/winter-park-baku.jpg",
          rating: 4,
          nights: 3,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Sheki Palace Hotel",
          image: "/tour-images/sheki-palace-hotel.jpg",
          rating: 4,
          nights: 2,
          location: "Sheki, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Park Inn by Radisson Baku",
          image: "/tour-images/park-inn-baku.jpg",
          rating: 4,
          nights: 1,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Tina Andrews",
        date: "15 Mar 24",
        text: "A true hidden gem of a tour. Azerbaijan completely exceeded my expectations – beautiful, safe, and packed with history. Loved every minute!"
      },
      {
        name: "George Malik",
        date: "02 Apr 24",
        text: "Great itinerary, very well-paced. The Caucasus landscapes were stunning and the guide was extremely knowledgeable. Highly recommend this cultural escape."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders require an eVisa for Azerbaijan. It can be applied for online prior to travel."
        },
        {
          title: "Cultural Dress",
          content: "Modest clothing is advised, especially when visiting mosques or rural areas. Casual wear is acceptable in cities."
        },
        {
          title: "Terrain & Mobility",
          content: "Some walking on cobbled or uneven streets is involved. Suitable for guests with moderate mobility."
        }
      ]
    }
  },

  "maldives-makunudu-island-escape": {
    title: "Maldives – Makunudu Island Escape",
    subtitle: "4 Day Escape to the Maldives",
    location: "Maldives",
    price: 386000,
    heroImage: "/images/packages/deals/makunudu.jpg",
    mapImage: "/tour-images/maldives-map.jpg",
    duration: "4 days",
    tourCode: "MM04",
    pdfLink: "/pdfs/maldives-makunudu-island-escape.pdf",
    gallery: [
      "/tour-images/makunudu.jpg",
      "/tour-images/makunudu.jpg",
      "/tour-images/makunudu.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "All Meals Included" },
      { icon: 'excursions', label: "Excursions", value: "2 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Escape to the Maldives on this 4-day adventure. Discover the stunning Makunudu Island, enjoy water sports, and relax on the beach. This off-the-beaten-path escape offers a deep dive into the Maldives’ rich culture, traditions, and breathtaking landscapes.",

    galleryPhotos: [
      {
        src: "/tour-images/makunudu.jpg",
        alt: "Makunudu Island",
        caption: "Discover the stunning Makunudu Island"
      },
      {
        src: "/tour-images/makunudu.jpg",
        alt: "Makunudu Island",
        caption: "Discover the stunning Makunudu Island"
      },
      {
        src: "/tour-images/makunudu.jpg",
        alt: "Makunudu Island",
        caption: "Discover the stunning Makunudu Island"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Convenient speedboat transfers",
        "Enjoy guided snorkeling in crystal-clear waters",
        "International buffet breakfast daily",
        "Enjoy free days to explore at your leisure",
        "Relax at the beach bungalow",
        "Enjoy traditional Maldivian cuisine"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Malé",
        description: "Arrive in Malé and transfer to your resort by speedboat.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Free Day",
        description: "Relax and enjoy a free day in paradise.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Another Free Day",
        description: "Another free day for leisure or optional activities.",
        travelModes: ['walking']
      },
      {
        day: 4,
        title: "Departure from Malé",
        description: "Departure from Malé, taking home wonderful memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "3 Nights Beach Bungalow Accommodation",
      "Daily Breakfast, Lunch & Dinner",
      "All Listed Excursions & Activities",
      "Speedboat Transfers to and from the resort",
      "International Buffet Breakfast daily",
      "Guided Snorkeling experience",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,290",
              availableDates: [
                { dateRange: "16th Mar - 22nd Mar", price: "£2,290" },
                { dateRange: "30th Mar - 5th Apr", price: "£2,390", discount: "£2,340" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,390",
              availableDates: [
                { dateRange: "13th Apr - 19th Apr", price: "£2,390" },
                { dateRange: "27th Apr - 3rd May", price: "£2,490", discount: "£2,390" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Winter Park Hotel Baku",
          image: "/tour-images/winter-park-baku.jpg",
          rating: 4,
          nights: 3,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Sheki Palace Hotel",
          image: "/tour-images/sheki-palace-hotel.jpg",
          rating: 4,
          nights: 2,
          location: "Sheki, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Park Inn by Radisson Baku",
          image: "/tour-images/park-inn-baku.jpg",
          rating: 4,
          nights: 1,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Tina Andrews",
        date: "15 Mar 24",
        text: "A true hidden gem of a tour. Azerbaijan completely exceeded my expectations – beautiful, safe, and packed with history. Loved every minute!"
      },
      {
        name: "George Malik",
        date: "02 Apr 24",
        text: "Great itinerary, very well-paced. The Caucasus landscapes were stunning and the guide was extremely knowledgeable. Highly recommend this cultural escape."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders require an eVisa for Azerbaijan. It can be applied for online prior to travel."
        },
        {
          title: "Cultural Dress",
          content: "Modest clothing is advised, especially when visiting mosques or rural areas. Casual wear is acceptable in cities."
        },
        {
          title: "Terrain & Mobility",
          content: "Some walking on cobbled or uneven streets is involved. Suitable for guests with moderate mobility."
        }
      ]
    }
  },

  "maldives-medhufushi-island-retreat": {
    title: "Maldives – Medhufushi Island Retreat",
    subtitle: "4 Day Escape to the Maldives",
    location: "Maldives",
    price: 555000,
    heroImage: "/images/packages/deals/medhufushi.jpg",
    mapImage: "/tour-images/maldives-map.jpg",
    duration: "4 days",
    tourCode: "MI04",
    pdfLink: "/pdfs/maldives-medhufushi-island-retreat.pdf",
    gallery: [
      "/tour-images/medhufushi.jpg",
      "/tour-images/medhufushi.jpg",
      "/tour-images/medhufushi.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "All Meals Included" },
      { icon: 'excursions', label: "Excursions", value: "2 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Discover the Maldives’ rich culture, traditions, and breathtaking landscapes on this 4-day adventure. Explore the stunning Medhufushi Island, enjoy water sports, and relax on the beach. This off-the-beaten-path escape offers a deep dive into the Maldives’ rich culture, traditions, and breathtaking landscapes.",

    galleryPhotos: [
      {
        src: "/tour-images/medhufushi.jpg",
        alt: "Medhufushi Island",
        caption: "Discover the stunning Medhufushi Island"
      },
      {
        src: "/tour-images/medhufushi.jpg",
        alt: "Medhufushi Island",
        caption: "Discover the stunning Medhufushi Island"
      },
      {
        src: "/tour-images/medhufushi.jpg",
        alt: "Medhufushi Island",
        caption: "Discover the stunning Medhufushi Island"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Speedboat transfers to and from the resort",
        "Water Villa Accommodation on Full Board Basis ",
        "Guided snorkeling and water sports",
        "Enjoy free days to explore at your leisure",
        "Beach Bungalow Accommodation on Full Board Basis",
        "Relax on the beach and enjoy spa treatments"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Malé",
        description: "Arrive in Malé and transfer to your resort by speedboat. ",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Free Day",
        description: "Relax and enjoy a free day in paradise.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Another Free Day",
        description: "Another free day for leisure or optional activities.",
        travelModes: ['walking']
      },
      {
        day: 4,
        title: "Departure from Malé",
        description: "Departure from Malé, taking home unforgettable memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "Beach Bungalow Accommodation on Full Board Basis for 2 nights",
      "Water Villa Accommodation on Full Board Basis for 1 night",
      "Daily Breakfast, Lunch & Dinner",
      "Speedboat Transfers to and from the resort",
      "Guided Snorkeling experience",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,290",
              availableDates: [
                { dateRange: "16th Mar - 22nd Mar", price: "£2,290" },
                { dateRange: "30th Mar - 5th Apr", price: "£2,390", discount: "£2,340" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,390",
              availableDates: [
                { dateRange: "13th Apr - 19th Apr", price: "£2,390" },
                { dateRange: "27th Apr - 3rd May", price: "£2,490", discount: "£2,390" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Winter Park Hotel Baku",
          image: "/tour-images/winter-park-baku.jpg",
          rating: 4,
          nights: 3,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Sheki Palace Hotel",
          image: "/tour-images/sheki-palace-hotel.jpg",
          rating: 4,
          nights: 2,
          location: "Sheki, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Park Inn by Radisson Baku",
          image: "/tour-images/park-inn-baku.jpg",
          rating: 4,
          nights: 1,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Tina Andrews",
        date: "15 Mar 24",
        text: "A true hidden gem of a tour. Azerbaijan completely exceeded my expectations – beautiful, safe, and packed with history. Loved every minute!"
      },
      {
        name: "George Malik",
        date: "02 Apr 24",
        text: "Great itinerary, very well-paced. The Caucasus landscapes were stunning and the guide was extremely knowledgeable. Highly recommend this cultural escape."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders require an eVisa for Azerbaijan. It can be applied for online prior to travel."
        },
        {
          title: "Cultural Dress",
          content: "Modest clothing is advised, especially when visiting mosques or rural areas. Casual wear is acceptable in cities."
        },
        {
          title: "Terrain & Mobility",
          content: "Some walking on cobbled or uneven streets is involved. Suitable for guests with moderate mobility."
        }
      ]
    }
  },

  "maldives-triton-beach-escape": {
    title: "Maldives – Triton Beach Escape",
    subtitle: "4 Day Escape to the Maldives",
    location: "Maldives",
    price: 140000,
    heroImage: "/images/packages/deals/triton.jpg",
    mapImage: "/tour-images/maldives-map.jpg",
    duration: "4 days",
    tourCode: "MI04",
    pdfLink: "/pdfs/maldives-triton-beach-escape.pdf",
    gallery: [
      "/tour-images/triton.jpg",
      "/tour-images/triton.jpg",
      "/tour-images/triton.jpg"
    ],

    quickFacts: [
      { icon: 'flights', label: "Flights", value: "Upon Request" },
      { icon: 'meals', label: "Meals", value: "Breakfast Included" },
      { icon: 'excursions', label: "Excursions", value: "2 Excursions" },
      { icon: 'transfers', label: "Transfers", value: "Transfers Included" }
    ],

    description: "Discover the Maldives’ rich culture, traditions, and breathtaking landscapes on this 4-day adventure. Explore the stunning Triton Beach, enjoy water sports, and relax on the beach. This off-the-beaten-path escape offers a deep dive into the Maldives’ rich culture, traditions, and breathtaking landscapes.",

    galleryPhotos: [
      {
        src: "/tour-images/triton.jpg",
        alt: "Triton Beach",
        caption: "Discover the stunning Triton Beach"
      },
      {
        src: "/tour-images/triton.jpg",
        alt: "Triton Beach",
        caption: "Discover the stunning Triton Beach"
      },
      {
        src: "/tour-images/triton.jpg",
        alt: "Triton Beach",
        caption: "Discover the stunning Triton Beach"
      }
    ],

    sections: [
      { id: "highlights", label: "Highlights" },
      { id: "itinerary", label: "Itinerary" },
      // { id: "prices", label: "Dates & Prices" },
      { id: "accommodation", label: "Accommodation" },
      { id: "testimonials", label: "Reviews" },
      { id: "important-information", label: "Important Info" }
    ],

    highlights: {
      items: [
        "Experience a magical sunset fishing trip with a BBQ dinner",
        "Half-day tour of the local area",
        "Unwind by the pool at the hotel",
        "Enjoy days of relaxation and exploration at your leisure",
        "Speedboat transfers between the airport and the hotel",
        "Enjoy traditional Maldivian cuisine"
      ],
      points: [],
      mapKey: [
        { label: "Coach", color: "black" },
        { label: "Walking", color: "orange" },
        { label: "Number of nights", color: "#005bbb" }
      ]
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Malé",
        description: "Arrive in Malé and transfer to your hotel by speedboat.",
        travelModes: ['transfer']
      },
      {
        day: 2,
        title: "Half-day tour of the local area",
        description: "Explore stunning islands on a half-day island-hopping tour.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 3,
        title: "Fishing Experience",
        description: "Enjoy a sunset fishing experience followed by a BBQ.",
        travelModes: ['coach', 'walking']
      },
      {
        day: 4,
        title: "Departure from Malé",
        description: "Departure from Malé, taking home amazing memories.",
        travelModes: ['coach', 'flight']
      }
    ],

    includedItems: [
      "03 Nights accommodation in a Pool View Room on BB basis",
      "Sunset fishing trip with a BBQ dinner.",
      "Daily Breakfast",
      "Speedboat transfers between the airport and the hotel",
      "Half-day island-hopping tour",
    ],

    pricesData: {
      years: [
        {
          year: "2025",
          dates: [
            {
              month: "March 2025",
              basePrice: "£2,290",
              availableDates: [
                { dateRange: "16th Mar - 22nd Mar", price: "£2,290" },
                { dateRange: "30th Mar - 5th Apr", price: "£2,390", discount: "£2,340" }
              ]
            },
            {
              month: "April 2025",
              basePrice: "£2,390",
              availableDates: [
                { dateRange: "13th Apr - 19th Apr", price: "£2,390" },
                { dateRange: "27th Apr - 3rd May", price: "£2,490", discount: "£2,390" }
              ]
            }
          ]
        }
      ]
    },

    accommodation: {
      hotels: [
        {
          name: "Winter Park Hotel Baku",
          image: "/tour-images/winter-park-baku.jpg",
          rating: 4,
          nights: 3,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Sheki Palace Hotel",
          image: "/tour-images/sheki-palace-hotel.jpg",
          rating: 4,
          nights: 2,
          location: "Sheki, Azerbaijan",
          detailsLink: "#"
        },
        {
          name: "Park Inn by Radisson Baku",
          image: "/tour-images/park-inn-baku.jpg",
          rating: 4,
          nights: 1,
          location: "Baku, Azerbaijan",
          detailsLink: "#"
        }
      ]
    },

    testimonials: [
      {
        name: "Tina Andrews",
        date: "15 Mar 24",
        text: "A true hidden gem of a tour. Azerbaijan completely exceeded my expectations – beautiful, safe, and packed with history. Loved every minute!"
      },
      {
        name: "George Malik",
        date: "02 Apr 24",
        text: "Great itinerary, very well-paced. The Caucasus landscapes were stunning and the guide was extremely knowledgeable. Highly recommend this cultural escape."
      }
    ],

    importantInformation: {
      title: "Important Information",
      items: [
        {
          title: "Visa Requirements",
          content: "UK passport holders require an eVisa for Azerbaijan. It can be applied for online prior to travel."
        },
        {
          title: "Cultural Dress",
          content: "Modest clothing is advised, especially when visiting mosques or rural areas. Casual wear is acceptable in cities."
        },
        {
          title: "Terrain & Mobility",
          content: "Some walking on cobbled or uneven streets is involved. Suitable for guests with moderate mobility."
        }
      ]
    }
  }

};

export function getAllTourSlugs(): string[] {
  return Object.keys(toursData);
}

export function getTourBySlug(slug: string): TourData {
  return toursData[slug];
}

export default toursData; 
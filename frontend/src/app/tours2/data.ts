import { FaCamera, FaMapMarkerAlt, FaUtensils, FaBinoculars, FaChartLine } from "react-icons/fa";

export const tourData = {
  title: "Grand Tour of Sri Lanka",
  subtitle: "17 Day Escorted Tour",
  location: "Sri Lanka, Indian Ocean",
  
  quickFacts: [
    { icon: FaMapMarkerAlt, text: "Sri Lanka, Indian Ocean" },
    { icon: FaUtensils, text: "44 Meals Included" },
    { icon: FaBinoculars, text: "16 Excursions" },
    { icon: FaChartLine, text: "Intermediate Pace" }
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
    points: [
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
    // ... rest of the itinerary data
  ],

  includedItems: [
    "Hand-picked Accommodation",
    "Expert Local Guides",
    "Overseas Transfers and Transport (as per itinerary)",
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
          },
          {
            month: "August 2025",
            basePrice: "£3,499",
            availableDates: [{ dateRange: "", price: "", discount: "" }]
          },
          {
            month: "September 2025",
            basePrice: "£2,899",
            availableDates: [{ dateRange: "", price: "", discount: "" }]
          },
          {
            month: "October 2025",
            basePrice: "£2,799",
            availableDates: [{ dateRange: "", price: "", discount: "" }]
          },
          {
            month: "November 2025",
            basePrice: "£2,999",
            availableDates: [{ dateRange: "", price: "", discount: "" }]
          }
        ]
      },
      {
        year: "2026",
        dates: [
          {
            month: "March 2026",
            basePrice: "£2,799",
            availableDates: [{ dateRange: "", price: "", discount: "" }]
          },
          {
            month: "April 2026",
            basePrice: "£2,899",
            availableDates: [{ dateRange: "", price: "", discount: "" }]
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
      { title: "Passport and Visa information", content: "Ensure your passport is valid for at least 6 months beyond your travel date. Visa requirements vary by country." },
      { title: "Flight Information", content: "Flights may include layovers and are subject to airline policies and availability." },
      { title: "Insurance", content: "Travel insurance is recommended and can be arranged at the time of booking." },
      { title: "Health and Vaccinations", content: "Consult your doctor for recommended vaccinations before traveling." },
      { title: "Physical Accessibility", content: "Some excursions may not be suitable for travelers with limited mobility." },
      { title: "Currency Exchange", content: "Local currency and exchange rate details will be provided upon arrival." },
      { title: "Credit Card Information", content: "Most major credit cards are accepted, but we advise carrying some local cash." },
      { title: "Personal Expenses and Tipping", content: "Personal expenses are not included in the tour cost. Tipping guides and drivers is customary." },
      { title: "Group Size", content: "Group sizes may vary depending on demand, with an average of 15-20 travelers per tour." },
      { title: "Tour Guide", content: "Your tour will be led by an experienced, English-speaking guide." },
      { title: "Transport and Transfers", content: "Transfers between destinations are included as per the itinerary." },
      { title: "Accommodation", content: "Hotels are selected for their comfort and location, but final details will be confirmed 21 days before travel." },
      { title: "Meals and Drinks", content: "Meals included are specified in the itinerary. Drinks are generally not included unless otherwise stated." },
      { title: "Public and Religious Holidays", content: "Some attractions may be closed on public or religious holidays." }
    ]
  }
}; 
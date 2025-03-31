export const sriLankaToursData = {
  metadata: {
    title: 'Sri Lanka Tours | Halo Holidays',
    description: 'Expertly crafted Sri Lanka tours with experienced guides, luxury accommodation and unforgettable experiences.',
  },
  navigation: {
    items: [
      { icon: 'GlobeAlt', label: 'Holidays', href: '/holidays' },
      { icon: 'MapPin', label: 'Hotel Only', href: '/hotels' },
      { icon: 'Camera', label: 'Escorted Tours', href: '/tours', active: true }
    ]
  },
  searchOptions: {
    destinations: ['Colombo', 'Kandy', 'Galle', 'Nuwara Eliya'],
    airports: ['Colombo (CMB)', 'Mattala (HRI)'],
  },
  banner: {
    text: 'Book early for 2024/25 and save up to £200 per person',
    link: '/promotions'
  },
  hero: {
    image: '/images/tours/sri-lanka/hero.jpg',
    alt: 'Sri Lankan stilt fishermen at sunset',
    photoCount: 17
  },
  tourDetails: {
    title: 'Grand Tour of Sri Lanka',
    subtitle: '16 Days of Cultural Heritage and Natural Wonders',
    quickFacts: {
      duration: '16 Days',
      groupSize: 'Max 16 people',
      accommodation: '4* & 5* Hotels',
      meals: 'All Inclusive'
    },
    description: 'Experience the very best of Sri Lanka on this comprehensive tour...'
  },
  contactInfo: {
    phone: '+94 70 454 5455'
  },
  tours: [
    {
      title: 'Cultural Triangle Explorer',
      image: '/images/tours/sri-lanka/cultural-triangle.jpg',
      rating: 4.8,
      reviews: 124,
      highlights: ['Sigiriya Rock Fortress', 'Ancient City of Polonnaruwa', 'Dambulla Cave Temple'],
      price: 'from £1,299 pp'
    },
    // ... more tours
  ],
  highlights: [
    {
      title: 'Cultural Triangle',
      desc: 'Explore UNESCO World Heritage sites including Sigiriya Rock Fortress',
      icon: '🏛️'
    },
    // ... more highlights
  ],
  included: [
    'Return flights from London Heathrow',
    '44 meals: 16 breakfasts, 14 lunches & 14 dinners',
    // ... more included items
  ],
  itinerary: [
    {
      day: 'Day 1-2',
      title: 'Colombo',
      description: 'Arrive in Colombo and transfer to your hotel...'
    },
    // ... more itinerary days
  ],
  departureDates: [
    {
      month: 'September 2024',
      dates: [
        { day: '05', price: '2,499' },
        { day: '12', price: '2,599' },
        { day: '19', price: '2,499' }
      ]
    },
    // ... more dates
  ],
  extensions: [
    {
      title: 'Colombo City Stay',
      duration: '3 nights',
      price: '299',
      image: '/images/tours/sri-lanka/colombo-extension.jpg'
    },
    // ... more extensions
  ]
}; 
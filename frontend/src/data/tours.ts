export type TourData = {
  title: string;
  subtitle: string;
  location: string;
  quickFacts: Array<{ icon: any; text: string }>;
  description: string;
  galleryPhotos: Array<{ src: string; alt: string; caption: string }>;
  sections: Array<{ id: string; label: string }>;
  highlights: {
    points: string[];
    mapKey: Array<{ label: string; color: string }>;
  };
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    travelModes: string[];
  }>;
  includedItems: string[];
  pricesData: {
    years: Array<{
      year: string;
      dates: Array<{
        month: string;
        basePrice: string;
        availableDates: Array<{
          dateRange: string;
          price: string;
          discount?: string;
        }>;
      }>;
    }>;
  };
  accommodation: {
    hotels: Array<{
      name: string;
      image: string;
      rating: number;
      nights: number;
      location: string;
      detailsLink: string;
    }>;
  };
  testimonials: Array<{
    name: string;
    date: string;
    text: string;
  }>;
  importantInformation: {
    title: string;
    items: Array<{
      title: string;
      content: string;
    }>;
  };
};

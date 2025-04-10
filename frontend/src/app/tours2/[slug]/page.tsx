import { getTourBySlug, getAllTourSlugs } from "@/data/toursData";
import TourPageComponent from "@/components/Tours/TourPageComponent";
import { TourData } from "@/types/tours";

// Generate static params for all tours
export async function generateStaticParams() {
  const slugs = getAllTourSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object before accessing its properties
  const resolvedParams = await params;
  const tour = await getTourBySlug(resolvedParams.slug);
  return {
    title: `${tour.title} | Your Company Name`,
    description: tour.description,
  };
}

// Page component
export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object before accessing its properties
  const resolvedParams = await params;
  const tourData = await getTourBySlug(resolvedParams.slug);
  if (!tourData) {
    throw new Error(`Tour not found: ${resolvedParams.slug}`);
  }
  
  // Ensure all required properties are present
  const completeTourData: TourData = {
    ...tourData,
    gallery: tourData.gallery || [],
    galleryPhotos: tourData.galleryPhotos || [],
    price: tourData.price || 0,     
    heroImage: tourData.heroImage || '',
    mapImage: tourData.mapImage || '',
    duration: tourData.duration || '',
    pdfLink: tourData.pdfLink || '',
    quickFacts: tourData.quickFacts?.map(fact => ({
      text: fact.text || '',
      icon: fact.icon || '',
      label: fact.label || '',
      value: fact.value || ''
    })) || []
  };
  
  return <TourPageComponent tourData={completeTourData} />;
} 
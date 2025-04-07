export interface Feature {
    // icon: string;
    title: string;
    description: string;
  }
  
  export interface FeaturesProps {
    title?: string;
    features: Feature[];
  }
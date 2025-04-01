import { FeaturesProps } from '@/types/features';
import FeatureCard from './FeatureCard';

const featuresdata = [
  {
    icon: '/images/features/24-7.svg',
    title: 'Premium Service, Anytime',
    description: '24/7 toll-free support during your holiday to ensure a seamless experience.',
  },
  {
    icon: '/images/features/dream.svg',
    title: 'Open After 6pm',
    description: `For your convenience, we're open for service after 6pm, ensuring we're available when you need us. `,
  },
  {
    icon: '/images/features/payment-options.svg',
    title: 'Dream Destinations',
    description: 'From beach paradies to exotic escapes, choose from the top spots worldwide.',
  },
  {
    icon: '/images/features/tailored.svg',
    title: 'Easy Instalment plan',
    description: 'No credit card? No problem! We offer convenient payment options to suit your needs.',
  },

];

const Features = ({ title = "More reasons to choose us",  }: FeaturesProps) => {
  return (
    <section className="sm:justify-center sm:items-center sm:flex px-4">
      <div className="md:container justify-center items-center lg:container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid  grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresdata.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
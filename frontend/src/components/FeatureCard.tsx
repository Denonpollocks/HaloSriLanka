import Image from 'next/image';
import { Feature } from '@/types/features';

const FeatureCard = ({ icon, title, description }: Feature) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 mb-4">
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="text-pink-600"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
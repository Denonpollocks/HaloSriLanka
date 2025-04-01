import Image from 'next/image';
import { Feature } from '@/types/features';

const FeatureCard = ({ icon, title, description }: Feature) => {
  return (
    <div className="flex flex-col justify-center items-center sm:w-none sm:mx-auto text-center p-6 h-44">
      <div className="w-16 h-16 mb-2">
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className="text-pink-600 mx-auto"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 min-w-[210px] max-w-[220px] text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
import PackageCard from './PackageCard';

const familyPackages = [
  {
    title: "Maldives Family Adventure",
    location: "Maldives",
    description: "Perfect family getaway with water activities, kids club, and relaxation for parents",
    duration: "5 Days",
    price: 1299,
    image: "/images/packages/maldives-family.jpg",
    features: [
      "All-inclusive resort",
      "Kids club activities",
      "Water sports included",
      "Family dining options"
    ],
    rating: 4.8,
    reviewCount: 156
  },
  {
    title: "Maldives Family Adventure",
    location: "Maldives",
    description: "Perfect family getaway with water activities, kids club, and relaxation for parents",
    duration: "5 Days",
    price: 1299,
    image: "/images/packages/maldives-family.jpg",
    features: [
      "All-inclusive resort",
      "Kids club activities",
      "Water sports included",
      "Family dining options"
    ],
    rating: 4.8,
    reviewCount: 156
  },
  {
    title: "Maldives Family Adventure",
    location: "Maldives",
    description: "Perfect family getaway with water activities, kids club, and relaxation for parents",
    duration: "5 Days",
    price: 1299,
    image: "/images/packages/maldives-family.jpg",
    features: [
      "All-inclusive resort",
      "Kids club activities",
      "Water sports included",
      "Family dining options"
    ],
    rating: 4.8,
    reviewCount: 156
  },


  // Add more packages
];

const PackageList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyPackages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageList;
import { FaUtensils, FaPlane, FaTrain, FaBus, FaShip, FaWalking, FaMapMarkedAlt, FaTaxi } from "react-icons/fa";
// import { Tooltip } from "@/components/ui/tooltip"; // You'll need to implement or import a tooltip component
type TravelMode = 'flight' | 'train' | 'coach' | 'boat' | 'walking' | 'tour' | 'transfer';


interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  meals?: string;
  activities?: string;
  travelModes?: TravelMode[];
  
}

interface ItineraryProps {
  itinerary: ItineraryItem[];
}

const getTravelIcon = (mode: TravelMode) => {
    const iconClass = "w-4 h-4 text-pink-600 ";
    const tourClass = "w-4 h-4 text-green-400";
    const boatClass = "w-4 h-4 text-blue-400";
    const coachClass = "w-4 h-4 text-yellow-400";
    const transferClass = "w-4 h-4 text-gray-400";
    const walkingClass = "w-4 h-4 text-orange-400";
    switch (mode) {
      case 'flight':
        return <FaPlane className={iconClass} />;
      case 'train':
        return <FaTrain className={iconClass} />;
      case 'coach':
        return <FaBus className={coachClass} />;
      case 'boat':
        return <FaShip className={boatClass} />;
      case 'walking':
        return <FaWalking className={walkingClass} />;
      case 'tour':
        return <FaMapMarkedAlt className={tourClass} />;
      case 'transfer':
        return <FaTaxi className={transferClass} />;
    }
  };

  const getTravelModeLabel = (mode: TravelMode) => {
    return `${mode.charAt(0).toUpperCase()}${mode.slice(1)} Included`;
  };

export default function ItinerarySection({ itinerary }: ItineraryProps) {
  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Itinerary</h2>

      <div className="relative border-l-2 border-gray-300 pl-6">
        {itinerary.map((item, index) => (
          <div key={index} className="relative mb-8">
            {/* Connector Circle */}
            <div className="absolute -left-[20px] w-4 h-4 bg-gray-300 border-2 border-gray-300 rounded-full"></div>

            {/* Day and Travel Icons */}
            <div className="flex items-center gap-3">
              <h3 className="text-gray-700 font-bold uppercase text-sm">DAY {item.day}</h3>
              
              {/* Travel Mode Icons */}
              {item.travelModes && (
                <div className="flex gap-2">
                  {item.travelModes.map((mode, idx) => (
                    <div key={idx} className="group relative">
                      <div className="cursor-help">
                        {getTravelIcon(mode)}
                      </div>
                      {/* Tooltip */}
                      <div className="invisible group-hover:visible absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                        {getTravelModeLabel(mode)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <h4 className="text-lg font-bold mt-1">{item.title}</h4>

            {/* Meals Information */}
            {item.meals && (
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <FaUtensils className="mr-2" />
                <span>{item.meals}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

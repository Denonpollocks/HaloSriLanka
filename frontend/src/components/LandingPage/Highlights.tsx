interface HighlightsProps {
    highlights: string[];
    mapImage: string;
    mapKey: { label: string; color: string }[];
  }
  
  export default function Highlights({ highlights }: HighlightsProps) {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-pink-600 shrink-0" />
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="relative">
            <Image src={mapImage} alt="Trip Map" width={500} height={300} className="rounded-lg" />
            <div className="mt-4 space-y-2">
              {mapKey.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded-full`} style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    );
  }
  
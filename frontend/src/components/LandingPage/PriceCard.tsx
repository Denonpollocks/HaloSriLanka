import { FaFileDownload } from "react-icons/fa";

interface PriceCardProps {
  price: number;
  currency?: string;
  pdfLink: string;
  nights: string;
}

export default function PriceCard({ price, currency = "£", pdfLink, nights }: PriceCardProps) {
  return (
    <div className="max-w-sm mx-auto">
      {/* Price Box */}
      <div className="bg-white shadow-md rounded-lg p-6 border-t border-gray-200">
        <p className="text-gray-600 text-sm">From</p>
        <h2 className="text-3xl font-bold text-gray-900">
          {currency}{price.toLocaleString()}
        </h2>
        <p className="text-gray-600 text-sm">Per Person</p>
        <p className="text-gray-600 text-sm">Nights: {nights}</p>

        {/* View Dates & Prices Button */}
        <button className="mt-4 w-full border-2 border-pink-600 text-pink-600 font-medium py-2 rounded-md hover:bg-pink-600 hover:text-white transition-all">
          View Dates & Prices
        </button>
      </div>

      {/* Tour Dossier */}
      <div className="flex items-center space-x-3 mt-4 p-4 bg-white shadow-md rounded-lg border-t border-gray-200 cursor-pointer hover:bg-gray-50 transition-all">
        <FaFileDownload className="text-pink-600 text-xl" />
        <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="text-pink-600 font-medium underline">
          Sri Lanka Brouchre 
        </a>
        <span className="text-gray-600"> - View PDF</span>
      </div>
    </div>
  );
}

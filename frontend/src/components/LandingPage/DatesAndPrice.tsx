import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface DateOption {
  dateRange: string;
  price: string;
  discount?: string;
}

interface TourDate {
  month: string;
  basePrice?: string;
  availableDates: DateOption[];
}

interface PricesTableProps {
  data: { year: string; dates: TourDate[] }[];
}

export default function PricesTable({ data }: PricesTableProps) {
  const [activeYear, setActiveYear] = useState(data[0].year);
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">

        <h2 className="text-2xl font-bold mb-4">Prices</h2>
      {/* Year Tabs */}
      <div className="flex border-b">
        {data.map((year) => (
          <button
            key={year.year}
            className={`flex-1 py-3 text-center font-medium ${
              activeYear === year.year
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveYear(year.year)}
          >
            {year.year}
          </button>
        ))}
      </div>

      {/* Pricing Table */}
      <div className="w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100 border-b">
              <th className="py-3 px-4">Dates</th>
              <th className="py-3 px-4">Price (per person)</th>
              <th className="py-3 px-4">Dates available</th>
            </tr>
          </thead>
          <tbody>
            {data
              .find((year) => year.year === activeYear)
              ?.dates.map((monthData) => (
                <React.Fragment key={monthData.month}>
                  <tr
                    className="border-b cursor-pointer hover:bg-gray-100"
                    onClick={() =>
                      setExpandedMonth(
                        expandedMonth === monthData.month
                          ? null
                          : monthData.month
                      )
                    }
                  >
                    <td className="py-3 px-4">{monthData.month}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {monthData.basePrice ? `from ${monthData.basePrice}` : ""}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {monthData.availableDates.length}{" "}
                      {monthData.availableDates.length > 1 ? "Dates" : "Date"}
                    </td>
                  </tr>

                  {/* Expanded Rows */}
                  {expandedMonth === monthData.month &&
                    monthData.availableDates.map((option, index) => (
                      <tr key={index} className="border-b bg-gray-50">
                        <td className="py-3 px-4 font-semibold">
                          {option.dateRange}
                        </td>
                        <td className="py-3 px-4">
                          {option.discount ? (
                            <>
                              <span className="line-through text-gray-500 mr-2">
                                {option.price}
                              </span>
                              <span className="font-bold">{option.discount}</span>
                            </>
                          ) : (
                            <span className="font-bold">{option.price}</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <button className="flex items-center bg-pink-600 text-white px-4 py-2 rounded-md shadow hover:bg-pink-700 transition">
                            Continue <FaArrowRight className="ml-2" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client'

import { useState, useEffect } from 'react';
import { GlobeAltIcon, CurrencyDollarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

interface ListFilterProps {
  countries: string[];
  onFilterChange: (filters: { 
    country: string; 
    maxPrice: number;
    days: number;
  }) => void;
}

const ListFilter = ({ countries, onFilterChange }: ListFilterProps) => {
  const [filters, setFilters] = useState({
    country: '',
    maxPrice: 10000,
    days: 0
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <div className="bg-white rounded-xl border-t border-gray-200 shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Filter Packages</h3>
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <GlobeAltIcon className="w-5 h-5 text-pink-600" />
            Choose your Country
          </label>
          <div className="relative">
            <select
              value={filters.country}
              onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))}
              className="appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500"
            >
              <option value="">All Destinations</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <CalendarDaysIcon className="w-5 h-5 text-pink-600" />
            Duration
          </label>
          <div className="relative">
            <select
              value={filters.days}
              onChange={(e) => setFilters(prev => ({ ...prev, days: Number(e.target.value) }))}
              className="appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500"
            >
              <option value={0}>Any Duration</option>
              {[5, 7, 10, 14].map((days) => (
                <option key={days} value={days}>{days} Days</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <CurrencyDollarIcon className="w-5 h-5 text-pink-600" />
            Maximum Budget
          </label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
            placeholder="Max Budget"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-pink-200 focus:border-pink-500 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default ListFilter;
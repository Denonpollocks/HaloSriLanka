'use client'

import { useState, useMemo, useEffect } from 'react';
import PackageCard from './PackageCard';
import ListFilter from './ListFilter';
import { Package } from '@/types/package'; // You'll need to create this type

interface PackageListProps {
  packages: Package[];
}

const PackageList = ({ packages }: PackageListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    country: '',
    maxPrice: 10000,
    days: 0
  });

  const countries = useMemo(() => {
    return Array.from(new Set(packages.map(pkg => pkg.location)));
  }, [packages]);

  const filteredPackages = useMemo(() => {
    return packages.filter(pkg => {
      const matchesCountry = !filters.country || pkg.location === filters.country;
      const matchesPrice = pkg.price <= filters.maxPrice;
      const matchesDays = !filters.days || pkg.duration.includes(filters.days.toString());
      return matchesCountry && matchesPrice && matchesDays;
    });
  }, [filters, packages]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const packagesPerPage = 6;
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  
  // Ensure current page is valid
  const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  
  const indexOfLastPackage = validCurrentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(Math.min(Math.max(1, pageNumber), totalPages));
    
    // Add this: Scroll to the top of the package list
    const packageListElement = document.getElementById('package-list-top');
    if (packageListElement) {
      packageListElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Add this ID to the element you want to scroll to */}
        <div id="package-list-top"></div>
        
        <ListFilter 
          countries={countries}
          onFilterChange={handleFilterChange}
        />
        
        {filteredPackages.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-8">
              {currentPackages.map((pkg, index) => (
                <PackageCard key={`${pkg.title}-${index}`} {...pkg} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${
                      validCurrentPage === i + 1
                        ? 'bg-pink-600 text-white shadow-md scale-105'
                        : 'bg-white border border-pink-600 text-pink-600 hover:bg-pink-100 cursor-pointer'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <svg 
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Oops! No packages found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or exploring different destinations
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageList;
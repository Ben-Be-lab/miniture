import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function CatalogToolbar() {
  const [sortOption, setSortOption] = useState('Alphabetically, A-Z');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    'Featured',
    'Best selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low'
  ];

  return (
    <div className="w-full bg-white pt-6 pb-2 px-9 select-none">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between border-b border-gray-100 pb-5">
        <button className="flex items-center gap-2.5 bg-[#1C1C1C] text-white text-[14px] font-bold rounded-full px-6 py-3 hover:bg-[#FFAE34] transition-colors duration-200 cursor-pointer shadow-xs">
          <SlidersHorizontal size={14} strokeWidth={2.5} />
          <span>Filters</span>
        </button>
        <div className="flex items-center gap-3 relative">
          <span className="text-[14px] font-medium text-gray-500">
            Sort by:
          </span>
          <button 
            onClick={() => setIsSortOpen(!isSortOpen)}
            onBlur={() => setTimeout(() => setIsSortOpen(false), 200)} // Smoothly auto-closes when user clicks away
            className="flex items-center justify-between min-w-[190px] text-[14px] font-medium text-gray-400 bg-white border border-gray-200 rounded-full px-5 py-2.5 hover:border-gray-500 transition-colors duration-150 cursor-pointer outline-none"
          >
            <span>{sortOption}</span>
            <ChevronDown 
              size={14} 
              strokeWidth={2.5} 
              className={`text-gray-500 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          {isSortOpen && (
            <div className="absolute top-full right-0 mt-2 w-[210px] bg-white border border-gray-100 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-2 flex flex-col z-50 animate-fadeIn text-left">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortOption(option);
                    setIsSortOpen(false);
                  }}
                  className={`text-[13px] font-medium text-left px-4 py-2 rounded-xl transition-colors w-full
                    ${sortOption === option 
                      ? 'bg-gray-50 text-[#FFAE34] font-semibold' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                    }
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
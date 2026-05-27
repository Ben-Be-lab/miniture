import React from 'react';
import { ChevronDown, Search, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    /* fixed top-0 left-0 w-full: Anchors the header to the top viewport edge.
      z-50: Guarantees your navigation stays stacked on top of all images and cards.
      bg-white: Solid, 100% opaque white background.
      px-9 py-8: Applied your exact 32px top/bottom and 36px left/right padding rules.
    */
    <header className="fixed top-0 left-0 w-full bg-white px-9 py-8 z-50">
      {/* Using a 3-column grid layout (grid-cols-3) ensures that the center navigation 
        stays perfectly centered on the screen, regardless of the left and right content widths.
      */}
      <div className="w-full grid grid-cols-3 items-center mx-auto">
        
        {/* Left Column: Logo */}
        <div className="flex justify-start">
          <a href="#" className="text-[31px] font-bold tracking-[-0.05em] text-black leading-none select-none no-underline">
            miniture
          </a>
        </div>

        {/* Center Column: Navigation Menu links */}
        <nav className="hidden md:flex items-center justify-center space-x-[29px]">
          {/* Home Dropdown */}
          <a href="#" className="group flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
            <span>Home</span>
            <ChevronDown 
              size={14} 
              className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" 
              strokeWidth={2.5} 
            />
          </a>

          {/* Catalog Dropdown */}
          <a href="#" className="group flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
            <span>Catalog</span>
            <ChevronDown 
              size={14} 
              className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" 
              strokeWidth={2.5} 
            />
          </a>

          {/* Pages Dropdown */}
          <a href="#" className="group flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
            <span>Pages</span>
            <ChevronDown 
              size={14} 
              className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" 
              strokeWidth={2.5} 
            />
          </a>

          {/* Blog Link */}
          <a href="#" className="text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
            Blog
          </a>

          {/* Contact Link */}
          <a href="#" className="text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
            Contact
          </a>
        </nav>

        {/* Right Column: Right-aligned icons turning orange on hover */}
        <div className="flex items-center justify-end space-x-[22px] text-black">
          {/* Search Button */}
          <button className="transition-colors hover:text-[#FFAE34] p-1" aria-label="Search">
            <Search size={21} strokeWidth={1.5} />
          </button>

          {/* Account / Profile Button */}
          <button className="transition-colors hover:text-[#FFAE34] p-1" aria-label="Account">
            <User size={21} strokeWidth={1.5} />
          </button>

          {/* Shopping Bag Button */}
          <button className="transition-colors hover:text-[#FFAE34] p-1" aria-label="Cart">
            <ShoppingBag size={21} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </header>
  );
}
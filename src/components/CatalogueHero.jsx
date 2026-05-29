import React from 'react';
import { Home } from 'lucide-react';

export default function CatalogHero() {
  return (
    <section className="w-full bg-white px-9 pt-[140px] pb-6 select-none">
      <div className="w-full max-w-[1440px] mx-auto">
        <div 
          className="w-full rounded-[24px] bg-[#F4F4F2] bg-cover bg-center min-h-[280px] sm:min-h-[320px] flex items-center p-8 sm:p-16 relative overflow-hidden"
          style={{ 
            backgroundImage: `url('https://miniture-demo.myshopify.com/cdn/shop/files/page_header.jpg?v=1776574915&width=1800')`,
            backgroundBlendMode: 'multiply'
          }}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
          <div className="relative z-10 flex flex-col text-left items-start max-w-md">
            <h1 className="text-[42px] sm:text-[48px] font-bold text-[#1C1C1C] tracking-tight leading-tight mb-4">
              Products
            </h1>
            <div className="flex items-center space-x-2 text-[14px] font-medium text-gray-600">
              <a href="/" className="hover:text-[#FFAE34] transition-colors flex items-center justify-center">
                <Home size={15} strokeWidth={2.2} className="mb-0.5 text-gray-700" />
              </a>
              
              <span className="text-gray-300 font-light">/</span>
              <a href="/collections" className="hover:text-[#FFAE34] transition-colors no-underline">
                Collections
              </a>
              
              <span className="text-gray-300 font-light">/</span>
              <span className="cursor-pointer ">
                Products
              </span>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoryPromoSection() {
  return (
    <section className="w-full px- -mt-15 md:-mt-20 md:px-10 py-0 bg-white select-none">

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6  items-stretch">
       
        <div className="flex flex-col gap-6">
          
        
          <div className="group relative bg-[#E8EFF1] rounded-[24px] p-8 md:p-10 h-[280px] flex flex-col justify-between overflow-hidden shadow-sm">
            <div className="max-w-[55%] z-10 pointer-events-none">
              <span className="block text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2">
                CHAISE LOUNGE
              </span>
              <h3 className="text-[20px] md:text-[22px] font-bold text-black leading-tight mb-2">
                Axis Left Arm Double Chaise Lounge
              </h3>
              <p className="text-[12px] text-gray-500 font-normal leading-relaxed">
                Add sensory excitement and personality to your living space with our Ambie chair.
              </p>
            </div>

            
                       <div className="absolute right-2 bottom-4 w-[100%] h-[100%] flex items-end justify-center overflow-hidden">
              <img 
                src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_collection_01.jpg?v=1777043011&width=1200" 
                alt="Chaise Lounge"
                className="max-w-full max-h-full object-contain transform transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="absolute left-0 bottom-0 bg-white pt-4 pr-4 rounded-tr-[24px] z-10">
              <button className="flex items-center gap-2 px-6 py-3.5 bg-[#FFAE34] text-white font-medium text-[13px] rounded-full transition-colors duration-300 hover:bg-black shadow-sm group/btn">
                <span>Shop now</span>
                <ArrowRight size={14} strokeWidth={2.5} className="transform transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>
          <div className="group relative bg-[#E5DAD9] rounded-[24px] p-8 md:p-10 h-[280px] flex flex-col justify-between overflow-hidden shadow-sm">
            <div className="max-w-[55%] z-10 pointer-events-none">
              <span className="block text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2">
                ACCENT CHAIR
              </span>
              <h3 className="text-[20px] md:text-[22px] font-bold text-black leading-tight mb-2">
                Ambie Walnut Wood Accent Chair
              </h3>
              <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                Add sensory excitement and personality to your living space with our Ambie chair.
              </p>
            </div>

            <div className="absolute right-4 bottom-4 w-[100%] h-[100%] flex items-end justify-center overflow-hidden">
              <img 
                src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_collection_02.jpg?v=1777043012&width=1200" 
                alt="Accent Chair"
                className="max-w-full max-h-full object-contain transform transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="absolute left-0 bottom-0 bg-white pt-4 pr-4 rounded-tr-[24px] z-10">
              <button className="flex items-center gap-2 px-6 py-3.5 bg-[#FFAE34] text-white font-medium text-[13px] rounded-full transition-colors duration-300 hover:bg-black shadow-sm group/btn">
                <span>Shop now</span>
                <ArrowRight size={14} strokeWidth={2.5} className="transform transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

        </div>
        <div className="group relative bg-[#F0EFF1] rounded-[24px] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-sm min-h-[584px] lg:min-h-full">
          
          <div className="max-w-[65%] z-10 pointer-events-none">
            <span className="block text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2">
              CEILING LIGHTING
            </span>
            <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-tight mb-3">
              Andre Black Cone Pendant Light
            </h3>
            <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
              Whether you want to brighten up a dim hallway or add a statement piece to the dining room.
            </p>
          </div>

          <div className="absolute right-0 bottom-0 w-[100%] h-[100%] overflow-hidden rounded-tl-[24px]">
            <img 
              src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_collection_03.jpg?v=1777043012&width=1200" 
              alt="Pendant Light"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="absolute left-0 bottom-0 bg-white pt-4 pr-4 rounded-tr-[24px] z-10">
            <button className="flex items-center gap-2 px-6 py-3.5 bg-[#FFAE34] text-white font-medium text-[13px] rounded-full transition-colors duration-300 hover:bg-black shadow-sm group/btn">
              <span>Shop now</span>
              <ArrowRight size={14} strokeWidth={2.5} className="transform transition-transform group-hover/btn:translate-x-0.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
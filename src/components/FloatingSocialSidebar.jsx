import React from 'react';

export default function FloatingSocialSidebar() {
  return (
    <div className="fixed left-0 top-[28%] z-50 flex flex-col items-center bg-white rounded-r-[24px] py-8 px-4 border border-l-0 border-gray-200/80 shadow-[6px_0_20px_rgba(0,0,0,0.06)] w-[56px]">
      <div className="text-[12px] font-bold tracking-widest text-black uppercase [writing-mode:vertical-lr] rotate-180 mb-8 flex items-center gap-1.5 select-none whitespace-nowrap">
        Get 20% Off <span className="text-gray-400 font-medium">OFFER</span>
      </div>
    
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#FFAE34] rounded-r-sm" />
      <div className="flex flex-col space-y-5 text-gray-400 items-center justify-center w-full">
        <a href="#" className="hover:text-[#FFAE34] transition-colors duration-200 transform hover:scale-110">
         
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href="#" className="hover:text-[#FFAE34] transition-colors duration-200 transform hover:scale-110">
        
          <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
        <a href="#" className="hover:text-[#FFAE34] transition-colors duration-200 transform hover:scale-110">
         
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a href="#" className="hover:text-[#FFAE34] transition-colors duration-200 transform hover:scale-110">
          
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M2.5 12a9 9 0 019-9h1a9 9 0 019 9v0a9 9 0 01-9 9h-1a9 9 0 01-9-9z" />
            <path fill="currentColor" d="M10 9l5 3-5 3V9z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
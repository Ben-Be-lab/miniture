import React from 'react';

export default function ExclusiveBrandsSection() {
  const brands = [
    { id: 1, name: "PRADA", style: "font-serif tracking-[0.2em] font-bold text-[32px]" },
    { id: 2, name: "BURBERRY", style: "font-sans tracking-[0.15em] font-bold text-[30px]" },
    { id: 3, name: "ALEXANDER McQUEEN", style: "font-serif tracking-[0.1em] font-normal text-[15px] leading-tight max-w-[120px] text-center" },
    { id: 4, name: "BALMAIN\nPARIS", style: "font-sans tracking-[0.25em] font-bold text-[25px] whitespace-pre-line text-center leading-normal" },
    { id: 5, name: "HERMÈS\nPARIS", style: "font-serif tracking-[0.20em] font-bold text-[30px] whitespace-pre-line text-center leading-tight" }
  ];

  return (
    <section className="w-full px-4 md:px-10 py-16 bg-white select-none">
      <div className="w-full  mx-auto">
        <div className="w-full text-center mb-14">
          <h2 className="text-[24px] md:text-[28px] font-bold text-black tracking-tight">
            Explore our Exclusive Brands
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-between justify-space-between px-50 pointer-events-none ">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="flex items-center justify-center min-w-[140px] text-black/80 "
            >
              
              <span className={`${brand.style}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
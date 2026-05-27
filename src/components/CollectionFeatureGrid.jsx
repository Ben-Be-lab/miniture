import React from 'react';
import { MoveRight } from 'lucide-react';

export default function CollectionFeatureGrid() {
  const features = [
    {
      id: 1,
      title: "Accent Chair by Jake Arnold",
      desc: "Escape into the cushioned contours of our Muirfeld accent chair.",
      link: "/collections/jake-arnold",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p01_1.jpg?v=1737441014&width=1200", 
      bgColor: "bg-[#F7EFE6]", // Warm Cream
      btnBg: "bg-[#A3744F]"     // Brown Button
    },
    {
      id: 2,
      title: "Ana Navy Dining Chair",
      desc: "Ana's cutaway curves and generously cushioned seat gives you room to relax.",
      link: "/collections/dining-chairs",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p03-1.jpg?v=1737440951&width=1200", 
      bgColor: "bg-[#F1F1F1]", // Light Neutral Grey
      btnBg: "bg-[#1A1A1A]"     // Off-Black Button
    },
    {
      id: 3,
      title: "Canyon Queen Arched Canopy",
      desc: "Escape into the cushioned contours of our Muirfeld accent chair.",
      link: "/collections/canopy-beds",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p04-1_599dc327-8401-4bde-b822-2e5031856395.jpg?v=1737440982&width=1200", 
      bgColor: "bg-[#E5ECEC]", // Soft Sage/Teal
      btnBg: "bg-[#3D4E51]"     // Slate/Deep Teal Button
    },
    {
      id: 4,
      title: "Tate Stone Grey Wood",
      desc: "Our popular Tate collection brings its cool, 1960s vibe into the office",
      link: "/collections/office-furniture",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p02-1_b27d7de3-3919-4d8b-aa2b-977cda478672.jpg?v=1737440973&width=1200", 
      bgColor: "bg-[#EFECE4]", // Stone Khaki
      btnBg: "bg-[#5E5749]"     // Olive Wood Button
    }
  ];

  return (
    <section className="w-full px-4 md:px-10 py-12 bg-white select-none">
      {/* Outer wrapper maintaining global layout constraints */}
      <div className="w-full  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {features.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`group relative w-full h-[480px] ${item.bgColor} rounded-[24px] overflow-hidden flex flex-col p-8 justify-between transition-all duration-300 hover:shadow-md`}
          >
            {/* Top Text Content Area */}
            <div className="flex flex-col z-10 max-w-[90%]">
              <h3 className="text-[20px] font-bold text-black leading-snug tracking-tight mb-2.5">
                {item.title}
              </h3>
              <p className="text-[13px] text-gray-500 font-normal leading-relaxed line-clamp-3">
                {item.desc}
              </p>
            </div>

            {/* Bottom Graphic Display Area */}
            <div className="absolute inset-x-0 bottom-0 w-full flex items-end justify-center px-4 pb-4 overflow-hidden pointer-events-none">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-[85%] h-full object-contain object-bottom transform transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
              />
            </div>

            {/* Inverted Corner Cutout Shop Now Button */}
            <div className={`absolute right-0 bottom-0 ${item.bgColor} pt-4 pl-4 rounded-tl-[24px] z-20`}>
              {/* Outer clipping mask block trick */}
              <div className="absolute right-0 bottom-0 bg-white pt-4 pl-4 rounded-tl-[24px] z-10" />
              
              {/* Actual Button Layout */}
              <div className={`relative flex items-center gap-2 px-5 py-2.5 ${item.btnBg} group-hover:bg-black text-white text-[13px] font-medium rounded-full transition-colors duration-300 z-20`}>
                Shop now <MoveRight size={14} />
              </div>
            </div>

          </a>
        ))}

      </div>
    </section>
  );
}
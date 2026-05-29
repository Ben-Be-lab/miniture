import React from 'react';
import { Star } from 'lucide-react';

export default function NewArrivalsSection() {
  const products = [
    {
      id: 1,
      name: "Ana Grey Dining Chair",
      price: "$299.99",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p03-1.jpg?v=1737440951&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p03-2.jpg?v=1737440951&width=800",
      rating: "5.0",
      badge: null
    },
    {
      id: 2,
      name: "Natural Wood Dining Chair",
      price: "$299.99",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p01-1.jpg?v=1737440963&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p01_2.jpg?v=1737440963&width=1200",
      rating: null,
      badge: null
    },
    {
      id: 3,
      name: "Paolo Black Wood Dining Chair",
      price: "$139.99",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p02-1_b27d7de3-3919-4d8b-aa2b-977cda478672.jpg?v=1737440973&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p02-2_5d7c1dae-fa5f-4b0e-b629-c1fb34d30584.jpg?v=1737440974&width=1200",
      rating: "5.0",
      badge: null
    },
    {
      id: 4,
      name: "Curved Back Dining Chair",
      price: "$129.99",
      originalPrice: "$159.99",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p04-1_599dc327-8401-4bde-b822-2e5031856395.jpg?v=1737440982&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p04-2_dd905c99-d4e4-4197-abe1-515140a326ed.jpg?v=1737440982&width=1200",
      rating: null,
      badge: "Save 19%"
    }
  ];

  return (
    <section className="w-full  bg-white select-none">
      <div className="w-full  mx-auto">

        <div className="w-full text-center mb-8">
          <h2 className="text-[24px] md:text-[28px] font-bold text-black tracking-tight">
            New Arrivals
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col cursor-pointer">
              <div className="relative w-full aspect-square rounded-[24px] overflow-hidden mb-3 shadow-sm border border-gray-100">
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                />
                <img
                  src={product.hoverImgUrl}
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
                />
                {product.rating && (
                  <div className="absolute top-4 left-4 z-10 bg-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-gray-100">
                    <Star size={11} className="fill-[#FFAE34] text-[#FFAE34]" />
                    <span className="text-[11px] font-bold text-gray-800">{product.rating}</span>
                  </div>
                )}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-[#E24C4C] px-3 py-1 rounded-full shadow-sm">
                    <span className="text-[10px] font-bold text-white tracking-wide uppercase">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col px-1">
                <h3 className="text-[14px] font-semibold text-gray-800 group-hover:text-black transition-colors line-clamp-1 mb-1">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className={`text-[14px] font-bold ${product.originalPrice ? 'text-[#E24C4C]' : 'text-black'}`}>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[12px] text-gray-400 font-normal line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
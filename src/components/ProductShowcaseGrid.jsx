import React from 'react';
import { Star, Search, Maximize2, ShoppingBag } from 'lucide-react';

export default function ProductShowcaseGrid() {
  // Your exact product data array with live image URLs and routing paths
  const products = [
    // ROW 1: Chairs & Sofas
    {
      id: 1,
      name: "Ana Grey Dining Chair",
      price: "$299.99",
      link: "/products/ana-grey-dining-chair",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p03-1.jpg?v=1737440951&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p03-2.jpg?v=1737440951&width=800",
      rating: "5.0",
      badge: null
    },
    {
      id: 2,
      name: "Natural Wood Dining Chair",
      price: "$299.99",
      link: "/products/natural-wood-dining-chair",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p01-1.jpg?v=1737440963&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p01_2.jpg?v=1737440963&width=1200",
      rating: null,
      badge: null
    },
    {
      id: 3,
      name: "Paolo Black Wood Dining Chair",
      price: "$139.99",
      link: "/products/paolo-black-wood-dining-chair",
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
      link: "/products/curved-back-dining-chair",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p04-1_599dc327-8401-4bde-b822-2e5031856395.jpg?v=1737440982&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p04-2_dd905c99-d4e4-4197-abe1-515140a326ed.jpg?v=1737440982&width=1200",
      rating: null,
      badge: "Save 19%"
    },
    // ROW 2: Kids Furniture & Lounges
    {
      id: 5,
      name: "Dot Kids Light Brown Play Stool",
      price: "$149.99",
      link: "/products/dot-kids-play-stool",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m6_p06_1_889dabc0-91e5-4486-abb9-08ab322598fe.jpg?v=1737441178&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m6_p06_2_8e4125e8-dcad-4e09-ba5a-1ba37d69e749.jpg?v=1737441178&width=1200",
      rating: null,
      badge: null
    },
    {
      id: 6,
      name: "Ever Slipcovered Striped Nursery",
      price: "$299.99",
      link: "/products/ever-slipcovered-nursery",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m6_p03_1_1bd99648-3d60-44b9-b1d2-7d0b1455ca77.jpg?v=1737441123&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p01-1_e6fc8610-5a98-4e44-a320-46a1a97b31db.jpg?v=1737441145&width=1200",
      rating: null,
      badge: null
    },
    {
      id: 7,
      name: "Fawn Animal Kids Play Chair",
      price: "$299.99",
      link: "/products/fawn-animal-kids-chair",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m6_p05_1_35e32fe1-0235-417e-a84a-2bd0d1d9f403.jpg?v=1737441145&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/p01-1_e6fc8610-5a98-4e44-a320-46a1a97b31db.jpg?v=1737441145&width=1200",
      rating: null,
      badge: null
    },
    {
      id: 8,
      name: "Gather Sofa",
      price: "$139.99",
      originalPrice: "$339.99",
      link: "/products/gather-sofa",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p02_1_2f9eec6a-c238-4b68-95bc-a85ec311090f.jpg?v=1737441025&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p02_2_3ae159a9-8383-4f61-a64e-0f59d832d754.jpg?v=1737441025&width=1200",
      rating: null,
      badge: "Save 59%"
    }
  ];

  return (
    <section className="w-full px-4 md:px-10 py-10 bg-white select-none">
      {/* Container max-width locks alignment with the rest of your page */}
      <div className="w-full  mx-auto">
        
        {/* Section Heading Title */}
        <div className="w-full text-center mb-10">
          <h2 className="text-[24px] md:text-[28px] font-bold text-black tracking-tight">
            Our Products
          </h2>
        </div>

        {/* 4-Column Balanced Grid Frame */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            /* Wrapped entire card component in an active clickable link block */
            <a 
              key={product.id} 
              href={product.link}
              className="group flex flex-col w-full no-underline"
            >
              
              {/* Product Card Container Frame */}
              <div className="relative w-full aspect-square bg-[#F5F5F7] rounded-[24px] overflow-hidden mb-4 shadow-xs">
                
                {/* Image 1: Default View (Using object-cover to display the original environment) */}
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                />

                {/* Image 2: Alternate View (Fades in seamlessly on card hover) */}
                <img
                  src={product.hoverImgUrl}
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
                />

                {/* Rating Badge Overlay */}
                {product.rating && (
                  <div className="absolute top-4 left-4 z-10 bg-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs border border-gray-100">
                    <Star size={11} className="fill-[#FFAE34] text-[#FFAE34]" />
                    <span className="text-[11px] font-bold text-gray-800">{product.rating}</span>
                  </div>
                )}

                {/* Promotional Red Discount Tag Overlay */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-[#E24C4C] px-3 py-1 rounded-full shadow-xs">
                    <span className="text-[10px] font-bold text-white tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* ========================================== */}
                {/* INTERACTIVE HOVER OVERLAY TOOLBARS         */}
                {/* ========================================== */}
                
                {/* Right Actions Bar: Fades and slides left on hover */}
                <div className="absolute right-4 top-1/4 flex flex-col gap-2 opacity-0 translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 z-20">
                  <button 
                    onClick={(e) => { e.preventDefault(); }} // Prevents page transition when clicking utility buttons
                    className="p-2.5 bg-white hover:bg-black text-gray-700 hover:text-white rounded-full shadow-sm transition-colors duration-200"
                  >
                    <Search size={16} />
                  </button>
                  <button 
                    onClick={(e) => { e.preventDefault(); }}
                    className="p-2.5 bg-white hover:bg-black text-gray-700 hover:text-white rounded-full shadow-sm transition-colors duration-200"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>

                {/* Bottom Right Shopping Bag Quick-Add Button */}
                <div className="absolute right-4 bottom-4 opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-20">
                  <button 
                    onClick={(e) => { e.preventDefault(); }}
                    className="p-3 bg-white hover:bg-black text-black hover:text-white rounded-full shadow-md transition-all duration-200 transform hover:scale-110"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>

              </div>

              {/* Text Description Footer Block */}
              <div className="flex flex-col px-1">
                <h3 className="text-[14px] font-medium text-gray-800 group-hover:text-black transition-colors line-clamp-1 mb-1.5">
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

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
import React from 'react';

export default function RecommendationsGrid() {
  const recommendedProducts = [
    {
      id: 1,
      name: "Dot Kids Light Brown Play Stool",
      price: "$149.99",
      link: "/products/dot-kids-play-stool",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m6_p06_1_889dabc0-91e5-4486-abb9-08ab322598fe.jpg?v=1737441178&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/k04-2.jpg?v=1737441035&width=1200"
    },
    {
      id: 2,
      name: "Fawn Animal Kids Play Chair",
      price: "$299.99",
      link: "/products/fawn-animal-kids-chair",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m6_p05_1_35e32fe1-0235-417e-a84a-2bd0d1d9f403.jpg?v=1737441145&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/k02-2.jpg?v=1737441024&width=1200"
    },
    {
      id: 3,
      name: "Ever Slipcovered Striped Nursery",
      price: "$299.99",
      link: "/products/ever-slipcovered-nursery",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m6_p03_1_1bd99648-3d60-44b9-b1d2-7d0b1455ca77.jpg?v=1737441123&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/k01-2.jpg?v=1737441014&width=1200"
    },
    {
      id: 4,
      name: "Lounge Deep Chaise Lounge",
      price: "$299.99",
      link: "/products/lounge-deep-chaise-lounge",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p07_1_e166b033-801f-4b45-a754-54662cc1ba72.jpg?v=1737441100&width=1200",
      hoverImgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p01_2.jpg?v=1737440963&width=1200"
    }
  ];

  return (
    <section className="w-full px-4 md:px-10 py-12 bg-white select-none">
      {/* Outer block preserving global padding standard */}
      <div className="w-full  mx-auto">
        
        {/* Centered Section Title Header */}
        <div className="w-full text-center mb-10">
          <h2 className="text-[24px] md:text-[28px] font-bold text-black tracking-tight">
            We Think You'll Love
          </h2>
        </div>

        {/* 4-Column Balanced Grid Frame */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {recommendedProducts.map((product) => (
            /* Wrapped entire product card inside a functional anchor link */
            <a 
              key={product.id} 
              href={product.link}
              className="group flex flex-col w-full no-underline"
            >
              
              {/* Product Card Container Viewport */}
              <div className="relative w-full aspect-square bg-[#F5F5F7] rounded-[24px] overflow-hidden mb-4">
                
                {/* Image Variant 1: Default State View */}
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
                />

                {/* Image Variant 2: Alternates smoothly on card hover */}
                <img
                  src={product.hoverImgUrl}
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
                />

              </div>

              {/* Minimal Text Details Area */}
              <div className="flex flex-col px-1">
                <h3 className="text-[14px] font-medium text-gray-800 group-hover:text-black transition-colors line-clamp-1 mb-1">
                  {product.name}
                </h3>
                <span className="text-[14px] font-bold text-black">
                  {product.price}
                </span>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
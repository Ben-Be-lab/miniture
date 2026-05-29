import React from 'react';

export default function ShopByCategoriesSection() {
  const categories = [
    {
      id: 1,
      name: "Accent Chairs",
      count: "8 items",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m3_cat_01.jpg?v=1777107953&width=540"
    },
    {
      id: 2,
      name: "Dining Chair",
      count: "14 items",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m3_cat_02.jpg?v=1777107953&width=540"
    },
    {
      id: 3,
      name: "Dining Room",
      count: "14 items",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m3_cat_03.jpg?v=1777107954&width=540"
    },
    {
      id: 4,
      name: "Kid's Furniture",
      count: "8 items",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m3_cat_04.jpg?v=1777107953&width=540"
    },
    {
      id: 5,
      name: "Kid's Toys",
      count: "4 items",
      imgUrl: "https://miniture-demo.myshopify.com/cdn/shop/files/m3_cat_05.jpg?v=1777107954&width=540"
    }
  ];

  return (
    
    <section className="w-full px-4 md:px-10 py-12 bg-white select-none">
      <div className="w-full  mx-auto">
        <div className="w-full text-center mb-10">
          <h2 className="text-[24px] md:text-[28px] font-bold text-black tracking-tight">
            Shop by Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
          {categories.map((cat) => (
            <div key={cat.id} className="group flex flex-col items-center text-center cursor-pointer">
              
              
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 bg-[#F5F5F7] shadow-sm border border-gray-100">
                <img
                  src={cat.imgUrl}
                  alt={cat.name}
                  
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-[15px] font-bold text-black group-hover:text-[#FFAE34] transition-colors duration-200 mb-0.5">
                  {cat.name}
                </h3>
                <span className="text-[12px] font-normal text-gray-400">
                  {cat.count}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
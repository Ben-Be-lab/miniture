import React, { useState } from 'react';
import { ChevronUp, Star } from 'lucide-react';

export default function CatalogContent() {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceMax, setPriceMax] = useState(440);
  const [selectedColor, setSelectedColor] = useState(null);
  const [priceOpen, setPriceOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(true);
  const [cornerOpen, setCornerOpen] = useState(true);
  const [materialOpen, setMaterialOpen] = useState(true);
  const products = [
    {
      id: 1,
      name: "Ana Grey Dining Chair",
      price: 299.99,
      rating: "5.0",
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p03-1.jpg?v=1737440951&width=600",
      sale: false
    },
    {
      id: 2,
      name: "Axis 2-Piece Sectional Sofa",
      price: 339.99,
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p04_1_30af4d22-e499-4eb3-ac70-2dfade938835.jpg?v=1737441047&width=600",
      sale: false
    },
    {
      id: 3,
      name: "Axis 2-Seat Sofa",
      price: 239.99,
      rating: "5.0",
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p06_1_1668e554-53e3-49b9-bdd9-2c9ab1191165.jpg?v=1737441069&width=600",
      sale: false
    },
    {
      id: 4,
      name: "Curved Back Dining Chair",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p04-1_599dc327-8401-4bde-b822-2e5031856395.jpg?v=1737440982&width=600",
      sale: true,
      discount: "Save 19%"
    },
    {
      id: 5,
      name: "Dot Kids Light Brown Play Stool",
      price: 149.00,
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p11-1.jpg?v=1737441005&width=600",
      sale: false
    },
    {
      id: 6,
      name: "Ever Slipcovered Striped Nursery",
      price: 299.00,
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/m2_p05_1.jpg?v=1737441058&width=600",
      sale: false
    },
    {
      id: 7,
      name: "Gwyneth Boucle Accent Chair",
      price: 389.00,
      rating: "4.9",
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p07-1.jpg?v=1737440964&width=600",
      sale: false
    },
    {
      id: 8,
      name: "Pacific Velvet Lounge Settee",
      price: 420.00,
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p12-1.jpg?v=1737441026&width=600",
      sale: false
    },
    {
      id: 9,
      name: "Wells Leather Tufted Ottoman",
      price: 189.99,
      originalPrice: 219.99,
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p09-1.jpg?v=1737440994&width=600",
      sale: true,
      discount: "Save 14%"
    },
    {
      id: 10,
      name: "Lark Minimalist Wooden Desk",
      price: 310.00,
      rating: "5.0",
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p10-1.jpg?v=1737441015&width=600",
      sale: false
    },
    {
      id: 11,
      name: "Camden Modern Linen Loveseat",
      price: 279.00,
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p02-1.jpg?v=1737440940&width=600",
      sale: false
    },
    {
      id: 12,
      name: "Neva Oatmeal Armchair & Ottoman",
      price: 349.00,
      rating: "4.8",
      image: "https://miniture-demo.myshopify.com/cdn/shop/files/p06-1.jpg?v=1737440974&width=600",
      sale: false
    }
  ];

  const colors = [
    { id: 'blue', hex: 'bg-blue-600' },
    { id: 'brown', hex: 'bg-amber-800' },
    { id: 'orange', hex: 'bg-amber-500' },
    { id: 'red', hex: 'bg-red-600' },
    { id: 'yellow', hex: 'bg-yellow-400' }
  ];

  return (
    <div className="w-full bg-white pt-[40px] px-9 pb-[100px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 items-start relative px-9">
        <aside className="w-full lg:w-[280px] flex flex-col bg-white lg:sticky lg:top-[120px] max-h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-none text-left z-20">
          
          
          <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
            <span className="text-[15px] font-bold text-black">In stock only</span>
            <button 
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer outline-none ${inStockOnly ? 'bg-[#FFAE34]' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-xs transition-transform ${inStockOnly ? 'translate-x-5' : ''}`} />
            </button>
          </div>

          <div className="flex flex-col border-b border-gray-100 pb-6 mb-6">
            <button onClick={() => setPriceOpen(!priceOpen)} className="flex items-center justify-between text-[15px] font-bold text-black cursor-pointer select-none">
              <span>Price</span>
              <ChevronUp size={16} className={`transition-transform duration-200 ${priceOpen ? '' : 'rotate-180'}`} />
            </button>
            {priceOpen && (
              <div className="mt-4 flex flex-col gap-4 animate-fadeIn">
                <input 
                  type="range" 
                  min="0" 
                  max="440" 
                  value={priceMax} 
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-black bg-gray-100 h-1 rounded-lg cursor-pointer"
                />
                <div className="flex items-center justify-between text-[14px] text-gray-500 font-medium">
                  <div className="bg-gray-50/80 border border-gray-100 rounded-xl px-4 py-2.5 flex items-center w-[45%]">
                    <span className="text-gray-400 mr-2">$</span>
                    <input type="text" value="0" readOnly className="w-full bg-transparent border-none outline-none text-black" />
                  </div>
                  <span className="text-gray-400">to</span>
                  <div className="bg-gray-50/80 border border-gray-100 rounded-xl px-4 py-2.5 flex items-center w-[45%]">
                    <span className="text-gray-400 mr-2">$</span>
                    <input type="text" value={priceMax} readOnly className="w-full bg-transparent border-none outline-none text-black font-semibold" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col border-b border-gray-100 pb-6 mb-6">
            <button onClick={() => setColorOpen(!colorOpen)} className="flex items-center justify-between text-[15px] font-bold text-black cursor-pointer select-none">
              <span>Color</span>
              <ChevronUp size={16} className={`transition-transform duration-200 ${colorOpen ? '' : 'rotate-180'}`} />
            </button>
            {colorOpen && (
              <div className="mt-4 flex items-center gap-3 animate-fadeIn">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id === selectedColor ? null : color.id)}
                    className={`w-[26px] h-[26px] rounded-full ${color.hex} cursor-pointer transition-transform hover:scale-110 relative`}
                  >
                    {selectedColor === color.id && (
                      <span className="absolute inset-0 border-2 border-white rounded-full transform scale-75" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col border-b border-gray-100 pb-6 mb-6">
            <button onClick={() => setCornerOpen(!cornerOpen)} className="flex items-center justify-between text-[15px] font-bold text-black cursor-pointer select-none">
              <span>Corner</span>
              <ChevronUp size={16} className={`transition-transform duration-200 ${cornerOpen ? '' : 'rotate-180'}`} />
            </button>
            {cornerOpen && (
              <div className="mt-4 flex flex-col space-y-3 animate-fadeIn">
                <label className="flex items-center gap-3 text-[14px] font-medium text-gray-700 cursor-pointer select-none">
                  <input type="checkbox" className="w-4 h-4 rounded accent-[#FFAE34] border-gray-300" />
                  <span>Left corner <span className="text-gray-400 font-normal">(13)</span></span>
                </label>
                <label className="flex items-center gap-3 text-[14px] font-medium text-gray-700 cursor-pointer select-none">
                  <input type="checkbox" className="w-4 h-4 rounded accent-[#FFAE34] border-gray-300" />
                  <span>Right corner <span className="text-gray-400 font-normal">(13)</span></span>
                </label>
              </div>
            )}
          </div>
          <div className="flex flex-col pb-4">
            <button onClick={() => setMaterialOpen(!materialOpen)} className="flex items-center justify-between text-[15px] font-bold text-black cursor-pointer select-none">
              <span>Material</span>
              <ChevronUp size={16} className={`transition-transform duration-200 ${materialOpen ? '' : 'rotate-180'}`} />
            </button>
            {materialOpen && (
              <div className="mt-4 flex flex-col space-y-3 animate-fadeIn">
                {['Range 1', 'Range 2', 'Range 3'].map((range) => (
                  <label key={range} className="flex items-center gap-3 text-[14px] font-medium text-gray-700 cursor-pointer select-none">
                    <input type="checkbox" className="w-4 h-4 rounded accent-[#FFAE34] border-gray-300" />
                    <span>{range} <span className="text-gray-400 font-normal">(13)</span></span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>
        <main className="flex-1 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col group cursor-pointer relative">
                <div className="relative aspect-square bg-[#F7F7F7] rounded-[20px] flex items-center justify-center p-6 overflow-hidden mb-4">
                  {product.rating && (
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-bold text-black flex items-center gap-1 shadow-xs z-10 select-none">
                      <Star size={10} className="fill-[#FFAE34] text-[#FFAE34]" /> {product.rating}
                    </span>
                  )}
                  {product.sale && (
                    <span className="absolute top-4 left-4 bg-[#EF4444] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs z-10 select-none">
                      {product.discount}
                    </span>
                  )}

                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105 w-full" 
                  />
                </div>
                <h4 className="text-[15px] font-medium text-black mb-1 leading-snug tracking-tight group-hover:text-[#FFAE34] transition-colors duration-200">
                  {product.name}
                </h4>
                
                <div className="flex items-center gap-2">
                  <span className={`text-[15px] font-bold ${product.sale ? 'text-[#EF4444]' : 'text-black'}`}>
                    ${product.price.toFixed(2)}
                  </span>
                  {product.sale && (
                    <span className="text-[13px] font-normal text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
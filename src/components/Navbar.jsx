import React, { useState } from 'react';
import { ChevronDown, Search, User, ShoppingBag, X, Star, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white px-9 py-8 z-40">
        <div className="w-full grid grid-cols-3 items-center mx-auto relative">
          <div className="flex justify-start">
            <a href="/Home" className="text-[31px] font-bold tracking-[-0.05em] text-black leading-none select-none no-underline">
              miniture
            </a>
          </div>
          <nav className="hidden md:flex items-center justify-center space-x-[29px]">
            <div className="group relative py-2">
              <a href="/" className="flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
                <span>Home</span>
                <ChevronDown size={14} className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" strokeWidth={2.5} />
              </a>
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white min-w-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-b-[24px] overflow-hidden pt-4 pb-6 px-6 z-50 border-t border-gray-50">
                <div className="flex flex-col space-y-4">
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v1 — Modern Elegance</span>
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v2 — Rustic Comfort</span>
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v3 — Minimalist Chic</span>
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v4 — Industrial Vibes</span>
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v5 — Vintage Revival</span>
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v6 — Kid’s Playland</span>
                </div>
              </div>
            </div>
            <div className="group py-2">
              <a href="/catalog" className="flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
                <span>Catalog</span>
                <ChevronDown size={14} className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" strokeWidth={2.5} />
              </a>
              <div className="absolute left-0 right-0 top-full hidden group-hover:grid grid-cols-[220px_1fr] bg-white w-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-[24px] p-8 mt-1 gap-8 z-50 border border-gray-100">
   
                <div className="flex flex-col justify-between border-r border-gray-100 pr-6 text-left">
                  <div className="flex flex-col space-y-4">
                    <a href="#" className="text-[16px] font-bold text-black no-underline">Accent Chairs</a>
                    <a href="#" className="text-[16px] font-medium text-gray-400 hover:text-black transition-colors no-underline">Dining Chair</a>
                    <a href="#" className="text-[16px] font-medium text-gray-400 hover:text-black transition-colors no-underline">Dining Room</a>
                    <a href="#" className="text-[16px] font-medium text-gray-400 hover:text-black transition-colors no-underline">Kid's Furniture</a>
                  </div>
                  <a href="#" className="flex items-center justify-between text-[14px] font-bold text-black border-t border-black pt-4 no-underline hover:text-[#FFAE34] group/btn transition-colors">
                    <span>View All Products</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
                <div className="grid grid-cols-4 gap-5 text-left">
  
                  <div className="flex flex-col">
                    <div className="relative aspect-square bg-[#F5F5F5] rounded-[16px] flex items-center justify-center overflow-hidden mb-3 p-4">
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[11px] font-bold text-black flex items-center gap-1 shadow-xs">
                        <Star size={10} className="fill-[#FFAE34] text-[#FFAE34]" /> 5.0
                      </span>
                      <img src="https://miniture-demo.myshopify.com/cdn/shop/files/p03-1.jpg?v=1737440951&width=600" alt="Ana Grey Dining Chair" className="max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <h4 className="text-[14px] font-medium text-black mb-1 leading-tight">Ana Grey Dining Chair</h4>
                    <span className="text-[14px] font-bold text-black">$299.99</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative aspect-square bg-[#F5F5F5] rounded-[16px] flex items-center justify-center overflow-hidden mb-3 p-4">
                      <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_p04_1_30af4d22-e499-4eb3-ac70-2dfade938835.jpg?v=1737441047&width=600" alt="Axis 2-Piece Sectional" className="max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <h4 className="text-[14px] font-medium text-black mb-1 leading-tight">Axis 2-Piece Sectional Sofa</h4>
                    <span className="text-[14px] font-bold text-black">$333.99</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative aspect-square bg-[#F5F5F5] rounded-[16px] flex items-center justify-center overflow-hidden mb-3 p-4">
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[11px] font-bold text-black flex items-center gap-1 shadow-xs">
                        <Star size={10} className="fill-[#FFAE34] text-[#FFAE34]" /> 5.0
                      </span>
                      <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_p06_1_1668e554-53e3-49b9-bdd9-2c9ab1191165.jpg?v=1737441069&width=600" alt="Axis 2-Seat Sofa" className="max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <h4 className="text-[14px] font-medium text-black mb-1 leading-tight">Axis 2-Seat Sofa</h4>
                    <span className="text-[14px] font-bold text-black">$239.99</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative aspect-square bg-[#F5F5F5] rounded-[16px] flex items-center justify-center overflow-hidden mb-3 p-4">
                      <span className="absolute top-3 left-3 bg-[#EF4444] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        Save 19%
                      </span>
                      <img src="https://miniture-demo.myshopify.com/cdn/shop/files/p04-1_599dc327-8401-4bde-b822-2e5031856395.jpg?v=1737440982&width=600" alt="Curved Back Dining Chair" className="max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <h4 className="text-[14px] font-medium text-black mb-1 leading-tight">Curved Back Dining Chair</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-bold text-[#EF4444]">$129.99</span>
                      <span className="text-[13px] font-normal text-gray-400 line-through">$159.99</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="group relative py-2">
              <a href="/" className="flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
                <span>Pages</span>
                <ChevronDown size={14} className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" strokeWidth={2.5} />
              </a>
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white min-w-[180px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-b-[20px] pt-4 pb-6 px-6 z-50 border-t border-gray-50">
                <div className="flex flex-col space-y-4 text-left">
                  <a href="#" className="text-[16px] text-black font-bold hover:text-[#FFAE34] transition-colors no-underline">About Us</a>
                  <a href="#" className="text-[16px] text-black font-bold hover:text-[#FFAE34] transition-colors no-underline">FAQs</a>
                  <a href="#" className="text-[16px] text-black font-bold hover:text-[#FFAE34] transition-colors no-underline">Contact Us</a>
                </div>
              </div>
            </div>
            <a href="/Blog" className="text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
              Blog
            </a>
            <a href="/Contact" className="text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
              Contact
            </a>
          </nav>
          <div className="flex items-center justify-end space-x-[22px] text-black">
            <button onClick={() => setActiveModal('search')} className="transition-colors hover:text-[#FFAE34] p-1 cursor-pointer" aria-label="Search">
              <Search size={21} strokeWidth={1.5} />
            </button>
            <button onClick={() => setActiveModal('account')} className="transition-colors hover:text-[#FFAE34] p-1 cursor-pointer" aria-label="Account">
              <User size={21} strokeWidth={1.5} />
            </button>
            <button onClick={() => setActiveModal('cart')} className="transition-colors hover:text-[#FFAE34] p-1 cursor-pointer" aria-label="Cart">
              <ShoppingBag size={21} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center transition-opacity duration-200"
          onClick={closeModal}
        >
          {activeModal === 'search' && (
            <div 
              className="relative bg-white w-full max-w-[680px] rounded-[24px] p-8 mx-4 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} className="absolute -top-4 -right-4 w-11 h-11 bg-white text-black border border-gray-100 shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer z-10">
                <X size={18} />
              </button>

              <input 
                type="text" 
                placeholder="Search for ..." 
                className="w-full bg-gray-50 text-black placeholder-gray-400 border-none outline-none rounded-[14px] px-6 py-4 text-[15px] mb-6 font-normal"
                autoFocus
              />
              
              <span className="block text-[11px] uppercase tracking-[0.15em] font-bold text-gray-400 mb-4 text-left">
                Popular Categories
              </span>
              <div className="flex flex-col space-y-3.5 text-left">
                <a href="#" className="text-[16px] font-bold text-black no-underline hover:text-[#FFAE34]">Accent Chairs</a>
                <a href="#" className="text-[16px] font-bold text-black no-underline hover:text-[#FFAE34]">Dining Chair</a>
                <a href="#" className="text-[16px] font-bold text-black no-underline hover:text-[#FFAE34]">Dining Room</a>
                <a href="#" className="text-[16px] font-bold text-black no-underline hover:text-[#FFAE34]">Baby Store</a>
                <a href="#" className="text-[16px] font-bold text-black no-underline hover:text-[#FFAE34]">Nursery Furniture</a>
              </div>
            </div>
          )}
          {activeModal === 'account' && (
            <div 
              className="relative bg-white w-full max-w-[420px] rounded-[32px] p-8 mx-4 shadow-2xl flex flex-col text-center"
              onClick={(e) => e.stopPropagation()}
            >

              <button 
                onClick={closeModal} 
                className="absolute -top-4 -right-4 w-11 h-11 bg-white text-black border border-gray-100 shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <h3 className="text-[20px] font-bold text-black text-left mb-6">Sign in or create account</h3>
              <button className="w-full bg-[#5A31F4] text-white font-bold py-4 px-6 rounded-full text-[16px] flex items-center justify-center gap-1 transition-opacity hover:opacity-90 shadow-sm mb-4 cursor-pointer">
                Sign in with <span className="italic font-extrabold tracking-tight">shop</span>
              </button>
              
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-100"></div>
                <span className="px-4 text-[12px] font-bold text-gray-400">OR</span>
                <div className="flex-1 border-t border-gray-100"></div>
              </div>
              <div className="relative w-full border border-gray-200 rounded-[14px] p-4 flex items-center justify-between mb-4 mt-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-black placeholder-gray-400"
                />
                <ArrowRight size={18} className="text-gray-400 cursor-pointer hover:text-black" />
              </div>

              <label className="flex items-center gap-3 text-left cursor-pointer mb-2 select-none">
                <input type="checkbox" className="w-4 h-4 accent-[#FFAE34] rounded border-gray-300" />
                <span className="text-[14px] text-gray-500 font-medium">Email me with news and offers</span>
              </label>
            </div>
          )}
          {activeModal === 'cart' && (
            <div 
              className="absolute right-0 top-0 bottom-0 bg-white w-full max-w-[460px] h-full shadow-2xl flex flex-col p-8 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-50 pb-6 mb-20">
                <h3 className="text-[22px] font-bold text-black">Shopping Cart</h3>
                <button onClick={closeModal} className="w-10 h-10 bg-[#FFAE34] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-[32px] font-bold text-black leading-tight tracking-tight mb-4 max-w-[280px]">
                  Your cart is currently empty.
                </h2>
                <p className="text-[15px] text-gray-500 font-medium leading-relaxed mb-8">
                  Not sure where to start?<br />Try these collections:
                </p>
                
                <button onClick={closeModal} className="bg-gray-50 hover:bg-gray-100 transition-colors px-8 py-4 rounded-full flex items-center gap-3 text-[15px] font-bold text-black shadow-xs group cursor-pointer">
                  <span>Continue shopping</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
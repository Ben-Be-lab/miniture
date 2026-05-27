import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      subheading: "Minimalist Luxe",
      heading: "The Clean Lines Collection",
      description: "Naming a furniture collection can be a creative and important part of branding and marketing.",
      bgImage: "https://miniture-demo.myshopify.com/cdn/shop/files/m4_slide_01.jpg?v=1777183752&width=1800"
    },
    {
      id: 2,
      subheading: "Modern Comfort",
      heading: "The Cozy Nordic Spaces",
      description: "Discover functional Scandinavian layouts tailored for daily comfort and pure geometric elegance.",
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: 3,
      subheading: "Vintage Industrial",
      heading: "The Raw Textures Era",
      description: "A perfect blend of reclaimed rustic oak materials, exposed dark steel frameworks, and bold statements.",
      bgImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80"
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentIdx]);

  const nextSlide = () => {
    if (isAnimating) return;
    setCurrentIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full px-4 md:px-10 pt-[124px] pb-0 bg-white relative">
    
      <div 
        className="relative w-full min-h-[580px] rounded-[24px] overflow-hidden bg-cover bg-center flex items-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${slides[currentIdx].bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:text-[#FFAE34] transition-all duration-200 active:scale-90" 
        >
          <ArrowLeft size={18} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-6 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:text-[#FFAE34] transition-all duration-200 active:scale-90" 
        >
          <ArrowRight size={18} />
        </button>

        {/* Slide Content */}
        <div className="w-full mx-auto px-20 md:px-32 z-10 select-none">
          <div className={`max-w-[500px] transform transition-all duration-500 ease-out ${
            isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
          }`}>
            <span className="block text-[13px] font-semibold tracking-wide text-gray-800 mb-3">
              {slides[currentIdx].subheading}
            </span>
            <h1 className="text-[44px] md:text-[56px] font-bold text-black leading-[1.1] tracking-[-0.02em] mb-5">
              {slides[currentIdx].heading}
            </h1>
            <p className="text-[14px] md:text-[15px] text-gray-600 font-normal leading-relaxed mb-8 max-w-[440px]">
              {slides[currentIdx].description}
            </p>
            <button className="px-9 py-3.5 bg-[#FFAE34] text-white font-medium text-[15px] rounded-full transition-colors duration-300 hover:bg-black shadow-sm active:scale-95">
              Shop now
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 z-20">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => !isAnimating && setCurrentIdx(idx)}
              className={`block cursor-pointer transition-all duration-300 rounded-full ${
                idx === currentIdx ? 'w-2 h-2 bg-black' : 'w-1.5 h-1.5 bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
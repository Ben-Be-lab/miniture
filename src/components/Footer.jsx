import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { LuArrowRight, LuGlobe, LuCoins } from 'react-icons/lu';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white select-none pt-16 pb-8 px-4 md:px-10">
      <div className="w-full  mx-auto">
        
        {/* Main 4-Column Footer Information Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 pb-16 border-b border-white/10">

          {/* Column 1: Our Story & Social Handles */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[18px] font-bold tracking-tight">Our story</h3>
            <p className="text-[14px] text-gray-400 font-normal leading-relaxed max-w-[280px]">
              Miniture is one of the biggest international fashion companies, one of the world's largest distribution groups.
            </p>

            {/* Inline Circular Social Icons Container Row */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                <FaFacebookF size={14} />
              </a>

              {/* Twitter / X */}
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                <FaXTwitter size={14} />
              </a>

              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                <FaInstagram size={15} />
              </a>

              {/* Youtube */}
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links Directory Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold tracking-tight">Quick links</h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><a href="/collections/accent-chairs" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Accent Chairs</a></li>
              <li><a href="/collections/dining-chairs" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Dinning Chair</a></li>
              <li><a href="/collections/dining-room" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Dining Room</a></li>
              <li><a href="/collections/kids-furniture" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Kid's Furniture</a></li>
            </ul>
          </div>

          {/* Column 3: Information Directory Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold tracking-tight">Information</h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><a href="/privacy-policy" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Privacy policy</a></li>
              <li><a href="/refund-policy" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Refund policy</a></li>
              <li><a href="/shipping-returns" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Shipping & Return</a></li>
              <li><a href="/terms-conditions" className="text-[14px] text-gray-400 hover:text-white no-underline transition-colors">Term & conditions</a></li>
            </ul>
          </div>

          {/* Column 4: Secondary Right-Aligned Subscription Box */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold tracking-tight">Let's get in touch</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full h-[52px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-between relative px-2 transition-all focus-within:bg-white/10"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full h-full bg-transparent border-none outline-none text-[14px] text-white placeholder-gray-500 font-normal pl-4 pr-14"
              />
              <button
                type="submit"
                className="absolute right-2 top-1.5 w-8 h-8 bg-[#FFAE34] hover:bg-white hover:text-black text-white rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Subscribe footer input"
              >
                <LuArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Utility Row: Copyright & Location Dropdowns */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[13px] text-gray-500 font-normal">
            © 2026 Miniture. Powered by Shopify
          </span>

          <div className="flex items-center gap-4">
            {/* Language Selection */}
            <div className="relative h-10 px-4 rounded-full border border-white/10 bg-white/5 flex items-center gap-2 text-[13px] font-medium text-gray-300 cursor-pointer hover:bg-white/10 transition-colors">
              <LuGlobe size={14} className="text-gray-400" />
              <span>English</span>
              <span className="text-[10px] text-gray-500 ml-1">▼</span>
            </div>

            {/* Region / Currency Selection */}
            <div className="relative h-10 px-4 rounded-full border border-white/10 bg-white/5 flex items-center gap-2 text-[13px] font-medium text-gray-300 cursor-pointer hover:bg-white/10 transition-colors">
              <LuCoins size={14} className="text-gray-400" />
              <span>Rwanda (USD $)</span>
              <span className="text-[10px] text-gray-500 ml-1">▼</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
import React from 'react';
import { Search, Moon, Bell, ChevronDown, Menu } from 'lucide-react';

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] h-20 flex items-center justify-between px-6 lg:px-10">
      
      {/* 🔍 LEFT SIDE: TOGGLE BUTTON & SEARCH BOX */}
      <div className="flex items-center gap-4 flex-1">
        
        {/* 🌟 DESKTOP & MOBILE TOGGLE ACTION GATE */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="p-2 text-[#64748B] hover:bg-[#F1F5F9] rounded-md transition-colors cursor-pointer"
          aria-label="Toggle Sidebar Navigation"
        >
          <Menu size={22} />
        </button>

        {/* TailAdmin Command Search Box Wrapper */}
        <div className="relative max-w-sm w-full hidden sm:block">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
          <input 
            type="text" 
            placeholder="Search or type command..." 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg pl-11 pr-14 py-2.5 text-sm text-black placeholder-[#64748B] outline-none focus:border-[#FFAE34] transition-colors"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 bg-white border border-[#E2E8F0] px-1.5 py-0.5 rounded-md text-[10px] font-medium text-[#94A3B8] shadow-2xs select-none">
            <span>⌘</span><span>K</span>
          </div>
        </div>
      </div>

      {/* 👤 RIGHT SIDE: UTILITY CONTROLS & PROFILE */}
      <div className="flex items-center gap-5">
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-[#E2E8F0] text-[#64748B] hover:bg-[#E2E8F0]  rounded-full transition-colors cursor-pointer">
          <Moon size={20} strokeWidth={1.8} />
        </button>

        <button className="w-10 h-10 flex items-center justify-center text-[#64748B] hover:bg-[#E2E8F0] bg-white border border-[#E2E8F0] rounded-full transition-colors relative cursor-pointer">
          <Bell size={20} strokeWidth={1.8} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#D34053] rounded-full ring-2 ring-white"></span>
        </button>

        <div className="flex items-center gap-3 ml-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[#1C2434] leading-tight">Musharaf</p>
            <p className="text-[11px] font-medium text-[#64748B] mt-0.5">Admin Manager</p>
          </div>
          <div className="w-11 h-11 rounded-full bg-gray-200 overflow-hidden border border-[#E2E8F0]">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
              alt="Musharaf Admin Avatar Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <ChevronDown size={16} className="text-[#64748B] transition-transform group-hover:translate-y-0.5" />
        </div>
      </div>

    </header>
  );
}
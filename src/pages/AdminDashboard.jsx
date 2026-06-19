import React, { useState } from 'react';
// 🌟 1. IMPORTANT: We must import Outlet from react-router-dom
import { Outlet } from 'react-router-dom'; 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function AdminDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#1C2434] font-sans antialiased flex overflow-x-hidden">

      {/* 1. LEFT SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
      />

      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-0'
        }`}
      >
        {/* 2. TOP HEADER PANEL */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-6 lg:p-10 bg-[#F1F5F9] overflow-y-auto">

          <Outlet />

        </main>

      </div>
    </div>
  );
}
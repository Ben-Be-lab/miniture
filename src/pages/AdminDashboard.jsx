import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard-analytics');
  
  // 🌟 true = full expanded sidebar, false = completely collapsed/hidden sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#1C2434] font-sans antialiased flex overflow-x-hidden">
      
      {/* 1. LEFT SIDEBAR */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        sidebarOpen={sidebarOpen} 
      />

      {/* 2. MAIN WORKSPACE CONTAINER */}
      {/* 🌟 The padding-left shifting matches the state value dynamically here */}
      <div 
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-0'
        }`}
      >
        {/* Top Header Navbar */}
        <Header 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
        
        {/* Core View Content */}
        <MainContent activeTab={activeTab} />
      </div>
    </div>
  );
}
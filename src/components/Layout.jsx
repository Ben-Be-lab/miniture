import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure this points to your exact file location
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-[#111111] subpixel-antialiased scroll-smooth flex flex-col">
      
      {/* Your custom navbar component */}
      <Navbar />

      {/* Note: If your custom navbar uses a "fixed" or "absolute" position, 
        make sure to add top padding here (like pt-[76px] or pt-20) to prevent 
         your homepage content from sliding underneath it!
      */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Premium Brand Footer */}
      <Footer />
      
    </div>
  );
}
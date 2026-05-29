import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-[#111111] subpixel-antialiased scroll-smooth flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      
    </div>
  );
}
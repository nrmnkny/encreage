import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5fef7] text-black shadow border-b border-gray-200 font-jetbrains">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center md:justify-between">
        
        <div className="flex items-center gap-3 mb-3 md:mb-0">
          <img src={logo} alt="Encreage Logo" className="h-10 md:h-12 w-auto" />
          <h1 className="text-lg md:text-xl font-bold tracking-widest uppercase text-[#103d2e]">Encreage</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-sm md:text-base font-medium">
          <a href="#products" className="hover:text-[#27ae60] transition">Products</a>
          <a href="#services" className="hover:text-[#27ae60] transition">Services</a>
          <a href="#contact" className="hover:text-[#27ae60] transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

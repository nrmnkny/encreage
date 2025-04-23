import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5fef7] text-black shadow border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between font-jetbrains">
        
        {/* Logo  */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Encreage Logo" className="h-10 md:h-12 w-auto" />
          <span className="text-xl md:text-2xl font-bold tracking-wide uppercase">
            ENCREAGE
          </span>
        </div>

        {/* Nav*/}
        <div className="hidden md:flex space-x-8 text-sm md:text-base font-medium">
          <a
            href="#services"
            className="hover:text-[#27ae60] transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-[#27ae60] transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

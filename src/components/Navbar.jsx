import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5fef7] text-black shadow border-b border-gray-200 font-jetbrains">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between relative">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute left-6 top-4 md:static md:top-auto"
        >
        <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-3">
        <img src={logo} alt="Encreage Logo" className="h-10 md:h-12 w-auto" />
        <h1 className="text-xl md:text-2xl font-semibold tracking-widest uppercase text-[#103d2e]">
            encreage
        </h1>
        </div>

        </motion.div>

        <div className="flex space-x-8 mt-2 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2">
          <a href="#products" className="hover:text-[#27ae60] transition-colors duration-200">
            Products
          </a>
          <a href="#services" className="hover:text-[#27ae60] transition-colors duration-200">
            Services
          </a>
          <a href="#contact" className="hover:text-[#27ae60] transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

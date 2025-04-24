import React from 'react';
import bgImage from '../assets/hero.png'; 

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center font-jetbrains"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          The Creative Generation
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
          Delivers next-gen cloud architecture, developer enablement, and data-driven strategies that cut through the noise.
        </p>
        <div className="flex gap-4">
          <a
            href="#services"
            className="bg-[#27ae60] hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

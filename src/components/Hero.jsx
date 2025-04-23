import React from 'react';


const Hero = () => {
  return (
    <section className="py-32 px-6 text-center max-w-6xl mx-auto bg-[#f5fef7] text-black font-jetbrains">
      <div className="flex flex-col items-center justify-center gap-6">

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Engineering Clarity.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Encreage delivers next-gen cloud architecture, developer enablement, and data-driven strategies that cut through the noise.
        </p>
      </div>
    </section>
  );
};

export default Hero;

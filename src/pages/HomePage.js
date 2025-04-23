import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("❌ Failed to load services:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-brand-black text-white font-jetbrains min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#f5fef7] text-black">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        <p className="text-center col-span-3 text-gray-500">Loading services...</p>
      ) : services.length > 0 ? (
        services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-brand-green transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              {service.SERVICE_NAME}
            </h3>
            <p className=" text-[#103d2e]text-sm leading-relaxed">
              {service.SERVICE_DESC}
            </p>
          </motion.div>
        ))
      ) : (
        <p className="text-center col-span-3 text-red-500">No services available.</p>
      )}
        </div>
      </div>
</section>


      {/* Footer */}
      <footer id="contact" className="py-20 px-6 text-center bg-brand-black border-t border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Let’s Build Something Great</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Feel free to ask for strategic digital transformation, or consultation.
        </p>
        <a
          href="mailto:team@encreage.com"
          className="inline-block border border-brand-green text-brand-green px-8 py-3 rounded-lg hover:bg-brand-green hover:text-white font-medium transition"
        >
          Email Us
        </a>
      </footer>
    </div>
  );
};

export default HomePage;

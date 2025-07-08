import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-amber-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-amber-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Homemade Treasures</span>
            <span className="text-amber-600">From Heart to Home</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-700 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover unique homemade creations from passionate artisans. From delicious recipes to beautiful artwork and inspired home designs — every piece tells a story and brings warmth to your space.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="#categories" 
              className="inline-block px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors shadow-md"
            >
              Explore Categories
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </section>
  );
};

export default Hero;
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import { useProducts } from '../contexts/ProductContext';

const HomePage: React.FC = () => {
  const { getProductsByCategory } = useProducts();
  
  useEffect(() => {
    document.title = 'Homemade Treasures - From Heart to Home';
  }, []);

  const recipes = getProductsByCategory('recipe');
  const foods = getProductsByCategory('food');
  const artworks = getProductsByCategory('artwork');
  const homeDesigns = getProductsByCategory('homedesign');

  return (
    <div>
      <Hero />
      
      <div id="categories" className="py-12 bg-white">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Our Categories</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Browse through our curated collection of homemade creations across different categories.
            Each item is crafted with love and care by our community of talented creators.
          </p>
        </div>
        
        <CategorySection title="Homemade Recipes" category="recipe" products={recipes} />
        <CategorySection title="Artisan Foods" category="food" products={foods} />
        <CategorySection title="Handcrafted Artwork" category="artwork" products={artworks} />
        <CategorySection title="Home Design Inspiration" category="homedesign" products={homeDesigns} />
      </div>
    </div>
  );
};

export default HomePage;
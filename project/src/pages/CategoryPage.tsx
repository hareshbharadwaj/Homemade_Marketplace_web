import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/ProductContext';

const categoryTitles: Record<string, string> = {
  recipe: 'Homemade Recipes',
  food: 'Artisan Foods',
  artwork: 'Handcrafted Artwork',
  homedesign: 'Home Design Inspiration'
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { getProductsByCategory } = useProducts();
  
  const validCategory = category as 'recipe' | 'food' | 'artwork' | 'homedesign';
  const products = getProductsByCategory(validCategory);
  const title = categoryTitles[validCategory] || 'Products';
  
  useEffect(() => {
    document.title = `${title} - Homemade Treasures`;
  }, [title]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-amber-800 mb-2">{title}</h1>
          <p className="text-gray-600 mb-8">
            Explore our collection of {products.length} items in this category
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
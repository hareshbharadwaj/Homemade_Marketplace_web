import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';

const FavoritesPage: React.FC = () => {
  const { favoriteProducts } = useCart();
  
  useEffect(() => {
    document.title = 'My Favorites - Homemade Treasures';
  }, []);

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
    <div className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-amber-800 mb-2">My Favorites</h1>
          <p className="text-gray-600 mb-8">
            Items you've saved for later
          </p>
        </motion.div>
        
        {favoriteProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {favoriteProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12 bg-white rounded-lg shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heart size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No favorites yet</h2>
            <p className="text-gray-500 mb-6">Items you favorite will appear here</p>
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
            >
              Explore Products
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
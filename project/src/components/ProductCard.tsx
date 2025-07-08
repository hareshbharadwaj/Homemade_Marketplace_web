import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';
import RatingStars from './RatingStars';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isAuthenticated, user } = useAuth();
  const { favorites, toggleFavorite, addToCart } = useCart();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isFavorite = favorites.includes(product.id);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    toggleFavorite(product.id);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    addToCart(product.id);
  };
  
  const handleCardClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        onClick={handleCardClick}
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          {user?.role === 'viewer' && (
            <div className="absolute top-2 right-2 flex space-x-2">
              <button 
                onClick={handleFavoriteClick}
                className={`p-2 rounded-full ${isFavorite ? 'bg-amber-500 text-white' : 'bg-white text-amber-700'} shadow-md hover:scale-110 transition-all duration-200`}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart size={16} fill={isFavorite ? "white" : "none"} />
              </button>
              <button 
                onClick={handleAddToCart}
                className="p-2 bg-white text-amber-700 rounded-full shadow-md hover:bg-amber-500 hover:text-white transition-all duration-200"
                aria-label="Add to cart"
              >
                <ShoppingCart size={16} />
              </button>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-2 truncate">{product.description}</p>
          <div className="mb-2">
            <RatingStars rating={product.rating} ratingCount={product.ratingCount} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">By {product.uploaderName}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              className="text-sm font-medium text-amber-700 hover:text-amber-500 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </motion.div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
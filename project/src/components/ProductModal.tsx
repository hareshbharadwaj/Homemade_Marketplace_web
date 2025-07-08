import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import RatingStars from './RatingStars';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { favorites, toggleFavorite, addToCart } = useCart();
  const { user } = useAuth();
  const isFavorite = favorites.includes(product.id);
  const [userRating, setUserRating] = useState<number | null>(null);

  const handleRate = (rating: number) => {
    setUserRating(rating);
    // Here you would typically update the rating in your storage system
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-4xl relative z-50 overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={onClose}
                  className="p-2 bg-white rounded-full shadow-md text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 md:w-1/2">
                  <div className="mb-4">
                    <span className="text-sm text-amber-600 uppercase tracking-wider">
                      {product.category === 'homedesign' ? 'Home Design' : product.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800 mt-1">{product.title}</h2>
                  </div>

                  <div className="mb-4">
                    <RatingStars
                      rating={userRating || product.rating}
                      ratingCount={product.ratingCount}
                      onRate={handleRate}
                      readonly={!user || userRating !== null}
                    />
                  </div>

                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="prose max-w-none text-gray-700 mb-6">
                    {product.detailedDescription.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <span className="text-sm text-gray-500">
                      Uploaded by {product.uploaderName} on{' '}
                      {new Date(product.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {user?.role === 'viewer' && (
                    <div className="flex space-x-4">
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                          isFavorite
                            ? 'bg-amber-100 text-amber-700 border border-amber-300'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-amber-50'
                        }`}
                      >
                        <Heart
                          size={18}
                          className="mr-2"
                          fill={isFavorite ? 'currentColor' : 'none'}
                        />
                        <span>{isFavorite ? 'Saved' : 'Save'}</span>
                      </button>

                      <button
                        onClick={() => {
                          addToCart(product.id);
                          onClose();
                        }}
                        className="flex items-center px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
                      >
                        <ShoppingCart size={18} className="mr-2" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { favorites, toggleFavorite, addToCart } = useCart();
  const { user } = useAuth();
  
  const product = getProductById(id || '');
  const isFavorite = favorites.includes(id || '');
  
  useEffect(() => {
    if (product) {
      document.title = `${product.title} - Homemade Treasures`;
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Product not found.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-4 text-amber-700 hover:text-amber-500"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-amber-700 hover:text-amber-500 mb-6"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Back</span>
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="p-6 md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-amber-600 uppercase tracking-wider">
                {product.category === 'homedesign' ? 'Home Design' : product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{product.title}</h1>
              
              <div className="mb-6">
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-gray-500">
                  Uploaded by {product.uploaderName} on {new Date(product.createdAt).toLocaleDateString()}
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
                    <Heart size={18} className="mr-2" fill={isFavorite ? "currentColor" : "none"} />
                    <span>{isFavorite ? 'Saved' : 'Save'}</span>
                  </button>
                  
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex items-center px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
          
          <div className="p-6 border-t border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: product.detailedDescription.replace(/\n/g, '<br />') }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
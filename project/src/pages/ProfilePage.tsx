import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { Pencil, Trash2, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { products, removeProduct } = useProducts();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const userProducts = products.filter(product => product.uploaderId === user?.id);
  
  useEffect(() => {
    document.title = `Profile - ${user?.username || 'User'} - Homemade Treasures`;
  }, [user]);

  const handleDelete = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      removeProduct(productId);
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-amber-700">
                {user?.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user?.username}</h1>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-sm text-amber-600 mt-1 capitalize">{user?.role}</p>
            </div>
          </div>
        </motion.div>

        {user?.role === 'uploader' && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">My Uploads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userProducts.map(product => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-amber-600 capitalize">{product.category}</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsEditModalOpen(true);
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {userProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500">You haven't uploaded any products yet.</p>
              </div>
            )}
          </div>
        )}

        <AnimatePresence>
          {isEditModalOpen && selectedProduct && (
            <Dialog
              open={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl relative z-50"
                >
                  <div className="flex justify-between items-center mb-4">
                    <Dialog.Title className="text-xl font-bold text-gray-800">
                      Edit Product
                    </Dialog.Title>
                    <button
                      onClick={() => setIsEditModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Add edit form here */}
                  <p className="text-gray-600">Edit form implementation coming soon...</p>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </motion.div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfilePage;
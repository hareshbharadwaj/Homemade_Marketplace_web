import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UploadCloud, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types';

const AddProductPage: React.FC = () => {
  const { user } = useAuth();
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Product['category']>('recipe');
  const [description, setDescription] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    document.title = 'Add New Product - Homemade Treasures';
    
    if (!user || user.role !== 'uploader') {
      navigate('/');
    }
  }, [user, navigate]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!title || !description || !detailedDescription || !imageUrl) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (!user) throw new Error('User not authenticated');
      
      addProduct({
        category,
        title,
        description,
        detailedDescription,
        imageUrl,
        uploaderId: user.id,
        uploaderName: user.username
      });
      
      navigate('/');
    } catch (err) {
      setError('Failed to add product');
      console.error(err);
      setIsSubmitting(false);
    }
  };

  const sampleImageUrls = {
    recipe: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
    food: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    artwork: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
    homedesign: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'
  };

  const handleSelectSampleImage = () => {
    setImageUrl(sampleImageUrls[category]);
  };

  return (
    <div className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-amber-800 mb-2">Add New Item</h1>
          <p className="text-gray-600 mb-8">
            Share your creation with the community
          </p>
        </motion.div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Product['category'])}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="recipe">Recipe</option>
                  <option value="food">Food</option>
                  <option value="artwork">Artwork</option>
                  <option value="homedesign">Home Design</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter a title for your item"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Short Description
                </label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Brief description (1-2 sentences)"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="detailedDescription" className="block text-gray-700 font-medium mb-2">
                  Detailed Description
                </label>
                <textarea
                  id="detailedDescription"
                  value={detailedDescription}
                  onChange={(e) => setDetailedDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 h-40"
                  placeholder="Provide detailed information about your item (ingredients, instructions, materials, etc.)"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Image
                </label>
                
                {imageUrl ? (
                  <div className="relative mb-4">
                    <img 
                      src={imageUrl} 
                      alt="Product preview" 
                      className="max-h-64 rounded-md object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setImageUrl('')}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove image"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center mb-4">
                    <UploadCloud size={48} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-4">Add an image URL for your product</p>
                    <button
                      type="button"
                      onClick={handleSelectSampleImage}
                      className="text-sm text-amber-700 hover:text-amber-500"
                    >
                      Use a sample image
                    </button>
                  </div>
                )}
                
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Paste image URL here"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="px-6 py-2 mr-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Adding...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
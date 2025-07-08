import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Homemade Treasures';
  }, []);

  return (
    <div className="bg-amber-50 min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-6">
          <span className="block text-6xl font-bold text-amber-700">404</span>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">Page Not Found</h1>
          <p className="text-gray-600 mt-2">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
        >
          <Home size={18} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
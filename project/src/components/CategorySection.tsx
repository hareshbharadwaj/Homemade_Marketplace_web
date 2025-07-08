import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface CategorySectionProps {
  title: string;
  category: Product['category'];
  products: Product[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, category, products }) => {
  // Take only 4 products for home page preview
  const previewProducts = products.slice(0, 4);
  
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
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <Link 
            to={`/category/${category}`} 
            className="flex items-center text-amber-700 hover:text-amber-500 transition-colors"
          >
            <span>View All</span>
            <ChevronRight size={16} />
          </Link>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {previewProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
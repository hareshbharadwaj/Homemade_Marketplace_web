import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface RatingStarsProps {
  rating: number;
  ratingCount: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, ratingCount, onRate, readonly = true }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            whileHover={!readonly ? { scale: 1.1 } : {}}
            whileTap={!readonly ? { scale: 0.9 } : {}}
            onClick={() => !readonly && onRate?.(star)}
            className={`${readonly ? 'cursor-default' : 'cursor-pointer'}`}
            disabled={readonly}
          >
            <Star
              size={16}
              className={`${
                star <= rating
                  ? 'text-amber-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          </motion.button>
        ))}
      </div>
      <span className="text-sm text-gray-500">({ratingCount})</span>
    </div>
  );
};

export default RatingStars;
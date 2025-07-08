import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash, Plus, Minus, CreditCard } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartProducts, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  
  useEffect(() => {
    document.title = 'My Cart - Homemade Treasures';
  }, []);

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.quantity * 10, // Assuming each product costs $10
    0
  );

  const handleCheckout = () => {
    if (cartProducts.length === 0) return;
    
    setIsCheckingOut(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 2000);
  };

  if (checkoutComplete) {
    return (
      <div className="bg-amber-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md text-center max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-amber-800 mb-2">My Cart</h1>
          <p className="text-gray-600 mb-8">
            Review and checkout your items
          </p>
        </motion.div>
        
        {cartProducts.length > 0 ? (
          <div className="lg:flex lg:space-x-8">
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 lg:mb-0">
                <ul className="divide-y divide-gray-200">
                  {cartProducts.map(product => (
                    <li key={product.id} className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0 flex-shrink-0">
                          <img 
                            src={product.imageUrl} 
                            alt={product.title} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="sm:ml-6 flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">Uploaded by {product.uploaderName}</p>
                            </div>
                            <p className="text-lg font-medium text-amber-700">${(10 * product.quantity).toFixed(2)}</p>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <div className="flex items-center border rounded-md">
                              <button 
                                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                className="px-3 py-1 text-gray-600 hover:text-amber-700"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-3 py-1 text-gray-800">{product.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:text-amber-700"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <button 
                              onClick={() => removeFromCart(product.id)}
                              className="text-red-500 hover:text-red-700 flex items-center"
                            >
                              <Trash size={16} className="mr-1" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Order Summary</h2>
                
                <div className="border-t border-gray-200 pt-4 pb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800">${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800">Free</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg mt-4">
                    <span className="text-gray-800">Total</span>
                    <span className="text-amber-700">${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut || cartProducts.length === 0}
                  className={`w-full py-3 px-4 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center ${
                    (isCheckingOut || cartProducts.length === 0) ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isCheckingOut ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard size={18} className="mr-2" />
                      Proceed to Checkout
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            className="text-center py-12 bg-white rounded-lg shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some products to your cart</p>
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
            >
              Start Shopping
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
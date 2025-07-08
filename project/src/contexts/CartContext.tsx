import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';
import { useProducts } from './ProductContext';

interface CartContextType {
  cartItems: CartItem[];
  favorites: string[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  cartProducts: (Product & { quantity: number })[];
  favoriteProducts: Product[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const { products, getProductById } = useProducts();

  useEffect(() => {
    // Initialize from localStorage
    const storedCart = localStorage.getItem('cart');
    const storedFavorites = localStorage.getItem('favorites');
    
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever cart or favorites change
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [cartItems, favorites]);

  const addToCart = (productId: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.productId === productId);
      
      if (existingItem) {
        return prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prev, { productId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.productId === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartProducts = cartItems.map(item => {
    const product = getProductById(item.productId);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter((product): product is Product & { quantity: number } => product !== null);

  const favoriteProducts = favorites
    .map(id => getProductById(id))
    .filter((product): product is Product => product !== undefined);

  const value = {
    cartItems,
    favorites,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleFavorite,
    clearCart,
    totalItems,
    cartProducts,
    favoriteProducts
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
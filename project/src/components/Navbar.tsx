import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, LogOut, Plus, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-amber-700 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="text-amber-200">Homemade</span>
          <span className="ml-1">Treasures</span>
        </Link>

        <nav className="flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
              >
                <User size={22} />
                <span className="text-sm hidden md:inline">
                  {user?.username}
                </span>
              </Link>
              
              {user?.role === 'viewer' ? (
                <>
                  <Link to="/favorites" className="relative hover:text-amber-200 transition-colors">
                    <Heart size={22} />
                  </Link>
                  <Link to="/cart" className="relative hover:text-amber-200 transition-colors">
                    <ShoppingCart size={22} />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </>
              ) : (
                <Link to="/add-product" className="hover:text-amber-200 transition-colors">
                  <Plus size={22} />
                </Link>
              )}
              
              <button 
                onClick={handleLogout} 
                className="hover:text-amber-200 transition-colors"
              >
                <LogOut size={22} />
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center space-x-1 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md transition-colors"
            >
              <User size={18} />
              <span>Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
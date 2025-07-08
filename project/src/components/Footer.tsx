import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-800 text-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Homemade Treasures</h3>
            <p className="mb-4 text-amber-200">Connecting creators and enthusiasts in a community that celebrates handmade craftsmanship.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/category/recipe" className="hover:text-white transition-colors">Recipes</a></li>
              <li><a href="/category/food" className="hover:text-white transition-colors">Foods</a></li>
              <li><a href="/category/artwork" className="hover:text-white transition-colors">Artwork</a></li>
              <li><a href="/category/homedesign" className="hover:text-white transition-colors">Home Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Account</h4>
            <ul className="space-y-2">
              <li><a href="/login" className="hover:text-white transition-colors">Login</a></li>
              <li><a href="/register" className="hover:text-white transition-colors">Register</a></li>
              <li><a href="/favorites" className="hover:text-white transition-colors">My Favorites</a></li>
              <li><a href="/cart" className="hover:text-white transition-colors">My Cart</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Stay Connected</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest"><circle cx="12" cy="12" r="10"/><path d="m8 20 4-9"/><path d="M10.7 13.5C20 13 22 8 22 8c0-5.5-5.5-5.5-5.5-5.5-2.5 0-5 1.5-6.5 4V8c-1.5-1.5-3-2-4.5-2-3 0-5.5 2-5.5 6s2.5 6 5 6c2.5 0 4-1.5 5-3l-1-2h2Z"/></svg>
              </a>
            </div>
            <p className="text-sm">Subscribe to our newsletter for updates on new products and creators.</p>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-amber-400" /> by Homemade Treasures
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Homemade Treasures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
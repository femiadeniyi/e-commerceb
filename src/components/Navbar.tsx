import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { FaBars, FaTimes, FaUserCircle, FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-gray-200 transition duration-300">
          <Link to="/">My eCommerce</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105 relative"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400 transform scale-x-0 hover:scale-x-100 transition-all duration-300"></span>
          </Link>
          <Link
            to="/products"
            className="text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105 relative"
          >
            Shop
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400 transform scale-x-0 hover:scale-x-100 transition-all duration-300"></span>
          </Link>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className="relative text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105"
          >
            Wishlist
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Link */}
          <Link
            to="/cart"
            className="relative text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Profile Icon */}
          <div className="relative">
            <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-200 transition duration-300" />
            {/* Dropdown Menu (hidden initially) */}
            <div className="absolute top-full right-0 bg-white text-black rounded-lg shadow-lg w-48 mt-2 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <Link to="/profile" className="block p-2 text-sm hover:bg-gray-100">Profile</Link>
              <Link to="/settings" className="block p-2 text-sm hover:bg-gray-100">Settings</Link>
              <Link to="/logout" className="block p-2 text-sm hover:bg-gray-100">Logout</Link>
            </div>
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-2 rounded-md bg-amber-50 focus:outline-none text-black"
          />
          <FaSearch className="text-xl cursor-pointer text-white" />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center absolute top-4 right-4">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            {isMenuOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 space-y-4 transform transition-all duration-300 ease-in-out"
        >
          <Link
            to="/"
            className="block text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            to="/wishlist"
            className="relative block text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105"
            onClick={toggleMenu}
          >
            Wishlist
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            className="relative block text-lg hover:text-gray-200 transition duration-300 transform hover:scale-105"
            onClick={toggleMenu}
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </Link>
          {/* Mobile Search */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="p-2 rounded-md bg-amber-50 focus:outline-none text-black"
            />
            <FaSearch className="text-xl cursor-pointer text-white" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

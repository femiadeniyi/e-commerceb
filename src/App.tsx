import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage'; // Import WishlistPage

const App: React.FC = () => {
  return (
    <WishlistProvider>  {/* Wrap the entire app with WishlistProvider */}
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} /> {/* Add WishlistPage route */}
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
};

export default App;

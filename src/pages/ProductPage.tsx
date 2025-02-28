import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import wirelessImage from '../assets/product-img/wireless.jpg';
import smartwatchimg from '../assets/product-img/smartwatch.jpg';
import bluetoothimg from '../assets/product-img/bluetooth.jpg';
import cyberbackimg from '../assets/product-img/cyberback.jpg';
import cameraimg from '../assets/product-img/camera.jpg';
import gamingimg from '../assets/product-img/gaming.jpg';
import iphoneimg from '../assets/product-img/iphone16.jpg';
import ps5img from '../assets/product-img/ps5.jpg';
import laptopimg from '../assets/product-img/laptop.jpg';
import speakerimg from '../assets/product-img/speaker.webp';
import mouseimg from '../assets/product-img/mouse.jpg';
import tabletimg from '../assets/product-img/tablet.webp';
import droneimg from '../assets/product-img/drone.png';
import vrimg from '../assets/product-img/vr.webp';
import smartwatchimg2 from '../assets/product-img/smartwatch2.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
  category: string;
}

const AdBanner: React.FC = () => {
  const offerEndTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(offerEndTime - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(offerEndTime - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [offerEndTime]);

  const formatTime = (time: number) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (timeLeft <= 0) {
    return (
      <div className="bg-gradient-to-r  from-indigo-600 via-purple-700 to-pink-600 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl text-white mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold">🎉 Offer Expired!</h2>
            <p className="mt-2 text-base sm:text-lg font-medium">Sorry, the limited-time offer has ended.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl text-white mb-8 sm:mb-12 animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold">🎉 Limited Time Offer!</h2>
          <p className="mt-2 text-base sm:text-lg font-medium">Get 20% off selected products. Hurry up, offer ends soon!</p>
          <div className="mt-4">
            <p className="text-lg sm:text-xl font-medium">Time Left: {formatTime(timeLeft)}</p>
          </div>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <a
            href="#shop-now"
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all duration-300 w-full sm:w-auto"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<Product> = ({ id, name, price, imageUrl, description, rating, category }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const handleAddToCart = () => {
    const product: Product = { id, name, price, imageUrl, description, rating, category };
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 relative">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover mb-4"
      />
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={handleWishlist}
          className={`text-white ${isWishlist ? 'bg-red-500' : 'bg-gray-500'} p-2 rounded-full transition-all`}
        >
          ❤️
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm sm:text-base text-gray-500 mb-4">{description}</p>
        <p className="text-lg sm:text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{'★'.repeat(rating)}</span>
          <span className="text-gray-500 ml-2">({rating} / 5)</span>
        </div>
        <button
          onClick={handleAddToCart}
          className={`mt-4 w-full py-2 px-6 rounded-lg transition ${
            isAdded ? 'bg-green-500' : 'bg-blue-500'
          } text-white hover:${isAdded ? 'bg-green-600' : 'bg-blue-600'}`}
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [products, setProducts] = useState<Product[]>([]);

  const allProducts: Product[] = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, imageUrl: wirelessImage, description: 'High-quality sound, comfortable design, and long battery life.', rating: 4, category: 'Electronics' },
    { id: 2, name: 'Smartwatch', price: 199.99, imageUrl: smartwatchimg, description: 'Track your fitness, receive notifications, and more with this smartwatch.', rating: 5, category: 'Electronics' },
    { id: 3, name: 'Bluetooth Speaker', price: 59.99, imageUrl: bluetoothimg, description: 'Portable, waterproof, and delivers great sound.', rating: 3, category: 'Accessories' },
    { id: 4, name: 'Laptop Backpack', price: 45.99, imageUrl: cyberbackimg, description: 'Spacious and stylish backpack for carrying your laptop and accessories.', rating: 4, category: 'Accessories' },
    { id: 5, name: '4K Camera', price: 299.99, imageUrl: cameraimg, description: 'Capture stunning 4K videos and high-resolution photos.', rating: 5, category: 'Electronics' },
    { id: 6, name: 'Gaming Mouse', price: 49.99, imageUrl: gamingimg, description: 'Precision sensor and customizable buttons for the ultimate gaming experience.', rating: 4, category: 'Accessories' },
    { id: 7, name: 'iPhone 16', price: 999.99, imageUrl: iphoneimg, description: 'High-end phone with cutting-edge features and performance.', rating: 5, category: 'Electronics' },
    { id: 8, name: 'PS5', price: 609.99, imageUrl: ps5img, description: 'The latest PlayStation console with incredible graphics and performance.', rating: 5, category: 'Electronics' },
    { id: 9, name: 'Laptop', price: 899.99, imageUrl: laptopimg, description: 'Powerful laptop for work and play.', rating: 5, category: 'Electronics' },
    { id: 10, name: 'Bluetooth Speaker', price: 79.99, imageUrl: speakerimg, description: 'Compact and durable speaker with high bass sound.', rating: 3, category: 'Accessories' },
    { id: 11, name: 'Gaming Mouse', price: 39.99, imageUrl: mouseimg, description: 'Perfect precision for gaming.', rating: 4, category: 'Accessories' },
    { id: 12, name: 'Tablet', price: 499.99, imageUrl: tabletimg, description: 'Fast and portable tablet for work or leisure.', rating: 4, category: 'Electronics' },
    { id: 13, name: 'Drone', price: 499.99, imageUrl: droneimg, description: 'Capture stunning aerial photos and videos.', rating: 5, category: 'Electronics' },
    { id: 14, name: 'VR Headset', price: 499.99, imageUrl: vrimg, description: 'Next-gen VR experience for gaming and more.', rating: 5, category: 'Electronics' },
    { id: 15, name: 'Smartwatch 2', price: 159.99, imageUrl: smartwatchimg2, description: 'Enhanced features with a sleek design.', rating: 4, category: 'Electronics' },
  ];

  const sortedProducts = allProducts
    .filter((product) => 
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase())) && 
      (filteredCategory === 'All' || product.category === filteredCategory)
    )
    .sort((a, b) => 
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

  useEffect(() => {
    setProducts(sortedProducts);
  }, [searchQuery, filteredCategory, sortOrder]);

  return (
    <div className="container mx-auto px-4 pt-23">
      <AdBanner />
      <div className="flex flex-wrap justify-between mb-4 gap-4">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-full border-2 border-gray-300"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex space-x-4 w-full sm:w-auto">
          <select
            className="border-2 border-gray-300 rounded-md p-2"
            value={filteredCategory}
            onChange={(e) => setFilteredCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </select>
          <select
            className="border-2 border-gray-300 rounded-md p-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

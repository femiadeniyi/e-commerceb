import React from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <div className="flex space-x-2 mt-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => addToWishlist(product)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { useWishlist } from '../context/WishlistContext';

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemoveItem = (id: number) => {
    removeFromWishlist(id);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-xl text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div>
          <div className="space-y-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-lg text-gray-500">${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(product.id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

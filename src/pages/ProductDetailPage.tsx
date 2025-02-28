import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = {
    id: parseInt(id || '0'),
    name: `Product ${id}`,
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/400',
    description: 'This is a detailed description of the product.',
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <img src={product.imageUrl} alt={product.name} className="w-1/2 h-80 object-cover" />
        <div className="ml-6">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4">Add to Cart</button>
          <button className="bg-red-500 text-white py-2 px-4 rounded">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

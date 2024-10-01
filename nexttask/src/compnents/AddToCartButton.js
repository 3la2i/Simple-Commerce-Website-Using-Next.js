'use client';

import { useState } from 'react';

export default function AddToCartButton({ product }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart!`);
    setIsAdded(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`${
        isAdded ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'
      } text-white font-bold py-2 px-4 rounded`}
    >
      {isAdded ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
}
import React from "react";

const Item = ({ product }) => {
  return (
    <div className="relative border rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transform transition-all duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-brown-900">{product.name}</h2>
        <p className="text-brown-500 mb-5 leading-relaxed">{product.description}</p>
        <span className="block text-2xl font-extrabold text-brown-500 mb-4">{product.price}</span>
      </div>
      <div className="flex justify-center space-x-4 pb-6">
        <button className="px-5 py-2 bg-brown-500 hover:bg-brown-600 text-white font-semibold rounded-full shadow-sm transition-colors duration-300">
          Add to Cart
        </button>
        <button className="px-5 py-2 bg-brown-600 hover:bg-brown-700 text-white font-semibold rounded-full shadow-sm transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Item;

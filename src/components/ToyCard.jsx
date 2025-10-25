import React from "react";
import { Link } from "react-router";

export default function ToyCard({ toy }) {
  const { toyId, toyName, price, rating, availableQuantity, pictureURL } = toy;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-48 object-contain mb-3"
      />
      <h3 className="text-lg font-bold">{toyName}</h3>
      <p className="text-gray-600 text-sm">Rating: ⭐ {rating}</p>
      <p className="text-gray-600 text-sm">Available: {availableQuantity}</p>
      <p className="text-blue-600 font-semibold">Price: ${price}</p>
      <Link
        to={`/toys/${toyId}`}
        className="block bg-blue-500 text-white text-center mt-3 py-2 rounded-lg hover:bg-blue-600"
      >
        View More
      </Link>
    </div>
  );
}

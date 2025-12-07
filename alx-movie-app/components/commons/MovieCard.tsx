import React from "react";

const MovieCard: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold">Movie Title</h3>
      <p className="text-sm text-gray-600">Movie description here...</p>
    </div>
  );
};

export default MovieCard;

import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full md:w-1/2">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
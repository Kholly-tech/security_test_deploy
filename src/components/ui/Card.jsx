import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-16 m-4 max-w-full ">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-4">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 md:text-lg lg:text-xl leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
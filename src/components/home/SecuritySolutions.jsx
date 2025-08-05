import React from 'react';

const SecuritySolutions = ({ solutions }) => {
  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl font-bold mb-4 text-indigo-900 text-center">
        SECURITY SOLUTIONS WE OFFER
      </h2>
      <p className="text-2xl mb-8 text-center">
        At Safety Security, Inc., we provide specialist security services tailored to ensure the safety of property and people.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-4">
            {/* Image */}
            <img src={solution.image} alt={solution.title} className="w-full h-96 object-cover mb-4 rounded-t-xl" />

            {/* Title */}
            <h3 className="text-sm font-semibold mb-1">{solution.title}</h3>

            <p className='text-xs md:text-[16px] text-red-800 font-semibold mb-3'>{solution.desc}</p>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-[18px]">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySolutions;
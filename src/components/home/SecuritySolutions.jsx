import React from 'react';

const SecuritySolutions = ({ solutions }) => {
  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-black/65 text-center">
        Security Solutions We Offer
      </h2>
      <p className="text-[15px] md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-center text-black/55">
        At Safety Security, Inc., we provide special security services
        customized to ensure the safety of property, people, and businesses
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white shadow-lg flex flex-col items-center rounded-xl p-4">
            {/* Image */}
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-60 object-cover mb-4 rounded-t-xl"
            />

            {/* Title */}
            <h3 className="text-lg text-center font-semibold mb-4">{solution.title}</h3>

            {/* Description */}
            <p className="flex-1 text-gray-700 text-center w-full max-w-xs mx-auto text-sm md:text-[18px]">
              {solution.description}
            </p>

            <button className='mt-12 text-red-500/90 font-medium items-end justify-end cursor-pointer'>Get Service</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySolutions;
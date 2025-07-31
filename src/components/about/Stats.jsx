import React from 'react';

const Stats = () => {
  return (
    <div className="bg-white my-20 py-12 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1: 100+ Happy Clients */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14L9 19.828 3.172 14m0 0L9 8.172 14.828 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className="text-2xl font-bold mt-2 text-primary">100+</h3>
          <p className="text-gray-600">HAPPY CLIENTS</p>
        </div>

        {/* Card 2: 50+ Security Guards */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM3.859 20.141L7.141 17m5.657 0a4 4 0 11-.586-7.814 4 4 0 01.586 7.814zM14.5 19a4 4 0 01-3.743-4.697l7.486-3.743A4 4 0 0119 15m-7 2a4 4 0 010 8H8a4 4 0 010-8z" />
          </svg>
          <h3 className="text-2xl font-bold mt-2 text-primary">50+</h3>
          <p className="text-gray-600">SECURITY GUARDS</p>
        </div>

        {/* Card 3: 50+ Security Guards */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM3.859 20.141L7.141 17m5.657 0a4 4 0 11-.586-7.814 4 4 0 01.586 7.814zM14.5 19a4 4 0 01-3.743-4.697l7.486-3.743A4 4 0 0119 15m-7 2a4 4 0 010 8H8a4 4 0 010-8z" />
          </svg>
          <h3 className="text-2xl font-bold mt-2 text-primary">50+</h3>
          <p className="text-gray-600">SECURITY GUARDS</p>
        </div>

        {/* Card 4: 50+ Security Guards */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM3.859 20.141L7.141 17m5.657 0a4 4 0 11-.586-7.814 4 4 0 01.586 7.814zM14.5 19a4 4 0 01-3.743-4.697l7.486-3.743A4 4 0 0119 15m-7 2a4 4 0 010 8H8a4 4 0 010-8z" />
          </svg>
          <h3 className="text-2xl font-bold mt-2 text-primary">50+</h3>
          <p className="text-gray-600">SECURITY GUARDS</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
import React from 'react';
import guard1 from '../../assets/images/guard1.png';
import { constants } from '../../utils/constants';

export const CheckCircle = () => (
  <div className="flex items-center justify-center mr-4 mt-5">
    <div className="bg-white rounded-full border-4 border-gray-300 w-9 h-9 flex items-center justify-center">
      <div className="bg-red-700 w-4 h-4 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  </div>
);

const PartnerWithUs = () => {
  return (
    <div className="bg-indigo-900 text-white pb-6 md:pb-0">
      <div className="flex flex-col md:flex-row items-center">
        {/* Security Guard Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src={guard1} alt="Security Guard" className="w-full h-auto" />
        </div>

        {/* Benefits Section */}
        <div className="w-full md:w-1/2 px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-bold ">
            WHY YOU SHOULD PARTNER WITH US
          </h2>
          <p className="text-lg mb-4">
            Excellence in Security Services Backed by Experience and Integrity
          </p>

          {/* List of Benefits */}
          <ul className="space-y-6">
            {constants.patnershipData.map((data, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{data.title}</h3>
                  <p className="text-sm">{data.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
import React from 'react';
import { CheckCircle } from '../home/Patnership';

const Values = () => {
  return (
    <div className="bg-[#2C1678] text-white py-12 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Side: Description */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-5">
          <h2 className="text-2xl font-bold mb-4">OUR VALUE AND PHILOSOPHY</h2>
          <p className="text-gray-200 leading-relaxed items-end md:text-end">
            Our approach to service delivery is rooted in a people-first
            philosophy and a strong commitment to collaboration. We believe
            effective security starts with understanding the unique needs of our
            clients, which is why we focus on the entire customer journey,
            viewing our security solutions through the lens of those we protect.
            Our goal is to demonstrate the real, measurable value that
            professional security brings to businesses, communities, and events.
          </p>
          <div className="hidden mt-6 md:flex space-x-4 items-center justify-end">
            <a
              href="#"
              className="text-sm font-semibold text-white hover:text-accent"
            >
              Join Our Team
            </a>
            <button className="bg-white text-[#2C1678] px-4 py-2 rounded-full hover:bg-accent transition duration-300">
              Book Our Service
            </button>
          </div>
        </div>

        {/* Right Side: Values */}
        <div className="w-full md:w-1/2 flex flex-col items-end space-y-8 px-5">
          <div className="flex items-center">
            <CheckCircle />
            <div>
              <h3 className="text-xl font-bold mb-2">INTEGRITY</h3>
              <p className="text-gray-200">
                We act with honesty, transparency, and accountability in every
                decision, ensuring our clients can trust us without compromise.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <div>
              <h3 className="text-xl font-bold mb-2">PROFESSIONALISM</h3>
              <p className="text-gray-200">
                We maintain the highest standards of conduct, appearance, and
                performance in all our operations.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle />
            <div>
              <h3 className="text-xl font-bold mb-2">
                EXCELLENCE IN EXECUTION
              </h3>
              <p className="text-gray-200">
                We strive for excellence in every assignment, big or small,
                because every detail matters in security.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-6 flex space-x-4 mx-auto items-center justify-end">
          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-accent"
          >
            Join Our Team
          </a>
          <button className="bg-white text-[#2C1678] px-4 py-2 rounded-full hover:bg-accent transition duration-300">
            Book Our Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Values;
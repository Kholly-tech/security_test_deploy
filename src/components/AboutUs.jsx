import React from 'react'
import secureIcon from '../assets/icons/Vector.png';
import { Icon } from '@iconify/react/dist/iconify.js';

const AboutUs = () => {
  return (
    <div className="bg-white w-full py-16 px-6 sm:px-8 md:px-12 lg:px-18">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Description */}
        <div className="w-full md:w-7/12 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">ABOUT US</h2>
          <p className="text-lg mb-8">
            We are a professional security guard company based in Boston, MA,
            with over 17 years of experience, we are committed to protecting
            what matters most. With a team of licensed and highly trained
            security personnel, we provide reliable security services for
            businesses, events, residential communities, and financial
            institutions across Boston and surrounding areas.
          </p>
          <p className="text-lg">
            Our mission is to deliver safety, peace of mind, and exceptional
            service through integrity, vigilance, and professionalism. Whether
            you need armed guards, mobile patrols, or event security, we tailor
            our solutions to meet your unique needs with precision and care.
          </p>

          {/* Button */}
          <button className="mt-6 bg-indigo-900 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition duration-300">
            Read More
          </button>
        </div>

        {/* Right Section: Image with Text Overlay */}
        <div className="w-full md:w-4/12">
          <div className="relative">
            {/* Background Image */}
            <Icon
              icon="mdi:shield"
              width="24"
              height="24"
              className="w-full h-auto text-red-100"
            />

            {/* Text Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-red-900">
              <span className="text-6xl font-bold">17+</span>
              <p className="text-2xl font-semibold mt-2">EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
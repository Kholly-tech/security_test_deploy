import React from "react";
import { constants } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-4 sm:px-8 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <img
            src={constants.footerLogo}
            alt="LIFT Logo"
            className="w-20 h-8"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          <span className="font-semibold">Company</span>
          <ul className="flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Our Services
              </a>
            </li>
          </ul>
        </div>

        {/* Consultation */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          <span className="font-semibold">Consultation</span>
          <ul className="flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Request a Quote
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Book Security Consultation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Join Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          <span className="font-semibold">Contact Us</span>
          <p>Address: 154 Maverick Street, Boston, MA 02128</p>
          <p>Telephone: 781.471.78</p>
          <p>Fax: 781.810.0430</p>
        </div>

        {/* Social */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          <span className="font-semibold">Social</span>
          <div className="flex space-x-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2m-2 10H7m3 4h8v-2.5M15 12H9m4 4H9m-4-8h8m-5 5h2.5"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 11V5a4 4 0 118 0v6"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8v8a1 1 0 01-1.454 1.228L15 16m-3 0L9.447 18.776A1 1 0 017 18V8a1 1 0 011.454-1.228L15 10z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
        © 2025 Safety Security, Inc. | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { constants } from "../utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2E06BD] text-white py-12 px-4 sm:px-8 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Logo */}
        <div className="mb-6 md:mb-0 md:mr-10 flex flex-col md:w-1/4">
          <img
            src={constants.footerLogo}
            alt="LIFT Logo"
            className="w-60 h-48 -mt-12"
          />
          <p className="w-full max-w-sm md:pr-5 -mt-10">
            We offer proven expertise in security, encompassing everything from
            residential to corporate offices, including but not limited to
            private, commercial, construction, industrial, concierge, and
            special events security
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4 md:w-1/4 md:mt-8">
          <span className="font-semibold">Company</span>
          <ul className="flex-col space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-white">
                Our Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Consultation */}
        <div className="flex flex-col space-y-4 md:w-1/4 md:mt-8">
          <span className="font-semibold">Consultation</span>
          <ul className="flex-col space-y-2">
            <li>
              <Link to="/quote" className="text-gray-400 hover:text-white">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-gray-400 hover:text-white">
                Book Security
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-gray-400 hover:text-white">
                Consultation
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-gray-400 hover:text-white">
                Join Our Team
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact us & Social */}
        <div className="flex flex-col space-y-4 md:w-1/4 md:mt-8 md:pl-10">
          <span className="font-semibold">Contact Us</span>
          <div className="flex space-x-6">
            {constants.socials.map((social) => (
              <a href={social.link} className="text-white hover:text-gray-400">
                <Icon icon={social.icon} fontSize={20} />
              </a>
            ))}
          </div>
          <div className="text-white/60">
            <p>
              Address:{" "}
              <span className="ml-5 text-white">
                154 Maverick Street, Boston, MA 02128
              </span>
            </p>
            <p>
              Telephone: <span className="ml-3 text-white">781.471.8</span>
            </p>
            <p className="ml-24 text-white">781.816.0430</p>
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

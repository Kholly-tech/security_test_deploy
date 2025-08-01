import React from "react";
import { constants } from "../utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-4 sm:px-8 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Logo */}
        {/* <div className="mb-6 md:mb-0">
          <img
            src={constants.footerLogo}
            alt="LIFT Logo"
            className="w-20 h-8"
          />
        </div> */}

        {/* Links */}
        <div className="flex flex-col space-y-4 md:w-1/4">
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
        <div className="flex flex-col space-y-4 md:w-1/4">
          <span className="font-semibold">Consultation</span>
          <ul className="flex-col space-y-2">
            <li>
              <Link to="/quote" className="text-gray-400 hover:text-white">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-gray-400 hover:text-white">
                Book Security Consultation
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-gray-400 hover:text-white">
                Join Our Team
              </Link>
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
        <div className="flex flex-col space-y-4 md:w-1/4 md:pl-10">
          <span className="font-semibold">Social</span>
          <div className="flex space-x-4">
            {constants.socials.map((social) => (
              <a href={social.link} className="text-white hover:text-gray-400">
                <Icon icon={social.icon} fontSize={20} />
              </a>
            ))}
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

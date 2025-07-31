import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../utils/constants";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#3C18BE] h-20 flex items-center justify-between px-4 relative">
      <Link to={"/"} className="flex items-center gap-2">
        <img
          src={logo}
          className="w-[100px] md:w-[100px] h-[100px] -ml-2 md:-ml-4"
          alt="Logo"
        />
        <div className="flex flex-col text-white -ml-2 md:-ml-5 my-auto">
          <h1 className="text-secondary text-lg md:text-2xl font-semibold">
            SAFETY SECURITY, INC.
          </h1>
          <p className="text-secondary text-xs md:text-[17px] font-normal">
            securing your businesses and properties
          </p>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <div>
            <Link
              key={item.label}
              to={item.link}
              className="text-white hover:text-blue-200 font-medium underline-offset-2"
            >
              {item.label}
            </Link>
            {location.pathname === item.link && (
              <div className="bg-white h-0.25" />
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-8">
        {/* {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.link}
            className="text-white hover:text-blue-200 font-medium underline-offset-2"
          >
            {item.label}
          </Link>
        ))} */}
        <button
          type="button"
          onClick={() => navigate("/quote")}
          className="bg-white text-blue-800 p-3 font-semibold text-sm rounded-full cursor-pointer"
        >
          Request A Quote
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#3C18BE] flex flex-col items-center py-4 z-50 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="text-white py-2 w-full text-center hover:bg-blue-900"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="bg-white text-blue-800 p-3 font-semibold text-sm rounded-full mt-2 cursor-pointer"
            onClick={() => {
              navigate("/quote");
              setMenuOpen(false);
            }}
          >
            Request A Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

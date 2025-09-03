import React, { useEffect, useState } from "react";
import logo from "../assets/images/webp/logo1.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white text-blue-700 h-20 flex items-center justify-between px-4 relative">
      <Link to={"/"} className="flex items-center gap-2">
        <img
          src={logo}
          className="w-[140px] md:w-[140px] h-[140px] -ml-12 md:-ml-12"
          alt="Logo"
        />
        <div className="flex flex-col text-red-500 -ml-10 md:-ml-8 my-auto">
          <h1 className="text-secondary text-lg md:text-2xl font-semibold">
            SAFETY SECURITY, INC.
          </h1>
          <p className="text-blue-700 text-xs md:text-[17px] font-normal">
            securing your properties and businesses
          </p>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-10">
        {navItems.map((item, i) => (
          <div>
            <Link
              key={i}
              to={item.link}
              className=" hover:text-blue-900 font-medium underline-offset-2"
            >
              {item.label}
            </Link>
            {location.pathname === item.link && (
              <div className="bg-blue-700 h-0.5" />
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <button
          type="button"
          onClick={() => navigate("/quote")}
          className="bg-blue-800 text-white px-8 py-3 font-semibold text-sm rounded-full cursor-pointer"
        >
          Hire A Guard
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden text-[#6b47f0] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <Icon icon="ci:hamburger-md" fontSize={44} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 z-50 lg:hidden
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="text-blue-700 py-2 w-full text-center hover:bg-green/80"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <button
          type="button"
          className="bg-blue-800 text-white py-3 px-8 font-semibold text-sm rounded-full mt-2 cursor-pointer"
          onClick={() => {
            navigate("/quote");
            setMenuOpen(false);
          }}
        >
          Hire A Guard
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

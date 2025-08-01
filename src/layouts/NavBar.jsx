import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";

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
        <Icon icon="ci:hamburger-md" fontSize={44} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          absolute top-20 left-0 w-full bg-[#3C18BE] flex flex-col items-center py-4 z-50 lg:hidden
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
    </nav>
  );
};

export default NavBar;

import React from "react";
import serviceHero from "../assets/images/serviceHero.png";
import SecuritySolutions from "../components/home/SecuritySolutions";
import { constants } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="
  relative w-full 
  min-h-[60vh] 
  sm:min-h-[70vh] 
  md:min-h-[calc(100vh-80px)] 
  flex items-center justify-center overflow-hidden
"
      >
        <img
          src={serviceHero}
          alt="Service Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto gap-4 flex-col">
            <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 tracking-wider leading-tight">
              OUR SERVICES
            </h1>
            <h2 className="text-white/90 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
              Your Safety is Our Priority, Explore Our Range of Services
            </h2>
            <div className="mt-2 sm:mt-6">
              <button
                type="button"
                className="bg-white text-blue-800 p-3 px-8 font-semibold text-sm rounded-full mt-2 cursor-pointer"
                onClick={() => {
                  navigate("/quote");
                  setMenuOpen(false);
                }}
              >
                Book a Guard
              </button>
            </div>
          </div>
        </div>
      </section>

      <SecuritySolutions solutions={constants.serviceData} />

      <div className="bg-indigo-900 text-white pb-6 md:pb-0 mb-8 md:mb-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Security Guard Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
            <img
              src={serviceHero}
              alt="Security Guard"
              className="w-full h-auto"
            />
          </div>

          {/* Benefits Section */}
          <div className="w-full md:w-1/2 px-4 sm:px-8 lg:px-12">
            <h2 className="text-2xl font-bold ">
              Protect What Matters Most. Partner with Safety Security, Inc.
            </h2>
            <p className="text-sm mb-4">
              Secure your business, property, or event today with highly trained
              and dependable security professionals.
            </p>
            <div className="mt-6 flex flex-row-reverse gap-6 space-x-4 mx-auto items-center justify-center md:justify-center">
              <Link
                to="/team"
                className="text-[18px] md:text-xl font-bold text-white hover:text-accent"
              >
                Join Our Team
              </Link>
              <button
                className="bg-white text-[#2C1678] px-4 py-4 rounded-full hover:bg-accent transition duration-300"
                onClick={() => navigate("/quote")}
              >
                Get a Security Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

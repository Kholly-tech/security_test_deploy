import React from "react";
import heroImage from "../assets/images/hero.jpg";

const UnderConstruction = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Image"
        className="w-full h-screen object-cover absolute inset-0"
      />
      <div className="w-full h-screen bg-black/50 absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 md:mb-8 tracking-wider leading-tight">
            COMING SOON
          </h1>
          <h2 className="text-white/90 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
            WEBSITE UNDER MAINTENANCE
          </h2>
          <div className="mt-8 sm:mt-12">
            <div className="w-32 sm:w-48 h-1 bg-white mx-auto rounded-full">
              {/* <div className="w-3/4 bg-[#3C18BE] rounded-full mx-auto"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;

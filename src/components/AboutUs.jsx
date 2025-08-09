import React from "react";
import secureIcon from "../assets/icons/Vector.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import aboutImage1 from "../assets/images/about1.png";
import aboutImage2 from "../assets/images/about2.png";
import { useNavigate } from "react-router-dom";
import { constants } from "../utils/constants";

const AboutUs = ({ source = "about" }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full py-16 px-6 sm:px-8 md:px-12 lg:px-18">
      <div className=" mx-auto flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-0 items-center justify-between">
        {/* Right Section: Description */}
        <div className="w-full text-start md:w-1/2 mb-8 md:mb-0">
          <p className="text-[16px] md:text-lg lg:text-xl">{source === 'home' ? constants.homeAboutUs1 : constants.homeAboutUs2}</p>
          {source === "about" && (
            <>
              <p className="md:text-lg lg:text-xl mt-8">
                We pride ourselves on discretion, professionalism, and attention
                to detail. Every security plan is customized to address your
                specific needs.
              </p>
              <p className="font-bold lg:text-xl">
                Your safety is our priority anytime, anywhere
              </p>
            </>
          )}

          {/* Button */}
          {source !== "about" && (
            <button
              className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-indigo-800 transition duration-300 cursor-pointer"
              onClick={() => navigate("/about#about")}
            >
              Read More
            </button>
          )}
        </div>

        {/* Left Section: Image with Text Overlay */}
        <div className="w-full md:w-1/2 md:mr-8">
          <img src={ source === "home" ? aboutImage1 : aboutImage2 } alt="Guard" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

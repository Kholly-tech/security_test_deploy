import React from "react";
import secureIcon from "../assets/icons/Vector.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import aboutImage1 from "../assets/images/about1.png";
import aboutImage2 from "../assets/images/about2.png";
import { useNavigate } from "react-router-dom";
import { constants } from "../utils/constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

const AboutUs = ({ source = "about" }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-white w-full py-16 px-6 sm:px-8 md:px-12 lg:px-18`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`mx-auto flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-12 lg:gap-16 items-center justify-between ${
          source == "home" && "max-w-7xl"
        }`}
      >
        {/* Right Section: Description */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <div className="space-y-6">
            <p className="text-[16px] md:text-lg lg:text-xl leading-relaxed text-gray-700">
              {source === "home"
                ? constants.homeAboutUs1
                : constants.homeAboutUs2}
            </p>

            {source === "about" && (
              <>
                <p className="md:text-lg lg:text-xl leading-relaxed text-gray-700">
                  We pride ourselves on discretion, professionalism, and
                  attention to detail. Every security plan is customized to
                  address your specific needs.
                </p>
                <p className="font-bold lg:text-xl text-gray-900 mt-6">
                  Your safety is our priority anytime, anywhere
                </p>
              </>
            )}

            {/* Button */}
            {source !== "about" && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-indigo-800 transition duration-300 cursor-pointer"
                onClick={() => navigate("/about#about")}
              >
                Read More
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Left Section: Image with Text Overlay */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          className="w-full md:w-1/2"
        >
          <div className="relative w-full aspect-w-4 aspect-h-3">
            <img
              src={source === "home" ? aboutImage1 : aboutImage2}
              alt="Guard"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;

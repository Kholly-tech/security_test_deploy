import React from "react";
import WhoWeServe from "../components/home/WhoWeServe";
import Testimonials from "../components/home/Testimonials";
import heroImage from "../assets/images/webp/hero5.webp";
import AboutUs from "../components/AboutUs";
import CTA from "../components/home/CTA";
import Values from "../components/about/Values";
import Stats from "../components/about/Stats";
import Mission from "../components/about/Mission";
import { useNavigate } from "react-router-dom";
import Reasons from "../components/about/Reasons";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="
  relative w-full 
  min-h-[60vh] 
  sm:min-h-[70vh] 
  md:min-h-[calc(100vh-200px)] 
  lg:min-h-[calc(100vh-180px)] 
  flex items-center justify-center overflow-hidden
"
      >
        <img
          src={heroImage}
          alt="Hero Video"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto gap-4 flex-col">
            <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 tracking-wider leading-tight">
              About Safety Security, Inc.
            </h1>
            <h2 className="text-white/90 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
              Protecting people, properties, and peace of mind with trusted,
              licensed professionals
            </h2>
            <div className="mt-2 sm:mt-6">
              <motion.button
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: 0.2,
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 text-white py-3 px-8 font-semibold text-sm rounded-full mt-2 cursor-pointer"
                onClick={() => navigate("/quote")}
              >
                Book Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <div id="#about">
        <AboutUs />
      </div>

      <Mission />

      <Values stage={1} />
      <Reasons />

      {/* <Testimonials /> */}
      <section className="py-12">
        <CTA />
      </section>
    </div>
  );
};

export default About;

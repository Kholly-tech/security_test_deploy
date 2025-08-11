import React, { useEffect, useState, useRef } from "react";
import heroImage from "../assets/images/hero.jpg";
import heroVideo from "../assets/vids/ss.mp4";
import WhoWeServe from "../components/home/WhoWeServe";
import PartnerWithUs from "../components/home/Patnership";
import SecuritySolutions from "../components/home/SecuritySolutions";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import AboutUs from "../components/AboutUs";
import { constants } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import LineAnimate from "../components/home/LineAnimate";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full  ">
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
          src={heroImage}
          alt="Hero Video"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
          <div className="px-8 md:px-16 lg:px-30 max-w-4xl lg:max-w-5xl gap-4 flex-col text-start">
            <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-3xl lg:text-5xl mb-4 tracking-wider leading-tight relative">
              Professional Security Services You{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Can Rely On</span>
                {/* Animated Red Oval SVG */}
                <LineAnimate animate={animate} />
              </span>
            </h1>
            <h2 className="text-white/90 font-normal sm:text-lg md:text-xl lg:text-2xl tracking-wide">
              We protect what matters most with dependable, highly trained
              security officers who are responsive and reliable, safeguarding
              assets, businesses, and events for perpetual peace of mind
            </h2>
            <div className="mt-2 sm:mt-6">
              <motion.button
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.5,
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 text-white py-3 px-8 font-semibold text-sm rounded-full mt-2 cursor-pointer"
                onClick={() => navigate("/quote")}
              >
                Request A Quote
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-8">
        <WhoWeServe />
      </section>

      {/* About Section */}
      <AboutUs source="home" />

      {/* Security Solutions */}
      <section className="py-8">
        <SecuritySolutions solutions={constants.securityData} />
      </section>

      {/* Partner With Us */}
      <section className="py-8">
        <PartnerWithUs border />
      </section>

      {/* Testimonials */}
      <section className="py-8">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;

// WELCOME TO SAFETY SECURITY, INC.

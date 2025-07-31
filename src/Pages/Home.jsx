import React from "react";
import heroImage from "../assets/images/hero.jpg";
import heroVideo from "../assets/vids/ss.mp4";
import WhoWeServe from "../components/home/WhoWeServe";
import PartnerWithUs from "../components/home/Patnership";
import SecuritySolutions from "../components/home/SecuritySolutions";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import AboutUs from "../components/AboutUs";
import { constants } from "../utils/constants";

const Home = () => {

  return (
    <div className="w-full  ">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          alt="Hero Video"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto gap-4 flex-col">
            <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 tracking-wider leading-tight">
              WELCOME TO SAFETY SECURITY, INC.
            </h1>
            <h2 className="text-white/90 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
              EXPERTS IN PROVIDING SECURITY SERVICES
            </h2>
            <div className="mt-2 sm:mt-6">
              <div className="w-48 sm:w-2xl md:w-3xl h-1 bg-white mx-auto rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutUs />

      {/* Industries We Serve */}
      <section className="py-8">
        <WhoWeServe />
      </section>

      {/* Partner With Us */}
      <section className="py-8">
        <PartnerWithUs />
      </section>

      {/* Security Solutions */}
      <section className="py-8">
        <SecuritySolutions solutions={constants.securityData} />
      </section>

      {/* Call to Action */}
      <CTA />

      {/* Testimonials */}
      <section className="py-8">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;

// WELCOME TO SAFETY SECURITY, INC.

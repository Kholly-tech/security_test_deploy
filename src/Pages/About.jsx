import React from 'react'
import WhoWeServe from '../components/home/WhoWeServe'
import Testimonials from '../components/home/Testimonials'
import heroImage from '../assets/images/hero.jpg';
import AboutUs from '../components/AboutUs';
import CTA from '../components/home/CTA';
import TopSection from '../components/about/Values';
import BottomSection from '../components/about/Stats';
import Mission from '../components/about/Mission';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Hero Video"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto gap-4 flex-col">
            <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 tracking-wider leading-tight">
              ABOUT SAFETY SECURITY, INC.
            </h1>
            <h2 className="text-white/90 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
              EXPERTS IN PROVIDING SECURITY SERVICES
            </h2>
            <div className="mt-2 sm:mt-6">
              <div className="w-48 sm:w-xl md:w-2xl lg:w-3xl h-1 bg-white mx-auto rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <AboutUs />

      <Mission />

      <TopSection />
      <BottomSection />

      <Testimonials />
      <CTA />
    </div>
  );
}

export default About
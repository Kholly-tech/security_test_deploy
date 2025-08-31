import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Partnering with this security team was one of the best decisions we made for our office complex. Their guards are professional, punctual, and always alert. We've seen a noticeable improvement in both employee confidence and overall safety. I highly recommend their services to any business looking for reliable security support.",
      author: "James R., Property Manager, Boston, MA",
    },
    {
      quote:
        "Outstanding service! The security personnel are well-trained and maintain excellent communication throughout their shifts. They've handled several situations with professionalism and discretion. Our retail store has never felt more secure.",
      author: "Sarah M., Store Manager, Boston, MA",
    },
    {
      quote:
        "We've been working with this security company for over two years, and they consistently exceed our expectations. Their 24/7 monitoring service gives us peace of mind, and their rapid response times are impressive.",
      author: "Michael Chen, Facility Director, Boston, MA",
    },
    {
      quote:
        "Exceptional security services for our corporate events. The team coordinates seamlessly with our staff and ensures all guests feel safe and welcome. Their attention to detail and professional demeanor make them our go-to choice.",
      author: "Amanda Rodriguez, Event Coordinator, Boston, MA",
    },
    {
      quote:
        "From the initial consultation to ongoing service delivery, this company has been fantastic. Their security guards are not just protectors but also ambassadors of our brand. They treat our premises with respect and our visitors with courtesy.",
      author: "David Thompson, Operations Manager, Boston, MA",
    },
  ];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-white text-white mb-6 py-16 px-4 sm:px-8 lg:px-32">
      <div className="max-w-xl mx-auto text-black">
        <h2 className="text-center text-3xl font-bold mb-8">
          Reviews Speaks For Us
        </h2>
        <div className="relative min-h-[200px] flex items-center">
          {/* Sliding Content */}
          <div
            className="w-full transition-all duration-700 ease-in-out"
            key={currentIndex}
          >
            <p className="text-lg text-center text-black/60 font-medium italic mb-4 animate-fade-in">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="text-center text-lg text-black/70 font-semibold animate-fade-in-delay">
              — {testimonials[currentIndex].author}
            </p>
          </div>
        </div>

        {/* Simple Dot Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

<style jsx>{`
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.7s ease-out forwards;
  }

  .animate-fade-in-delay {
    animation: fade-in 0.7s ease-out 0.2s forwards;
    opacity: 0;
  }
`}</style>;

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-indigo-900 text-white mb-10 py-16 px-4 sm:px-8 lg:px-32">
      <div className="max-w-xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="relative">
          {/* Quote */}
          <p className="text-lg italic mb-4">
            "Partnering with this security team was one of the best decisions we
            made for our office complex. Their guards are professional,
            punctual, and always alert. We've seen a noticeable improvement in
            both employee confidence and overall safety. I highly recommend
            their services to any business looking for reliable security
            support."
          </p>

          {/* Attributed to */}
          <p className="text-center font-semibold">
            — James R., Property Manager, Boston, MA
          </p>

          {/* Background shape */}
          <div className="absolute top-50 left-0 w-3/3 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2">
            <Icon
              icon="mdi:shield"
              width="72"
              height="72"
              className="w-full h-auto text-white border-2 border-red-950"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

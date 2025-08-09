import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-white   text-white mb-6 py-16 px-4 sm:px-8 lg:px-32">
      <div className="max-w-xl mx-auto text-black">
        <h2 className="text-center text-3xl font-bold mb-8">
          Reviews Speaks For Us
        </h2>
        <div className="relative">
          {/* Quote */}
          <p className="text-lg text-center text-black/60 font-medium italic mb-4">
            "Partnering with this security team was one of the best decisions we
            made for our office complex. Their guards are professional,
            punctual, and always alert. We've seen a noticeable improvement in
            both employee confidence and overall safety. I highly recommend
            their services to any business looking for reliable security
            support."
          </p>

          {/* Attributed to */}
          <p className="text-center text-lg text-black/70 font-semibold">
            — James R., Property Manager, Boston, MA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="shadow-md bg-white rounded-xl mx-4 md:mx-16 lg:mx-30 p-16 px-4 sm:px-8 lg:px-32 text-center">
      <p className="text-xl text-black/80 font-semibold max-w-3xl mx-auto mb-10">
        Ready to take your security to the next level? From urgent deployments
        to long-term protection, our guards are trained, vetted, and ready
      </p>
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
        className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold cursor-pointer"
        onClick={() => navigate("/quote")}
      >
        Make Enquiry
      </motion.button>
    </section>
  );
};

export default CTA;

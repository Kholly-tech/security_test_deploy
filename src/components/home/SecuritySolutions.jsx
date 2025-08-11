import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../utils/animations";

const SecuritySolutions = ({ solutions }) => {
  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-black/65 text-center"
      >
        Security Solutions We Offer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[15px] md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-center text-black/55"
      >
        At Safety Security, Inc., we provide special security services
        customized to ensure the safety of property, people, and businesses
      </motion.p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            whileHover={{ y: -10 }}
            className="bg-white shadow-lg flex flex-col items-center rounded-xl p-4 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <motion.img
              src={solution.image}
              alt={solution.title}
              className="w-full h-60 object-cover mb-4 rounded-t-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Title */}
            <h3 className="text-lg text-center font-semibold mb-4">
              {solution.title}
            </h3>

            {/* Description */}
            <p className="flex-1 text-gray-700 text-center w-full max-w-xs mx-auto text-sm md:text-[18px]">
              {solution.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 text-red-500/90 font-medium items-end justify-end cursor-pointer"
            >
              Get Service
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySolutions;

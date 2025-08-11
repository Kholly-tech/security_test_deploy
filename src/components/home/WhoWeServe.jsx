// 08089243417
import React from "react";
import { constants } from "../../utils/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhoWeServe = () => {
  const title = "INDUSTRIES WE SERVE";
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Character animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-5 md:px-10 lg:px-16 w-full items-center justify-center text-center">
      <motion.h1
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-[#3C18BE] text-2xl font-bold mb-7 overflow-hidden"
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={item} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
        {constants.whoWeServe.map((who, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`px-3 py-5 shadow-lg rounded-md hover:shadow-xl hover:bg-blue-100 hover:text-blue-600 transition-shadow duration-300`}
          >
            <div className="flex flex-row items-center justify-start">
              <img
                src={who.icon}
                className="w-16 md:w-20 h-16 md:h-20 hover:text-blue-700"
                alt={who.title}
              />
              <h3 className="font-bold text-[17px] ml-2 ">{who.title}</h3>
            </div>
            <p className="text-start text-sm px-2 py-4">{who.descriptions}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeServe;
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Reasons = () => {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "With over a decade of service, we've protected hundreds of clients with our reliable security solutions."
    },
    {
      title: "Rapid Response Team",
      description: "Our 24/7 response team can be on-site within minutes of an emergency call."
    },
    {
      title: "Licensed, Insured, & Vetted",
      description: "All our personnel undergo rigorous background checks and continuous training."
    },
    {
      title: "Customized Security Solutions",
      description: "We tailor our services to meet your specific security needs and budget."
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-4 md:px-16 lg:px-30 text-center mt-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-lg md:text-xl lg:text-2xl font-semibold font-mono'
      >
        Why Clients Trust Us
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-[16px] md:text-lg lg:text-xl mb-4 md:mb-10'
      >
        Trusted by dozens of clients across residential & commercial spaces
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center">
        {reasons.map((reason, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative col-span-12 overflow-hidden rounded-xl ${
              index === 0 ? 'md:col-span-7' : 
              index === 1 ? 'md:col-span-5' : 
              index === 2 ? 'md:col-span-5' : 'md:col-span-7'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-blue-700 p-8 py-24 text-center text-white font-bold text-lg">
              {reason.title}
            </div>
            
            <motion.div 
              className="absolute inset-0 bg-blue-900 flex items-center justify-center p-4"
              initial={{ y: "100%" }}
              animate={{ 
                y: hoveredIndex === index ? "0%" : "100%",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <p className="text-white text-sm md:text-base">{reason.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Reasons;
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CTA = () => {
    const navigate = useNavigate();
  return (
    <section className="shadow-md bg-white rounded-xl mx-4 md:mx-16 lg:mx-30 p-16 px-4 sm:px-8 lg:px-32 text-center">
      <p className="text-xl text-black/80 font-semibold max-w-3xl mx-auto mb-10">
        Ready to take your security to the next level? From urgent deployments
        to long-term protection, our guards are trained, vetted, and ready
      </p>
      <button
        className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold cursor-pointer"
        onClick={() => navigate("/quote")}
      >
        Make Enquiry
      </button>
    </section>
  );
}

export default CTA
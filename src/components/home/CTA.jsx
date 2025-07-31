import React from 'react'
import { useNavigate } from 'react-router-dom';

const CTA = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-[#3C18BE] text-white rounded-xl mx-3 md:mx-8 lg:mx-16 p-16 px-4 sm:px-8 lg:px-32 text-center">
      <p className="text-xl font-semibold max-w-3xl mx-auto mb-4">
        Ready to take your security to the next level? From urgent deployments
        to long-term protection, our guards are trained, vetted, and ready
      </p>
      <button
        className="bg-white text-indigo-900 px-6 py-2 rounded-full font-semibold"
        onClick={() => navigate("/quote")}
      >
        Get a Quote
      </button>
    </section>
  );
}

export default CTA
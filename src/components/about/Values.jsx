import React from "react";
import { CheckCircle } from "../home/Patnership";
import { Link, useNavigate } from "react-router-dom";
import serviceHero from "../../assets/images/serviceHero.png";

const Values = ({ stage }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-white text-black ${
        stage === 1 ? "py-12 px-6 md:px-24" : "pb-6 md:pb-0"
      }`}
    >
      {stage == 1 && (<h2 className="text-2xl font-bold mb-6 md:px-10">Our Value and Philosophy</h2>)}
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Side: Description */}
        {stage === 1 && (
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-5">
            <p className="text-black md:text-lg lg:text-xl leading-relaxed items-end md:text-end">
              Our approach to service delivery is rooted in a people-first
              philosophy and a strong commitment to collaboration. We believe
              effective security starts with understanding the unique needs of
              our clients, which is why we focus on the entire customer journey,
              viewing our security solutions through the lens of those we
              protect. Our goal is to demonstrate the real, measurable value
              that professional security brings to businesses, communities, and
              events.
            </p>
            <div className="hidden mt-6 md:flex space-x-4 items-center justify-end">
              <Link
                to="/team"
                className="text-sm font-semibold text-black hover:text-accent"
              >
                Join Our Team
              </Link>
              <button
                className="bg-blue-700 text-white px-6 py-4 rounded-full hover:bg-accent transition duration-300 cursor-pointer"
                onClick={() => navigate("/quote")}
              >
                Book Our Service
              </button>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={serviceHero}
              alt="Image"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Right Side: Values */}
        <div className="w-full md:w-1/2 px-5">
          {stage === 2 && (
            <h2 className="text-center text-xl md:text-3xl my-4 font-bold">
              WHY JOIN US
            </h2>
          )}
          <div className="flex flex-col items-start justify-center space-y-8 w-full max-w-3xl mx-auto">
            <div className="flex items-center">
              <CheckCircle border={false} />
              <div>
                <h3 className="text-xl font-bold mb-2">INTEGRITY</h3>
                <p className="text-black">
                  We act with honesty, transparency, and accountability in every
                  decision, ensuring our clients can trust us without
                  compromise.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <CheckCircle />
              <div>
                <h3 className="text-xl font-bold mb-2">PROFESSIONALISM</h3>
                <p className="text-black">
                  We maintain the highest standards of conduct, appearance, and
                  performance in all our operations.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <CheckCircle />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  EXCELLENCE IN EXECUTION
                </h3>
                <p className="text-black">
                  We strive for excellence in every assignment, big or small,
                  because every detail matters in security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {stage === 1 && (
          <div className="md:hidden mt-6 flex space-x-4 mx-auto items-center justify-end">
            <Link
              to="/team"
              className="text-sm font-semibold text-black hover:text-accent"
            >
              Join Our Team
            </Link>
            <button
              className="bg-blue-700 text-white px-6 py-4 rounded-full hover:bg-accent transition duration-300 cursor-pointer"
              onClick={() => navigate("/quote")}
            >
              Book Our Service
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Values;

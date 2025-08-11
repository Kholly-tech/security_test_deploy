import React from "react";

const LineAnimate = ({ animate }) => {
  return (
    <>
      {/* Mobile Version (default) - sm and below */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none sm:hidden"
        width="200"
        height="80"
        viewBox="0 0 130 80"
        style={{
          width: "calc(100% + 80px)",
          height: "calc(100% + 20px)",
        }}
      >
        <ellipse
          cx="70"
          cy="40"
          rx="120"
          ry="30"
          fill="none"
          stroke="#ef4444"
          strokeWidth="4"
          strokeDasharray="600"
          strokeDashoffset={animate ? "0" : "600"}
          style={{
            transition: "stroke-dashoffset 2s ease-in-out",
            filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))",
          }}
        />
      </svg>

      {/* Medium Screens (Tablet) - sm to lg */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block lg:hidden"
        width="250"
        height="90"
        viewBox="0 0 160 90"
        style={{
          width: "calc(100% + 60px)",
          height: "calc(100% + 25px)",
        }}
      >
        <ellipse
          cx="80"
          cy="45"
          rx="140"
          ry="35"
          fill="none"
          stroke="#ef4444"
          strokeWidth="5"
          strokeDasharray="700"
          strokeDashoffset={animate ? "0" : "700"}
          style={{
            transition: "stroke-dashoffset 2.5s ease-in-out",
            filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.7))",
          }}
        />
      </svg>

      {/* Large Screens (Desktop) - lg and above */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        width="300"
        height="100"
        viewBox="0 0 200 100"
        style={{
          width: "calc(100% + 40px)",
          height: "calc(100% + 30px)",
        }}
      >
        <ellipse
          cx="100"
          cy="50"
          rx="180"
          ry="40"
          fill="none"
          stroke="#ef4444"
          strokeWidth="6"
          strokeDasharray="800"
          strokeDashoffset={animate ? "0" : "800"}
          style={{
            transition: "stroke-dashoffset 3s ease-in-out",
            filter: "drop-shadow(0 0 12px rgba(239, 68, 68, 0.8))",
          }}
        />
      </svg>
    </>
  );
};

export default LineAnimate;

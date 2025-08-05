import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [counts, setCounts] = useState({
    happyClients: 0,
    securityGuards1: 0,
    securityGuards2: 0,
    securityGuards3: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [animeted, setAnimated] = useState(false);
  const statsRef = useRef(null);

  const targetCounts = {
    happyClients: 100,
    securityGuards1: 50,
    securityGuards2: 50,
    securityGuards3: 50,
  };

  const duration = 2000; // Animation duration in milliseconds

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of component is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        happyClients: Math.floor(progress * targetCounts.happyClients),
        securityGuards1: Math.floor(progress * targetCounts.securityGuards1),
        securityGuards2: Math.floor(progress * targetCounts.securityGuards2),
        securityGuards3: Math.floor(progress * targetCounts.securityGuards3),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  return (
    <div ref={statsRef} className="bg-white my-20 py-12 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1: Happy Clients */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <Icon
            icon="fa7-regular:laugh"
            fontSize={44}
            className="items-center text-red-500 font-bold"
          />
          <h3 className="text-2xl font-bold mt-2 text-primary">
            {counts.happyClients}+
          </h3>
          <p className="text-gray-600">HAPPY CLIENTS</p>
        </div>

        {/* Card 2: Security Guards */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <Icon icon="hugeicons:prison-guard" fontSize={44} className="text-red-500 font-bold" />
          <h3 className="text-2xl font-bold mt-2 text-primary">
            {counts.securityGuards1}+
          </h3>
          <p className="text-gray-600">SECURITY GUARDS</p>
        </div>

        {/* Card 3: Security Guards */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <Icon icon="hugeicons:prison-guard" fontSize={44} className="text-red-500 font-bold" />
          <h3 className="text-2xl font-bold mt-2 text-primary">
            {counts.securityGuards2}+
          </h3>
          <p className="text-gray-600">SECURITY GUARDS</p>
        </div>

        {/* Card 4: Security Guards */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <Icon icon="hugeicons:prison-guard" fontSize={44} className="text-red-500 font-bold" />
          <h3 className="text-2xl font-bold mt-2 text-primary">
            {counts.securityGuards3}+
          </h3>
          <p className="text-gray-600">SECURITY GUARDS</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

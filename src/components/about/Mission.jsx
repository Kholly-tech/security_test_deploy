import React from 'react'
import Card from '../ui/Card'

const Mission = () => {
  return (
    <div className="flex-col md:flex-row justify-center mx-auto p-4">
      <Card
        icon={""}
        title="OUR MISSION"
        description="Our mission is to provide comprehensive and reliable security solutions that ensure our clients' safety and peace of mind. We are committed to delivering exceptional security services, building trust, and cultivating long-lasting partnerships with our clients."
      />

      {/* Our Vision */}
      <Card
        icon={""}
        title="OUR VISION"
        description="To be the most trusted and reliable security partner in Boston and beyond, setting the standard for excellence in protection, professionalism, and client satisfaction through innovation, integrity, and unwavering commitment to safety."
      />
    </div>
  );
}

export default Mission
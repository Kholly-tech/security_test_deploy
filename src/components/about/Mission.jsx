import React from 'react'
import Card from '../ui/Card'
import mission from '../../assets/icons/mission.svg';
import vission from '../../assets/icons/vission.svg';

const Mission = () => {
  return (
    <div className='items-center justify-center '>
      <h3 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mb-1'>Our Vision, Mission, And Value</h3>
      <div className="grid md:grid-cols-2 pb-16 px-2 md:px-8 lg:px-16 justify-center mx-auto">
        <Card
          icon={<img src={mission} className="p-1" />}
          title="OUR MISSION"
          description="Our mission is to provide comprehensive and reliable security solutions that ensure our clients' safety and peace of mind. We are committed to delivering exceptional security services, building trust, and cultivating long-lasting partnerships with our clients."
        />
        {/* Our Vision */}
        <Card
          icon={<img src={vission} className="p-1" />}
          title="OUR VISION"
          description="To be the most trusted and reliable security partner in Boston and beyond, setting the standard for excellence in protection, professionalism, and client satisfaction through innovation, integrity, and unwavering commitment to safety."
        />
      </div>
    </div>
  );
}

export default Mission
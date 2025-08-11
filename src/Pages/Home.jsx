import WhoWeServe from "../components/home/WhoWeServe";
import PartnerWithUs from "../components/home/Patnership";
import SecuritySolutions from "../components/home/SecuritySolutions";
import Testimonials from "../components/home/Testimonials";
import AboutUs from "../components/AboutUs";
import { constants } from "../utils/constants";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  return (
    <div className="w-full  ">
      {/* Hero Section */}
      <HeroSection />

      {/* Industries We Serve */}
      <section className="py-8">
        <WhoWeServe />
      </section>

      {/* About Section */}
      <AboutUs source="home" />

      {/* Security Solutions */}
      <section className="py-8">
        <SecuritySolutions solutions={constants.securityData} />
      </section>

      {/* Partner With Us */}
      <section className="py-8">
        <PartnerWithUs border />
      </section>

      {/* Testimonials */}
      <section className="py-8">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;

// WELCOME TO SAFETY SECURITY, INC.

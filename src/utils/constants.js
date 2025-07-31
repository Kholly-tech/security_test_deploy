import serve1 from "../assets/icons/serve1.svg";
import serve2 from "../assets/icons/serve2.svg";
import serve3 from "../assets/icons/serve3.svg";
import serve4 from "../assets/icons/serve4.svg";
import logoLift from "../assets/icons/logoLift.svg";

import solution1 from '../assets/images/solution1.png';
import solution2 from '../assets/images/solution2.png';
import solution3 from '../assets/images/solution3.png';
import solution4 from '../assets/images/solution4.png';

export const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Our Services", link: "/services" },
  { label: "Contact Us", link: "/contact" },
];

export const constants = {
  footerLogo: logoLift,
  footerData: [
    {
      top: "Company",
      data: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "About Us",
          link: "/about",
        },
        {
          label: "Our Services",
          link: "/services",
        },
      ],
    },
    {
      top: "Consultation",
      data: [
        {
          label: "Request A Quote",
          link: "",
        },
        {
          label: "Book Security",
          link: "",
        },
        {
          label: "Consultation",
          link: "",
        },
        {
          label: "Join Our Team",
          link: "",
        },
      ],
    },
    {
      top: "Contact Us",
      data: [
        {
          label: "Hotel Reservation",
          link: "",
        },
        {
          label: "Ticket Office",
          link: "",
        },
        {
          label: "Consultation",
          link: "",
        },
        {
          label: "Join Our Team",
          link: "",
        },
      ],
    },
    {
      top: "Social",
      data: [
        {
          label: "Facebook",
          icon: "",
        },
        {
          label: "InstaGram",
          icon: "",
        },
        {
          label: "Twittwr",
          icon: "",
        },
        {
          label: "Youtube",
          icon: "",
        },
      ],
    },
  ],
  homeAboutUs1:
    "We are a professional security guard company based in Boston, MA, with over 17 years of experience, we are committed to protecting what matters most. With a team of licensed and highly trained security personnel, we provide reliable security services for businesses, events, residential communities, and financial institutions across Boston and surrounding areas.",
  homeAboutUs2:
    "Our mission is to deliver safety, peace of mind, and exceptional service through integrity, vigilance, and professionalism. Whether you need armed guards, mobile patrols, or event security, we tailor our solutions to meet your unique needs with precision and care.",
  navItems: [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Our Services", link: "/services" },
    { label: "Contact Us", link: "/contact" },
  ],
  whoWeServe: [
    {
      title: "RESIDENTIALS",
      descriptions:
        "From gated estates to private residence, we provide both armed and unarmed guards for continuous protection, patrols, CCTV monitoring, and access control, ensuring a secure and stable living environment for residents",
      icon: serve1,
    },
    {
      title: "CORPORATE & COMMERCIALS",
      descriptions:
        "We provide trained security guards for office buildings, business complexes, and commercial properties to manage access control, monitor CCTV systems, and deter unauthorized activities. ",
      icon: serve2,
    },
    {
      title: "SPECIAL EVENTS",
      descriptions:
        "Whether you’re organizing a large-scale event in New York, Los Angeles, Houston, Chicago, or a private celebration in your city, our reliable event security solutions are designed to prevent disruptions and keep your event running smoothly",
      icon: serve3,
    },
    {
      title: "FINANCIAL INSTITUTIONS ",
      descriptions:
        "With deep knowledge of local regulations and industry best practices, we serve financial institutions across Boston, Cambridge, Quincy, Brookline, Somerville, and beyond. Our services include armed and unarmed security personnel, 24/7 surveillance monitoring, ATM and vault protection, and more",
      icon: serve4,
    },
  ],
  patnershipData: [
    {
      title: "Advanced Technology Integration",
      description:
        "We combine manpower with surveillance systems, mobile patrol tracking, and access control technologies",
    },
    {
      title: "Proven Track Record",
      description:
        "We serve clients across industries, from finance to real estate with consistent excellence and long-term relationships",
    },
    {
      title: "Fully Insured & Compliant",
      description:
        "We are fully insured and compliant with all Massachusetts and federal security regulations",
    },
    {
      title: "Local Expertise with National Standards",
      description:
        "Headquartered in Boston, MA, we understand the local environment while upholding national security best practices",
    },
    {
      title: "Strong Crime Deterrence",
      description:
        "Our professionally uniformed guards provide a strong visual presence that actively deters theft, vandalism, and unauthorized activity",
    },
  ],
  securityData: [
    {
      image: solution1,
      title: "ARMED/UNARMED GUARDS",
      desc: "Our security guards are trained and customized to meet your specific needs",
      description:
        "These armed and unarmed security officers are deployed to deliver security services across various locations. They are available 24/7.",
    },
    {
      image: solution2,
      title: "ARMED/UNARMED PATROL GUARDS",
      desc: "Our patrol guards are available for 24hours",
      description:
        "Our mobile patrol guard services offer flexible, high-visibility security coverage for large properties, warehouses, construction sites, and gated communities.",
    },
    {
      image: solution3,
      title: "PRIVATE SECURITY",
      desc: "At Safety Security, Inc., we offer private security you can trust",
      description:
        "If you are seeking personal protection or considering hiring security guards, Safety Security, Inc. is here to assist you.",
    },
    {
      image: solution4,
      title: "CONCIERGE SECURITY",
      desc: "We provide both protection and customer service",
      description:
        "Our concierge security services combine front desk assistance with professional protection. Perfect for upscale residential buildings, hotels, and corporate lobbies.",
    },
  ],
};

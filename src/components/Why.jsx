import React from "react";
import { FaUsers, FaTools, FaTag, FaHeadset, FaShieldAlt } from "react-icons/fa";
import "./why.css";

const Why = () => {
  const cards = [
    {
      title: "Experienced & Skilled Team",
      description:
        "Our team is highly experienced and skilled in providing top-notch solutions.",
      icon: <FaUsers />,
      backgroundColor: "#007bff",
    },
    {
      title: "Quality Materials & Workmanship",
      description:
        "We use the best materials and deliver unmatched craftsmanship for every project.",
      icon: <FaTools />,
      backgroundColor: "#28a745",
    },
    {
      title: "Competitive Pricing",
      description:
        "We provide cost-effective solutions without compromising on quality.",
      icon: <FaTag />,
      backgroundColor: "#ffc107",
    },
    {
      title: "Excellent Customer Service",
      description:
        "We prioritize our customers and ensure excellent support every step of the way.",
      icon: <FaHeadset />,
      backgroundColor: "#17a2b8",
    },
    {
      title: "10-Year Warranty",
      description:
        "We stand behind our work with a 10-year warranty for your peace of mind.",
      icon: <FaShieldAlt />,
      backgroundColor: "#8e44ad",
    },
  ];

  return (
    <section className="why-choose-us-section">
      <h1 className="top why-choose-us-title">Why Choose Us</h1>
      <div className="why-choose-us-container">
        {cards.map((item, index) => (
          <div key={index} className="why-choose-us-card">
            <div 
              className="why-choose-us-icon-container" 
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className="why-choose-us-icon">{item.icon}</div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;

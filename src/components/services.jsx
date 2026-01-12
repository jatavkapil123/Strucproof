import React from "react";
import { motion } from "framer-motion";
import {
  FaWater,
  FaBath,
  FaBuilding,
  FaPaintRoller,
  FaShieldAlt,
  FaTools,
  FaSwimmingPool,
  FaWarehouse,
  FaWrench
} from "react-icons/fa";
import "./services.css";

const ServiceCard = ({ title, Icon, iconColor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
      className="service-card"
    >
      <div className="service-card-content">
        <Icon size={50} style={{ marginBottom: "15px", color: iconColor }} />
        <h4>{title}</h4>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const serviceData = [
    { title: "Terrace & Roof Waterproofing", Icon: FaWater, color: "#1E90FF" },
    { title: "W.C & Bathroom Waterproofing", Icon: FaBath, color: "#FF69B4" },
    { title: "Basement, Footing & Foundation Waterproofing", Icon: FaBuilding, color: "#8B4513" },
    { title: "Balcony & Exterior Wall Waterproofing", Icon: FaPaintRoller, color: "#20B2AA" },
    { title: "Swimming Pool Waterproofing", Icon: FaSwimmingPool, color: "#FFD700" },
    { title: "Tile & Deck Surface Waterproofing", Icon: FaTools, color: "#DC143C" },
    { title: "Industrial Shed & Factory Waterproofing", Icon: FaWarehouse, color: "#8A2BE2" },
    { title: "Grouting & Structural Repairs", Icon: FaWrench, color: "#FF6347" },
  ];

  return (
    <div className="services-container">
      <div id="services" className="services-content">
        <motion.h2 className="services-title">
          <span className="styled-h1">Our Services</span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="services-logo-container"
        >
          <div>
            <img src="Logo.png" alt="Logo" className="services-logo" />
            <p className="services-brand">STRUCPROOF</p>
          </div>
        </motion.div>

        <div className="services-description">
          <h3>Comprehensive Waterproofing & Repair Solutions</h3>
          <p>
            Our services are tailored for new construction, leak repairs, and preventive protection:
          </p>
        </div>

        <div className="services-grid">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              Icon={service.Icon}
              iconColor={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

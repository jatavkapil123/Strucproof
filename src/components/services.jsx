import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWater,
  FaBath,
  FaBuilding,
  FaPaintRoller,
  FaSwimmingPool,
  FaTools,
  FaWarehouse,
  FaWrench,
} from "react-icons/fa";
import "./services.css";

/* Images */
import terrace1 from "../assets/terrace1.jpg";
import terrace2 from "../assets/terrace2.jpg";
import terrace3 from "../assets/terrace3.jpg";

import bath1 from "../assets/bath1.jpg";
import bath2 from "../assets/bath2.jpg";
import bath3 from "../assets/bath4.jpeg";

import basement1 from "../assets/basement1.jpg";
import basement2 from "../assets/basement4.jpeg";
import basement3 from "../assets/basement3.jpg";

import balcony1 from "../assets/balcony1.jpg";
import balcony2 from "../assets/balcony2.jpg";
import balcony3 from "../assets/balcony4.jpeg";

import pool1 from "../assets/pool1.jpeg";
import pool2 from "../assets/pool2.jpeg";
import pool3 from "../assets/pool3.jpeg";

import deck1 from "../assets/deck1.jpeg";
import deck2 from "../assets/deck2.jpeg";
import deck3 from "../assets/deck3.jpeg";

import industrial1 from "../assets/industrial1.jpeg";
import industrial2 from "../assets/industrial2.jpeg";
import industrial3 from "../assets/industrial3.jpeg";

import grouting1 from "../assets/grouting1.jpg";
import grouting2 from "../assets/grouting2.jpg";
import grouting3 from "../assets/grouting3.jpg";

/* Service Card Component */
const ServiceCard = ({ service, onClick, isActive }) => (
  <motion.div
    className={`service-card ${isActive ? "blurred" : ""}`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <service.Icon
      size={50}
      style={{ marginBottom: "15px", color: service.color }}
    />
    <h4>{service.title}</h4>
  </motion.div>
);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const serviceData = [
    {
      title: "Terrace & Roof Waterproofing",
      Icon: FaWater,
      color: "#1E90FF",
      images: [terrace1, terrace2, terrace3],
      description:
        "Top-notch terrace and roof waterproofing. Durable, leak-free solutions.",
    },
    {
      title: "W.C & Bathroom Waterproofing",
      Icon: FaBath,
      color: "#FF69B4",
      images: [bath1, bath2, bath3],
      description:
        "Leak-proof bathroom solutions with modern waterproof coatings.",
    },
    {
      title: "Basement, Footing & Foundation Waterproofing",
      Icon: FaBuilding,
      color: "#8B4513",
      images: [basement1, basement2, basement3],
      description:
        "Protect foundations from water ingress and structural damage.",
    },
    {
      title: "Balcony & Exterior Wall Waterproofing",
      Icon: FaPaintRoller,
      color: "#20B2AA",
      images: [balcony1, balcony2, balcony3],
      description:
        "Ensure your balconies and exterior walls remain water-resistant.",
    },
    {
      title: "Swimming Pool Waterproofing",
      Icon: FaSwimmingPool,
      color: "#FFD700",
      images: [pool1, pool2, pool3],
      description:
        "Long-lasting pool waterproofing to prevent leaks and maintain structure.",
    },
    {
      title: "Tile & Deck Surface Waterproofing",
      Icon: FaTools,
      color: "#DC143C",
      images: [deck1, deck2, deck3],
      description:
        "Protect tiled areas and decks with advanced waterproof coatings.",
    },
    {
      title: "Industrial Shed & Factory Waterproofing",
      Icon: FaWarehouse,
      color: "#8A2BE2",
      images: [industrial1, industrial2, industrial3],
      description:
        "Reliable waterproofing solutions for large industrial structures.",
    },
    {
      title: "Grouting & Structural Repairs",
      Icon: FaWrench,
      color: "#FF6347",
      images: [grouting1, grouting2, grouting3],
      description:
        "High-quality grouting and repair work for structural integrity.",
    },
  ];

  /* Prevent body scroll when panel is open */
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeIndex]);

  return (
    <>
      {/* Services Grid */}
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isActive={activeIndex !== null}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Overlay + Side Panel */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            />
            <motion.div
              className="slide-panel"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="close-btn"
                onClick={() => setActiveIndex(null)}
              >
                &times;
              </button>
              <div className="panel-text">
                <h3>{serviceData[activeIndex].title}</h3>
                <p>{serviceData[activeIndex].description}</p>
              </div>
              <div className="panel-images">
                {serviceData[activeIndex].images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`${serviceData[activeIndex].title} ${i + 1}`}
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;

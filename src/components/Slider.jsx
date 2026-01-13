import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/WaterproofHero1.png"; // Use the generated image

const Slider = () => {
  return (
    <section className="hero-section" id="home">
      
      {/* Hero Background */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Overlay for text readability */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">STRUCPROOF</h1>
        <span className="hero-subtitle">By Rasankar and Sons</span>

        <div className="hero-highlight">
          <span className="blue-text">Waterproofing Consultant</span>
          <span className="green-box">and Chemicals</span>
        </div>

        <div className="hero-line"></div>

        <p className="hero-description">
          Terrace, W.C. & Bath, Basement & Wall,<br />
          Chemical Waterproofing
        </p>

        <div className="hero-sub-text">
          From high-rise buildings to industrial sheds, we provide waterproofing that lasts —<br />
          backed by 35+ years of proven expertise and a 10-year service warranty.
        </div>
        <a href="#ContactUs" className="hero-btn">
  Explore More
</a>

      </div>
    </section>
  );
};

export default Slider;

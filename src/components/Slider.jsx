import React from "react";
import "./Slider.css";
import heroImg from "../assets/WaterproofHero2.jpeg";
import logoImg from "../assets/logo.png"; // Your new logo from the image

const Slider = () => {
  return (
    <section className="hero-section" id="home">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* 1. Logo replaces the old title */}
        <img src={logoImg} alt="Strucproof Logo" className="hero-logo" />

        
        {/* 3. The thin blue line from the image */}
        <div className="hero-divider"></div>

        {/* 2. Text with specific colors from your image */}
        <div className="hero-tagline">
          <span className="text-blue">Waterproofing consultant & </span>
          <span className="text-green">Chemicals</span>
        </div>

        {/* Subtitle */}
<span className="hero-subtitle">By Rasankar and Son's</span>

{/* Line under subtitle */}
<div className="hero-subtitle-line"></div>



        {/* <p className="hero-description">
          Terrace, W.C. & Bath, Basement & Wall,<br />
          Chemical Waterproofing
        </p> */}

        <a href="#ContactUs" className="hero-btn">
          Explore More
        </a>
      </div>
    </section>
  );
};

export default Slider;
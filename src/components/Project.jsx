import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaBuilding, FaStore, FaHome, FaIndustry, FaCity, FaHouseUser,
  FaSearch, FaClipboardList, FaTools, FaCheckCircle, FaShieldAlt, FaHeadset
} from 'react-icons/fa';
import "./project.css";

// ------------------- PROJECT DATA -------------------
const projects = [
  {
    title: 'Terrace Waterproofing',
    description: 'Residential | Renovation',
    image: 'terraceWaterProffing.jpg',
    details: 'Terrace waterproofing ensures long-lasting protection against leaks and weather damage. Our process includes surface cleaning, crack filling, and coating with premium-grade waterproofing membranes.'
  },
  {
    title: 'Exterior wall waterproofing',
    description: 'Residential | New Build',
    image: 'CrackFellingWaterproffing.jpg',
    details: 'Our crack-filling waterproofing treatment effectively seals micro and structural cracks to prevent seepage. It enhances wall durability while maintaining the natural aesthetics of your home.'
  },
  {
    title: 'Rubber Coat Waterproofing',
    description: 'Residential | New Build',
    image: 'rubbercoatwaterproofing.jpg',
    details: 'Rubber coat waterproofing provides elastic, seamless coverage suitable for roofs, tanks, and terraces. It resists UV rays, adapts to temperature changes, and offers long-term leak protection.'
  },
  {
    title: 'Core Pipe Waterproofing',
    description: 'Residential | Renovation',
    image: 'CorePipeWaterproffing.jpg',
    details: 'Core pipe waterproofing prevents leakage through critical joints and pipe penetrations. Using PU-based sealants and advanced injection systems, we create a watertight bond for lasting performance.'
  },
  {
    title: 'Basement Waterproofing',
    description: 'Residential | Protection',
    image: 'BasementWaterproffing.jpg',
    details: 'Basement waterproofing shields your foundation from moisture intrusion. Our high-pressure injection and crystalline coating techniques provide solid, long-term protection from dampness and mold.'
  },
];

// ------------------- MAIN COMPONENT -------------------
const Project = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Completely disable all arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const projectTypes = [
    "Residential Buildings & Societies",
    "Commercial Complexes & Offices",
    "Government Institutions",
    "Factories, Warehouses & Industrial Plants",
    "Private Bungalows & Villas",
  ];

  const industries = [
    { title: 'Construction & Builders', description: 'Reliable, long-lasting protection', icon: <FaBuilding /> },
    { title: 'Commercial Complexes & Malls', description: 'Hassle-free execution', icon: <FaStore /> },
    { title: 'Housing Societies & Apartments', description: 'Safe, quick, effective', icon: <FaHome /> },
    { title: 'Factories & Industrial Sheds', description: 'Heavy-duty waterproofing', icon: <FaIndustry /> },
    { title: 'Government Buildings', description: 'Compliant & audit-ready work', icon: <FaCity /> },
    { title: 'Individual Homes & Bungalows', description: 'Affordable peace of mind', icon: <FaHouseUser /> },
  ];

  const processSteps = [
    { title: 'Site Visit & Analysis', description: 'We inspect and diagnose root problems', icon: <FaSearch /> },
    { title: 'Custom Proposal', description: 'Based on site needs, budget & structure', icon: <FaClipboardList /> },
    { title: 'Material Selection', description: 'Industry-certified products', icon: <FaTools /> },
    { title: 'Execution by Experts', description: 'Trained teams using proper methods', icon: <FaCheckCircle /> },
    { title: 'Quality Check & Testing', description: 'Leak check and assurance', icon: <FaShieldAlt /> },
    { title: 'Warranty & After-Support', description: '10-year warranty + service backup', icon: <FaHeadset /> },
  ];

  return (
    <>
      {/* Section: Proven Work */}
      <section className={`proven-section ${animate ? "animate" : ""}`}>
        <h2 className="top">Proven Work. Proven Trust.</h2>
        <p className="sub">We’ve executed 1500+ projects for:</p>
        <ul className="project-list">
          {projectTypes.map((type, index) => (
            <li key={index} className="project-item" style={{ animationDelay: `${index * 0.2}s` }}>
              {type}
            </li>
          ))}
        </ul>
      </section>

      {/* Section: Projects */}
      <h1 className="top">Our Projects</h1>
     <div className="projects-container">
  <div className="slider-wrapper">
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="project-card fade-up">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-info">
            <h5>{project.title}</h5>
            <p className="project-sub">{project.description}</p>
            <p className="project-details">{project.details}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

      {/* Section: Industries */}
      <section className="industries-section">
        <div className="container">
          <h2 className="top">Industries We Serve</h2>
          <p className="section-subtitle fade-in-delay">Tailored Solutions for Every Sector</p>
          <p className="section-description fade-in-delay2">
            We understand different structures require different approaches. That’s why our services are
            designed to meet your industry's unique needs:
          </p>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card zoom-in">
                <div className="industry-icon">{industry.icon}</div>
                <h4>{industry.title}</h4>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Process */}
      <section className="our-process">
        <div className="container">
          <h2 className="top">Our Proven Waterproofing Workflow</h2>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

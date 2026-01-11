import React from "react";
import "./About.css";
import { FaCheckCircle, FaTools, FaBuilding, FaShieldAlt, FaDollarSign, FaUserFriends } from 'react-icons/fa';
 import visionImage from '../assets/side.jpg';
import founderImg from "../assets/ChandrakantR.png";
import ganeshImg from "../assets/Ganesh.r.jpeg";



const Aboutus = () => {
  const leadershipTeam = [
    {
      name: "Chandrakant Rasankar",
      role: "Director",
      details: "Visionary behind Rasankar & Sons with 35+ years in the industry",
      photo: founderImg, // Replace with actual image
    },
    {
      name: "Ganesh Rasankar",
      role: "Director",
      details: "Leading StrucProof with innovation and dedication",
      photo: ganeshImg, // Replace with actual image
    },
  ];

  const services = [
    "Terrace & roof treatments (chemical coatings, rubber coat, brick bat coba)",
    "Basement, bathroom, WC, balcony & water tank waterproofing",
    "Swimming pool & tiles waterproofing",
    "Exterior wall, industrial shed & footing protection",
    "Grouting and custom solutions based on site conditions",
  ];

  const reasons = [
    { title: '35+ Years of Real Experience', description: 'Decades of expertise in waterproofing solutions.', icon: <FaCheckCircle /> },
    { title: '1500+ Projects Done Right', description: 'Thousands of satisfied clients and successful projects.', icon: <FaBuilding /> },
    { title: '10-Year Warranty on All Work', description: 'Long-term peace of mind with our extensive warranty.', icon: <FaShieldAlt /> },
    { title: 'Site-Specific Engineering', description: 'Customized solutions tailored to your site’s needs.', icon: <FaTools /> },
    { title: 'Trusted by Builders, Govt., and Businesses', description: 'Our reliability speaks for itself with top-tier clients.', icon: <FaBuilding /> },
    { title: 'Fully Equipped Teams & Modern Tools', description: 'Our skilled team uses advanced technology and equipment.', icon: <FaTools /> },
    { title: 'Affordable Pricing with No Compromise', description: 'Quality service at competitive prices.', icon: <FaDollarSign /> },
    { title: 'Family Values + Professional Execution', description: 'A family-owned business with professionalism at its core.', icon: <FaUserFriends /> },
  ];
  return (
    <div className="about-us-page">
      <header className="hero">
      <h1 className="top">About US</h1>
      <div className="hero-content">
          <p>Protecting What You Build for Over 35 Years</p>
          <p>StrucProof is Maharashtra’s leading name in comprehensive waterproofing solutions, with a proven legacy spanning over 35 years. What began as Rasankar and Sons Waterproofing Services, under the guidance of Founder Chandrakant Rasankar, has grown into a trusted, professional brand led today by Director Ganesh Rasankar [Diploma(Civil Engg.)].
             Rooted in deep technical expertise and a passion for building protection, we have successfully completed 1500+ projects across the state — protecting everything from residential buildings and commercial complexes to industrial facilities and public infrastructure. With offices in Pune and Karad and a workforce of 50+ trained professionals, STRUCPROOF delivers fast, reliable, and location-specific service across Maharashtra.
          </p>
          </div>
      </header>

      <section className="about-section">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            StrucProof is Maharashtra’s leading name in waterproofing solutions, with a 35+ year
            legacy. Founded by <strong>Chandrakant Rasankar</strong> and now led by{" "}
            <strong>Ganesh Rasankar</strong>, our mission is to protect your buildings with
            expertise, technology, and trust.
          </p>
          <p>
            We've successfully completed <strong>1500+ projects</strong> — from homes and
            apartments to industrial facilities and public works. Our 50+ trained professionals serve
            across Maharashtra from our bases in Pune and Karad.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To provide affordable, high-quality waterproofing solutions that stand the test of time — backed by expert consultation, efficient execution,
             and a 10-year service warranty that reflects our confidence and commitment.
          </p>

          <h2>What We Do</h2>
          <ul>
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vision-section">
            <div className="vision-content">
              <div className="text-content fade-in-left">
                <h2>Our Vision</h2>
                <p>
                  At <strong>STRUCPROOF</strong>, we believe in building digital
                  experiences that inspire. We blend innovative design with
                  cutting-edge technology to deliver results that matter.
                </p>
                <p>
                  Our goal is to empower brands through visually striking, responsive
                  interfaces that leave lasting impressions and drive user
                  engagement.
                </p>
              </div>
              <div className="image-content fade-in-right">
                <img src={visionImage} alt="Vision" />
              </div>
            </div>
          </section>

          <section className="why-choose-us">
      <div className="container">
        <h2 className="top">When Quality Matters, Choose StrucProof</h2>
        <div className="reasons-container">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="leadership">
        <h2>Our Leadership</h2>
        <div className="leadership-container">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="card leader-card">
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="container">
          <h2>What Sets Us Apart</h2>
          <p>
            StrucProof isn’t just a waterproofing company — we’re your partners in peace of mind.
            Our family-led values and professional practices ensure long-lasting protection and
            hassle-free service.
          </p>
          <p>
            Whether you're a homeowner, builder, or industrial client — <strong>STRUCPROOF</strong>{" "}
            is your first and last waterproofing partner.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;

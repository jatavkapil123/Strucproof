import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Aboutus from "./components/Aboutus";
import Why from "./components/Why";
import CompanyProducts from "./components/CompanyProducts";
import Services from "./components/services";
import Project from "./components/Project";
import TestimonialsFAQ from "./components/TestimonialsFAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css"; // Ensure this file includes global styles like scroll-behavior

const App = () => {
  useEffect(() => {
    // Add viewport meta tag if not present
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      {/* Global Navbar always visible */}
      <Navbar />

      {/* Main content wrapper; paddingTop to account for fixed navbar height */}
      <div style={{ paddingTop: "90px" }}>
        {/* Slider Section */}
        <div id="Slider">
          <Slider />
        </div>

        {/* About Us Section */}
        <div id="Aboutus">
          <Aboutus />
        </div>
        <Why />

        {/* Services Section */}
        <div id="Services">
          <Services />
        </div>
        <CompanyProducts/>
        {/* Projects Section */}
        <div id="Project">
          <Project />
        </div>
        <TestimonialsFAQ/>
        {/* Contact Us Section */}
        <div id="ContactUs">
          <ContactUs />
        </div>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </>
  );
};

export default App;

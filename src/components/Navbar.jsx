import React, { useEffect, useState } from "react";
import "./Navbar.css";
import newLogo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`new-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="brand-logo">
        <img src={newLogo} alt="Logo" className="brand-img" />
        <h2>STRUCPROOF</h2>
      </div>

      <div className={`navbar-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#Slider" onClick={closeMenu}>Home</a></li>
        <li><a href="#Aboutus" onClick={closeMenu}>About Us</a></li>
        <li><a href="#Services" onClick={closeMenu}>Services</a></li>
        <li><a href="#Project" onClick={closeMenu}>Projects</a></li>
        <li><a href="#ContactUs" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

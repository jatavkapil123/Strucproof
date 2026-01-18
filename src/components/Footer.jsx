import React from "react";
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#Aboutus" },
    { name: "Services", href: "#Services" },
    { name: "Projects", href: "#Project" },
    { name: "Contact", href: "#ContactUs" }
  ];

  const services = [
    "Terrace Waterproofing",
    "Basement Protection",
    "Bathroom & W.C",
    "Industrial Solutions",
    "Swimming Pool",
    "Exterior Walls"
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/strucproof/", name: "Instagram" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/strucproof-8bba8434a/", name: "LinkedIn" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/share/17Yik7jmp3/", name: "Facebook" },
    { icon: <FaTwitter />, href: "https://x.com/strucproof/status/1922524032064225648?t=scnGSSFyd1Yq1Frzu-mSNQ&s=19", name: "Twitter" }

  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        {/* About Section */}
        <div className="footer__section">
          <h3 className="footer__title">STRUCPROOF</h3>
          <p className="footer__description">
            Maharashtra's leading waterproofing specialist with 35+ years of experience. Protecting what you build with quality that lasts.
          </p>
          <div className="footer__contact-info">
            <div className="footer__contact-item">
              <FaPhone /> <span>+91 93715 07666</span>
            </div>
            <div className="footer__contact-item">
              <FaEnvelope /> <span>info@strucproof.com</span>
            </div>
            <div className="footer__contact-item">
              <FaMapMarkerAlt /> <span>Pune & Karad, Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h4 className="footer__subtitle">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((link, idx) => (
              <li key={idx}><a href={link.href} className="footer__link">{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__section">
          <h4 className="footer__subtitle">Our Services</h4>
          <ul className="footer__links">
            {services.map((service, idx) => (
              <li key={idx}><span className="footer__service">{service}</span></li>
            ))}
          </ul>
        </div>

        {/* Social & Warranty */}
        <div className="footer__section">
          <h4 className="footer__subtitle">Follow Us</h4>
          <div className="footer__social">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} className="footer__social-link" aria-label={social.name}>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="footer__warranty">
            <div className="footer__warranty-badge">
              <strong>10 Year</strong>
              <span>Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <p>&copy; {currentYear} STRUCPROOF by Rasankar & Son's. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#" className="footer__bottom-link">Privacy Policy</a>
          <a href="#" className="footer__bottom-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

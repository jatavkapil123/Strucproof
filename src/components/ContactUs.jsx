import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { send } from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    visitDate: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      service: formData.service,
      visitDate: formData.visitDate,
      message: formData.message,
    };

    sendEmail(templateParams);
  };

  const sendEmail = (templateParams) => {
    send(
      "service_lx2k55r",       // ✅ Your Service ID
      "template_bbhhdvh",      // ✅ Your Template ID
      templateParams,
      "TExgA1KTZMUCNghP7"      // ✅ Your Public Key (updated)
    )
      .then(() => {
        setSuccessMessage(
          "Thank you! Your message has been sent successfully."
        );
        setFormData({
          name: "",
          mobile: "",
          email: "",
          service: "",
          visitDate: "",
          message: "",
        });
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setSuccessMessage(
          "Oops! Something went wrong. Please try again later."
        );
        setTimeout(() => setSuccessMessage(""), 3000);
      });
  };

  return (
    <div className="contact-main">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-section">
        {/* Left: Contact Form */}
        <div className="contact-left">
          <h3 className="sub-title">Contact Us</h3>
          {successMessage && (
            <Alert color="success" className="contact-alert" timeout={3000}>
              {successMessage}
            </Alert>
          )}

          <Form className="contact-form" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="mobile">Phone Number</Label>
              <Input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter your phone number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="service">Service Needed</Label>
              <Input
                type="text"
                id="service"
                name="service"
                placeholder="What service do you need?"
                value={formData.service}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="visitDate">Preferred Visit Date</Label>
              <Input
                type="date"
                id="visitDate"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </FormGroup>

            <Button className="contact-button" type="submit">
              Send Message
            </Button>
          </Form>
        </div>

        {/* Right: Contact Details */}
        <div className="contact-right">
          <h3 className="sub-title">Contact Details</h3>
          <div className="contact-card">
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <span>
                  SHOP NO. 3, MAHALAXMI COMPLEX, KRISHNA NAKA, KARAD-415110
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <span>
                  6/B, GHANDHI CHOWK, NEAR TALATHI OFFICE, HADAPSAR GAON,
                  PUNE-411028
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                <span>+91 77679 77177</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                <span>+91 97653 37555</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <span>strucproof666@gmail.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                <span>www.strucproof.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
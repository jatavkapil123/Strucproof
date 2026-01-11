import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { send } from "@emailjs/browser";
import "./Contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    visitDate: "",
    file: null,
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [fileError, setFileError] = useState(""); // For file size error

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      if (files[0]) {
        const fileSizeKB = files[0].size / 1024; // size in KB
        if (fileSizeKB > 50) {
          setFileError("File size must be less than 50KB");
          setFormData({ ...formData, file: null });
          return;
        } else {
          setFileError("");
          setFormData({ ...formData, file: files[0] });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
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

    if (formData.file) {
      const reader = new FileReader();
      reader.onload = function () {
        templateParams.attachment = reader.result.split(",")[1]; // Base64
        sendEmail(templateParams);
      };
      reader.readAsDataURL(formData.file);
    } else {
      sendEmail(templateParams);
    }
  };

  const sendEmail = (templateParams) => {
    send(
      "service_jqycguj",        // Your Gmail API Service ID
      "template_ieeynwf",       // Your Template ID
      templateParams,
      "rCJQFoO9ED4ohcVnf"      // Your Public Key
    )
      .then(() => {
        setSuccessMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          service: "",
          visitDate: "",
          file: null,
          message: "",
        });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setSuccessMessage("Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-wrapper">
        {/* Left Section: Contact Form */}
        <div className="contact-form">
          <h2>Fill Out the Contact Form:</h2>

          {successMessage && (
            <Alert color="success" className="contact-alert">
              {successMessage}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
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

            {/* File Upload */}
            <FormGroup>
              <Label for="file">Upload File (Image / PDF, max 50KB)</Label>
              <Input
                type="file"
                id="file"
                name="file"
                accept="image/*,application/pdf"
                onChange={handleChange}
              />
              {formData.file && (
                <p className="file-preview">Selected: {formData.file.name}</p>
              )}
              {fileError && <p className="file-error">{fileError}</p>}
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

            <Button color="primary" type="submit" className="contact-button">
              Send Message
            </Button>
          </Form>
        </div>

        {/* Right Section: Contact Details */}
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                SHOP NO. 3, MAHALAXMI COMPLEX, KRISHNA NAKA, KARAD-415110
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                6/B, GHANDHI CHOWK, NEAR TALATHI OFFICE, HADAPSAR GAON, PUNE-411028
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> 9371507666 / 7767977177
              </li>
              <li>
                <i className="fab fa-whatsapp"></i> 9371507666
              </li>
              <li>
                <i className="fas fa-envelope"></i> strucproof666@gmail.com
              </li>
              <li>
                <i className="fas fa-globe"></i> STRUCPROOF.COM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

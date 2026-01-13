import React, { useState } from 'react';
import { Modal, Carousel, Button } from 'react-bootstrap';
import Slider from 'react-slick'; // Import Slider for the carousel
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles
import "./Looks.css";

// Your existing project array
const projects = [
  {
    title: 'Terrace Waterproofing',
    description: 'Residential | Renovation',
    image: 'terraceWaterProffing.jpg',
    gallery: ['terrace_gallery1.jpg', 'terrace_gallery2.jpg'],
  },
  {
    title: 'Crack Filling Waterproofing',
    description: 'Residential | New Build',
    image: 'CrackFellingWaterproffing.jpg',
    gallery: ['crack_gallery1.jpg', 'crack_gallery2.jpg'],
  },
  {
    title: 'Rubber Coat Waterproofing',
    description: 'Residential | New Build',
    image: 'rubbercoatwaterproofing.jpg',
    gallery: ['rubber_gallery1.jpg', 'rubber_gallery2.jpg'],
  },
  // Add more projects as needed
];

const Look = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleShow = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at once (adjust this as needed)
    slidesToScroll: 1,
    centerMode: true, // Center the card in the view
    focusOnSelect: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every 2 seconds (2000 milliseconds)
    arrows: false, // Completely disable all arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-center my-4">Projects</h1>

      {/* Project Cards - Slider */}
      <div className="projects-container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card zoom-in">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <button className="view-btn" onClick={(e) => { e.stopPropagation(); handleShow(project); }}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for Gallery */}
      {activeProject && (
        <Modal show={showModal} onHide={handleClose} size="xl" centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel interval={3000} pause="hover">
              {activeProject.gallery.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img src={image} alt={`Slide ${idx}`} className="d-block w-100 project-modal-image" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Look;

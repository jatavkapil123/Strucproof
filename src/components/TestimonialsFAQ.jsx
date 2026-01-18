import React, { useState } from 'react';
import { FaQuoteLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './TestimonialsFAQ.css';

// Testimonials Data
const testimonials = [
  {
    quote: 'STRUCPROOF handled our society’s terrace waterproofing with professionalism. No leakage since 8 years!',
    name: 'Mr. Mahajan',
    title: 'Society Chairman',
    location: 'Pune',
  },
  {
    quote: 'Reliable partner for our commercial projects. Always on time, and always within budget.',
    name: 'Prashant Builders',
    title: 'Construction Company',
    location: 'Karad',
  },
  {
    quote: 'I was impressed by their expertise. The team explained every step clearly and gave us complete confidence.',
    name: 'Mrs. Shinde',
    title: 'Homeowner',
    location: 'Satara',
  },
];

// FAQ Data
const faqData = [
  {
    question: 'Do you offer site visits?',
    answer: 'Yes. We offer site inspection and expert consultation anywhere in Maharashtra.',
  },
  {
    question: 'Is your waterproofing work guaranteed?',
    answer: 'Absolutely. All services come with a 10-year written warranty.',
  },
  {
    question: 'Can you handle government or industrial contracts?',
    answer: 'Yes. We are fully equipped, experienced, and compliant for government tenders and industrial scale projects.',
  },
  {
    question: 'How long does waterproofing take?',
    answer: 'It depends on the site complexity, the condition of the surface, and the type of waterproofing method recommended after inspection.',
  },
  {
    question: 'What materials do you use?',
    answer: 'We use Acrylic-based chemical coats, PU coatings, rubber-based materials, and cementitious solutions as per site condition.',
  },
];

const TestimonialsFAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="top">What Our Clients Say</h2>
          <div className="carousel">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <FaQuoteLeft className="testimonial-icon" />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-details">{testimonial.title}, {testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2 className="top">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h4>{faq.question}</h4>
                  {activeFAQ === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div className={`faq-answer ${activeFAQ === index ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsFAQ;

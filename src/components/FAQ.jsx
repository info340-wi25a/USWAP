import React, { useState } from 'react';
import '../index.css';

const faqData = [
  { question: "How do I list an item?", answer: "Click on 'Add Item' in the navigation bar and fill in the required details." },
  { question: "Is this marketplace only for UW students?", answer: "Yes, USWAP is exclusive to University of Washington students." },
  { question: "How do I contact a seller?", answer: "Each listing has a contact button that allows you to reach the seller directly." },
  { question: "Is there a transaction fee?", answer: "No, USWAP does not charge any transaction fees." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>▼</span>
            </button>
            <div
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
              style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
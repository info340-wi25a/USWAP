import React, { useState } from 'react';

const faqData = [
  { question: "Lorem question", answer: "Lorem answer 1" },
  { question: "Lorem question 2", answer: "lorem answer 2" },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h2>FAQ</h2>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

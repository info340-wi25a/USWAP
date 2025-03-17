import React, { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';


const faqData = [
  { question: "How do I list an item?", answer: "Click on 'Add Item' in the navigation bar and fill in the required details." },
  { question: "Is this marketplace only for UW students?", answer: "Yes, USWAP is exclusive to University of Washington students." },
  { question: "Is there a transaction fee?", answer: "No, USWAP does not charge any transaction fees." }
];

const FAQ = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-3">Frequently Asked Questions</h2>
      <Accordion>
        {faqData.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQ;
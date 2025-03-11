import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="text-white py-3 mt-5" style={{ backgroundColor: "#4B2E83" }}>
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <p>&copy; 2025 USWAP | Contact: <a href="mailto:info@USWAP.com" className="text-white">info@USWAP.com</a></p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

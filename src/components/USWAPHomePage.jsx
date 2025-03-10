import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const USWAPHomePage = () => {
  return (
    <div>
      <Container className="my-4 p-4 rounded">
        <section>
          <h2>Welcome to USWAP</h2>
          <p>Connect with other UW students to exchange books, furniture, gadgets, and more in a safe and easy-to-use platform.</p>
        </section>
        <section>
          <Row className="justify-content-center g-4" xs={1} sm={2} md={3}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Browse Items</Card.Title>
                  <Card.Text>Find what you need from fellow Huskies.</Card.Text>
                  <Link to="/listings" className="uw-button">Explore</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Sell an Item</Card.Title>
                  <Card.Text>List your items and connect with buyers.</Card.Text>
                  <Link to="/add-item" className="uw-button">Start Selling</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>My Listings</Card.Title>
                  <Card.Text>View and manage the items you've posted.</Card.Text>
                  <Link to="/listings" className="uw-button">View Listings</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <FAQ />
      </Container>
    </div>
  );
};

export default USWAPHomePage;

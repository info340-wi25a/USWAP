
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router';
import FAQ from './FAQ';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';


const USWAPHomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state when logged in
    });
    return () => unsubscribe(); // Cleanup the listener when unmounted
  }, []);


  return (
    <div>
      <Container className="my-4 p-4 rounded">
        <section>
        <h2>Welcome to USWAP {user ? `, ${user.displayName }` : ""}!</h2>
        <p>Connect with other UW students to exchange books, furniture, gadgets, and more in a safe and easy-to-use platform.</p>
        </section>
        {user ? (
         <p>Thanks for being a valued customer, enjoy our USWAP app!</p>
         
        ) : (
          <p>Please login by clicking the login button above to add interested items to "Wishlist", view Wishlist, "Purchase" an item or view Purchase History.</p>
        )}
        <section>
          <Row className="justify-content-center g-4" xs={1} sm={2} md={3}>
            <Col>
            <Card className="container-card">
                <Card.Body>
                  <Card.Title>Browse</Card.Title>
                  <Card.Text>Find what you need from fellow Huskies.</Card.Text>
                  <Link to="/listings" className="uw-button">View Items</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="container-card">
                <Card.Body>
                  <Card.Title>Sell an Item</Card.Title>
                  <Card.Text>List your items and connect with buyers.</Card.Text>
                  <Link to="/add-item" className="uw-button">Start Selling</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="container-card">
                <Card.Body>
                  <Card.Title>Wishlist</Card.Title>
                  <Card.Text>View the items you're interested in.</Card.Text>
                  <Link to="/wishlist" className="uw-button">View Wishlist</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card className="container-card">
                <Card.Body>
                  <Card.Title>Purchase History</Card.Title>
                  <Card.Text>View the previously purchased list of items.</Card.Text>
                  <Link to="/purchase-history" className="uw-button">View Purchase History</Link>
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
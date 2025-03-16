import React from 'react';
import { useLocation } from 'react-router-dom';
import PurchaseForm from '../components/PurchaseForm';
import { Container, Row, Col, Card, Image, Alert } from 'react-bootstrap';


function PurchasingPage() {
    const location = useLocation();
    const item = location.state?.item;

    if (!item) {
        return <Alert variant="warning" className="text-center mt-4">No item selected for purchase.</Alert>;
    }

    return (
        <Container className="mt-4 mb-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm p-3 mb-4">
                        <Row className="g-3">
                            <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                                <Image src={item.imageUrl} alt={item.title} fluid rounded />
                            </Col>
                            <Col xs={12} md={8}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text><strong>Price:</strong> ${item.price}</Card.Text>
                                    <Card.Text><strong>Description:</strong> {item.description || "No description available."}</Card.Text>
                                    <Card.Text><strong>Category:</strong> {item.category}</Card.Text>
                                    <Card.Text><strong>Condition:</strong> {item.condition}</Card.Text>
                                    <Card.Text><strong>Seller:</strong> {item.sellername}</Card.Text>
                                    <Card.Text><strong>Contact:</strong> {item.contact}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="p-3 mb-4">
                        <PurchaseForm item={item} />
                    </Card>

                    <Card className="p-3 bg-light">
                        <Card.Body>
                            <Card.Title>About Purchasing an Item</Card.Title>
                            <Card.Text>Use this form to securely purchase an item from the marketplace. Provide your contact details, preferred payment method, and any additional instructions.</Card.Text>
                            <Card.Text>Ensure all information is correct before submitting. Once confirmed, the seller will be notified, and you can arrange for pickup or delivery.</Card.Text>
                            <Card.Text>Our marketplace makes transactions simple and secure, helping students find affordable items quickly.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PurchasingPage;
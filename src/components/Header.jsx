import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" style={{ backgroundColor: "#4B2E83" }} variant="dark" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
            <img
              src="img/USWAP_logo.png"
              alt="USWAP Logo"
              className="logo"
              style={{ maxHeight: "60px", marginRight: "10px" }}
            />
            <span className="fw-bold fs-1">USWAP</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center gap-2">
              <Button as={Link} to="/" className="uw-button">
                Home
              </Button>
              <Button as={Link} to="/listings" className="uw-button">
                Listings
              </Button>
              <Button as={Link} to="/add-item" className="uw-button">
                Add Item
              </Button>
              <Button as={Link} to="/wishlist" className="uw-button">
                Wishlist
              </Button>
                <Button as={Link} to="/login" className="uw-button">
                  Login
                </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

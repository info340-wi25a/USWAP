import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { getAuth, signOut, EmailAuthProvider, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';


const Header = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
  };


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
              <Button as={Link} to="/" className="header-button">
                Home
              </Button>
              <Button as={Link} to="/listings" className="header-button">
                Listings
              </Button>
              <Button as={Link} to="/add-item" className="header-button">
                Add Item
              </Button>
              <Button as={Link} to="/wishlist" className="header-button">
                Wishlist
              </Button>
              {user ? (
                <Button onClick={handleLogout} className="logout-button">Logout</Button>
              ) : (
                <Button as={Link} to="/login" className="login-button">Login</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { database, ref, push } from "../firebaseConfig"; // Import Firebase functions
import { getAuth, signOut, EmailAuthProvider, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';


const Header = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  
    const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="header">
    <Navbar expand="lg" variant="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
          <img src="img/USWAP_logo.png" alt="USWAP Logo" className="logo" />
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
               {/* Only show Wishlist & History if the user is logged in */}
               {user && (
                <>
                  <Button as={Link} to="/wishlist" className="header-button">
                    Wishlist
                  </Button>
                  <Button as={Link} to="/purchase-history" className="header-button">
                    History
                  </Button>
                </>
              )}

            {user ? (
              <>
                <Button onClick={handleLogout} className="header-button">Logout</Button>
                <span className="text-white ms-4 fw-bold fs-6.5">Hi, {user.displayName || user.email}!</span>
              </>
            ) : (
              <Button as={Link} to="/login" className="header-button">Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);
};

export default Header;
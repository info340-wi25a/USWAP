import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <header>
      <img src="./project-draft/img/USWAP_logo.png" alt="USWAP Logo" className="logo" />
      <h1>USWAP</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listings">Listings</Link></li>
          <li><Link to="/add-item">Add Item</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          {loggedInUser ? (
            <li><button onClick={handleLogout}>Logout</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

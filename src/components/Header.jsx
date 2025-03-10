import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src="img/USWAP_logo.png" alt="USWAP Logo" className="logo" />
        <h1>USWAP</h1>
        
         
      
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listings">Listings</Link></li>
          <li><Link to="/add-item">Add Item</Link></li>
          <li><Link to="/wishlist" className="wishlist-btn">Wishlist</Link></li>
            <li><Link to="/login" className="login-btn">Login</Link></li>
  
        </ul>
      </nav>
    </header>
  );
};

export default Header;

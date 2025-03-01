import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <header>
    <img src="./project-draft/img/USWAP_logo.png" alt="USWAP Logo" className="logo" />
    <h1>USWAP</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Buying</Link></li>
        <li><Link to="/listings">Listings</Link></li>
        <li><Link to="/add-item">Add Item</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

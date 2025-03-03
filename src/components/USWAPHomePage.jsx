import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';

const USWAPHomePage = () => {
  return (
    <div className="home-page">
      <main>
        <section className="intro">
          <h2>Welcome to USWAP</h2>
          <p>Connect with other UW students to exchange books, furniture, gadgets, and more in a safe and easy-to-use platform.</p>
        </section>

        <section className="card-container">
          <div className="card">
            <h3>Browse Items</h3>
            <p>Find what you need from fellow Huskies.</p>
            <Link to="/listings" className="button">Explore</Link>
          </div>
          <div className="card">
            <h3>Sell an Item</h3>
            <p>List your items and connect with buyers.</p>
            <Link to="/add-item" className="button">Start Selling</Link>
          </div>
          <div className="card">
            <h3>My Listings</h3>
            <p>Manage the items you've posted.</p>
            <Link to="/listings" className="button">View Listings</Link>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default USWAPHomePage;

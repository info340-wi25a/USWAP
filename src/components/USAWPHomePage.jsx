import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';

const USWAPHomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <section className="intro">
          <h2>Welcome to USWAP</h2>
          <p>Connect with other UW students to exchange books, furniture, gadgets, and more in a safe and easy-to-use platform.</p>
        </section>

        <section className="card-container">
          <div className="card">
            <h3>Purchase History</h3>
            <p>View the previously purchased list of items</p>
            <Link to="/purchase-history" className="button">View Purchase History</Link>
          </div>
          <div className="card">
            <h3>Sell an Item</h3>
            <p>List your items and connect with buyers.</p>
            <Link to="/add-item" className="button">Start Selling</Link>
          </div>
          <div className="card">
            <h3>Wishlist</h3>
            <p>View the items your interested in.</p>
            <Link to="/wishlist" className="button">View Wishlist</Link>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default USWAPHomePage;

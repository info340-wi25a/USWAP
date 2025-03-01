import React from 'react';
import Header from './Header'; // Adjust path based on structure
import Footer from './Footer';
import AddItemForm from './AddItemForm';

function USWAPAddItem() {
  return (
    <div className="add-item-page">
      <Header />
      <main>
        <h1>List a New Item</h1>

        <div className="listing-blurb">
          <h3>About Adding Your Item to the Marketplace:</h3>
          <p>
            Fill out the form to add a new item to the marketplace. Provide a title, description, and price, 
            and upload an image to attract buyers. Choose the correct category to help others find your listing easily.
          </p>
          <p>
            Once submitted, your item will be available for others to view and purchase.
          </p>
          <p>
            Make sure to provide clear and accurate details about your item, including its price, 
            to ensure a smooth transaction.
          </p>
          <p>
            Our marketplace is designed to make buying and selling simple, helping students find affordable items while 
            giving you an opportunity to remove unnecessary items and earn money.
          </p>
        </div>

        <AddItemForm />
      </main>
      <Footer />
    </div>
  );
}

export default USWAPAddItem;

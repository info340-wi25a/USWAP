import React from 'react';
import Footer from '../components/Footer';
import AddItemForm from '../components/AddItemForm';

function AddItem() {
  return (
    <div className="content-wrapper">
      <div className="content-wr">
        {/* 🔹 Listing Info Section */}
        <div className="listing-blurb">
          <h3>About Adding Your Item to the Marketplace</h3>
          <p>
            Fill out the form to add a new item to the marketplace. Provide a
            title, description, and price, and upload an image to attract buyers.
            Choose the correct category to help others find your listing easily.
            Once submitted, your item will be available for others to view and
            purchase. 
            </p>
            <p>
            Make sure to provide clear and accurate details about your item,
            including its price, to ensure a smooth transaction.
            Our marketplace is designed to make buying and selling simple, helping
            students find affordable items while giving you an opportunity to
            remove unnecessary items and earn money.
          </p>
        </div>

        {/* 🔹 Add Item Form */}
        <div className="search-container">
          <AddItemForm />
        </div>
      </div>
    </div>
  );
}

export default AddItem;

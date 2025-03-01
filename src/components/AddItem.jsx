import React from 'react';
import Footer from '../components/Footer';
import AddItemForm from '../components/AddItemForm';

function AddItem() {
  return (
    <div>
         <div className="content-wrapper">
         <div class="listing-blurb">
            <h2>About Adding Your Item to the Marketplace:</h2>
            <p>Fill out the form to add a new item to the marketplace. Provide a title, description, and price, and upload an image to attract buyers. Choose the correct category to help others find your listing easily.</p>
            <p>Once submitted, your item will be available for others to view and purchase.</p>
            <p>Make sure to provide clear and accurate details about your item, including its price, to ensure a smooth transaction.</p>
            <p>Our marketplace is designed to make buying and selling simple, helping students find affordable items while giving you an opportunity to remove unneccesary items and earn money.</p>
        </div>
        
        <AddItemForm />
      </div>
      <Footer />
    </div>
  );
}

export default AddItem;

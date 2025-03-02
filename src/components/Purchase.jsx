import React from 'react';
import Footer from '../components/Footer';
import PurchaseForm from '../components/PurchaseForm';
import ItemCard from '../components/ItemCard'

const item = {
    id: 1,
    title: "Dorm Mini Fridge",
    price: 80,
    category: "electronics",
    image: "./project-draft/img/Dorm_mini.jpg",
    altText: "Dorm Mini Fridge",
    description: "Compact dorm mini fridge, perfect for small spaces."
};


function PurchasingPage() {
    return (
        <div>
            <div className='content-wrapper'>
                <div className='form-card'>
                    <div className="purchase-card">
                    <img src={item.image} alt={item.altText} className="item-image" />
                    <div className="item-info">
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-price">${item.price}</p>
                        <p className="item-description">{item.description}</p>
                </div>
            </div>
            <PurchaseForm />
            </div>
            <div className="purchase-blurb">
                <h2>About Purchasing an Item:</h2>
                <p>Use this form to securely purchase an item from the marketplace. Provide your contact details, preferred payment method, and any additional instructions.</p>
                <p>Ensure all information is correct before submitting. Once confirmed, the seller will be notified, and you can arrange for pickup or delivery.</p>
                <p>Our marketplace makes transactions simple and secure, helping students find affordable items quickly.</p>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default PurchasingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PurchaseForm from '../components/PurchaseForm';

const miniFridge = {
    id: 1,
    title: "Dorm Mini Fridge",
    price: 80,
    category: "electronics",
    image: "/project-draft/img/Dorm_mini.jpg",
    description: "Compact dorm mini fridge, perfect for small spaces."
};

function PurchasingPage() {
    return (
        <div>
            <div className='content-wrapper'>
                <div className='form-card'>
                    <Link to={`/item/${miniFridge.id}`} className="item-link">
                        <div className="purchase-card">
                            <img src={miniFridge.image} alt={miniFridge.title} className="item-image" />
                            <div className="item-info">
                                <h3 className="item-title" style={{ color: "#4b2e83", fontWeight: "bold", textDecoration: "none" }}>
                                    {miniFridge.title}
                                </h3>
                                <p className="item-price" style={{ color: "#4CAF50", fontWeight: "bold", fontSize: "16px" }}>
                                    ${miniFridge.price}
                                </p>
                                <p className="item-description" style={{ color: "#333", fontSize: "14px" }}>
                                    {miniFridge.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                    <PurchaseForm />
                </div>
                <div className="purchase-blurb">
                    <h2>About Purchasing an Item:</h2>
                    <p>Use this form to securely purchase an item from the marketplace. Provide your contact details, preferred payment method, and any additional instructions.</p>
                    <p>Ensure all information is correct before submitting. Once confirmed, the seller will be notified, and you can arrange for pickup or delivery.</p>
                    <p>Our marketplace makes transactions simple and secure, helping students find affordable items quickly.</p>
                </div>
            </div>
        </div>
    );
}

export default PurchasingPage;

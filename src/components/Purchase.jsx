import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import PurchaseForm from '../components/PurchaseForm';

function PurchasingPage() {
    const location = useLocation();
    const item = location.state?.item; // ✅ Receive the passed item correctly

    if (!item) {
        return <h2 style={{ textAlign: "center", marginTop: "20px" }}>No item selected for purchase.</h2>;
    }

    return (
        <div>
            <div className='content-wrapper'>
                <div className='form-card'>
                    <div className="purchase-card">
                        {/* ✅ Display correct item image */}
                        <img src={item.image} alt={item.title} className="item-image" />
                        <div className="item-info">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-price"><strong>Price:</strong> ${item.price}</p>
                            <p className="item-description">{item.description}</p>
                        </div>
                    </div>

                    {/* ✅ Pass the correct item data to PurchaseForm */}
                    <PurchaseForm item={item} />
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

import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import PurchaseForm from '../components/PurchaseForm';

function PurchasingPage() {
    const location = useLocation();
    const item = location.state?.item; // ✅ Receive the passed item

    if (!item) {
        return <h2 style={{ textAlign: "center", marginTop: "20px" }}>No item selected for purchase.</h2>;
    }

    return (
        <div>
            <div className='content-wrapper'>
                <div className='form-card'>
                    <div className="purchase-card">
                        <img src={item.image} alt={item.title} className="item-image" />
                        <div className="item-info">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-price"><strong>Price:</strong> ${item.price}</p>
                            <p className="item-description">{item.description}</p>
                        </div>
                    </div>

                    <PurchaseForm item={item} />
                </div>
            </div>
        </div>
    );
}

export default PurchasingPage;

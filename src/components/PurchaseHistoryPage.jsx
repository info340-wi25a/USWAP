import React, { useState, useEffect } from "react";

const PurchaseHistoryPage = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    const storedPurchases = JSON.parse(localStorage.getItem("purchasedItems")) || [];
    setPurchasedItems(storedPurchases);
  }, []);

  return (
    <div className="purchase-history-container">
      <h2>Purchase History</h2>
      {purchasedItems.length === 0 ? (
        <p>You have not purchased any items yet.</p>
      ) : (
        <ul className="purchase-items">
          {purchasedItems.map(item => (
            <li key={item.id} className="purchase-item">
              <img src={item.image} alt={item.title} />
              <span>{item.title} - ${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchaseHistoryPage;

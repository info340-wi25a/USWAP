import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

const PurchaseHistoryPage = () => {
  const [purchasedItems, setPurchase] = useState([]);
  const auth = getAuth()
  const user = auth.currentUser;

  useEffect(() => {
      if (!user) return;
    
      const db = getDatabase();
      const purchaseRef = ref(db, `users/${user.uid}/purchaseHistory`);
    
      onValue(purchaseRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const purchaseArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setPurchase(purchaseArray);
        } else {
          setsetPurchase([]);
        }
      });
    
    }, [user]);

  return (
    <div className="purchase-history-container">
      <h2>Purchase History</h2>
      {purchasedItems.length === 0 ? (
        <p>You have not purchased any items yet.</p>
      ) : (
        
        <ul className="purchase-items">
          {purchasedItems.map(item => (
            <li key={item.id} className="purchase-item">
              <img src={item.imageUrl} alt={item.title} />
              <span>{item.title} - ${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchaseHistoryPage;

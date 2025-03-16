import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 


  const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
  
    const db = getDatabase();
    const wishlistRef = ref(db, `users/${user.uid}/wishlist`);
  
    onValue(wishlistRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const wishlistArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setWishlist(wishlistArray);
      } else {
        setWishlist([]);
      }
    });
  
  }, [user]);  

 
    const removeFromWishlist = (itemId) => {
    if (!user) return;

    const db = getDatabase();
    const itemRef = ref(db, `users/${user.uid}/wishlist/${itemId}`);

    remove(itemRef)
      .then(() => {
        console.log("Item removed from wishlist");
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };

  const  clearWishlist = () => {
    if (!user) return;

    const db = getDatabase();
    const wishlistRef = ref(db, `users/${user.uid}/wishlist`);

    remove(wishlistRef)
      .then(() => {
        console.log("Wishlist cleared");
      })
      .catch((error) => {
        console.error("Error clearing wishlist:", error);
      });
  };

  const handleAddToCart = (item, event) =>  {
    event.stopPropagation(); 
    navigate("/purchase", { state: { item } });
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="wishlist-items">
          {wishlist.map((item) => (
            <li key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.title} />
              <span>{item.title} - ${item.price}</span>
              <div className="button-container">
              <button onClick={(e) => handleAddToCart(item, e)} className="add-to-cart button-primary">
                    Buy Now
              </button>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {wishlist.length > 0 && (
        <button onClick={clearWishlist} className="clear-wishlist">
          Clear Wishlist
        </button>
      )}
    </div>
  );
};

export default WishlistPage;

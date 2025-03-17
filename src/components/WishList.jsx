import { getDatabase, ref, get, set,push } from "firebase/database";
import { getAuth } from "firebase/auth";

  async function addToWishlist(item) {
    const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert("You need to be logged in to add items to your wishlist.");
    return;
  }

  const db = getDatabase();
  const wishlistRef = ref(db, `users/${user.uid}/wishlist`);

  try {
    // Fetch existing wishlist items
    const snapshot = await get(wishlistRef);
    if (snapshot.exists()) {
      const wishlistItems = snapshot.val();
      
      // Check if the item is already in the wishlist
      const itemExists = Object.values(wishlistItems).some(
        (wishlistItem) => wishlistItem.title === item.title
      );

      if (itemExists) {
        alert("This item is already in your wishlist!");
        return; // Prevent duplicate addition
      }
    }

    const newItemRef = push(wishlistRef);
    const newItemKey = newItemRef.key;

    // Store the item with its Firebase-generated key as `id`
    await set(newItemRef, { ...item, id: newItemKey });

    alert("Item added to wishlist!");
  } 
   catch (error) {
    console.error("Error updating wishlist:", error);
    alert("Failed to update wishlist. Please try again.");
  }
};

export default addToWishlist;

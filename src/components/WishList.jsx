import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth } from "firebase/auth";

const addToWishlist = async (item) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert("You need to be logged in to add items to your wishlist.");
    return;
  }

  const db = getDatabase();
  const userWishlistRef = ref(db, `users/${user.uid}/wishlist`);

  try {
    const snapshot = await get(userWishlistRef);
    let wishlist = snapshot.exists() ? snapshot.val() : [];

    if (!wishlist.some((wishItem) => wishItem.id === item.id)) {
      wishlist.push({
        title: item.title,
        price: item.price,
        condition: item.condition,
        category: item.category,
        contact: item.contact,
        imageUrl: item.imageUrl,
      });

      // Update the wishlist in Firebase
      await set(userWishlistRef, wishlist);
      alert(`${item.title} added to wishlist!`);
    } else {
      alert(`${item.title} is already in your wishlist!`);
    }

  } catch (error) {
    console.error("Error updating wishlist:", error);
    alert("Failed to update wishlist. Please try again.");
  }
};

export default addToWishlist;

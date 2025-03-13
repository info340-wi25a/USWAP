import { getDatabase, ref, get, set, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

const addToPurchaseHistory = async (item) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert("You need to be logged in to add items to your Purchase History.");
    return;
  }

  const db = getDatabase();
  const userPurchaseHistoryRef = ref(db, `users/${user.uid}/purchaseHistory`);
  const itemRef = ref(db, `items/${item.id}`);

  try {
    const snapshot = await get(userPurchaseHistoryRef);
    let purchaseHistory = snapshot.exists() ? Object.values(snapshot.val()) : [];

    if (!purchaseHistory.some((purchaseItem) => purchaseItem.id === item.id)) {
      purchaseHistory.push({
        title: item.title,
        price: item.price,
        condition: item.condition,
        category: item.category,
        contact: item.contact,
        imageUrl: item.imageUrl,
      });

      // Update the purchaseHistory in Firebase
      await set(userPurchaseHistoryRef, purchaseHistory);

      await remove(itemRef);
    }

  } catch (error) {
    console.error("Error updating purchaseHistory:", error);
    alert("Failed to update purchaseHistory. Please try again.");
  }
};

export default addToPurchaseHistory;

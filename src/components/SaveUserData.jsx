import { getDatabase, ref, set, update, get } from 'firebase/database';

const saveUserData = (user) => {
  const db = getDatabase();
  const userRef = ref(db, 'users/' + user.uid);

  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        // user exists
        const existingData = snapshot.val();
        update(userRef, {
          username: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
          createdAt: existingData.createdAt || new Date().toISOString(),
          wishlist: existingData.wishlist || [],
          purchaseHistory: existingData.purchaseHistory || [],
        })
          .then(() => {
            console.log('User data updated successfully!');
          })
          .catch((error) => {
            console.error('Error updating user data:', error);
          });
      } else {
        // new user
        set(userRef, {
          username: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
          createdAt: new Date().toISOString(),
          wishlist: [],
          purchaseHistory: [],
        })
          .then(() => {
            console.log('User data saved successfully!');
          })
          .catch((error) => {
            console.error('Error saving user data:', error);
          });
      }
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
};

export default saveUserData;
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const saveUserData = (user) => {
  const db = getDatabase();
  const userRef = ref(db, 'users/' + user.uid);

  set(userRef, {
    username: user.displayName,
    email: user.email,
    profilePicture: user.photoURL,
    createdAt: new Date().toISOString(),
  })
    .then(() => {
      console.log('User data saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving user data:', error);
    });
};

export default saveUserData;
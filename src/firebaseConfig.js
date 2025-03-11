// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAOFTzTKPchZlBdPYXEcfVqqJz3lrTTpHU",
  authDomain: "dubswap-b970a.firebaseapp.com",
  databaseURL: "https://dubswap-b970a-default-rtdb.firebaseio.com/",
  projectId: "dubswap-b970a",
  storageBucket: "dubswap-b970a.firebasestorage.app",
  messagingSenderId: "941478640364",
  appId: "1:941478640364:web:e291a9a6fe23c0f1a2c3c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
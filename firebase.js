// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2fOIKMW82aIVfu72t3dmXJ3Tz3B2MQU8",
  authDomain: "nourmoqmessenger.firebaseapp.com",
  projectId: "nourmoqmessenger",
  storageBucket: "nourmoqmessenger.firebasestorage.app",
  messagingSenderId: "632554263190",
  appId: "1:632554263190:web:b82f519d4d91913d5128b7",
  measurementId: "G-34KEGY1XFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

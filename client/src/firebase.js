// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4d83f.firebaseapp.com",
  projectId: "real-estate-4d83f",
  storageBucket: "real-estate-4d83f.appspot.com",
  messagingSenderId: "1041128975417",
  appId: "1:1041128975417:web:dce3cc0185bcfc6608f1e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { app, storage };

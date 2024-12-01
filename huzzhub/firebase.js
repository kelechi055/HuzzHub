// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwAWxvj66aa09XwRt_vbjCUeBW8GXHcKw",
  authDomain: "huzzhub.firebaseapp.com",
  projectId: "huzzhub",
  storageBucket: "huzzhub.firebasestorage.app",
  messagingSenderId: "3556355408",
  appId: "1:3556355408:web:a9898374b9842e8647d055",
  measurementId: "G-NNDPP79M5V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Google Auth Provider
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };

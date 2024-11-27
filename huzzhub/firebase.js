// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwAWxvj66aa09XwRt_vbjCUeBW8GXHcKw",
  authDomain: "huzzhub.firebaseapp.com",
  projectId: "huzzhub",
  storageBucket: "huzzhub.firebasestorage.app",
  messagingSenderId: "3556355408",
  appId: "1:3556355408:web:a9898374b9842e8647d055",
  measurementId: "G-NNDPP79M5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
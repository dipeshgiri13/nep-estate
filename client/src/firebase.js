// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nepal-estate.firebaseapp.com",
  projectId: "nepal-estate",
  storageBucket: "nepal-estate.firebasestorage.app",
  messagingSenderId: "902276452442",
  appId: "1:902276452442:web:7fda8716e6e564b291c863",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

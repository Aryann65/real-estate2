// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-70d27.firebaseapp.com",
  projectId: "real-estate-70d27",
  storageBucket: "real-estate-70d27.appspot.com",
  messagingSenderId: "367573641030",
  appId: "1:367573641030:web:cb2d4cd94e265f8f83a747"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

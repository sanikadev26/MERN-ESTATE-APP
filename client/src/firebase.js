// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a9e80.firebaseapp.com",
  projectId: "mern-estate-a9e80",
  storageBucket: "mern-estate-a9e80.appspot.com",
  messagingSenderId: "52894911944",
  appId: "1:52894911944:web:e1663eab235e3ed9e104fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
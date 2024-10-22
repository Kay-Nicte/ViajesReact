// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDCn16s88BJ7OO2hqjgiC95f1GJARPcoQ",
  authDomain: "viajesixa.firebaseapp.com",
  projectId: "viajesixa",
  storageBucket: "viajesixa.appspot.com",
  messagingSenderId: "450739288146",
  appId: "1:450739288146:web:05e47907c8b1c9f789478b",
  measurementId: "G-L9DV40724B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
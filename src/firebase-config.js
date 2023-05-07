// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrKgRO3Bj_tQe0O_6aeiWKLeMmS4-PFdI",
  authDomain: "where-is-waldo-92b65.firebaseapp.com",
  projectId: "where-is-waldo-92b65",
  storageBucket: "where-is-waldo-92b65.appspot.com",
  messagingSenderId: "503410253499",
  appId: "1:503410253499:web:0d536ade32e7254b8cd39e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmx2IVI874p2J8ukx6skn1M99_XVL5g38",
  authDomain: "fir-web-shop.firebaseapp.com",
  projectId: "fir-web-shop",
  storageBucket: "fir-web-shop.appspot.com",
  messagingSenderId: "956809863194",
  appId: "1:956809863194:web:500bd431cdbba35498f1a3",
  measurementId: "G-JLDGHXD862"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export const collRef = collection(db, 'products')

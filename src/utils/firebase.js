// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7GANLpYIdIWD7gSkQsq6tP4giMVNCbQU",
  authDomain: "mydeveloperportfolio-d2138.firebaseapp.com",
  projectId: "mydeveloperportfolio-d2138",
  storageBucket: "mydeveloperportfolio-d2138.appspot.com",
  messagingSenderId: "651901787130",
  appId: "1:651901787130:web:cbb6767f9a96257017a243",
  measurementId: "G-PQHW4XJQK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
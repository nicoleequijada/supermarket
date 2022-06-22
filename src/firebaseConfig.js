// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqepimjOFN5CY2NoONnohDA5LdhyGYcEY",
  authDomain: "supermarket-b3608.firebaseapp.com",
  projectId: "supermarket-b3608",
  storageBucket: "supermarket-b3608.appspot.com",
  messagingSenderId: "381919387039",
  appId: "1:381919387039:web:0407e97dc1731a096cf1aa",
  measurementId: "G-ZZB3Z2EHY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);